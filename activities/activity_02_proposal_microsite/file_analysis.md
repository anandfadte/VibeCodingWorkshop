# Prompt
> Write your prompt. The scaffold has 5 areas. Areas 1 and 4 are yours to write. Areas 2, 3, and 5 are pre-filled.

## context

A prompt that produces a client-ready proposal microsite needs five things. Two require your judgement — they are blank below. The data instruction, design spec, and output rules are pre-filled to handle the technical constraints.

Copy the scaffold below into your AI tool. Write Areas 1 and 4 from your Frame answers. Leave Areas 2, 3, and 5 unchanged.

## prompt

Build a single-file HTML proposal microsite for Calloway Industries.

AREA 1 — AUDIENCE & DECISION (write this yourself):
Who is in the room? What is Robert Chen's (VP IT) specific concern about the past implementation failure? What decision must Sarah Chen (CFO) and the committee make? Use your Frame answers here. 2–3 sentences. Be specific — name the VP IT objection and the CFO's commitment you need, not just "approve the proposal."

AREA 2 — DATA (do not change this):
Attach calloway_deal_data.xlsx, calloway_competitor_grid.pdf, screenshot_1.png, screenshot_2.png, and genpact_logo.png to this conversation. Read all cost figures, ROI calculations, timeline details, stakeholder concerns, and case study results directly from calloway_deal_data.xlsx — do not ask me for numbers, do not hardcode values.

AREA 3 — DESIGN (do not change this):
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>
Inter font. Dark navy #1E2A4A background. Blue accent #3B82F6. Gold #F59E0B for hero ROI numbers. White card surfaces on navy. Embed genpact_logo.png in the microsite header. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png exactly. Add entrance animations — the ROI hero number should count up on load.

AREA 4 — WHAT TO BUILD (write this yourself):
Describe the sections and interactions you decided on in Frame. What is the opening hook — the first thing Robert Chen sees? What is the hero section that makes the ROI case? Which sections address his specific objection? What is the call to action? Be specific — the AI builds exactly what you describe.

AREA 5 — OUTPUT FORMAT (do not change this):
One complete self-contained HTML file. All data from the attached Excel file — no hardcoded numbers, no fetch calls. Output the complete HTML file in one code block. Do not add explanation before or after. Do not truncate. Do not ask if I want to continue.

## checkpoint

Before you fire:
- Area 1 names Robert Chen's specific concern — not just "CFO approval"
- Area 4 describes at least 3 sections with the opening hook and CTA clearly defined
- All 5 files are ready to attach: calloway_deal_data.xlsx, calloway_competitor_grid.pdf, screenshot_1.png, screenshot_2.png, genpact_logo.png
