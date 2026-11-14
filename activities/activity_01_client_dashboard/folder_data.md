# Build
> Fire the prompt. Open in browser. Iterate once. Ship.

## scenario

Your prompt is validated. Open Claude.ai in a new tab. Keep this platform tab open alongside it — you will need the done criteria below.

Target: a working dashboard in the browser within 10 minutes. Use any remaining time to iterate.

## do_this

**Round 1 — First build:**
1. Paste your full prompt into Claude.ai
2. When Claude responds, copy the entire HTML code block
3. Save it as `dashboard.html` on your desktop and double-click to open in a browser
4. Check it against `screenshot_1.png` and `screenshot_2.png` — does it match the visual standard?

**Round 2 — One targeted iteration:**
Identify the single most important gap between your output and the design standard. Write one follow-up instruction that fixes only that gap. Fire it in the same Claude conversation — do not start a new chat. Claude will remember the full context.

**If time permits — further refinements:**
Ask Claude to: add a hover state to the client risk table rows, make the revenue line chart animate on load, or add a region filter that updates all charts. Keep each follow-up to one clear instruction.

## checkpoint

Done — confirm all five before presenting:
- Revenue tile is the visual hero at the top of the page
- Sunrise Distribution has a red badge, visible without scrolling down
- Alert callout appears below the client table with the action statement
- Pipeline coverage shows as a green confidence indicator
- File opens in a browser with no errors and all four charts render
