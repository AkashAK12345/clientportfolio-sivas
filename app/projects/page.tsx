import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import ScrollReveal from '@/components/ScrollReveal'
import MagneticCTA from '@/components/MagneticCTA'

export const metadata: Metadata = {
  title: 'Projects — Sivas S B',
  description:
    'Fashion design portfolio projects by Sivas S B — The Royal Renaissance, Sheesh Mahal, Aerostruct, and ANN.',
}

export default function ProjectsPage() {
  return (
    <div className="container">
      {/* Header */}
      <header className="projects-header fade-up">
        <div className="projects-header-inner">
          <div className="section-marker">
            <span className="section-number">01 / Portfolio</span>
            <h1 className="t-headline">
              <span className="stagger-line"><span className="stagger-line-inner">Selected</span></span>
              <span className="stagger-line"><span className="stagger-line-inner italic-serif">Collections</span></span>
            </h1>
          </div>
          <p
            className="t-body"
            style={{ maxWidth: '32ch', textAlign: 'right' }}
          >
            A body of work exploring couture,
            structure, and the poetics of dress.
          </p>
        </div>
      </header>

      {/* Horizontal rule */}
      <div className="rule" />

      {/* Project list — editorial rows */}
      <nav className="project-list" aria-label="Projects">
        {projects.map((project) => (
          <ScrollReveal key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="project-list-item"
              data-cursor="VIEW"
            >
              <span className="project-list-index">{project.index} —</span>

              <div className="project-list-content">
                <div className="project-list-title">{project.title}</div>
                {project.subtitle && (
                  <div className="project-list-subtitle">{project.subtitle}</div>
                )}
              </div>

              <MagneticCTA>
                <span className="project-list-arrow" aria-hidden="true">↗</span>
              </MagneticCTA>
            </Link>
          </ScrollReveal>
        ))}
      </nav>

      {/* Editorial image grid below the list */}
      <section
        aria-label="Project previews"
        className="project-editorial"
        style={{ marginBottom: 0 }}
      >
        {projects.map((project) => (
          <ScrollReveal key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="project-editorial-card"
              data-cursor="EXPLORE"
            >
              <Image
                src={`/projects/${project.slug}/01.webp`}
                alt={`${project.title} cover`}
                width={700}
                height={875}
                loading="lazy"
              />
              <div className="project-editorial-overlay">
                <div className="project-editorial-index">{project.index}</div>
                <div className="project-editorial-title">{project.title}</div>
                {project.subtitle && (
                  <div className="project-editorial-subtitle">
                    {project.subtitle}
                  </div>
                )}
              </div>
              <MagneticCTA>
                <div className="project-editorial-arrow" aria-hidden="true">↗</div>
              </MagneticCTA>
            </Link>
          </ScrollReveal>
        ))}
      </section>

      <div style={{ height: 'clamp(4rem, 8vw, 6rem)' }} />
    </div>
  )
}
