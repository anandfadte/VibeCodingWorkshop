# Craft
> Build the prompt. Five blanks to fill — all require business judgment, not data lookup. The AI reads every number from the file.

## context

The AI will read all figures from **meridian_q4_data.xlsx** (4 sheets: Revenue Summary, Monthly Revenue, Client Risk Table, Pipeline). Attach **screenshot_1.png**, **screenshot_2.png**, and **genpact_logo.png** alongside it. Your job is to supply the five things the data cannot: who is in the room, what story the quarter tells, which number is the hero, what action the at-risk client requires, and what the Q1 pipeline picture means.

## do_this

Read the five placeholders. Write your answers directly into the prompt. When every blank is filled and the DESIGN KIT and ANIMATION blocks are unchanged, you are ready to fire.

## prompt

Build a single-file HTML QBR dashboard for Meridian Retail Group.

AUDIENCE:
[WHO_IS_IN_THE_ROOM → one sentence: who is presenting, to whom, and what decision must the room make before it ends?]

DATA: Attach meridian_q4_data.xlsx, screenshot_1.png, screenshot_2.png, and genpact_logo.png to this conversation. Read all revenue figures, client details, and pipeline values directly from meridian_q4_data.xlsx — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Primary #4F46E5 (indigo). Background #F8FAFC. White card surfaces. Text #1E293B. Embed genpact_logo.png in the dashboard header. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png exactly.

THE STORY OF THIS QUARTER:
[QUARTER_STORY → 2 sentences. What happened this quarter? What went well, what fell short, and what needs immediate attention? Write this after reading the data file — this frames how the AI emphasises and labels the data.]

HERO METRIC:
[HERO_RATIONALE → Which scorecard tile should visually dominate — larger number, bolder treatment, indigo accent? Name it and explain in one sentence why it matters most to the specific audience above.]

SCORECARD — 4 tiles at the top:
Tile 1 — Revenue: actual vs target, attainment %, YoY growth. Apply hero treatment per HERO METRIC above.
Tile 2 — Active Clients: total active, new this quarter, churned this quarter.
Tile 3 — NPS: actual score vs target.
Tile 4 — Gross Margin: actual % vs target %.
Read all values from Revenue Summary sheet.

SIMULATION — place this AFTER the KPI tiles and BEFORE the charts:
Build an interactive "What-If: Q1 Pipeline Build" panel using Alpine.js.
- A slider: "Coverage target" ranging from 0.5× (min) to 2.0× (max), default set to the current coverage ratio from the Pipeline sheet.
- Show the current value prominently: "Target: X.XX×" updates in real time as the slider moves.
- As the slider moves, recalculate and update live: (a) required pipeline value at that coverage, (b) pipeline still to build vs current, (c) coverage status badge.
- Formula: required_pipeline = q1_target × coverage_ratio; build_needed = max(0, required_pipeline − current_pipeline); status = coverage_ratio ≥ 1.0 → "Covered" | ≥ 0.85 → "Near Target" | < 0.85 → "At Risk".
- Read q1_target and current_pipeline from the Pipeline sheet.
- Display as 3 updating stat tiles: "Required Pipeline ($M)", "Still to Build ($M)", "Coverage Status".
- Label the panel: "What-If: Q1 Pipeline Build".
- Use indigo #4F46E5 for the slider and updated tiles.

ALERT CALLOUT:
[ALERT_ACTION → Write the specific action statement for the at-risk client you found in the Client Risk Table. Name the client. State the risk in numbers — revenue figure, YoY decline %, NPS score. Say what action is needed and by when. This appears as an amber callout directly below the simulation panel.]

CHARTS — all four required:
1. Monthly revenue vs target — line chart, Jan–Dec, two series (Actual / Target). Source: Monthly Revenue sheet.
2. Regional revenue — horizontal bar chart, one bar per region, attainment % on each bar. Source: Revenue Summary sheet, regions section.
3. Product mix — donut chart by revenue share. Source: Revenue Summary sheet, product mix section.
4. Client risk table — all clients. Columns: Rank | Client | Revenue | YoY Growth | NPS | Risk. Source: Client Risk Table sheet. Flag the High-renewal-risk client with a red badge and red row highlight.

PIPELINE — stat row below the charts:
Show qualified pipeline vs Q1 target, coverage ratio, and deals in final stage.
Display a green confidence badge if coverage is above 1.0×.
Read all values from the Pipeline sheet.

ANIMATION — do not change or remove any of these:
- Revenue tile: number counts up from $0 to actual on page load, 2.2s easeOut — this is the hero counter, it must land with weight
- All other KPI tiles: 150ms fade-in, stagger 80ms apart
- Simulation stat tiles: 150ms fade-in on page load, then instant update as slider moves
- Monthly line chart: draws left to right on load, 150ms per segment
- Regional bars: 150ms grow-in, stagger 60ms apart
- Product donut: 150ms sweep-in clockwise
- Alert callout: 150ms fade-in, 300ms after page load
- Table rows: 150ms stagger fade-in, 60ms between rows
- Chart sections: 150ms fade up when scrolled into view

INTERACTIVITY: Alpine.js region filter — All / North America / Europe / Asia Pacific / Middle East & Africa. Clicking a region filters the client risk table to that region's clients.

One complete self-contained HTML file. All data from the attached Excel file — no hardcoded numbers, no fetch calls. Output the complete HTML file in one code block. Do not add explanation before or after. Do not truncate. Do not ask if I want to continue.

## checkpoint

Your prompt is ready when:
- [ ] You named who is in the room and what decision they must make
- [ ] Your quarter story captures both what went well and what needs attention
- [ ] You named the hero metric and justified it for this specific audience
- [ ] You named the at-risk client with specific numbers and a required action
- [ ] All files are attached: xlsx + 2 screenshots + logo
