import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import NavBar from '@/app/ui/NavBar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'MyHouse',
  description: 'Site de placement de personnelle et de biens',
}

export default async function RootLayout({ children }:{
  children: React.ReactNode
}) {



  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans overflow-hidden">
        <NavBar />
          {children}
      </body>
    </html>
  )
}
