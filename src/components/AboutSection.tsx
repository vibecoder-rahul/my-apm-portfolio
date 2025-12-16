"use client";

import Reveal from "./Reveal";

export default function AboutSection() {
  return (
    <section id="about" className="space-y-6">
      <Reveal baseDelay={0} step={80}>
        <div className="flex flex-col gap-2 max-w-4xl">
          <span className="text-sm font-semibold uppercase tracking-[0.08em] text-[#2563eb]">
            About
          </span>
          <h2 className="text-3xl font-semibold leading-tight text-slate-900">
            Professional Overview
          </h2>
        </div>
      </Reveal>

      <Reveal baseDelay={120} step={80}>
        <div className="space-y-4 text-lg text-muted max-w-4xl">
          <p>
            I come from a business background, starting with a BBA and early roles in customer-facing
            and sales teams. Working close to users and revenue shaped how I look at problems —
            understanding intent, friction, and what actually influences outcomes.
          </p>
          <p>
            I moved into product because I wanted to own problems end to end, not just results in
            isolation. As an Associate Product Manager, I’m comfortable working in ambiguity, aligning
            different stakeholders, and validating impact through data before scaling decisions.
          </p>
          <p>
            Coming from a non-technical background, I’ve pushed myself to stay relevant by learning
            systems, tools, and GenAI workflows hands-on. I’ve built and shipped real products using
            AI-assisted development, owning product flows while staying focused on clarity,
            trade-offs, and user impact.
          </p>
          <p>
            I’m driven by first-principles thinking, continuous learning, and building products that
            lead to clear, product-led outcomes.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

