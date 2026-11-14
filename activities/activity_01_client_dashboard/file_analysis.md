# Validate
> Paste your prompt into a neutral AI. Ask it to find gaps — not build. 5 minutes here saves 15 minutes of iteration later.

## scenario

You have a complete, deepened prompt. Before firing it in Claude, run it through a neutral AI — Gemini, Microsoft Copilot, or ChatGPT — and ask it to review the prompt, not build from it.

A neutral AI catches what you cannot see: unfilled placeholders, ambiguous instructions, design conflicts, or chart specifications that will confuse the build AI.

## do_this

1. Open Gemini (or Copilot) in a new tab — not Claude
2. Paste your full prompt
3. Add this review instruction at the very top before your prompt text:

---
Review the following dashboard build prompt. Do not build anything. Identify:
1. Any [PLACEHOLDER] I forgot to replace with a real value
2. Any instruction that is ambiguous or could be interpreted two ways
3. Any information the AI would need to guess because I left it out
4. One specific improvement to make the design instruction clearer

[PASTE YOUR FULL PROMPT HERE]
---

4. Read the review. Apply any fix that takes under 60 seconds.
5. One pass only — do not iterate endlessly here.

## checkpoint

Before moving to Build:
- Prompt reviewed by a neutral AI (Gemini or Copilot — not Claude)
- Any unfilled [PLACEHOLDER] items are corrected
- One improvement applied, or confirmed none needed
- Full prompt is copied and ready to paste in Claude
