## overview

This is the build phase. Run the architecture prompt first to plan the dashboard, then run the full build prompt. The two-step approach produces significantly better output than a single "build me a dashboard" prompt.

## skill_chain

/architect → /code-builder → /human

## prompt

You are a senior HR analytics consultant and UI designer. I need an architecture plan — no code yet — for an executive HR analytics dashboard.

**Context:** This dashboard is for the Genpact APAC Business Unit people health review for Q4 FY2024. The audience is the ExCo (Executive Committee) at their January 2025 offsite. The presenter is the VP of HR. The dashboard will be shown on a large screen and also shared as a file.

**Sections to include — give me the layout and content plan for each:**

1. **Executive Summary row** — 5 KPI cards across the top: Total Headcount (2,847/3,000), Attrition Rate (16.3% vs 13.5% benchmark, flagged Amber), Engagement Score (68/100 vs 72 benchmark, flagged Amber), Time to Fill (47 days vs 35 benchmark, flagged Amber), Attrition Cost YTD ($12.8M)

2. **Headcount by Department** — a horizontal bar chart showing each of the 7 departments with actual vs. target bars side by side, and a small "open roles" badge on each bar

3. **Attrition Deep-Dive** — two charts: (a) a quarterly trend line showing Q1–Q4 attrition rate with the benchmark line overlaid, and (b) a horizontal bar chart showing attrition by department with a coloured RAG indicator (Red for >3 pts over benchmark, Amber for 1–3 pts, Green for at/below)

4. **Hiring Pipeline** — a funnel showing: Applications (2,847) → Screens (612) → Interviews (318) → Offers (141) → Hires (118), with the offer acceptance rate (83.7%) and time-to-fill (47 days vs. 35 days) prominently displayed

5. **Engagement & Culture** — a horizontal bar chart with department engagement scores, each bar coloured by gap to benchmark, with the top 3 concerns listed as callout cards

6. **Top Risks & Recommendations** — 3 action cards, each showing: risk area, metric, and a recommended action

