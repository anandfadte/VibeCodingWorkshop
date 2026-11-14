# Craft
> A proposal prompt that says "build me a sales proposal" produces a generic template. A prompt that says "Robert Chen's section must address a failed implementation 18 months ago" produces a proposal that wins the room.

## scenario

You have read the data file. Here is what it tells you:

**The client**: Calloway Industries — $2.4B revenue, 847 employees, industrial manufacturing. Currently using SAP ECC 6.0 with 23-year-old processes. 73% of invoices processed manually.

**The pain**: $8.35M total annual pain — $3.2M in operational inefficiencies, $2.8M in compliance penalties, $1.4M in inventory write-offs, $0.95M in audit costs.

**The business case**: 215% 3-year ROI. 14-month payback. $4.1M year-1 savings. $17.9M 3-year NPV. These are the numbers that close deals — every one of them belongs in your prompt.

**The three stakeholders you must address**:
- **Robert Chen, CPO** — previously failed ERP implementation 18 months ago. Objection: "how is this different?" Your prompt must specify a section that directly addresses implementation risk and what guarantee the proposal gives.
- **Sarah Whitfield, VP Operations** — spends 40% of her time on exception handling. 847 manual touchpoints per week. She needs to see her specific pain quantified and the relief timeline.
- **Marcus Webb, Head of IT** — SAP S/4HANA migration planned for Q3 2025. He needs compatibility confirmation, not generic "integrates with SAP" language.

**The proof**: Nordic Manufacturing — same industry, 5 months deployment, $4.2M year-1 savings, 94% invoice automation. Pacific Distribution — 100% audit pass, 67% reduction in compliance costs.

## context

The difference between a prompt that produces 60% of what you need on the first attempt and one that produces 90% is specificity at three levels:

1. **Named numbers** — "215% ROI" in the prompt produces "215% ROI" in the output. "Strong ROI" produces a placeholder.
2. **Named people with named objections** — "Robert Chen section: address failed implementation concern" produces a targeted section. "Executive section" produces a generic one.
3. **Named proof** — "Nordic Manufacturing case study: 5 months, $4.2M" produces a real reference. "Similar client success" produces invented text.

## do_this

Use the prompt scaffold below. Replace every `[BRACKET]` with the specific value from the data file. The scaffold has four sections — one per stakeholder plus an ROI summary. This structure maps directly to what each person needs to see to say yes.

## prompt

Build a single-file HTML proposal microsite for Genpact's pitch to Calloway Industries.

[PASTE STACK CARD HERE]

PROPOSAL STRUCTURE — build four named sections:

SECTION 1 — ROI SUMMARY (above the fold)
Headline metric: [3-year ROI]% return over 3 years
Payback period: [payback months] months
Year-1 savings: $[year1_savings]M
3-year NPV: $[npv]M
Style: dark header with Primary colour background, white text, four metric cards side by side

SECTION 2 — ROBERT CHEN (CPO) — Implementation Confidence
Heading: "Why This Implementation Will Succeed"
Address directly: previous failed implementation concern
Include: 5-milestone deployment timeline with weeks, SAP compatibility confirmation, risk mitigation approach
Case study card: Nordic Manufacturing — [industry], [months] months, $[savings]M year-1 savings, [automation]% invoice automation

SECTION 3 — SARAH WHITFIELD (VP Operations) — Your Pain, Quantified
Current state: [manual_touchpoints] manual touchpoints/week, [exception_pct]% of her time on exceptions
Before/after comparison table: show 5 specific process improvements with time saved
Timeline to relief: when each pain point is addressed (months 1, 3, 6)

SECTION 4 — MARCUS WEBB (Head of IT) — Technical Fit
SAP S/4HANA migration: confirm compatibility with Q3 2025 timeline
Integration approach: [specific integration method]
IT resource requirement: [hours] hours for implementation, no parallel systems

CASE STUDIES — sidebar or expandable cards
Nordic Manufacturing: [fill exact figures]
Pacific Distribution: [fill exact figures]

Use Alpine.js for a tab strip that lets the viewer switch between stakeholder views. Use ApexCharts for a 3-year bar chart (savings vs investment). Make it scroll-down on mobile.

## checkpoint

Before moving to Validate:
- Every bracket in your prompt has been replaced with a real number or name from the data file
- You have Robert Chen's objection addressed by name in the prompt
- You have both case study references with exact figures
- Your prompt is longer than 200 words — a short prompt produces a short proposal
