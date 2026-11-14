# Build
> You have a validated prompt with exact RAG thresholds, specific department data, and $12.8M in the headline. Fire it. Iterate precisely. Ship one file.

## do_this

Follow these six steps in order.

**Step 1 — Assemble your final prompt**
Combine: stack card (from Phase 1) + crafted prompt (from Phase 2) + any fixes from validation (Phase 3). One continuous block of text.

**Step 2 — Fire in your build tool**
Paste into Claude, Copilot, or Cursor. Wait for the full output before assessing.

**Step 3 — Open the file immediately**
Save and open in a browser. Check these specific items in the first 30 seconds:

**First-pass checklist:**
- [ ] $12.8M attrition cost visible in the headline scorecard — prominent, not buried
- [ ] 16.3% vs 13.5% benchmark shown as a comparison — not just the 16.3% alone
- [ ] Technology & Digital card is **visually Red** — red background, red border, red chip
- [ ] Finance & Analytics card is **visually Green** — not the same colour as the Red cards
- [ ] 193 open roles shown as a headline metric
- [ ] Quarterly trend chart renders with 4 data points (Q1–Q4) — not empty
- [ ] Purple (#7C3AED) primary colour visible in the header or title
- [ ] At least one clickable interaction works (filter, toggle, or card expand)

**Step 4 — Identify one specific issue**
Name it precisely. Not "the colours are wrong". Instead: "Technology & Digital card is rendering amber instead of red. It should use background #FEF2F2, border #FCA5A5, and chip colour #DC2626."

**Step 5 — Iterate with the targeted prompt below**
One issue at a time. Do not bundle.

**Step 6 — Verify each fix before the next iteration**
Reload and confirm before moving on.

## prompt

I need one targeted fix. Do not change anything else in the file.

ISSUE: [describe the exact problem in one sentence]

LOCATION: [name the element — e.g., "Technology & Digital department card", "quarterly trend chart", "headline scorecard"]

FIX: [describe exactly what it should show — include specific hex codes, numbers, or text values]

CONSTRAINT: Keep all other sections exactly as they are. Only change [the named element].

## tip

RAG colour issues are the most common first-iteration problem in HR dashboards. The fix is almost always the same: Tailwind class names do not produce your exact hex codes. When you see the wrong shade of red or green, the targeted fix is: "Replace Tailwind colour classes in the [card name] with inline styles using these exact hex values: background [hex], border [hex], chip/badge [hex]."

## reveal_good

A strong first output includes:
- $12.8M attrition cost as the most visually prominent number on the page — larger font, in a headline card
- Technology & Digital and Sales & Business Dev rendered unmistakably Red — no ambiguity when scanning quickly
- Finance & Analytics and HR & Corporate rendered Green — the contrast between Red and Green cards makes the story immediate
- Quarterly trend line chart with the Q3 spike visible and labelled
- The 193 open roles figure paired with the 47-day fill time — both in the headline scorecard
- At least one working interaction: a department filter, a view toggle, or an expandable card

## reveal_takeaway

The habit this activity builds: **RAG colour precision is a prompt responsibility, not a design afterthought**. When you let the AI choose colours, it produces readable output. When you specify exact hex values per status in your prompt, you produce a tool that communicates correctly — where Red unambiguously means "this department needs action today". That precision is the difference between a dashboard that informs and one that convinces.
