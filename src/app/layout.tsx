import type { Metadata, Viewport } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const viewport: Viewport = {
  themeColor: '#060813',
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  title: 'Moaaz Saeed Elmahi — Cloud & DevOps Engineer',
  description: 'Cloud & DevOps Engineer specializing in AWS, Terraform, Docker, Kubernetes, CI/CD automation, and high-reliability cloud architectures.',
  keywords: [
    'Moaaz Saeed Elmahi',
    'DevOps Engineer',
    'Cloud Engineer',
    'AWS Solutions Architect',
    'Terraform',
    'Kubernetes',
    'Docker',
    'CI/CD',
    'GitHub Actions',
    'Infrastructure as Code'
  ],
  authors: [{ name: 'Moaaz Saeed Elmahi' }],
  metadataBase: new URL('https://moaaz.dev'),
  openGraph: {
    title: 'Moaaz Saeed Elmahi — Cloud & DevOps Engineer',
    description: 'Cloud & DevOps Engineer specializing in AWS, Infrastructure as Code, CI/CD, and reliable cloud operations.',
    url: 'https://moaaz.dev',
    siteName: 'Moaaz Saeed Elmahi Portfolio',
    images: [
      { url: '/portrait.png', width: 1200, height: 630, alt: 'Moaaz Saeed Elmahi' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: { icon: '/favicon.ico' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className="font-sans antialiased min-h-screen bg-[#060813] text-slate-100 relative selection:bg-neon-cyan/20 selection:text-neon-cyan">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {/* Ambient Lighting & Background Grid */}
          <div className="fixed inset-0 pointer-events-none z-0 bg-radial-glow opacity-80" />
          <div className="fixed inset-0 pointer-events-none z-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          
          <div className="relative z-10 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

