## overview

This is the build phase. Run the architecture prompt first to plan the report structure, then run the full HTML build. For a data storytelling report, the narrative sequence matters as much as the charts — plan it carefully.

## skill_chain

/architect → /code-builder → /human

## prompt

You are a senior marketing analytics consultant. I need an architecture plan — no code yet — for an interactive HTML campaign performance report.

**Context:** This is the Q3 FY2024 postmortem for the Genpact Enterprise Intelligence Suite Market Launch campaign. We spent $1.72M against a $1.8M budget and generated 67 pipeline opportunities against a target of 150. The report will be presented to the VP of Marketing to drive Q4 budget reallocation decisions.

**The story arc — the report must follow this narrative sequence:**
1. Here is what we set out to do (objectives and budget)
2. Here is how we performed overall (scorecard — headline the miss but frame with what we learned)
3. Here is where the budget went and what it produced (channel breakdown)
4. Here is the conversion story (funnel analysis)
5. Here is who we reached and how they behaved (audience insights)
6. Here is what we should do differently in Q4 (3 specific recommendations)

**Sections to include — give me the layout and content plan for each:**

1. **Campaign Scorecard** — 4 KPI tiles: Total Spend ($1.72M of $1.8M budget — 95.8%), Pipeline Generated ($18.6M), Opportunities Created (67 vs. 150 target — 44.7%), Pipeline ROI (10.8x). Lead with these numbers but add a one-sentence framing: "We deployed 96% of budget and generated 10.8x pipeline — but opportunity volume fell short at 44.7% of target. The story is channel efficiency, not budget."

2. **Channel Performance Table + Chart** — a sortable table showing all 6 channels with: spend, leads, MQLs, SQLs, opportunities, cost per opportunity. Colour-code the cost-per-opportunity column (Green < $20k, Amber $20k–$50k, Red > $50k). Also show a horizontal bar chart of cost-per-opportunity by channel — the Webinars bar should visually dominate.

3. **Conversion Funnel** — a visual funnel showing the 6 stages from Impressions to Opportunities, with conversion rate percentages between each stage. Highlight the biggest drop-off point.

4. **Audience Segments** — a 2x2 comparison showing each of the 4 audience segments: leads generated, conversion rate, average deal size. Highlight CFO/Finance as the best-performing segment.

5. **Monthly Trend** — a line chart showing spend, leads, MQLs, and opportunities per month (Jul–Sep 2024). Was there a ramp or decline over the quarter?

6. **Q4 Recommendations** — 3 recommendation cards, each with: a clear action headline, the data evidence, and the expected impact

