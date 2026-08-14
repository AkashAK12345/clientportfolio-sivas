import type { Metadata } from 'next'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import FloatingOrb from '@/components/FloatingOrb'

export const metadata: Metadata = {
  title: 'Sivas S B — Fashion Designer',
  description:
    'Portfolio of Sivas S B, a creative fashion designer specialising in couture and high-end ready-to-wear. Based in India.',
  keywords: ['fashion designer', 'couture', 'portfolio', 'CLO3D', 'Sivas S B'],
  openGraph: {
    title: 'Sivas S B — Fashion Designer',
    description:
      'Portfolio of Sivas S B, a creative fashion designer specialising in couture and high-end ready-to-wear.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <FloatingOrb />
        <NavBar />
        <main className="page-offset">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
