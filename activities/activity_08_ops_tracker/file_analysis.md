# Validate
> Paste your prompt into a neutral AI. Ask it to find gaps — not build. 5 minutes here saves 15 minutes of iteration later.

## scenario

You have a complete, deepened portfolio tracker prompt. Before firing it in Claude, run it through a neutral AI — Gemini, Microsoft Copilot, or ChatGPT — and ask it to review the prompt, not build from it.

For a project tracker, the most common gap is a risk description that is accurate but does not tell the reader what to do — Priya needs to know not just what is wrong with P003 and P010, but what action she should take before the next review.

## do_this

1. Open Gemini (or Copilot) in a new tab — not Claude
2. Paste your full prompt
3. Add this review instruction at the very top:

---
Review the following project portfolio tracker build prompt. Do not build anything. Identify:
1. Any [PLACEHOLDER] I forgot to replace with a real value
2. Any Red project escalation card that describes a problem but does not name an action owner or a decision deadline
3. Any budget consumption figure above 85% that appears in the prompt but has no warning indicator or alert associated with it
4. One specific improvement to make the tracker more useful for a VP who has 5 minutes to review before a meeting

[PASTE YOUR FULL PROMPT HERE]
---

4. Read the review. Apply any fix that takes under 60 seconds.
5. One pass only — do not iterate endlessly here.

## checkpoint

Before moving to Build:
- Prompt reviewed by a neutral AI (Gemini or Copilot — not Claude)
- P003 and P010 escalation cards each name an action owner
- Budget bars are explicitly coded red when > 85% consumed
- One improvement applied, or confirmed none needed
- Full prompt is copied and ready to paste in Claude
