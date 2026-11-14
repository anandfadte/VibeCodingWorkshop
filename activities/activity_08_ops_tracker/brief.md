# Stack
> A project portfolio dashboard must communicate RAG status before the viewer reads a single word — the first 3 seconds of opening this file determine whether Priya Nair walks into her leadership review confident or uncertain.

## scenario

You have a project portfolio file for Genpact's APAC Client Delivery team. The audience is Priya Nair, VP Client Delivery, preparing for a Monday morning leadership review. There are 10 projects. Three are Red. $8.2M is at risk. Two projects need to be escalated today.

Before you write a single prompt, pick the stack that makes it impossible to miss a Red project — even when scrolling fast.

## context

For an operational portfolio dashboard, the primary design job is status visibility. A Red project card must look physically different from an Amber one — different background, different border, different weight. Tailwind and Alpine.js handle this directly.

**Tailwind CSS** — conditional colour classes make RAG-coloured project cards straightforward: a Red card gets `border-red-500 bg-red-50`, a Green card gets `border-green-500 bg-green-50`. No custom CSS needed.

**Alpine.js** — adds the filter buttons (All / Red / Amber / Green) and the expandable project detail panel. These are the two interactions that make the dashboard useful in a live meeting — filter to Red, click to expand, see the risk. All done with Alpine's `x-data` and `x-show`.

**ApexCharts** — optional for this activity but useful for a RAG summary donut chart in the header or a budget consumption bar chart across the 10 projects.

## do_this

Review the stack card below and copy it. You will paste it into your build prompt in Phase 2 as your **stack declaration**.

This activity uses a teal palette for the UI chrome, with hard-coded RAG colours that must not be softened or blended. These are operational status colours — they carry meaning.

## prompt

STACK — use these exact CDN links, no others:

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

COLOUR PALETTE:
- Primary: #0D9488
- Background: #F0FDFA
- Surface: #FFFFFF
- Border: #CCFBF1
- Text primary: #1E293B
- Text muted: #64748B
- RAG Red: #DC2626 (border #FCA5A5, background #FEF2F2)
- RAG Amber: #D97706 (border #FCD34D, background #FFFBEB)
- RAG Green: #16A34A (border #86EFAC, background #F0FDF4)

## tip

The RAG colours are non-negotiable. If you let the AI pick them, it will use CSS class names like `bg-red-100` without specifying the exact border and background combination needed. Specifying all three values per status (text, border, background) in your build prompt is what makes the cards render correctly the first time.

## checkpoint

Before moving on:
- You have the stack card with the full RAG colour definitions copied
- You understand that RAG colour clarity is the primary design goal here
- You understand Alpine.js will handle the filter buttons and expandable detail panels
- You are ready to read the portfolio data file in Phase 2
