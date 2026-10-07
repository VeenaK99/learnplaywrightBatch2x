# Taste

- Asks questions in very short, informal, lowercase one-liners (e.g., "explain ` char", "what is Nan ?", "what is arrow functions", "create a file string which has examples for creating strings using different way") and expects concise, friendly, beginner-friendly explanations in response. Confidence: 0.9
- When asking for code examples, explicitly asks for a "simple example" — wants minimal, self-contained, beginner-level illustrations rather than exhaustive or advanced ones. Confidence: 0.55
- Uses the Google Antigravity IDE (a VS Code-based editor) as their editor, and re-scopes questions to it (e.g., asking for the console.log shortcut "in antigravity" after getting a generic VS Code answer) — expects VS Code-compatible keybindings/snippets to carry over. Confidence: 0.5
- Treats commit-and-push as the natural end of a work session: asks to update the README to reflect new files, then commit and push to the remote (main branch) without wanting to review each step (e.g., one-line "update readme and push code to repo"). Confidence: 0.7
