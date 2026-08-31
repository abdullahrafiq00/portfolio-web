"use client";

import { Blocks, KeyRound, Layers3, Sparkles, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { engineeringPrinciples } from "@/lib/data";

const icons = [Layers3, Blocks, KeyRound, Zap, Sparkles];

export function HowIBuild() {
  return (
    <section className="border-t border-border py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionLabel index="05" label="Engineering" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display mt-8 max-w-xl text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
            How I build.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {engineeringPrinciples.map((principle, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={principle.title} delay={0.06 * i}>
                <div className="group h-full rounded-2xl border border-border bg-surface/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-surface">
                  <span className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-border-strong bg-bg-elevated text-accent transition-colors group-hover:bg-accent-dim">
                    <Icon size={17} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-fg">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-fg-muted">
                    {principle.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
