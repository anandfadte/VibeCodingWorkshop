# Complete Prompt — APAC Project Portfolio Dashboard
> Facilitator reference. All narrative placeholders filled with example answers.
> Fire-ready: attach project_tracker.json and paste as-is to test or demo.
> This file is not shown in the platform — it is for facilitator use only.

---

Build a single-file HTML project portfolio dashboard for Genpact Client Delivery APAC.

AUDIENCE:
Priya Nair (VP Client Delivery) is running the December 2024 monthly leadership review with her 8 delivery directors; the meeting must leave with two VP-level decisions: whether to invoke the penalty clause waiver negotiation with Sunrise Distribution before December 15, and whether to approve the $420k change request on Apex Global or escalate to the Managing Director for client negotiation.

DATA: Attach project_tracker.json to this conversation. Read all project statuses, RAG ratings, contract values, budget consumed %, milestone states, risk statements, and client satisfaction scores directly from the file — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Background #F8FAFC. Accent #0F172A (slate). Text #1E293B. White card surfaces. RAG: Green #16A34A, Amber #D97706, Red #DC2626. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png.

PORTFOLIO NARRATIVE:
The APAC portfolio enters December with 54.5% on-track and $8.2M in revenue at risk — a concentration problem, not a spread: the two largest Red projects (P003 at $2.6M and P010 at $4.2M) account for 83% of that risk figure, and both have already missed key milestones rather than being merely at risk; this is a client relationship and margin management problem, not a delivery execution problem, and leadership must leave this meeting with named owners and decision dates on both.

PORTFOLIO SUMMARY ROW — 5 stat tiles at the top:
Tile 1 — Total Projects: total, with breakdown (Green / Amber / Red)
Tile 2 — Revenue at Risk: the dollar figure. Source: summary.revenue_at_risk_usd. Make this tile Red — it is the headline number.
Tile 3 — On-Track Rate: % of portfolio Green. Source: summary.on_track_pct.
Tile 4 — Headcount Deployed: total people. Source: summary.total_headcount_deployed.
Tile 5 — Q1 Deliveries: projects due next quarter. Source: summary.projects_due_q1_2025.

ESCALATION SECTION — display before the project list:
P010 (Apex Global) is the more urgent escalation requiring a decision in this meeting: at 94% budget consumed with 15% of scope incomplete and a $420k change request awaiting client approval, every day without a decision increases the risk that Genpact absorbs the overrun as a margin loss; P003 (Sunrise Distribution) is a client relationship emergency that requires a decision by December 15, but the financial exposure on P010 is larger and the window for a commercial resolution is closing faster.

Show P003 and P010 each as a prominent red escalation card. For each: project name, client, risk statement (from the data file), budget consumed %, client satisfaction score, and the specific decision required.

P003 ACTION:
Daniel Ojo (delivery owner) must present a formal recovery plan to the client by December 10, 2024, addressing the UAT failure root cause, revised go-live date, and penalty clause waiver request — Priya Nair to join the client call as VP sponsor to signal executive accountability and reduce the probability the client invokes the penalty clause.

P010 ACTION:
Rachel Kim (delivery owner) must deliver a written go/no-go recommendation to Priya Nair by December 5, 2024: either the $420k change request is approved by the client and scope is formally locked, or Genpact proposes a reduced scope delivery for the original contract value and closes the project by January 31 — if neither path is viable, the MD must be briefed for client escalation before December 8.

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
