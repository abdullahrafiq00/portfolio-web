"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  const [openId, setOpenId] = useState<string>(experience[0].id);

  return (
    <section id="experience" className="border-t border-border py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionLabel index="02" label="Experience" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display mt-8 max-w-xl text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
            Five roles, one throughline: shipping production software.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {experience.map((entry, i) => {
            const isOpen = openId === entry.id;
            return (
              <Reveal key={entry.id} delay={0.05 * i}>
                <div className="group">
                  <button
                    onClick={() => setOpenId(isOpen ? "" : entry.id)}
                    className="focus-ring flex w-full flex-col gap-3 py-7 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-baseline gap-4 sm:w-[45%]">
                      <span className="font-mono text-xs text-fg-subtle">0{i + 1}</span>
                      <div>
                        <h3
                          className={
                            "font-display text-xl font-semibold transition-colors sm:text-2xl " +
                            (isOpen ? "text-accent-strong" : "text-fg group-hover:text-fg")
                          }
                        >
                          {entry.company}
                        </h3>
                        <p className="mt-1 text-sm text-fg-muted">
                          {entry.role} — {entry.mode}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-6 sm:w-[35%] sm:justify-end">
                      <span className="font-mono text-xs text-fg-subtle whitespace-nowrap">
                        {entry.start} — {entry.end}
                      </span>
                      {entry.current && (
                        <span className="hidden items-center gap-1.5 rounded-full border border-accent/30 bg-accent-dim px-2.5 py-1 font-mono text-[10px] text-accent-strong sm:inline-flex">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          Current
                        </span>
                      )}
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-strong text-fg-muted"
                      >
                        <ArrowUpRight size={14} />
                      </motion.span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 pb-8 sm:grid-cols-[45%_1fr] sm:gap-6">
                          <div className="flex flex-wrap content-start gap-2">
                            {entry.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full border border-border-strong bg-bg-elevated px-3 py-1 font-mono text-[11px] text-fg-muted"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <ul className="space-y-2.5">
                            {entry.responsibilities.map((r) => (
                              <li
                                key={r}
                                className="flex gap-3 text-[14.5px] leading-relaxed text-fg-muted"
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
