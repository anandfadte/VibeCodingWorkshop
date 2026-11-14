# Craft
> Read the data file first. The prompt you write should name specific numbers, fields, and chart types — not describe a generic dashboard.

## scenario

Open `q4_performance_data.json`. Before you write your prompt, spend 3 minutes reading the data. What story does it tell? What does the leadership team need to see first?

Here is what the file contains for Meridian Retail Group, Q4 FY2024:

- Revenue: **$42.8M actual vs $45M target — 95.1% attainment**, 8.3% YoY growth
- 4 regions: North America leads ($18.2M, 95.8% attainment). Middle East & Africa is the weakest at 90% attainment.
- 4 products: Enterprise Analytics leads at 36% share and 12.3% growth
- 10 clients listed. Sunrise Distribution (rank 4) has −3.2% YoY growth, NPS 51, **High renewal risk** — this is the only Red flag in the portfolio
- Q1 FY2025 pipeline: $61.2M qualified vs $48M target — **1.28x coverage**

The audience is a leadership team in a QBR. They need: headline performance at a glance, regional breakdown, the Sunrise Distribution risk visible without having to search for it, and the Q1 pipeline confidence story.

## context

A vague prompt produces generic output: a placeholder dashboard with made-up numbers and generic blue bar charts. A specific prompt names the actual data and gets an accurate dashboard on the first build attempt.

The difference is the **prompt scaffold**. Use it. Fill in the blanks from the data you just read. Every `[bracket]` is something you replace with real content from the file.

What makes a prompt specific:
- Names exact numbers, not categories ("Revenue: $42.8M vs $45M target" not "revenue data")
- Specifies the chart type and the data source ("Monthly revenue vs target — line chart, Jan–Dec, `monthly_revenue` array")
- Calls out the one anomaly that matters ("Flag Sunrise Distribution with a red indicator — it is the only High renewal risk client")
- Anchors the design ("use colour #4F46E5 for primary, not generic indigo or purple")

## do_this

Write your build prompt using the scaffold below as a starting point. Replace every bracketed item with real values from `q4_performance_data.json`. Aim for 150–200 words total — specific, not long.

The goal: a prompt specific enough that someone who has never seen the data file would know exactly what to build.

## prompt

Build a single-file HTML QBR dashboard for Meridian Retail Group, Q4 FY2024.

STACK — paste your stack card from Phase 1 here.

AUDIENCE: Leadership team, quarterly business review.

HEADLINE SCORECARD (four tiles at the top):
- Revenue: $42.8M actual vs $45M target, 95.1% attainment, +8.3% YoY
- Active clients: 847 total, 31 new, 8 churned
- NPS: 67 actual vs 65 target — above target
- Gross margin: 38.4% actual vs 40.0% target

CHARTS — render all four:
1. Monthly revenue vs target — line chart, 12 months Jan–Dec 2024, two series (actual / target)
2. Regional revenue — horizontal bar chart, 4 regions, show attainment % on each bar
3. Product mix — donut chart, 4 products by revenue share
4. Top 10 clients — data table with columns: Rank, Client, Segment, Revenue, YoY Growth, NPS, Renewal Risk. Flag Sunrise Distribution with a red indicator — it is the only High renewal risk client.

DESIGN: Inter font. Primary colour #4F46E5. White cards on #F8FAFC background. All chart data inline as JS objects — no fetch calls, no external data files.

OUTPUT: One complete, self-contained .html file.

## tip

The bracket replacements are the whole exercise. If you copy the scaffold without filling in real numbers, the AI produces a dashboard with made-up data. The goal is to arrive at the Validate phase with a prompt so specific that there is almost nothing left for the AI to guess.
