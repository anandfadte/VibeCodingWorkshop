## overview

Your HR dashboard is built. The /human review here has an extra layer: HR data is sensitive and consequential. Before you show this to any leader, you need to verify every number and consider the narrative it tells.

## what_to_check

Open the HTML file in your browser. Work through this checklist:

**Numbers accuracy**
- [ ] Total headcount shows 2,847 (not 3,000 — that's the target)
- [ ] Attrition shows 16.3% with benchmark 13.5% — the gap is 2.8 percentage points
- [ ] Technology & Digital attrition shows 21.2% — highest in the BU
- [ ] Engagement score shows 68 vs. benchmark 72 — gap of -4 points
- [ ] Client Delivery engagement shows 63 — the lowest department score
- [ ] Attrition cost shows $12.8M (not cost per hire — that's separate)
- [ ] Time to fill shows 47 days vs. 35-day benchmark

**RAG accuracy**
- [ ] Client Delivery attrition (18.4% vs 13.5%) — should be Red (+4.9 pts)
- [ ] Technology & Digital attrition (21.2% vs 16%) — should be Red (+5.2 pts)
- [ ] Finance Operations attrition (11.3% vs 12%) — should be Green (below benchmark)
- [ ] HR attrition (9.1% vs 10%) — should be Green (below benchmark)

**Narrative check**
- [ ] Is the most critical finding (Client Delivery attrition + engagement double jeopardy) immediately visible?
- [ ] Does the dashboard tell a coherent story, or does it just display numbers?
- [ ] Would a CHRO walk away knowing exactly the top 3 actions to take?

## prompt

Review the HR analytics dashboard I just built. Imagine you are the CHRO presenting this to the Executive Committee in January 2025.

1. As you walk through each section, what story does the dashboard tell?
2. Are there any numbers that could be misread or taken out of context?
3. The Client Delivery department has both the highest attrition risk AND the lowest engagement score. Is that combination visible enough in the dashboard?
4. What would you add, remove, or change to make this a 10-minute presentation rather than a 30-minute one?

Then make the two most important edits to the dashboard based on your analysis.

## sensitivity_reminder

Before sharing this dashboard:
- Remove or anonymise any individual names if they appear
- Confirm the data is current (the JSON is Q4 FY2024 — flag if the audience needs a more recent snapshot)
- Store the file securely — HR data is confidential

## finishing_up

Save your file as `genpact_apac_people_health_q4_fy2024.html`. Test it in a browser. This is your deliverable for the people health review.
