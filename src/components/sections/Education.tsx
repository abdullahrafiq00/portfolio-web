"use client";

import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="border-t border-border py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionLabel index="07" label="Education" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display mt-8 max-w-xl text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
            Academic foundation.
          </h2>
        </Reveal>

        <div className="mt-14 max-w-2xl space-y-0 divide-y divide-border border-y border-border">
          {education.map((entry, i) => (
            <Reveal key={entry.id} delay={0.06 * i}>
              <div className="flex flex-col gap-2 py-7 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <div className="flex gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong bg-bg-elevated text-accent">
                    <GraduationCap size={16} />
                  </span>
                  <div>
                    <h3 className="font-display text-[17px] font-semibold text-fg">
                      {entry.institution}
                    </h3>
                    {entry.affiliation && (
                      <p className="mt-0.5 text-[13px] text-fg-subtle">{entry.affiliation}</p>
                    )}
                    <p className="mt-1.5 text-[14.5px] text-fg-muted">{entry.program}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 pl-13 sm:flex-col sm:items-end sm:gap-1 sm:pl-0">
                  <span className="font-mono text-xs text-fg-subtle">
                    {entry.start} — {entry.end}
                  </span>
                  <span className="rounded-full border border-border-strong bg-surface px-2.5 py-1 font-mono text-[11px] text-fg-muted">
                    {entry.status}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
