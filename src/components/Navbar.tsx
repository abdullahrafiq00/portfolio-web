"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { navLinks } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border bg-bg/75 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-[72px] items-center justify-between">
          <a
            href="#home"
            className="focus-ring font-display text-[15px] font-semibold tracking-tight text-fg"
          >
            <span className="text-accent">AR</span>
            <span className="hidden sm:inline"> · Abdullah Rafiq</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  "focus-ring relative rounded-full px-4 py-2 text-sm transition-colors",
                  active === link.href
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg"
                )}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-surface"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton
              href="#contact"
              className="focus-ring rounded-full border border-border-strong bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent hover:text-white"
            >
              Let&rsquo;s Talk
            </MagneticButton>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="focus-ring rounded-md p-2 text-fg md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[70] flex flex-col bg-bg/98 backdrop-blur-2xl md:hidden"
          >
            <Container className="flex h-[72px] items-center justify-between">
              <span className="font-display text-[15px] font-semibold text-fg">
                <span className="text-accent">AR</span> · Abdullah Rafiq
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="focus-ring rounded-md p-2 text-fg"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </Container>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="focus-ring border-b border-border py-4 font-display text-3xl font-medium text-fg"
                >
                  <span className="mr-3 font-mono text-sm text-accent">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <Container className="pb-10">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="focus-ring block rounded-full border border-border-strong bg-fg px-6 py-3.5 text-center text-sm font-medium text-bg"
              >
                Let&rsquo;s Talk
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
