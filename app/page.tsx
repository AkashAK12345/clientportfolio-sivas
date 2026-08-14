import Image from 'next/image'
import Link from 'next/link'
import { projects } from '@/lib/projects'
import ScrollReveal from '@/components/ScrollReveal'
import MagneticCTA from '@/components/MagneticCTA'

const technicalSkills = [
  'Embroidery',
  'Sketching',
  'Adobe Photoshop',
  'Illustration',
  'CLO 3D',
  'Video Editing',
  'Jewellery Design',
]

const softSkills = [
  'Hard Worker',
  'Time Management',
  'Team Worker',
  'Multi-tasking',
  'Creative Thinking',
  'Flexible',
]

export default function AboutPage() {
  const previewProjects = projects.slice(0, 4)

  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="about-hero fade-up container">
        <div className="about-hero-content">
          <p className="about-title">Creative Fashion Designer</p>
          <h1 className="about-name">Sivas S B</h1>
          <p className="about-intro">
            Specialising in couture and high-end ready-to-wear, with a strong
            focus on refined aesthetics and craftsmanship. Translating concepts
            into cohesive designs through silhouettes, fabric exploration, and
            detail-oriented execution.
          </p>
          
          <div className="about-hero-portrait-wrapper">
            <Image
              src="/images/sivas-portrait.jpeg"
              alt="Sivas S B — Creative Fashion Designer"
              width={260}
              height={260}
              className="about-hero-portrait-img"
              priority
            />
          </div>

          <div className="about-hero-cta">
            <MagneticCTA>
              <Link href="/projects" className="about-cta-link">
                Explore Projects →
              </Link>
            </MagneticCTA>
          </div>
        </div>
      </section>

      {/* ── Introduction ──────────────────────────────── */}
      <ScrollReveal className="about-section">
        <div className="container">
          <div className="about-section-grid">
            <div className="section-marker">
              <span className="section-number">01 / Introduction</span>
              <h2 className="section-heading-large">
                <span className="stagger-line"><span className="stagger-line-inner">About</span></span>
              </h2>
            </div>
            <div>
              <p className="t-body">
                Creative fashion designer with a passion for couture
                craftsmanship and high-end ready-to-wear. Currently completing
                a B.Des (Hons.) in Fashion Design at Woxsen University,
                I bring a rigorous design sensibility to every garment —
                from initial concept through final execution.
              </p>
              <p className="t-body" style={{ marginTop: '1rem' }}>
                My practice spans structured silhouette development, surface
                embellishment, and 3D garment visualisation. I am proficient
                in CLO 3D and the Adobe Creative Suite, and I approach each
                collection with a commitment to material integrity and
                editorial clarity.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Skills ────────────────────────────────────── */}
      <ScrollReveal className="about-section">
        <div className="container">
          <div className="about-section-grid">
            <div className="section-marker">
              <span className="section-number">02 / Skills</span>
              <h2 className="section-heading-large">
                <span className="stagger-line"><span className="stagger-line-inner">Core</span></span>
                <span className="stagger-line"><span className="stagger-line-inner italic-serif">Skills</span></span>
              </h2>
            </div>
            <div>
              <p className="t-label" style={{ marginBottom: '0.75rem' }}>
                Technical
              </p>
              <div className="skills-grid" style={{ marginBottom: '2rem' }}>
                {technicalSkills.map((skill) => (
                  <div key={skill} className="skill-item">{skill}</div>
                ))}
              </div>
              <p className="t-label" style={{ marginBottom: '0.75rem' }}>
                Soft Skills
              </p>
              <div className="skills-grid">
                {softSkills.map((skill) => (
                  <div key={skill} className="skill-item">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Selected Projects (editorial) ─────────────── */}
      <ScrollReveal className="about-section">
        <div className="container">
          <div className="section-marker">
            <span className="section-number">03 / Projects</span>
            <h2 className="section-heading-large">
              <span className="stagger-line"><span className="stagger-line-inner">Featured</span></span>
              <span className="stagger-line"><span className="stagger-line-inner italic-serif">Collections</span></span>
            </h2>
          </div>
          <div className="project-editorial" style={{ marginTop: '3rem' }}>
            {previewProjects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="project-editorial-card"
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
                <div className="project-editorial-arrow" aria-hidden="true">↗</div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
            <Link
              href="/projects"
              className="t-label"
              style={{
                color: 'var(--ink)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <MagneticCTA>
                <span>View all projects →</span>
              </MagneticCTA>
            </Link>
          </div>
        </div>
      </ScrollReveal>
      {/* ── Contact ───────────────────────────────────── */}
      <ScrollReveal className="about-section" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div className="section-marker" style={{ marginBottom: '4rem' }}>
            <span className="section-number">04 / Contact</span>
            <h2 className="section-heading-large" style={{ fontSize: 'clamp(3rem, 7vw, 6rem)', marginTop: '1rem' }}>
              <span className="stagger-line"><span className="stagger-line-inner">Let's Create</span></span>
              <span className="stagger-line"><span className="stagger-line-inner italic-serif">Something</span></span>
              <span className="stagger-line"><span className="stagger-line-inner">Remarkable.</span></span>
            </h2>
          </div>
          {/* Champagne gold micro-detail */}
          <div style={{ width: '40px', height: '1px', background: 'var(--color-champagne)', marginBottom: '2.5rem' }} aria-hidden="true" />
          <div className="contact-grid" style={{ maxWidth: '800px', marginLeft: 'auto' }}>
              <div className="contact-item">
                <span className="contact-label">Phone</span>
                <a
                  href="tel:+918122738311"
                  className="contact-value"
                  style={{ transition: 'color 0.2s' }}
                >
                  +91 81227 38311
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email</span>
                <a
                  href="mailto:s.b.sivas5405@gmail.com"
                  className="contact-value"
                  style={{ transition: 'color 0.2s' }}
                >
                  s.b.sivas5405@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Based in</span>
                <span className="contact-value">Tamil Nadu, India</span>
              </div>
              <div className="contact-item" style={{ borderBottom: 'none' }}>
                <span className="contact-label">Currently</span>
                <span className="contact-value">Gurugram</span>
              </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  )
}
