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
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          Case Studies
        </p>
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
              className="hover-luminous group cursor-pointer rounded-xl border border-white/18 bg-[var(--card-bg)] p-6 transition-all duration-200 hover:border-white/24 hover:bg-[var(--card-bg-hover)]"
            >
              <div className="flex items-start justify-between gap-6">
                <p className="text-[12px] font-medium tracking-[0.12em] text-white/45 tabular-nums">
                  {indexLabel}
                </p>
                <span className="text-white/40 transition-colors group-hover:text-white/65">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M7 17L17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </span>
              </div>

              <h3 className="mt-4 mb-3 text-[18px] font-medium leading-tight text-white transition-opacity group-hover:opacity-80">
                {study.title}
              </h3>

              <p className="mt-4 max-w-3xl text-[14px] leading-relaxed text-[#888888]">
                {study.summary}
              </p>

              {study.tags && study.tags.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-[var(--background)] px-3 py-1 text-[12px] font-medium text-[#888888]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
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
            className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/12 bg-[var(--card-bg)] p-5 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 border-b border-white/10 bg-[var(--card-bg)] pb-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                    Case{" "}
                    {String(studies.indexOf(selected) + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold text-[var(--foreground)]">
                    {selected.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {selected.summary}
                  </p>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[var(--card-bg-hover)] text-muted transition-colors hover:border-white/25 hover:text-[var(--foreground)]"
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
      <p className="text-lg font-semibold text-[var(--foreground)] mt-8 first:mt-0">
        {title}
      </p>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-base leading-relaxed text-muted max-w-3xl"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
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
