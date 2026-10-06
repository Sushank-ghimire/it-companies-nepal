import { supabase } from "@/lib/supabase/client";

function escapeSearchQuery(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/%/g, "\\%").replace(/_/g, "\\_");
}

export async function searchCompanies(query: string) {
  const trimmedQuery = query.trim();

  if (trimmedQuery.length < 2) {
    return {
      data: [],
      error: null,
    };
  }

  const searchTerm = escapeSearchQuery(trimmedQuery);

  const { data, error } = await supabase
    .from("companies")
    .select(`
      id,
      slug,
      company_name,
      description,
      logo_url,
      city,
      district,
      province,
      verified
    `)
    .or(
      [
        `company_name.ilike.%${searchTerm}%`,
        `description.ilike.%${searchTerm}%`,
        `city.ilike.%${searchTerm}%`,
        `district.ilike.%${searchTerm}%`,
        `province.ilike.%${searchTerm}%`,
      ].join(","),
    )
    .order("company_name", { ascending: true })
    .limit(8);

  return {
    data: data ?? [],
    error,
  };
}
