# Stack
> HR data needs to communicate urgency and status at a glance — a 16.3% attrition rate must look different from 11.3% before anyone reads the number.

## scenario

You have an HR metrics file for the Genpact APAC Business Unit. The audience is the ExCo in a People Health Review offsite. They need to see which departments are healthy, which are at risk, and what the cost implications are — without digging through spreadsheets.

Before you write a single prompt, pick the stack that will let you build a people-health dashboard with real visual signal: RAG status, benchmark comparisons, and a cost figure that makes leadership sit up.

## context

For an HR analytics dashboard, the design job is to make comparison data legible instantly. Actual vs benchmark. High risk vs low risk. That is a layout and colour challenge, and the right stack handles it.

**Tailwind CSS** — gives you the utility classes to build RAG-coloured indicator chips (red/amber/green backgrounds with white text), department comparison cards, and a clean scorecard grid for headline metrics.

**Alpine.js** — use it to add a department filter or toggle between views (e.g., attrition view vs engagement view). Clean interactivity with no framework.

**ApexCharts** — renders attrition trend lines, department comparison bar charts, and hiring source breakdowns cleanly. The quarterly trend (Q1 3.8% → Q3 4.7% → Q4 3.7%) is a natural line chart.

## do_this

Review the stack card below and copy it. You will paste it into your build prompt in Phase 2 as your **stack declaration**.

This activity uses a purple/violet palette — commonly used for people analytics in professional contexts. The exact hex codes prevent generic "blue HR dashboard" output.

## prompt

STACK — use these exact CDN links, no others:

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<script src="https://cdn.tailwindcss.com"></script>
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>

COLOUR PALETTE:
- Primary: #7C3AED
- Background: #F9F8FF
- Surface: #FFFFFF
- Border: #EDE9FE
- Text primary: #1E293B
- Text muted: #64748B
- Risk Red: #DC2626
- Risk Amber: #D97706
- Risk Green: #16A34A

## tip

The RAG colour definitions are the most important part of the palette. Naming them explicitly (`Risk Red: #DC2626`) prevents the AI from using generic reds and greens that may render inconsistently across browsers or look too similar to distinguish at a glance. Lock them in now.

## checkpoint

Before moving on:
- You have the stack card copied and ready to paste
- You have the three RAG hex codes noted separately — these are what make the dashboard readable
- You understand that Tailwind classes like `bg-red-600` produce a different shade than your named Risk Red — use inline styles or Tailwind config for exact colours
- You are ready to read the data file in Phase 2
