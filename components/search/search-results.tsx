"use client";

import { ArrowRight, Building2, ShieldCheck } from "lucide-react";

import { CommandGroup, CommandItem } from "@/components/ui/command";

import type { Database } from "@/types/database.types";
import Image from "next/image";

type Company = Pick<
  Database["public"]["Tables"]["companies"]["Row"],
  | "id"
  | "slug"
  | "company_name"
  | "description"
  | "logo_url"
  | "city"
  | "district"
  | "province"
  | "verified"
>;

interface SearchResultsProps {
  companies: Company[];
  onSelect: (slug: string) => void;
}

export function SearchResults({ companies, onSelect }: SearchResultsProps) {
  return (
    <CommandGroup heading="Companies" className="px-1 py-2">
      {companies.map((company) => {
        const location = [company.city, company.district, company.province]
          .filter(Boolean)
          .join(" · ");

        return (
          <CommandItem
            key={company.id}
            value={`${company.company_name} ${location}`}
            onSelect={() => onSelect(company.slug)}
            className="group cursor-pointer rounded-xl px-3 py-3"
          >
            <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-muted">
              {company.logo_url ? (
                <Image
                  src={company.logo_url}
                  alt=""
                  fill
                  className="size-full object-contain"
                />
              ) : (
                <Building2 className="size-4 text-muted-foreground" />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <p className="truncate text-sm font-medium">
                  {company.company_name}
                </p>

                {company.verified && (
                  <ShieldCheck className="size-3.5 shrink-0 text-primary" />
                )}
              </div>

              <p className="mt-0.5 truncate text-xs text-muted-foreground">
                {location || "Nepal"}
              </p>
            </div>

            <ArrowRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-data-[selected=true]:opacity-100" />
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
}
