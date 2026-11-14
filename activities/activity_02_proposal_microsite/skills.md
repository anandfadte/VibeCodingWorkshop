## overview

This is the build phase. You will run two prompts in sequence — first an architecture plan, then the full HTML build. Do not skip the architecture step: it forces your AI to think before coding and produces dramatically better output.

## skill_chain

/architect → /code-builder → /human

## prompt

You are a senior consulting presentation designer. I need an architecture plan — no code yet — for an interactive HTML proposal microsite for a B2B sales situation.

**Context:** I've shared a prospect brief for Calloway Industries, an industrial manufacturing company ($2.4B revenue, 8,200 employees). We are proposing Genpact Intelligent Finance Operations to solve their AP automation and procurement challenges.

**Audience:** The microsite will be presented by a Genpact account manager to three executives: the CPO (economic buyer), VP Operations (champion), and Head of IT (technical evaluator).

**Sections to include — give me the layout and content plan for each:**

1. **Hero section** — company name ("Calloway Industries"), a one-line problem statement, and three hero stats side by side: Total Cost of Current State ($8.35M), 3-Year ROI (215%), Payback Period (14 months)
2. **Pain Landscape** — four pain point cards with: area name, one-sentence problem, annual cost impact in USD. Use icons to represent each area (invoices, suppliers, exceptions, compliance)
3. **Our Solution** — four solution component cards, each showing: component name, one-line description, outcome metric with an arrow (before → after)
4. **Business Case** — a three-column investment vs. savings layout showing Year 1, Year 2, Year 3; and a visual ROI timeline showing when payback hits (month 14)
5. **Proof Points** — two case study cards side by side, each showing: client name, industry, challenge, key result metrics, and a quote
6. **Why Genpact** — four differentiator bullets, each with an icon and a 10-word proof statement
7. **Next Steps** — a simple three-step timeline: Decision by Dec 15, Implementation starts Feb 2025, Go-live Jul 2025

**Design requirements:**
- Professional B2B consulting aesthetic — not a startup landing page
- Color scheme: deep navy (#1E293B) backgrounds, electric indigo (#4F46E5) accents, white cards
- Typography: Inter font from Google Fonts, weight 700 for headlines, 400 for body
- Each section should answer one stakeholder question (label each section header with a subtle "What this means for you:" framing)
- Mobile-friendly layout

Give me the architecture plan only. No HTML code yet.

## prompt_2

Now build the complete, single-file HTML microsite based on the architecture plan above and the Calloway Industries prospect brief data I shared earlier.

**Technical requirements — follow these exactly:**
- Single self-contained HTML file, no external dependencies except CDN links
- CDN links to use:
  - Tailwind CSS: `<script src="https://cdn.tailwindcss.com"></script>`
  - Alpine.js: `<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>`
  - ApexCharts: `<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>`
  - Inter font: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">`
- All data must be inline as JavaScript objects — no fetch calls, no external JSON files

**Data to inline (extract from the prospect brief):**

```javascript
const data = {
  company: {
    name: "Calloway Industries",
    industry: "Industrial Manufacturing & Distribution",
    revenue: "$2.4B",
    employees: "8,200",
    headquarters: "Atlanta, GA"
  },
  heroStats: [
    { label: "Current Cost of Inefficiency", value: "$8.35M", subtext: "Annual — across 4 process areas" },
    { label: "3-Year ROI", value: "215%", subtext: "Net benefit: $5.9M over 3 years" },
    { label: "Payback Period", value: "14 mo", subtext: "From contract signature to breakeven" }
  ],
  painPoints: [
    { area: "Invoice Processing", problem: "14-day cycle vs. 5-day benchmark — 68% of invoices manually keyed", impact: "$3.2M/yr", icon: "📄" },
    { area: "Supplier Management", problem: "1,247 suppliers, 60% managed by manual email — onboarding takes 23 days", impact: "$1.8M/yr", icon: "🏭" },
    { area: "Exception Handling", problem: "23% exception rate vs. 8% benchmark — team spends 60% of time on rework", impact: "$2.4M/yr", icon: "⚠️" },
    { area: "Compliance & Audit", problem: "Failed 2 of 4 recent audits — documentation assembled manually per audit", impact: "$0.95M/yr", icon: "📋" }
  ],
  solution: [
    { name: "AI Invoice Processing", outcome: "14 days → 4 days cycle time" },
    { name: "Supplier Intelligence Portal", outcome: "23 days → 6 days onboarding" },
    { name: "Exception Intelligence Engine", outcome: "23% → 5% exception rate" },
    { name: "Compliance Automation", outcome: "100% audit-ready, no manual assembly" }
  ],
  caseStudies: [
    { client: "Nordic Manufacturing Group", industry: "Industrial Manufacturing — $1.8B", result: "Invoice cycle: 16 days → 4 days | Savings: $4.2M | Payback: Month 11", quote: "Genpact delivered exactly what they promised." },
    { client: "Pacific Distribution Co", industry: "Distribution & Logistics — $890M", result: "Exception rate: 31% → 6% | First post-go-live audit: clean pass", quote: "The documentation just existed — no manual assembly." }
  ],
  differentiators: [
    "Only vendor with live SAP S/4HANA integration at Calloway's exact version (2023 FPS01)",
    "47 active manufacturing clients — exception model trained on this exact sector",
    "Atlanta-based delivery team: 15 minutes from Calloway HQ",
    "Exception prediction accuracy: 93% vs. 71% industry average"
  ],
  investment: [
    { year: "Year 1", invest: "$2.1M", savings: "$3.1M", net: "+$1.0M" },
    { year: "Year 2", invest: "$1.6M", savings: "$4.0M", net: "+$2.4M" },
    { year: "Year 3", invest: "$1.6M", savings: "$4.1M", net: "+$2.5M" }
  ]
};
```

**Layout and styling specifics:**
- Full-width hero with navy (#1E293B) background, three stat boxes in white cards with indigo (#4F46E5) accent borders
- Pain point cards: white background, left border in red (#EF4444) accent, impact in bold red
- Solution cards: white background, left border in green (#22C55E), outcome stat in bold green
- Business case: a simple HTML table with alternating row shading, total row in bold indigo
- Case study cards: light gray (#F8FAFC) background, quote in italic, client name in indigo
- Why Genpact: indigo icon circles with white check marks, differentiator text in dark navy
- Next steps: horizontal timeline with three milestones and connecting line in indigo

**Quality bar:** This should look like a McKinsey or Deloitte leave-behind — clean, data-rich, with no visual clutter. Every number must come from the data object above. No placeholder text. The file must work by double-clicking in any browser with no internet connection (all CDN links must have version numbers).

Build the complete file now.
