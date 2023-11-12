import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MyHouse',
  description: 'Site de placement de personnelle et de biens',
  icons: 'https://w7.pngwing.com/pngs/907/970/png-transparent-white-house-logo-computer-icons-home-house-home-blue-angle-text.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
