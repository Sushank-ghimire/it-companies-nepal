import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase/client";

const baseUrl = "https://itcompaniesnepal.ghimiresushank.com.np";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data: companies, error } = await supabase
    .from("companies")
    .select("slug, updated_at")
    .order("company_name", { ascending: true });

  if (error) {
    console.error("Failed to generate sitemap:", error);
  }

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/companies`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const companyRoutes: MetadataRoute.Sitemap = (companies ?? []).map(
    (company) => ({
      url: `${baseUrl}/companies/${company.slug}`,
      lastModified: company.updated_at
        ? new Date(company.updated_at)
        : new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  return [...staticRoutes, ...companyRoutes];
}
