import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  ExternalLink,
  Globe,
  Linkedin,
  MapPin,
  Users,
} from "lucide-react";
import { CompanyDetail } from "@/types/schemas";

interface CompanyDetailProps {
  company: CompanyDetail;
}

export default function CompanyDetailPage({ company }: CompanyDetailProps) {
  const services = company.company_services
    .map((item) => item.services)
    .filter(Boolean);

  return (
    <article className="py-6 sm:py-10">
      <Link
        href="/companies"
        className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
        Back to companies
      </Link>

      <div className="mt-8 overflow-hidden rounded-3xl border border-border/60 bg-background">
        <div className="border-b border-border/60 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-muted sm:size-16">
                <Building2 className="size-7 text-muted-foreground" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h1 className="text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                    {company.company_name}
                  </h1>

                  {company.verified && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                      <span className="size-1.5 rounded-full bg-foreground" />
                      Verified
                    </span>
                  )}
                </div>

                {(company.city || company.district || company.province) && (
                  <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-4" />

                    <span>
                      {[company.city, company.district, company.province]
                        .filter(Boolean)
                        .join(", ")}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {company.website && (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 items-center gap-2 rounded-full border border-border/60 px-4 text-sm font-medium transition-colors hover:bg-muted"
                >
                  <Globe className="size-4" />
                  Website
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}

              {company.linkedin_url && (
                <a
                  href={company.linkedin_url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 transition-colors hover:bg-muted"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px]">
          <div className="min-w-0 p-6 sm:p-8 lg:p-10">
            <section>
              <h2 className="text-sm font-semibold">About</h2>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                {company.description ||
                  "No description is currently available for this company."}
              </p>
            </section>

            {services.length > 0 && (
              <section className="mt-10">
                <h2 className="text-sm font-semibold">Services</h2>

                <div className="mt-4 flex flex-wrap gap-2">
                  {services.map((service) => (
                    <span
                      key={service!.id}
                      className="rounded-full border border-border/60 bg-muted/30 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {service!.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {company.company_sources.length > 0 && (
              <section className="mt-10">
                <h2 className="text-sm font-semibold">Sources</h2>

                <div className="mt-4 space-y-2">
                  {company.company_sources.map((source) => (
                    <a
                      key={source.id}
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-2 rounded-lg border border-border/60 px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted/30 hover:text-foreground"
                    >
                      <ExternalLink className="size-3.5 shrink-0" />

                      <span className="truncate">{source.url}</span>

                      <ArrowUpRight className="ml-auto size-3.5 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="border-t border-border/60 bg-muted/10 p-6 sm:p-8 lg:border-l lg:border-t-0">
            <h2 className="text-sm font-semibold">Company information</h2>

            <dl className="mt-5 divide-y divide-border/60">
              {company.city && (
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-xs text-muted-foreground">Location</dt>

                  <dd className="text-right text-sm font-medium">
                    {company.city}
                  </dd>
                </div>
              )}

              {company.founded_year && (
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-xs text-muted-foreground">Founded</dt>

                  <dd className="text-sm font-medium">
                    {company.founded_year}
                  </dd>
                </div>
              )}

              {company.employee_count && (
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Users className="size-3.5" />
                    Employees
                  </dt>

                  <dd className="text-sm font-medium">
                    {company.employee_count.toLocaleString()}
                  </dd>
                </div>
              )}

              {company.email && (
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-xs text-muted-foreground">Email</dt>

                  <dd className="max-w-[160px] truncate text-right text-sm font-medium">
                    <a
                      href={`mailto:${company.email}`}
                      className="hover:underline"
                    >
                      {company.email}
                    </a>
                  </dd>
                </div>
              )}

              {company.phone && (
                <div className="flex items-center justify-between gap-4 py-3">
                  <dt className="text-xs text-muted-foreground">Phone</dt>

                  <dd className="text-sm font-medium">{company.phone}</dd>
                </div>
              )}
            </dl>
          </aside>
        </div>
      </div>
    </article>
  );
}
