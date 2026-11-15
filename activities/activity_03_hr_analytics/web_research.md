# Craft
> Build the prompt. Five blanks to fill — all require business judgment, not data lookup.

## context
The AI will read all numbers from **genpact_hr_metrics.xlsx** (4 sheets: Headcount, Attrition by Quarter, Engagement Scores, Exit Survey Reasons) and **hr_benchmark_targets.pdf** (Mercer/WTW 2024 benchmarks). Your job is to supply what the data files cannot: who is in the ExCo room, what story the data tells about organisational risk, and what action is required.

## do_this
Read the five placeholders. Write your answers directly into the prompt below.

## prompt
Build a single-file HTML HR analytics dashboard for Genpact.

AUDIENCE:
[WHO_IS_IN_THE_ROOM → one sentence: who is presenting this, to whom, and what decisions does the ExCo room need to leave with? Name at least two decisions the leadership team must make.]

DATA: Attach genpact_hr_metrics.xlsx and hr_benchmark_targets.pdf to this conversation. Read all headcount figures, attrition rates, engagement scores, cost data, and benchmark targets directly from the files — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Background #F8FAFC. Accent #0F766E (teal). Text #1E293B. White card surfaces. RAG status: green #16A34A, amber #D97706, red #DC2626. Embed genpact_logo.png in the dashboard header. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png.

THE STORY OF THIS DATA:
[HEADLINE_RISK → 2 sentences. What is the Q4 people health story? What is the signal that needs immediate leadership attention, and what does it cost if left unaddressed?]

HERO METRIC:
[HERO_RATIONALE → Which KPI should visually dominate the scorecard row — Attrition %, Engagement Score, Attrition Cost ($12.8M), or Headcount Attainment? Name it and explain in one sentence why it matters most to the specific audience above.]

SCORECARD — 4 KPI tiles at the top:
Tile 1 — Total Attrition: actual % vs benchmark %, RAG status. Source: Headcount sheet, Total row.
Tile 2 — Engagement Score: actual score vs 72 benchmark, with delta. Source: Engagement Scores sheet, Company Average row.
Tile 3 — Attrition Cost (YTD): total $12.8M and cost per exit. Source: Headcount sheet, notes row.
Tile 4 — Headcount Attainment: actual vs target, open roles count. Source: Headcount sheet.
Apply hero treatment (larger tile, accent border) to the KPI you named above.

SIMULATION — place this AFTER the KPI tiles and BEFORE the charts:
Build an interactive "What-If: Attrition Reduction" panel using Alpine.js.
- A slider: "Target attrition rate" ranging from 10% (min) to 20% (max), default set to the current value from the data file.
- Show the current value prominently: "Target: XX.X%" updates in real time as the slider moves.
- As the slider moves, recalculate and update live: (a) projected cost of attrition at the new rate, (b) annual saving vs current, (c) headcount retained.
- Formula: cost_at_target = (target_rate / current_rate) × $12.8M; saving = $12.8M − cost_at_target; retained = round(total_headcount × (current_rate − target_rate) / 100).
- Display as 3 updating stat tiles: "Projected Cost", "Annual Saving", "People Retained".
- Label the panel: "What-If: Attrition Reduction Scenario".
- Use the teal accent (#0F766E) for the slider and updated tiles.

BURNING PLATFORM:
[BURNING_DEPARTMENT → Which department's combination of above-benchmark attrition AND below-benchmark engagement is the most urgent signal for ExCo? Name it, give both numbers, and state in one sentence what the leadership action is.]

CHARTS — all required:
1. Attrition by department — horizontal bar chart, sorted high to low, each bar RAG-coloured against benchmark. Source: Headcount sheet.
2. Engagement by department — horizontal bar chart, actual score vs 72 benchmark line. Source: Engagement Scores sheet.
3. Attrition quarterly trend — line chart, all 8 quarters. Source: Attrition by Quarter sheet.
4. Exit reasons — donut or bar chart of top exit reasons. Source: Exit Survey Reasons sheet.

RAG LABELS: Add text labels to every RAG badge — "Red", "Amber", "Green" — not colour alone. Include the actual value next to the label.

ALERT CALLOUT:
Display an amber callout for the department named in BURNING PLATFORM. Include both numbers (attrition % and engagement score) and state what action is required. Place it between the SIMULATION panel and the CHARTS section.

ANIMATION — do not change or remove any of these:
- Attrition cost tile ($12.8M): counts up from $0 to actual on page load, 2.2s easeOut (this is the hero counter — it must land with weight)
- All other KPI tiles: 150ms fade-in, stagger 80ms apart
- Department attrition bars: 150ms grow-in, stagger 60ms apart, RAG colour transitions in with bars
- Department engagement bars: 150ms grow-in, stagger 60ms apart
- Quarterly trend line: draws left to right, 1200ms
- Exit reasons chart: sweeps in clockwise, 900ms
- Alert callout: 150ms fade-in, 300ms after page load
- Chart sections: 150ms fade up when scrolled into view

One complete self-contained HTML file. All data from the attached files — no hardcoded numbers, no fetch calls. Output the complete HTML file in one code block. Do not add explanation before or after. Do not truncate. Do not ask if I want to continue.

## checkpoint
Your prompt is ready when:
- [ ] You named at least two decisions the ExCo room must leave with
- [ ] Your headline risk captures both the cost and the urgency
- [ ] You named the hero KPI and justified it for this specific audience
- [ ] You identified the burning department with both its numbers
- [ ] Your alert callout names a specific action, not an observation
