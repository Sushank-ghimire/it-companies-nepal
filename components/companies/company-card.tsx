"use client";

import Link from "next/link";
import { ArrowUpRight, Building2, Globe, MapPin, Users } from "lucide-react";
import { useRef, useState } from "react";

import { Company } from "@/types/schemas";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg)",
  );

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const card = cardRef.current;

    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 4;
    const rotateX = -((y - centerY) / centerY) * 4;

    setTransform(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`,
    );
  }

  function handleMouseLeave() {
    setTransform(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)",
    );
  }

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="group flex h-full flex-col rounded-2xl border border-border/60 bg-background p-5 transition-[transform,box-shadow,border-color] duration-200 ease-out hover:border-border hover:shadow-lg hover:shadow-black/5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted text-muted-foreground transition-colors duration-200 group-hover:bg-foreground group-hover:text-background">
          <Building2 className="size-5" />
        </div>

        {company.verified && (
          <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-foreground" />
            Verified
          </span>
        )}
      </div>

      <div className="mt-5">
        <h2 className="line-clamp-1 text-base font-semibold tracking-tight">
          {company.company_name}
        </h2>

        {(company.city || company.district) && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5 shrink-0" />

            <span className="truncate">
              {[company.city, company.district].filter(Boolean).join(", ")}
            </span>
          </div>
        )}
      </div>

      <p className="mt-4 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-muted-foreground">
        {company.description || "No company description available."}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {company.founded_year && (
          <span className="rounded-full border border-border/60 bg-muted/30 px-2.5 py-1 text-[11px] text-muted-foreground">
            Founded {company.founded_year}
          </span>
        )}

        {company.employee_count !== null &&
          company.employee_count !== undefined && (
            <span className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-muted/30 px-2.5 py-1 text-[11px] text-muted-foreground">
              <Users className="size-3" />
              {company.employee_count.toLocaleString()} employees
            </span>
          )}
      </div>

      <div className="mt-auto flex items-center gap-2 pt-6">
        {company.website && (
          <a
            href={company.website}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            <Globe className="size-3.5" />
            Website
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        )}

        <Link
          href={`/companies/${company.slug}`}
          className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1.5 text-xs font-medium transition-colors hover:bg-muted"
        >
          View company
          <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}
