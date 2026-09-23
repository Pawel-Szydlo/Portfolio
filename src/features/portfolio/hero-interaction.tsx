"use client"

import { useEffect, useRef } from "react"

const layers = [
  { label: "product", value: "clarity", tone: "hero-panel-lime" },
  { label: "system", value: "consistency", tone: "hero-panel-blue" },
  { label: "team", value: "momentum", tone: "hero-panel-peach" },
]

export function HeroInteraction() {
  const rootRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<number | null>(null)
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const root = rootRef.current
    const panel = panelRef.current
    if (!root || !panel || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const updatePanel = () => {
      const { x, y } = targetRef.current
      panel.style.setProperty("--panel-x", `${x}px`)
      panel.style.setProperty("--panel-y", `${y}px`)
      frameRef.current = null
    }

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = root.getBoundingClientRect()
      targetRef.current = {
        x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 16,
        y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 16,
      }
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(updatePanel)
    }

    const resetPanel = () => {
      targetRef.current = { x: 0, y: 0 }
      if (frameRef.current === null) frameRef.current = window.requestAnimationFrame(updatePanel)
    }

    root.addEventListener("pointermove", handlePointerMove)
    root.addEventListener("pointerleave", resetPanel)
    return () => {
      root.removeEventListener("pointermove", handlePointerMove)
      root.removeEventListener("pointerleave", resetPanel)
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <div ref={rootRef} className="hero-interaction" aria-hidden="true">
      <div className="hero-signal hero-signal-one" />
      <div className="hero-signal hero-signal-two" />
      <div ref={panelRef} className="hero-system-panel">
        <div className="hero-panel-topline">
          <span className="hero-panel-kicker">Frontend system / 001</span>
          <span className="hero-panel-live">Live</span>
        </div>
        <div className="hero-panel-heading">
          <span>Build</span>
          <strong>with intent.</strong>
        </div>
        <div className="hero-panel-stack">
          {layers.map((layer, index) => (
            <div key={layer.label} className={`hero-panel-row ${layer.tone}`}>
              <span className="hero-panel-index">0{index + 1}</span>
              <span className="hero-panel-label">{layer.label}</span>
              <span className="hero-panel-value">{layer.value}</span>
            </div>
          ))}
        </div>
        <div className="hero-panel-footer">
          <span>React</span>
          <span>TypeScript</span>
          <span>Leadership</span>
        </div>
      </div>
      <div className="hero-panel-note hero-panel-note-top">ship / learn / improve</div>
      <div className="hero-panel-note hero-panel-note-bottom">01 — 03</div>
    </div>
  )
}
