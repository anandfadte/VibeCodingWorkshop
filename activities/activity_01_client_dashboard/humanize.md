# Review & Ship
> Polish to consulting-grade. Run /human last, always. (~4 min)

## plugin
Web Search

## context

/human is the final step in every activity. It transforms a technically correct HTML file into something a senior executive would be proud to put in front of a client.

**Do NOT run /human before the build chain is complete.** The polish is only as good as what it is polishing.

At this stage you have a working dashboard. /human makes it client-ready.

## prompt
/human Review the HTML dashboard you just built in this conversation and produce a polished final version.

Apply these improvements:

**1. LANGUAGE AUDIT**
Replace every generic label with specific business language:
- "Chart 1" → "Q4 Revenue Performance — Actual vs Target"
- "Region" → actual region names from the data
- "Value" → specific metric names with units (e.g. "Revenue ($M)")

**2. HEADER**
Ensure the header shows: Company name + "Q4 FY2024 Business Review" + "Prepared for Meridian Retail Group Leadership" + date in the top-right corner.

**3. KPI CARDS — THE EXECUTIVE TEST**
Each KPI card must pass this test: a senior executive should understand the number AND whether it is good or bad within 3 seconds.
- Add delta badges: green if at/above target, red if below (with %)
- Add a one-line context note below each number ("↑ 8.3% vs Q4 FY2023")

**4. CHART TITLES**
Every chart needs a title that tells the story, not just the data:
- Bad: "Monthly Revenue"
- Good: "Monthly Revenue — Strong H2 recovery, Q4 within 5% of target"

**5. FOOTER**
Add a footer: "Confidential | Prepared by [Your Name] | Genpact Account Team | December 2024"

**6. COLOR DISCIPLINE**
Scan every element. If any color is inconsistent with the navy/white/indigo palette, fix it. No stray reds, oranges, or default ApexCharts blues unless they are intentional.

**7. FINAL FILE CHECK**
Confirm the file still opens correctly as a standalone HTML when copied out of this conversation. If any CDN link uses a floating version (e.g. @latest), pin it to a specific version.

Output: The complete, final, polished HTML file. This is the version that gets emailed to Sandra Lim tonight.

## tip

Read every piece of text on the dashboard aloud before you call it done. If you stumble over a label, it needs rewording. If a number has no context (is 42.8 good or bad?), it needs a delta. The test: if Sandra's client walked in 60 seconds early and saw this on screen, would Sandra be confident — or would she quickly close the laptop?

## reveal_good

- Dashboard header identifies the client, the period, and who prepared it
- KPI cards show large numbers with green/red delta badges — executives understand the story in 3 seconds
- Chart titles tell a story ("Strong H2 recovery") not just a data label ("Monthly Revenue")
- Every number on screen matches the source data — no invented values
- Color palette is consistent throughout — navy header, white cards, indigo accents only
- Footer is present and confidentiality is noted
- File opens perfectly when double-clicked — no broken CDN links, no console errors
- /human polish is evident — labels are specific, language is executive-grade, no AI-speak

## reveal_takeaway

The difference between a mediocre dashboard and a great one is not the chart library — it is the specificity of your language. "Revenue: $42.8M" is data. "Revenue: $42.8M — 95.1% of $45M target, up 8.3% year-on-year" is intelligence. The /human step is where you make that upgrade. Run it every time, on every output, without exception. That is what separates a vibe coder from someone who just prompts.
