"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center bg-white">
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-10 lg:px-12 py-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 font-mono">
              <span>2M+ Job Applications</span>
              <span>•</span>
              <span>50+ Enterprise Partners</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-[clamp(42px,6.2vw,82px)] leading-[1.05] font-semibold tracking-[-0.02em]">
                Hello, my name is Rahul.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-900">
                Associate Product Manager
              </p>
            </div>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-muted leading-7">
            <p>
              I come from a business background, starting with a BBA and early roles in customer-facing
              and sales teams. Working close to users and revenue shaped how I look at problems —
              understanding intent, friction, and what actually influences outcomes.
            </p>
            <p>
              I moved into product because I wanted to own problems end to end, not just results in
              isolation. I’m comfortable working in ambiguity, aligning different stakeholders, and
              validating impact through data before scaling decisions.
            </p>
            <p>
              Coming from a non-technical background, I’ve pushed myself to stay relevant by learning
              systems, tools, and GenAI workflows hands-on. I’ve built and shipped real products using
              AI-assisted development, owning product flows while staying focused on clarity, trade-offs,
              and user impact.
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-6 text-sm text-neutral-400 font-mono">
          Scroll ↓
        </div>
      </div>
    </section>
  );
}
