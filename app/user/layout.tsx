import NavBar from "../../components/user/page"

export default function UserLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <section>
        {children}
    </section>)
  }