import { supabase } from "@/lib/supabase/client";

interface CompanyPageProps {
  params: Promise<{ id: string }>;
}

export default async function CompanyPage({ params }: CompanyPageProps) {
  const { id } = await params;
  const { data: companyData, error: queryError } = await supabase.from("companies").select(
    `
    *,
    company_services (*),
    company_sources (*),
    services (*)
    `
  ).eq("id", id).single();
  console.log(companyData);
  console.log("Error occured: ", queryError);
}
