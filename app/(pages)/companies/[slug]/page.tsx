import { notFound } from "next/navigation";
import type { Metadata } from "next";

import CompanyDetailPage from "@/components/companies/company-details";
import { createMetadata } from "@/lib/seo/metadata";
import { getCompanyBySlug } from "@/lib/companies/data";

interface CompanyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: CompanyPageProps): Promise<Metadata> {
  const { slug } = await params;

  const { company } = await getCompanyBySlug(slug);

  if (!company) {
    return createMetadata({
      title: "Company Not Found",
      noIndex: true,
    });
  }

  const location = [company.city, company.district, company.province]
    .filter(Boolean)
    .join(", ");

  const description =
    company.description ||
    `${company.company_name} is an IT and technology company${
      location ? ` based in ${location}` : " in Nepal"
    }.`;

  return createMetadata({
    title: company.company_name,
    description,
    path: `/companies/${slug}`,
    image: company.logo_url || undefined,
    keywords: [
      company.company_name,
      `${company.company_name} Nepal`,
      ...(company.city ? [`${company.company_name} ${company.city}`] : []),
      "IT company Nepal",
    ],
  });
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { slug } = await params;

  const { company: companyData, error } = await getCompanyBySlug(slug);

  if (error) {
    if (error.code === "PGRST116") {
      notFound();
    }

    throw error;
  }

  if (!companyData) {
    notFound();
  }

  return <CompanyDetailPage company={companyData} />;
}
