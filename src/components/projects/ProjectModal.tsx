"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { FeaturedProject } from "@/types";
import { getProjectVisual } from "@/components/projects/ProjectVisuals";

export function ProjectModal({
  project,
  onClose,
}: {
  project: FeaturedProject | null;
  onClose: () => void;
}) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (project) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-bg/90 px-4 py-8 backdrop-blur-md sm:px-6 sm:py-16"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} case study`}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-2xl border border-border-strong bg-bg-elevated shadow-2xl"
          >
            <div className="flex items-center justify-between rounded-t-2xl border-b border-border bg-bg-elevated px-6 py-4 sm:px-8">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] text-accent uppercase">
                  {project.category}
                </p>
                <h3 className="font-display mt-1 text-xl font-semibold text-fg sm:text-2xl">
                  {project.name}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="focus-ring flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong text-fg-muted transition-colors hover:bg-surface hover:text-fg"
                aria-label="Close case study"
              >
                <X size={16} />
              </button>
            </div>

            <div className="px-6 py-7 sm:px-8 sm:py-8">
              <div className={project.image ? "mb-8 aspect-[16/10] w-full" : "mb-8 aspect-[16/9] w-full"}>
                {project.image ? (
                  <div className="relative h-full w-full overflow-hidden rounded-xl border border-border bg-bg-elevated">
                    <Image
                      src={project.image}
                      alt={`${project.name} screenshot`}
                      fill
                      className="object-contain object-top"
                      sizes="(min-width: 768px) 768px, 100vw"
                    />
                  </div>
                ) : (
                  getProjectVisual(project.visual)
                )}
              </div>

              <div className="mb-8 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border-strong bg-surface px-3 py-1 font-mono text-[11px] text-fg-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <CaseStudyBlock title="Overview" text={project.caseStudy.overview} />
                <CaseStudyBlock title="Problem" text={project.caseStudy.problem} />
                <CaseStudyBlock title="Solution" text={project.caseStudy.solution} />
                <CaseStudyBlock title="My Role" text={project.caseStudy.role} />
              </div>

              <div className="mt-8">
                <p className="mb-3 font-mono text-[11px] tracking-[0.2em] text-fg-subtle uppercase">
                  Architecture
                </p>
                <ul className="space-y-2">
                  {project.caseStudy.architecture.map((a) => (
                    <li key={a} className="flex gap-3 text-[14px] leading-relaxed text-fg-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <p className="mb-3 font-mono text-[11px] tracking-[0.2em] text-fg-subtle uppercase">
                  Key Features
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-[12px] text-fg-muted"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
                <CaseStudyBlock title="Challenges" text={project.caseStudy.challenges} />
                <CaseStudyBlock title="Outcome" text={project.caseStudy.outcome} />
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
                >
                  Visit Project
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CaseStudyBlock({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] tracking-[0.2em] text-fg-subtle uppercase">{title}</p>
      <p className="text-[14.5px] leading-relaxed text-fg-muted">{text}</p>
    </div>
  );
}
