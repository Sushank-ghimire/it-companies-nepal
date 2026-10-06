"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import { Loader2, Search } from "lucide-react";
import { SearchFooter } from "./search-footer";
import { SearchNavigation } from "./search-navigation";
import { SearchResults } from "./search-results";

interface SearchDialogProps {
  open: boolean;
  query: string;
  loading: boolean;
  hasQuery: boolean;
  results: Parameters<typeof SearchResults>[0]["companies"];
  onOpenChange: (open: boolean) => void;
  onQueryChange: (query: string) => void;
  onNavigate: (href: string) => void;
  onCompanySelect: (slug: string) => void;
}

export function SearchDialog({
  open,
  query,
  loading,
  hasQuery,
  results,
  onOpenChange,
  onQueryChange,
  onNavigate,
  onCompanySelect,
}: SearchDialogProps) {
  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      className="w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-2xl p-0"
      showCloseButton={false}
    >
      <div className="border-b">
        <CommandInput
          autoFocus
          value={query}
          onValueChange={onQueryChange}
          placeholder="Search companies or navigate..."
          className="h-14 border-0 px-4 py-3 text-base outline-none"
        />
      </div>

      <CommandList className="max-h-[420px] p-2">
        {loading && (
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" />
              Searching companies...
            </div>
          </div>
        )}

        {!loading && hasQuery && results.length > 0 && (
          <SearchResults companies={results} onSelect={onCompanySelect} />
        )}

        {!loading && hasQuery && results.length === 0 && (
          <CommandEmpty>
            <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
              <div className="mb-3 flex size-10 items-center justify-center rounded-full bg-muted">
                <Search className="size-4 text-muted-foreground" />
              </div>

              <p className="text-sm font-medium">No companies found</p>

              <p className="mt-1 text-xs text-muted-foreground">
                Try another company name, city, or district.
              </p>
            </div>
          </CommandEmpty>
        )}

        {!hasQuery && !loading && (
          <>
            <SearchNavigation onNavigate={onNavigate} />

            <CommandSeparator className="my-1" />
          </>
        )}
      </CommandList>

      <SearchFooter />
    </CommandDialog>
  );
}
