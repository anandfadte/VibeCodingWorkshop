# Complete Prompt — Campaign Performance Report
> Facilitator reference. All narrative placeholders filled with example answers.
> Fire-ready: attach campaign_analysis.json and paste as-is to test or demo.
> This file is not shown in the platform — it is for facilitator use only.

---

Build a single-file HTML campaign performance report for the Genpact Enterprise Intelligence Suite launch.

AUDIENCE:
The VP Demand Generation is presenting Q3 FY2024 campaign results to the CMO, CFO, and VP Sales at the Q4 planning session; the room needs to make a $1.8M Q4 budget reallocation decision before October 15, 2024, and the decision hinges on whether the Q3 miss at 44.7% opportunity attainment was caused by the wrong channels or the wrong product-market fit.

DATA: Attach campaign_analysis.json to this conversation. Read all spend figures, lead volumes, conversion rates, cost-per-opportunity by channel, and audience segment data directly from the file — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Background #F8FAFC. Primary accent #1D4ED8 (blue). Text #1E293B. Best performer: green #16A34A. Worst performer: red #DC2626. White card surfaces. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png.

CAMPAIGN VERDICT:
Q3 was not a failed campaign — it was a channel-mix failure: the two channels that actually convert enterprise buyers (Executive Roundtables and LinkedIn Paid) delivered 46 of the 67 opportunities on 32% of the budget, while $364,000 spent on Webinars and Email Nurture generated 3 combined opportunities — this is a resource allocation problem, not a product-market fit problem.

THE HEADLINE MISS:
Display opportunities created vs target as the opening hero stat. Source: budget_summary object.
Show attainment %, total spend, and pipeline generated alongside it.
This miss is the reason the room exists — it must be unmissable.

HIDDEN INSIGHT:
Paid Search (Google/Bing) is the channel that looks productive but is a trap: it generated 612 leads — the most of any channel by a large margin — but only 14 opportunities, a lead-to-opportunity rate of 2.3% against Executive Roundtables' 16.2%. The campaign appears to have a lead volume problem in the headline numbers, but the actual problem is that Paid Search is filling the funnel with low-intent leads that consume SDR capacity without converting to revenue, inflating MQL numbers while the channels that reach actual buyers are underfunded.

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
Cut Webinars by $200,000 (from $270k to $70k — keep one flagship event only) and cut Email Nurture by $60,000 (from $94k to $34k — reduce send volume, improve segmentation). Reallocate $260,000: add $160,000 to Executive Roundtables (four additional events, targeting CFO segment exclusively) and $100,000 to LinkedIn Paid (increase CFO/COO audience targeting, reduce CTO segment spend by 40%).

Q4 BET:
Double down on Executive Roundtables targeting exclusively CFO and COO buyers at $1B+ revenue companies — with $160,000 additional budget funding four targeted dinner events in New York, Chicago, London, and Singapore, committing to 35 qualified opportunities from this channel alone, which at the Q3 close rate would generate $11.2M in net-new pipeline.

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
