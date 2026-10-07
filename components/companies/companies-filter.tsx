"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X } from "lucide-react";

import {
  NEPAL_LOCATIONS,
  NEPAL_PROVINCES,
  type Province,
} from "@/constants/locations";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CompaniesFiltersProps {
  province?: string | null;
  district?: string | null;
}

export function CompaniesFilters({
  province,
  district,
}: CompaniesFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedProvince = NEPAL_PROVINCES.includes(province as Province)
    ? (province as Province)
    : undefined;

  const districts = selectedProvince ? NEPAL_LOCATIONS[selectedProvince] : [];

  function updateFilters({
    nextProvince,
    nextDistrict,
  }: {
    nextProvince?: string;
    nextDistrict?: string;
  }) {
    const params = new URLSearchParams(searchParams.toString());

    if (nextProvince) {
      params.set("province", nextProvince);
    } else {
      params.delete("province");
    }

    if (nextDistrict) {
      params.set("district", nextDistrict);
    } else {
      params.delete("district");
    }

    params.delete("page");

    const query = params.toString();

    router.push(query ? `/companies?${query}` : "/companies");
  }

  function clearFilters() {
    router.push("/companies");
  }

  const hasFilters = Boolean(province || district);

  return (
    <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-border/60 bg-muted/20 p-3 sm:flex-row sm:items-center">
      <div className="flex items-center gap-2 px-1 text-sm font-medium">
        <SlidersHorizontal className="size-4 text-muted-foreground" />
        <span>Filter companies</span>
      </div>

      <div className="flex flex-1 flex-col gap-2 sm:flex-row">
        <Select
          value={selectedProvince}
          onValueChange={(value) =>
            updateFilters({
              nextProvince: value === "all" ? undefined : value,
              nextDistrict: undefined,
            })
          }
        >
          <SelectTrigger className="w-full bg-background sm:w-[220px]">
            <SelectValue placeholder="All provinces" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All provinces</SelectItem>

            {NEPAL_PROVINCES.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={district ?? undefined}
          disabled={!selectedProvince}
          onValueChange={(value) =>
            updateFilters({
              nextProvince: selectedProvince,
              nextDistrict: value === "all" ? undefined : value,
            })
          }
        >
          <SelectTrigger className="w-full bg-background sm:w-[220px]">
            <SelectValue
              placeholder={
                selectedProvince ? "All districts" : "Select province first"
              }
            />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All districts</SelectItem>

            {districts.map((item) => (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {hasFilters && (
        <button
          type="button"
          onClick={clearFilters}
          className="inline-flex h-9 items-center justify-center gap-2 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
        >
          <X className="size-4" />
          Clear
        </button>
      )}
    </div>
  );
}
