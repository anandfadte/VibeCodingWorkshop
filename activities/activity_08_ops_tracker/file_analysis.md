# Validate
> Priya Nair has 15 minutes before the leadership review starts. If the dashboard loads and P003 does not immediately read as a crisis, the tool has failed its purpose. Validate before you build.

## scenario

You have a crafted prompt with RAG colour definitions, P003 and P010 detail panels, and Alpine.js filter buttons. Before you fire it in Claude, Copilot, or Cursor, paste it into ChatGPT or Gemini and ask it to validate the prompt.

Here is what goes wrong in portfolio tracker prompts when this step is skipped:

The RAG colours render as Tailwind defaults, not your exact hex codes. `border-red-500` and `bg-red-50` are close to your specification but not exact — in a leadership presentation on a projector, the difference between a sharp `#DC2626` red border and a washed-out Tailwind `border-red-400` is visible and reads as unfinished.

The expandable detail panels are built but show the wrong fields. "Show project details" is too vague — the AI picks fields it considers standard (project name, start date, status). It may omit the penalty clause date, the budget burn rate, and the recommended action — the three fields Priya actually needs in the meeting.

The filter buttons work for the initial view but reset the sort order. After filtering to Red, the projects appear in ID order (P003, P010) which is fine — but after clearing the filter, the sort may not restore to Red-first. If your prompt did not specify the default sort, the AI picks one.

## context

What to check in a portfolio tracker prompt:

**RAG colour completeness** — did you specify all three values per status (text colour, border colour, background colour)? Missing one means the AI fills the gap with a default that may not match.

**Penalty clause date visibility** — is the Dec 15 date explicitly named in your P003 specification? This is the most time-sensitive piece of information in the entire dashboard. If it is in the data file but not your prompt, it may appear in a detail view but not on the card where Priya sees it in the first pass.

**Alpine.js behaviour specificity** — did you describe what happens when a filter button is clicked? "Alpine.js filter buttons" is a structure instruction. "On click All: show all cards, sorted Red first; on click Red: show only Red cards" is a behaviour instruction. The AI needs both.

**Budget progress bar** — did you specify the warning threshold for the progress bar colour change? ">85% = red bar" is a specific instruction. "Show budget consumption" produces a neutral grey bar.

**$8.2M header banner** — is this in your prompt as a visual element, not just as data? A revenue-at-risk figure that lives in a data array and not in a specified banner element may not appear prominently in the output.

## do_this

Paste your full prompt into ChatGPT or Gemini with this validation request:

## prompt

You are reviewing a build prompt for a project portfolio dashboard. Do not write any code. Check the prompt for these issues and list any you find:

1. RAG COLOUR COMPLETENESS: For each RAG status (Red, Amber, Green), are all three values defined: text/chip colour, border colour, and background colour? Flag any status where one of the three is missing or left to the AI to decide.

2. CRITICAL DATE VISIBILITY: Is the P003 penalty clause date (Dec 15) specified as a visible element on the project card itself — not just in the expandable detail panel? If it only appears on expand, flag this.

3. ALPINE.JS BEHAVIOUR DEFINITION: Are the filter button behaviours described as specific actions ("on click Red: show only Red cards, sorted by budget consumed descending") or only as general instructions ("add filter buttons")? Flag any button whose click behaviour is not explicitly defined.

4. PROGRESS BAR THRESHOLDS: Is the budget consumption progress bar colour change threshold specified as a number (">85% = red")? Or is it left as "colour it appropriately"? Flag if threshold is missing.

5. REVENUE-AT-RISK PROMINENCE: Is the $8.2M revenue-at-risk figure specified as a visual banner or headline element in the layout? Or does it only appear as a number in the data specification? Flag if it lacks a layout instruction.

After checking, give me: (a) gaps found, (b) the single change that most affects whether Priya can run her 15-minute review using this dashboard.

[PASTE YOUR FULL PROMPT HERE]

## checkpoint

Before moving to Build:
- All three RAG colour values (text, border, background) are defined for each status
- The Dec 15 penalty clause date is specified as visible on the P003 card
- Alpine.js filter button behaviours are defined as specific actions
- Budget progress bar threshold (>85% = red) is in your prompt
- You made at least one change based on the validation output
