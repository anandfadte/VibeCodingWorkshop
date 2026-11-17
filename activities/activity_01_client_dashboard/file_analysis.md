# Prompt
> Write your prompt. The scaffold has 5 areas. Areas 1 and 4 are yours to write. Areas 2, 3, and 5 are pre-filled.

## context

A prompt that produces a client-ready dashboard needs five things. Two require your judgement — they are blank below. The data instruction, design spec, and output rules are pre-filled to handle the technical constraints.

Copy the scaffold below into your AI tool. Write Areas 1 and 4 from your Frame answers. Leave Areas 2, 3, and 5 unchanged.

## prompt

Build a single-file HTML QBR dashboard for Meridian Retail Group.

AREA 1 — AUDIENCE & DECISION (write this yourself):
Who is in the room? What decision must they make? What number tips that decision? Use your Frame answers here. 2–3 sentences. Be specific — a named audience and a named decision, not "leadership team" and "review the quarter."

AREA 2 — DATA (do not change this):
Attach meridian_q4_data.xlsx, screenshot_1.png, screenshot_2.png, and genpact_logo.png to this conversation. Read all revenue figures, client details, and pipeline values directly from meridian_q4_data.xlsx — do not ask me for numbers, do not hardcode values.

AREA 3 — DESIGN (do not change this):
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>
Inter font. Primary #4F46E5 (indigo). Background #F8FAFC. White card surfaces. Text #1E293B. Embed genpact_logo.png in the dashboard header. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png exactly. Add entrance animations — the most important number should count up on load.

AREA 4 — WHAT TO BUILD (write this yourself):
Describe the sections, charts, and interactions you decided on in Frame. What is the hero section — the most visually prominent part? What data story do the charts tell? Is there an at-risk client section? What interactivity does the dashboard need? Be specific — the AI builds exactly what you describe, not what you assumed.

AREA 5 — OUTPUT FORMAT (do not change this):
One complete self-contained HTML file. All data from the attached Excel file — no hardcoded numbers, no fetch calls. Output the complete HTML file in one code block. Do not add explanation before or after. Do not truncate. Do not ask if I want to continue.

## checkpoint

Before you fire:
- Area 1 names a specific audience and a specific decision — not generic labels
- Area 4 describes at least 3 sections with enough detail for the AI to know what to build
- All 4 files are ready to attach: meridian_q4_data.xlsx, screenshot_1.png, screenshot_2.png, genpact_logo.png
