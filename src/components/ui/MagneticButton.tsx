"use client";

import { motion } from "motion/react";
import { ReactNode, MouseEvent } from "react";
import clsx from "clsx";

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  as = "a",
  type,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  strength?: number;
  as?: "a" | "button";
  type?: "button" | "submit";
}) {
  const Component = motion[as === "a" ? "a" : "button"];

  return (
    <Component
      href={as === "a" ? href : undefined}
      type={as === "button" ? (type ?? "button") : undefined}
      onClick={onClick as ((e: MouseEvent<HTMLElement>) => void) | undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={clsx(
        "focus-ring inline-flex items-center justify-center gap-2 whitespace-nowrap",
        className
      )}
    >
      {children}
    </Component>
  );
}
