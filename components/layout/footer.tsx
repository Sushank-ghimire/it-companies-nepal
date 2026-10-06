"use client";

import Link from "next/link";
import { ArrowUpRight, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between md:py-16">
          <div className="max-w-sm">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5"
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

            <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
              Discover and explore Nepal&aposs growing technology ecosystem, all
              in one place.
            </p>
          </div>

          <div className="flex gap-16 sm:gap-24">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
                Explore
              </p>

              <nav className="flex flex-col gap-2.5">
                <Link
                  href="/companies"
                  className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Companies
                </Link>

                <Link
                  href="/about"
                  className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </Link>
              </nav>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-foreground">
                Community
              </p>

              <nav className="flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  className="group flex w-fit items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Add a company
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border/60 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">ghimiresushank.com.np</p>

          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            Built with
            <Heart className="size-3.5 fill-current" />
            in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