**Design requirements:**
- Professional, board-ready aesthetic — this is for an executive committee, not an operations review
- Color scheme: white background (#FFFFFF), dark navy text (#1E293B), traffic light indicators (Green #22C55E, Amber #F59E0B, Red #EF4444), Genpact indigo (#4F46E5) for primary chart bars
- Typography: Inter font from Google Fonts
- Each KPI card should show: metric name, actual value, benchmark value (if applicable), and a RAG dot
- Mobile-friendly but optimised for desktop/projector

Give me the architecture plan only. No HTML code yet.

## prompt_2

Now build the complete, single-file HTML dashboard based on the architecture plan above and the Genpact APAC HR metrics data I shared earlier.

**Technical requirements — follow these exactly:**
- Single self-contained HTML file, no external dependencies except CDN links
- CDN links to use:
  - Tailwind CSS: `<script src="https://cdn.tailwindcss.com"></script>`
  - Alpine.js: `<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>`
  - ApexCharts: `<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>`
  - Inter font: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">`
- All data must be inline as JavaScript objects — no fetch calls, no external JSON files

**Data to inline — use exactly these values:**

```javascript
const data = {
  reportingPeriod: "Q4 FY2024 (Oct – Dec 2024)",
  businessUnit: "Genpact APAC",
  preparedFor: "ExCo People Health Review — January 2025",

  kpis: [
    { label: "Total Headcount", value: "2,847", target: "3,000", unit: "", rag: "amber", subtext: "94.9% of target" },
    { label: "Attrition Rate YTD", value: "16.3%", target: "13.5%", unit: "", rag: "amber", subtext: "+2.8 pts above benchmark" },
    { label: "Engagement Score", value: "68", target: "72", unit: "/100", rag: "amber", subtext: "-4 pts below benchmark" },
    { label: "Time to Fill", value: "47 days", target: "35 days", unit: "", rag: "amber", subtext: "+34% over benchmark" },
    { label: "Attrition Cost YTD", value: "$12.8M", target: null, unit: "", rag: "red", subtext: "$38,200 per exit" }
  ],

  departments: [
    { name: "Client Delivery", headcount: 1240, target: 1300, openRoles: 62, attrition: 18.4, benchmark: 13.5, engagement: 63, engBenchmark: 72 },
    { name: "Technology & Digital", headcount: 487, target: 520, openRoles: 34, attrition: 21.2, benchmark: 16.0, engagement: 71, engBenchmark: 74 },
    { name: "Finance Operations", headcount: 398, target: 420, openRoles: 23, attrition: 11.3, benchmark: 12.0, engagement: 76, engBenchmark: 71 },
    { name: "Sales & Biz Dev", headcount: 186, target: 200, openRoles: 15, attrition: 14.8, benchmark: 15.0, engagement: 74, engBenchmark: 73 },
    { name: "Human Resources", headcount: 143, target: 150, openRoles: 9, attrition: 9.1, benchmark: 10.0, engagement: 79, engBenchmark: 72 },
    { name: "Risk & Compliance", headcount: 211, target: 220, openRoles: 11, attrition: 10.7, benchmark: 11.0, engagement: 72, engBenchmark: 70 },
    { name: "Support & Admin", headcount: 182, target: 190, openRoles: 39, attrition: 16.9, benchmark: 13.0, engagement: 61, engBenchmark: 69 }
  ],

  attritionTrend: [
    { quarter: "Q1 FY24", rate: 3.8 },
    { quarter: "Q2 FY24", rate: 4.1 },
    { quarter: "Q3 FY24", rate: 4.7 },
    { quarter: "Q4 FY24", rate: 3.7 }
  ],

  hiringFunnel: [
    { stage: "Applications", count: 2847 },
    { stage: "Phone Screens", count: 612 },
    { stage: "Interviews", count: 318 },
    { stage: "Offers Extended", count: 141 },
    { stage: "Hires", count: 118 }
  ],

  hiringSources: [
    { source: "Employee Referral", hires: 42, costPerHire: 2800 },
    { source: "LinkedIn", hires: 31, costPerHire: 4200 },
    { source: "Job Boards", hires: 24, costPerHire: 3600 },
    { source: "Agency", hires: 14, costPerHire: 8900 },
    { source: "Direct Apply", hires: 7, costPerHire: 1200 }
  ],

  topConcerns: [
    "Workload and burnout risk",
    "Compensation competitiveness",
    "Career progression clarity"
  ],

  topStrengths: [
    "Team collaboration",
    "Client impact",
    "Learning opportunities"
  ],

  actionCards: [
    { risk: "Client Delivery Attrition", metric: "18.4% — 4.9 pts above benchmark", action: "Launch retention programme for top 50 performers. Compensation review for Bands 3–5 by Feb 2025." },
    { risk: "Technology & Digital Flight Risk", metric: "21.2% — highest in portfolio", action: "Immediate manager listening sessions. Benchmark comp against tech sector. Identify top 10 at-risk roles." },
    { risk: "Hiring Speed", metric: "47-day fill time vs. 35-day benchmark", action: "Increase employee referral bonus. Pre-approve offer letters for top 20 priority roles." }
  ]
};
```

**Chart specifications:**
- KPI cards row: 5 cards with RAG dot (coloured circle), main value in large bold text, benchmark in smaller gray text below
- Headcount chart: ApexCharts grouped horizontal bar (actual in indigo, target in light gray), department names on Y-axis
- Attrition trend: ApexCharts line chart, actual attrition in indigo, benchmark line in amber dashes
- Attrition by department: horizontal bars coloured by RAG status (Red/Amber/Green based on vs benchmark)
- Hiring funnel: an HTML/CSS funnel (tapered blocks, not a chart) in shades of indigo from dark to light
- Engagement by department: ApexCharts horizontal bar coloured by gap to benchmark
- Action cards: three cards with Red left border, risk title, metric in bold, action in body text

**Quality bar:** This should look like a Workday or SAP SuccessFactors analytics screen — clean, data-dense, executive-ready. No decorative elements. Every number must come from the data object. Build the complete file now.
