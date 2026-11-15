import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Clock,
  Download,
  Layers,
  Zap,
} from "lucide-react";
import { getActivities, getActivityBySlug } from "@/lib/activities";
import { ActivityPhases } from "@/components/ActivityPhases";

export async function generateStaticParams() {
  const activities = await getActivities();
  return activities.map((a) => ({ slug: a.config.slug }));
}

export default async function ActivityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const activity = await getActivityBySlug(slug);
  if (!activity) notFound();

  const allActivities = await getActivities();
  const currentIndex = allActivities.findIndex((a) => a.config.slug === slug);
  const prev = currentIndex > 0 ? allActivities[currentIndex - 1] : null;
  const next = currentIndex < allActivities.length - 1 ? allActivities[currentIndex + 1] : null;

  const { config } = activity;
  const activityNum = currentIndex + 1;

  return (
    <div className="mx-auto max-w-[900px] px-4 py-10">
      {/* Breadcrumb */}
      <Link
        href="/activities"
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors"
      >
        <ChevronLeft size={16} />
        Back to activities
      </Link>

      {/* Header */}
      <section className="mb-10">
        <h1 className="mb-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          <span className="text-accent">
            {String(activityNum).padStart(2, "0")}.
          </span>{" "}
          {config.title}
        </h1>

        {/* Data files download — right under the title, always above the fold */}
        {config.data_files && config.data_files.length > 0 && (
          <div className="mb-5 rounded-xl border-2 border-accent/40 bg-accent/5 px-4 py-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                <Download size={13} />
                Data files — download and attach to your AI tool:
              </span>
              {config.data_files.map((f) => {
                const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
                const href = `${basePath}/data/${config.slug}/${f.filename}`;
                const typeColour =
                  f.type === "xlsx" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                  : f.type === "pdf"  ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                  : f.type === "png"  ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                  : "bg-accent/10 text-accent";
                return (
                  <a
                    key={f.filename}
                    href={href}
                    download={f.filename}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-white hover:bg-accent/90 transition-colors"
                  >
                    <span className={`rounded px-1 py-0.5 text-[8px] font-bold uppercase ${typeColour}`}>{f.type.toUpperCase().slice(0, 4)}</span>
                    {f.display_name}
                    <Download size={11} />
                  </a>
                );
              })}
            </div>
          </div>
        )}

        <p className="mb-6 text-lg text-text-secondary">{config.subtitle}</p>

        {/* Metadata strip */}
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-alt px-3 py-1 font-medium text-text-secondary">
            <Layers size={14} />
            {config.domain}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-surface-alt px-3 py-1 text-text-secondary">
            <Clock size={14} />
            {config.duration_minutes} min
          </span>
          <span className="rounded-md bg-surface-alt px-3 py-1 text-text-muted">
            {config.difficulty}
          </span>
        </div>

        {/* Skill chain */}
        {config.skill_chain && config.skill_chain.length > 0 && (
          <div className="mb-6 rounded-xl border border-border bg-surface-alt p-4">
            <div className="flex items-center gap-2 mb-3">
              <Zap size={14} className="text-accent" />
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Skills chain for this activity
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {config.skill_chain.map((skill, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="rounded bg-accent/10 px-3 py-1 font-mono text-sm font-semibold text-accent">
                    {skill}
                  </span>
                  {i < config.skill_chain.length - 1 && (
                    <span className="text-text-muted text-sm">→</span>
                  )}
                </span>
              ))}
            </div>
            <p className="mt-3 text-xs text-text-muted">
              Run all skills in the <strong>same AI conversation</strong>, in order. Context compounds.
            </p>
          </div>
        )}

        {/* Learning objectives */}
        <div className="rounded-xl border border-border bg-surface-alt p-5">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-3">
            What you will practise
          </h3>
          <ul className="space-y-1.5">
            {config.learning_objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {obj}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Phases */}
      <section className="mb-10">
        <ActivityPhases
          slug={config.slug}
          phases={activity.phases}
          dataFiles={config.data_files ?? []}
          durationMinutes={config.duration_minutes}
        />
      </section>

      {/* Previous / Next navigation */}
      <nav className="mt-16 flex items-center justify-between border-t border-border pt-6">
        {prev ? (
          <Link
            href={`/activities/${prev.config.slug}`}
            className="group flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
            <div>
              <div className="text-xs text-text-muted">Previous</div>
              <div className="font-medium text-text-secondary group-hover:text-accent">
                {String(currentIndex).padStart(2, "0")}. {prev.config.title}
              </div>
            </div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/activities/${next.config.slug}`}
            className="group flex items-center gap-2 text-right text-sm text-text-muted hover:text-accent transition-colors"
          >
            <div>
              <div className="text-xs text-text-muted">Next</div>
              <div className="font-medium text-text-secondary group-hover:text-accent">
                {String(currentIndex + 2).padStart(2, "0")}. {next.config.title}
              </div>
            </div>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </div>
  );
}
