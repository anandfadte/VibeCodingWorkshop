# Build Chain
> Run /architect then /code-builder in the same conversation. (~7 min)

## skill_chain
/architect → /code-builder → /human

## context

Skills run AFTER research and data analysis — richer context produces better output. Run each skill below in the **same conversation** where you uploaded the data and set context. Do NOT start a new chat.

**Two prompts. Two skills. One complete HTML dashboard.**

## prompt
/architect I need to build a single-file executive sales dashboard as a self-contained HTML file for a client QBR presentation.

You have the data (q4_performance_data.json) and design context already in this conversation. Based on that, design the architecture:

1. **Layout structure** — header, section order, grid system (how many columns, what breaks to mobile)
2. **Component list** — name every visual element: KPI cards (which 4 metrics), charts (type + data mapping for each), table (columns), navigation if any
3. **Data mappings** — for each chart and KPI card, name the exact JSON fields that feed it
4. **Alpine.js state** — what interactive state is needed? (tabs, active filters, toggle states)
5. **Color usage** — which palette color goes on which element (not generic "accent" — specific hex)

Output: Architecture document only. No HTML code yet. I will ask for the code in the next step.

## prompt_2
/code-builder Build the complete, working single-file HTML dashboard based on the architecture you just defined.

Hard requirements:
1. All libraries via CDN — Tailwind CSS (https://cdn.tailwindcss.com), ApexCharts (https://cdn.jsdelivr.net/npm/apexcharts), Alpine.js (https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js), Inter font (Google Fonts)
2. All data embedded as a const DATA = {...} JavaScript object at the top of the script — use the exact numbers from the JSON file I uploaded, not invented values
3. The file must work when saved as dashboard.html and double-clicked — zero dependencies
4. Full implementation — no placeholders, no "// add chart here", no incomplete sections

Quality bar:
- KPI numbers: large (text-4xl or larger), bold, with delta badges showing vs-target percentage
- Charts: tooltips on hover, clean axes, consistent color usage, no default ApexCharts blue unless it matches the palette
- Table: sortable columns if Alpine.js makes it straightforward, alternating row colors, no overflow
- Responsive: works at 1280px laptop width; acceptable at 768px tablet

Output: The complete HTML file — every line, from <!DOCTYPE html> to </html>. No truncation. No "rest of the code follows the same pattern." I need to copy this directly into a .html file and it must work.

## tip

Notice the two-step approach: /architect first, then /code-builder. When you skip architecture and go straight to build, the AI makes structural decisions under pressure and produces a mediocre layout. When you define the structure first, /code-builder has a blueprint and the output is dramatically better. The 90 seconds you spend on /architect saves 5 minutes of iteration later.
