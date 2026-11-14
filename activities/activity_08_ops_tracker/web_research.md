# Craft
> A prompt that says "show project status" produces a list. One that says "P003 Sunrise: Red, UAT failed on Nov 28, penalty clause activates Dec 15, 87% budget consumed with 35% work remaining, client satisfaction 2.1/5" produces a card that Priya can act on before 9am.

## scenario

You have read the data file. Here is what it tells you:

**The portfolio**: 10 projects shown (22 total in the full portfolio). Distribution: 12 Green, 7 Amber, 3 Red. $8.2M revenue at risk from the three Red projects.

**The two critical escalations** — these must dominate your dashboard:

**P003 — Sunrise Retail Transformation** (RED — ESCALATE TODAY)
- Status: UAT failed Nov 28. Milestone: Integration Testing missed by 3 weeks.
- Budget: 87% consumed, 35% work remaining (severely over-consumed)
- Risk: Penalty clause activates Dec 15 — 11 days away
- Client satisfaction: 2.1/5 (critical)
- Action needed: Emergency steering committee, penalty clause mitigation

**P010 — Apex Global Finance Automation** (RED — ESCALATE TODAY)
- Status: 15% scope incomplete, delivery at risk
- Budget: 94% consumed ($420,000 change request pending approval)
- Risk: $3.8M revenue at risk if delayed
- Client satisfaction: 2.8/5
- Action needed: Scope decision by Dec 10 — 6 days away

**The Amber projects** (monitor, don't escalate):
- P007 TechCorp: 71% budget, resource constraint
- P012 Global Financial: 58% budget, stakeholder alignment issue
- P015 RetailMax: 63% budget, minor scope adjustment

**The Green projects**: P001, P002, P004, P005, P006 — on track, no action needed

**The $8.2M figure**: P003 $1.8M + P010 $3.8M + P017 $2.6M = $8.2M total at risk. This is the number that opens the leadership review.

## context

A portfolio tracker prompt has two jobs: define the status logic (what makes a card Red vs Amber) and define the interaction (how the viewer gets from the summary to the detail). Most prompts only do the first. Specifying Alpine.js filter buttons and expandable detail panels in the prompt is what takes your output from a static table to a usable tool.

The expandable panel structure matters: when Priya clicks P003, she needs to see the penalty date, the budget burn, the failed milestone, and the recommended action — all in one place. That is four named data fields in your prompt, not "show project details."

## do_this

Use the prompt scaffold below. Replace every `[BRACKET]`. The P003 and P010 detail sections are the most important — make sure every figure in them matches the data file exactly.

## prompt

Build a single-file HTML project portfolio dashboard for Genpact APAC Client Delivery — Monday leadership review for Priya Nair, VP Client Delivery.

[PASTE STACK CARD HERE]

DASHBOARD HEADER:
Title: "APAC Client Delivery — Portfolio Review"
Date: December 2024
Revenue at risk banner: "$[8.2]M revenue at risk — [3] projects require immediate action" — style in RAG Red background

RAG SUMMARY ROW — three stat tiles:
- Red: [3] projects | Amber: [7] projects | Green: [12] projects
- Each tile uses the exact RAG background and border colours from the stack card

FILTER BUTTONS (Alpine.js):
Buttons: All | 🔴 Red | 🟡 Amber | 🟢 Green
Default view: show Red projects first, then Amber, then Green
On filter click: show only matching cards, hide others with x-show

PROJECT CARDS — one card per project, RAG-coloured border and background:
Each card shows:
- Project ID + Client name (bold)
- RAG status chip
- Budget consumed % — show as a progress bar, red if >85%
- Key risk (one line)
- Client satisfaction X/5
- "View details →" button

EXPANDABLE DETAIL PANEL (Alpine.js x-show):
On "View details" click, expand below the card to show:
- Milestone status table: milestone name | due date | status | days variance
- Budget breakdown: consumed $X of $Y total
- Risk details: full risk description + impact
- Recommended action: specific next step with deadline

P003 SUNRISE — populate with these exact values:
Budget: 87% consumed | Risk: Penalty clause Dec 15 | Sat: 2.1/5
Detail: UAT failed Nov 28, Integration Testing 3 weeks late, $1.8M revenue at risk
Action: "Emergency steering committee required by Dec 12"

P010 APEX GLOBAL — populate with these exact values:
Budget: 94% consumed | $420K CR pending | Sat: 2.8/5
Detail: 15% scope incomplete, $3.8M at risk, scope decision needed
Action: "Scope decision required by Dec 10"

BUDGET CONSUMPTION CHART (ApexCharts horizontal bar):
Show all 10 projects, sorted by budget consumed % descending
Colour bars: >85% red, 60–85% amber, <60% green
Add vertical reference line at 75% labelled "Warning threshold"

## checkpoint

Before moving to Validate:
- P003 and P010 detail sections have exact figures from the data file
- The penalty clause date (Dec 15) is in your P003 specification
- The $8.2M revenue-at-risk figure is in your header specification
- Alpine.js filter buttons and expandable panels are specified — not just "add interactivity"
