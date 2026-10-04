import "dotenv/config";
import { createClient } from "@supabase/supabase-js";
import companyData from "../data/companies.json";

const companies = companyData["companies"];

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SECRET_KEY!,
);

function createSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseEmployeeCount(value: unknown): number | null {
  if (value === null || value === undefined || value === "") {
    return null;
  }

  if (typeof value === "number") {
    return value;
  }

  const match = String(value).match(/\d+/);

  return match ? Number(match[0]) : null;
}

async function seed() {
  console.log(`Starting seed for ${companies.length} companies...`);

  for (const company of companies) {
    console.log(`\nProcessing: ${company.company_name}`);

    const slug = createSlug(company.company_name);

    // --------------------------------
    // 1. Upsert services
    // --------------------------------

    const serviceRows = company.services.map((name) => ({
      name: name.trim(),
    }));

    if (serviceRows.length > 0) {
      const { error: serviceError } = await supabase
        .from("services")
        .upsert(serviceRows, {
          onConflict: "name",
        });

      if (serviceError) {
        throw new Error(
          `Failed to insert services for ${company.company_name}: ${serviceError.message}`,
        );
      }
    }

    // --------------------------------
    // 2. Get service IDs
    // --------------------------------

    let services: { id: string; name: string }[] = [];

    if (company.services.length > 0) {
      const { data, error } = await supabase
        .from("services")
        .select("id, name")
        .in("name", company.services);

      if (error) {
        throw new Error(`Failed to fetch services: ${error.message}`);
      }

      services = data ?? [];
    }

    // --------------------------------
    // 3. Upsert company
    // --------------------------------

    const { data: companyData, error: companyError } = await supabase
      .from("companies")
      .upsert(
        {
          company_name: company.company_name,
          slug,
          description: company.description,
          website: company.website,
          email: company.email,
          phone: company.phone,
          address: company.address,
          province: company.province,
          district: company.district,
          city: company.city,
          latitude: company.latitude,
          longitude: company.longitude,
          employee_count: parseEmployeeCount(company.employee_count),
          founded_year: company.founded_year,
          logo_url: company.logo_url,
          linkedin_url: company.linkedin_url,
          google_maps_url: company.google_maps_url,
          verified: company.verified,
          last_verified_at: company.last_verified_at,
        },
        {
          onConflict: "slug",
        },
      )
      .select("id")
      .single();

    if (companyError || !companyData) {
      throw new Error(
        `Failed to insert company ${company.company_name}: ${
          companyError?.message
        }`,
      );
    }

    const companyId = companyData.id;

    // --------------------------------
    // 4. Create company-services
    // --------------------------------

    if (services.length > 0) {
      const relationships = services.map((service) => ({
        company_id: companyId,
        service_id: service.id,
      }));

      const { error: relationError } = await supabase
        .from("company_services")
        .upsert(relationships, {
          onConflict: "company_id,service_id",
        });

      if (relationError) {
        throw new Error(
          `Failed to link services for ${company.company_name}: ${relationError.message}`,
        );
      }
    }

    // --------------------------------
    // 5. Insert company sources
    // --------------------------------

    if (company.sources.length > 0) {
      const sourceRows = company.sources.map((url) => ({
        company_id: companyId,
        url,
      }));

      const { error: sourceError } = await supabase
        .from("company_sources")
        .upsert(sourceRows, {
          onConflict: "company_id,url",
        });

      if (sourceError) {
        throw new Error(
          `Failed to insert sources for ${company.company_name}: ${sourceError.message}`,
        );
      }
    }

    console.log(`${company.company_name}`);
  }

  console.log("\nDatabase seed completed successfully!");
}

seed().catch((error) => {
  console.error("\nSeed failed:");
  console.error(error);
  process.exit(1);
});
