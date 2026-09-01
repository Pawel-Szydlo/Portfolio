"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { Project } from "./data";

function FallbackVisual({ project, large }: { project: Project; large: boolean }) {
  const background = project.accent === "lime" ? "bg-[#dbeafe]" : project.accent === "blue" ? "bg-[#ddd6fe]" : "bg-[#cffafe]";
  return (
    <div className={`relative flex ${large ? "aspect-[16/8]" : "aspect-[4/3]"} items-end overflow-hidden rounded-2xl p-6 ${background}`}>
      <div className="absolute right-6 top-6 text-xs font-mono text-ink/50">{project.index} / 03</div>
      <div className="relative w-full rounded-xl border border-black/10 bg-white/35 p-5 shadow-[0_18px_40px_rgba(20,32,30,.08)] backdrop-blur-sm">
        <div className="mb-4 flex items-center justify-between"><div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-ink/50" /><span className="h-2 w-2 rounded-full bg-ink/20" /><span className="h-2 w-2 rounded-full bg-ink/20" /></div><span className="h-2 w-14 rounded-full bg-ink/15" /></div>
        <div className="grid grid-cols-[.7fr_1.3fr] gap-3"><div className="space-y-2 rounded-lg bg-white/35 p-3"><div className="h-2 w-3/4 rounded-full bg-ink/30" /><div className="h-2 w-1/2 rounded-full bg-ink/10" /><div className="mt-6 h-10 rounded bg-ink/10" /></div><div className="rounded-lg bg-white/55 p-3"><div className="mb-3 h-2 w-1/3 rounded-full bg-ink/35" /><div className="h-12 rounded border border-ink/10 bg-white/45" /><div className="mt-3 flex gap-2"><div className="h-5 w-12 rounded bg-ink/15" /><div className="h-5 w-20 rounded bg-ink/10" /></div></div></div>
      </div>
    </div>
  );
}

export function ProjectVisual({ project, large = false }: { project: Project; large?: boolean }) {
  const [active, setActive] = useState(0);
  const slides = project.media;
  const hasImages = slides.some((slide) => slide.src.trim().length > 0);
  const goTo = (index: number) => setActive((index + slides.length) % slides.length);

  useEffect(() => {
    if (slides.length < 2 || !hasImages) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5200);
    return () => window.clearInterval(timer);
  }, [hasImages, slides.length]);

  if (!hasImages) return <div className="relative"><FallbackVisual project={project} large={large} /><div className="pointer-events-none absolute bottom-5 left-6 rounded-full bg-white/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[.12em] text-ink/60">Add product screens in constants.ts</div></div>;

  return <div className="relative" role="region" aria-roledescription="carousel" aria-label={`${project.title} screenshots`}><div className={`relative overflow-hidden rounded-2xl bg-[#0d0f1b] shadow-[0_16px_40px_rgba(16,21,43,.14)] ${large ? "aspect-[16/8]" : "aspect-[4/3]"}`}>{slides.map((slide, index) => <div key={slide.label} className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${index === active ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden={index !== active}>{slide.src ? <div className="flex h-full w-full items-center justify-center p-2 sm:p-4"><img src={slide.src} alt={slide.alt} className="carousel-photo max-h-full max-w-full object-contain" loading={index === 0 ? "eager" : "lazy"} /></div> : <FallbackVisual project={project} large={large} />}<div className="absolute bottom-5 left-5 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-ink">{slide.label}</div></div>)}</div><div className="absolute bottom-5 right-5 flex gap-2"><button type="button" onClick={(event) => { event.preventDefault(); event.stopPropagation(); goTo(active - 1); }} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-ink transition hover:bg-white" aria-label="Previous image"><ChevronLeft size={16} /></button><button type="button" onClick={(event) => { event.preventDefault(); event.stopPropagation(); goTo(active + 1); }} className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-ink transition hover:bg-white" aria-label="Next image"><ChevronRight size={16} /></button></div><div className="absolute left-5 top-5 flex gap-1.5" aria-label="Choose image">{slides.map((slide, index) => <button key={slide.label} type="button" onClick={(event) => { event.preventDefault(); event.stopPropagation(); goTo(index); }} className={`h-1.5 rounded-full transition-all ${index === active ? "w-7 bg-ink" : "w-1.5 bg-ink/35"}`} aria-label={`Show ${slide.label}`} aria-current={index === active} />)}</div></div>;
}
