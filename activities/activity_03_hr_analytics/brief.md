# Stack
> Read the brief. Review the design standard. Fill in the prompt placeholders. Exit in 5 minutes with a complete, ready-to-fire prompt.

## scenario

**Organisation:** Genpact APAC Business Unit
**Deliverable:** Single-file interactive HTML HR analytics dashboard
**Audience:** ExCo at a People Health Review offsite
**Your data file:** `hr_metrics.json`
**Design reference:** `screenshot_1.png` and `screenshot_2.png` in your folder

You are not building anything in this phase. You are setting up: reviewing what you have, understanding the quality bar, and filling in the prompt template below.

## context

Open `screenshot_1.png` and `screenshot_2.png` from your folder. **Treat these like a Figma handoff** — in professional practice, a designer builds the visual first, then hands it to the developer (or AI) and says "build this." That is exactly what you are doing now. Your final dashboard must meet this quality before presenting to ExCo.

Four non-negotiable rules extracted from the standard:

**1. Color** — Primary `#7C3AED` (purple) for page chrome and scorecard headings. RAG colors are hard-coded and must not be softened: Red `#DC2626`, Amber `#D97706`, Green `#16A34A`. These are status colors — they carry meaning, not decoration.

**2. Typography** — Inter font throughout (already in the prompt below). `font-weight: 800` for the $12.8M attrition cost figure — this is the number that makes ExCo sit up. `font-weight: 500` for department names and attrition percentages. `font-weight: 400` for descriptions.

**3. Layout** — Headline scorecard (4 tiles) at the top. Department RAG cards in a 2-column grid below. Trend chart and hiring table below that. The $12.8M cost must be visible without scrolling.

**4. Interactivity** — A toggle between Attrition View and Engagement View using Alpine.js. Both views use the same card layout but re-colour by the active metric. This is what makes the dashboard worth using in a live meeting.

## do_this

Open `hr_metrics.json`. Read it for 3 minutes.

Find each `[PLACEHOLDER]` in the sample prompt below and replace it with the real value from the data file. Each placeholder tells you exactly which field to look in. Do not change the STACK block, the RAG thresholds, or the layout structure — only fill in the placeholders.

## prompt

Build a single-file HTML HR analytics dashboard for Genpact APAC People Health Review.

STACK — do not change these:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Primary #7C3AED. Background #F9F8FF. White card surfaces. Text #1E293B. Refer to screenshot_1.png and screenshot_2.png for layout and visual standard.

RAG THRESHOLDS — do not change these:
- Red: attrition > 18% — background #FEF2F2, border #FCA5A5, chip text #DC2626
- Amber: attrition 13–18% — background #FFFBEB, border #FCD34D, chip text #D97706
- Green: attrition < 13% — background #F0FDF4, border #86EFAC, chip text #16A34A

HEADLINE SCORECARD — 4 tiles, top of page:
- Overall attrition: [ATTRITION_ACTUAL → `summary.overall_attrition_pct`]% vs [ATTRITION_BENCHMARK → `summary.benchmark_attrition_pct`]% benchmark — show delta, RAG chip
- Headcount: [CURRENT_HEADCOUNT → `summary.current_headcount`] of [HEADCOUNT_TARGET → `summary.headcount_target`] target — show gap as a number
- Open roles: [OPEN_ROLES → `summary.open_roles`] — fill time [FILL_DAYS_ACTUAL → `summary.avg_fill_days`] days vs [FILL_DAYS_BENCHMARK → `summary.benchmark_fill_days`] days benchmark
- Attrition cost: $[ATTRITION_COST → `summary.total_attrition_cost_usd`] — label "Estimated replacement cost this year" — make this the visual hero tile

DEPARTMENT CARDS — 2-column grid, one card per department:
Each card: department name, attrition % (large, 800 weight), RAG chip, delta vs [ATTRITION_BENCHMARK]% benchmark, engagement score
- [DEPT_1_NAME → `departments[0].name`]: [DEPT_1_ATTRITION → `departments[0].attrition_pct`]%, engagement [DEPT_1_ENG → `departments[0].engagement_score`] → apply RAG
- [DEPT_2_NAME → `departments[1].name`]: [DEPT_2_ATTRITION → `departments[1].attrition_pct`]%, engagement [DEPT_2_ENG → `departments[1].engagement_score`] → apply RAG
- [DEPT_3_NAME → `departments[2].name`]: [DEPT_3_ATTRITION → `departments[2].attrition_pct`]%, engagement [DEPT_3_ENG → `departments[2].engagement_score`] → apply RAG
- [DEPT_4_NAME → `departments[3].name`]: [DEPT_4_ATTRITION → `departments[3].attrition_pct`]%, engagement [DEPT_4_ENG → `departments[3].engagement_score`] → apply RAG
- [DEPT_5_NAME → `departments[4].name`]: [DEPT_5_ATTRITION → `departments[4].attrition_pct`]%, engagement [DEPT_5_ENG → `departments[4].engagement_score`] → apply RAG

QUARTERLY TREND CHART (ApexCharts line chart):
Data: [Q1 → `quarterly_trend[0].attrition_pct`]%, [Q2 → `quarterly_trend[1].attrition_pct`]%, [Q3 → `quarterly_trend[2].attrition_pct`]%, [Q4 → `quarterly_trend[3].attrition_pct`]%
Add a horizontal reference line at the annualised benchmark. Label the highest point: "Peak — investigate root cause."

INTERACTIVITY: Alpine.js toggle between Attrition View and Engagement View. Engagement View re-colours cards using: score < 65 = Red, 65–72 = Amber, > 72 = Green.

All chart data inline as JS objects. One complete self-contained .html file. No fetch calls.

## checkpoint

Before moving to Craft, confirm:
- Every [PLACEHOLDER] replaced with a real value from the data file
- STACK block and RAG thresholds are unchanged
- The $[ATTRITION_COST] tile is the visual hero in the scorecard
- The highest attrition department is correctly identified and showing Red
- The quarterly trend data is in the correct Q1–Q4 order
