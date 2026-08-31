"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ClientProject } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

export function ClientWork({
  projects,
  showHeading = true,
}: {
  projects: ClientProject[];
  showHeading?: boolean;
}) {
  return (
    <div>
      {showHeading && (
        <Reveal>
          <div className="mb-2 font-mono text-xs tracking-[0.25em] text-fg-subtle uppercase">
            From WordPress to Full Stack
          </div>
          <h3 className="font-display mt-3 max-w-lg text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            Company Projects
          </h3>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-fg-muted">
            Real-world WordPress and WooCommerce sites built as a WordPress Developer
            across agency teams — before and alongside my move into full-stack
            development — proof of range beyond JavaScript.
          </p>
        </Reveal>
      )}

      <motion.div layout className={showHeading ? "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"}>
        <AnimatePresence mode="popLayout">
          {projects.map((project, i) => (
            <motion.a
              layout
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
              className="focus-ring group rounded-xl border border-border bg-surface/40 p-6 transition-colors hover:border-border-strong hover:bg-surface"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-display text-lg font-semibold text-fg">{project.name}</h4>
                <ArrowUpRight
                  size={16}
                  className="mt-1 shrink-0 text-fg-subtle transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </div>
              <p className="mt-2 text-[13.5px] leading-relaxed text-fg-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border-strong bg-bg-elevated px-2.5 py-0.5 font-mono text-[10px] text-fg-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
