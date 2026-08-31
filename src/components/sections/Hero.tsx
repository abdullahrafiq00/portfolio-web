"use client";

import { motion, type Variants } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { AvailabilityBadge } from "@/components/ui/AvailabilityBadge";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroVisual } from "@/components/HeroVisual";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_40%,transparent_100%)]" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="mb-7">
              <AvailabilityBadge />
            </motion.div>

            <motion.p
              variants={item}
              className="mb-5 font-mono text-xs tracking-[0.3em] text-accent uppercase"
            >
              Full Stack Developer
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-balance text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-fg sm:text-6xl lg:text-[3.6rem]"
            >
              I build digital products that are engineered to scale.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-balance text-[17px] leading-relaxed text-fg-muted"
            >
              Full Stack Developer focused on React, Next.js, Node.js and NestJS —
              building scalable applications, enterprise dashboards, APIs and modern
              digital experiences.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton
                href="#projects"
                className="group rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(110,123,242,0.4)] transition-colors hover:bg-accent-strong"
              >
                View My Work
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="rounded-full border border-border-strong px-6 py-3.5 text-sm font-medium text-fg transition-colors hover:bg-surface"
              >
                Let&rsquo;s Talk
              </MagneticButton>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-fg-subtle"
            >
              {["React", "Next.js", "Node.js", "NestJS", "TypeScript"].map((t) => (
                <span key={t}>{t}</span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="mt-20 hidden justify-center md:flex"
      >
        <a
          href="#about"
          className="focus-ring flex flex-col items-center gap-2 text-fg-subtle transition-colors hover:text-fg-muted"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.span>
        </a>
      </motion.div>
    </section>
  );
}
