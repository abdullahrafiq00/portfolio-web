"use client";

import { motion } from "motion/react";
import { Code2, Database, Layers, Server, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { skillCategories } from "@/lib/data";

const icons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Frontend: Code2,
  Backend: Server,
  Databases: Database,
  CMS: Layers,
  Tools: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionLabel index="04" label="Skills" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display mt-8 max-w-xl text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
            A technical toolkit built across the full stack.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, ci) => {
            const Icon = icons[category.label] ?? Code2;
            return (
              <Reveal key={category.label} delay={0.05 * ci}>
                <div className="h-full rounded-2xl border border-border bg-surface/40 p-7 transition-colors hover:border-border-strong">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong bg-bg-elevated text-accent">
                      <Icon size={16} />
                    </span>
                    <h3 className="font-display text-base font-semibold text-fg">
                      {category.label}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.04, duration: 0.4 }}
                        whileHover={{ y: -2 }}
                        className="cursor-default rounded-full border border-border-strong bg-bg-elevated px-3.5 py-1.5 font-mono text-[12px] text-fg-muted transition-colors hover:border-accent/40 hover:text-fg"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
