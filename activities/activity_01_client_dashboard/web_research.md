# Craft
> Build the prompt. Five blanks to fill — all require business judgment, not data lookup. The AI reads the numbers from the file. You provide the context only a human can.

## context

Your prompt template is below. When you fire it, attach `meridian_q4_data.xlsx` to the conversation — the AI will read every figure, calculation, and client detail directly from the file (4 sheets: Revenue Summary, Monthly Revenue, Client Risk Table, Pipeline).

What you supply are the five things the AI cannot get from a spreadsheet: who is in the room, what story the data tells, which number deserves to dominate, and what action the at-risk client requires. These blanks require judgment, not lookup.

Each `[PLACEHOLDER → description]` tells you what to write and what kind of thinking it requires. The CDN block and animation block are pre-filled — do not change those lines.

## do_this

Read the five placeholders. Write your answers directly into the prompt. When every blank is filled and the CDN and animation blocks are unchanged, you are ready to fire.

## prompt

Build a single-file HTML QBR dashboard for Meridian Retail Group.

AUDIENCE:
[WHO_IS_IN_THE_ROOM → one sentence: who is presenting this, to whom, and what decision does the room need to make after this meeting?]

DATA: Attach meridian_q4_data.xlsx, screenshot_1.png, screenshot_2.png, and genpact_logo.png to this conversation. Read all values, ratios, and client details directly from meridian_q4_data.xlsx — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Primary #4F46E5. Background #F8FAFC. White card surfaces. Text #1E293B. Embed genpact_logo.png in the dashboard header. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png exactly.

THE STORY OF THIS QUARTER:
[QUARTER_STORY → 2 sentences. What happened this quarter? What went well, what fell short, and what needs immediate attention? Write this after reading the data file — this frames how the AI will emphasise and label the data.]

HERO METRIC:
[HERO_RATIONALE → Which scorecard tile should visually dominate — larger number, bolder treatment, indigo accent? Name it and explain in one sentence why it matters most to the specific audience above.]

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
[ALERT_ACTION → Write the specific action statement for the at-risk client you found in the data. Name the client. State the risk in numbers — revenue figure, YoY decline %, NPS score. Say what action is needed and by when. This appears as an amber callout directly below the client table.]

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

## checkpoint

Before firing:
- All five narrative blanks filled with your own words
- CDN block and animation block are unchanged
- You have named the at-risk client in your ALERT_ACTION with specific numbers
- q4_performance_data.json is ready to attach when you open your AI tool
