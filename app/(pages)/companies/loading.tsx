import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Skeleton className="h-10 w-56" />
        <Skeleton className="h-5 w-full max-w-xl" />
      </div>

      <div className="flex items-center justify-between gap-4">
        <Skeleton className="h-10 w-full max-w-sm rounded-lg" />
        <Skeleton className="hidden h-9 w-24 rounded-lg sm:block" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="rounded-2xl border border-border/60 p-5">
            <div className="flex items-start justify-between gap-4">
              <Skeleton className="size-11 rounded-xl" />
              <Skeleton className="h-5 w-16 rounded-full" />
            </div>

            <Skeleton className="mt-5 h-5 w-3/4" />
            <Skeleton className="mt-3 h-4 w-1/2" />

            <div className="mt-6 flex gap-2">
              <Skeleton className="h-6 w-20 rounded-full" />
              <Skeleton className="h-6 w-24 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
