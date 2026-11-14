# Craft
> Build the prompt. Five blanks to fill — all require business judgment, not data lookup.

## context
The AI will read all numbers from prospect_brief.json — pain costs, ROI figures, payback months, case study results, differentiators. Your job is to supply what the data file cannot: who is in the room, what story wins the deal, and which proof point matters most for this specific buyer.

## do_this
Read the five placeholders. Write your answers directly into the prompt below.

## prompt
Build a single-file HTML proposal microsite for Calloway Industries.

AUDIENCE:
[WHO_IS_IN_THE_ROOM → one sentence: who is presenting this, to whom, and what decision does the room need to make? Name the economic buyer and state his specific concern.]

DATA: Attach prospect_brief.json to this conversation. Read all cost figures, ROI calculations, timeline details, and case study results directly from the file — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Dark navy #1E2A4A background. Blue accent #3B82F6. Gold #F59E0B for hero ROI numbers. White card surfaces on navy. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png.

OPENING HOOK:
[OPENING_HOOK → Write the single sentence that opens the hero section — the one that makes the CPO stop scrolling. It must quantify the cost of the status quo before offering a solution. Do not name the vendor in the hook.]

PAIN POINTS SECTION:
Display all four pain areas as cards with their annual cost impact. Source: current_state_pain_points array.
Show Total Addressable Cost as the section total. Source: total_addressable_cost_usd.
Each card: pain area, one-line problem statement, root cause, and cost figure.

ROI HERO SECTION:
3-year ROI %, payback months, and net 3-year benefit as the three dominant stat tiles.
Source: investment_and_roi object. These three numbers close the deal — make them the visual hero of the page.

STAKEHOLDER SECTION — 3 expandable cards, one per stakeholder:
Robert Chen (CPO): his concern is not cost alone — name the specific past event that made him skeptical. Source: stakeholders.economic_buyer.concern.
Sarah Whitfield (VP Operations): address her team capacity problem with the specific percentage from the data. Source: stakeholders.champion.priority.
Marcus Webb (Head of IT & Digital): his requirement has a one-word answer. Source: genpact_differentiators[0].

CASE STUDY:
[CASE_STUDY_CHOICE → Which case study should appear first — Nordic Manufacturing Group or Pacific Distribution Co? Name your choice and explain in one sentence why it is the stronger proof point for Robert Chen specifically.]
Display the chosen case study with: challenge, solution, results (cycle days, exception rate, savings), and the client quote.

COMPETITIVE DIFFERENTIATORS:
[COMPETITIVE_EDGE → Which one of the four Genpact differentiators matters most to Robert Chen's specific concern (the failed transformation)? Quote it exactly from the data file and explain in one sentence why it directly addresses his skepticism.]
Display all four differentiators. Visually highlight the one you chose above.

CALL TO ACTION:
[CTA_ASK → Write the specific ask at the end of the microsite. What action should Robert Chen take, by when, and what does Genpact offer to make it easy for him to say yes? Reference the decision timeline from the data.]

ANIMATION — do not change or remove any of these:
- Total addressable cost: counts up from $0 to actual on page load, 2.5s easeOut
- 3-year ROI %: counts up from 0 to actual, 2s easeOut
- Payback months: counts down from 36 to actual, 1.8s (shows the transformation)
- Pain point cards: cascade fade-in top to bottom, 150ms between each card
- ROI tiles: scale-in simultaneously on page load, 400ms, slight bounce easing
- Case study card: slides in from the right when scrolled into view, 500ms
- Stakeholder cards: stagger fade-up left to right, 120ms between cards
- Competitive differentiator items: stagger reveal on scroll, 80ms between items
- Hero section numbers: cascade count-up left to right, 200ms stagger
- Section dividers: draw left-to-right as each section enters viewport, 600ms

INTERACTIVITY: Alpine.js — each stakeholder card expands on click to show the specific concern and how the solution addresses it.

One complete self-contained HTML file. All numbers from the attached JSON file — no hardcoded values, no fetch calls.

## checkpoint
Your prompt is ready when:
- [ ] You named the economic buyer and stated his specific concern
- [ ] Your opening hook quantifies the problem without naming the vendor
- [ ] You chose a case study and explained why it fits Robert Chen specifically
- [ ] You identified the one differentiator that addresses his skepticism about failed transformations
- [ ] Your CTA asks for a specific action before the data file's decision deadline
