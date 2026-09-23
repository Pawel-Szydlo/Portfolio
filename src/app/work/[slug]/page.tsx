import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Check, Mail } from "lucide-react"
import { notFound } from "next/navigation"
import { Button } from "@/shared/components/button"
import { siteConfig } from "@/shared/config/site"
import { projects } from "@/features/portfolio/data"
import { ProjectVisual } from "@/features/portfolio/project-visual"
import { TechnologyBadge } from "@/features/portfolio/technology-badge"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  return {
    title: project ? `${project.title} — Pawel Szydlo` : "Project — Pawel Szydlo",
    description: project?.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)
  if (!project) notFound()
  return (
    <main>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-10">
        <Link href="/" className="text-sm font-bold tracking-tight">
          PS<span className="text-muted">.</span>
        </Link>
        <Button asChild size="sm">
          <a href={`mailto:${siteConfig.email}?subject=Project%20enquiry`}>
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </Button>
      </nav>
      <article className="mx-auto max-w-7xl px-6 pb-24 pt-12 lg:px-10 lg:pt-24">
        <Link
          href="/#work"
          className="mb-14 inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
        >
          <ArrowLeft size={15} /> Back to selected work
        </Link>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow text-muted">{project.type}</p>
            <h1 className="display mt-5 text-6xl font-semibold md:text-8xl">{project.title}</h1>
            <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted">
              {project.fullDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TechnologyBadge key={tag} name={tag} />
              ))}
            </div>
          </div>
          <ProjectVisual project={project} large />
        </div>
        <div className="mt-24 grid gap-12 border-t border-line pt-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow text-muted">Impact</p>
            <p className="mt-4 text-xl font-semibold">{project.impact}</p>
            <p className="mt-8 eyebrow text-muted">My role</p>
            <p className="mt-4 text-xl font-semibold">{project.role}</p>
          </div>
          <div>
            <p className="eyebrow text-muted">Team context</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">{project.teamContext}</p>
            <p className="mt-10 eyebrow text-muted">Leadership contribution</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">{project.leadership}</p>
            <p className="mt-10 eyebrow text-muted">What changed</p>
            <div className="mt-5 grid gap-4">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3 leading-relaxed">
                  <Check size={17} className="mt-1 shrink-0 text-ink" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20 grid gap-12 border-t border-line pt-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="eyebrow text-muted">How I approached it</p>
          </div>
          <div className="grid gap-8">
            {project.approach.map((item, index) => (
              <div key={item} className="flex gap-5">
                <span className="font-mono text-sm text-muted">0{index + 1}</span>
                <p className="max-w-2xl text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="mt-16 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-8"
          >
            {project.linkLabel} <ArrowUpRight size={14} />
          </a>
        )}
        <div className="mt-24 rounded-3xl bg-accent p-8 md:p-14">
          <p className="eyebrow">Have a similar challenge?</p>
          <div className="mt-5 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="display text-5xl font-semibold md:text-7xl">
              Let&apos;s talk
              <br />
              about it.
            </h2>
            <Button asChild size="lg">
              <a href={`mailto:${siteConfig.email}?subject=Project%20enquiry`}>
                <Mail size={16} /> Start a conversation
              </a>
            </Button>
          </div>
        </div>
      </article>
    </main>
  )
}
