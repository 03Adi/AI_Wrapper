import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'ResumeAI - AI Resume & Cover Letter Generator',
  description: 'Create professional, AI-generated resumes and cover letters tailored to your dream job',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/ai_icon.png',
        type: 'image/png',
      },
    ],
    apple: '/ai_icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
