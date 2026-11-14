# Complete Prompt — Meridian Retail Group QBR Dashboard
> Facilitator reference. All narrative placeholders filled with example answers.
> Fire-ready: attach q4_performance_data.json and paste as-is to test or demo.
> This file is not shown in the platform — it is for facilitator use only.

---

Build a single-file HTML QBR dashboard for Meridian Retail Group.

AUDIENCE:
The CRO is presenting Q4 FY2024 results to the CEO, CFO, and four regional VPs. The room needs to leave with three decisions: whether Q4 constitutes a win despite falling $2.2M short of target, what will be done differently in MEA in Q1, and who owns the Sunrise Distribution renewal before January 31st.

DATA: Attach q4_performance_data.json to this conversation. Read all values, ratios, and client details directly from the file — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Primary #4F46E5. Background #F8FAFC. White card surfaces. Text #1E293B.
Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png exactly.

THE STORY OF THIS QUARTER:
Q4 FY2024 came in at 95.1% attainment — $42.8M against a $45M target, with 8.3% YoY growth confirming the business is still accelerating. MEA underperformed at 90% attainment and one Enterprise client is in active revenue decline with High renewal risk heading into Q1; both issues need immediate owner accountability.

HERO METRIC:
Revenue — the CRO's credibility with the CEO in this room depends on this number. The revenue tile must be visually dominant: larger number, font-weight 800, indigo accent, and physically wider than the other three tiles so it draws the eye before anyone speaks.

SCORECARD — 4 tiles at the top of the page:
Tile 1 — Revenue: actual vs target, attainment %, YoY growth. Apply hero treatment per HERO METRIC above.
Tile 2 — Active Clients: total active, new this quarter, churned this quarter.
Tile 3 — NPS: actual score vs target.
Tile 4 — Gross Margin: actual % vs target %.
Read all values from the data file.

CHARTS — all four required:
1. Monthly revenue vs target — line chart, Jan–Dec, two series (Actual / Target). Source: monthly_revenue array.
2. Regional revenue — horizontal bar chart, one bar per region, attainment % on each bar. Source: regions array.
3. Product mix — donut chart by revenue share. Source: product_mix array.
4. Client risk table — all clients. Columns: Rank | Client | Revenue | YoY Growth | NPS | Risk. Source: top_clients array. Flag the High-renewal-risk client with a red badge and red row highlight.

ALERT CALLOUT:
Sunrise Distribution — $2.6M Enterprise account, revenue down 3.2% YoY, NPS at 51 (14 points below the account portfolio average). High renewal risk. Action required: CRO to schedule executive business review before January 31st. Do not carry this unresolved into Q2.
Display as an amber callout directly below the client table.

PIPELINE — stat row below the charts:
Show qualified pipeline vs Q1 target, coverage ratio, and deals in final stage.
Display a green confidence badge if coverage is above 1.0x.
Read all values from the data file.

ANIMATION — do not change or remove any of these:
- Revenue tile: number counts up from 0 to actual on page load, 2s easeOut
- NPS tile: counts up from 0, 1.5s easeOut
- Pipeline coverage ratio: counts up from 0.00x to actual, 1.8s easeOut
- Monthly line chart: draws left to right on load, 1200ms
- Regional bars: stagger grow-in from base, 100ms offset between each bar
- Product donut: sweeps in clockwise, 900ms
- Scorecard tiles: cascade fade-in left to right, 120ms between each tile
- Alert callout: slides in from the left, 350ms after page load
- Table rows: stagger fade-in, 60ms between rows
- Charts and table sections: fade up when scrolled into view

INTERACTIVITY: Alpine.js region filter — All / North America / Europe / Asia Pacific / Middle East & Africa. Clicking a region filters the client risk table to that region's clients.

One complete self-contained HTML file. All data from the attached JSON file — no hardcoded numbers, no fetch calls.
