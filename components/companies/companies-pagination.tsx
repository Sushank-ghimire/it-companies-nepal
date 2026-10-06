import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface CompaniesPaginationProps {
  currentPage: number;
  totalPages: number;
}

function createPageHref(page: number) {
  return page === 1 ? "/companies" : `/companies?page=${page}`;
}

export function CompaniesPagination({
  currentPage,
  totalPages,
}: CompaniesPaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages: (number | "ellipsis")[] = [];

  if (totalPages <= 7) {
    for (let page = 1; page <= totalPages; page++) {
      pages.push(page);
    }
  } else {
    pages.push(1);

    if (currentPage > 4) {
      pages.push("ellipsis");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let page = start; page <= end; page++) {
      pages.push(page);
    }

    if (currentPage < totalPages - 3) {
      pages.push("ellipsis");
    }

    pages.push(totalPages);
  }

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          {currentPage > 1 ? (
            <PaginationPrevious href={createPageHref(currentPage - 1)} />
          ) : (
            <span className="pointer-events-none opacity-40">
              <PaginationPrevious href="#" />
            </span>
          )}
        </PaginationItem>

        {pages.map((page, index) => {
          if (page === "ellipsis") {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={page}>
              <PaginationLink isActive={page === currentPage}>
                <Link href={createPageHref(page)}>{page}</Link>
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          {currentPage < totalPages ? (
            <PaginationNext href={createPageHref(currentPage + 1)} />
          ) : (
            <span className="pointer-events-none opacity-40">
              <PaginationNext href="#" />
            </span>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
