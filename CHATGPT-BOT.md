# ChatGPT PR bot

This repository includes a GitHub Action and helper script that:

- Automatically summarizes pull requests and lists review-style concerns when a PR is opened or updated.
- Responds to on-demand slash comments on pull requests: `/chatgpt summarize`.

## Setup

Add an OpenAI API key to the repository secrets:

1. Go to GitHub → repository → Settings → Secrets and variables → Actions.
2. Click **New repository secret**.
3. Name it `OPENAI_API_KEY`.
4. Add your OpenAI API key as the value.

Optional: add a repository secret named `MODEL_NAME` to override the default model.

Default model:

`gpt-5.6-luna`

## Behaviour

The bot:

- Uses the OpenAI Responses API.
- Uses low reasoning effort.
- Reviews up to 8 changed files.
- Truncates each patch to about 2000 characters to control API usage.
- Runs automatically when a pull request is opened or updated.
- Runs on demand when a comment on a pull request starts with:

`/chatgpt summarize`

The slash command does not run on normal GitHub Issues.

## Disable or remove

To disable the bot immediately, remove the `OPENAI_API_KEY` repository secret.

To remove the bot permanently, delete:

`.github/workflows/chatgpt-pr-bot.yml`

and

`scripts/pr-summary.js`
