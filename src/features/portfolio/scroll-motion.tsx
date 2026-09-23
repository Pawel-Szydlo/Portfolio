"use client"

import { useEffect } from "react"

export function ScrollMotion() {
  useEffect(() => {
    const root = document.documentElement
    root.classList.add("motion-ready")
    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return () => root.classList.remove("motion-ready")
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" },
    )

    elements.forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
      root.classList.remove("motion-ready")
    }
  }, [])

  return null
}
