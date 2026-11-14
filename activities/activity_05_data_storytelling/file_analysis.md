# Build
> Fire. Open in browser. Watch the animations. Iterate once. Ship.

## scenario
You have a prompt with five narrative decisions already made. The AI will read all numbers from campaign_analysis.json. Your one job now is to fire it, check the output against the design standard, and fix the single most important gap.

## do_this
**Step 1 — Fire**
Attach campaign_analysis.json to your AI conversation. Paste your completed prompt. Copy the HTML output.

**Step 2 — Open and compare**
Save as campaign_q3_report.html. Open in a browser. Compare against screenshot_2.png. Check:
- Do the opportunity attainment numbers count up on load?
- Is the channel bar chart sorted by cost per opportunity, with the best bar green and the worst red?
- Is the gap between $12,917 and $270,000 visually dramatic — not a footnote?

**Step 3 — One targeted iteration**
In the same conversation, describe the single most important gap: a chart that doesn't sort correctly, a missing toggle, or numbers that look similar when they should look dramatically different. Send one follow-up. Copy the updated HTML.

## checkpoint
You are done when:
- [ ] 67/150 opportunity attainment animates from 0 on load
- [ ] Channel bars are sorted by cost per opportunity, lowest to highest
- [ ] Best and worst channels are colour-coded green and red
- [ ] The toggle between "Cost per Opportunity" and "Lead Quality" views works
- [ ] No console errors — all charts and animations fire

## reveal_good
A strong campaign postmortem does one thing most decks fail to do:
- It makes the **reallocation case visually unavoidable** — when the bar for Webinars is 20x longer than Executive Roundtables, no one argues for keeping the spend

The toggle between cost efficiency and lead quality is the analytical sophistication that separates this from a marketing dashboard. Some channels look terrible on cost but deliver high-quality leads. Some look cheap but fill the funnel with noise. The report shows both.

## reveal_takeaway
The key lesson: marketing data is usually presented as "here is what happened" — a respectful post-mortem that protects everyone. Your prompt specified the verdict, the hidden insight, and the specific reallocation figures. The AI built the visual. The difference between a data story and a data dump is the five decisions you made before firing.
