# Validate
> Paste your prompt into a neutral AI tool — ChatGPT, Gemini, or similar — before firing in your build tool. 5 minutes here determines whether the first build attempt is 80% right or 40% right.

## scenario

Your prompt is written. Do not fire it in Claude or Copilot yet.

Open ChatGPT (or Gemini, or any neutral AI — not the tool you are planning to build with). Paste your draft prompt. Then paste the validation check below.

A validated prompt produces output that is close to correct on the first build attempt. An unvalidated prompt produces something generic that takes 4–5 iterations to fix — which burns time and teaches the wrong prompting habits.

## context

Why a neutral AI? Because you are not asking it to build — you are asking it to review. Using a different AI prevents the "just do it" tendency: the tool will not start coding, so you stay in thinking mode.

What you are checking for:

**Gaps the AI would fill with guesses** — fields you referenced without specifying values. If your prompt says "revenue data" but does not give the actual numbers, the AI will invent them.

**Chart spec ambiguity** — chart type, axis labels, data source. "A chart showing monthly revenue" gives the AI three decisions to make. "Monthly revenue vs target — line chart, 12 months Jan–Dec, two series" gives it none.

**Design underspecification** — if you have not given exact hex colours, the AI picks its own. The result is almost always "generic blue and grey."

**The one missing thing** — there is usually one field or section you forgot. The validation check finds it before the build.

## do_this

Paste your draft prompt from Phase 2 into ChatGPT or Gemini. Then paste the validation check below on the next line. Read the five answers. Make at least one change to your prompt before proceeding.

If the response says "this prompt is perfect, nothing to change" — your prompt is probably too vague. A specific, real prompt always has at least one thing that could be sharper.

## prompt

I am about to give this prompt to an AI code builder to generate an HTML dashboard. Before I do, review it for me:

1. Is it specific enough that the AI cannot guess what to put in? List any fields, numbers, or specs it would have to invent.
2. Are the chart specs complete — chart type, data fields, axis labels, series names?
3. Is the design spec precise — exact colours, font family, layout structure?
4. What is the most likely thing to go wrong in the first build attempt, based on this prompt?
5. What is the one change that would most improve the first-attempt accuracy?

Do not rewrite the prompt for me. Just give me the five answers.

[paste your draft prompt here]

## checkpoint

Before moving on:
- You pasted the prompt into a neutral AI (ChatGPT, Gemini, or similar)
- You read the five-point validation feedback
- You made at least one specific change to your prompt based on the feedback
- The revised, sharpened prompt is ready to fire in your build tool
