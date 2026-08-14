'use client'

import { useRef, useEffect } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

export default function MagneticCTA({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect()
      // Calculate mouse position relative to the center of the element
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      
      // Limit movement max 10px
      const limit = 10
      const moveX = (x / (rect.width / 2)) * limit
      const moveY = (y / (rect.height / 2)) * limit

      node.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    const handleMouseLeave = () => {
      node.style.transform = `translate(0px, 0px)`
    }

    node.addEventListener('mousemove', handleMouseMove)
    node.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      node.removeEventListener('mousemove', handleMouseMove)
      node.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div ref={ref} className={`magnetic-cta ${className}`}>
      {children}
    </div>
  )
}
