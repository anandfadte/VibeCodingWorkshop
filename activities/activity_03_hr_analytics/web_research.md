# Craft
> Your placeholders are filled. Now deepen the prompt — add the specific insights that turn an HR data report into an action agenda for ExCo.

## scenario

You have a filled prompt from Stack. It has the right numbers and the right RAG colors. Now it needs the right narrative — the insight that tells ExCo not just what is happening, but what they should do about it.

This phase adds three layers to your prompt before you fire it.

## context

Look at your filled prompt from Stack. Find these three gaps and add the missing instructions now.

**Gap 1 — The cost headline.** The attrition cost tile exists, but ExCo needs to understand what it means operationally. Add this line to the HEADLINE SCORECARD section:

`Below the attrition cost tile, add a single-line context note: "Every 1% reduction in attrition saves approximately $[calculate: total_attrition_cost ÷ overall_attrition_pct]k. At benchmark (13.5%), annual cost would be $[calculate the benchmark cost]M."`

**Gap 2 — The correlation insight.** The two Red departments (Technology & Digital and Sales & Business Dev) also have the lowest engagement scores — this is the key leadership insight. Add this instruction after the department cards:

`Below the department grid, add an insight callout box: "Attrition and engagement are correlated. The two Red departments also score lowest on engagement (Tech & Digital: [ENG_SCORE], Sales: [ENG_SCORE]). Engagement intervention is the fastest lever before Q2 hiring ramps up."`

**Gap 3 — The hiring table alert.** The 47-day average fill time against a 35-day benchmark is a 34% gap. Add this instruction to the HIRING section:

`In the hiring table, highlight any department fill time more than 10 days above benchmark with an amber row background. Add a footer note: "Every open role at 47-day fill vs 35-day benchmark adds [calculate: (47-35) × daily_cost] in extended recruitment cost per role."`

## do_this

Add all three gaps to your prompt. The result should be 250–300 words total.

Read the completed prompt once before moving to Validate. If you can point to every insight in the prompt and say which ExCo decision it supports, you are ready.

## checkpoint

Before moving to Validate:
- Attrition cost context note added with the benchmark comparison
- Correlation insight callout added after the department grid
- Hiring table has the alert threshold and cost-per-day note
- Prompt is 250–300 words
- Every figure in the prompt traces back to the data file
