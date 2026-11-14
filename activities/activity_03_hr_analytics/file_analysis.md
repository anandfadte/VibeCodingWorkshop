# Build
> Fire. Open in browser. Watch the animations. Iterate once. Ship.

## scenario
You have a prompt with five narrative decisions already made. The AI will read all numbers from hr_metrics.json. Your one job now is to fire it, check the output against the design standard, and fix the single most important gap.

## do_this
**Step 1 — Fire**
Attach hr_metrics.json to your AI conversation. Paste your completed prompt. Copy the HTML output.

**Step 2 — Open and compare**
Save as genpact_people_health.html. Open in a browser. Compare against screenshot_2.png. Check:
- Do the KPI tiles count up on load?
- Are the department bars RAG-coloured with the two high-risk departments visually clear?
- Does the amber alert callout appear for the burning department?

**Step 3 — One targeted iteration**
In the same conversation, describe the single most important gap: a missing RAG indicator, an unlabelled chart, or an animation not triggering. Send one follow-up. Copy the updated HTML.

## checkpoint
You are done when:
- [ ] Attrition % counts up from 0 on load with a red RAG badge
- [ ] Technology & Digital and Client Delivery bars are visually flagged as high-risk
- [ ] Engagement by department chart shows delta vs benchmark
- [ ] Amber alert callout names the burning department and states an action
- [ ] No console errors — all four charts and animations fire

## reveal_good
A strong people dashboard does two things a spreadsheet cannot:
- **RAG at a glance** — a leader in an offsite can see the risk signal before the presenter has spoken a sentence
- **Cost makes it real** — $12.8M attrition cost turns an HR percentage into a business problem the CFO cares about

The department filter is the difference between a static report and a tool. When the CHRO clicks "Client Delivery" and sees attrition 18.4% with engagement at 63 — that is the moment the action item writes itself.

## reveal_takeaway
The key lesson: people data is dense and defensive by default — percentages in tables that protect everyone and decide nothing. Your prompt specified the RAG standard, the benchmark comparisons, and the alert callout. The AI rendered it. The ExCo gets a dashboard that leads to decisions, not a report that documents problems.
