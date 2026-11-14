# Validate
> A campaign report that buries the Webinars finding on page three does not produce a budget decision. The data tells a clear story — your prompt must tell the AI how to tell it.

## scenario

You have a crafted prompt with 6 channels, cost-per-opportunity figures, and a conversion funnel. Before you fire it in Claude, Copilot, or Cursor, paste it into ChatGPT or Gemini and ask it to validate the prompt.

Here is what goes wrong in campaign performance prompts when this step is skipped:

The chart sorts alphabetically, not by value. "Account-Based Marketing" ends up first, Webinars in the middle. The whole point of the cost-per-opportunity comparison — that there is a 20x gap between best and worst — disappears when the bars are in random order.

The recommendations section lists all six channels with the same visual weight. "Executive Roundtables performed well" and "Webinars underperformed" look identical. A good report makes the action obvious — a vague prompt produces a balanced-looking summary instead.

The conversion funnel shows percentages without context. "36.6% SQL conversion" means nothing without "vs 50% benchmark" beside it. If your prompt did not specify the benchmark at each stage, the AI has nothing to compare against.

## context

What to check in a campaign performance prompt:

**Chart sort order** — did you specify "sort bars from lowest to highest cost-per-opportunity"? Without this, the AI will sort alphabetically or by input order. The story depends on the visual order.

**Colour assignment** — did you name which bars get the best-performer green and which get the worst-performer red? "Highlight best and worst" is ambiguous — the AI may colour the entire chart, or colour only one bar, or use the wrong colours.

**Recommendation specificity** — do your three recommendation cards reference exact numbers? "Executive Roundtables is efficient" is not a recommendation. "Scale Executive Roundtables: at $12,917/opp it delivers 7x better ROI than the channel average of $89,552/opp" is a recommendation.

**Funnel benchmark data** — does your funnel specification include the benchmark conversion rate at each stage? Without it, the funnel is just a data table, not a comparison.

**The 44.7% attainment figure** — is this called out as a headline metric with its RAG status? Under 70% of target should render amber at minimum. If your prompt did not specify this, the number will appear but without visual signal.

## do_this

Paste your full prompt into ChatGPT or Gemini with this validation request:

## prompt

You are reviewing a build prompt for a campaign performance report. Do not write any code. Check the prompt for these issues and list any you find:

1. CHART SORT ORDER: Does the cost-per-opportunity bar chart specification say to sort from lowest (best) to highest (worst)? Or is the order unspecified? An unsorted chart loses the main narrative.

2. COLOUR PRECISION: Are the best-performer (green) and worst-performer (red) colour assignments attached to specific channel names (Executive Roundtables and Webinars), or left as general instructions ("highlight best and worst")? Flag if not specifically named.

3. RECOMMENDATION DEPTH: Do the three recommendation cards each cite a specific number to justify the recommendation? A recommendation without a number is an opinion. Flag any recommendation that lacks a specific metric.

4. FUNNEL BENCHMARK: For the conversion funnel, does the prompt specify a benchmark conversion rate at each stage for comparison? If not, the funnel shows actuals only — no context for whether the numbers are good or bad.

5. ATTAINMENT SIGNAL: Is the 44.7% opportunity attainment figure specified with a visual signal (amber/red chip or colour) to indicate it is below target? Flag if it appears only as a number with no status treatment.

After checking, give me: (a) a list of issues found, (b) the single most important change to make before firing this prompt.

[PASTE YOUR FULL PROMPT HERE]

## checkpoint

Before moving to Build:
- Chart sort order is explicitly specified ("lowest to highest cost-per-opportunity")
- Executive Roundtables and Webinars are named by channel in the colour specification
- Each recommendation card references a specific figure to justify it
- You made at least one change based on the validation output
- The 44.7% attainment figure has a visual status treatment in your specification
