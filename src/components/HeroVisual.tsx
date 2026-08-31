"use client";

import { motion } from "motion/react";
import { architectureFlow } from "@/lib/data";

const codeLines = [
  { n: 1, t: "export async function", a: "getServerSideProps" },
  { n: 2, t: "  const session = await", a: "auth.verify(req)" },
  { n: 3, t: "  const data = await", a: "api.fetch('/users')" },
  { n: 4, t: "  return", a: "{ props: { data } }" },
];

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface/40 backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-fg-subtle/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg-subtle/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg-subtle/30" />
          </div>
          <span className="font-mono text-[11px] text-fg-subtle">architecture.tsx</span>
        </div>

        <div className="grid gap-0 sm:grid-cols-2">
          <div className="flex flex-col items-stretch gap-0 border-b border-border p-6 sm:border-b-0 sm:border-r">
            {architectureFlow.map((node, i) => (
              <div key={node} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full rounded-lg border border-border-strong bg-bg-elevated px-4 py-2.5 text-center font-mono text-[12px] text-fg"
                >
                  {node}
                </motion.div>
                {i < architectureFlow.length - 1 && (
                  <div className="relative h-6 w-px overflow-hidden bg-border-strong">
                    <motion.span
                      className="absolute left-0 top-0 h-2 w-px bg-accent"
                      animate={{ y: [0, 24] }}
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        delay: i * 0.25,
                        ease: "linear",
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center gap-1.5 p-6 font-mono text-[12px] leading-relaxed">
            {codeLines.map((line, i) => (
              <motion.div
                key={line.n}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                className="flex gap-3"
              >
                <span className="select-none text-fg-subtle/50">{line.n}</span>
                <span className="text-fg-muted">
                  {line.t} <span className="text-accent-strong">{line.a}</span>
                </span>
              </motion.div>
            ))}
            <motion.span
              className="mt-1 h-4 w-2 bg-accent/70"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-border px-4 py-2.5 font-mono text-[11px] text-fg-subtle">
          <span>build: passing</span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            typescript
          </span>
        </div>
      </div>
    </div>
  );
}
