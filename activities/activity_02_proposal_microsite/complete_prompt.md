# Complete Prompt — Calloway Industries Proposal Microsite
> Facilitator reference. All narrative placeholders filled with example answers.
> Fire-ready: attach prospect_brief.json and paste as-is to test or demo.
> This file is not shown in the platform — it is for facilitator use only.

---

Build a single-file HTML proposal microsite for Calloway Industries.

AUDIENCE:
Genpact's VP of Sales is presenting to Robert Chen (CPO), Sarah Whitfield (VP Operations), and Marcus Webb (Head of IT & Digital) at Calloway's Atlanta HQ; the room needs to leave with one decision: whether to select Genpact as their AP automation vendor before December 15, 2024, with Robert Chen needing to believe that this transformation will not repeat the failure of Calloway's previous vendor engagement.

DATA: Attach prospect_brief.json to this conversation. Read all cost figures, ROI calculations, timeline details, and case study results directly from the file — do not ask me for numbers, do not hardcode values.

DESIGN KIT — do not change these lines:
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

DESIGN: Inter font. Dark navy #1E2A4A background. Blue accent #3B82F6. Gold #F59E0B for hero ROI numbers. White card surfaces on navy. Match the layout and visual treatment shown in screenshot_1.png and screenshot_2.png.

OPENING HOOK:
Every year, $8.35M walks out of Calloway's finance operations — not because of market conditions, not because of headcount, but because 68% of invoices are still keyed by hand.

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
Nordic Manufacturing Group leads — it is a direct mirror of Calloway's situation: same industry (industrial manufacturing), same scale ($1.8B revenue, comparable to Calloway's $2.4B), same core problem (invoice cycle time and exception rate), and the client quote directly addresses the concern Robert Chen has about over-promising ("delivered exactly what they promised").
Display the Nordic case study with: challenge, solution, results (cycle days, exception rate, savings), and the client quote.

COMPETITIVE DIFFERENTIATORS:
The differentiator that matters most to Robert Chen is: "Only shortlisted vendor with live SAP S/4HANA integration at Calloway's exact version (2023 FPS01)" — because his skepticism is rooted in a previous vendor who over-promised and under-delivered; a vendor already running on Calloway's exact SAP version cannot fake readiness the way a previous vendor could have.
Display all four differentiators. Visually highlight this one.

CALL TO ACTION:
Request a 2-hour on-site proof of concept at Calloway's Atlanta office before December 1, 2024 — two weeks before the vendor selection deadline — where Genpact will demonstrate the SAP S/4HANA integration live on a sample of Calloway's own invoice data, so Robert Chen can see the system working before committing, addressing his core concern about vendor promises that do not survive implementation.

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
