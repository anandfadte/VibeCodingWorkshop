# Stack
> Read the brief. Review the design standard. Fill in the prompt placeholders. Exit in 5 minutes with a complete, ready-to-fire prompt.

## scenario

**Portfolio:** Genpact Client Delivery — APAC Portfolio
**Deliverable:** Single-file interactive HTML project portfolio tracker
**Audience:** Priya Nair, VP Client Delivery, and the APAC ExCo at a monthly delivery review
**Your data file:** `project_tracker.json`
**Design reference:** `screenshot_1.png` and `screenshot_2.png` in your folder

You are not building anything in this phase. You are setting up: reviewing what you have, understanding the quality bar, and filling in the prompt template below.

## context

Open `screenshot_1.png` and `screenshot_2.png` from your folder. **Treat these like a Figma handoff** — in professional practice, a designer builds the visual first, then hands it to the developer (or AI) and says "build this." That is exactly what you are doing now. Your final tracker must meet this quality before presenting to the VP.

Four non-negotiable rules extracted from the standard:

**1. Color** — Primary `#0D9488` (teal) for page chrome and scorecard headings. RAG colors are hard-coded and must not be softened: Red `#DC2626`, Amber `#D97706`, Green `#16A34A`. A Red project must look unmistakably critical — not orange, not dark red.

**2. Typography** — Inter font throughout (already in the prompt below). `font-weight: 800` for the $8.2M revenue-at-risk figure — this is the number Priya will act on. `font-weight: 600` for project names and budget-consumed percentages. `font-weight: 400` for descriptions and risk text.

**3. Layout** — Summary scorecard (4 tiles) at the top. Red projects as dedicated escalation cards directly below, before the full project table. Full project table with RAG chips and budget bars below that. The $8.2M figure and both Red projects must be visible without scrolling.

**4. Interactivity** — An Alpine.js status filter: All / Red / Amber / Green. Clicking Red shows only Red projects. Budget consumption shown as a horizontal progress bar within each project row — red bar if > 85% consumed. This is what makes the tracker useful in a live review.

## do_this

Open `project_tracker.json`. Read it for 3 minutes.

Find each `[PLACEHOLDER]` in the sample prompt below and replace it with the real value from the data file. Each placeholder tells you exactly which field to look in. Do not change the STACK block, the RAG thresholds, or the layout structure — only fill in the placeholders.

## prompt

Build a single-file HTML project portfolio tracker for the Genpact APAC Client Delivery portfolio review.

STACK — do not change these:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Primary #0D9488. Background #F0FDFB. White card surfaces. Text #1E293B. Refer to screenshot_1.png and screenshot_2.png for layout and visual standard.

RAG COLORS — do not change these:
- Red: background #FEF2F2, border #FCA5A5, chip text #DC2626, budget bar #DC2626
- Amber: background #FFFBEB, border #FCD34D, chip text #D97706, budget bar #D97706
- Green: background #F0FDF4, border #86EFAC, chip text #16A34A, budget bar #16A34A

SUMMARY SCORECARD — 4 tiles, top of page:
- Portfolio health: [GREEN_COUNT → `summary.on_track_green`] Green / [AMBER_COUNT → `summary.at_risk_amber`] Amber / [RED_COUNT → `summary.critical_red`] Red of [TOTAL_PROJECTS → `summary.total_projects`] projects — show on-track % [ON_TRACK_PCT → `summary.on_track_pct`]%
- Revenue at risk: $[REVENUE_AT_RISK → `summary.revenue_at_risk_usd`] — label "Needs immediate action" — make this the visual hero tile
- Total portfolio value: $[TOTAL_VALUE → `summary.total_contracted_value_usd`]
- Q1 2025 deadline: [Q1_PROJECTS → `summary.projects_due_q1_2025`] projects due — flag this tile amber

ESCALATION CARDS — appear directly below the scorecard, before the full table:
Show only Red projects as dedicated cards. Each card: project name (large, 600 weight), client name, owner name, budget consumed % (progress bar, red if > 85%), missed milestone (most recent failed milestone), top risk (full text), client satisfaction score.

- [P003_NAME → `projects[2].name`] (Client: [P003_CLIENT → `projects[2].client`], Owner: [P003_OWNER → `projects[2].owner`])
  Budget: [P003_BUDGET → `projects[2].budget_consumed_pct`]% consumed
  Missed milestone: [P003_MILESTONE → `projects[2].milestones[3].name`] — [P003_MILESTONE_STATUS → `projects[2].milestones[3].status`]
  Risk: [P003_RISK → `projects[2].top_risk`]
  Satisfaction: [P003_SAT → `projects[2].client_satisfaction`]/5

- [P010_NAME → `projects[9].name`] (Client: [P010_CLIENT → `projects[9].client`], Owner: [P010_OWNER → `projects[9].owner`])
  Budget: [P010_BUDGET → `projects[9].budget_consumed_pct`]% consumed
  Missed milestone: [P010_MILESTONE → `projects[9].milestones[3].name`] — [P010_MILESTONE_STATUS → `projects[9].milestones[3].status`]
  Risk: [P010_RISK → `projects[9].top_risk`]
  Satisfaction: [P010_SAT → `projects[9].client_satisfaction`]/5

PROJECT TABLE — all projects, one row per project:
Columns: ID | Project Name | Client | Owner | Status chip | Phase | Budget % (bar) | Contract Value | Top Risk (truncated, expand on click)
Show all projects from the data file. Apply RAG background color to entire row. Budget bar turns red if > 85%.

INTERACTIVITY: Alpine.js filter buttons: All | Red | Amber | Green. Clicking a filter shows only projects with that status.

All data inline as JS objects. One complete self-contained .html file. No fetch calls.

## checkpoint

Before moving to Craft, confirm:
- Every [PLACEHOLDER] replaced with a real value from the data file
- STACK block and RAG colors are unchanged
- The $[REVENUE_AT_RISK] tile is the visual hero in the scorecard
- Both P003 and P010 appear as dedicated escalation cards directly below the scorecard
- Budget bars for P003 (87%) and P010 (94%) are both rendering in red
