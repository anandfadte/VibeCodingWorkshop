# Build
> You have a validated prompt, a defined stack, and three named stakeholders. Fire it. Iterate precisely. Ship one file.

## do_this

Follow these six steps in order. Do not skip the validation check before firing.

**Step 1 — Assemble your final prompt**
Combine: stack card (from Phase 1) + crafted prompt (from Phase 2) + any fixes from validation (Phase 3). Your prompt should be one continuous block of text, not three separate pastes.

**Step 2 — Fire in your build tool**
Paste into Claude, Copilot, or Cursor. Wait for the full output. Do not interrupt.

**Step 3 — Open the file immediately**
Save the HTML file and open it in a browser. Check these specific items in the first 30 seconds:

**First-pass checklist:**
- [ ] ROI headline figures visible above the fold — 215% ROI, 14-month payback, $4.1M year-1 savings, $17.9M NPV
- [ ] Robert Chen section exists and addresses implementation risk — not generic "our approach"
- [ ] Sarah Whitfield section shows 73% manual invoices and 847 touchpoints — her specific numbers
- [ ] Marcus Webb section mentions SAP S/4HANA Q3 2025 compatibility — not generic "SAP integration"
- [ ] Nordic Manufacturing case study: 5 months, $4.2M, 94% automation — exact figures visible
- [ ] Deep blue (#1E40AF) colour scheme — not generic blue or grey
- [ ] Tab strip or navigation between sections works (click it)
- [ ] ROI bar chart renders — not a blank chart container

**Step 4 — Identify one specific issue**
If something is wrong, name it precisely before prompting again. Do not say "fix the layout". Say "The Robert Chen section shows a generic implementation timeline. Replace it with: 5 milestones labelled Discovery (Week 1-2), Design (Week 3-6), Build (Week 7-14), UAT (Week 15-18), Go-Live (Week 19-20)."

**Step 5 — Iterate with the targeted prompt below**
One issue at a time. Do not bundle multiple fixes.

**Step 6 — Verify each fix before the next iteration**
Reload the browser after each change. Confirm the specific issue is resolved before identifying the next one.

## prompt

I need one targeted fix. Do not change anything else in the file.

ISSUE: [describe the exact problem in one sentence]

LOCATION: [name the section — e.g., "Robert Chen section", "ROI header", "Alpine.js tab strip"]

FIX: [describe exactly what it should show — include specific text, numbers, or colour values]

CONSTRAINT: Keep all other sections exactly as they are. Only change [the named section].

## tip

The most common iteration mistake in a proposal microsite is fixing one thing and accidentally resetting another. When you say "fix the stakeholder tabs", the AI may regenerate the entire Alpine.js component and reset the ROI chart. Specifying "CONSTRAINT: Keep all other sections exactly as they are" and "Only change [section name]" is the instruction that prevents this.

## reveal_good

A strong first output includes:
- All four named stakeholder sections with specific content (not "Section coming soon" or generic text)
- The 215% ROI figure in the first viewport — before any scrolling
- The Nordic Manufacturing case study with exact figures, not a placeholder
- An ApexCharts bar chart showing 3-year savings vs investment (3 bars: Year 1, Year 2, Year 3)
- Alpine.js tabs that actually switch content when clicked — test this before calling it done

## reveal_takeaway

The habit this activity builds: **prompt-first, then iterate with precision**. A validated 300-word prompt produces 85% of the right output on the first attempt. The remaining 15% is one or two targeted fixes. The alternative — a 10-word prompt plus 20 iterations — produces the same output with 10x the effort and a codebase full of inconsistencies from repeated regenerations.

Write the prompt well. Fire it once. Fix precisely. That is vibe coding at its best.
