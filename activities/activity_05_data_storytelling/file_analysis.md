# Prompt
> Write your prompt. The scaffold has 5 areas. Areas 1 and 4 are yours to write. Areas 2, 3, and 5 are pre-filled.

## context

A prompt that produces a client-ready campaign performance report needs five things. Two require your judgement — they are blank below. The data instruction, design spec, and output rules are pre-filled to handle the technical constraints.

Copy the scaffold below into your AI tool. Write Areas 1 and 4 from your Frame answers. Leave Areas 2, 3, and 5 unchanged.

## prompt

Build a single-file HTML campaign performance report for the Genpact Enterprise Intelligence Suite launch.

AREA 1 — AUDIENCE & DECISION (write this yourself):
Who is in the room? What is the specific budget decision being made? What is the amount, the channels involved, and the deadline? Use your Frame answers here. 2–3 sentences. Be specific — name the budget figure and the reallocation decision, not just "Q4 planning."

AREA 2 — DATA (do not change this):
Attach campaign_q3_results.xlsx, q4_budget_brief.pdf, screenshot_1.png, screenshot_2.png, and genpact_logo.png to this conversation. Read all spend figures, lead volumes, conversion rates, and cost-per-opportunity by channel directly from campaign_q3_results.xlsx — do not ask me for numbers, do not hardcode values.

AREA 3 — DESIGN (do not change this):
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>
Inter font. Primary #1D4ED8 (blue). Background #F8FAFC. White card surfaces. Text #1E293B. Best performer: green #16A34A. Worst performer: red #DC2626. Embed genpact_logo.png in the report header. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png exactly. Add entrance animations — the headline miss should land with impact on load.

AREA 4 — WHAT TO BUILD (write this yourself):
Describe the sections and charts you decided on in Frame. What is the opening story — the headline metric that sets the context? What is the central channel comparison visual? What data tells the budget reallocation case? What is your Q4 recommendation section? Be specific — the AI builds exactly what you describe.

AREA 5 — OUTPUT FORMAT (do not change this):
One complete self-contained HTML file. All data from the attached Excel file — no hardcoded numbers, no fetch calls. Output the complete HTML file in one code block. Do not add explanation before or after. Do not truncate. Do not ask if I want to continue.

## checkpoint

Before you fire:
- Area 1 names the budget figure being decided and the deadline — not just "Q4 planning meeting"
- Area 4 describes at least 3 sections with the opening story and recommendation section clearly defined
- All 5 files are ready to attach: campaign_q3_results.xlsx, q4_budget_brief.pdf, screenshot_1.png, screenshot_2.png, genpact_logo.png
