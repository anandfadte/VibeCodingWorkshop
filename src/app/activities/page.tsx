import { getActivities } from "@/lib/activities";
import { ActivityGrid } from "@/components/ActivityGrid";

const PHASES = [
  { name: "Brief", time: "~5 min", label: "Scenario + design standard" },
  { name: "Craft", time: "~12 min", label: "Build the prompt" },
  { name: "Build", time: "~13 min", label: "Fire, iterate, ship" },
];

export default async function ActivitiesPage() {
  const activities = await getActivities();

  const cards = activities.map((a, i) => ({
    id: a.config.id,
    slug: a.config.slug,
    title: a.config.title,
    subtitle: a.config.subtitle,
    domain: a.config.domain,
    duration_minutes: a.config.duration_minutes,
    difficulty: a.config.difficulty,
    sort_order: i + 1,
    deliverable: a.config.deliverable,
    skill_chain: a.config.skill_chain ?? [],
    plugins: a.config.plugins ?? [],
  }));

  const domains = [...new Set(cards.map((c) => c.domain))].sort();

  return (
    <div className="mx-auto max-w-[1100px] px-4 py-10">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Activities
        </h1>
        <p className="mt-3 max-w-[680px] text-text-secondary">
          Each activity gives you a real business scenario and a data file.
          Work through three phases using any AI tool to build a client-ready interactive dashboard — no installation, no server, just a single HTML file — in 30 minutes.
        </p>
      </div>

      {/* Skills stack diagram */}
      <div className="mb-12 rounded-xl border border-border bg-surface p-6 sm:p-8">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-text-muted">
          The build workflow you will practise
        </p>

        {/* Stepper */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute left-[18px] right-[18px] top-[18px] h-px bg-border"
            aria-hidden="true"
          />

          {/* Steps */}
          <div className="relative flex justify-between gap-2">
            {PHASES.map((phase, i) => (
              <div key={i} className="flex flex-1 flex-col items-center text-center min-w-0 px-1">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white ring-4 ring-surface">
                  {i + 1}
                </div>
                <p className="mt-3 text-[13px] font-semibold leading-tight text-text-primary sm:text-sm">
                  {phase.name}
                </p>
                <p className="mt-1 hidden text-[11px] leading-snug text-text-muted sm:block">
                  {phase.label}
                </p>
                <span className="mt-1.5 inline-block rounded bg-surface-alt px-1.5 py-0.5 text-[11px] font-medium text-text-muted">
                  {phase.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 border-t border-border pt-4 text-xs text-text-muted">
          Each phase builds on the last. Works with Claude, Copilot, Cursor, or any AI tool.
        </p>
      </div>

      <ActivityGrid activities={cards} domains={domains} />
    </div>
  );
}
