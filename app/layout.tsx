import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SoftSell - Maximize the Value of Your Software Licenses",
  description:
    "SoftSell helps businesses sell unused software licenses quickly and at the best market rates. Turn your idle software assets into cash today.",
  keywords: "software resale, license reselling, software asset management, sell software licenses",
  openGraph: {
    title: "SoftSell - Maximize the Value of Your Software Licenses",
    description: "SoftSell helps businesses sell unused software licenses quickly and at the best market rates.",
    url: "https://softsell.vercel.app",
    siteName: "SoftSell",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SoftSell",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftSell - Maximize the Value of Your Software Licenses",
    description: "SoftSell helps businesses sell unused software licenses quickly and at the best market rates.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
