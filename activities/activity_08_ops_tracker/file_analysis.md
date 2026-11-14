# Build
> Fire. Open in browser. Watch the animations. Iterate once. Ship.

## scenario
You have a prompt with five narrative decisions already made. The AI will read all project statuses, budget figures, and risk statements from project_tracker.json. Your one job now is to fire it, check the output against the design standard, and fix the single most important gap.

## do_this
**Step 1 — Fire**
Attach project_tracker.json to your AI conversation. Paste your completed prompt. Copy the HTML output.

**Step 2 — Open and compare**
Save as apac_portfolio.html. Open in a browser. Compare against screenshot_2.png. Check:
- Does the revenue at risk counter animate from $0 on load?
- Are the Red projects visually unmissable — before you read anything?
- Does the RAG filter default to Red view, showing P003 and P010 first?

**Step 3 — One targeted iteration**
In the same conversation, describe the single most important gap: a RAG badge that doesn't stand out, a budget bar that doesn't animate, or a missing escalation card. Send one follow-up. Copy the updated HTML.

## checkpoint
You are done when:
- [ ] Revenue at risk ($8.2M) animates from $0 on page load
- [ ] P003 and P010 appear as prominent Red escalation cards above the project table
- [ ] Project table is sorted Red-first and each row has a RAG badge and budget bar
- [ ] RAG filter works — clicking Red shows only P003, P010, and the third Red project
- [ ] No console errors — both charts and all animations fire

## reveal_good
A strong portfolio dashboard does one thing a status report cannot: it tells leadership where to spend the next 15 minutes.

The RAG filter defaulting to Red is the design decision that changes the meeting. When a VP opens the dashboard, they do not scroll through 22 projects — they see three Red projects and two escalation cards asking for decisions. The meeting starts where it needs to start.

The budget bars are the sub-story: P010 at 94% with scope incomplete is a contract and margin problem, not just a delivery problem. That bar visualises a risk that a text field would bury in row 7.

## reveal_takeaway
The key lesson: operational dashboards built in AI are only as good as the decisions they force. The five blanks you filled in — the management narrative, the escalation priority, the specific actions — are the difference between a tracker that documents what is happening and one that drives what happens next. The AI rendered the RAG and the budget bars. You provided the accountability.
