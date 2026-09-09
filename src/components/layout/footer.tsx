import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { siteConfig } from "@/config/site";
import { footerNav, capabilitiesNav } from "@/config/navigation";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import { SkyMindLogo } from "@/components/layout/logo";

/**
 * Footer — premium technical footer.
 *
 * Server component (no client state needed). The year is rendered at
 * request time, which is fine for a server component.
 */
export function Footer() {
  const year = new Date().getFullYear();
  const socialEntries = Object.entries(siteConfig.social ?? {}) as [
    string,
    string,
  ][];

  return (
    <footer
      className="relative mt-auto border-t border-border bg-background/40"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* top accent line — primary gradient hairline */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
      />
      {/* subtle grid background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-[0.18] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />

      <Container className="relative">
        {/* Top section: brand + CTA */}
        <div className="grid grid-cols-1 gap-10 border-b border-border py-12 md:grid-cols-2 md:py-14">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label={`${siteConfig.name} — home`}
            >
              <SkyMindLogo className="size-8" />
              <span className="font-sans text-base font-semibold tracking-tight text-foreground">
                SkyMind
                <span className="ml-1.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Automation
                </span>
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            <p className="text-mono-label text-primary">
              <span className="mr-2 inline-block size-1.5 rounded-full bg-primary pulse-dot align-middle" />
              {siteConfig.tagline}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
            <p className="max-w-sm text-sm text-muted-foreground">
              Have an AI problem worth solving? We design, build, and secure AI
              systems for organizations ready to put AI to work.
            </p>
            <Button asChild size="lg" className="h-11 w-full sm:w-auto">
              <Link href="/contact">
                Start a project
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Middle: link columns */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-3 lg:grid-cols-4">
          {footerNav.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-3">
              <h3 className="text-mono-label text-muted-foreground">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                    >
                      {item.title}
                      {item.external ? (
                        <ExternalLink className="size-3 opacity-60" />
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Capabilities mini-list */}
          <nav aria-label="Capabilities" className="flex flex-col gap-3">
            <h3 className="text-mono-label text-muted-foreground">Capabilities</h3>
            <ul className="flex flex-col gap-2">
              {capabilitiesNav.map((cap) => (
                <li key={cap.href}>
                  <Link
                    href={cap.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                  >
                    {cap.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social row — only renders when real social entries exist */}
        {socialEntries.length > 0 ? (
          <div className="flex flex-wrap items-center gap-3 border-t border-border py-6">
            <span className="text-mono-label text-muted-foreground">Follow</span>
            {socialEntries.map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {key}
                <ExternalLink className="size-3 opacity-60" />
              </a>
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-2 border-t border-border py-6">
            <span className="text-mono-label text-muted-foreground/70">
              Social links coming soon
            </span>
          </div>
        )}

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-border py-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Terms
            </Link>
            <span
              className="inline-flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground"
              aria-label="System status: operational"
            >
              <span className="relative inline-flex size-1.5">
                <span className="absolute inline-flex size-full rounded-full bg-primary/60 pulse-dot" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              system status: operational
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
