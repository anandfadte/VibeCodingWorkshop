# Validate
> Paste your prompt into a neutral AI. Ask it to find gaps — not build. 5 minutes here saves 15 minutes of iteration later.

## scenario

You have a complete, deepened HR dashboard prompt. Before firing it in Claude, run it through a neutral AI — Gemini, Microsoft Copilot, or ChatGPT — and ask it to review the prompt, not build from it.

For an HR dashboard, the most common gap is an imprecise RAG threshold or a data specification that leaves the AI room to guess. A neutral AI will catch these before you waste a build attempt.

## do_this

1. Open Gemini (or Copilot) in a new tab — not Claude
2. Paste your full prompt
3. Add this review instruction at the very top:

---
Review the following HR dashboard build prompt. Do not build anything. Identify:
1. Any [PLACEHOLDER] I forgot to replace with a real value
2. Any RAG threshold or color definition that is ambiguous or could render incorrectly
3. Any data point in the department cards that the AI would need to guess because I left it out
4. One specific improvement to make the attrition cost story land more clearly for an executive audience

[PASTE YOUR FULL PROMPT HERE]
---

4. Read the review. Apply any fix that takes under 60 seconds.
5. One pass only — do not iterate endlessly here.

## checkpoint

Before moving to Build:
- Prompt reviewed by a neutral AI (Gemini or Copilot — not Claude)
- RAG thresholds have exact hex values for background, border, and chip text
- All five department cards have attrition % and engagement score filled in
- One improvement applied, or confirmed none needed
- Full prompt is copied and ready to paste in Claude
