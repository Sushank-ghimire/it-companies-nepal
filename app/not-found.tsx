import Link from "next/link";
import { ArrowLeft, ArrowRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center py-16">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-border/60 bg-background px-6 py-16 text-center sm:px-10 sm:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-24 -top-24 size-72 rounded-full bg-muted/50 blur-3xl" />

          <div className="absolute -bottom-32 -right-24 size-80 rounded-full bg-muted/40 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/30" />

          <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border/20" />
        </div>
        <div className="relative">
          <div className="select-none text-[7rem] font-bold leading-none tracking-[-0.08em] text-muted-foreground/15 sm:text-[10rem]">
            404
          </div>

          <div className="-mt-8 sm:-mt-12">
            <div className="mx-auto flex size-11 items-center justify-center rounded-full border border-border/60 bg-muted/50">
              <Search className="size-5 text-muted-foreground" />
            </div>

            <h1 className="mt-6 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">
              We couldn&apos;t find that page.
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground sm:text-base">
              The page you&apos;re looking for may have moved, been removed,
              or never existed in the first place.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild className="rounded-full px-6">
                <Link href="/">
                  <ArrowLeft className="mr-2 size-4" />
                  Back home
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full px-6"
              >
                <Link href="/companies">
                  Explore companies
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
