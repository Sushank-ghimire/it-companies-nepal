"use client";

import Link from "next/link";

import ThemeSwitcher from "@/components/theme-switcher";
import GlobalSearch from "@/components/search/global-search";
import { cn } from "@/lib/utils";
import { useScrolled } from "@/hooks/use-scrolled";

import { NavLinks } from "./nav-links";

export function Header() {
  const scrolled = useScrolled(8);

  return (
    <header className="sticky top-0 z-50 w-full pointer-events-none">
      <div className="mx-auto max-w-7xl px-4 pt-3 sm:px-6 lg:px-8">
        <div
          className={cn(
            "pointer-events-auto flex h-14 items-center justify-between rounded-2xl px-3 sm:px-4",
            "transition-all duration-300",
            scrolled
              ? [
                  "border border-border/60",
                  "bg-background/80",
                  "shadow-lg shadow-black/5",
                  "backdrop-blur-xl",
                ]
              : ["border border-transparent", "bg-transparent"],
          )}
        >
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5"
            aria-label="IT Companies Nepal"
          >
            <div className="flex size-8 items-center justify-center rounded-lg bg-foreground text-background transition-transform duration-200 group-hover:scale-105">
              <span className="text-sm font-bold tracking-tight">IT</span>
            </div>

            <div className="hidden flex-col leading-none sm:flex">
              <span className="text-[15px] font-semibold tracking-[-0.02em]">
                IT Companies
              </span>

              <span className="mt-0.5 text-[11px] font-medium tracking-wide text-muted-foreground">
                NEPAL
              </span>
            </div>
          </Link>

          <NavLinks />

          <div className="flex shrink-0 items-center gap-1">
            <GlobalSearch />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
