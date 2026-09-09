import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail, ScrollText } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How SkyMind Automation collects, stores, and uses information from contact form submissions, the rights you have over your data, and the security practices we follow on this website.",
  alternates: { canonical: "/privacy" },
};

const lastUpdated = "Last updated: September 2025";

const toc: { id: string; label: string }[] = [
  { id: "what-we-collect", label: "What we collect" },
  { id: "why", label: "Why we collect it" },
  { id: "how-we-store", label: "How we store it" },
  { id: "your-rights", label: "Your rights" },
  { id: "cookies", label: "Cookies" },
  { id: "security", label: "Security" },
  { id: "third-parties", label: "Third parties" },
  { id: "contact", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <Section withGrid className="pt-28 sm:pt-32 lg:pt-40">
          <Container className="max-w-4xl">
            <MonoLabel>Privacy</MonoLabel>
            <h1 className="mt-5 font-sans text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Privacy policy
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
              We collect as little as we can, we store it carefully, and we never sell it. This
              policy describes what we collect on this website, why we collect it, and the rights
              you have over it.
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{lastUpdated}</p>
          </Container>
        </Section>

        {/* Body with sticky TOC */}
        <Section className="pt-4 sm:pt-4 lg:pt-4">
          <Container className="max-w-6xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
              {/* Sticky TOC */}
              <nav
                aria-label="Table of contents"
                className="hidden lg:block lg:sticky lg:top-28 lg:self-start"
              >
                <div className="flex items-center gap-2">
                  <ScrollText className="size-4 text-primary" aria-hidden />
                  <span className="text-mono-label text-primary">Contents</span>
                </div>
                <ol className="mt-5 space-y-2 border-l border-border/60">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="-ml-px block border-l-2 border-transparent pl-4 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Mobile TOC — horizontal */}
              <nav
                aria-label="Table of contents"
                className="lg:hidden"
              >
                <div className="flex items-center gap-2">
                  <ScrollText className="size-4 text-primary" aria-hidden />
                  <span className="text-mono-label text-primary">Contents</span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="inline-flex items-center rounded-md border border-border/60 bg-card/40 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Content */}
              <div className="max-w-3xl space-y-12">
                {/* What we collect */}
                <section id="what-we-collect" className="scroll-mt-28">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">01</span>
                    <h2 className="font-sans text-2xl font-semibold tracking-tight">
                      What we collect
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4 text-sm text-muted-foreground text-pretty sm:text-base">
                    <p>
                      The primary information we collect on this website comes from the contact
                      form. When you submit it, we collect:
                    </p>
                    <ul className="space-y-2 pl-1">
                      {[
                        "Your name",
                        "Your email address",
                        "Your company name",
                        "Your phone number (if you choose to provide it)",
                        "Your message",
                        "Metadata about your submission, including approximate timestamp",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      We hash your IP address for the sole purpose of rate limiting and abuse
                      prevention. We do not store raw IPs.
                    </p>
                  </div>
                </section>

                {/* Why */}
                <section id="why" className="scroll-mt-28">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">02</span>
                    <h2 className="font-sans text-2xl font-semibold tracking-tight">
                      Why we collect it
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4 text-sm text-muted-foreground text-pretty sm:text-base">
                    <p>
                      We use the information you submit to respond to your inquiry, to scope a
                      potential engagement, and to provide the services we agree on. That is the
                      only reason we collect it.
                    </p>
                    <p>
                      We do not use your information for advertising, audience building, or
                      training models. We do not add you to a marketing list without your
                      explicit request.
                    </p>
                  </div>
                </section>

                {/* How we store it */}
                <section id="how-we-store" className="scroll-mt-28">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">03</span>
                    <h2 className="font-sans text-2xl font-semibold tracking-tight">
                      How we store it
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4 text-sm text-muted-foreground text-pretty sm:text-base">
                    <p>
                      Contact submissions are stored in a database under our control. Access to
                      that database is restricted to the people inside SkyMind Automation who need
                      it to respond to you.
                    </p>
                    <p>
                      We hash your IP address using a salted one-way function before storing it.
                      We do not store raw IPs. We do not embed third-party analytics on this
                      website by default.
                    </p>
                    <p>
                      We retain contact submissions only as long as needed to respond to your
                      inquiry and to fulfill any engagement that results from it. After that, we
                      will delete or anonymize your submission on request.
                    </p>
                  </div>
                </section>

                {/* Your rights */}
                <section id="your-rights" className="scroll-mt-28">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">04</span>
                    <h2 className="font-sans text-2xl font-semibold tracking-tight">
                      Your rights
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4 text-sm text-muted-foreground text-pretty sm:text-base">
                    <p>You have the right to:</p>
                    <ul className="space-y-2 pl-1">
                      {[
                        "Access — request a copy of the information we hold about you.",
                        "Correction — ask us to fix information that is inaccurate or out of date.",
                        "Deletion — ask us to delete the information we hold about you, subject to legal or contractual retention obligations.",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span
                            className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      To exercise any of these rights, email us at{" "}
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="font-mono text-primary underline-offset-4 hover:underline"
                      >
                        {siteConfig.email}
                      </a>{" "}
                      from the address you used when contacting us.
                    </p>
                  </div>
                </section>

                {/* Cookies */}
                <section id="cookies" className="scroll-mt-28">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">05</span>
                    <h2 className="font-sans text-2xl font-semibold tracking-tight">
                      Cookies
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4 text-sm text-muted-foreground text-pretty sm:text-base">
                    <p>
                      We use cookies only for essential site behavior — for example, remembering
                      your light/dark theme preference. We do not use tracking or advertising
                      cookies on this website.
                    </p>
                    <p>
                      If we add analytics in the future, we will update this policy first and we
                      will use a privacy-respecting approach. We will not silently introduce
                      tracking.
                    </p>
                  </div>
                </section>

                {/* Security */}
                <section id="security" className="scroll-mt-28">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">06</span>
                    <h2 className="font-sans text-2xl font-semibold tracking-tight">
                      Security
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4 text-sm text-muted-foreground text-pretty sm:text-base">
                    <p>
                      We treat this website as a production system. That means we apply the same
                      engineering rigor to the website that we apply to the AI systems we build
                      for clients.
                    </p>
                    <ul className="space-y-2 pl-1">
                      {[
                        "Input validation on every form submission.",
                        "Server-side rate limiting to prevent abuse.",
                        "Honeypot fields to detect automated spam.",
                        "No exposed secrets in client-side code.",
                        "No third-party scripts loaded without explicit review.",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <ShieldCheck
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p>
                      If you believe you have found a security issue on this website or in any
                      system we operate, please contact us at{" "}
                      <a
                        href={`mailto:${siteConfig.securityEmail}`}
                        className="font-mono text-primary underline-offset-4 hover:underline"
                      >
                        {siteConfig.securityEmail}
                      </a>
                      . We take responsible disclosure seriously.
                    </p>
                  </div>
                </section>

                {/* Third parties */}
                <section id="third-parties" className="scroll-mt-28">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">07</span>
                    <h2 className="font-sans text-2xl font-semibold tracking-tight">
                      Third parties
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4 text-sm text-muted-foreground text-pretty sm:text-base">
                    <p>
                      We do not sell your data. We do not share your data with third parties for
                      their own marketing or analytics.
                    </p>
                    <p>
                      We may use infrastructure providers (for hosting, email delivery, and
                      similar) to operate the website and respond to your inquiry. These
                      providers process data only on our instructions and under their own
                      privacy obligations. We will tell you which providers are involved when we
                      respond to your inquiry.
                    </p>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className="scroll-mt-28">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">08</span>
                    <h2 className="font-sans text-2xl font-semibold tracking-tight">
                      Contact
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4 text-sm text-muted-foreground text-pretty sm:text-base">
                    <p>
                      For any question about this policy or your data, contact us:
                    </p>
                    <Card className="border-border/60 p-5">
                      <CardContent className="px-0">
                        <div className="flex items-start gap-3">
                          <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                          <div className="space-y-1.5">
                            <div>
                              <p className="text-mono-label text-muted-foreground">
                                General & privacy
                              </p>
                              <a
                                href={`mailto:${siteConfig.email}`}
                                className="font-mono text-sm text-primary underline-offset-4 hover:underline"
                              >
                                {siteConfig.email}
                              </a>
                            </div>
                            <div className="pt-2">
                              <p className="text-mono-label text-muted-foreground">Security</p>
                              <a
                                href={`mailto:${siteConfig.securityEmail}`}
                                className="font-mono text-sm text-primary underline-offset-4 hover:underline"
                              >
                                {siteConfig.securityEmail}
                              </a>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>

                <p className="border-t border-border/60 pt-6 font-mono text-xs text-muted-foreground">
                  {lastUpdated}
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Bottom CTA */}
        <Section className="pt-0">
          <Container>
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card p-8 sm:p-12 lg:p-16">
              <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" aria-hidden />
              <div className="relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Privacy</span>
                  </div>
                  <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                    Questions about your data?
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty sm:text-base">
                    Email us. We will answer honestly, including telling you when we cannot do
                    what you ask.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-7 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  Contact us
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
