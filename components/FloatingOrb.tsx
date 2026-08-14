'use client'

import { useEffect, useRef } from 'react'

export default function FloatingOrb() {
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame: number
    let t = 0

    const animate = () => {
      t += 0.0008

      // Orb 1 — slow drift, top-right quadrant
      if (orb1Ref.current) {
        const x = Math.sin(t * 1.1) * 40
        const y = Math.cos(t * 0.9) * 30
        orb1Ref.current.style.transform = `translate(${x}px, ${y}px)`
      }

      // Orb 2 — counter-phase, bottom-left quadrant
      if (orb2Ref.current) {
        const x = Math.cos(t * 0.7) * 35
        const y = Math.sin(t * 1.3) * 25
        orb2Ref.current.style.transform = `translate(${x}px, ${y}px)`
      }

      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="floating-orbs" aria-hidden="true">
      <div ref={orb1Ref} className="floating-orb floating-orb--1" />
      <div ref={orb2Ref} className="floating-orb floating-orb--2" />
    </div>
  )
}
