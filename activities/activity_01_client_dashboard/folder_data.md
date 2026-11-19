# Build & Iterate
> Fire. Test. Improve once. Ship.

## scenario

Open your AI tool. Attach all four files. Paste your prompt. You have 20 minutes — 10 for the first build, 10 for one targeted improvement.

## do_this

**Round 1 — Build (10 minutes):**
1. Open Claude / GitHub Copilot (or your AI tool) in a new tab
2. Attach `meridian_q4_data.xlsx`, `screenshot_1.png`, `screenshot_2.png`, and `genpact_logo.png`
3. Paste your completed prompt
4. Copy the full HTML code block from the response
5. Save as `meridian_qbr.html` and open in Chrome or Edge

**Check these three things before Round 2:**
- Does the data look right? Spot-check 2–3 figures against the Revenue Summary sheet in the Excel file
- Is the hero section the most visually prominent thing on the page?
- Do the animations run on load?

If the page doesn't open or shows errors, check the browser console (F12 → Console). A common fix: paste the HTML back to your AI and say "fix any JavaScript errors — the page is not rendering."

**Round 2 — Improve once (10 minutes):**
6. Identify the single most important gap between your output and what you aimed for in Frame
7. Write one focused follow-up: "Change only [specific element] to [specific improvement]"
8. Fire it in the same conversation — do not start a new chat
9. Copy the new HTML and test again

The constraint matters: one gap, one fix. This builds the habit of targeted iteration over re-prompting from scratch.

## checkpoint

Before presenting:
- The hero section is visually dominant — the most important number lands with weight
- At least 2–3 data points are verified against `meridian_q4_data.xlsx`
- The dashboard opens in a browser with no visible errors
- You can describe in one sentence what your Round 2 improvement changed and why

## reveal_good

What separates a first attempt from a client-ready output is usually one or two targeted follow-up prompts — not a full rewrite.

What separates participants who get there in 20 minutes from those who don't is the quality of their Round 2 prompt. Vague: "make it look better." Targeted: "the revenue tile font is too small — increase to 48px bold. The at-risk client row needs a red background, not just a red badge."

The AI executes precisely what you describe. The more specific the gap you name, the more precisely the gap closes.

## reveal_takeaway

Every participant in this room built from the same data file and the same scaffold. The dashboard you built reflects your judgements about what matters for this audience — the section structure, the hero choice, the action framing. None of that came from the template.

That is what professional vibe coding looks like: the AI executes, you direct. The judgment always belongs to you.
