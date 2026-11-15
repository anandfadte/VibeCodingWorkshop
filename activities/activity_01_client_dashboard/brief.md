# Brief
> Get oriented in 5 minutes. Read the scenario. Review the design references. Skim the data file.

## scenario

**Client:** Meridian Retail Group
**Deliverable:** Single-file interactive HTML QBR dashboard
**Audience:** Leadership team — quarterly business review, tomorrow
**Your data file:** `meridian_q4_data.xlsx` (4 sheets: Revenue Summary, Monthly Revenue, Client Risk Table, Pipeline)
**Design references:** `screenshot_1.png` and `screenshot_2.png` in this folder

## context

Open `screenshot_1.png` and `screenshot_2.png`. These are your design references — treat them like a Figma handoff. A designer built this visual standard; your job is to instruct an AI to match it. Your final dashboard must meet this quality before presenting to any client.

Four non-negotiable rules extracted from the design standard:

**1. Color** — Primary `#4F46E5` (indigo) for headlines, tiles, and chart accents. `#F8FAFC` page background. White card surfaces. These are not suggestions.

**2. Typography** — Inter font. `font-weight: 800` for the revenue headline number — the number that matters most in this room. `font-weight: 600` for tile labels and section titles. `font-weight: 400` for body text. One font, three weights.

**3. Layout** — Scorecard visible above the fold. 2-column chart grid below. Client table below that. No horizontal scroll at any screen width.

**4. Interactivity** — A live region filter using Alpine.js. A static HTML page is not the deliverable.

## do_this

1. Open `screenshot_1.png` — this shows the design system: colors, typography, and tile component patterns
2. Open `screenshot_2.png` — this shows the target dashboard layout for this activity
3. Open `meridian_q4_data.xlsx` — read the Revenue Summary and Client Risk Table sheets (3 minutes)
4. Answer these three questions before moving to Craft:
   - What is the revenue attainment percentage?
   - Which client has High renewal risk, and what are their YoY growth and NPS?
   - What is the pipeline coverage ratio?

## checkpoint

Before moving to Craft:
- You know the client, the deliverable, and who is in the room
- You have opened and reviewed both screenshots — you know the visual bar
- You can answer all three data questions above without opening the file again
