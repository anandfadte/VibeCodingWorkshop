# Stack
> Read the brief. Review the design standard. Fill in the prompt placeholders. Exit in 5 minutes with a complete, ready-to-fire prompt.

## scenario

**Client:** Calloway Industries — $2.4B industrial manufacturer
**Deliverable:** Single-file interactive HTML proposal microsite
**Audience:** Three stakeholders at next week's pitch: CPO, VP Operations, Head of IT
**Your data file:** `prospect_brief.json`
**Design reference:** `screenshot_1.png` and `screenshot_2.png` in your folder

You are not building anything in this phase. You are setting up: reviewing what you have, understanding the quality bar, and filling in the prompt template below.

## context

Open `screenshot_1.png` and `screenshot_2.png` from your folder. **Treat these like a Figma handoff** — in professional practice, a designer builds the visual first, then hands it to the developer (or AI) and says "build this." That is exactly what you are doing now. Your final microsite must meet this quality before showing it to a client.

Four non-negotiable rules extracted from the standard:

**1. Color** — Primary `#1E40AF` (deep blue) for the header, section titles, and metric cards. `#F8FAFC` page background. White card surfaces. Deep blue signals professional credibility in a B2B industrial pitch. No arbitrary colors.

**2. Typography** — Inter font throughout (already in the prompt below). `font-weight: 800` for headline ROI numbers. `font-weight: 600` for section headings. `font-weight: 400` for body text. Keep it clean — this is a client-facing document.

**3. Layout** — Scroll-down narrative, not a grid. Each section addresses one stakeholder's question. ROI summary above the fold. Stakeholder sections below, in a logical reading order. No horizontal scroll.

**4. Interactivity** — A tab strip or section navigator so the reader can jump to their stakeholder section directly. Static PDFs are not the deliverable — this is interactive.

## do_this

Open `prospect_brief.json`. Read it for 3 minutes.

Find each `[PLACEHOLDER]` in the sample prompt below and replace it with the real value from the data file. Each placeholder tells you exactly which field to look in. Do not change the STACK block, the DESIGN line, or the section structure — only fill in the placeholders.

## prompt

Build a single-file HTML proposal microsite for Genpact's pitch to [CLIENT_NAME → `company` field in prospect_brief.json].

STACK — do not change these:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Primary #1E40AF. Background #F8FAFC. White card surfaces. Text #1E293B. Refer to screenshot_1.png and screenshot_2.png for layout and visual standard.

SECTION 1 — ROI HERO (above the fold, dark #1E40AF header, white text):
- Headline: "The [CLIENT_NAME] Business Case"
- Metric 1: [ROI_PCT → `roi_model.roi_3yr_pct`]% — 3-year ROI
- Metric 2: [PAYBACK_MONTHS → `roi_model.payback_period_months`] months — payback period
- Metric 3: $[YEAR1_SAVINGS → `roi_model.year1_savings_usd`] — Year 1 savings
- Metric 4: $[NPV_3YR → `roi_model.npv_3yr_usd`] — 3-year NPV
- Sub-line: "Total addressable pain: $[TOTAL_PAIN → sum all pain_points.annual_cost_usd values]M annually"

SECTION 2 — [CPO_NAME → `stakeholders[0].name`], [CPO_TITLE → `stakeholders[0].title`]: "Why This Implementation Will Succeed"
- Address: previous failed ERP implementation concern
- Include: 5-milestone deployment timeline, SAP compatibility confirmation
- Case study: [CASE_STUDY_1 → `case_studies[0].client`] — [CS1_INDUSTRY → `case_studies[0].industry`], [CS1_MONTHS → `case_studies[0].deployment_months`] months, $[CS1_SAVINGS → `case_studies[0].year1_savings_usd`] Year 1 savings

SECTION 3 — [VP_OPS_NAME → `stakeholders[1].name`], [VP_OPS_TITLE → `stakeholders[1].title`]: "Your Pain, Quantified"
- Current state pain: $[OPS_PAIN → sum ops-related pain_points] annual cost
- Before/after comparison: [MANUAL_PCT → `company_profile.invoice_manual_pct`]% invoices manual → target <10%
- Timeline to relief: months 1, 3, 6 milestones

SECTION 4 — [IT_NAME → `stakeholders[2].name`], [IT_TITLE → `stakeholders[2].title`]: "Technical Fit"
- SAP S/4HANA compatibility: confirm Q3 2025 migration timeline
- Integration approach: zero-disruption parallel deployment
- Case study: [CASE_STUDY_2 → `case_studies[1].client`] — [CS2_RESULT → `case_studies[1].key_result`]

CHARTS: One ApexCharts 3-year bar chart in Section 1 showing savings vs investment by year. Use Alpine.js for a tab strip (one tab per stakeholder section) at the top of the page.

All data inline as JS objects. One complete self-contained .html file. No fetch calls.

## checkpoint

Before moving to Craft, confirm:
- Every [PLACEHOLDER] replaced with a real value from the data file
- STACK block is unchanged
- All four ROI metrics are present in Section 1
- Each stakeholder section addresses that person by name
- Both case studies have exact client names and figures
