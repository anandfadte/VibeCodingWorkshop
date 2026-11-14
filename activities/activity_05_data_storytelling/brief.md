# Stack
> Read the brief. Review the design standard. Fill in the prompt placeholders. Exit in 5 minutes with a complete, ready-to-fire prompt.

## scenario

**Campaign:** Genpact Enterprise Intelligence Suite — Market Launch
**Deliverable:** Single-file interactive HTML campaign performance report
**Audience:** CMO, CFO, and Head of Sales at a Q3 postmortem and Q4 budget planning session
**Your data file:** `campaign_analysis.json`
**Design reference:** `screenshot_1.png` and `screenshot_2.png` in your folder

You are not building anything in this phase. You are setting up: reviewing what you have, understanding the quality bar, and filling in the prompt template below.

## context

Open `screenshot_1.png` and `screenshot_2.png` from your folder. **Treat these like a Figma handoff** — in professional practice, a designer builds the visual first, then hands it to the developer (or AI) and says "build this." That is exactly what you are doing now. Your final report must meet this quality before presenting to the CMO.

Four non-negotiable rules extracted from the standard:

**1. Color** — Primary `#0891B2` (cyan) for page chrome and scorecard headings. Best-performer green `#16A34A`, worst-performer red `#DC2626`. These are performance status colors — the best and worst channels must be unmissable at a glance.

**2. Typography** — Inter font throughout (already in the prompt below). `font-weight: 800` for the opportunity attainment percentage — this is the number that tells the story. `font-weight: 600` for channel names and CPO figures. `font-weight: 400` for descriptions.

**3. Layout** — Hero scorecard (4 tiles) at the top. Channel comparison table below. Conversion funnel and monthly trend below that. The 44.7% attainment figure and the best vs. worst channel must be visible without scrolling.

**4. Interactivity** — A sortable channel table (sort by CPO ascending shows the Q4 reallocation story instantly). ApexCharts bar chart for the channel CPO comparison. Both must be working in a live browser.

## do_this

Open `campaign_analysis.json`. Read it for 3 minutes.

Find each `[PLACEHOLDER]` in the sample prompt below and replace it with the real value from the data file. Each placeholder tells you exactly which field to look in. Do not change the STACK block or the color assignments — only fill in the placeholders.

## prompt

Build a single-file HTML campaign performance report for the Genpact Enterprise Intelligence Suite Q3 FY2024 postmortem.

STACK — do not change these:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Primary #0891B2. Background #F0FDFF. White card surfaces. Text #1E293B. Best-performer cells: background #F0FDF4, text #16A34A. Worst-performer cells: background #FEF2F2, text #DC2626. Refer to screenshot_1.png and screenshot_2.png for layout and visual standard.

HERO SCORECARD — 4 tiles, top of page:
- Total spend: $[TOTAL_SPEND → `budget_summary.total_spend_usd`] of $[TOTAL_BUDGET → `budget_summary.total_budget_usd`] budget — show utilisation [BUDGET_UTIL → `budget_summary.budget_utilisation_pct`]%
- Opportunities: [OPPS_ACTUAL → `budget_summary.opportunities_created`] of [OPPS_TARGET → `budget_summary.target_opportunities`] target — show attainment [ATTAINMENT → `budget_summary.opportunity_attainment_pct`]% in 800 weight, red if below 80%
- Pipeline generated: $[PIPELINE → `budget_summary.total_pipeline_generated_usd`] — show ROI multiple [ROI → `budget_summary.pipeline_roi_x`]x
- Leads → MQL → SQL → Opps: [LEADS → `budget_summary.total_leads_generated`] → [MQL → `budget_summary.qualified_leads_mql`] → [SQL → `budget_summary.qualified_leads_sql`] → [OPPS_ACTUAL]

CHANNEL COMPARISON TABLE — one row per channel, sortable by CPO:
Columns: Channel | Spend | Leads | MQLs | SQLs | Opps | Cost per Opp
- [CH1_NAME → `channels[0].channel`]: $[CH1_SPEND → `channels[0].spend_usd`] | [CH1_LEADS → `channels[0].leads`] | [CH1_MQL → `channels[0].mqls`] | [CH1_SQL → `channels[0].sqls`] | [CH1_OPPS → `channels[0].opportunities`] | $[CH1_CPO → `channels[0].cost_per_opportunity_usd`]
- [CH2_NAME → `channels[1].channel`]: $[CH2_SPEND → `channels[1].spend_usd`] | [CH2_LEADS] | [CH2_MQL] | [CH2_SQL] | [CH2_OPPS → `channels[1].opportunities`] | $[CH2_CPO → `channels[1].cost_per_opportunity_usd`]
- [CH3_NAME → `channels[2].channel`]: $[CH3_SPEND → `channels[2].spend_usd`] | [CH3_LEADS] | [CH3_MQL] | [CH3_SQL] | [CH3_OPPS → `channels[2].opportunities`] | $[CH3_CPO → `channels[2].cost_per_opportunity_usd`] — highlight green (best performer)
- [CH4_NAME → `channels[3].channel`]: $[CH4_SPEND → `channels[3].spend_usd`] | [CH4_LEADS] | [CH4_MQL] | [CH4_SQL] | [CH4_OPPS → `channels[3].opportunities`] | $[CH4_CPO → `channels[3].cost_per_opportunity_usd`]
- [CH5_NAME → `channels[4].channel`]: $[CH5_SPEND → `channels[4].spend_usd`] | [CH5_LEADS] | [CH5_MQL] | [CH5_SQL] | [CH5_OPPS → `channels[4].opportunities`] | $[CH5_CPO → `channels[4].cost_per_opportunity_usd`]
- [CH6_NAME → `channels[5].channel`]: $[CH6_SPEND → `channels[5].spend_usd`] | [CH6_LEADS] | [CH6_MQL] | [CH6_SQL] | [CH6_OPPS → `channels[5].opportunities`] | $[CH6_CPO → `channels[5].cost_per_opportunity_usd`] — highlight red (worst performer)

CHANNEL CPO CHART (ApexCharts horizontal bar):
Data: one bar per channel, sorted by CPO ascending. Color the best-performer bar #16A34A, worst-performer bar #DC2626, all others #0891B2.

MONTHLY TREND (ApexCharts line chart):
Data: Jul [JUL_OPPS → `monthly_performance[0].opportunities`] opps / $[JUL_SPEND → `monthly_performance[0].spend_usd`] spend, Aug [AUG_OPPS → `monthly_performance[1].opportunities`] / $[AUG_SPEND → `monthly_performance[1].spend_usd`], Sep [SEP_OPPS → `monthly_performance[2].opportunities`] / $[SEP_SPEND → `monthly_performance[2].spend_usd`]. Dual axis: spend (bars) and opportunities (line).

All chart data inline as JS objects. One complete self-contained .html file. No fetch calls.

## checkpoint

Before moving to Craft, confirm:
- Every [PLACEHOLDER] replaced with a real value from the data file
- STACK block and color rules are unchanged
- Executive Roundtables row is highlighted green, Webinars row is highlighted red
- The 44.7% attainment figure is 800 weight and visually dominant in the hero scorecard
- Monthly trend data is in Jul → Aug → Sep order
