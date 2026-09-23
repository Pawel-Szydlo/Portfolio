"use client"

import Link from "next/link"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import type { Project } from "./data"
import { ProjectVisual } from "./project-visual"
import { TechnologyBadge } from "./technology-badge"

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const rootRef = useRef<HTMLElement>(null)
  const project = projects[activeIndex]

  const goTo = (index: number) => setActiveIndex((index + projects.length) % projects.length)

  useEffect(() => {
    const root = rootRef.current
    if (!root || !("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.2,
    })
    observer.observe(root)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible || isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return
    const timer = window.setInterval(() => goTo(activeIndex + 1), 6500)
    return () => window.clearInterval(timer)
  }, [activeIndex, isPaused, isVisible])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") goTo(activeIndex + 1)
      if (event.key === "ArrowLeft") goTo(activeIndex - 1)
    }
    const root = rootRef.current
    root?.addEventListener("keydown", handleKeyDown)
    return () => root?.removeEventListener("keydown", handleKeyDown)
  }, [activeIndex])

  return (
    <section
      ref={rootRef}
      className="project-carousel"
      aria-roledescription="carousel"
      aria-label="Selected work"
      tabIndex={0}
      onPointerEnter={() => setIsPaused(true)}
      onPointerLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="project-carousel-stage">
        <div key={project.slug} className="project-carousel-slide">
          <div className="project-carousel-visual group">
            <ProjectVisual project={project} />
          </div>
          <div className="project-carousel-copy" aria-live="polite">
            <div className="flex items-center justify-between gap-4">
              <p className="eyebrow text-muted">{project.type}</p>
              <span className="font-mono text-xs text-muted">
                {project.index} / {String(projects.length).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-3 text-4xl font-semibold md:text-6xl">{project.title}</h3>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{project.impact}</p>
            <div className="project-metrics mt-6 grid max-w-xl grid-cols-3 gap-2">
              {project.metrics.map((metric) => (
                <div key={metric} className="rounded-xl border border-line bg-paper px-3 py-3">
                  <p className="font-mono text-[10px] uppercase tracking-[.08em] text-muted">
                    Proof
                  </p>
                  <p className="mt-2 text-sm font-semibold">{metric}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
              <span className="font-semibold text-ink">{project.role}.</span> {project.teamContext}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TechnologyBadge key={tag} name={tag} />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 text-sm font-medium underline decoration-line underline-offset-8 hover:decoration-ink"
              >
                Read case study <ArrowUpRight size={14} />
              </Link>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-muted hover:text-ink"
                >
                  View product ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="project-carousel-controls">
        <div className="project-carousel-dots" role="tablist" aria-label="Choose project">
          {projects.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Show ${item.title}`}
              onClick={() => goTo(index)}
              className={index === activeIndex ? "is-active" : ""}
            >
              <span>{item.index}</span>
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="project-carousel-arrow"
            onClick={() => goTo(activeIndex - 1)}
            aria-label="Previous project"
          >
            <ChevronLeft size={17} />
          </button>
          <button
            type="button"
            className="project-carousel-arrow"
            onClick={() => goTo(activeIndex + 1)}
            aria-label="Next project"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </section>
  )
}
