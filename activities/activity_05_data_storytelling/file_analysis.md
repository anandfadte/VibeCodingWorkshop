# Validate
> Paste your prompt into a neutral AI. Ask it to find gaps — not build. 5 minutes here saves 15 minutes of iteration later.

## scenario

You have a complete, deepened campaign report prompt. Before firing it in Claude, run it through a neutral AI — Gemini, Microsoft Copilot, or ChatGPT — and ask it to review the prompt, not build from it.

For a campaign report, the most common gap is a channel comparison that shows numbers without naming the decision — a CMO who has to calculate the reallocation themselves will not make a decision in the meeting.

## do_this

1. Open Gemini (or Copilot) in a new tab — not Claude
2. Paste your full prompt
3. Add this review instruction at the very top:

---
Review the following campaign performance report build prompt. Do not build anything. Identify:
1. Any [PLACEHOLDER] I forgot to replace with a real value
2. Any channel in the comparison table where the data would make the CMO ask a follow-up question instead of acting
3. Any recommendation in the prompt that names what to do but not by how much (a recommendation without a number is not a recommendation)
4. One specific improvement to make the Q4 budget reallocation argument more compelling

[PASTE YOUR FULL PROMPT HERE]
---

4. Read the review. Apply any fix that takes under 60 seconds.
5. One pass only — do not iterate endlessly here.

## checkpoint

Before moving to Build:
- Prompt reviewed by a neutral AI (Gemini or Copilot — not Claude)
- Executive Roundtables and Webinars are explicitly named in the recommendations with their CPO figures
- The reallocation recommendation names a specific dollar amount and expected opportunity count
- One improvement applied, or confirmed none needed
- Full prompt is copied and ready to paste in Claude
