# Craft
> Your placeholders are filled. Now deepen the prompt — add the specific insights that turn a project list into an escalation agenda for Priya's review.

## scenario

You have a filled prompt from Stack. It has the right projects and the right RAG colors. Now it needs the right narrative — the insight that tells Priya not just which projects are Red, but what specifically she needs to do before the next review.

This phase adds three layers to your prompt before you fire it.

## context

Look at your filled prompt from Stack. Find these three gaps and add the missing instructions now.

**Gap 1 — The P010 scope creep story.** P010 (Apex Global Digital Transformation) has 94% budget consumed with 15% of scope incomplete — a $420k change request is waiting for client approval. This is the highest-value project at risk and needs an action callout. Add this instruction to the P010 escalation card:

`On the P010 escalation card, add an action callout box in bold: "Change request outstanding — $420k pending client approval. Without approval by [set a date 2 weeks from reporting date], the project cannot complete remaining scope. Escalation owner: Priya Nair."`

**Gap 2 — The Q1 2025 risk radar.** 6 projects are due in Q1 2025 — but some of them already have Amber status. Projects with an Amber status AND a Q1 deadline are the early warnings before they turn Red. Add this instruction after the main project table:

`Add a Q1 2025 Deadline Alert section: list only the projects with planned_end_date in Q1 2025 (Jan–Mar 2025). Highlight any that are currently Amber or Red with a warning badge: "Q1 at risk — requires attention before year-end." This section should appear between the escalation cards and the full project table.`

**Gap 3 — The budget consumption pattern.** Projects at > 80% budget with more than 20% timeline remaining are the ones most likely to become Red. Add this instruction to the project table:

`In the project table, add a "Budget Warning" indicator (amber triangle icon) next to any project where budget_consumed_pct > 80% AND the planned end date is more than 30 days away from the reporting date (2024-12-01). This catches emerging problems before they escalate to Red.`

## do_this

Add all three gaps to your prompt. The result should be 300–350 words total.

Read the completed prompt once before moving to Validate. If you can point to P010's action callout, the Q1 risk radar, and the budget warning indicator and say what Priya should do about each one, you are ready.

## checkpoint

Before moving to Validate:
- P010 action callout added with the $420k change request and escalation owner
- Q1 2025 Deadline Alert section added between escalation cards and the full project table
- Budget warning indicator added for projects > 80% consumed with time remaining
- Prompt is 300–350 words
- Every figure in the prompt traces back to the data file
