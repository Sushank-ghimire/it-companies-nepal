"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export function CompanyBackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
      Back to companies
    </button>
  );
}
