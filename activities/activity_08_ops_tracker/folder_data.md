# Build
> You have a validated prompt with exact RAG colours, P003 and P010 detail panels, and Alpine.js filter buttons fully specified. Fire it. Iterate precisely. Ship the dashboard Priya can open in 15 minutes.

## do_this

Follow these six steps in order.

**Step 1 — Assemble your final prompt**
Combine: stack card (from Phase 1) + crafted prompt (from Phase 2) + any fixes from validation (Phase 3). One continuous block of text.

**Step 2 — Fire in your build tool**
Paste into Claude, Copilot, or Cursor. Wait for the full output before assessing.

**Step 3 — Open the file immediately**
Save and open in a browser. Check these in the first 30 seconds:

**First-pass checklist:**
- [ ] "$8.2M revenue at risk" visible in a header banner — prominent, red background
- [ ] P003 Sunrise card is **visually Red** — red background, red border, penalty date visible on the card
- [ ] P010 Apex Global card is **visually Red** — red background, red border, $420K CR pending visible
- [ ] Green projects look clearly different from Red ones — no colour confusion
- [ ] Filter buttons (All / Red / Amber / Green) are present and clickable
- [ ] Clicking "Red" shows only Red projects — test this
- [ ] Clicking a project card expands a detail panel — test this on P003
- [ ] P003 detail panel shows: UAT failed, Dec 15 penalty date, budget burn 87%, recommended action
- [ ] Budget consumption progress bar is red for P003 (87%) and P010 (94%)
- [ ] Teal (#0D9488) primary colour visible in the header

**Step 4 — Identify one specific issue**
Name it precisely. Not "the filter doesn't work". Instead: "Clicking the Red filter button hides all projects instead of showing only Red ones. The Alpine.js x-show condition should be: x-show='filter === 'all' || project.rag === filter', where filter starts as 'all'."

**Step 5 — Iterate with the targeted prompt below**
One issue at a time.

**Step 6 — Verify each fix before the next iteration**
Reload and confirm the specific interaction before identifying the next issue.

## prompt

I need one targeted fix. Do not change anything else in the file.

ISSUE: [describe the exact problem in one sentence]

LOCATION: [name the element — e.g., "P003 project card", "Red filter button", "expandable detail panel", "budget progress bar"]

FIX: [describe exactly what it should do or show — include specific hex codes, Alpine.js logic, or exact field values for P003/P010]

CONSTRAINT: Keep all other sections exactly as they are. Only change [the named element].

## tip

Alpine.js filter bugs are the most common issue in this activity. The typical problem: the filter button updates the `filter` variable but the `x-show` condition on each card is checking the wrong property name. The fix is always specific: "The x-show on each project card should evaluate: `filter === 'all' || project.status === filter.toLowerCase()`". Knowing the exact Alpine.js expression to fix is faster than saying "make the filter work" — which causes a full rebuild.

## reveal_good

A strong first output includes:
- P003 and P010 cards that look like emergencies — red background, red border, the penalty date and revenue figure visible without clicking
- Filter buttons that actually work — clicking Red should take you from 10 cards to 3 in under a second
- An expandable P003 detail panel that shows: failed UAT milestone, Dec 15 penalty date, 87% budget burn, specific recommended action ("Emergency steering committee by Dec 12")
- A budget consumption bar chart where P003 (87%) and P010 (94%) bars render in red, and all Green project bars render in green
- The $8.2M revenue-at-risk figure in a visually prominent header element — not buried in a card

## reveal_takeaway

The habit this activity builds: **interactivity requires behaviour specification, not just structure specification**. "Add filter buttons" tells the AI what to build. "On click Red: show only cards where status === 'Red', sorted by budget consumed descending; on click All: restore all cards with Red first" tells the AI how to build it. The difference is a working tool vs a broken one on the first attempt. Specify the behaviour, not just the element.
