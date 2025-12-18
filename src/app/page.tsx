"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import CaseStudiesList from "../components/CaseStudiesList";

const caseStudies = [
  {
    title:
      "Identifying and Solving Interview Readiness Drop-Offs in the Placement Funnel",
    summary:
      "Recovered placement conversions by removing scheduling friction in mock interview prep with an on-demand flow.",
    tags: ["Interview readiness", "AI mocks", "Conversion"],
    context:
      'Students moved through assessments, followed by mock interviews with Success Coaches, and then final company interviews. Mock interviews were scheduled through Calendly and used company- and role-specific context with structured feedback. <span className="highlight-yellow">At peak, ~1,200–1,500 students per month were reaching the mock interview stage</span>.',
    problem:
      'Over two months, <span className="highlight-yellow">placement numbers declined</span> even though assessment pass rates and interview demand remained stable. Funnel analysis showed a clear drop during mock interview scheduling and attendance, which later reflected in weaker final interview performance. <span className="highlight-yellow">~38% of eligible students did not schedule a mock</span>. <span className="highlight-yellow">~27% of scheduled mocks were no-shows</span>.',
    constraints: [
      "Maintain placement outcomes without increasing Success Coach headcount",
      "Keep preparation structured and role-specific, not generic",
      "Fit within the existing placement product with minimal build effort",
    ],
    options: [
      "Keep coach-led scheduled mocks (time friction persists)",
      "Adopt external prep tools (costly, no placement context)",
      "Design an on-demand, contextual AI mock interview within the placement journey",
    ],
    decision:
      "Introduce an embedded, on-demand AI mock interview flow to remove scheduling dependency while keeping feedback structured and contextual.",
    execution: [
      "Mapped the full funnel to isolate where the drop was happening",
      "Spoke with 50 students who cleared assessments but skipped mocks and failed final interviews to understand the real blocker",
      "Found that time and commitment, not motivation, were the primary issues",
      "Designed a flow where students could upload a resume, add a JD, receive role-specific and AI-generated questions, and take mocks anytime",
      "Integrated the flow into the placement product and iterated entry points and copy to emphasize flexibility",
    ],
    outcomes: [
      '<span className="highlight-yellow">Strong adoption of the on-demand mock flow after launch</span>',
      "Improved interview preparedness through consistent, unbiased feedback",
      '<span className="highlight-yellow">Placement conversions recovered after the dip</span>',
      "Positive feedback from students on flexibility and immediacy",
      '<span className="highlight-yellow">Final interview shortlisting rate improved by ~15–18% compared to the previous two months</span>',
      '<span className="highlight-yellow">Mock completion rate increased from ~62% (scheduled) to ~88% (on-demand)</span>',
    ],
    learnings: [
      "Time-based friction can quietly break high-intent funnels",
      "Flexibility often matters more than the depth of guidance alone",
      "AI works best when paired with clear intent and real context",
      "Combining funnel data with direct user conversations helped surface the real constraint",
    ],
  },
  {
    title:
      "Topin Tech: Building Trust First to Unlock Growth in an Assessment Platform",
    summary:
      'Trust-first GTM and product focus for an early-stage assessment platform, leading to <span className="highlight-yellow">adoption and revenue growth</span>.',
    tags: ["Trust", "GTM", "Proctoring"],
    context:
      "Topin Tech was an early-stage assessment platform trying to figure out the right product direction and GTM. There was clear interest from prospects, but conversions were slow and inconsistent, making it hard to understand what would actually drive adoption and revenue.",
    problem:
      "Feature requests varied from customer to customer, and sales conversations often stalled midway. After spending time with users, it became clear that the real issue wasn't missing test types — it was a lack of confidence in the credibility of the assessments.",
    constraints: [
      "We were working with a small, early-stage team, so focus was critical.",
      "Improving credibility was necessary to unlock sales.",
      "GTM messaging didn't clearly communicate why the product could be trusted.",
    ],
    options: [
      "Ship more test types quickly (surface-level, wouldn't fix trust)",
      "Discount pricing to close deals (hurts positioning)",
      "Lead with trust: double down on proctoring, credibility signals, and GTM anchored on integrity",
    ],
    decision:
      "We decided to take a trust-first approach. Instead of expanding test types, we focused on strengthening proctoring, adding clear credibility signals, and repositioning GTM around assessment integrity before scaling features.",
    execution: [
      "I spoke with existing customers, active prospects, and evaluators to understand how they judged assessment platforms and where trust broke down.",
      "These conversations consistently pointed to proctoring and authenticity as the main adoption blockers.",
      "I shared these insights with sales, leadership, and engineering to realign the roadmap around trust as the primary growth lever.",
      "Product efforts focused on improving proctoring and making credibility visible, while GTM messaging was updated to clearly highlight integrity and reliability.",
    ],
    outcomes: [
      '<span className="highlight-yellow">50+ new clients onboarded within 7 months</span>',
      '<span className="highlight-yellow">₹40+ Lakhs in revenue generated</span>',
      "Built a strong foundation to later expand test types and scale GTM with confidence",
    ],
    learnings: [
      "In assessment products, trust matters more than feature breadth.",
      "User conversations are essential for shaping both roadmap and GTM.",
      "Strong foundations make future features more valuable and easier to sell.",
    ],
  },
  {
    title:
      "FirstJob (0→1): Productising a Manual Placement Workflow into a Scalable Hiring Platform",
    summary:
      '<span className="highlight-yellow">0→1 MVP</span> that turned a manual placement process into a self-serve, automated flow to <span className="highlight-yellow">validate demand and reduce ops load</span>.',
    tags: ["0→1", "Automation", "Self-serve"],
    context:
      "The long-term goal was to build a central placement hub for fresher hiring, where students move through assessments, mock interviews, job applications, and company interviews in one place. At the time, the placements team was managing this entire journey manually, end to end.",
    problem:
      "As placement volumes increased, operational effort grew at the same pace. Shortlisting students, creating assessments, sending links, following up, tracking completion, and scheduling mock interviews were all done manually. This made the process slow, error-prone, and hard to scale.",
    constraints: [
      "There was no dedicated engineering or design bandwidth.",
      "We needed to validate the model quickly with real users.",
      "The solution had to work with the existing assessment platform.",
      "Speed and learning were more important than polish.",
    ],
    options: [
      "Keep manual ops (not scalable; high effort)",
      "Add operations headcount (costly; still manual)",
      "Productise the journey into a self-serve, automated flow using existing tools/APIs",
    ],
    decision:
      "Instead of optimising the manual process, we decided to productise the placement journey. The goal was to build a single, on-demand, automated flow that could validate demand and engagement without adding new headcount.",
    execution: [
      "I mapped the ideal end-to-end flow: student login, resume upload, detail parsing, automatic assessment assignment, automated invites and reminders, completion tracking, and automatic progression to the mock interview stage.",
      "We used existing assessment APIs and Supabase to manage users and state, with automation handling notifications and progression. AI-assisted development helped move quickly without getting blocked on resources.",
      "The MVP was launched under firstjob.tech on Vercel, with a focus on flow correctness, instrumentation, and fast iteration rather than visual perfection.",
    ],
    outcomes: [
      '<span className="highlight-yellow">In the first month, the platform reached 8,000 students</span>.',
      '<span className="highlight-yellow">3,000 students attempted assessments, and 1,800 completed interviews</span>.',
      '<span className="highlight-yellow">Manual operational effort reduced significantly</span> as invites, reminders, and progression were automated. The data also helped validate real demand and engagement before making deeper investments.',
    ],
    learnings: [
      "Productising manual workflows makes bottlenecks and constraints visible very quickly.",
      "Automating reminders and stage progression delivered the largest operational lift.",
      "With tight scope and clear intent, 0→1 execution is possible using existing tools.",
      "Self-serve flows reduce ops load, but only work well when expectations and next steps are clearly set.",
    ],
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#how-i-work", label: "How I Work" },
  { href: "#tools", label: "Tools" },
];

const aboutParagraphs = [
  'I come from a business background. I started with a BBA and early roles in customer-facing and sales teams, where I spent a lot of time <span className="highlight-yellow">close to users and revenue</span>. That experience shaped how I look at problems — understanding intent, friction, and what actually influences outcomes.',
  'I moved into product because I wanted to <span className="highlight-yellow">own problems end to end</span>, not just results in isolation. As an Associate Product Manager, I\'m comfortable working in ambiguity, aligning different stakeholders, and <span className="highlight-yellow">using data to validate whether something is working before scaling it</span>.',
  "Coming from a non-technical background, I've pushed myself to stay relevant by learning systems, tools, and GenAI workflows hands-on. <span className=\"highlight-yellow\">I've built and shipped real products using AI-assisted development</span>, owning product flows end to end while staying focused on clarity, trade-offs, and user impact.",
  'I care deeply about understanding the problem and the "why" before jumping to solutions. For me, good products come from clear thinking, <span className="highlight-yellow">close collaboration with engineers and designers</span>, and making progress in small, measurable steps.',
];

const howIWork = [
  {
    title: "Start with the real problem and the why",
    detail:
      'I slow down at the start: <span className="highlight-yellow">mapping the journey, talking to users, and making the success criteria explicit</span>. If the why is weak, the solution rarely holds.',
  },
  {
    title: "Work in the open with the team",
    detail:
      '<span className="highlight-yellow">I involve engineers, designers, and stakeholders early</span>. Sharing scrappy ideas and tradeoffs upfront avoids surprises later and keeps decisions grounded in feasibility.',
  },
  {
    title: "Prioritize by outcomes and constraints",
    detail:
      "I'm explicit about constraints, tradeoffs, and what we're choosing not to do. That clarity keeps us focused on <span className=\"highlight-yellow\">what will move metrics rather than what simply looks impressive</span>.",
  },
  {
    title: "Measure simply and adjust fast",
    detail:
      'I prefer a few signals over dashboards full of noise. <span className="highlight-yellow">Ship, watch the metrics that matter, talk to users again, and adjust without ego</span>.',
  },
  {
    title: "Use automation and AI to remove toil",
    detail:
      'Automation is only useful if it frees the team to solve harder problems. <span className="highlight-yellow">I apply AI and tooling where it reduces repetitive work</span>, not as a gimmick.',
  },
];

const toolGroups = [
  {
    title: "Product & discovery",
    items: [
      {
        name: "Notion",
        detail: "PRDs, decision docs, async comms",
        logo: "/logos/notion.png",
      },
      {
        name: "Miro",
        detail: "Journeys, workshops, facilitation",
        logo: "/logos/miro.png",
      },
      {
        name: "Figma",
        detail: "User flows, quick wires, specs",
        logo: "/logos/figma.png",
      },
    ],
  },
  {
    title: "Delivery & tracking",
    items: [
      {
        name: "ClickUp / Jira",
        detail: "Roadmaps, execution clarity",
        logo: "/logos/clickup.svg",
      },
      { name: "Weekly docs", detail: "Alignment, risks, next steps" },
    ],
  },
  {
    title: "Analytics & instrumentation",
    items: [
      {
        name: "Mixpanel",
        detail: "Funnels, cohorts, retention",
        logo: "/logos/mixpanel.png",
      },
      {
        name: "Google Analytics",
        detail: "Acquisition and behavior checks",
        logo: "/logos/ga.png",
      },
    ],
  },
  {
    title: "Automation & AI",
    items: [
      {
        name: "Make.com",
        detail: "Lifecycle and ops automation",
        logo: "/logos/make.png",
      },
      { name: "HubSpot", detail: "CRM + triggers", logo: "/logos/hubspot.png" },
      {
        name: "OpenAI",
        detail: "Structured outputs, summarization",
        logo: "/logos/openai.png",
      },
      {
        name: "Cursor",
        detail: "Faster build & iteration",
        logo: "/logos/cursor.png",
      },
    ],
  },
  {
    title: "Technical support",
    items: [
      {
        name: "Supabase",
        detail: "Auth + data for prototypes",
        logo: "/logos/supabase.png",
      },
      {
        name: "Retool",
        detail: "Internal surfaces",
        logo: "/logos/retool.png",
      },
      {
        name: "Git + Vercel",
        detail: "Shipping and review",
        logo: "/vercel.svg",
      },
      { name: "Postman", detail: "APIs & testing", logo: "/logos/postman.png" },
    ],
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("");
  const pillRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  useEffect(() => {
    if (!activeSection) return;
    const key = activeSection.replace("#", "");
    const node = pillRefs.current[key];
    if (node) {
      node.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeSection]);

  useEffect(() => {
    const sections = navLinks.map((link) => link.href.substring(1)); // Remove # from href

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -45% 0px",
      threshold: 0.05,
    };

    const updateActiveSection = () => {
      let activeId = sections[0];
      let minDistance = Infinity;

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - window.innerHeight * 0.35);
          if (distance < minDistance && rect.top < window.innerHeight * 0.9) {
            minDistance = distance;
            activeId = sectionId;
          }
        }
      });

      setActiveSection(`#${activeId}`);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Get all intersecting entries and find the one with highest intersection ratio
      const intersectingEntries = entries.filter(
        (entry) => entry.isIntersecting,
      );

      if (intersectingEntries.length > 0) {
        // Sort by intersection ratio (highest first), then by position
        intersectingEntries.sort((a, b) => {
          if (b.intersectionRatio !== a.intersectionRatio) {
            return b.intersectionRatio - a.intersectionRatio;
          }
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });

        setActiveSection(`#${intersectingEntries[0].target.id}`);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    // Wait for DOM to be ready
    const timeoutId = setTimeout(() => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.observe(element);
        }
      });

      // Set initial active section
      updateActiveSection();
    }, 100);

    const onScroll = () => {
      updateActiveSection();
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", onScroll);
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-14 pb-14">
        <div className="lg:hidden sticky top-0 z-20 mb-6 bg-[var(--background)]/92 backdrop-blur px-1 py-3 border-b border-white/10">
          <div className="flex gap-2 overflow-x-auto no-scrollbar px-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  ref={(node) => {
                    pillRefs.current[link.href.substring(1)] = node;
                  }}
                  href={link.href}
                  className={`whitespace-nowrap rounded-full border px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "border-white/30 bg-white/5 text-[var(--foreground)]"
                      : "border-white/10 bg-white/0 text-muted hover:border-white/20 hover:text-[var(--foreground)]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
          <aside className="lg:sticky lg:top-6 lg:h-[calc(100vh-24px)]">
            <div className="flex h-full items-start pt-0">
              <div className="flex flex-col gap-12">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"
                      aria-hidden
                    />
                    <span className="text-[12px] font-medium text-white/65 tracking-[0.14em]">
                      AVAILABLE FOR OPPORTUNITIES
                    </span>
                  </div>
                  <p className="text-[36px] font-semibold leading-[1.15] text-[var(--foreground)]">
                    Hello, I'm Rahul
                  </p>
                  <p className="text-[18px] font-medium text-muted leading-snug">
                    Associate Product Manager
                  </p>
                </div>

                <nav
                  aria-label="Page sections"
                  className="text-sm text-muted hidden lg:block"
                >
                  <ul className="space-y-0">
                    {navLinks.map((link, idx) => {
                      const isActive = activeSection === link.href;
                      const number = String(idx + 1).padStart(2, "0");
                      return (
                        <li key={link.href}>
                          <a
                            href={link.href}
                            className={`hover-luminous group flex items-center gap-6 py-5 transition-colors cursor-pointer ${
                              isActive
                                ? "text-[var(--foreground)] active-luminous"
                                : "text-muted hover:text-[var(--foreground)]"
                            }`}
                          >
                            <span
                              className={`w-8 text-left text-sm tracking-wide tabular-nums ${
                                isActive
                                  ? "text-[var(--foreground)]"
                                  : "text-white/45 group-hover:text-white/70"
                              }`}
                            >
                              {number}
                            </span>

                            <span
                              aria-hidden
                              className={`h-px w-16 ${
                                isActive
                                  ? "bg-[var(--foreground)]/80"
                                  : "bg-white/20 group-hover:bg-white/35"
                              }`}
                            />

                            <span
                              className={`text-base font-medium ${
                                isActive
                                  ? "text-[var(--foreground)]"
                                  : "text-white/55 group-hover:text-[var(--foreground)]"
                              }`}
                            >
                              {link.label}
                            </span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                    Contact
                  </p>
                  <div className="space-y-2 text-sm leading-relaxed text-muted">
                    <p>I'm open to APM / PM-I roles.</p>
                    <p>
                      Email:{" "}
                      <a
                        className="text-[var(--foreground)] underline decoration-gray-500 underline-offset-2 hover:text-[var(--accent)] transition-colors"
                        href="mailto:yrahul221199@gmail.com"
                      >
                        yrahul221199@gmail.com
                      </a>
                    </p>
                    <p>
                      LinkedIn:{" "}
                      <a
                        className="text-[var(--foreground)] underline decoration-gray-500 underline-offset-2 hover:text-[var(--accent)] transition-colors"
                        href="https://linkedin.com/in/rahul-22-patil"
                        target="_blank"
                        rel="noreferrer"
                      >
                        linkedin.com/in/rahul-22-patil
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-16 lg:max-w-3xl text-base leading-relaxed text-muted">
            <section
              id="about"
              className="scroll-mt-24 space-y-10 animate-fade-up-soft"
            >
              <div className="space-y-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/60">
                  ABOUT
                </p>
                <h1 className="text-[36px] font-semibold leading-[1.08] text-[var(--foreground)]">
                  Building products that move metrics
                </h1>

                <div className="grid grid-cols-3 gap-6 pt-2 max-w-2xl">
                  <div className="text-center">
                    <p className="text-[36px] leading-none font-semibold text-[var(--foreground)]">
                      2M+
                    </p>
                    <p className="mt-2 text-[14px] text-white/55">
                      Job Applications
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[36px] leading-none font-semibold text-[var(--foreground)]">
                      50+
                    </p>
                    <p className="mt-2 text-[14px] text-white/55">
                      Enterprise Partners
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-[36px] leading-none font-semibold text-[var(--foreground)]">
                      8K+
                    </p>
                    <p className="mt-2 text-[14px] text-white/55">
                      Students Reached
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 max-w-2xl space-y-5 rounded-2xl border border-white/12 bg-[var(--card-bg)] p-7 text-[var(--foreground)] transition-colors hover:bg-[var(--card-bg-hover)]">
                {aboutParagraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                ))}
              </div>
            </section>

            <CaseStudiesList studies={caseStudies} />

            <section
              id="how-i-work"
              className="scroll-mt-24 space-y-8 animate-fade-up-soft"
            >
              <header className="space-y-2 border-b border-white/10 pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                  How I Work
                </p>
                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-[var(--foreground)]">
                  I prefer clear systems over flashy solutions
                </h2>
                <p className="text-base text-muted max-w-2xl">
                  First-person notes on how I approach problems, teams, and
                  decisions.
                </p>
              </header>
              <div className="divide-y divide-white/10">
                {howIWork.map((item, idx) => {
                  const number = String(idx + 1).padStart(2, "0");
                  return (
                    <div
                      key={item.title}
                      className="flex gap-8 py-6"
                    >
                      <p className="w-10 text-[12px] font-medium tracking-[0.12em] text-white/45 tabular-nums">
                        {number}
                      </p>
                      <div className="space-y-2">
                        <p className="text-[18px] font-medium leading-tight text-white">
                          {item.title}
                        </p>
                        <p
                          className="max-w-3xl text-[14px] leading-relaxed text-[#888888]"
                          dangerouslySetInnerHTML={{ __html: item.detail }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section
              id="tools"
              className="scroll-mt-24 space-y-6 animate-fade-up-soft"
            >
              <header className="space-y-2">
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/60">
                  TOOLS
                </p>
                <h2 className="text-[36px] font-medium leading-tight text-white">
                  My toolkit
                </h2>
                <p className="text-[14px] text-[#888888]">
                  What I use and why it matters
                </p>
              </header>

              <div className="space-y-10 pt-2">
                {toolGroups.map((group) => (
                  <div key={group.title} className="space-y-4">
                    <p className="text-[14px] font-medium text-white/45">
                      {group.title}
                    </p>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {group.items.map((item) => (
                        <div
                          key={item.name}
                          className="hover-luminous flex items-center gap-4 rounded-xl border border-white/10 bg-[var(--card-bg)] px-4 py-4 transition-all duration-200 hover:border-white/16 hover:bg-[var(--card-bg-hover)]"
                        >
                          {item.logo ? (
                            <div
                              className="box-border flex h-[32px] w-[32px] flex-none shrink-0 items-center justify-center overflow-hidden rounded"
                              style={{
                                padding: "6px",
                                background:
                                  "rgba(255,255,255,0.05) padding-box, rgba(255,255,255,0.15) content-box",
                              }}
                            >
                              <Image
                                src={item.logo}
                                alt={`${item.name} logo`}
                                width={24}
                                height={24}
                                className="h-[24px] w-[24px] object-contain"
                              />
                            </div>
                          ) : (
                            <div
                              className="box-border flex h-[32px] w-[32px] flex-none shrink-0 items-center justify-center overflow-hidden rounded text-[11px] font-semibold text-white/40"
                              style={{
                                padding: "6px",
                                background:
                                  "rgba(255,255,255,0.05) padding-box, rgba(255,255,255,0.15) content-box",
                              }}
                            >
                              —
                            </div>
                          )}

                          <div className="min-w-0">
                            <p className="truncate text-[16px] font-medium leading-snug text-white">
                              {item.name}
                            </p>
                            <p className="truncate text-[14px] leading-snug text-[#888888]">
                              {item.detail}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
