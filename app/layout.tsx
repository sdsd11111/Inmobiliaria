import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ParallaxBackground } from "@/components/ParallaxBackground"

export const metadata: Metadata = {
  title: "Servicios Inmobiliarios-Ruth Luzuriaga",
  description: "Bienvenido a Servicios Inmobiliarios Ruth Luzuriaga, disfruta nuestros servicios.",
  keywords: "vender casa Loja, vender propiedad Loja, servicios inmobiliarios Loja, Ruth Luzuriaga, bienes raíces Ecuador",
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Servicios Inmobiliarios-Ruth Luzuriaga',
    description: 'Bienvenido a Servicios Inmobiliarios Ruth Luzuriaga, disfruta nuestros servicios.',
    url: 'https://tusitio.com', // Replace with your actual site URL
    siteName: 'Servicios Inmobiliarios Ruth Luzuriaga',
    images: [
      {
        url: '/imagen destacada.jpg',
        width: 1200,
        height: 630,
        alt: 'Servicios Inmobiliarios Ruth Luzuriaga',
      },
    ],
    locale: 'es_EC',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Servicios Inmobiliarios-Ruth Luzuriaga',
    description: 'Bienvenido a Servicios Inmobiliarios Ruth Luzuriaga, disfruta nuestros servicios.',
    images: ['/imagen destacada.jpg'],
  },
  metadataBase: new URL('https://tusitio.com'), // Replace with your actual site URL
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="h-full">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} min-h-full bg-transparent`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
