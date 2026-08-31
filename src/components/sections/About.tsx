"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { aboutTimeline } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-t border-border py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionLabel index="01" label="About" />
        </Reveal>

        <div className="mt-8 grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-display max-w-xl text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
                A developer who thinks beyond the interface.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 max-w-xl text-[16px] leading-relaxed text-fg-muted">
                <p>
                  I am a Full Stack Developer with experience building modern web
                  applications across frontend, backend, enterprise dashboards,
                  financial applications, e-commerce platforms and WordPress
                  ecosystems.
                </p>
                <p>
                  I enjoy working across the entire development lifecycle — from
                  designing interfaces and building APIs to authentication,
                  databases, integrations and deployment-ready architecture.
                </p>
                <p>
                  I started professionally with WordPress development and
                  progressed into modern JavaScript, MERN, Next.js and NestJS
                  development — a progression that continues to shape how I
                  approach every project, from foundational UX to scalable
                  system design.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-border bg-surface/40 p-7">
              <p className="mb-6 font-mono text-[11px] tracking-[0.2em] text-fg-subtle uppercase">
                Progression
              </p>
              <ol className="relative flex flex-col gap-0">
                {aboutTimeline.map((stage, i) => (
                  <li key={stage} className="relative flex gap-4 pb-7 last:pb-0">
                    {i < aboutTimeline.length - 1 && (
                      <span className="absolute left-[9px] top-6 h-full w-px bg-border-strong" />
                    )}
                    <span
                      className={
                        "relative z-10 mt-1 flex h-[19px] w-[19px] shrink-0 items-center justify-center rounded-full border " +
                        (i === aboutTimeline.length - 1
                          ? "border-accent bg-accent-dim"
                          : "border-border-strong bg-bg-elevated")
                      }
                    >
                      <span
                        className={
                          "h-[7px] w-[7px] rounded-full " +
                          (i === aboutTimeline.length - 1 ? "bg-accent" : "bg-fg-subtle")
                        }
                      />
                    </span>
                    <span
                      className={
                        "font-display pt-0.5 text-[15px] font-medium " +
                        (i === aboutTimeline.length - 1 ? "text-fg" : "text-fg-muted")
                      }
                    >
                      {stage}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
