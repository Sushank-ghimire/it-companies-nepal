"use client";

import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]
          [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)]
          [background-size:64px_64px]"
      />

      <div className="mx-auto flex w-full max-w-md flex-col items-center text-center">
        <div className="flex size-14 items-center justify-center rounded-2xl border border-border/60 bg-muted">
          <AlertTriangle className="size-6 text-muted-foreground" />
        </div>

        <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Something went wrong
        </p>

        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          We couldn’t load this page.
        </h1>

        <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
          Something unexpected happened while loading the page. Try again, or
          return to the directory.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button onClick={() => reset()}>
            <RefreshCw className="size-4" />
            Try again
          </Button>

          <Button asChild variant="outline">
            <Link href="/companies">
              <ArrowLeft className="size-4" />
              Back to companies
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
