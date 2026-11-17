# Prompt
> Write your prompt. The scaffold has 5 areas. Areas 1 and 4 are yours to write. Areas 2, 3, and 5 are pre-filled.

## context

A prompt that produces a client-ready portfolio dashboard needs five things. Two require your judgement — they are blank below. The data instruction, design spec, and output rules are pre-filled to handle the technical constraints.

Copy the scaffold below into your AI tool. Write Areas 1 and 4 from your Frame answers. Leave Areas 2, 3, and 5 unchanged.

## prompt

Build a single-file HTML project portfolio dashboard for Genpact Client Delivery APAC.

AREA 1 — AUDIENCE & DECISIONS (write this yourself):
Who is in the room? What two or more decisions require VP-level authority? What happens to the portfolio if those decisions are not made today? Use your Frame answers here. 2–3 sentences. Be specific — name the decisions, not just "escalation review."

AREA 2 — DATA (do not change this):
Attach apac_portfolio_tracker.xlsx, escalation_matrix.pdf, screenshot_1.png, screenshot_2.png, and genpact_logo.png to this conversation. Read all project statuses, RAG ratings, contract values, budget consumed %, milestone states, risk statements, and client satisfaction scores directly from apac_portfolio_tracker.xlsx — do not ask me for numbers, do not hardcode values.

AREA 3 — DESIGN (do not change this):
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>
Inter font. Background #F8FAFC. Accent #0F172A (slate). Text #1E293B. White card surfaces. RAG: Green #16A34A, Amber #D97706, Red #DC2626. Embed genpact_logo.png in the dashboard header. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png exactly. Add entrance animations — the revenue at risk figure should count up on load.

AREA 4 — WHAT TO BUILD (write this yourself):
Describe the sections and interactions you decided on in Frame. What is the hero section — the opening that makes leadership stop? How are the escalation cards presented? What does the project table show and how is it sorted? What interactivity does the VP review need — filtering, expanding, drilling down? Be specific — the AI builds exactly what you describe.

AREA 5 — OUTPUT FORMAT (do not change this):
One complete self-contained HTML file. All data from the attached Excel file — no hardcoded numbers, no fetch calls. Output the complete HTML file in one code block. Do not add explanation before or after. Do not truncate. Do not ask if I want to continue.

## checkpoint

Before you fire:
- Area 1 names at least two specific VP-level decisions — not just "portfolio review"
- Area 4 describes at least 3 sections with the escalation presentation and project table clearly defined
- All 5 files are ready to attach: apac_portfolio_tracker.xlsx, escalation_matrix.pdf, screenshot_1.png, screenshot_2.png, genpact_logo.png
