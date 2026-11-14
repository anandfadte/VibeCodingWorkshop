## overview

This is the build phase. Run the architecture prompt first, then the full build. A portfolio dashboard has lots of nested data — the architecture step is especially important here to get the layout right before coding.

## skill_chain

/architect → /code-builder → /human

## prompt

You are a senior delivery management consultant and UI designer. I need an architecture plan — no code yet — for an executive project portfolio dashboard.

**Context:** This dashboard is for the Genpact APAC Client Delivery portfolio, managed by VP Priya Nair. As of December 1, 2024, the portfolio has 10 tracked projects. The dashboard will be used in a weekly leadership review to identify where escalation is needed. It needs to work as a standalone HTML file on any laptop.

**Sections to include — give me the layout and content plan for each:**

1. **Portfolio Scorecard** — a header row with 5 stat tiles: Total Projects (10), Green (5), Amber (4), Red (1 showing P010 — note: P003 is also red but already past due date, P010 is active critical), Total Revenue at Risk ($8.2M), Avg Client Satisfaction. The Red tile should pulse or be visually urgent.

2. **Project Health Grid** — a card grid (5 per row on desktop, 2 on mobile) showing each project as a card with: project ID, project name, client name, RAG status badge (coloured), current phase, budget consumed %, and client satisfaction score out of 5. Cards should be sortable by clicking column headers or RAG status.

3. **Red & Amber Project Drill-Down** — an expandable list of only the at-risk projects (Red + Amber), each showing: top risk (the full text), next at-risk milestone, and a recommended escalation action. This section should be labelled "Requires Attention" and appear prominently.

4. **Budget vs. Progress Overview** — a horizontal bar chart showing all 10 projects, with budget consumed % as a filled bar in indigo, and a threshold line at 80% (above which projects need attention). Projects with budget >80% and Red/Amber status should be highlighted.

5. **Client Satisfaction Leaderboard** — a simple ranked list of all projects by satisfaction score (5.0 → 2.1), with a colour dot (Green ≥4.0, Amber 3.0–3.9, Red <3.0) and the project name and client.

6. **Portfolio Timeline** — a horizontal Gantt-style view showing each project as a horizontal bar from start to end date, coloured by RAG status, with today's date as a vertical line. Projects due in Q1 2025 should be labelled.

