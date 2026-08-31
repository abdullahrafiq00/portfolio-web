"use client";

import { motion } from "motion/react";
import { ProjectCategory } from "@/types";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
  "Enterprise",
  "FinTech",
  "E-Commerce",
  "WordPress",
];

export function ProjectFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = active === filter;
        return (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            className="focus-ring relative rounded-full px-4 py-2 text-sm transition-colors"
          >
            {isActive && (
              <motion.span
                layoutId="filter-active"
                className="absolute inset-0 rounded-full bg-fg"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className={`relative ${isActive ? "text-bg" : "text-fg-muted hover:text-fg"}`}>
              {filter}
            </span>
          </button>
        );
      })}
    </div>
  );
}
