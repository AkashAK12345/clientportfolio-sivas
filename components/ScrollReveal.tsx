'use client'

import { useEffect, useRef, useState } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  animationClass?: string
  visibleClass?: string
  threshold?: number
  rootMargin?: string
}

export default function ScrollReveal({
  children,
  className = '',
  animationClass = 'reveal-base',
  visibleClass = 'reveal-visible',
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  ...rest
}: Props) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(el)

    return () => {
      if (el) observer.disconnect()
    }
  }, [threshold, rootMargin])

  // Optional: check prefers-reduced-motion in JS to instantly show, though CSS handles it with !important
  return (
    <div
      ref={ref}
      className={`${className} ${animationClass} ${isVisible ? visibleClass : ''}`}
      {...rest}
    >
      {children}
    </div>
  )
}
