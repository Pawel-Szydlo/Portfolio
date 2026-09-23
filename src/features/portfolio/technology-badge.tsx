import { technologies } from "./data"

export function TechnologyBadge({ name }: { name: string }) {
  const technology = technologies.find((item) => item.name === name)
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs text-muted">
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full px-1 text-[8px] font-bold ${technology?.tone ?? "bg-soft text-ink"}`}
      >
        {technology?.icon ? (
          <img src={technology.icon} alt="" className="h-3 w-3" />
        ) : (
          (technology?.mark ?? "")
        )}
      </span>
      {name}
    </span>
  )
}
