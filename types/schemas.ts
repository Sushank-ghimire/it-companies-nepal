import type { Database } from "@/types/database.types";

export type Company =
  Database["public"]["Tables"]["companies"]["Row"];

export type CompanyService =
  Database["public"]["Tables"]["company_services"]["Row"];

export type CompanySource =
  Database["public"]["Tables"]["company_sources"]["Row"];

export type Service =
  Database["public"]["Tables"]["services"]["Row"];

export type CompanyDetail = Company & {
  company_services: Array<
    CompanyService & {
      services: Service | null;
    }
  >;
  company_sources: CompanySource[];
};
