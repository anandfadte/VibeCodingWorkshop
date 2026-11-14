# Stack
> Pick your CDN toolkit before writing your first prompt — 5 minutes here saves 20 minutes of debugging.

## scenario

You have a client QBR dashboard to build. The data is ready. The deadline is real. Before you open your AI tool, you need to make one decision: **what stack are you building with?**

In vibe coding, the AI will fill in tech decisions for you if you do not make them first — and those decisions are often wrong. A React component you cannot install. TypeScript that breaks in a plain browser. A framework that needs a build step. The result: 20 minutes debugging before you have built a single chart.

Pick your stack now. Lock it in. It takes 5 minutes and shapes every prompt you write from here on.

## context

For this activity you are building a **browser-only HTML dashboard** — single file, no server, no install, opens with a double-click. That constraint makes the stack choice straightforward.

**Tailwind CSS** — utility-first CSS loaded via CDN. Full design system in class names: layout, typography, colour, spacing. No separate CSS file. `<div class="text-2xl font-bold text-indigo-600">` just works.

**Alpine.js** — lightweight JavaScript for interactivity. Tabs, filters, expand/collapse, show/hide — without React or Vue. Uses `x-data`, `x-show`, `x-on:click` attributes directly in HTML. No build step, no bundler.

**ApexCharts** — data visualisation library. Renders bar charts, line charts, donut charts, sparklines into a `<div id="chart">` with a simple JS config object. Professional chart output with zero configuration overhead.

For a data-heavy QBR dashboard, all three are the right call. Together they produce consulting-quality output in a single HTML file.

## do_this

Review the stack card below, then copy it. You will paste it into your build prompt in Phase 2 as your **stack declaration** — the exact libraries the AI must use, and the exact colours it must apply.

Locking in the colour palette here prevents the AI from choosing its own colour scheme, which is almost always generic.

## prompt

STACK — use these exact CDN links, no others:

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

COLOUR PALETTE:
- Primary: #4F46E5
- Background: #F8FAFC
- Surface: #FFFFFF
- Border: #E2E8F0
- Text primary: #1E293B
- Text muted: #64748B

## tip

Why no React, TypeScript, or Node? Vibe coding builds for portability. A single HTML file opens on any laptop, in any browser, with no terminal, no npm install, no "it works on my machine" problem. The constraint is deliberate — you are building a consulting artefact, not a web application. CDN tools are the right tool for the job.

## checkpoint

Before moving on:
- You have the stack card copied and ready to paste
- You know what Tailwind, Alpine.js, and ApexCharts each do
- You have the colour palette noted
- You understand why no React or TypeScript here
