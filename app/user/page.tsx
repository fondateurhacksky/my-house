import NavUser from "../../components/user/UserNav/navbar"


export default function Home(){
    return(
        <section className="h-screen">
        <nav className="flex flex-col w-60 h-full">
          <NavUser/>
        </nav>
      </section>
    )
}