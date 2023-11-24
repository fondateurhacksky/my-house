import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { auth } from "../auth";
import { SessionProvider } from "next-auth/react"

const inter = Roboto({ 
  subsets: ['latin'],
  weight: '400'
 })

export const metadata: Metadata = {
  title: 'MyHouse',
  description: 'Site de placement de personnelle et de biens',
  icons: 'https://w7.pngwing.com/pngs/907/970/png-transparent-white-house-logo-computer-icons-home-house-home-blue-angle-text.png'
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await auth();

  if (session?.user) {
    session.user = {
      id: session.user.id,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }
  return (
    <html lang="fr">
      <body className={inter.className}>
      <SessionProvider session={session}>
          {children}
      </SessionProvider>
        </body>
    </html>
  )
}
