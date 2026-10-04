"use client";

export default function Loading() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-background">
      <div className="flex flex-col items-center">
        <div className="relative flex size-12 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-xl border border-border/60 opacity-40" />
          <div className="relative flex size-11 items-center justify-center rounded-xl bg-foreground text-background shadow-sm">
            <span className="text-sm font-bold tracking-[-0.04em]">IT</span>
          </div>
        </div>

        <div className="mt-5 h-1 w-16 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-foreground" />
        </div>

        <style jsx>{`
          @keyframes loading {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(200%);
            }
          }
        `}
        </style>
      </div>
    </div>
  );
}
