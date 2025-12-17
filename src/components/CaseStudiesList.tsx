"use client";

import { useState } from "react";

type Study = {
  title: string;
  summary: string;
  tags?: string[];
  context: string;
  problem: string;
  constraints: string[];
  options: string[];
  decision: string;
  execution: string[];
  outcomes: string[];
  learnings: string[];
};

export default function CaseStudiesList({ studies }: { studies: Study[] }) {
  const [selected, setSelected] = useState<Study | null>(null);

  return (
    <section id="case-studies" className="scroll-mt-24 space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">Case Studies</p>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold leading-tight text-[var(--foreground)]">
            Problems I've Worked On
          </h2>
          <p className="text-base text-muted leading-relaxed max-w-2xl">
            What the problem was, how we approached it, and what changed
          </p>
        </div>
      </header>

      <div className="space-y-6">
        {studies.map((study, idx) => {
          const indexLabel = String(idx + 1).padStart(2, "0");
          return (
            <article
              key={study.title}
              onClick={() => setSelected(study)}
              className="hover-luminous rounded-xl border border-white/10 bg-[#222222] p-5 sm:p-6 transition-all duration-200 hover:border-white/16 hover:bg-[#282828] cursor-pointer group"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2 flex-1">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Case {indexLabel}</p>
                  <h3 className="text-lg sm:text-xl font-semibold text-[var(--foreground)] leading-tight group-hover:text-[var(--accent)] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-4 sm:line-clamp-3">{study.summary}</p>
                  {study.tags && study.tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-[var(--foreground)]">
                      {study.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-[#1a1a1a] px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
                <div className="flex items-center text-muted group-hover:text-[var(--accent)] transition-colors sm:self-start">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {selected ? (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4 py-6 sm:py-10"
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
        >
          <div
            className="w-full max-w-3xl rounded-2xl bg-[#222222] p-5 sm:p-6 max-h-[88vh] overflow-y-auto border border-white/12 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-[#222222] pb-4 border-b border-white/10">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                    Case {String(studies.indexOf(selected) + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold text-[var(--foreground)]">{selected.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{selected.summary}</p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#2b2b2b] text-muted hover:text-[var(--foreground)] hover:border-white/25 transition-colors"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 space-y-6 text-sm sm:text-base leading-7 text-muted">
              <CaseSection title="Context" body={[selected.context]} />
              <CaseSection title="Problem" body={[selected.problem]} />
              <CaseSection title="Constraints" list={selected.constraints} />
              <CaseSection title="Decision" body={[selected.decision]} />
              <CaseSection title="Execution" list={selected.execution} />
              <CaseSection title="Metrics" list={selected.outcomes} />
              <CaseSection title="Learnings" list={selected.learnings} />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function CaseSection({
  title,
  body,
  list,
}: {
  title: string;
  body?: string[];
  list?: string[];
}) {
  const paragraphs = body?.filter(Boolean) ?? [];
  const items = list?.filter(Boolean) ?? [];

  return (
    <div className="space-y-3">
      <p className="text-lg font-semibold text-[var(--foreground)] mt-8 first:mt-0">{title}</p>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-base leading-relaxed text-muted max-w-3xl" dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}
      {items.length > 0 ? (
        <ul className="space-y-1.5 pl-5 text-base leading-relaxed text-muted list-disc max-w-3xl">
          {items.map((item, index) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      ) : null}
    </div>
  );
}
