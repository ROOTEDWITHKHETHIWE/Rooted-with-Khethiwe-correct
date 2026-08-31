Adds a GitHub Action and Node.js helper that summarizes PRs, lists review-style concerns and suggested edits, and supports an on-demand "/chatgpt summarize" comment (restricted to PR comments).

Files added:
- .github/workflows/chatgpt-pr-bot.yml
- package.json
- package-lock.json
- scripts/pr-summary.js
- CHATGPT-BOT.md

Setup required after merge:
- Add OPENAI_API_KEY as a repository secret (Settings → Secrets and variables → Actions → New repository secret, name OPENAI_API_KEY).
- (Optional) Add MODEL_NAME as a secret to override the default model (gpt-5.6-luna).
