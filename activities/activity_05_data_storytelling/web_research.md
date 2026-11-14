# Craft
> A prompt that says "show campaign performance" produces a data table. One that says "Executive Roundtables at $12,917 per opportunity must be the tallest green bar; Webinars at $270,000 per opportunity must be the shortest red bar" produces a decision document.

## scenario

You have read the data file. Here is what it tells you:

**The situation**: $1.724M spent across 6 channels. 1,847 leads generated. 450 MQLs. 67 opportunities vs a target of 150. That is 44.7% opportunity attainment. The story is not what happened — it is why, and what to do about it.

**The channel breakdown** — this is the core of your prompt:

| Channel | Spend | Leads | Opps | Cost/Opp | Verdict |
|---|---|---|---|---|---|
| Executive Roundtables | $155,000 | 89 | 12 | $12,917 | **Best** |
| Account-Based Marketing | $423,000 | 234 | 28 | $15,107 | Good |
| Digital Advertising | $312,000 | 687 | 18 | $17,333 | Moderate |
| Content Marketing | $298,000 | 445 | 7 | $42,571 | Poor |
| Partner Events | $198,000 | 203 | 2 | $99,000 | Poor |
| Webinars | $338,000 | 189 | 1 | $270,000 | **Worst** |

**The conversion funnel**: 1,847 leads → 450 MQLs (24.4%) → 183 SALs (40.7%) → 67 SQLs/opps (36.6%) → 11 closed (16.4%)

**The segment story**: CFO segment 5.0% lead-to-opp rate vs 3.2% overall average. VP Operations 4.1%. Mid-market ($100M–$500M) 3.8% vs enterprise ($500M+) 2.1%. The data says go upmarket to the CFO in mid-market — that is the recommendation your dashboard should surface.

**The monthly trend**: January $98K → peak March $187K → trough May $89K → recovery August $156K. Spend does not correlate with pipeline — the story is that March spend produced the worst pipeline month.

## context

A campaign performance report has a specific narrative arc: here is what we spent → here is what we got → here is why the gap exists → here is the recommendation. Your prompt must specify this arc explicitly, or the AI will produce a data summary instead of a story.

The two charts that make this report work:
1. **Cost-per-opportunity bar chart** — sorted from lowest (best) to highest (worst), with Executive Roundtables green and Webinars red. This is the single chart that tells the whole story.
2. **Conversion funnel** — a horizontal bar or funnel chart showing the four-stage drop-off. The 36.6% SQL conversion rate is the leakiest stage — it needs to be visible.

## do_this

Use the prompt scaffold below. Replace every `[BRACKET]`. The cost-per-opportunity values are the most important data in this report — make sure each one is correct from your data file.

## prompt

Build a single-file HTML campaign performance report for Genpact Enterprise Intelligence Suite launch — Q4 marketing leadership review.

[PASTE STACK CARD HERE]

HEADLINE SUMMARY — top of page, three metric cards:
- Total spend: $[total]M | Pipeline generated: $[pipeline]M | Pipeline-to-spend ratio: [ratio]x
- Opportunities: [actual] of [target] target ([pct]% attainment) — show in amber if < 70%
- Best channel: Executive Roundtables $[cost]/opp | Worst channel: Webinars $[cost]/opp

CHANNEL PERFORMANCE CHART (ApexCharts horizontal bar chart):
Title: "Cost per Opportunity by Channel"
Data — sort from lowest to highest cost/opp:
1. Executive Roundtables: $[12917] — colour: Best performer highlight (#16A34A)
2. Account-Based Marketing: $[15107]
3. Digital Advertising: $[17333]
4. Content Marketing: $[42571]
5. Partner Events: $[99000]
6. Webinars: $[270000] — colour: Worst performer highlight (#DC2626)
Add a vertical reference line at $[avg_cost_per_opp] labelled "Average"

CHANNEL DETAIL CARDS — one card per channel:
Each card: channel name, spend, leads, opps, cost/opp, MoM trend arrow
Flag with colour chip: green (<$20K/opp), amber ($20K–$100K/opp), red (>$100K/opp)

CONVERSION FUNNEL (ApexCharts):
Stages: Leads [1847] → MQLs [450] → SALs [183] → SQLs [67] → Closed [11]
Show conversion rate at each stage. Highlight the lowest conversion stage in amber.

RECOMMENDATIONS SECTION — bottom of page:
Three action cards:
1. "Scale Executive Roundtables" — justify with cost/opp vs average
2. "Pause Webinars" — justify with $[270000]/opp vs [avg]
3. "Target CFO in Mid-Market" — justify with [5.0]% lead-to-opp vs [3.2]% average

## checkpoint

Before moving to Validate:
- All 6 channel cost-per-opportunity figures are in your prompt with exact values
- Executive Roundtables is green and Webinars is red in your chart specification
- The three recommendations reference the specific numbers that justify them
- The conversion funnel has all 5 stages with real figures
