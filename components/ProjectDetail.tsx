'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/lib/projects'
import ScrollReveal from './ScrollReveal'
import MagneticCTA from './MagneticCTA'

interface Props {
  project: Project
  images: string[]
}

export default function ProjectDetail({ project, images }: Props) {
  const [activePage, setActivePage] = useState(1)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.getAttribute('data-page-index')
            if (idx) setActivePage(Number(idx))
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )

    const elements = document.querySelectorAll('.project-image-wrapper')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <article>
      {/* ── Header ──────────────────────────────── */}
      <div className="container project-detail-header fade-up">
        <MagneticCTA>
          <Link href="/projects" className="project-detail-back">
          ← All Projects
          </Link>
        </MagneticCTA>

        <div className="project-detail-meta">
          <span className="t-label">{project.index}</span>
        </div>

        <h1 className="project-detail-title">{project.title}</h1>
        {project.subtitle && (
          <p className="project-detail-subtitle">{project.subtitle}</p>
        )}

        {project.description && (
          <p className="project-detail-description">{project.description}</p>
        )}

        <div className="project-detail-stats">
          <div className="project-detail-stat">
            <span className="project-detail-stat-label">Pages</span>
            <span className="project-detail-stat-value">{project.pageCount}</span>
          </div>
          <div className="project-detail-stat">
            <span className="project-detail-stat-label">Collection</span>
            <span className="project-detail-stat-value" style={{ fontSize: '1.25rem', fontFamily: 'var(--sans)', fontWeight: 300, paddingTop: '0.35rem' }}>
              {project.title}
            </span>
          </div>
        </div>
      </div>

      {/* ── Image strip — all pages in order ────── */}
      <div style={{ background: 'var(--paper-warm)', padding: 'clamp(2rem, 4vw, 4rem) 0' }}>
        <div className="project-image-strip">
        {images.map((src, idx) => {
          const pageNum = String(idx + 1).padStart(2, '0')
          const loading = idx < 3 ? 'eager' : 'lazy'

          return (
            <ScrollReveal
              key={src}
              className="project-image-wrapper"
              animationClass="reveal-image"
              data-page-index={idx + 1}
              visibleClass="reveal-image-visible"
              threshold={0.05}
              rootMargin="0px 0px 50px 0px"
            >
              <Image
                src={src}
                alt={`${project.title} — page ${pageNum}`}
                width={2480}
                height={3508}
                loading={loading}
                quality={90}
                sizes="100vw"
              />
              <span className="project-image-num">{pageNum}</span>
            </ScrollReveal>
          )
        })}
        </div>
      </div>

      {/* ── Floating Page Tracker ───────────────── */}
      <div className="project-floating-tracker" aria-hidden="true">
        {String(activePage).padStart(2, '0')} <span style={{ opacity: 0.3, margin: '0 4px' }}>/</span> {String(project.pageCount).padStart(2, '0')}
      </div>

      {/* ── Footer nav ──────────────────────────── */}
      <div
        className="container"
        style={{
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
          borderTop: '1px solid var(--rule)',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <MagneticCTA>
          <Link href="/projects" className="project-detail-back" style={{ marginBottom: 0 }}>
            ← All Projects
          </Link>
        </MagneticCTA>
        <span className="t-label">
          {project.index} — {project.pageCount} pages
        </span>
      </div>
    </article>
  )
}
