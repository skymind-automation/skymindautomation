"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { mainNav, serviceIconMap, type NavGroup } from "@/config/navigation";
import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SkyMindLogo } from "@/components/layout/logo";

const SCROLL_THRESHOLD = 8;

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Track scroll to toggle blurred/elevated background.
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${siteConfig.name} — home`}
        >
          <SkyMindLogo className="size-8 transition-transform duration-300 group-hover:rotate-[8deg]" />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-sans text-base font-semibold tracking-tight text-foreground">
              SkyMind
              <span className="ml-1.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Automation
              </span>
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center lg:flex"
        >
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-1">
              {mainNav.map((item) =>
                item.items && item.items.length > 0 ? (
                  <ServicesMegaMenu
                    key={item.title}
                    item={item}
                    isActive={isActive(item.href)}
                  />
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "h-9 rounded-md bg-transparent px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground data-[state=open]:bg-accent/50 data-[state=open]:text-foreground",
                        isActive(item.href) &&
                          "text-foreground after:absolute after:inset-x-3 after:bottom-1 after:h-px after:bg-primary",
                      )}
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Desktop right actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <Link href="/services">
              Explore Capabilities
              <ArrowRight className="size-3.5" />
            </Link>
          </Button>
          <Button asChild size="sm" className="h-9">
            <Link href="/contact">Start an AI Project</Link>
          </Button>
        </div>

        {/* Mobile trigger */}
        <div className="flex items-center lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-10 rounded-md text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full border-l border-border bg-background/95 backdrop-blur-xl sm:max-w-sm"
            >
              <SheetHeader className="border-b border-border pb-4">
                <SheetTitle asChild>
                  <Link href="/" className="inline-flex items-center gap-2.5">
                    <SkyMindLogo className="size-7" />
                    <span className="font-sans text-base font-semibold tracking-tight text-foreground">
                      SkyMind
                      <span className="ml-1.5 font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                        Automation
                      </span>
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {/* Mobile nav list */}
              <nav
                aria-label="Mobile"
                className="flex flex-1 flex-col gap-1 overflow-y-auto p-4 scrollbar-tech"
              >
                {mainNav.map((item) => (
                  <MobileNavItem
                    key={item.title}
                    item={item}
                    isActive={isActive(item.href)}
                    onNavigate={() => setMobileOpen(false)}
                  />
                ))}
              </nav>

              {/* Mobile CTAs */}
              <div className="mt-auto flex flex-col gap-2 border-t border-border p-4">
                <Button asChild className="h-11 w-full">
                  <Link href="/contact">
                    Start an AI Project
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 w-full border-border bg-transparent"
                >
                  <Link href="/services">Explore Capabilities</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}

/* ----------------------- Services Mega Menu (desktop) ---------------------- */

function ServicesMegaMenu({
  item,
  isActive,
}: {
  item: NavGroup;
  isActive: boolean;
}) {
  const services = (item.items ?? []).map((s) => {
    // Map nav item to a service icon key by inspecting href slug.
    const slug = s.href.split("/").pop() as keyof typeof serviceIconMap | undefined;
    const Icon =
      (slug && serviceIconMap[slug as keyof typeof serviceIconMap]) || null;
    return { ...s, Icon };
  });

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          "h-9 rounded-md bg-transparent px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground data-[state=open]:bg-accent/50 data-[state=open]:text-foreground",
          isActive &&
            "text-foreground after:absolute after:inset-x-3 after:bottom-1 after:h-px after:bg-primary",
        )}
      >
        {item.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="w-[min(92vw,42rem)] p-0">
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
          <div className="border-b border-border p-5 sm:border-b-0 sm:border-r">
            <p className="text-mono-label text-primary">
              <span className="mr-2 inline-block size-1.5 rounded-full bg-primary pulse-dot align-middle" />
              {siteConfig.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Seven disciplines. One engineering pipeline. We design, build,
              automate, evaluate, and secure AI systems end to end.
            </p>
            <Link
              href={item.href}
              className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              All services
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-1 p-2">
            {services.map(({ title, href, description, Icon }) => (
              <NavigationMenuLink key={href} asChild>
                <Link
                  href={href}
                  className="group flex items-start gap-3 rounded-md p-2.5 transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {Icon ? (
                    <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-muted/40 text-primary transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                      <Icon className="size-4" />
                    </span>
                  ) : null}
                  <span className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-foreground">
                      {title}
                    </span>
                    {description ? (
                      <span className="text-xs leading-relaxed text-muted-foreground">
                        {description}
                      </span>
                    ) : null}
                  </span>
                </Link>
              </NavigationMenuLink>
            ))}
          </div>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

/* ----------------------------- Mobile nav item ----------------------------- */

function MobileNavItem({
  item,
  isActive,
  onNavigate,
}: {
  item: NavGroup;
  isActive: boolean;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = React.useState(false);
  const hasChildren = !!item.items?.length;

  if (!hasChildren) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={cn(
          "flex h-11 items-center justify-between rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isActive
            ? "bg-accent/60 text-foreground"
            : "text-muted-foreground hover:bg-accent/40 hover:text-foreground",
        )}
      >
        {item.title}
        <ChevronRight className="size-4 opacity-50" />
      </Link>
    );
  }

  return (
    <div className="flex flex-col">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
        className={cn(
          "flex h-11 items-center justify-between rounded-md px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isActive
            ? "bg-accent/60 text-foreground"
            : "text-muted-foreground hover:bg-accent/40 hover:text-foreground",
        )}
      >
        {item.title}
        <ChevronRight
          className={cn(
            "size-4 opacity-50 transition-transform",
            expanded && "rotate-90",
          )}
        />
      </button>
      {expanded && (
        <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-border pl-3">
          <Link
            href={item.href}
            onClick={onNavigate}
            className="flex h-10 items-center rounded-md px-3 text-sm font-medium text-primary transition-colors hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            All {item.title}
          </Link>
          {item.items!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className="flex h-10 items-center rounded-md px-3 text-sm text-muted-foreground transition-colors hover:bg-accent/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {child.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
