import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ScrollText } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms under which SkyMind Automation makes this website available, including acceptable use, intellectual property, disclaimer of warranty, and limitation of liability.",
  alternates: { canonical: "/terms" },
};

const lastUpdated = "Last updated: September 2025";

const sections: { id: string; number: string; title: string; body: ReactNode }[] = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of terms",
    body: (
      <p>
        By accessing or using this website, you agree to these terms of use. If you do not agree
        to these terms, you should not use the website. These terms apply to your use of the
        website itself; separate agreements govern any services we provide to you.
      </p>
    ),
  },
  {
    id: "use-of-website",
    number: "02",
    title: "Use of the website",
    body: (
      <>
        <p>
          You may use this website for lawful purposes only. You agree not to misuse the
          website, including by:
        </p>
        <ul className="mt-4 space-y-2 pl-1">
          {[
            "Submitting false, misleading, or fraudulent information through the contact form.",
            "Attempting to probe, scan, or test the vulnerability of the website or any system it relies on, except through our responsible disclosure process.",
            "Using automated tools to overload, disable, or impair the website.",
            "Attempting to bypass rate limits, access controls, or other protections.",
            "Submitting content that is unlawful, harmful, defamatory, or infringes someone else's rights.",
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
        <p className="mt-4">
          We may restrict or block access to the website at any time, without notice, if we
          believe these terms have been violated or to protect the website and its users.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    number: "03",
    title: "Intellectual property",
    body: (
      <>
        <p>
          The content on this website — including text, design, code, logos, and graphics — is
          owned by SkyMind Automation or licensed to us. You may view and share that content for
          non-commercial purposes with attribution.
        </p>
        <p className="mt-4">
          You may not reproduce, redistribute, or create derivative works from this website
          for commercial purposes without our written permission. The names, marks, and logos
          of SkyMind Automation are our property and may not be used without permission.
        </p>
        <p className="mt-4">
          Any information you submit through the contact form remains yours. We use it only as
          described in our{" "}
          <Link href="/privacy" className="text-primary underline-offset-4 hover:underline">
            privacy policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "no-warranty",
    number: "04",
    title: "Disclaimer of warranty",
    body: (
      <>
        <p>
          This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
          basis. To the extent permitted by law, we disclaim all warranties, express or implied,
          including implied warranties of merchantability, fitness for a particular purpose, and
          non-infringement.
        </p>
        <p className="mt-4">
          We do not warrant that the website will be uninterrupted, error-free, secure, or free
          of harmful components. You use the website at your own risk.
        </p>
        <p className="mt-4">
          Nothing on this website constitutes professional advice. Engagements with SkyMind
          Automation are governed by separate agreements that specify scope, deliverables, and
          terms.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    number: "05",
    title: "Limitation of liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by law, SkyMind Automation shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages, or any loss of
          profits or revenues, arising from your use of — or inability to use — this website.
        </p>
        <p className="mt-4">
          This includes damages caused by delays, interruptions, errors, unauthorized access,
          or any other aspect of the website. If your use of the website results in the need for
          servicing or replacing property, data, or equipment, we are not responsible for those
          costs.
        </p>
      </>
    ),
  },
  {
    id: "third-party-links",
    number: "06",
    title: "Third-party links and content",
    body: (
      <p>
        This website may contain links to third-party websites or reference third-party tools
        and services. We are not responsible for the content, privacy practices, or terms of
        those third parties. Your use of third-party websites is at your own risk and is
        governed by their own terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    number: "07",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws applicable to SkyMind Automation in the
        jurisdiction in which it operates. Any dispute arising out of or related to these terms
        or your use of this website will be resolved in accordance with those laws. If any
        provision of these terms is found to be unenforceable, the remaining provisions remain
        in effect.
      </p>
    ),
  },
  {
    id: "changes",
    number: "08",
    title: "Changes to these terms",
    body: (
      <>
        <p>
          We may update these terms from time to time. When we do, we will update the
          &ldquo;last updated&rdquo; date at the top and bottom of this page. We will not make
          material changes to these terms retroactive.
        </p>
        <p className="mt-4">
          Continued use of the website after changes take effect constitutes your acceptance of
          the updated terms.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    number: "09",
    title: "Contact",
    body: (
      <>
        <p>
          If you have questions about these terms, contact us at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-primary underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <Section withGrid className="pt-28 sm:pt-32 lg:pt-40">
          <Container className="max-w-4xl">
            <MonoLabel>Terms</MonoLabel>
            <h1 className="mt-5 font-sans text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Terms of use
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground text-pretty sm:text-lg">
              The terms under which we make this website available. We have tried to keep them
              honest and minimal — no buried clauses, no surprises. Read them; they are short.
            </p>
            <p className="mt-4 font-mono text-xs text-muted-foreground">{lastUpdated}</p>
          </Container>
        </Section>

        {/* Body */}
        <Section className="pt-4 sm:pt-4 lg:pt-4">
          <Container className="max-w-3xl">
            <div className="space-y-12">
              {sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-28">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">{s.number}</span>
                    <h2 className="font-sans text-2xl font-semibold tracking-tight">
                      {s.title}
                    </h2>
                  </div>
                  <div className="mt-5 space-y-4 text-sm text-muted-foreground text-pretty sm:text-base">
                    {s.body}
                  </div>
                </section>
              ))}
            </div>

            <p className="mt-12 border-t border-border/60 pt-6 font-mono text-xs text-muted-foreground">
              {lastUpdated}
            </p>
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
                    <ScrollText className="size-4 text-primary" aria-hidden />
                    <span className="text-mono-label text-primary">Questions</span>
                  </div>
                  <h2 className="mt-4 font-sans text-2xl font-semibold tracking-tight sm:text-3xl">
                    Questions about these terms?
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty sm:text-base">
                    Send us a note. We will do our best to answer plainly.
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
