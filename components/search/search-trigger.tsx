"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";

interface SearchTriggerProps {
  onClick: () => void;
}

export function SearchTrigger({ onClick }: SearchTriggerProps) {
  return (
    <Button
      variant="outline"
      onClick={onClick}
      className="h-9 w-[200px] justify-start gap-2 rounded-lg px-3 font-normal text-muted-foreground shadow-none"
    >
      <Search className="size-4 shrink-0" />

      <span className="truncate text-sm">Search...</span>

      <kbd className="ml-auto hidden shrink-0 rounded border bg-muted px-1.5 py-0.5 font-mono text-[10px] sm:inline-flex">
        ⌘K
      </kbd>
    </Button>
  );
}
