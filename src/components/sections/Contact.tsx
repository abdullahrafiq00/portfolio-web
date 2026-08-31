"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { personal } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // clipboard unavailable — no-op
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-28 md:py-36">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]" />

      <Container>
        <Reveal>
          <SectionLabel index="08" label="Contact" />
        </Reveal>

        <div className="mt-8 flex flex-col items-start">
          <Reveal delay={0.1}>
            <h2 className="font-display max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight text-fg sm:text-5xl">
              Have a product in mind? Let&rsquo;s build it.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-balance text-[16px] leading-relaxed text-fg-muted">
              Whether you&rsquo;re building a new product, modernizing an existing
              application, or looking for a developer who can work across frontend
              and backend — I&rsquo;d love to hear about it.
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticButton
                href={`mailto:${personal.email}`}
                className="group rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-accent-strong"
              >
                Start a Conversation
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </MagneticButton>
              <MagneticButton
                href={personal.linkedin}
                className="rounded-full border border-border-strong px-6 py-3.5 text-sm font-medium text-fg transition-colors hover:bg-surface"
              >
                View LinkedIn
                <LinkedinIcon size={15} />
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.28} className="mt-16 w-full">
            <div className="grid gap-4 border-t border-border pt-10 sm:grid-cols-3">
              <button
                onClick={copyEmail}
                className="focus-ring group flex items-center justify-between gap-3 rounded-xl border border-border bg-surface/40 px-5 py-4 text-left transition-colors hover:border-border-strong"
              >
                <span className="flex items-center gap-3">
                  <Mail size={16} className="text-accent" />
                  <span className="text-[13.5px] text-fg-muted">{personal.email}</span>
                </span>
                <span className="relative h-4 w-4 shrink-0 text-fg-subtle">
                  <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                      <motion.span
                        key="check"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="absolute inset-0 text-emerald-400"
                      >
                        <Check size={16} />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="copy"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="absolute inset-0 group-hover:text-fg"
                      >
                        <Copy size={15} />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </button>

              <a
                href={`tel:${personal.phone}`}
                className="focus-ring flex items-center gap-3 rounded-xl border border-border bg-surface/40 px-5 py-4 transition-colors hover:border-border-strong"
              >
                <Phone size={16} className="text-accent" />
                <span className="text-[13.5px] text-fg-muted">{personal.phone}</span>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-3 rounded-xl border border-border bg-surface/40 px-5 py-4 transition-colors hover:border-border-strong"
              >
                <LinkedinIcon size={16} className="text-accent" />
                <span className="text-[13.5px] text-fg-muted">{personal.linkedinLabel}</span>
              </a>
            </div>
          </Reveal>

          <AnimatePresence>
            {copied && (
              <motion.div
                initial={{ opacity: 0, y: 12, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: 12, x: "-50%" }}
                transition={{ duration: 0.25 }}
                className="fixed bottom-8 left-1/2 z-[100] flex items-center gap-2 rounded-full border border-border-strong bg-bg-elevated px-4 py-2.5 text-sm text-fg shadow-2xl"
                role="status"
              >
                <Check size={14} className="text-emerald-400" />
                Email copied to clipboard
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
