import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Mail,
  Linkedin,
  Code2,
} from "lucide-react";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with the team behind IT Companies Nepal.",
  path: "/contact",
});

const developer = {
  name: "Sushank Ghimire",
  email: "hello@ghimiresushank.com.np",
  github: "https://github.com/Sushank-ghimire",
  linkedin: "https://www.linkedin.com/in/sushank-ghimire",
  repository: "https://github.com/Sushank-ghimire/it-companies-nepal",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="max-w-2xl">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground">
          <Mail className="size-3.5" />
          Get in touch
        </div>

        <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
          Contact
        </h1>

        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          Have a correction, suggestion, or want to contribute to the project?
          Feel free to reach out.
        </p>
      </div>

      {/* Developer */}
      <section className="mt-12">
        <div className="rounded-2xl border border-border/60 bg-background p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
              <Code2 className="size-5" />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Developer
              </p>

              <h2 className="mt-1 text-xl font-semibold tracking-tight">
                {developer.name}
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Developer and creator of IT Companies Nepal.
              </p>
            </div>
          </div>

          <div className="mt-7 divide-y divide-border/60 border-t border-border/60">
            {/* Email */}
            <a
              href={`mailto:${developer.email}`}
              className="group flex items-center justify-between gap-4 py-4"
            >
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-muted-foreground" />

                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="mt-0.5 text-sm font-medium">
                    {developer.email}
                  </p>
                </div>
              </div>

              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>

            {/* GitHub */}
            <a
              href={developer.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 py-4"
            >
              <div className="flex items-center gap-3">
                <Github className="size-4 text-muted-foreground" />

                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="mt-0.5 text-sm font-medium">
                    GitHub profile
                  </p>
                </div>
              </div>

              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
            <a
              href={developer.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 py-4"
            >
              <div className="flex items-center gap-3">
                <Linkedin className="size-4 text-muted-foreground" />

                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="mt-0.5 text-sm font-medium">
                    LinkedIn profile
                  </p>
                </div>
              </div>

              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </a>
          </div>
        </div>
      </section>

      <section className="mt-6">
        <div className="rounded-2xl border border-border/60 bg-muted/20 p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Open source
              </p>

              <h2 className="mt-2 text-lg font-semibold tracking-tight">
                IT Companies Nepal
              </h2>

              <p className="mt-2 max-w-lg text-sm leading-6 text-muted-foreground">
                Explore the source code, report issues, suggest improvements,
                or contribute to the project.
              </p>
            </div>

            <Github className="hidden size-6 shrink-0 text-muted-foreground sm:block" />
          </div>

          <Link
            href={developer.repository}
            target="_blank"
            rel="noreferrer"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium"
          >
            View repository
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <p className="mt-8 text-center text-xs leading-5 text-muted-foreground">
        For company corrections or data updates, please include the relevant
        company name and a reliable source when contacting us.
      </p>
    </div>
  );
}
