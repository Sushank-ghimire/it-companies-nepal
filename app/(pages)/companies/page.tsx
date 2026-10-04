import Companies from "@/components/companies/companies";
import { createMetadata } from "@/lib/seo/metadata";
import { getCompanies, PAGE_SIZE } from "@/lib/companies/data";
import type { Metadata } from "next";

interface CompaniesPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export const metadata: Metadata = createMetadata({
  title: "IT Companies in Nepal",
  description:
    "Explore IT companies, software companies, and technology businesses across Nepal.",
  path: "/companies",
  keywords: [
    "IT companies directory Nepal",
    "software companies directory Nepal",
  ],
});

export default async function CompaniesPage({
  searchParams,
}: CompaniesPageProps) {
  const params = await searchParams;

  const pageParam = Number(params.page);
  const page =
    Number.isInteger(pageParam) && pageParam > 0
      ? pageParam
      : 1;

  const { companies, total, error } = await getCompanies(page);

  if (error) {
    throw error;
  }

  return (
    <Companies
      companies={companies}
      currentPage={page}
      pageSize={PAGE_SIZE}
      total={total}
    />
  );
}
