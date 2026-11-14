## overview

Your portfolio dashboard is built. The /human review here is about operational accuracy — this dashboard will be used in real leadership reviews, so every status must be right.

## what_to_check

Open the HTML file in your browser. Work through this checklist:

**RAG accuracy**
- [ ] P003 (Sunrise Distribution) shows Red — UAT failed, go-live missed
- [ ] P010 (Apex Global) shows Red — 94% budget consumed, 15% scope incomplete
- [ ] P002, P005, P007 show Amber — at risk but not critical
- [ ] P004 (Nordic Retail) shows Green — highest satisfaction at 4.7/5
- [ ] P008 (Harvest Capital) shows Green — in steady state

**Numbers accuracy**
- [ ] P010 budget consumed shows 94%
- [ ] P003 budget consumed shows 87%
- [ ] P010 satisfaction shows 2.8/5 (not the lowest — P003 is 2.1/5)
- [ ] Revenue at risk shows $8.2M in the scorecard
- [ ] P004 satisfaction shows 4.7 (the highest in the portfolio)

**Interactivity test**
- [ ] Click the RAG filter buttons — do they filter the project grid correctly?
- [ ] Click a project card — does it expand to show milestones and risk text?
- [ ] Do the Red project cards have a visual treatment that makes them stand out?

**Operational readiness**
- [ ] Would Priya Nair be able to run a 15-minute portfolio review using only this dashboard?
- [ ] Are the two critical escalation items (P003 penalty clause risk, P010 budget overrun) immediately visible?
- [ ] Is there anything missing that she would need to know?

## prompt

Review the project portfolio dashboard I just built. Imagine you are Priya Nair (VP Client Delivery) opening this for your Monday morning leadership review.

1. What are the first three things you would address in the meeting, based on what the dashboard shows?
2. Is the P010 situation (94% budget consumed, 15% scope incomplete, $420K change request pending) visible enough? Could you miss it on first glance?
3. Is there anything confusing or potentially misleading in the way the data is presented?
4. What one addition would make this dashboard most useful for the weekly review cadence?

Then make one edit to improve the dashboard's operational usefulness.

## finishing_up

Save your file as `apac_portfolio_tracker_dec2024.html`. Test it in a browser. This is your deliverable for the weekly leadership review.

A well-built version of this dashboard should allow Priya Nair to walk into a leadership meeting, open this file on her laptop, and lead a focused 15-minute review without any PowerPoint or spreadsheet.
