import { useEffect, useState } from "react";

import { useDebounce } from "@/hooks/use-debounce";
import { searchCompanies } from "@/lib/companies/search";

export function useCompanySearch(query: string) {
  const [results, setResults] = useState<
    Awaited<ReturnType<typeof searchCompanies>>["data"]
  >([]);

  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(query.trim(), 250);

  useEffect(() => {
    if (debouncedQuery.length < 2) {
      setResults([]);
      setLoading(false);
      return;
    }

    let active = true;

    async function performSearch() {
      setLoading(true);

      const { data, error } = await searchCompanies(debouncedQuery);

      if (!active) return;

      if (error) {
        console.error("Company search failed:", error);
        setResults([]);
      } else {
        setResults(data);
      }

      setLoading(false);
    }

    performSearch();

    return () => {
      active = false;
    };
  }, [debouncedQuery]);

  return {
    results,
    loading,
    hasQuery: query.trim().length >= 2,
  };
}
