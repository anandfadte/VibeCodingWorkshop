# Craft
> Build the prompt. Five blanks to fill — all require business judgment, not data lookup.

## context
The AI will read all project statuses, budget figures, milestone states, client satisfaction scores, and risk statements directly from **apac_portfolio_tracker.xlsx** (4 sheets: Portfolio Scorecard, Project Details, Revenue at Risk, Escalation Cards). The **escalation_matrix.pdf** defines the escalation thresholds and owner contacts. Your job is to supply what the data files cannot: who is running this review, what management story the RAG counts tell, and what specific decision each Red project needs from leadership today.

## do_this
Read the five placeholders. Write your answers directly into the prompt below.

## prompt
Build a single-file HTML project portfolio dashboard for Genpact Client Delivery APAC.

AUDIENCE:
[WHO_IS_IN_THE_ROOM → one sentence: who is running this leadership review and what decisions must leave this meeting? Name at least two decisions that require VP-level authority.]

DATA: Attach apac_portfolio_tracker.xlsx, escalation_matrix.pdf, screenshot_1.png, screenshot_2.png, and genpact_logo.png to this conversation. Read all project statuses, RAG ratings, contract values, budget consumed %, milestone states, risk statements, and client satisfaction scores directly from apac_portfolio_tracker.xlsx — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Background #F8FAFC. Accent #0F172A (slate). Text #1E293B. White card surfaces. RAG: Green #16A34A, Amber #D97706, Red #DC2626. Embed genpact_logo.png in the dashboard header. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png exactly.

PORTFOLIO NARRATIVE:
[REVIEW_NARRATIVE → 2 sentences. What is the management story of this portfolio in December 2024? Go beyond "3 of 22 projects are Red" — state what the pattern means for delivery confidence and client relationships heading into Q1.]

PORTFOLIO SUMMARY ROW — 5 stat tiles at the top:
Tile 1 — Total Projects: total, with breakdown (Green / Amber / Red)
Tile 2 — Revenue at Risk: the dollar figure. Source: summary.revenue_at_risk_usd. Make this tile Red — it is the headline number.
Tile 3 — On-Track Rate: % of portfolio Green. Source: summary.on_track_pct.
Tile 4 — Headcount Deployed: total people. Source: summary.total_headcount_deployed.
Tile 5 — Q1 Deliveries: projects due next quarter. Source: summary.projects_due_q1_2025.

ESCALATION SECTION — display before the project list:
[ESCALATION_PRIORITY → Which of the two Red projects (P003 or P010) is the more urgent escalation requiring VP action today, and why? The other is serious — but one requires a decision in this meeting that cannot wait. Name your choice and state the specific decision needed.]

Show P003 and P010 each as a prominent red escalation card. For each: project name, client, risk statement (from the data file), budget consumed %, client satisfaction score, and the specific decision required (use your answer from ESCALATION_PRIORITY for the higher-priority one).

P003 ACTION:
[P003_ACTION → Write the specific action required for Sunrise Distribution. Who is the accountable owner, what must they do, and by what date? Reference the penalty clause risk from the data.]

P010 ACTION:
[P010_ACTION → Write the specific action required for Apex Global. The $420k change request is pending client approval — what happens if the client does not approve it? Who owns this escalation and by when must the decision be made?]

PROJECT TABLE — all 10 projects:
Columns: ID | Project Name | Client | Status (RAG badge) | Phase | Budget Consumed % (progress bar) | Next Milestone | Client Satisfaction (star or score)
Sort: Red first, then Amber, then Green.
RAG badge: filled colour background, white text — Red/Amber/Green must be visually unmissable.
Budget bar: colour-coded — green if <70%, amber if 70-85%, red if >85%.

CHARTS:
1. Portfolio RAG donut — Green/Amber/Red count. Source: summary fields.
2. Budget consumed by project — horizontal bar chart, all 10 projects, sorted by consumed % descending. P010 and P003 must visually stand out.

ANIMATION — do not change or remove any of these:
- Revenue at risk tile: counts up from $0 to actual on page load, 2.5s easeOut (the number must land with weight)
- Red project count: counts up from 0 to 3, 1s easeOut
- Portfolio RAG donut: sweeps in clockwise, 1000ms, Red segment first
- Budget bars: stagger fill left to right, 80ms between bars, colour transitions in with fill
- Project table rows: cascade fade-in top to bottom, 60ms between rows (Red rows first)
- Escalation cards: slide in from the left, 300ms stagger between P003 and P010
- Summary tiles: cascade fade-in left to right, 120ms between tiles
- Chart sections: fade up when scrolled into view

INTERACTIVITY: Alpine.js RAG filter — All / Red / Amber / Green. Clicking a status filters the project table to that RAG group. Red is the default view on page load — leadership opens to escalations first.

One complete self-contained HTML file. All data from the attached JSON file — no hardcoded values, no fetch calls.

## checkpoint
Your prompt is ready when:
- [ ] You named the two VP-level decisions that must leave this meeting
- [ ] Your portfolio narrative states the management story, not just the counts
- [ ] You identified which Red project is more urgent and why
- [ ] P003 action names an owner, a specific action, and a date
- [ ] P010 action addresses what happens if the client does not approve the change request
