# Craft
> Build the prompt. Five blanks to fill — all require deal judgment, not data lookup. The AI reads every number from the file.

## context

The AI will read all figures from **calloway_deal_data.xlsx** (5 sheets: Company Profile, Stakeholders, Pain Points & Value, ROI Model, Case Studies). Read the competitive context from **calloway_competitor_grid.pdf**. Attach **screenshot_1.png**, **screenshot_2.png**, and **genpact_logo.png** alongside. Your job is to supply the five things the data cannot: the hook that opens the deal, which differentiator answers the failed-implementation objection, which case study fits Robert Chen, what the CTA asks, and how aggressive the ROI framing should be.

## do_this

Read the five placeholders. Write your answers directly into the prompt. When every blank is filled and the DESIGN KIT and ANIMATION blocks are unchanged, you are ready to fire.

## prompt

Build a single-file HTML proposal microsite for Calloway Industries.

AUDIENCE:
[WHO_IS_IN_THE_ROOM → one sentence: who is presenting, to whom, and what decision does the room need to make? Name Robert Chen and state his specific concern.]

DATA: Attach calloway_deal_data.xlsx, calloway_competitor_grid.pdf, screenshot_1.png, screenshot_2.png, and genpact_logo.png to this conversation. Read all cost figures, ROI calculations, timeline details, stakeholder concerns, and case study results directly from calloway_deal_data.xlsx — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Dark navy #1E2A4A background. Blue accent #3B82F6. Gold #F59E0B for hero ROI numbers. White card surfaces on navy. Embed genpact_logo.png in the microsite header. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png exactly.

OPENING HOOK:
[OPENING_HOOK → Write the single sentence that opens the hero section — the one that makes Robert Chen stop scrolling. It must quantify the cost of doing nothing. Do not name the vendor in the hook.]

PAIN POINTS SECTION:
Display all pain areas as cards with their annual cost impact. Source: Pain Points & Value sheet.
Show Total Addressable Cost as the section total.
Each card: pain area name, one-line problem statement, root cause, cost figure.

ROI HERO SECTION — above the fold:
3-year ROI %, payback period (months), and net 3-year benefit as the three dominant stat tiles.
Source: ROI Model sheet. These three numbers close the deal — make them the visual hero of the page.

SIMULATION — place this AFTER the ROI hero section and BEFORE the stakeholder cards:
Build an interactive "What-If: ROI at Your Investment Level" panel using Alpine.js.
- A slider: "Total 3-year investment ($M)" ranging from 15 (min) to 25 (max), default set to the base investment figure from the ROI Model sheet.
- Show the current value: "Investment: $XX.XM" updates in real time.
- As the slider moves, recalculate and update live: (a) net 3-year benefit, (b) 3-year ROI %, (c) payback period in months.
- Formula: total_benefit = 64.5 (read from ROI Model sheet, 3-Year Total Benefit row); net_benefit = round(total_benefit − investment, 1); roi_pct = round((net_benefit / investment) * 100); payback = round(investment / (total_benefit / 36)).
- Display as 3 updating stat tiles: "Net 3-Year Benefit ($M)", "3-Year ROI %", "Payback (months)".
- Label the panel: "What-If: ROI at Your Investment Level".
- Sub-label: "Calloway's savings don't change — your investment level does."
- Use gold #F59E0B for the slider and updated tiles.

STAKEHOLDER SECTION — 3 expandable cards, one per stakeholder:
Source: Stakeholders sheet. Each card shows name, title, and priority concern.
On click, the card expands to show the specific concern and how the solution addresses it.
Robert Chen's card must name the specific past event that made him skeptical — read it from the data file.
Sarah Whitfield's card must address her team capacity problem.
Marcus Webb's card must address his technical integration requirement.

CASE STUDY:
[CASE_STUDY_CHOICE → Which case study should appear first — Case Study A (Aerospace) or Case Study B (Industrial Manufacturing)? Name your choice and explain in one sentence why it is the stronger proof point for Robert Chen specifically.]
Display the chosen case study with: challenge, solution, key results, and client quote. Source: Case Studies sheet.

COMPETITIVE DIFFERENTIATORS:
[COMPETITIVE_EDGE → Which one of Genpact's differentiators matters most to Robert Chen's failed-implementation concern? Name it from the calloway_competitor_grid.pdf and explain in one sentence why it directly addresses his skepticism.]
Display all differentiators. Visually highlight the one you chose above.

CALL TO ACTION:
[CTA_ASK → Write the specific ask at the end of the microsite. What action should Robert Chen take, by when, and what does Genpact offer to make it easy to say yes? Reference the decision timeline from the Company Profile sheet.]

ANIMATION — do not change or remove any of these:
- Total addressable cost: counts up from $0 to actual on page load, 2.2s easeOut — this is the hero counter, it must land with weight
- All other stat tiles: 150ms fade-in, stagger 80ms apart
- Simulation stat tiles: 150ms fade-in on page load, then instant update as slider moves
- Pain point cards: 150ms cascade fade-in top to bottom, 80ms between cards
- ROI tiles: 150ms scale-in, stagger 80ms
- Case study card: 150ms slide-in from right when scrolled into view
- Stakeholder cards: 150ms stagger fade-up, 80ms between cards
- Competitive differentiator items: 150ms stagger reveal on scroll, 60ms between items
- Section dividers: 150ms draw left-to-right as each section enters viewport

INTERACTIVITY: Alpine.js — each stakeholder card expands on click to show the specific concern and how the solution addresses it. Tab strip at the top for quick navigation between sections.

One complete self-contained HTML file. All numbers from the attached Excel file — no hardcoded values, no fetch calls. Output the complete HTML file in one code block. Do not add explanation before or after. Do not truncate. Do not ask if I want to continue.

## checkpoint

Your prompt is ready when:
- [ ] You named Robert Chen's specific concern and the past event behind it
- [ ] Your opening hook quantifies the cost of doing nothing without naming the vendor
- [ ] You chose a case study and explained why it fits Robert Chen specifically
- [ ] You identified the one differentiator that addresses the failed-transformation concern
- [ ] Your CTA asks for a specific action before the decision deadline
- [ ] All files are attached: xlsx + pdf + 2 screenshots + logo
