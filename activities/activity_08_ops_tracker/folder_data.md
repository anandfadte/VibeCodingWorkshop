# Build
> Fire the prompt. Open in browser. Iterate once. Ship.

## scenario

Your prompt is validated. Open Claude.ai in a new tab. Keep this platform tab open alongside it — you will need the done criteria below.

Target: a working project portfolio tracker in the browser within 10 minutes. Use any remaining time to iterate.

## do_this

**Round 1 — First build:**
1. Paste your full prompt into Claude.ai
2. When Claude responds, copy the entire HTML code block
3. Save as `portfolio_tracker.html` on your desktop and double-click to open in a browser
4. Check it against `screenshot_1.png` and `screenshot_2.png` — does it match the visual standard?

**Round 2 — One targeted iteration:**
Identify the single most important gap — usually it is the status filter that is not working, or the P010 action callout that is buried in a wall of text instead of standing out as a decision card. Write one follow-up instruction that fixes only that gap. Fire it in the same Claude conversation — do not start a new chat.

**If time permits — further refinements:**
Ask Claude to: add a client satisfaction trend indicator (up/down arrow based on the score vs. a 4.0 benchmark), make the milestone timeline visible inside each escalation card as a mini stepper, or add a "Print for review" button that generates a clean single-column layout for paper handouts.

## checkpoint

Done — confirm all five before presenting:
- The $8.2M revenue-at-risk tile is the visual hero — largest number on screen, 800 weight
- P003 and P010 appear as dedicated escalation cards directly below the scorecard, before the main project table
- Budget bars for P003 (87%) and P010 (94%) both render in red (#DC2626)
- The All / Red / Amber / Green status filter works — clicking Red shows only Red project rows
- File opens in a browser with no errors
