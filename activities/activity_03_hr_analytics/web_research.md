# Craft
> Build the prompt. Five blanks to fill — all require business judgment, not data lookup.

## context
The AI will read all numbers from hr_metrics.json — headcount, attrition rates, engagement scores, hiring funnel, cost figures. Your job is to supply what the data file cannot: who is in the ExCo room, what story the data tells about organisational risk, and what action is required.

## do_this
Read the five placeholders. Write your answers directly into the prompt below.

## prompt
Build a single-file HTML HR analytics dashboard for Genpact APAC.

AUDIENCE:
[WHO_IS_IN_THE_ROOM → one sentence: who is presenting this, to whom, and what decisions does the ExCo room need to leave with? Name at least two decisions the leadership team must make at this offsite.]

DATA: Attach hr_metrics.json to this conversation. Read all headcount figures, attrition rates, engagement scores, cost data, and hiring pipeline numbers directly from the file — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Background #F8FAFC. Accent #0F766E (teal). Text #1E293B. White card surfaces. RAG status: green #16A34A, amber #D97706, red #DC2626. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png.

THE STORY OF THIS DATA:
[HEADLINE_RISK → 2 sentences. What is the Q4 people health story? What went well, what is the signal that needs immediate leadership attention, and what does it cost if left unaddressed?]

HERO METRIC:
[HERO_RATIONALE → Which of the four headline KPIs should visually dominate the scorecard row — Attrition %, Engagement Score, Attrition Cost, or Headcount Attainment? Name it and explain in one sentence why it matters most to the specific audience above.]

SCORECARD — 4 KPI tiles at the top:
Tile 1 — Total Attrition: actual % vs benchmark %, RAG status. Source: attrition object.
Tile 2 — Engagement Score: actual vs benchmark, with delta. Source: engagement object.
Tile 3 — Attrition Cost (YTD): total cost and cost per exit. Source: cost_per_employee_usd.
Tile 4 — Headcount Attainment: actual vs target, open roles. Source: headcount_summary.
Apply hero treatment to the tile you named above.

BURNING PLATFORM:
[BURNING_DEPARTMENT → Which department's combination of above-benchmark attrition AND below-benchmark engagement is the most urgent signal for ExCo? Name the department, give both numbers, and state in one sentence what the leadership action is.]

CHARTS — all required:
1. Attrition by department — horizontal bar chart, sorted high to low, each bar RAG-coloured against that department's benchmark. Source: attrition_by_department array.
2. Engagement by department — horizontal bar chart, actual score vs benchmark for each department. Source: engagement_by_department array.
3. Attrition quarterly trend — line chart, 4 quarters. Source: quarterly_attrition_trend array.
4. Hiring source breakdown — donut chart by hires. Source: hiring_by_source_q4 array.

HIRING HEALTH SECTION:
Show time to fill (actual vs benchmark), offer acceptance rate, and new hire 30-day retention as stat tiles.
Source: hiring_pipeline object.

ALERT CALLOUT:
Display an amber callout for the department named in BURNING PLATFORM. Include both numbers (attrition % and engagement score) and state what action is required.

ANIMATION — do not change or remove any of these:
- Attrition % KPI tile: counts up from 0.0% to actual on page load, 2s easeOut
- Engagement score: counts up from 0 to actual, 1.8s easeOut
- Attrition cost: counts up from $0 to actual, 2.2s easeOut
- Department attrition bars: stagger grow-in left to right, 100ms between bars, RAG colour transitions in with bars
- Department engagement bars: stagger grow-in, 80ms between bars
- Quarterly trend line: draws left to right on load, 1200ms
- Hiring source donut: sweeps in clockwise, 900ms
- Scorecard tiles: cascade fade-in left to right, 120ms between tiles
- Alert callout: slides in from left, 400ms after page load
- Chart sections: fade up when scrolled into view

INTERACTIVITY: Alpine.js department filter — All / Client Delivery / Technology & Digital / Finance Operations and other departments. Clicking a department filters both attrition and engagement charts to highlight that department.

One complete self-contained HTML file. All data from the attached JSON file — no hardcoded numbers, no fetch calls.

## checkpoint
Your prompt is ready when:
- [ ] You named at least two decisions the ExCo room must leave with
- [ ] Your headline risk captures both the cost and the urgency
- [ ] You named the hero KPI and justified it for this specific audience
- [ ] You identified the burning department with both its numbers
- [ ] Your alert callout names a specific action, not an observation
