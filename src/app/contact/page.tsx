import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ShieldCheck, ArrowRight, Clock } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { MonoLabel } from "@/components/shared/mono-label";
import { ContactForm } from "@/components/forms/contact-form";
import { serviceOptions } from "@/lib/validations/contact";

export const metadata: Metadata = {
  title: "Contact — Start an AI Project",
  description:
    "Tell us what you're trying to achieve. We design and build AI systems, automations, RAG apps, agents, and AI security solutions — and respond within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Start an AI Project | SkyMind Automation",
    description:
      "Tell us what you're trying to achieve. We respond within one business day.",
    url: "/contact",
    type: "website",
  },
};

type ContactPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

const VALID_SERVICES: readonly string[] = serviceOptions;

const NEXT_STEPS = [
  "We review your inquiry",
  "Discovery call to scope",
  "Proposal with timeline & deliverables",
];

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = (await searchParams) ?? {};
  const rawService =
    typeof params.service === "string" ? params.service : undefined;
  const defaultService =
    rawService && VALID_SERVICES.includes(rawService) ? rawService : undefined;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero band */}
        <section className="relative border-b border-border/60">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-50"
          />
          <Container className="relative py-16 sm:py-20 lg:py-28">
            <div className="max-w-3xl space-y-5">
              <MonoLabel>Contact</MonoLabel>
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Start an AI project.
              </h1>
              <p className="max-w-2xl text-pretty text-lg text-muted-foreground">
                Tell us what you&apos;re trying to achieve. We respond within
                one business day.
              </p>
            </div>
          </Container>
        </section>

        {/* Form + sidebar */}
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[3fr_2fr] lg:gap-12">
            <div className="min-w-0">
              <ContactForm defaultService={defaultService} />
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {/* Direct email */}
              <div className="rounded-xl border border-border/60 bg-card/40 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Mail className="size-4 text-primary" aria-hidden />
                  <span className="text-mono-label text-primary">Direct email</span>
                </div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-mono text-sm text-foreground break-all transition-colors hover:text-primary"
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Security inquiries */}
              <div className="rounded-xl border border-border/60 bg-card/40 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <ShieldCheck className="size-4 text-primary" aria-hidden />
                  <span className="text-mono-label text-primary">
                    Security inquiries
                  </span>
                </div>
                <a
                  href={`mailto:${siteConfig.securityEmail}`}
                  className="font-mono text-sm text-foreground break-all transition-colors hover:text-primary"
                >
                  {siteConfig.securityEmail}
                </a>
                <p className="mt-2 text-xs text-muted-foreground">
                  For responsible disclosure and AI security concerns.
                </p>
              </div>

              {/* What happens next */}
              <div className="rounded-xl border border-border/60 bg-card/40 p-5">
                <p className="text-mono-label mb-3 text-primary">
                  What happens next
                </p>
                <ol className="space-y-3">
                  {NEXT_STEPS.map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-0.5 font-mono text-xs text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-foreground/90">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Response time */}
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Clock className="size-4 text-primary" aria-hidden />
                  <span className="text-mono-label text-primary">
                    Response time
                  </span>
                </div>
                <p className="font-mono text-base text-foreground">
                  Within 1 business day.
                </p>
              </div>

              {/* Privacy */}
              <div className="rounded-xl border border-border/60 bg-card/40 p-5">
                <p className="text-mono-label mb-2 text-primary">Privacy</p>
                <p className="text-sm text-muted-foreground">
                  Your data is stored securely. We hash IPs for abuse
                  prevention and never share your information.{" "}
                  <Link
                    href="/privacy"
                    className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                  >
                    Read our privacy policy
                    <ArrowRight className="size-3" aria-hidden />
                  </Link>
                </p>
              </div>
            </aside>
          </div>
        </Container>

        {/* Reassurance band */}
        <section className="border-t border-border/60 bg-card/30">
          <Container className="py-8">
            <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              No vendor lock-in. Engineering rigor. Security by default.
            </p>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
