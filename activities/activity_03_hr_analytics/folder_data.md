# Build
> Fire the prompt. Open in browser. Iterate once. Ship.

## scenario

Your prompt is validated. Open Claude.ai in a new tab. Keep this platform tab open alongside it — you will need the done criteria below.

Target: a working HR analytics dashboard in the browser within 10 minutes. Use any remaining time to iterate.

## do_this

**Round 1 — First build:**
1. Paste your full prompt into Claude.ai
2. When Claude responds, copy the entire HTML code block
3. Save as `hr_dashboard.html` on your desktop and double-click to open in a browser
4. Check it against `screenshot_1.png` and `screenshot_2.png` — does it match the visual standard?

**Round 2 — One targeted iteration:**
Identify the single most important gap — usually it is a department card where the RAG color is not rendering correctly, or the $12.8M attrition cost tile that is not standing out as the visual hero. Write one follow-up instruction that fixes only that gap. Fire it in the same Claude conversation — do not start a new chat.

**If time permits — further refinements:**
Ask Claude to: add a hover tooltip on each department card showing the headcount behind the attrition figure, animate the quarterly trend chart drawing on page load, or make the RAG chip pulse if attrition is more than 5 percentage points above benchmark.

## checkpoint

Done — confirm all five before presenting:
- The $12.8M attrition cost tile is the visual hero — largest number on screen, 800 weight
- Technology & Digital (or whichever department has attrition > 18%) renders unmistakably Red — #DC2626 chip, #FEF2F2 card background
- The Attrition View / Engagement View toggle works — clicking it re-colours all five cards
- The quarterly trend chart shows all four quarters with the Q3 spike labeled "Peak — investigate root cause"
- File opens in a browser with no errors and all charts render
