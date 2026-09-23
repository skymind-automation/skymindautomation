import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { Button } from "@/components/ui/button";

// Next already emits noindex for not-found responses.
export const metadata: Metadata = {
  title: "Page not found",
};

const LINKS = [
  { href: "/services", label: "Services", note: "What we build and secure" },
  { href: "/work", label: "Work", note: "Systems we have delivered" },
  { href: "/contact", label: "Contact", note: "Start a conversation" },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section withGrid className="pt-28 sm:pt-32 lg:pt-40">
          <Container className="max-w-3xl">
            <MonoLabel>Error 404</MonoLabel>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              That page isn&rsquo;t here.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground text-pretty sm:text-lg">
              The link may be out of date, or the page may have moved. These are the likeliest
              places to find what you were after.
            </p>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {LINKS.map(({ href, label, note }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center justify-between gap-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span>
                      <span className="block font-medium text-foreground">{label}</span>
                      <span className="block text-sm text-muted-foreground">{note}</span>
                    </span>
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-10">
              <Link href="/">Back to the homepage</Link>
            </Button>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
