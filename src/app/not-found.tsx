"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_20%,transparent_100%)]" />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="font-mono text-xs tracking-[0.3em] text-accent uppercase"
      >
        Error 404
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display mt-4 text-[6rem] font-semibold leading-none tracking-tight text-fg sm:text-[8rem]"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="mt-4 max-w-sm text-[15px] leading-relaxed text-fg-muted"
      >
        Looks like this route doesn&rsquo;t exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href="/"
          className="focus-ring group mt-10 inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3.5 text-sm font-medium text-fg transition-colors hover:bg-surface"
        >
          <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-0.5" />
          Back Home
        </Link>
      </motion.div>
    </main>
  );
}