**Design requirements:**
- Operations-room aesthetic — this is a live-looking dashboard, not a report
- Color scheme: dark navy header (#1E293B), white card bodies, RAG colours: Green #22C55E, Amber #F59E0B, Red #EF4444, Indigo accent #4F46E5
- Typography: Inter font from Google Fonts, weight 700 for headlines, 400 for body
- The two Red projects (P003 and P010) must be visually unmissable — use a pulsing red dot or bold red border
- Clicking a project card should expand it to show all milestone details and the top risk

Give me the architecture plan only. No HTML code yet.

## prompt_2

Now build the complete, single-file HTML portfolio dashboard based on the architecture plan above and the project tracker data I shared earlier.

**Technical requirements — follow these exactly:**
- Single self-contained HTML file, no external dependencies except CDN links
- CDN links to use:
  - Tailwind CSS: `<script src="https://cdn.tailwindcss.com"></script>`
  - Alpine.js: `<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js"></script>`
  - ApexCharts: `<script src="https://cdn.jsdelivr.net/npm/apexcharts@3.54.0/dist/apexcharts.min.js"></script>`
  - Inter font: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">`
- All data must be inline as JavaScript objects — no fetch calls, no external JSON files
- Use Alpine.js for interactivity: expandable project cards, RAG filter buttons

**Data to inline — use exactly these values:**

```javascript
const data = {
  portfolio: "Genpact Client Delivery — APAC Portfolio",
  reportingDate: "1 December 2024",
  owner: "Priya Nair, VP Client Delivery",

  summary: {
    total: 10,
    green: 5,
    amber: 4,
    red: 2,  // Note: adjusted for included projects
    revenueAtRisk: "$8.2M",
    headcount: 847
  },

  projects: [
    { id: "P001", name: "Calloway AP Automation", client: "Calloway Industries", domain: "Finance Ops", owner: "Arjun Mehta", status: "green", phase: "Implementation", budgetPct: 48, satisfaction: 4.2, topRisk: "SAP patch Dec 20 may delay UAT by 1 week", endDate: "2025-01-31",
      milestones: [
        { name: "Discovery Complete", due: "Aug 15", status: "done" },
        { name: "SAP Integration Live", due: "Oct 30", status: "done" },
        { name: "UAT Sign-off", due: "Dec 15", status: "on_track" },
        { name: "Go Live", due: "Jan 31", status: "on_track" }
      ]
    },
    { id: "P002", name: "Pacific Ventures Data Platform", client: "Pacific Ventures Corp", domain: "Technology", owner: "Mei Lin", status: "amber", phase: "Design", budgetPct: 22, satisfaction: 3.6, topRisk: "Architecture sign-off delayed 3 weeks — cascading to build start", endDate: "2025-04-30",
      milestones: [
        { name: "Kick-off", due: "Sep 15", status: "done" },
        { name: "Architecture Approved", due: "Nov 1", status: "delayed" },
        { name: "Build Phase Start", due: "Dec 1", status: "at_risk" },
        { name: "Beta Launch", due: "Mar 31", status: "at_risk" }
      ]
    },
    { id: "P003", name: "Sunrise Distribution Procurement", client: "Sunrise Distribution", domain: "Procurement", owner: "Daniel Ojo", status: "red", phase: "Implementation", budgetPct: 87, satisfaction: 2.1, topRisk: "CRITICAL: UAT failed — data quality issues. Go-live missed Nov 30. Client considering penalty clause.", endDate: "2024-11-30",
      milestones: [
        { name: "Process Design", due: "Jun 30", status: "done" },
        { name: "System Config", due: "Sep 30", status: "done_late" },
        { name: "UAT", due: "Nov 15", status: "failed" },
        { name: "Go Live", due: "Nov 30", status: "missed" }
      ]
    },
    { id: "P004", name: "Nordic Retail Analytics", client: "Nordic Retail Partners", domain: "Analytics", owner: "Sofia Andersen", status: "green", phase: "Rollout", budgetPct: 61, satisfaction: 4.7, topRisk: "Phase 2 spans Chinese New Year — 2-week buffer built in", endDate: "2025-02-28",
      milestones: [
        { name: "Pilot (2 markets)", due: "Aug 31", status: "done" },
        { name: "Rollout Phase 1", due: "Nov 30", status: "done" },
        { name: "Rollout Phase 2", due: "Jan 31", status: "on_track" },
        { name: "Full Production", due: "Feb 28", status: "on_track" }
      ]
    },
    { id: "P005", name: "Kestrel Logistics HR Transform", client: "Kestrel Logistics", domain: "Human Resources", owner: "Priya Sharma", status: "amber", phase: "Implementation", budgetPct: 54, satisfaction: 3.9, topRisk: "Integration testing backlog — 3 of 11 integration points incomplete", endDate: "2025-03-31",
      milestones: [
        { name: "Process Mapping", due: "Aug 31", status: "done" },
        { name: "HRIS Configuration", due: "Nov 15", status: "done_late" },
        { name: "Integration Testing", due: "Dec 20", status: "at_risk" },
        { name: "Go Live", due: "Jan 31", status: "at_risk" }
      ]
    },
    { id: "P006", name: "Calloway CX Intelligence", client: "Calloway Industries", domain: "Customer Experience", owner: "James Okafor", status: "green", phase: "Discovery", budgetPct: 12, satisfaction: 4.0, topRisk: "Client sponsor on parental leave — temporary replacement lacks authority", endDate: "2025-06-30",
      milestones: [
        { name: "Kick-off", due: "Oct 15", status: "done" },
        { name: "Stakeholder Interviews", due: "Dec 15", status: "on_track" },
        { name: "Current-State Assessment", due: "Jan 31", status: "planned" },
        { name: "Roadmap Approval", due: "Feb 28", status: "planned" }
      ]
    },
    { id: "P007", name: "Vantage Group Finance Shared Svcs", client: "Vantage Group", domain: "Finance Ops", owner: "Laura Chen", status: "amber", phase: "Transition", budgetPct: 79, satisfaction: 3.4, topRisk: "3 key SMEs leaving year-end. Knowledge transfer documentation incomplete.", endDate: "2024-12-31",
      milestones: [
        { name: "Transition Plan", due: "Apr 30", status: "done" },
        { name: "Team Onboarded", due: "Jul 31", status: "done" },
        { name: "Hypercare Complete", due: "Nov 30", status: "done_late" },
        { name: "Steady State Handover", due: "Dec 31", status: "at_risk" }
      ]
    },
    { id: "P008", name: "Harvest Capital AML & Compliance", client: "Harvest Capital", domain: "Risk & Compliance", owner: "Amir Hassan", status: "green", phase: "Steady State", budgetPct: 46, satisfaction: 4.6, topRisk: "AML Directive 6 requires scope extension — SOW amendment in progress", endDate: "2026-01-14",
      milestones: [
        { name: "Go Live", due: "Apr 1", status: "done" },
        { name: "Q2 Audit Pass", due: "Jul 31", status: "done" },
        { name: "Q3 Audit Pass", due: "Oct 31", status: "done" },
        { name: "Annual Review", due: "Jan 31", status: "on_track" }
      ]
    },
    { id: "P009", name: "BlueStar Retail Supply Chain", client: "BlueStar Retail", domain: "Supply Chain", owner: "Wei Zhang", status: "green", phase: "Implementation", budgetPct: 34, satisfaction: 4.1, topRisk: "Dependency on client IT for ERP access — 2-week SLA delays", endDate: "2025-05-31",
      milestones: [
        { name: "Process Design", due: "Sep 30", status: "done" },
        { name: "ERP Configuration", due: "Dec 15", status: "on_track" },
        { name: "Pilot Warehouse", due: "Feb 28", status: "planned" },
        { name: "Full Rollout", due: "May 31", status: "planned" }
      ]
    },
    { id: "P010", name: "Apex Global Digital Transform", client: "Apex Global Holdings", domain: "Technology", owner: "Rachel Kim", status: "red", phase: "Implementation", budgetPct: 94, satisfaction: 2.8, topRisk: "CRITICAL: 94% budget consumed with 15% scope incomplete. Change request for $420K pending client approval.", endDate: "2024-10-31",
      milestones: [
        { name: "Discovery", due: "Mar 31", status: "done" },
        { name: "Build Phase 1", due: "Jun 30", status: "done_late" },
        { name: "Build Phase 2", due: "Sep 30", status: "delayed" },
        { name: "Go Live", due: "Oct 31", status: "missed" }
      ]
    }
  ]
};
```

**Component specifications:**
- Portfolio scorecard: 5 stat tiles in a row; Green/Amber/Red counts each in their own coloured tile; Revenue at Risk in Red
- Project health grid: 2-column on mobile, 5-column on desktop; each card shows ID, name, client, RAG badge, phase, budget bar (progress bar coloured by %, Red if >80% and status Amber/Red), satisfaction stars; click to expand and show milestones + risk text
- Red/Amber projects accordion: collapsible cards for P002, P003, P005, P007, P010 — each showing risk text in a red/amber callout box
- Budget chart: ApexCharts horizontal bar, bars in indigo, a 80% threshold vertical line in red, project IDs on Y-axis
- Satisfaction leaderboard: simple HTML ordered list, RAG dot, project name, client name, score
- Milestone status uses these labels: done (green ✓), on_track (indigo clock), planned (gray), at_risk (amber ⚠), delayed (amber), done_late (yellow), failed (red ✗), missed (red ✗)
- Alpine.js: implement a RAG filter at top of project grid (All / Green / Amber / Red buttons)
- CSS animation: Red project cards should have a subtle pulsing red border glow (`@keyframes pulse-red`)

**Quality bar:** This should look like a professional project management tool (Jira, Smartsheet, or ServiceNow) — operational, information-dense, with nothing decorative. Every piece of data must come from the data object. The two Red projects must be unmissable. Build the complete file now.
