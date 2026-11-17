# Prompt
> Write your prompt. The scaffold has 5 areas. Areas 1 and 4 are yours to write. Areas 2, 3, and 5 are pre-filled.

## context

A prompt that produces a client-ready HR executive dashboard needs five things. Two require your judgement — they are blank below. The data instruction, design spec, and output rules are pre-filled to handle the technical constraints.

Copy the scaffold below into your AI tool. Write Areas 1 and 4 from your Frame answers. Leave Areas 2, 3, and 5 unchanged.

## prompt

Build a single-file HTML HR analytics dashboard for Genpact executive leadership.

AREA 1 — AUDIENCE & DECISION (write this yourself):
Who is in the room? What is the specific decision HR leadership needs to make? What metric or trend is driving urgency? Use your Frame answers here. 2–3 sentences. Be specific — name the audience level and the actual decision, not just "CHRO review."

AREA 2 — DATA (do not change this):
Attach genpact_hr_metrics.xlsx, hr_benchmark_targets.pdf, screenshot_1.png, screenshot_2.png, and genpact_logo.png to this conversation. Read all headcount, attrition, performance, and DEI figures directly from genpact_hr_metrics.xlsx — do not ask me for numbers, do not hardcode values.

AREA 3 — DESIGN (do not change this):
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>
Inter font. Primary #0F766E (teal). Background #F8FAFC. White card surfaces. Text #1E293B. Embed genpact_logo.png in the dashboard header. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png exactly. Add entrance animations — the most urgent metric should count up on load.

AREA 4 — WHAT TO BUILD (write this yourself):
Describe the sections and charts you decided on in Frame. What is the hero metric — the number that opens the story? What comparison tells the most important story (actual vs benchmark, vs last quarter, vs target)? Which department breakdown is most important? What interactivity do leaders need? Be specific — the AI builds exactly what you describe.

AREA 5 — OUTPUT FORMAT (do not change this):
One complete self-contained HTML file. All data from the attached Excel file — no hardcoded numbers, no fetch calls. Output the complete HTML file in one code block. Do not add explanation before or after. Do not truncate. Do not ask if I want to continue.

## checkpoint

Before you fire:
- Area 1 names the leadership audience and states the specific decision — not just "people review"
- Area 4 describes at least 3 sections with the hero metric and key comparison clearly defined
- All 5 files are ready to attach: genpact_hr_metrics.xlsx, hr_benchmark_targets.pdf, screenshot_1.png, screenshot_2.png, genpact_logo.png
