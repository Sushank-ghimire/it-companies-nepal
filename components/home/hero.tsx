"use client";

import Link from "next/link";
import { ArrowRight, Search, MapPin, Building2 } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl"
          >
            Discover Nepal &lsquos
            <br />
            <span className="text-muted-foreground">
              technology ecosystem.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg"
          >
            Explore IT companies across Nepal, discover what they build,
            where they&lsquore located, and the services they offer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              asChild
              size="lg"
              className="h-11 rounded-full px-6 shadow-sm"
            >
              <Link href="/companies">
                <Search className="mr-2 size-4" />
                Explore companies
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-11 rounded-full px-6"
            >
              <Link href="/about">
                Learn about the project
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative mx-auto mt-16 max-w-5xl sm:mt-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/50 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-background shadow-2xl shadow-foreground/[0.04]">
            <div className="flex h-12 items-center border-b border-border/60 px-4">
              <div className="flex gap-1.5">
                <span className="size-2 rounded-full bg-muted-foreground/20" />
                <span className="size-2 rounded-full bg-muted-foreground/20" />
                <span className="size-2 rounded-full bg-muted-foreground/20" />
              </div>

              <div className="mx-auto hidden h-7 w-64 items-center justify-center rounded-md border border-border/50 bg-muted/30 text-[11px] text-muted-foreground sm:flex">
                <span className="truncate">
                  itcompaniesnepal.ghimiresushank.com.np/companies
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Directory
                  </p>

                  <h2 className="mt-1 text-2xl font-semibold tracking-tight">
                    IT Companies in Nepal
                  </h2>
                </div>

                <div className="flex h-10 items-center rounded-lg border border-border/60 bg-muted/20 px-3 text-sm text-muted-foreground">
                  <Search className="mr-2 size-4" />
                  Search companies...
                </div>
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    name: "Leapfrog Technology",
                    location: "Kathmandu",
                  },
                  {
                    name: "Cotiviti Nepal",
                    location: "Kathmandu",
                  },
                  {
                    name: "Deerwalk",
                    location: "Kathmandu",
                  },
                ].map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.45 + index * 0.08,
                    }}
                    className="rounded-xl border border-border/60 bg-background p-4 transition-colors hover:bg-muted/30"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
                        <Building2 className="size-4 text-muted-foreground" />
                      </div>

                      <span className="rounded-full border border-border/60 px-2 py-0.5 text-[10px] text-muted-foreground">
                        Verified
                      </span>
                    </div>

                    <h3 className="mt-5 text-sm font-semibold">
                      {company.name}
                    </h3>

                    <div className="mt-2 flex items-center text-xs text-muted-foreground">
                      <MapPin className="mr-1 size-3" />
                      {company.location}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground sm:gap-x-12"
        >
          <span>Companies across Nepal</span>
          <span className="hidden size-1 rounded-full bg-border sm:block" />
          <span>Structured company data</span>
          <span className="hidden size-1 rounded-full bg-border sm:block" />
          <span>Open-source project</span>
        </motion.div>
      </div>
    </section>
  );
}
