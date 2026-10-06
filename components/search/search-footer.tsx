export function SearchFooter() {
  return (
    <div className="flex h-11 items-center justify-between border-t bg-muted/20 px-4 text-[11px] text-muted-foreground">
      <div className="flex items-center gap-3">
        <span className="hidden items-center gap-1 sm:flex">
          <kbd className="rounded border bg-background px-1.5 py-0.5 font-mono">
            ↑
          </kbd>
          <kbd className="rounded border bg-background px-1.5 py-0.5 font-mono">
            ↓
          </kbd>
          Navigate
        </span>

        <span className="flex items-center gap-1">
          <kbd className="rounded border bg-background px-1.5 py-0.5 font-mono">
            ↵
          </kbd>
          Select
        </span>
      </div>

      <span className="flex items-center gap-1">
        <kbd className="rounded border bg-background px-1.5 py-0.5 font-mono">
          Esc
        </kbd>
        Close
      </span>
    </div>
  );
}
