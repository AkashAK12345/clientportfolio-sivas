import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container not-found page-offset">
      <p className="t-label" style={{ marginBottom: '1rem' }}>404</p>
      <h1 className="t-headline">Page not found</h1>
      <p className="t-body" style={{ maxWidth: '36ch', marginTop: '1rem' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="t-label"
        style={{
          color: 'var(--ink)',
          marginTop: '2rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        ← Return home
      </Link>
    </div>
  )
}
