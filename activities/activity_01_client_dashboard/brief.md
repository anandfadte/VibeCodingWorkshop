# Stack
> Read the brief. Review the design standard. Fill in the prompt placeholders. Exit in 5 minutes with a complete, ready-to-fire prompt.

## scenario

**Client:** Meridian Retail Group
**Deliverable:** Single-file interactive HTML QBR dashboard
**Audience:** Leadership team — quarterly business review, tomorrow
**Your data file:** `q4_performance_data.json`
**Design reference:** `screenshot_1.png` and `screenshot_2.png` in your folder

You are not building anything in this phase. You are setting up: reviewing what you have, understanding the quality bar, and filling in the prompt template below.

## context

Open `screenshot_1.png` and `screenshot_2.png` from your folder. **Treat these like a Figma handoff** — in professional practice, a designer builds the visual first, then hands it to the developer (or AI) and says "build this." That is exactly what you are doing now. Your final dashboard must match this quality before sharing with a client.

Four non-negotiable rules extracted from the standard:

**1. Color** — Primary `#4F46E5` for headlines, tiles, and chart accents. `#F8FAFC` page background. White card surfaces. `#64748B` body text. No other color choices unless specified.

**2. Typography** — Inter font throughout (already in the prompt below). `font-weight: 800` for headline numbers. `font-weight: 500` for card labels and titles. `font-weight: 400` for descriptions. One font, three weights.

**3. Layout** — Scorecard tiles visible at the top without scrolling. Charts in a 2-column grid below. Client table at the bottom. No horizontal scroll at any screen width.

**4. Interactivity** — At least one working interactive element: a region selector, a chart toggle, or a risk filter. A static page saved as HTML is not the deliverable.

## do_this

Open `q4_performance_data.json`. Read it for 3 minutes.

Find each `[PLACEHOLDER]` in the sample prompt below and replace it with the real value from the data file. Each placeholder tells you exactly which field to look in. Do not change the STACK block, the DESIGN line, or the chart structure — only fill in the placeholders.

## prompt

Build a single-file HTML QBR dashboard for [CLIENT_NAME → `company` field in q4_performance_data.json].

STACK — do not change these:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Primary #4F46E5. Background #F8FAFC. White card surfaces. Text #1E293B. Refer to screenshot_1.png and screenshot_2.png for layout and visual standard.

AUDIENCE: [AUDIENCE → `prepared_for` field]

HEADLINE SCORECARD — 4 tiles across the top:
- Revenue: [ACTUAL_REVENUE → `summary.total_revenue`] actual vs [TARGET_REVENUE → `summary.revenue_target`] target — [ATTAINMENT → `summary.revenue_attainment_pct`]% attainment, +[YOY → `summary.yoy_growth_pct`]% YoY
- Active clients: [TOTAL_CLIENTS → `summary.total_active_clients`] total, [NEW_CLIENTS → `summary.new_clients_q4`] new this quarter, [CHURNED → `summary.churned_clients_q4`] churned
- NPS: [NPS_ACTUAL → `summary.net_promoter_score`] actual vs [NPS_TARGET → `summary.nps_target`] target
- Gross margin: [MARGIN_ACTUAL → `summary.gross_margin_pct`]% actual vs [MARGIN_TARGET → `summary.gross_margin_target_pct`]% target

CHARTS — render all four:
1. Monthly revenue vs target — line chart, 12 months Jan–Dec, two series (Actual / Target). Use the `monthly_revenue` array.
2. Regional revenue — horizontal bar chart, [REGION_COUNT → count the `regions` array] regions, show attainment % on each bar.
3. Product mix — donut chart, [PRODUCT_COUNT → count the `products` array] products by revenue share.
4. Client risk table — columns: Rank, Client, Revenue, YoY Growth, NPS, Renewal Risk. Flag [AT_RISK_CLIENT → find the client where `renewal_risk` = "High"] with a red badge. All other clients show green.

PIPELINE — one stat row below the charts:
Q1 FY2025: [PIPELINE_QUALIFIED → `pipeline.total_qualified_pipeline`] qualified vs [PIPELINE_TARGET → `pipeline.target`] target = [COVERAGE → calculate qualified ÷ target, round to 2 decimals]x coverage.

All chart data inline as JS objects — no fetch calls, no external data files. One complete self-contained .html file.

## checkpoint

Before moving to Craft, confirm:
- Every [PLACEHOLDER] replaced with a real value from the data file
- STACK block is unchanged
- Design colors are unchanged
- You have named the at-risk client
- The prompt references screenshot_1.png and screenshot_2.png for visual guidance
