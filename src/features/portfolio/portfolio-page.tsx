import Link from "next/link"
import { ArrowUpRight, Check, Github, Linkedin, Mail, MoveDown, Sparkles } from "lucide-react"
import { Button } from "@/shared/components/button"
import { siteConfig } from "@/shared/config/site"
import {
  engineeringPrinciples,
  faqs,
  impactPillars,
  processSteps,
  projects,
  technologies,
} from "./data"
import { CalendlyWidget } from "./calendly-widget"
import { HeroInteraction } from "./hero-interaction"
import { ScrollMotion } from "./scroll-motion"
import { ProjectCarousel } from "./project-carousel"

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow text-muted">{children}</p>
}

export function PortfolioPage() {
  return (
    <main className="overflow-hidden">
      <ScrollMotion />
      <nav className="site-nav mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link href="#top" className="brand-mark text-sm font-bold tracking-tight">
          PS<span className="text-accent">.</span>
        </Link>
        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          <Link href="#work" className="nav-link">
            Work
          </Link>
          <Link href="#impact" className="nav-link">
            Impact
          </Link>
          <Link href="#leadership" className="nav-link">
            Leadership
          </Link>
          <Link href="#about" className="nav-link">
            About
          </Link>
        </div>
        <Button asChild size="sm">
          <a href={siteConfig.cvPath} download>
            Download CV <ArrowUpRight size={14} />
          </a>
        </Button>
      </nav>
      <section
        id="top"
        className="hero-section grid-lines mx-auto max-w-7xl border-b border-line px-6 pb-16 pt-14 lg:px-10 lg:pb-24 lg:pt-20"
      >
        <HeroInteraction />
        <div className="hero-content">
          <div className="rise-in mb-7 inline-flex items-center gap-3 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-2 text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="eyebrow">{siteConfig.availability}</span>
          </div>
          <h1 className="rise-in-delay display max-w-5xl text-[clamp(4rem,10vw,9.5rem)] font-semibold">
            Frontend systems
            <br />
            <span className="gradient-text">that move products</span>
            <br />
            forward.
          </h1>
          <div className="rise-in-delay mt-9 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <p className="max-w-md text-lg leading-relaxed text-muted">{siteConfig.positioning}</p>
            <div className="hero-actions flex items-center gap-4">
              <Button asChild size="lg">
                <a href="#work">
                  See selected work <MoveDown size={16} />
                </a>
              </Button>
              <a
                href={siteConfig.cvPath}
                download
                className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium underline decoration-line underline-offset-8 hover:decoration-ink"
              >
                Download CV <ArrowUpRight size={14} />
              </a>
              <a
                href="#about"
                className="whitespace-nowrap text-sm font-medium underline decoration-line underline-offset-8 hover:decoration-ink"
              >
                More about me
              </a>
            </div>
          </div>
        </div>
        <div className="hero-meta eyebrow text-muted">
          <span>Senior frontend engineer / team lead</span>
          <span>React · TypeScript · Product systems</span>
        </div>
      </section>
      <section
        id="impact"
        data-reveal="section"
        className="mx-auto max-w-7xl border-b border-line px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel>Why teams hire me</SectionLabel>
            <h2 className="display mt-5 max-w-sm text-5xl font-semibold md:text-6xl">
              Senior thinking, useful output.
            </h2>
          </div>
          <div className="impact-grid grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {impactPillars.map((pillar) => (
              <div
                key={pillar.number}
                className={`impact-card impact-card-${pillar.accent} flex min-h-[18rem] flex-col justify-between bg-paper p-7 transition-transform duration-500 hover:-translate-y-1 md:p-8`}
              >
                <span className="font-mono text-sm text-muted">{pillar.number}</span>
                <div>
                  <h3 className="text-xl font-semibold">{pillar.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        id="work"
        data-reveal="section"
        className="section-work mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <SectionLabel>Selected work / 03</SectionLabel>
            <h2 className="display mt-5 text-5xl font-semibold md:text-7xl">Built for real use.</h2>
          </div>
          <p className="max-w-xs leading-relaxed text-muted">
            Production products, resilient systems and teams that can keep moving after I leave the
            keyboard.
          </p>
        </div>
        <ProjectCarousel projects={projects} />
      </section>
      <section
        id="leadership"
        data-reveal="section"
        className="border-y border-line bg-ink text-white"
      >
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel>How I lead</SectionLabel>
              <h2 className="display mt-5 max-w-sm text-5xl font-semibold text-white md:text-6xl">
                Calm direction for complex work.
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-xl leading-relaxed text-white/75">
                I bring structure to ambiguous problems, keep decisions visible and help teams
                balance speed with the quality that makes the next release easier.
              </p>
              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                {engineeringPrinciples.map((principle, index) => (
                  <div
                    key={principle}
                    className="bg-white/[0.04] p-6 transition-colors hover:bg-white/[0.1]"
                  >
                    <span className="font-mono text-xs text-white/40">0{index + 1}</span>
                    <p className="mt-10 text-lg font-medium text-white/85">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="process" data-reveal="section" className="border-y border-line bg-soft">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <SectionLabel>How we work</SectionLabel>
              <h2 className="display mt-5 max-w-sm text-5xl font-semibold md:text-6xl">
                Clear steps. No theatre.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {processSteps.map((step) => (
                <div key={step.number} className="bg-paper p-7 transition-colors hover:bg-white">
                  <span className="font-mono text-sm text-muted">{step.number}</span>
                  <h3 className="mt-12 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="about" data-reveal="section" className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1fr_1.5fr] lg:px-10 lg:py-28">
          <div>
            <SectionLabel>About me</SectionLabel>
            <h2 className="display mt-5 text-5xl font-semibold text-white md:text-7xl">
              Senior enough to lead. Curious enough to keep learning.
            </h2>
          </div>
          <div className="max-w-xl lg:pt-12">
            <p className="text-xl leading-relaxed text-white/75">
              For the last five years I&apos;ve worked on production React, TypeScript and React
              Native applications — including a browser extension used by around 300k users.
            </p>
            <p className="mt-6 leading-relaxed text-white/60">
              I care about the details that make software last: a thoughtful component model,
              accessible interaction, clear communication and a team that can confidently ship the
              next thing.
            </p>
            <div className="mt-10 grid gap-3 text-sm sm:grid-cols-2">
              {[
                "React & TypeScript",
                "Design systems",
                "Accessibility & UX",
                "Performance",
                "REST API integration",
                "Mentoring & leadership",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/80">
                  <Check size={15} className="text-accent" />
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-14 border-t border-white/15 pt-7">
              <p className="eyebrow text-white/45">Tools I work with</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology.name}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-2 pl-2 pr-3 text-xs text-white/75"
                  >
                    <span
                      className={`flex h-6 min-w-6 items-center justify-center rounded-full px-1 text-[9px] font-bold ${technology.tone}`}
                    >
                      {technology.icon ? (
                        <img src={technology.icon} alt="" className="h-3.5 w-3.5" />
                      ) : (
                        technology.mark
                      )}
                    </span>
                    {technology.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="faq"
        data-reveal="section"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="display mt-5 max-w-sm text-5xl font-semibold md:text-6xl">
              A few useful answers.
            </h2>
          </div>
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold marker:content-none">
                  <span>{faq.question}</span>
                  <span className="text-2xl font-light text-muted transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section
        id="contact"
        data-reveal="section"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32"
      >
        <div className="rounded-3xl bg-accent p-8 md:p-14 lg:p-20">
          <div className="flex max-w-4xl flex-col justify-between gap-12 md:flex-row md:items-end">
            <div>
              <div className="mb-8 flex items-center gap-3">
                <Sparkles size={18} />
                <span className="eyebrow">Have a good problem?</span>
              </div>
              <h2 className="display max-w-3xl text-5xl font-semibold md:text-8xl">
                Let&apos;s make it
                <br />
                useful.
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="mb-6 leading-relaxed">
                Tell me what you&apos;re building, where you&apos;re stuck, or what could work
                better.
              </p>
              <Button asChild variant="default" size="lg">
                <a
                  href={`mailto:${siteConfig.email}?subject=Project%20enquiry&body=Hi%20Pawel%2C%0A%0AI%27d%20like%20to%20talk%20about...`}
                >
                  Tell me about the project <ArrowUpRight size={17} />
                </a>
              </Button>
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-block text-sm font-medium underline underline-offset-8"
              >
                Or book a short call ↗
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-line px-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between lg:px-10">
        <p>© {new Date().getFullYear()} Pawel Szydlo</p>
        <div className="flex items-center gap-5">
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={siteConfig.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={`mailto:${siteConfig.email}`} aria-label="Email">
            <Mail size={17} />
          </a>
        </div>
        <p>React · TypeScript · Product thinking</p>
      </footer>
      <CalendlyWidget />
    </main>
  )
}
