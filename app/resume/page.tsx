import Image from 'next/image'
import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Resume — Sivas S B',
  description:
    'Professional resume of Sivas S B, Creative Fashion Designer — education, experience, technical skills.',
}

const experience = [
  {
    role: 'Assistant Fashion Designer',
    company: 'AMIT GT Couture, Delhi',
    period: 'June 2026 – July 2026',
  },
  {
    role: 'Fashion Intern',
    company: 'AMIT GT Couture, Delhi',
    period: 'Jan 2026 – April 2026',
  },
  {
    role: 'Fashion Intern',
    company: 'Gainup Technology Indian Pvt. Ltd., Tamil Nadu',
    period: 'May 2025 – July 2025',
  },
]

const education = [
  {
    degree: 'B.Des (Hons.), Fashion Design',
    school: 'Woxsen University',
    period: '2022 – 2026',
  },
  {
    degree: '10th & 12th',
    school: 'Velammal — Theni',
    period: '2020 – 2022',
  },
]

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

const languages = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Fluent' },
]

const contact = [
  { label: 'Phone', value: '+91 81227 38311', href: 'tel:+918122738311' },
  { label: 'Email', value: 's.b.sivas5405@gmail.com', href: 'mailto:s.b.sivas5405@gmail.com' },
  { label: 'Location', value: 'Tamil Nadu, India', href: null },
  { label: 'Currently', value: 'Gurugram', href: null },
]

export default function ResumePage() {
  return (
    <div className="container resume-page">
      {/* Header */}
      <ScrollReveal className="resume-header">
        <div className="resume-header-inner">
          <div className="resume-header-text">
            <h1 className="resume-name">Sivas S B</h1>
            <p className="resume-role">Creative Fashion Designer</p>
            <p className="resume-profile-text resume-header-profile">
              Creative Fashion Designer specialising in couture and high-end
              ready-to-wear, with a strong focus on refined aesthetics and
              craftsmanship. Skilled in translating concepts into cohesive designs
              through silhouettes, fabric exploration, and detail-oriented
              execution, with proficiency in CLO 3D and Adobe Creative Suite.
            </p>
          </div>

          <div className="resume-portrait-wrap">
            <div className="resume-portrait-frame">
              <Image
                src="/images/sivas-portrait.jpeg"
                alt="Sivas S B — Creative Fashion Designer"
                fill
                sizes="(max-width: 900px) 160px, 220px"
                className="resume-portrait-img"
                priority
              />
            </div>
          </div>
        </div>
      </ScrollReveal>

      <div className="resume-body">
        {/* Left column */}
        <aside>
          {/* Contact */}
          <ScrollReveal className="resume-section">
            <div className="section-marker">
              <span className="section-number">03 / Contact</span>
              <h2 className="section-heading-large" style={{ fontSize: '2rem' }}>
                <span className="stagger-line"><span className="stagger-line-inner">Contact</span></span>
              </h2>
            </div>
            <div className="resume-contact-list">
              {contact.map((c) => (
                <div key={c.label} className="resume-contact-item">
                  <span className="contact-label" style={{ display: 'block', marginBottom: '0.3rem' }}>
                    {c.label}
                  </span>
                  {c.href ? (
                    <a href={c.href} style={{ color: 'var(--ink-mid)' }}>
                      {c.value}
                    </a>
                  ) : (
                    <span>{c.value}</span>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Technical Skills */}
          <ScrollReveal className="resume-section">
            <div className="section-marker">
              <span className="section-number">04 / Technical</span>
              <h2 className="section-heading-large" style={{ fontSize: '2rem' }}>
                <span className="stagger-line"><span className="stagger-line-inner">Technical</span></span>
              </h2>
            </div>
            <div className="resume-skills-list">
              {technicalSkills.map((skill) => (
                <div key={skill} className="resume-skill-item">{skill}</div>
              ))}
            </div>
          </ScrollReveal>

          {/* Soft Skills */}
          <ScrollReveal className="resume-section">
            <div className="section-marker">
              <span className="section-number">05 / Soft Skills</span>
              <h2 className="section-heading-large" style={{ fontSize: '2rem' }}>
                <span className="stagger-line"><span className="stagger-line-inner">Soft Skills</span></span>
              </h2>
            </div>
            <div className="resume-skills-list">
              {softSkills.map((skill) => (
                <div key={skill} className="resume-skill-item">{skill}</div>
              ))}
            </div>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal className="resume-section">
            <div className="section-marker">
              <span className="section-number">06 / Languages</span>
              <h2 className="section-heading-large" style={{ fontSize: '2rem' }}>
                <span className="stagger-line"><span className="stagger-line-inner">Languages</span></span>
              </h2>
            </div>
            <div>
              {languages.map((lang) => (
                <div key={lang.name} className="resume-lang-item">
                  <span className="resume-lang-name">{lang.name}</span>
                  <span className="resume-lang-level">{lang.level}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </aside>

        {/* Right column */}
        <div>
          {/* Experience */}
          <ScrollReveal className="resume-section">
            <div className="section-marker" style={{ marginBottom: '4rem' }}>
              <span className="section-number">01 / Experience</span>
              <h2 className="section-heading-large">
                <span className="stagger-line"><span className="stagger-line-inner">Experience</span></span>
              </h2>
            </div>
            {experience.map((exp) => (
              <div key={`${exp.role}-${exp.company}`} className="resume-exp-item" style={{ borderTop: '1px solid rgba(90, 31, 43, 0.18)', paddingTop: '2rem', marginBottom: '3rem' }}>
                <h3 className="t-title" style={{ color: 'var(--ink)', marginBottom: '0.5rem' }}>{exp.role}</h3>
                <p className="resume-exp-company" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {exp.company}
                </p>
                <p className="resume-exp-period" style={{ color: 'var(--accent)', marginTop: '0.35rem' }}>{exp.period}</p>
              </div>
            ))}
          </ScrollReveal>

          {/* Education */}
          <ScrollReveal className="resume-section">
            <div className="section-marker" style={{ marginBottom: '4rem' }}>
              <span className="section-number">02 / Education</span>
              <h2 className="section-heading-large">
                <span className="stagger-line"><span className="stagger-line-inner">Education</span></span>
              </h2>
            </div>
            {education.map((edu) => (
              <div key={edu.degree} className="resume-edu-item" style={{ borderTop: '1px solid rgba(90, 31, 43, 0.18)', paddingTop: '2rem', marginBottom: '3rem' }}>
                <h3 className="t-title" style={{ color: 'var(--ink)', marginBottom: '0.5rem' }}>{edu.degree}</h3>
                <p className="resume-edu-school" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  {edu.school}
                </p>
                <p className="resume-edu-period" style={{ color: 'var(--accent)', marginTop: '0.35rem' }}>{edu.period}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}
