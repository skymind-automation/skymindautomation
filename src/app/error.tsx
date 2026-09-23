"use client";

import * as React from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section withGrid className="pt-28 sm:pt-32 lg:pt-40">
          <Container className="max-w-3xl">
            <MonoLabel>Something went wrong</MonoLabel>
            <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              This page failed to load.
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground text-pretty sm:text-lg">
              It&rsquo;s on our side, not yours. Trying again usually works. If it keeps happening,
              email{" "}
              <a className="text-foreground underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
              {error.digest ? " and quote the reference below." : "."}
            </p>
            {error.digest && (
              <p className="mt-4 font-mono text-xs text-muted-foreground">Reference: {error.digest}</p>
            )}
            <div className="mt-10 flex flex-wrap gap-3">
              <Button onClick={reset}>Try again</Button>
              <Button asChild variant="outline">
                <Link href="/">Back to the homepage</Link>
              </Button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
