import { cacheLife } from "next/cache";
import { supabase } from "@/lib/supabase/client";

interface GetCompaniesOptions {
  page?: number;
  province?: string | null;
  district?: string | null;
}

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

export async function getCompanies({
  page = 1,
  province = null,
  district = null,
}: GetCompaniesOptions) {
  "use cache";

  cacheLife("weeks");

  const safePage = Number.isInteger(page) && page > 0 ? page : 1;

  const offset = (safePage - 1) * PAGE_SIZE;

  let query = supabase
    .from("companies")
    .select("*", { count: "exact" })
    .order("company_name", { ascending: true });

  if (province) {
    query = query.eq("province", province);
  }

  if (district) {
    query = query.eq("district", district);
  }

  const { data, error, count } = await query.range(
    offset,
    offset + PAGE_SIZE - 1,
  );

  return {
    companies: data ?? [],
    total: count ?? 0,
    error,
  };
}
