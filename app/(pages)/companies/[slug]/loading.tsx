import { Skeleton } from "@/components/ui/skeleton";

function DetailRow() {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <Skeleton className="h-3 w-16" />
      <Skeleton className="h-4 w-24" />
    </div>
  );
}

export default function Loading() {
  return (
    <article className="py-6 sm:py-10">
      <div className="flex items-center gap-2">
        <Skeleton className="size-4 rounded-sm" />
        <Skeleton className="h-4 w-32" />
      </div>

      <div className="mt-8 overflow-hidden rounded-3xl border border-border/60 bg-background">
        <div className="border-b border-border/60 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-4">
              <Skeleton className="size-14 shrink-0 rounded-2xl sm:size-16" />

              <div className="min-w-0">
                <Skeleton className="h-8 w-56 max-w-full sm:h-9 sm:w-72" />
                <div className="mt-3 flex items-center gap-2">
                  <Skeleton className="size-4 rounded-sm" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-9 w-28 rounded-full" />
              <Skeleton className="size-9 rounded-full" />
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-[1fr_300px]">
          <div className="min-w-0 p-6 sm:p-8 lg:p-10">
            <section>
              <Skeleton className="h-4 w-12" />

              <div className="mt-5 space-y-2">
                <Skeleton className="h-4 w-full max-w-3xl" />
                <Skeleton className="h-4 w-[94%] max-w-3xl" />
                <Skeleton className="h-4 w-[82%] max-w-3xl" />
                <Skeleton className="h-4 w-[68%] max-w-3xl" />
              </div>
            </section>

            <section className="mt-10">
              <Skeleton className="h-4 w-16" />

              <div className="mt-4 flex flex-wrap gap-2">
                <Skeleton className="h-8 w-40 rounded-full" />
                <Skeleton className="h-8 w-32 rounded-full" />
                <Skeleton className="h-8 w-28 rounded-full" />
                <Skeleton className="h-8 w-44 rounded-full" />
                <Skeleton className="h-8 w-36 rounded-full" />
              </div>
            </section>

            <section className="mt-10">
              <Skeleton className="h-4 w-16" />

              <div className="mt-4 space-y-2">
                <Skeleton className="h-10 w-full rounded-lg" />
                <Skeleton className="h-10 w-full rounded-lg" />
                <Skeleton className="h-10 w-full rounded-lg" />
              </div>
            </section>
          </div>

          <aside className="border-t border-border/60 bg-muted/10 p-6 sm:p-8 lg:border-l lg:border-t-0">
            <Skeleton className="h-4 w-36" />

            <div className="mt-5 divide-y divide-border/60">
              <DetailRow />
              <DetailRow />
              <DetailRow />
              <DetailRow />
              <DetailRow />
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
