# Build
> Fire the validated prompt. Review the output. One targeted iteration if needed. Ship.

## scenario

Your prompt is validated. Open your build tool — Claude, Copilot, Cursor, or Gemini Code Assist. Paste the full revised prompt. Wait for the output. Copy the HTML. Save it. Open it in a browser.

This is the moment the preparation pays off. If Phases 1–3 were done well, the first build attempt should be 75–85% right. The remaining work is one targeted iteration — not a full rebuild.

## do_this

1. Open your chosen build tool (Claude, Copilot, Cursor, etc.)
2. Paste the full validated prompt from Phase 3
3. Wait for the HTML output
4. Copy the complete HTML file content
5. Save it as `meridian_qbr_q4_2024.html`
6. Open it in a browser — Chrome, Edge, or Firefox

Check the output against this list:

- [ ] Headline scorecard shows $42.8M actual, 95.1% attainment, 8.3% growth
- [ ] Monthly revenue chart shows 12 months of actual vs target lines
- [ ] Regional bar chart shows all 4 regions — North America and Middle East & Africa visible
- [ ] Product mix donut shows all 4 products
- [ ] Client table shows all 10 clients — Sunrise Distribution flagged with a red indicator
- [ ] Colour scheme uses #4F46E5 indigo — not generic blue
- [ ] All charts are rendering (not blank boxes)
- [ ] File opens cleanly — no console errors about missing scripts

If something in the list is wrong, use the iteration prompt below. Be specific: name exactly what is wrong and what the correct value is.

## prompt

The dashboard rendered but [describe the specific issue — e.g. "the regional bar chart shows only 2 of the 4 regions" or "the donut chart is blank" or "Sunrise Distribution shows Medium renewal risk instead of High"].

Fix only this issue. Do not change anything else in the file — keep all other data, colours, fonts, charts, and layout exactly as they are.

Return the complete updated HTML file.

## tip

**The iteration rule: one issue at a time.** If you say "fix the chart and also update the colours and also add a footer," the AI makes all three changes — and may break something that was already working. Find the most important single issue. Fix it. Review. Repeat if needed. This habit is worth building now — it scales to every vibe coding project.

## reveal_good

A strong dashboard for this activity should show:

- Revenue attainment tile: **$42.8M / $45M — 95.1%** with YoY growth of 8.3% clearly labelled
- Monthly revenue line chart: Jan–Dec, with the actual line tracking below target from Oct through December
- Regional bar chart: North America highest ($18.2M), Middle East & Africa visually distinct at 90% attainment
- **Sunrise Distribution flagged in red** in the client table — it is the only High renewal risk client
- Q1 pipeline confidence visible somewhere: $61.2M qualified vs $48M target, 1.28x coverage
- Charts rendering correctly — not blank boxes
- File opens with zero dependencies, no console errors

## reveal_takeaway

The habit this activity builds is not about the dashboard. It is about the **prompt-first mindset**: before you build, you have already defined what you are building, chosen the tools, written the instruction, and had it reviewed. The AI is a fast builder — but direction comes from you. The prompt is the design. Everything after the prompt is execution.

This is the skill that separates someone who gets a good result on the first attempt from someone who spends 30 minutes iterating toward a mediocre one.
