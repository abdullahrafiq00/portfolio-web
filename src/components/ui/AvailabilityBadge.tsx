export function AvailabilityBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-3.5 py-1.5 font-mono text-xs text-fg-muted backdrop-blur-sm">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
      Available for opportunities
    </div>
  );
}
