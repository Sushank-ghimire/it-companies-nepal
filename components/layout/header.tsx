"use client";

import Link from "next/link";
import ThemeSwitcher from "../theme-switcher";
import { NavLinks } from "./nav-links";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="IT Companies Nepal"
        >
          <div className="flex size-8 items-center justify-center rounded-lg bg-foreground text-background transition-transform duration-200 group-hover:scale-105">
            <span className="text-sm font-bold tracking-tight">IT</span>
          </div>

          <div className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-[-0.02em]">
              IT Companies
            </span>
            <span className="mt-0.5 text-[11px] font-medium tracking-wide text-muted-foreground">
              NEPAL
            </span>
          </div>
        </Link>

        <NavLinks />

        <div className="flex items-center gap-1">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
