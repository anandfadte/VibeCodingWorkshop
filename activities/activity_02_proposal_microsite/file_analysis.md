# Validate
> A sales proposal sent with a vague stakeholder section loses the room before the pitch starts. Thirty seconds in ChatGPT catches the gaps before you fire the prompt in your build tool.

## scenario

You have a crafted prompt. Before you fire it in Claude, Copilot, or Cursor, paste it into ChatGPT or Gemini and ask it to validate the prompt — not write the code, just check the prompt.

Here is why this step matters for a proposal: a proposal is a live document. Robert Chen will click through it. Sarah Whitfield will read her section in a meeting. Marcus Webb will forward it to his team. If the prompt produced a generic layout, a placeholder case study, or the wrong ROI figure, those errors are in the room with the client.

Catching them now — before you have an HTML file — costs 30 seconds. Catching them after the client has seen the file is a different problem.

## context

What to check in a proposal prompt:

**Stakeholder completeness** — does each named stakeholder have a dedicated section? If Robert Chen's objection is not addressed by name in the prompt, the AI will produce a generic "implementation approach" section that does not answer his real concern.

**Numbers match the brief** — $8.35M total pain, 215% ROI, 14-month payback, $17.9M NPV. If your prompt has any of these wrong, the proposal has them wrong.

**Case study specificity** — "Nordic Manufacturing: 5 months, $4.2M year-1 savings, 94% invoice automation" is specific. "Similar client success story" is not. The AI fills vague references with invented data.

**Layout vs content** — does your prompt distinguish between the layout instruction ("four metric cards in a row") and the content instruction ("card 3: year-1 savings $4.1M")? A prompt that only specifies layout produces cards with placeholder values.

**Alpine.js interactivity** — if you specified a tab strip, did you describe what each tab shows? "Tab for each stakeholder" is ambiguous. "Tab 1: ROI Summary | Tab 2: Robert Chen | Tab 3: Sarah Whitfield | Tab 4: Marcus Webb" is a build instruction.

## do_this

Paste your full prompt into ChatGPT or Gemini with this validation request:

## prompt

You are reviewing a build prompt for a sales proposal microsite. Do not write any code. Check the prompt for these issues and list any you find:

1. STAKEHOLDER GAPS: Does each named stakeholder (Robert Chen, Sarah Whitfield, Marcus Webb) have a dedicated section with content specific to their concern? Flag any stakeholder whose section could apply to any proposal.

2. NUMBER ACCURACY: Identify every financial figure in the prompt. For each one, ask: is this a specific number or a placeholder like "[ROI]"? List any placeholders that were not filled in.

3. CASE STUDY SPECIFICITY: Are the case studies (Nordic Manufacturing, Pacific Distribution) populated with exact figures, or do they say "similar client" or leave brackets unfilled?

4. LAYOUT VS CONTENT: Can you tell from the prompt what text will appear inside each card or section, or only what the cards look like? Flag sections where only layout is specified, not content.

5. INTERACTIVITY CLARITY: If Alpine.js tabs are mentioned, is each tab's content clearly defined?

After checking, give me: (a) a list of gaps, (b) one specific change I should make to the highest-priority gap before firing this in Claude.

[PASTE YOUR FULL PROMPT HERE]

## checkpoint

Before moving to Build:
- You ran the validation check — not skipped it
- You made at least one change based on the validation output
- Every stakeholder section has specific content, not generic text
- All financial figures are filled in with real numbers from the brief
- You understand what the AI will produce before you fire the prompt
