# Stack
> A campaign performance report is a decision document — by the end, the reader must know which channels to cut, which to double, and why. The stack shapes whether the charts make that obvious or bury it.

## scenario

You have a campaign analysis file for the Genpact Enterprise Intelligence Suite launch. The audience is the marketing leadership team making Q4 budget decisions. They spent $1.72M. They hit 44.7% of their opportunity target. They need to understand why — and they need a clear recommendation.

Before you write a single prompt, pick the stack that will let you build a channel comparison report where the gap between best and worst performers is immediately visible.

## context

For a campaign performance report, the design job is to make comparison and trend data readable in one pass. Channel efficiency (cost per opportunity), conversion funnel, and monthly trend all need to coexist in a single narrative document.

**Tailwind CSS** — handles the narrative layout: a headline summary section, channel performance cards, a funnel diagram, and a recommendations section. All achieved with utility classes.

**Alpine.js** — optional but useful for a channel toggle or a show/hide detail mode on each channel card. Keeps the report focused by default and detailed on demand.

**ApexCharts** — renders bar charts comparing channels by cost-per-opportunity, a line chart for monthly spend vs pipeline, and a horizontal funnel showing the conversion drop-offs.

## do_this

Review the stack card below and copy it. You will paste it into your build prompt in Phase 2 as your **stack declaration**.

This activity uses a cyan/teal palette — associated with data clarity and analytical confidence in marketing contexts.

## prompt

STACK — use these exact CDN links, no others:

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

COLOUR PALETTE:
- Primary: #0891B2
- Background: #F0FAFB
- Surface: #FFFFFF
- Border: #CFFAFE
- Text primary: #1E293B
- Text muted: #64748B
- Best performer highlight: #16A34A
- Worst performer highlight: #DC2626

## tip

The two highlight colours — best performer green and worst performer red — are what make a channel comparison report legible instantly. Without them, every bar in the chart looks equally important. With them, the reader's eye goes straight to Executive Roundtables (best) and Webinars (worst) in under 3 seconds. Lock in these colours now so they appear in your build prompt.

## checkpoint

Before moving on:
- You have the stack card copied and ready to paste
- You have the best/worst performer highlight colours noted
- You understand the report structure: summary → channel comparison → funnel → recommendations
- You are ready to read the campaign data file in Phase 2
