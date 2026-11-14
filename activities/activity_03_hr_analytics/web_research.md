# Craft
> An HR dashboard prompt that says "show attrition by department" produces a table. One that says "Technology & Digital at 21.2% must render as Red with the benchmark 13.5% shown beside it" produces a dashboard that tells a story.

## scenario

You have read the data file. Here is what it tells you:

**The organisation**: Genpact APAC Business Unit. 2,847 current headcount vs 3,000 target. 193 open roles. The gap is not just a number — it is 193 clients without a point of contact.

**The headline problem**: Overall attrition is 16.3% vs the 13.5% industry benchmark. That is 2.8 percentage points above benchmark. At an average replacement cost of $66,320 per employee, this is not an HR problem — it is a **$12.8M cost problem**. That figure belongs in the first 10 seconds of your dashboard.

**The department breakdown** — this is where the prompt gets specific:
- Technology & Digital: 21.2% — **Red** (threshold: >18%)
- Sales & Business Dev: 18.7% — **Red**
- Operations: 15.1% — **Amber** (threshold: >13%)
- Finance & Analytics: 11.3% — **Green**
- HR & Corporate: 9.8% — **Green**

**The trend**: Q1 3.8% → Q2 4.1% → Q3 4.7% → Q4 3.7% (quarterly, not annualised). The Q3 spike is the story — why did it happen, is it resolved?

**Engagement**: 68 vs 72 benchmark. Technology & Digital scored 61 — the lowest. The correlation between low engagement and high attrition is the insight the ExCo needs.

**Hiring**: 47-day average fill vs 35-day benchmark. 12 days slower than benchmark means every open role costs more and hurts delivery longer.

## context

An HR dashboard prompt has two jobs: define the data accurately, and define the visual treatment precisely. The visual treatment is where most prompts fail. "Show it in red if bad" is ambiguous — the AI will guess at thresholds. Your prompt must name the exact threshold, the exact colour definition, and the exact layout for each department card.

Specificity in the visual treatment means:
- Name the RAG threshold: ">18% = Red, 13-18% = Amber, <13% = Green"
- Name the layout: "each department gets a card with: department name, attrition %, RAG chip, benchmark delta, engagement score"
- Name the chart: "quarterly trend line chart: 4 data points, x-axis Q1–Q4, y-axis 0–6%, show benchmark reference line at 3.375%"

## do_this

Use the prompt scaffold below. Replace every `[BRACKET]` with the specific value from the data file. The RAG thresholds and colour definitions are pre-filled — do not change them.

## prompt

Build a single-file HTML HR analytics dashboard for Genpact APAC People Health Review.

[PASTE STACK CARD HERE]

HEADLINE SCORECARD — four metric cards, top of page:
- Overall attrition: [actual]% vs [benchmark]% benchmark — show delta, RAG chip
- Headcount: [current] of [target] target — show gap as a number
- Open roles: [open_roles] — show fill time [actual] days vs [benchmark] days benchmark
- Attrition cost: $[cost]M — label "Est. replacement cost this year"

RAG THRESHOLDS (use these exactly):
- Red: attrition > 18% — background #FEF2F2, border #FCA5A5, chip #DC2626
- Amber: attrition 13–18% — background #FFFBEB, border #FCD34D, chip #D97706
- Green: attrition < 13% — background #F0FDF4, border #86EFAC, chip #16A34A

DEPARTMENT CARDS — one card per department, in a 2-column grid:
Each card shows: department name, attrition % (large), RAG chip, delta vs 13.5% benchmark, engagement score out of 100
Departments with data:
- Technology & Digital: [attrition]%, engagement [score] → RED
- Sales & Business Dev: [attrition]%, engagement [score] → RED
- Operations: [attrition]%, engagement [score] → AMBER
- Finance & Analytics: [attrition]%, engagement [score] → GREEN
- HR & Corporate: [attrition]%, engagement [score] → GREEN

QUARTERLY TREND CHART (ApexCharts line chart):
Data: Q1 [val]%, Q2 [val]%, Q3 [val]%, Q4 [val]%
Add a horizontal reference line at the annualised benchmark
Label the Q3 spike with a tooltip: "Peak — investigate root cause"

HIRING PIPELINE TABLE:
Columns: Department | Open Roles | Avg Fill Days | Benchmark | Days Over
Highlight rows where fill days > benchmark in amber

Use Alpine.js for a toggle between Attrition View and Engagement View. On Engagement View, re-colour cards by engagement score (< 65 = Red, 65–72 = Amber, > 72 = Green).

## checkpoint

Before moving to Validate:
- Every bracket replaced with a real figure from the data file
- RAG thresholds are explicitly named in the prompt — not left to the AI to decide
- The $12.8M figure appears in your headline scorecard specification
- The Q3 spike is labelled in your trend chart specification
