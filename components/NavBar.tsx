'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
  { label: 'About', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Resume', href: '/resume' },
]

export default function NavBar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <Link href="/" className="nav-logo" onClick={() => setMobileOpen(false)}>
            Sivas S B
          </Link>

          {/* Desktop nav */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            className={`nav-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`nav-mobile ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <ul className="nav-mobile-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`nav-mobile-link ${isActive(item.href) ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
