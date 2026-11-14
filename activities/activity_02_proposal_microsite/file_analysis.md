# Validate
> Paste your prompt into a neutral AI. Ask it to find gaps — not build. 5 minutes here saves 15 minutes of iteration later.

## scenario

You have a complete, deepened proposal prompt. Before firing it in Claude, run it through a neutral AI — Gemini, Microsoft Copilot, or ChatGPT — and ask it to review the prompt, not build from it.

A neutral AI will catch gaps that are hard to see from inside the prompt: a stakeholder section that makes claims without proof, a ROI number that is not explained, or a competitive argument that is too vague to be convincing.

## do_this

1. Open Gemini (or Copilot) in a new tab — not Claude
2. Paste your full prompt
3. Add this review instruction at the very top:

---
Review the following proposal microsite build prompt. Do not build anything. Identify:
1. Any [PLACEHOLDER] I forgot to replace with a real value
2. Any stakeholder section that makes a claim without naming specific proof or evidence
3. Any ROI or savings figure that appears in the prompt but is not supported by an explanation
4. One specific improvement to make the strongest stakeholder argument even more persuasive

[PASTE YOUR FULL PROMPT HERE]
---

4. Read the review. Apply any fix that takes under 60 seconds.
5. One pass only — do not iterate endlessly here.

## checkpoint

Before moving to Build:
- Prompt reviewed by a neutral AI (Gemini or Copilot — not Claude)
- All three stakeholder sections have named proof, not generic claims
- ROI figures are present and explained in the Section 1 hero
- One improvement applied, or confirmed none needed
- Full prompt is copied and ready to paste in Claude
