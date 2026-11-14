# Build
> Fire the prompt. Open in browser. Iterate once. Ship.

## scenario

Your prompt is validated. Open Claude.ai in a new tab. Keep this platform tab open alongside it — you will need the done criteria below.

Target: a working campaign performance report in the browser within 10 minutes. Use any remaining time to iterate.

## do_this

**Round 1 — First build:**
1. Paste your full prompt into Claude.ai
2. When Claude responds, copy the entire HTML code block
3. Save as `campaign_report.html` on your desktop and double-click to open in a browser
4. Check it against `screenshot_1.png` and `screenshot_2.png` — does it match the visual standard?

**Round 2 — One targeted iteration:**
Identify the single most important gap — usually it is the channel CPO chart not making the 20x gap between best and worst obvious enough, or the reallocation recommendation that is buried in a footnote instead of standing out as a decision card. Write one follow-up instruction that fixes only that gap. Fire it in the same Claude conversation — do not start a new chat.

**If time permits — further refinements:**
Ask Claude to: add a "What if?" scenario card where changing the Webinar budget to $0 and adding it to Roundtables updates the projected opp count dynamically, make the channel table sortable by clicking any column header, or add a CFO/COO/CTO segment comparison showing which buyer segment converts best.

## checkpoint

Done — confirm all five before presenting:
- The 44.7% attainment figure is the visual hero — largest number on screen, 800 weight, red chip
- Executive Roundtables row is highlighted green and Webinars row is highlighted red in the channel table
- The CPO bar chart renders correctly with the best-performer bar in green and worst in red
- The Reallocation Insight card is visible and names the specific dollar amount and opportunity count
- File opens in a browser with no errors and all charts render
