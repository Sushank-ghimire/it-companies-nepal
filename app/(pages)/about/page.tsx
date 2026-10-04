import Link from "next/link";
import {
  ArrowRight,
  Database,
  Github,
  Heart,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { aboutHighlights } from "@/constants/hightlights";
import { createMetadata } from "@/lib/seo/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about IT Companies Nepal, an open directory for discovering technology and software companies in Nepal.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <section className="relative py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Making Nepal&apos;s tech ecosystem
            <span className="text-muted-foreground"> easier to discover.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            IT Companies Nepal is an open-source directory created to bring
            information about technology companies, services, and the wider
            technology ecosystem into one simple and accessible place.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link href="/companies">
                Explore companies
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-6"
            >
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Github className="mr-2 size-4" />
                View source
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Why this exists
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              One place to explore what&apos;s being built in Nepal.
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              Nepal has a growing technology ecosystem, with software
              companies, startups, development teams, IT service providers,
              and technology-focused organizations spread across the country.
            </p>

            <p>
              Information about these organizations is often scattered across
              company websites, social platforms, directories, and other
              publicly available sources.
            </p>

            <p>
              This project aims to bring that information together into a
              clean, searchable directory that is useful for developers,
              students, businesses, researchers, and anyone interested in
              Nepal&apos;s technology industry.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 sm:py-20">
        <div className="mb-10 max-w-xl">
          <p className="text-sm font-semibold text-foreground">
            What matters
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Built around useful, transparent information.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border/60 bg-border/60 md:grid-cols-3">
          {aboutHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-background p-6 transition-colors hover:bg-muted/30 sm:p-7"
              >
                <div className="flex size-10 items-center justify-center rounded-xl border border-border/60 bg-muted/40 transition-transform duration-300 group-hover:scale-105">
                  <Icon className="size-5 text-foreground" />
                </div>

                <h3 className="mt-6 font-semibold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-border/60 py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="flex size-11 items-center justify-center rounded-xl border border-border/60 bg-muted/40">
              <Database className="size-5" />
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em]">
              About the data
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              Company information is collected from publicly available
              sources and organized into a structured format to make it
              easier to browse and search.
            </p>

            <p>
              Information can change over time. Companies evolve, websites
              change, and contact details may become outdated. The project
              therefore keeps track of sources and aims to improve the
              information over time.
            </p>

            <p>
              If you notice something inaccurate, outdated, or missing, you
              can get in touch and help improve the directory.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/30 p-8 sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-foreground/[0.03] blur-3xl" />
          <div className="relative max-w-2xl">
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Open source, by design.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
              The project is built openly so developers and the community can
              explore the code, learn from it, suggest improvements, report
              issues, and contribute to making the directory better.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full">
                <a
                  href="https://github.com/Sushank-ghimire/it-companies-nepal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="mr-2 size-4" />
                  Explore the code
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="rounded-full justify-start sm:justify-center"
              >
                <Link href="/contact">
                  Get in touch
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-16 text-center sm:py-20">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto flex size-11 items-center justify-center rounded-full border border-border/60 bg-muted/40">
            <Heart className="size-5" />
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Help make the directory better.
          </h2>

          <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
            Know a company that&apos;s missing? Found information that needs
            updating? Your feedback can help make this resource more useful
            for everyone exploring Nepal&apos;s technology ecosystem.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="rounded-full px-6">
              <Link href="/contact">
                Contact us
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="rounded-full text-muted-foreground"
            >
              <Link href="/companies">
                Browse companies
              </Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <MapPin className="size-3.5" />
            <span>Built for Nepal&apos;s technology community</span>
          </div>
        </div>
      </section>
    </div>
  );
}
