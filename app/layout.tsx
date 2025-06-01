import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ageless Blissful - Premium Aesthetic Treatments in London, Northampton & Lagos',
  description: 'Experience luxury aesthetic treatments at Ageless Blissful. Offering Botox, fillers, PRP, microneedling, and more at our London, Northampton, and Lagos locations. Book your consultation today.',
  keywords: 'aesthetic treatments, botox, fillers, PRP, microneedling, beauty clinic, London, Northampton, Lagos, anti-aging, skincare',
  authors: [{ name: 'Ageless Blissful' }],
  openGraph: {
    title: 'Ageless Blissful - Premium Aesthetic Treatments',
    description: 'Experience luxury aesthetic treatments at Ageless Blissful. Professional, safe, and effective treatments.',
    url: 'https://ageless-blissful.com',
    siteName: 'Ageless Blissful',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ageless Blissful - Premium Aesthetic Treatments',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ageless Blissful - Premium Aesthetic Treatments',
    description: 'Experience luxury aesthetic treatments at Ageless Blissful.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              "name": "Ageless Blissful",
              "image": "https://i.pinimg.com/736x/9c/c4/11/9cc411c7997774fcb46c7304063e543d.jpg",
              "telephone": ["+44 20 7946 0958", "+44 1604 123456"],
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "151 Lavender Hill",
                  "addressLocality": "London",
                  "addressRegion": "London",
                  "postalCode": "SW11 5QJ",
                  "addressCountry": "GB"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Abington Street",
                  "addressLocality": "Northampton",
                  "addressRegion": "Northamptonshire",
                  "postalCode": "NN1 2AJ",
                  "addressCountry": "GB"
                }
              ],
              "openingHours": [
                "Mo-Fr 09:00-18:00",
                "Sa 09:00-17:00"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127"
              },
              "service": [
                {
                  "@type": "Service",
                  "name": "Botox Treatments",
                  "description": "Professional Botox injections for wrinkle reduction and facial rejuvenation."
                },
                {
                  "@type": "Service",
                  "name": "Dermal Fillers",
                  "description": "Premium dermal filler treatments for volume restoration and facial contouring."
                },
                {
                  "@type": "Service",
                  "name": "PRP Therapy",
                  "description": "Platelet-rich plasma therapy for skin rejuvenation and hair restoration."
                },
                {
                  "@type": "Service",
                  "name": "Microneedling",
                  "description": "Advanced microneedling treatments for skin texture improvement and collagen stimulation."
                }
              ],
              "founder": {
                "@type": "Person",
                "name": "Juliet Asemota",
                "jobTitle": "Lead Aesthetic Practitioner",
                "description": "Experienced aesthetic practitioner with nursing background specializing in natural enhancement treatments."
              }
            })
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}