export function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-fg-subtle uppercase">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-border-strong" />
      <span>{label}</span>
    </div>
  );
}