**Design requirements:**
- Clean editorial style — think Harvard Business Review data report, not a startup dashboard
- Color scheme: white background, dark slate text (#1E293B), indigo (#4F46E5) for primary data, Amber (#F59E0B) for caution, Red (#EF4444) for underperforming channels, Green (#22C55E) for best performers
- Typography: Inter font from Google Fonts
- The Webinars row in the channel table must be visually highlighted as an outlier (Red background or bold red text)
- Each section should have a one-sentence "So what?" callout box in light indigo background

Give me the architecture plan only. No HTML code yet.

## prompt_2

Now build the complete, single-file HTML campaign performance report based on the architecture plan above and the campaign analysis data I shared earlier.

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
  campaign: {
    name: "Enterprise Intelligence Suite — Market Launch",
    period: "Q3 FY2024 (Jul – Sep 2024)",
    target: "Enterprise B2B — CFO and COO buyers at $500M+ revenue companies"
  },

  scorecard: [
    { label: "Total Spend", value: "$1.72M", subtext: "of $1.8M budget (95.8%)", highlight: false },
    { label: "Pipeline Generated", value: "$18.6M", subtext: "10.8x pipeline ROI", highlight: true },
    { label: "Opportunities Created", value: "67", subtext: "vs. 150 target — 44.7% attainment", highlight: false },
    { label: "MQL → SQL Rate", value: "26%", subtext: "342 MQLs → 89 SQLs", highlight: false }
  ],

  channels: [
    { name: "Executive Roundtables", spend: 310000, leads: 148, mqls: 94, sqls: 31, opps: 24, cpo: 12917, rag: "green" },
    { name: "LinkedIn (Paid)", spend: 390000, leads: 284, mqls: 91, sqls: 28, opps: 22, cpo: 17727, rag: "green" },
    { name: "Paid Search", spend: 480000, leads: 612, mqls: 74, sqls: 18, opps: 14, cpo: 34286, rag: "amber" },
    { name: "Content & SEO", spend: 180000, leads: 524, mqls: 48, sqls: 7, opps: 4, cpo: 45000, rag: "amber" },
    { name: "Email Nurture", spend: 94000, leads: 189, mqls: 29, sqls: 4, opps: 2, cpo: 47000, rag: "amber" },
    { name: "Webinars", spend: 270000, leads: 90, mqls: 6, sqls: 1, opps: 1, cpo: 270000, rag: "red" }
  ],

  funnel: [
    { stage: "Impressions", count: 7830000 },
    { stage: "Clicks / Registrations", count: 62000 },
    { stage: "Leads", count: 1847 },
    { stage: "MQLs", count: 342 },
    { stage: "SQLs", count: 89 },
    { stage: "Opportunities", count: 67 }
  ],

  audienceSegments: [
    { segment: "CFO / Finance Leadership", leads: 621, conversionPct: 5.0, avgDealUsd: 320000, opps: 31 },
    { segment: "COO / Operations", leads: 489, conversionPct: 4.5, avgDealUsd: 280000, opps: 22 },
    { segment: "CTO / Digital", leads: 418, conversionPct: 1.9, avgDealUsd: 210000, opps: 8 },
    { segment: "Procurement", leads: 319, conversionPct: 1.9, avgDealUsd: 180000, opps: 6 }
  ],

  monthlyTrend: [
    { month: "Jul", spend: 520000, leads: 498, mqls: 86, opps: 16 },
    { month: "Aug", spend: 610000, leads: 714, mqls: 134, opps: 28 },
    { month: "Sep", spend: 594000, leads: 635, mqls: 122, opps: 23 }
  ],

  recommendations: [
    {
      title: "Reallocate Webinar Budget to Roundtables",
      evidence: "Webinars: $270K spend, 1 opportunity ($270K/opp). Roundtables: $310K spend, 24 opportunities ($12,917/opp). Same spend level — 24x the output.",
      action: "Move $200K of webinar budget to 2 additional executive roundtable events in Q4. Expected yield: 15–18 additional opportunities."
    },
    {
      title: "Double Down on CFO / Finance Segment",
      evidence: "CFO segment converts leads to opportunities at 5.0% — 2.6x better than CTO segment (1.9%). Average deal size is also the largest at $320K.",
      action: "Reorient LinkedIn targeting and event invite lists to 80% Finance/CFO titles. Develop CFO-specific content assets."
    },
    {
      title: "Reduce Paid Search Volume, Improve Quality",
      evidence: "Paid Search generated 612 leads — the most of any channel — but only 14 opportunities (2.3% lead-to-opp rate). High-volume, low-quality.",
      action: "Reduce paid search budget by 30%. Narrow keyword targeting to high-intent terms only. Reallocate $144K to Roundtables or LinkedIn."
    }
  ]
};
```

**Chart specifications:**
- Scorecard: 4 KPI tiles in a row, clean white cards with thin indigo border, large bold value, gray subtext
- Channel table: an HTML table with alternating row shading, CPO column coloured by RAG, Webinars row highlighted in light red background
- Channel CPO chart: ApexCharts horizontal bar sorted by CPO ascending, bars coloured by RAG (green/amber/red)
- Funnel: a CSS/HTML tapered funnel shape (or stacked horizontal bars) in shades of indigo, conversion rates shown between stages
- Audience segments: ApexCharts grouped bar showing leads vs. opportunities, with conversion rate as a data label
- Monthly trend: ApexCharts line chart with spend (secondary axis) and opportunities (primary axis) overlaid
- Recommendations: 3 cards with indigo left border, bold title, evidence in gray italic, action in dark text

**Quality bar:** This should look like a McKinsey or Bain campaign review deck — data-rich, opinionated, with a clear point of view in every section. The Webinars vs. Roundtables insight should be impossible to miss. Build the complete file now.
