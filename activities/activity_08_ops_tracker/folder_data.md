# Build & Iterate
> Fire. Test. Improve once. Ship.

## scenario

Open your AI tool. Attach all five files. Paste your prompt. You have 20 minutes — 10 for the first build, 10 for one targeted improvement.

## do_this

**Round 1 — Build (10 minutes):**
1. Open Claude.ai (or your AI tool) in a new tab
2. Attach `apac_portfolio_tracker.xlsx`, `escalation_matrix.pdf`, `screenshot_1.png`, `screenshot_2.png`, and `genpact_logo.png`
3. Paste your completed prompt
4. Copy the full HTML code block from the response
5. Save as `apac_portfolio_dashboard.html` and open in Chrome or Edge

**Check these three things before Round 2:**
- Does the RAG count look right? Verify the Green / Amber / Red breakdown against the Portfolio Scorecard sheet in the Excel file
- Do the two Red projects appear as prominent escalation cards — are they the first thing leadership sees?
- Does the revenue at risk figure appear clearly and prominently?

If the page doesn't open or shows errors, check the browser console (F12 → Console). A common fix: paste the HTML back to your AI and say "fix any JavaScript errors — the page is not rendering."

**Round 2 — Improve once (10 minutes):**
6. Identify the single most important gap between your output and what you aimed for in Frame
7. Write one focused follow-up: "Change only [specific element] to [specific improvement]"
8. Fire it in the same conversation — do not start a new chat
9. Copy the new HTML and test again

The constraint matters: one gap, one fix. This builds the habit of targeted iteration over re-prompting from scratch.

## checkpoint

Before presenting:
- The Red escalation cards are the visual opening — the VP sees the two decisions immediately
- The revenue at risk figure is prominent and clearly labelled
- At least 2–3 project statuses are verified against `apac_portfolio_tracker.xlsx`
- You can describe in one sentence what your Round 2 improvement changed and why

## reveal_good

What separates a portfolio dashboard that enables a VP decision from one that prompts more questions is whether the most urgent action is unmissable — not buried in row 7 of a table.

The strongest first builds in this exercise surface the two Red projects as decisions, not just statuses. "P003 Foxconn: scope change requires VP approval by 20 Dec" is a decision. A red RAG badge in a table is a status.

If your first build has the escalation action visible without scrolling, Round 2 is about sharpening — not rescuing the structure.

## reveal_takeaway

Every participant built from the same portfolio data. The dashboard you built reflects your judgements about which projects need VP attention today and what action each requires — not just what the RAG counts are.

That is what professional vibe coding looks like: the AI executes, you direct. The judgment about what escalates and what can wait always belongs to you.
