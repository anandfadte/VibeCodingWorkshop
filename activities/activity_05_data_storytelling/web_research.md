# Craft
> Build the prompt. Five blanks to fill — all require budget judgment, not data lookup. The AI reads every number from the file.

## context

The AI will read all figures from **campaign_q3_results.xlsx** (4 sheets: Campaign Summary, Channel Performance, Monthly Trend, Audience Segments). The **q4_budget_brief.pdf** gives the Q4 budget envelope and pre-committed channels. Attach **screenshot_1.png**, **screenshot_2.png**, and **genpact_logo.png** alongside. Your job is to supply the five things the data cannot: the nuanced campaign verdict, the hidden insight about channel quality vs volume, where the Q4 money should go, what the single biggest bet is, and what story this data tells about the room's decision.

## do_this

Read the five placeholders. Write your answers directly into the prompt. When every blank is filled and the DESIGN KIT and ANIMATION blocks are unchanged, you are ready to fire.

## prompt

Build a single-file HTML campaign performance report for the Genpact Enterprise Intelligence Suite launch.

AUDIENCE:
[WHO_IS_IN_THE_ROOM → one sentence: who is presenting, to whom, and what is the decision the room needs to make? Name the budget figure being decided and the deadline.]

DATA: Attach campaign_q3_results.xlsx, q4_budget_brief.pdf, screenshot_1.png, screenshot_2.png, and genpact_logo.png to this conversation. Read all spend figures, lead volumes, conversion rates, and cost-per-opportunity by channel directly from campaign_q3_results.xlsx — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Background #F8FAFC. Primary accent #1D4ED8 (blue). Text #1E293B. Best performer: green #16A34A. Worst performer: red #DC2626. White card surfaces. Embed genpact_logo.png in the report header. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png exactly.

CAMPAIGN VERDICT:
[CAMPAIGN_VERDICT → One sentence: was this a failed campaign or a learning campaign, and why? Do not simply say "we missed target" — give the nuanced verdict that sets up the budget reallocation conversation.]

THE HEADLINE MISS — opening hero stat:
Display opportunities created vs target as the opening hero stat. Source: Campaign Summary sheet.
Show attainment %, total spend, and pipeline generated alongside it.
This miss is the reason the room exists — it must be unmissable.

HIDDEN INSIGHT:
[HIDDEN_INSIGHT → What is the non-obvious finding that shifts the story beyond the headline miss? Look at the relationship between lead volume and opportunity creation across channels in the Channel Performance sheet. One channel looks productive on the surface but is a trap. Name it and explain the finding in two sentences.]

CHANNEL PERFORMANCE SECTION — the central visual of this report:
Horizontal bar chart sorted by cost per opportunity, lowest to highest. Source: Channel Performance sheet.
The gap between best and worst CPO is the data story — make it visually dramatic.
Label each bar with channel name, spend, opportunities, and cost per opportunity.
Colour: best performer green, worst performer red, others blue.
Below the chart: a second view showing leads generated vs opportunities created by channel — same channels, two bars each.

SIMULATION — place this AFTER the channel performance section and BEFORE the audience segments:
Build an interactive "What-If: Reallocate to Best Channel" panel using Alpine.js.
- A slider: "Executive Roundtable budget ($k)" ranging from 180 (min) to 500 (max), default 180.
- Show the current value: "Roundtable budget: $XXXk" updates in real time.
- As the slider moves, recalculate and update live: (a) projected opportunities from roundtables, (b) projected total opportunities, (c) projected cost per opportunity.
- Formula (all source values read from Channel Performance sheet): roundtable_opps = round(budget_k / cpo_roundtables * 1000); other_opps = total_q3_opps − baseline_roundtable_opps; total_opps = roundtable_opps + other_opps; proj_cpo = round(total_spend_usd / total_opps).
- Display as 3 updating stat tiles: "Roundtable Opps", "Total Projected Opps", "Projected CPO ($)".
- Label the panel: "What-If: Reallocate to Executive Roundtables".
- Sub-label: "Keeping total Q4 budget flat — reallocating from Trade Shows and Webinars."
- Use blue #1D4ED8 for the slider and green for the opportunity tiles.

AUDIENCE SEGMENT PERFORMANCE:
Show lead-to-opportunity conversion rate by segment. Source: Audience Segments sheet.
Highlight the best-converting segment and state its average deal size.

BUDGET REALLOCATION:
[BUDGET_REALLOCATION → For Q4: which channels should receive more budget and how much, which should be cut and by how much? Name specific figures from q4_budget_brief.pdf. The total reallocation must be budget-neutral.]

Q4 BET:
[Q4_BET → What is the single biggest campaign bet for Q4? One sentence: channel, audience, format, and the opportunity number you are committing to.]

MONTHLY TREND:
Line chart: spend and opportunities by month (Jul / Aug / Sep). Source: Monthly Trend sheet.

ANIMATION — do not change or remove any of these:
- Opportunity attainment %: counts up from 0 to actual on page load, 2.2s easeOut — this is the hero counter, the miss must land with impact
- All other KPI stats: 150ms fade-in, stagger 80ms apart
- Simulation stat tiles: 150ms fade-in on page load, then instant update as slider moves
- Channel bars: 150ms grow-in, stagger 60ms apart, green/red colours fade in with bars
- Leads vs opportunities dual-bar: 150ms stagger, 60ms between channel groups
- Audience segment bars: 150ms stagger, 80ms between bars
- Recommendation cards: 150ms cascade slide-up, 150ms between cards
- Monthly trend lines: 150ms draw left to right
- Section headers: 150ms fade in as sections enter viewport

INTERACTIVITY: Alpine.js — toggle between two views on the channel section: "Cost per Opportunity" and "Lead Quality" (leads vs opportunities). One button, same data, different story.

One complete self-contained HTML file. All data from the attached Excel file — no hardcoded numbers, no fetch calls. Output the complete HTML file in one code block. Do not add explanation before or after. Do not truncate. Do not ask if I want to continue.

## checkpoint

Your prompt is ready when:
- [ ] You named the budget figure being decided and the deadline
- [ ] Your verdict is nuanced — not just "we missed" but why it matters and what it means
- [ ] You identified the hidden insight (the channel that looks good on volume but fails on quality)
- [ ] Your budget reallocation names specific figures from the Q4 brief that net to zero
- [ ] Your Q4 bet commits to a specific opportunity number
- [ ] All files are attached: xlsx + pdf + 2 screenshots + logo
