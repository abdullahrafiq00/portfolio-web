import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { navLinks, personal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-fg">
              <span className="text-accent">AR</span> Abdullah Rafiq
            </p>
            <p className="mt-1.5 text-sm text-fg-subtle">Full Stack Developer</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-fg-muted transition-colors hover:border-accent/40 hover:text-fg"
            >
              <LinkedinIcon size={15} />
            </a>
            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-fg-muted transition-colors hover:border-accent/40 hover:text-fg"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-fg-subtle">
          <p>© 2026 Abdullah Rafiq. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
