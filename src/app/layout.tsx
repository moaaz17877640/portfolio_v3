import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Moaaz Elmahi — Portfolio',
  description: '☁ Cloud Instructor @ NTI| DevOps Engineer | Cloud Engineer | Cloud Support',
  metadataBase: new URL('https://moaaz.example.com'),
  openGraph: {
    title: 'Moaaz Elmahi — Portfolio',
    description: '☁ Cloud Instructor @ NTI | DevOps Engineer | Cloud Engineer | Cloud Support',
    url: 'https://moaaz.example.com',
    siteName: 'Moaaz Elmahi Portfolio',
    images: [
      { url: '/og.png', width: 1200, height: 630, alt: 'Moaaz Elmahi Portfolio' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: { icon: '/favicon.ico' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Revert to original dark look: glowing dark background by default */}
      <body className={`font-sans antialiased bg-radial-glow text-neutral-900 dark:text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
