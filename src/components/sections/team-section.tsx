import * as React from "react";
import { Users, ShieldCheck, Workflow, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { MonoLabel } from "@/components/shared/mono-label";
import { ArrowLink } from "@/components/shared/arrow-link";
import { InitialsAvatar } from "@/components/shared/initials-avatar";
import { teamMembers } from "@/content/team";

export function TeamSection() {
  return (
    <Section withGrid className="pt-0">
      <Container className="max-w-5xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* Sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center gap-2">
              <Users className="size-4 text-primary" aria-hidden />
              <span className="text-mono-label text-primary">Team</span>
            </div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-tight">
              Founding team
            </h2>
            <p className="mt-4 text-sm text-muted-foreground text-pretty">
              A small, engineering-first team. We stay close to the work —
              architecture, code, evals, and red-team testing — on every
              engagement.
            </p>
          </div>

          {/* Members */}
          <div>
            <ul className="flex flex-col gap-5">
              {teamMembers.map((member) => (
                <li key={member.slug}>
                  <article className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 p-6 transition-colors hover:border-primary/40 sm:p-7">
                    {/* corner mono tag */}
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background/60 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-primary pulse-dot" aria-hidden />
                      {member.roleTag}
                    </span>

                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                      <InitialsAvatar
                        initials={member.initials}
                        size="lg"
                        className="ring-primary/20"
                      />
                      <div className="min-w-0 flex-1">
                        <h3 className="font-sans text-lg font-semibold tracking-tight">
                          {member.name}
                        </h3>
                        <p className="mt-0.5 font-mono text-xs text-primary">
                          {member.role}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          Focus — {member.focus}
                        </p>

                        <p className="mt-4 text-sm text-muted-foreground text-pretty sm:text-[0.95rem]">
                          {member.bio}
                        </p>

                        <div className="mt-5">
                          <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                            Responsibilities
                          </p>
                          <ul className="mt-2.5 flex flex-wrap gap-2">
                            {member.responsibilities.map((r) => (
                              <li
                                key={r}
                                className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-background/40 px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                              >
                                <span
                                  className="size-1 rounded-full bg-primary/70"
                                  aria-hidden
                                />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* corner accent icons */}
                    <div className="pointer-events-none absolute -bottom-4 -right-4 opacity-[0.04] transition-opacity group-hover:opacity-[0.08]" aria-hidden>
                      {member.roleTag === "Founder" ? (
                        <ShieldCheck className="size-32" />
                      ) : (
                        <Workflow className="size-32" />
                      )}
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            {/* Join the team note */}
            <div className="mt-6 flex flex-col items-start gap-3 rounded-xl border border-dashed border-border bg-background/40 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-muted/40 text-primary"
                  aria-hidden
                >
                  <Users className="size-4" />
                </span>
                <div>
                  <p className="font-sans text-sm font-semibold">
                    We are building the team deliberately.
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground text-pretty sm:text-sm">
                    Engineering roles across AI implementation, security, and
                    automation. Reach out if that is you.
                  </p>
                </div>
              </div>
              <ArrowLink href="/contact" className="shrink-0">
                Join the team
              </ArrowLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
