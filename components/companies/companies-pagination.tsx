"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MoreHorizontal } from "lucide-react";

interface CompaniesPaginationProps {
  currentPage: number;
  totalPages: number;
  province?: string | null;
  district?: string | null;
}

type PageItem = number | "ellipsis";

function createPageUrl({
  page,
  province,
  district,
}: {
  page: number;
  province?: string | null;
  district?: string | null;
}) {
  const params = new URLSearchParams();

  if (province) {
    params.set("province", province);
  }

  if (district) {
    params.set("district", district);
  }

  if (page > 1) {
    params.set("page", String(page));
  }

  const query = params.toString();

  return query ? `/companies?${query}` : "/companies";
}

function getPageNumbers(currPage: number, totalPages: number): PageItem[] {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, idx) => idx + 1);
  }

  if (currPage <= 3) return [1, 2, 3, "ellipsis", totalPages];
  if (currPage >= totalPages - 2)
    return [1, "ellipsis", totalPages - 2, totalPages - 1, totalPages];
  return [
    1,
    "ellipsis",
    currPage - 1,
    currPage,
    currPage + 1,
    "ellipsis",
    totalPages,
  ];
}

export function CompaniesPagination({
  currentPage,
  totalPages,
  province,
  district,
}: CompaniesPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={createPageUrl({
              page: Math.max(currentPage - 1, 1),
              province,
              district,
            })}
            aria-disabled={currentPage === 1}
            className={
              currentPage === 1 ? "pointer-events-none opacity-50" : undefined
            }
          />
        </PaginationItem>

        {pages.map((page, index) => {
          if (page === "ellipsis") {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <span
                  aria-hidden="true"
                  className="flex size-9 items-center justify-center"
                >
                  <MoreHorizontal className="size-4 text-muted-foreground" />
                </span>
              </PaginationItem>
            );
          }
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={createPageUrl({
                  page,
                  province,
                  district,
                })}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          <PaginationNext
            href={createPageUrl({
              page: Math.min(currentPage + 1, totalPages),
              province,
              district,
            })}
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages
                ? "pointer-events-none opacity-50"
                : undefined
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
