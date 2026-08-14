import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link href="/" className="footer-name">
          Sivas S B
        </Link>
        <span className="footer-copy">
          © {year} — Creative Fashion Designer
        </span>
      </div>
    </footer>
  )
}
