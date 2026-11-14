# Complete Prompt — Genpact APAC HR Analytics Dashboard
> Facilitator reference. All narrative placeholders filled with example answers.
> Fire-ready: attach hr_metrics.json and paste as-is to test or demo.
> This file is not shown in the platform — it is for facilitator use only.

---

Build a single-file HTML HR analytics dashboard for Genpact APAC.

AUDIENCE:
The CHRO is presenting Q4 FY2024 people health metrics to the full APAC ExCo — CEO, CFO, and all BU heads — at the January 2025 offsite; the room needs to leave with three decisions: whether to approve an emergency compensation review for Technology & Digital, what intervention reduces the 47-day time-to-fill gap in Client Delivery, and who owns the Q1 retention plan for the two high-risk departments.

DATA: Attach hr_metrics.json to this conversation. Read all headcount figures, attrition rates, engagement scores, cost data, and hiring pipeline numbers directly from the file — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Background #F8FAFC. Accent #0F766E (teal). Text #1E293B. White card surfaces. RAG status: green #16A34A, amber #D97706, red #DC2626. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png.

THE STORY OF THIS DATA:
Q4 FY2024 closed with two people risks that cannot wait for Q2: total attrition reached 16.3% — 2.8 points above the 13.5% industry benchmark — costing $12.8M this year, with Technology & Digital at 21.2% (the highest in the BU) where engagement has also dropped to 71 against a 74 benchmark. The combination of attrition above benchmark and engagement below benchmark in the same department is the signal that requires ExCo-level action before Q1 targets are set.

HERO METRIC:
Attrition Cost (YTD) at $12.8M is the hero KPI — the CFO in this room will not authorise an emergency compensation review until the cost of doing nothing is expressed in a dollar figure larger than the cost of acting; $12.8M at $38,200 per exit makes the case without a slide deck.

SCORECARD — 4 KPI tiles at the top:
Tile 1 — Total Attrition: actual % vs benchmark %, RAG status. Source: attrition object.
Tile 2 — Engagement Score: actual vs benchmark, with delta. Source: engagement object.
Tile 3 — Attrition Cost (YTD): total cost and cost per exit. Source: cost_per_employee_usd.
Tile 4 — Headcount Attainment: actual vs target, open roles. Source: headcount_summary.
Apply hero treatment (larger tile, teal accent, font-weight 800) to the Attrition Cost tile.

BURNING PLATFORM:
Technology & Digital is the most urgent signal: 21.2% attrition (5.2 points above its 16.0% benchmark) combined with an engagement score of 71 against a 74 benchmark — the department is losing its people faster than any other BU function and the remaining team is signalling early departure intent through below-benchmark engagement. ExCo must decide at this offsite whether to approve an out-of-cycle compensation review before Q1 hiring targets are set.

CHARTS — all required:
1. Attrition by department — horizontal bar chart, sorted high to low, each bar RAG-coloured against that department's benchmark. Source: attrition_by_department array.
2. Engagement by department — horizontal bar chart, actual score vs benchmark for each department. Source: engagement_by_department array.
3. Attrition quarterly trend — line chart, 4 quarters. Source: quarterly_attrition_trend array.
4. Hiring source breakdown — donut chart by hires. Source: hiring_by_source_q4 array.

HIRING HEALTH SECTION:
Show time to fill (actual vs benchmark), offer acceptance rate, and new hire 30-day retention as stat tiles.
Source: hiring_pipeline object.

ALERT CALLOUT:
Amber callout for Technology & Digital: 21.2% attrition (benchmark 16.0%) and engagement score 71 (benchmark 74). Action required: CHRO to present out-of-cycle compensation review proposal to CFO before January 31, 2025. Compensation accounts for 38% of all exits across the BU — addressing it in the highest-attrition department first is the highest-leverage intervention available.

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
