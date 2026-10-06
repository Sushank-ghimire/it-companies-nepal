import { Building2 } from "lucide-react";
import { CompanyCard } from "./company-card";
import { CompaniesPagination } from "./companies-pagination";
import { Company } from "@/types/schemas";

interface CompaniesProps {
  companies: Company[];
  currentPage: number;
  pageSize: number;
  total: number;
}

export default function Companies({
  companies,
  currentPage,
  pageSize,
  total,
}: CompaniesProps) {
  const totalPages = Math.ceil(total / pageSize);

  const start = total === 0 ? 0 : (currentPage - 1) * pageSize + 1;

  const end = Math.min(currentPage * pageSize, total);

  return (
    <div className="py-4 sm:py-6">
      <header className="mb-8">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
          <Building2 className="size-3.5" />
          Directory
        </div>

        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              IT Companies in Nepal
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Explore technology companies across Nepal, including their
              locations, services, and company information.
            </p>
          </div>

          {total > 0 && (
            <p className="shrink-0 text-sm text-muted-foreground">
              {start}–{end} of {total} companies
            </p>
          )}
        </div>
      </header>

      {companies.length > 0 ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>

          <CompaniesPagination
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      ) : (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-border/70 px-6 text-center">
          <div className="flex size-11 items-center justify-center rounded-xl bg-muted">
            <Building2 className="size-5 text-muted-foreground" />
          </div>

          <h2 className="mt-4 text-base font-semibold">No companies found</h2>

          <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
            There are no companies available for this page.
          </p>
        </div>
      )}
    </div>
  );
}
