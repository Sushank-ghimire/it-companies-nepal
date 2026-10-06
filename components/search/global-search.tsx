"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useCompanySearch } from "@/hooks/use-company-search";

import { SearchDialog } from "./search-dialog";
import { SearchTrigger } from "./search-trigger";

export default function GlobalSearch() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const { results, loading, hasQuery } = useCompanySearch(query);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function navigate(href: string) {
    closeSearch();
    router.push(href);
  }

  function selectCompany(slug: string) {
    navigate(`/companies/${slug}`);
  }

  function closeSearch() {
    setOpen(false);
    setQuery("");
  }

  function handleOpenChange(value: boolean) {
    setOpen(value);

    if (!value) {
      setQuery("");
    }
  }

  return (
    <>
      <SearchTrigger onClick={() => setOpen(true)} />

      <SearchDialog
        open={open}
        query={query}
        loading={loading}
        hasQuery={hasQuery}
        results={results}
        onOpenChange={handleOpenChange}
        onQueryChange={setQuery}
        onNavigate={navigate}
        onCompanySelect={selectCompany}
      />
    </>
  );
}
