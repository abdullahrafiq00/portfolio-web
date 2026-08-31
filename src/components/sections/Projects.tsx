"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectModal } from "@/components/projects/ProjectModal";
import { ClientWork } from "@/components/projects/ClientWork";
import { clientProjects, featuredProjects } from "@/lib/data";
import { FeaturedProject } from "@/types";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<FeaturedProject | null>(null);

  const filteredFeatured = useMemo(() => {
    const list =
      filter === "All"
        ? featuredProjects
        : featuredProjects.filter((p) => p.categories.includes(filter as never));
    return [...list].sort((a, b) => a.priority - b.priority);
  }, [filter]);

  const filteredClient = useMemo(() => {
    if (filter === "All") return clientProjects;
    return clientProjects.filter((p) => p.categories.includes(filter as never));
  }, [filter]);

  return (
    <section id="projects" className="border-t border-border py-28 md:py-36">
      <Container>
        <Reveal>
          <SectionLabel index="03" label="Projects" />
        </Reveal>

        <div className="mt-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal delay={0.1}>
            <h2 className="font-display max-w-xl text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-4xl">
              Systems built to handle real complexity.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <ProjectFilter active={filter} onChange={setFilter} />
          </Reveal>
        </div>

        <div className="mt-8">
          {filteredFeatured.length === 0 ? (
            filteredClient.length === 0 && (
              <p className="py-16 text-center text-fg-subtle">No projects in this category.</p>
            )
          ) : (
            filteredFeatured.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={setActiveProject}
              />
            ))
          )}
        </div>

        <div
          className={
            filter === "All"
              ? "mt-24 border-t border-border pt-24"
              : filteredFeatured.length === 0
                ? "mt-8"
                : "mt-16 border-t border-border pt-16"
          }
        >
          <ClientWork projects={filteredClient} showHeading={filter === "All"} />
        </div>
      </Container>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
