# Craft
> Build the prompt. Five blanks to fill — all require escalation judgment, not data lookup. The AI reads every number from the file.

## context

The AI will read all project statuses, budget figures, milestone states, client satisfaction scores, and risk statements from **apac_portfolio_tracker.xlsx** (4 sheets: Portfolio Scorecard, Project Details, Revenue at Risk, Escalation Cards). The **escalation_matrix.pdf** defines escalation thresholds and owner contacts — the AI should use it to validate RAG criteria. Attach **screenshot_1.png**, **screenshot_2.png**, and **genpact_logo.png** alongside. Your job is to supply the five things the data cannot: who is running this review, what management story the RAG counts tell, which Red project is more urgent, and what specific action each escalation card demands.

## do_this

Read the five placeholders. Write your answers directly into the prompt. When every blank is filled and the DESIGN KIT and ANIMATION blocks are unchanged, you are ready to fire.

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
[REVIEW_NARRATIVE → 2 sentences. What is the management story of this portfolio in December 2024? Go beyond "2 of 10 are Red" — state what the pattern means for delivery confidence and client relationships heading into Q1.]

PORTFOLIO SUMMARY ROW — 5 stat tiles at the top:
Tile 1 — Total Projects: total count with Green / Amber / Red breakdown. Source: Portfolio Scorecard sheet.
Tile 2 — Revenue at Risk: the dollar figure. Source: Portfolio Scorecard sheet. Make this tile Red — it is the headline number.
Tile 3 — On-Track Rate: % of portfolio Green. Source: Portfolio Scorecard sheet.
Tile 4 — Client Satisfaction: average score. Source: Portfolio Scorecard sheet.
Tile 5 — Escalations This Month: count. Source: Portfolio Scorecard sheet.

SIMULATION — place this AFTER the summary tiles and BEFORE the escalation cards:
Build an interactive "What-If: Escalation Resolution" panel using Alpine.js.
- A slider: "Revenue recovered (%)" ranging from 0% (min) to 100% (max), default 0%.
- Show the current value: "Recovery: XX%" updates in real time as the slider moves.
- As the slider moves, recalculate and update live: (a) revenue secured ($M), (b) revenue still at risk ($M), (c) portfolio health status.
- Formula: total_at_risk = 8.2 (read from Portfolio Scorecard sheet, Revenue at Risk row); secured = round(total_at_risk × recovery_pct / 100, 1); still_at_risk = round(total_at_risk − secured, 1); health = still_at_risk ≤ 2.0 → "Improving" | ≤ 5.0 → "Stabilising" | > 5.0 → "Critical".
- Display as 3 updating stat tiles: "Revenue Secured ($M)", "Still at Risk ($M)", "Portfolio Health".
- Label the panel: "What-If: Escalation Resolution".
- Use slate #0F172A for the slider; green for Improving, amber for Stabilising, red for Critical health tile.

ESCALATION SECTION — display AFTER simulation, BEFORE project table:
[ESCALATION_PRIORITY → Which of the two Red projects is the more urgent escalation requiring VP action today, and why? The other is serious — but one requires a decision in this meeting that cannot wait. Name your choice and state the specific decision needed.]

Show both Red projects as prominent red escalation cards. For each: project name, client, risk statement from the data file, budget consumed %, client satisfaction score, and the specific decision required.

P003 ACTION:
[P003_ACTION → Write the specific action required for the P003 Foxconn project. Who is the accountable owner, what must they do, and by what date?]

P010 ACTION:
[P010_ACTION → Write the specific action required for the P010 Panasonic APAC project. What happens if the data quality issue is not resolved by the deadline? Who owns this escalation and by when?]

PROJECT TABLE — all 10 projects:
Columns: ID | Project Name | Client | Status (RAG badge) | Budget Consumed % (progress bar) | Next Milestone | Client Satisfaction
Sort: Red first, then Amber, then Green. Source: Project Details sheet.
RAG badge: filled colour background, white text. Budget bar: green if <70%, amber if 70–85%, red if >85%.

CHARTS:
1. Portfolio RAG donut — Green / Amber / Red count. Source: Portfolio Scorecard sheet.
2. Budget consumed by project — horizontal bar chart, all projects, sorted descending. Red projects must visually stand out. Source: Project Details sheet.

RAG LABELS: Add text labels to every RAG badge — "Red", "Amber", "Green" — not colour alone. Include the project ID next to the label.

ANIMATION — do not change or remove any of these:
- Revenue at risk tile: counts up from $0 to actual on page load, 2.2s easeOut — this is the hero counter, the number must land with weight
- All other summary tiles: 150ms fade-in, stagger 80ms apart
- Simulation stat tiles: 150ms fade-in on page load, then instant update as slider moves
- Portfolio RAG donut: 150ms sweep-in clockwise, Red segment first
- Budget bars: 150ms stagger fill, 60ms between bars, colour transitions in with fill
- Project table rows: 150ms cascade fade-in, 60ms between rows, Red rows first
- Escalation cards: 150ms slide-in from left, 150ms stagger between P003 and P010
- Chart sections: 150ms fade up when scrolled into view

INTERACTIVITY: Alpine.js RAG filter — All / Red / Amber / Green. Clicking a status filters the project table to that RAG group. Red is the default view on page load — leadership opens to escalations first.

One complete self-contained HTML file. All data from the attached Excel file — no hardcoded values, no fetch calls. Output the complete HTML file in one code block. Do not add explanation before or after. Do not truncate. Do not ask if I want to continue.

## checkpoint

Your prompt is ready when:
- [ ] You named the two VP-level decisions that must leave this meeting
- [ ] Your portfolio narrative states the management story, not just the counts
- [ ] You identified which Red project is more urgent and why
- [ ] P003 action names an owner, a specific action, and a date
- [ ] P010 action addresses what happens if the issue is not resolved by the deadline
- [ ] All files are attached: xlsx + pdf + 2 screenshots + logo
