"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { careerJourney } from "@/lib/data";

export function CareerJourney() {
  return (
    <section className="relative overflow-hidden border-t border-border py-28 md:py-36">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

      <Container>
        <Reveal>
          <SectionLabel index="06" label="Career Journey" />
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display mt-8 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
            From websites to scalable applications.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-[15px] hidden h-px bg-border-strong md:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-[15px] hidden h-px w-full origin-left bg-accent md:block"
          />

          <div className="absolute bottom-[15px] left-[15px] top-[15px] w-px bg-border-strong md:hidden" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[15px] left-[15px] top-[15px] w-px origin-top bg-accent md:hidden"
          />

          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {careerJourney.map((step, i) => (
              <Reveal key={step.year} delay={0.12 * i}>
                <div className="relative flex gap-4 md:flex-col md:gap-0">
                  <span className="relative z-10 flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full border border-border-strong bg-bg-elevated md:mb-6">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        i === careerJourney.length - 1 ? "bg-accent" : "bg-fg-subtle"
                      }`}
                    />
                  </span>
                  <div>
                    <p className="font-mono text-xs text-accent">{step.year}</p>
                    <p className="font-display mt-1.5 text-lg font-semibold text-fg">
                      {step.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
