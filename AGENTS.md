# Instructions for any agent or CLI (agy-cli, Claude Code, Codex...)

Read and follow **[GUIDE.md](GUIDE.md)**. It has the one-time setup, the health check, the daily render, how to verify the
output, troubleshooting, and the exact report to send back.

The short version:

```powershell
cd G:\cutaway\video
npm run doctor     # every line OK -> "Ready"
npm run daily      # renders the next 2 reels into G:\cutaway\out\<date>\
```

Rules: your job is to run the pipeline and report. Don't edit scripts, templates, tools or config unless the owner asks.
Never commit `out/`, `music/files/`, `assets/vo/`, `tools/voices/` or `.cutaway-progress.json`, never delete
`.cutaway-progress.json`, never push to `main`, and run the pipeline from only one place at a time.
