import { cacheLife } from "next/cache";
import { supabase } from "@/lib/supabase/client";

export async function getCompanyBySlug(slug: string) {
  "use cache";
  cacheLife("weeks");

  const { data, error } = await supabase
    .from("companies")
    .select(
      `
        *,
        company_services (
          *,
          services (*)
        ),
        company_sources (*)
      `,
    )
    .eq("slug", slug)
    .single();

  return {
    company: data,
    error,
  };
}

export const PAGE_SIZE = 15;

export async function getCompanies(page: number) {
  "use cache";

  cacheLife("weeks");

  const offset = (page - 1) * PAGE_SIZE;

  const { data, error, count } = await supabase
    .from("companies")
    .select("*", { count: "exact" })
    .order("company_name", { ascending: true })
    .range(offset, offset + PAGE_SIZE - 1);

  return {
    companies: data ?? [],
    total: count ?? 0,
    error,
  };
}
