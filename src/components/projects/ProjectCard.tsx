"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FeaturedProject } from "@/types";
import { getProjectVisual } from "@/components/projects/ProjectVisuals";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: FeaturedProject;
  index: number;
  onOpen: (project: FeaturedProject) => void;
}) {
  const reversed = index % 2 === 1;

  return (
    <Reveal y={30}>
      <motion.article layout className="group border-t border-border py-16 first:border-t-0 md:py-20">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className={project.image ? "aspect-[16/10] w-full" : "aspect-[4/3] w-full"}>
            {project.image ? (
              <div className="relative h-full w-full overflow-hidden rounded-xl border border-border bg-bg-elevated">
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  className="object-contain object-top"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            ) : (
              getProjectVisual(project.visual)
            )}
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3 font-mono text-xs text-fg-subtle">
              <span className="text-accent">0{index + 1}</span>
              <span className="h-px w-6 bg-border-strong" />
              <span className="uppercase tracking-[0.15em]">{project.category}</span>
            </div>

            <h3 className="font-display text-2xl font-semibold tracking-tight text-fg sm:text-[2rem]">
              {project.name}
            </h3>

            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-fg-muted">
              {project.description}
            </p>

            <p className="mt-4 max-w-lg border-l-2 border-accent/40 pl-4 text-[14px] italic leading-relaxed text-fg-muted/90">
              {project.highlight}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border-strong bg-bg-elevated px-3 py-1 font-mono text-[11px] text-fg-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2">
              {project.features.slice(0, 6).map((f) => (
                <li key={f} className="flex items-center gap-2 text-[13px] text-fg-muted">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span className="truncate">{f}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => onOpen(project)}
              className="focus-ring group/btn mt-8 inline-flex items-center gap-2 rounded-full border border-border-strong px-5 py-3 text-sm font-medium text-fg transition-colors hover:bg-surface"
            >
              View Case Study
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
            </button>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}
