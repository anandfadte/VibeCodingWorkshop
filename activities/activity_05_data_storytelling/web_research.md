# Craft
> Build the prompt. Five blanks to fill — all require business judgment, not data lookup.

## context
The AI will read all numbers from **campaign_q3_results.xlsx** (4 sheets: Campaign Summary, Channel Performance, Monthly Trend, Audience Segments). The **q4_budget_brief.pdf** gives the Q4 budget envelope and pre-committed channels — read it too. Your job is to supply what the data files cannot: who is making the budget decision, what story the data tells beyond the headline miss, and where the Q4 money should go.

## do_this
Read the five placeholders. Write your answers directly into the prompt below.

## prompt
Build a single-file HTML campaign performance report for the Genpact Enterprise Intelligence Suite launch.

AUDIENCE:
[WHO_IS_IN_THE_ROOM → one sentence: who is presenting this, to whom, and what is the decision the room needs to make? Name the budget figure being decided and the deadline.]

DATA: Attach campaign_q3_results.xlsx, q4_budget_brief.pdf, screenshot_1.png, screenshot_2.png, and genpact_logo.png to this conversation. Read all spend figures, lead volumes, conversion rates, and cost-per-opportunity by channel directly from campaign_q3_results.xlsx — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Background #F8FAFC. Primary accent #1D4ED8 (blue). Text #1E293B. Best performer: green #16A34A. Worst performer: red #DC2626. White card surfaces. Embed genpact_logo.png in the report header. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png exactly.

CAMPAIGN VERDICT:
[CAMPAIGN_VERDICT → One sentence: was this a failed campaign or a learning campaign, and why? Do not simply say "we missed target" — give the nuanced verdict that sets up the budget reallocation conversation.]

THE HEADLINE MISS:
Display opportunities created vs target as the opening hero stat. Source: budget_summary object.
Show attainment %, total spend, and pipeline generated alongside it.
This miss is the reason the room exists — it must be unmissable.

HIDDEN INSIGHT:
[HIDDEN_INSIGHT → What is the non-obvious finding that shifts the story beyond the headline miss? Look at the relationship between lead volume and opportunity creation across channels. One channel looks productive on the surface but is a trap. Name it and explain the finding in two sentences.]

CHANNEL PERFORMANCE SECTION — the central visual of this report:
Horizontal bar chart sorted by cost per opportunity, lowest to highest. Source: channels array.
The gap between best ($12,917) and worst ($270,000) is the data story — make it visually dramatic.
Label each bar with channel name, spend, opportunities, and cost per opportunity.
Colour: best performer green, worst performer red, others blue.
Below the chart: a second view showing leads generated vs opportunities created by channel — same channels, two bars each. This shows which channels produce volume vs quality.

AUDIENCE SEGMENT PERFORMANCE:
Show lead-to-opportunity conversion rate by segment. Source: audience_segments array.
Highlight the best-converting segment and state its deal size. 

CONVERSION FUNNEL:
Impressions → Clicks → Leads → MQLs → SQLs → Opportunities, with drop-off % at each stage.
Source: conversion_funnel object.

MONTHLY TREND:
Line chart: spend, leads, and opportunities by month (Jul / Aug / Sep). Source: monthly_performance array.

BUDGET REALLOCATION:
[BUDGET_REALLOCATION → For Q4: which channels should receive more budget and how much, which channels should be cut and by how much? Name specific figures. The total reallocation must be budget-neutral — money cut from one channel funds the increase in another.]

Q4 BET:
[Q4_BET → What is the single biggest campaign bet for Q4? One sentence: channel, audience, format, and the opportunity number you are committing to.]

ANIMATION — do not change or remove any of these:
- Opportunity attainment %: counts up from 0 to actual on page load, 2s easeOut (the miss lands with impact)
- Total spend: counts up from $0 to actual, 1.8s easeOut
- Pipeline ROI multiple: counts up from 0x to actual, 1.5s easeOut
- Channel bars: stagger grow-in left to right, 100ms between bars, green/red colours fade in with bars
- Leads vs opportunities dual-bar: stagger, 80ms between channel groups
- Conversion funnel stages: cascade fill top to bottom, 150ms between stages
- Monthly trend lines: draw left to right simultaneously, 1200ms
- Audience segment bars: stagger, 100ms between bars
- Recommendation cards: cascade slide-up, 200ms between cards
- Section headers: fade in as sections enter viewport

INTERACTIVITY: Alpine.js — toggle between two views on the channel section: "Cost per Opportunity" and "Lead Quality" (leads vs opportunities). One button, same data, different story.

One complete self-contained HTML file. All data from the attached JSON file — no hardcoded numbers, no fetch calls.

## checkpoint
Your prompt is ready when:
- [ ] You named the budget figure being decided and the deadline
- [ ] Your verdict is nuanced — not just "we missed" but why it matters and what it means
- [ ] You identified the hidden insight (the channel that looks good on volume but fails on quality)
- [ ] Your budget reallocation names specific figures that net to zero
- [ ] Your Q4 bet commits to a specific opportunity number
