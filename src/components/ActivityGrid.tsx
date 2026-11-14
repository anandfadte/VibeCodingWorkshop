"use client";
import { useState } from "react";
import Link from "next/link";
import { Clock, Layers, ChevronRight } from "lucide-react";

interface ActivityCard {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  domain: string;
  duration_minutes: number;
  difficulty: string;
  sort_order: number;
  deliverable: string;
  skill_chain: string[];
  plugins: string[];
}

export function ActivityGrid({ activities, domains }: { activities: ActivityCard[]; domains: string[] }) {
  const [domainFilter, setDomainFilter] = useState("");

  const filtered = activities.filter((a) => {
    if (domainFilter && a.domain !== domainFilter) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={domainFilter}
          onChange={(e) => setDomainFilter(e.target.value)}
          className="rounded-lg border border-border bg-surface px-3 py-2 text-sm text-text-primary focus:border-accent focus:outline-none"
        >
          <option value="">All domains</option>
          {domains.map((d) => <option key={d} value={d}>{d}</option>)}
        </select>
        <span className="ml-auto text-sm text-text-muted">{filtered.length} activit{filtered.length === 1 ? "y" : "ies"}</span>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <Link
            key={a.slug}
            href={`/activities/${a.slug}`}
            className="group relative rounded-xl border border-border bg-surface p-5 transition-all hover:shadow-md hover:border-accent/50 flex flex-col"
          >
            <div className="mb-3">
              <span className="text-3xl font-bold text-accent/80">{String(a.sort_order).padStart(2, "0")}</span>
            </div>

            <h3 className="mb-2 text-base font-semibold leading-snug text-text-primary group-hover:text-accent transition-colors">
              {a.title}
            </h3>

            <p className="mb-4 text-sm text-text-muted line-clamp-2 flex-1">{a.subtitle}</p>

            {/* Plugin badges */}
            <div className="mb-3 flex flex-wrap gap-1.5">
              {a.plugins.map((p) => (
                <span key={p} className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 px-2 py-0.5 text-[11px] font-medium text-blue-700 dark:text-blue-300">
                  {p}
                </span>
              ))}
            </div>

            {/* Skill chain */}
            <div className="mb-3 flex flex-wrap gap-1 items-center">
              {a.skill_chain.map((s, i) => (
                <span key={s} className="flex items-center gap-1">
                  <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-mono font-semibold ${
                    s === "/human"
                      ? "bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300"
                      : "bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300"
                  }`}>{s}</span>
                  {i < a.skill_chain.length - 1 && <ChevronRight size={10} className="text-text-muted" />}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 text-xs text-text-muted">
              <span className="inline-flex items-center gap-1 rounded-md bg-surface-alt px-2 py-1 font-medium">
                <Layers size={12} />
                {a.domain}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock size={12} />
                {a.duration_minutes} min
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
