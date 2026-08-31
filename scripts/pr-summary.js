/**
 * PR summarizer using the OpenAI Responses API.
 *
 * - Triggers: pull_request (opened/synchronize) and issue_comment (created).
 * - Slash command: only runs for comments starting with "/chatgpt summarize"
 *   AND only when the comment is on a pull request.
 * - Limits: includes up to 8 changed files and truncates patches to ~2000
 *   characters each to control prompt size.
 */

const fs = require("fs");
const { getOctokit } = require("@actions/github");
const OpenAI = require("openai");

async function main() {
  try {
    const eventPath = process.env.GITHUB_EVENT_PATH;

    if (!eventPath || !fs.existsSync(eventPath)) {
      console.error("GITHUB_EVENT_PATH not found — exiting.");
      process.exit(0);
    }

    const event = JSON.parse(fs.readFileSync(eventPath, "utf8"));
    const eventName = process.env.GITHUB_EVENT_NAME;
    const repository = process.env.GITHUB_REPOSITORY;

    if (!repository) {
      console.error("GITHUB_REPOSITORY not set — exiting.");
      process.exit(1);
    }

    const [owner, repo] = repository.split("/");

    const githubToken = process.env.GITHUB_TOKEN;

    if (!githubToken) {
      console.error("GITHUB_TOKEN is required.");
      process.exit(1);
    }

    const octokit = getOctokit(githubToken);

    let prNumber;

    if (eventName === "issue_comment") {
      const body =
        event.comment && event.comment.body
          ? event.comment.body.trim()
          : "";

      if (!body.toLowerCase().startsWith("/chatgpt summarize")) {
        console.log("Comment does not request a summary — exiting.");
        return;
      }

      if (!event.issue || !event.issue.pull_request) {
        console.log("Comment is not on a pull request — exiting.");
        return;
      }

      prNumber = event.issue.number;
    }

    if (eventName === "pull_request") {
      prNumber = event.pull_request && event.pull_request.number;
    }

    if (!prNumber) {
      console.log("No pull request found in event payload — exiting.");
      return;
    }

    const { data: pr } = await octokit.rest.pulls.get({
      owner,
      repo,
      pull_number: prNumber,
    });

    const filesResponse = await octokit.rest.pulls.listFiles({
      owner,
      repo,
      pull_number: prNumber,
      per_page: 100,
    });

    const includedFiles = (filesResponse.data || [])
      .slice(0, 8)
      .map((file) => ({
        filename: file.filename,
        status: file.status,
        patch: file.patch ? file.patch.slice(0, 2000) : null,
      }));

    const model = process.env.MODEL_NAME || "gpt-5.6-luna";

    const promptParts = [
      "You are a concise code reviewer.",
      "Produce three sections: SUMMARY, CONCERNS/ISSUES, and SUGGESTED EDITS.",
      "Keep each section short and actionable.",
      "Focus on clarity, bugs, security issues, missing tests, style problems, and possible performance issues.",
      'If nothing significant stands out, say "No major concerns."',
      `PR title: ${pr.title || "(no title)"}`,
      `PR description:\n${pr.body || "(no description)"}`,
      `Changed files included: ${includedFiles.length}`,
    ];

    for (const file of includedFiles) {
      promptParts.push(
        [
          "---",
          `Filename: ${file.filename}`,
          `Status: ${file.status}`,
          "Patch (truncated):",
          file.patch || "(binary file or no patch available)",
        ].join("\n")
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY not set — cannot call OpenAI.");
      process.exit(1);
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await client.responses.create({
      model,
      input: promptParts.join("\n\n"),
      reasoning: {
        effort: "low",
      },
      max_output_tokens: 700,
    });

    const reply = response.output_text || "No response from model.";

    const commentBody = [
      `## ChatGPT PR summary (model: ${model})`,
      "",
      reply,
      "",
      "_This comment was generated automatically. To re-run it, add a comment starting with `/chatgpt summarize` on this PR._",
    ].join("\n");

    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: prNumber,
      body: commentBody,
    });

    console.log(`Posted summary comment on PR #${prNumber}`);
  } catch (error) {
    console.error("Error in PR bot:", error);
    process.exit(1);
  }
}

main();
