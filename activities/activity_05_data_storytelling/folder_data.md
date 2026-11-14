# Build
> You have a validated prompt with sorted channels, named colours, and three justified recommendations. Fire it. Iterate precisely. Ship one file.

## do_this

Follow these six steps in order.

**Step 1 — Assemble your final prompt**
Combine: stack card (from Phase 1) + crafted prompt (from Phase 2) + any fixes from validation (Phase 3). One continuous block of text.

**Step 2 — Fire in your build tool**
Paste into Claude, Copilot, or Cursor. Wait for the full output.

**Step 3 — Open the file immediately**
Save and open in a browser. Check these specific items in the first 30 seconds:

**First-pass checklist:**
- [ ] 44.7% opportunity attainment visible in the headline — shown as amber or below-target signal
- [ ] Cost-per-opportunity bar chart is **sorted from lowest (best) to highest (worst)**
- [ ] Executive Roundtables bar is **green** — tallest and greenest bar on the chart
- [ ] Webinars bar is **red** — shortest and reddest bar on the chart
- [ ] All 6 channels are present in the chart — none missing
- [ ] $1.724M total spend shown in the headline
- [ ] Three recommendation cards visible — each with a specific justifying metric
- [ ] Conversion funnel renders with 5 stages
- [ ] Cyan (#0891B2) primary colour visible in the header

**Step 4 — Identify one specific issue**
Name it precisely. Not "the chart is wrong". Instead: "The bar chart is sorted alphabetically. Re-sort it from lowest to highest cost-per-opportunity: Executive Roundtables ($12,917), ABM ($15,107), Digital Advertising ($17,333), Content Marketing ($42,571), Partner Events ($99,000), Webinars ($270,000)."

**Step 5 — Iterate with the targeted prompt below**
One issue at a time.

**Step 6 — Verify each fix before the next iteration**
Reload and confirm before moving on.

## prompt

I need one targeted fix. Do not change anything else in the file.

ISSUE: [describe the exact problem in one sentence]

LOCATION: [name the element — e.g., "cost-per-opportunity bar chart", "Webinars channel card", "recommendation section"]

FIX: [describe exactly what it should show — include the specific sort order, hex codes, or metric values]

CONSTRAINT: Keep all other sections exactly as they are. Only change [the named element].

## tip

The most common iteration problem in a campaign report is chart sort order and colour assignment in the same fix. Do them separately. First: "Re-sort the bars from lowest to highest cost-per-opportunity: [list all 6 in order]." Confirm the sort is correct. Then: "Colour the Executive Roundtables bar #16A34A and the Webinars bar #DC2626. Leave all other bars their current colour." Two targeted prompts produce a correct result. One combined prompt risks a full chart regeneration that loses the data.

## reveal_good

A strong first output includes:
- The cost-per-opportunity chart immediately communicating the 20x gap between Executive Roundtables and Webinars — the reader should be able to see this in 3 seconds without reading numbers
- Three recommendation cards that each reference a specific metric: scale Roundtables (cite cost/opp), pause Webinars (cite cost/opp), target CFO in mid-market (cite 5.0% conversion vs 3.2% average)
- Conversion funnel showing all five stages — the 36.6% SQL conversion rate should be visually the most prominent drop-off
- Monthly spend trend that shows March as the peak spend month — not a smooth curve

## reveal_takeaway

The habit this activity builds: **data storytelling is a prompt design problem**. The same data produces a table or a decision document depending on how precisely you specify the story structure in the prompt. Sorted bars, named colours, and justified recommendations are not design choices the AI makes — they are instructions you give. The analyst who writes "sort from lowest to highest and colour the best green and the worst red" produces a decision-ready output on the first attempt. The analyst who writes "make a bar chart of channel performance" gets a table with bars.
