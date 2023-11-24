import NavUser from "../../components/user/UserNav/navbar"
import { Lato } from 'next/font/google'



const lato = Lato({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export default function UserLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <main className={lato.className}>
      {/* <NavUser/> */}
        {children}
    </main>)
  }