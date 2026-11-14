# Build
> Fire. Open in browser. Watch the animations. Iterate once. Ship.

## scenario

Your prompt is ready. Open your AI tool in a new tab — Claude.ai, Copilot, Cursor, or whichever you are using. Keep this platform tab open alongside it. You have 13 minutes.

Target: a working, animated dashboard in the browser within 10 minutes. Use any remaining time to iterate.

## do_this

**Step 1 — Fire:**
1. Open Claude.ai (or your AI tool) in a new tab
2. Attach `q4_performance_data.json` to the conversation
3. Paste your filled prompt
4. When the AI responds, copy the full HTML code block

**Step 2 — Open in browser:**
5. Save the HTML as `meridian_qbr.html` on your desktop
6. Double-click to open in Chrome or Edge
7. Watch: revenue should count up, charts should animate in, the alert callout should slide in after a brief delay
8. Compare against `screenshot_2.png` — does the visual quality match?

**Step 3 — One targeted iteration:**
9. Identify the single most important gap between your output and `screenshot_2.png`
10. Write one clear follow-up instruction that fixes only that gap — be specific about what you want changed
11. Fire it in the same conversation — do not start a new chat (context from the first build matters)

**If time permits — further refinements:**
Ask Claude to add hover states to the client table rows, animate the regional filter transition, or add a print button that removes animations for PDF export.

## checkpoint

Done — confirm all five before presenting:
- Revenue tile counts up on page load and is visually larger and bolder than the other three tiles
- Sunrise Distribution shows a red badge and red row highlight, visible without scrolling
- Alert callout appears below the client table in amber with specific numbers and an action by-when date
- Pipeline section shows a green confidence badge and the coverage ratio animated in on load
- File opens in a browser with no errors and all four charts render with their entrance animations

## reveal_good

**What strong output looks like:**

When the presenter opens the page, the revenue number counting up from $0 to $42.8M in two seconds does something a PowerPoint slide cannot — it makes the room wait for the number. That is the opening this QBR deserves.

The regional bar chart staggering in from left to right gives the presenter a natural pause before each region, turning a chart into a live walkthrough.

Sunrise Distribution's red badge pulsing — not static — signals urgency that the eye catches even while reading a different row. The amber callout that slides in after the page settles lands as a recommendation, not just a flag: a named client, a number, an action, a date.

The 1.28× pipeline coverage counting up is the close. It answers the unspoken question — "are we funded for Q1?" — before anyone asks.

## reveal_takeaway

The difference between a mediocre dashboard and a remarkable one is not the template or the library. It is the five sentences you wrote in Craft.

Every participant in this room built from the same data file. Only yours has the right story framing, the right hero metric, and the right action statement — because those came from you, not the spreadsheet. The AI handled the execution. You handled the judgment.

That division of labour is what professional vibe coding looks like. It scales to any dataset, any deliverable, any audience — because the judgment always belongs to you.
