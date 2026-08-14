'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [text, setText] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return
    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let mouseX = -100
    let mouseY = -100
    let cursorX = -100
    let cursorY = -100

    const updateCursor = () => {
      if (!cursorRef.current) return
      
      // Smooth follow
      cursorX += (mouseX - cursorX) * 0.2
      cursorY += (mouseY - cursorY) * 0.2
      
      cursorRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`
      requestAnimationFrame(updateCursor)
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true)
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null
      
      if (cursorTarget) {
        const cursorText = cursorTarget.getAttribute('data-cursor')
        if (cursorText) {
          setText(cursorText)
          setIsActive(true)
        } else {
           setText('')
           setIsActive(true)
        }
      } else if (target.closest('a') || target.closest('button')) {
        setText('')
        setIsActive(true) // Just expand
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-cursor]') || target.closest('a') || target.closest('button')) {
        setText('')
        setIsActive(false)
      }
    }

    const onMouseLeave = () => setIsVisible(false)
    const onMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', onMouseMove)
    document.body.addEventListener('mouseover', onMouseOver)
    document.body.addEventListener('mouseout', onMouseOut)
    document.body.addEventListener('mouseleave', onMouseLeave)
    document.body.addEventListener('mouseenter', onMouseEnter)
    
    // Add body class to hide default cursor
    document.body.classList.add('has-custom-cursor')

    const rafId = requestAnimationFrame(updateCursor)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.body.removeEventListener('mouseover', onMouseOver)
      document.body.removeEventListener('mouseout', onMouseOut)
      document.body.removeEventListener('mouseleave', onMouseLeave)
      document.body.removeEventListener('mouseenter', onMouseEnter)
      document.body.classList.remove('has-custom-cursor')
      cancelAnimationFrame(rafId)
    }
  }, [isVisible])

  if (typeof window !== 'undefined') {
    if (window.matchMedia('(pointer: coarse)').matches) return null
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null
  }

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor-dot ${isActive ? 'active' : ''}`}
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {text}
    </div>
  )
}
