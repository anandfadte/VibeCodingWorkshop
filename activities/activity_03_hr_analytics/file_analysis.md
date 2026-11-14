# Validate
> An HR dashboard with the wrong RAG thresholds does not just look wrong — it gives the ExCo the wrong signal about which departments need action. Thirty seconds of validation prevents a 30-minute meeting derailment.

## scenario

You have a crafted prompt with specific attrition figures, RAG thresholds, and department data. Before you fire it in Claude, Copilot, or Cursor, paste it into ChatGPT or Gemini and ask it to validate the prompt.

Here is what goes wrong in HR dashboard prompts when this step is skipped:

The AI defaults to Tailwind colour classes (`bg-red-600`, `bg-yellow-500`) instead of your exact hex codes. The result looks RAG-coloured but is not your defined palette. In a leadership presentation, this reads as "the developer made generic choices" — not "this was designed for us."

The AI uses the same threshold for all metrics. If your prompt says "show Red if bad" without defining "bad", Technology & Digital at 21.2% and Finance at 11.3% get the same visual treatment — the entire point of the dashboard is lost.

The quarterly trend chart renders with an auto-scaled y-axis. Q1 3.8% and Q3 4.7% look dramatically different on a 3.5%–5% axis, and completely flat on a 0%–25% axis. Neither is right. Your prompt must specify the y-axis range.

## context

What to check in an HR analytics prompt:

**RAG threshold precision** — are the thresholds named as numbers (">18% = Red") or left vague ("Red if high")? The AI cannot infer what "high attrition" means without a number.

**Exact hex codes vs class names** — does your prompt specify `#DC2626` or `bg-red-600`? These produce different colours. If you used the colour names from the stack card, check they appear in the prompt text, not just in a mental note.

**The $12.8M figure** — is this in your headline scorecard specification? This is the number that makes the ExCo sit up. If it is in the data file but not in your prompt, the dashboard will not surface it prominently.

**Engagement view toggle** — if you specified an Alpine.js toggle between attrition and engagement views, did you define the engagement thresholds too? A toggle with undefined behaviour on one view produces an error or empty state.

**Quarterly trend y-axis** — did you specify the axis range? If not, name it now: 0%–6% gives the right context for quarterly attrition data.

## do_this

Paste your full prompt into ChatGPT or Gemini with this validation request:

## prompt

You are reviewing a build prompt for an HR analytics dashboard. Do not write any code. Check the prompt for these issues and list any you find:

1. RAG THRESHOLD CLARITY: Are the RAG thresholds defined as specific numbers (e.g., ">18% = Red")? Or are they described vaguely ("red if bad", "highlight critical")? List any metric where the threshold is ambiguous.

2. COLOUR SPECIFICITY: Does the prompt use exact hex codes (#DC2626, #D97706, #16A34A) for the RAG colours, or Tailwind class names that may produce different shades? Flag any colour reference that is not an exact hex code.

3. KEY METRIC VISIBILITY: Is the $12.8M attrition cost figure explicitly mentioned as a headline metric? If it appears only in the data section but not in the layout specification, flag this — it may not appear prominently in the output.

4. CHART SPECIFICATION: For the quarterly trend chart, is the y-axis range specified? If not, the chart will auto-scale, which can either exaggerate or flatten the Q3 spike.

5. INTERACTIVITY COMPLETENESS: If a view toggle is specified (attrition vs engagement), are both views fully defined with their own thresholds and colour logic? Flag any toggle state that lacks a threshold definition.

After checking, give me: (a) a prioritised list of gaps, (b) one specific rewrite I should make to the highest-priority gap.

[PASTE YOUR FULL PROMPT HERE]

## checkpoint

Before moving to Build:
- RAG thresholds are defined as specific numbers in your prompt
- All three hex codes (#DC2626, #D97706, #16A34A) appear as exact values in your prompt
- The $12.8M figure is in your headline scorecard specification
- The quarterly trend y-axis range is specified (0%–6%)
- You made at least one change based on the validation output
