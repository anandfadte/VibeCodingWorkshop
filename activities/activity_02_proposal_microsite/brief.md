# Stack
> A sales proposal is a persuasion artefact — your font, colour, and layout choices signal credibility before the client reads a word. Pick your stack accordingly.

## scenario

You have a prospect brief for Calloway Industries, a $2.4B industrial manufacturer. The sales team needs a proposal microsite to present to three stakeholders next week: a CPO who had a bad experience with a previous vendor, a VP Operations who is stretched thin, and a Head of IT who cares about SAP compatibility.

Before you write a single prompt, make one decision: what stack will produce a proposal that looks like it deserves a $2.1M investment?

## context

For a sales proposal microsite, the design signals matter as much as the content. The right stack gives you the layout flexibility to build a multi-section, stakeholder-aware document — without the complexity of a framework.

**Tailwind CSS** — full design system in class names. Gives you typographic control, section spacing, and professional card layouts. Dark header sections and accent colours are straightforward with Tailwind utility classes.

**Alpine.js** — interactivity without React. Use it for a tab strip (one tab per stakeholder), expandable solution cards, or a show/hide ROI breakdown. No build step, no bundler.

**ApexCharts** — renders a 3-year ROI bar chart or cost-vs-savings comparison cleanly with one JS config object.

For a sales proposal, all three are the right choice. The result: a multi-section microsite with real interactivity that opens from a file.

## do_this

Review the stack card below and copy it. You will paste it into your build prompt in Phase 2 as your **stack declaration**.

This activity uses a deep blue palette — appropriate for a professional B2B proposal in an industrial sector. Using the exact hex codes prevents the AI from choosing a generic colour scheme.

## prompt

STACK — use these exact CDN links, no others:

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

COLOUR PALETTE:
- Primary: #1E40AF
- Accent: #3B82F6
- Background: #F8FAFC
- Surface: #FFFFFF
- Border: #DBEAFE
- Text primary: #1E293B
- Text muted: #64748B

## tip

A proposal microsite is not the same as a dashboard. Layout choices differ: a dashboard organises data spatially, a proposal guides the reader through a story. Use Tailwind to build a full-page, scroll-down narrative — not a grid of charts. Each section should answer one question a specific stakeholder is asking.

## checkpoint

Before moving on:
- You have the stack card copied and ready to paste
- You understand the difference between a proposal layout and a dashboard layout
- You have the colour palette noted — deep blue signals professional credibility
- You understand that Alpine.js will handle the tab strip or expandable sections
