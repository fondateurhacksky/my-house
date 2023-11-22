import NavUser from "../../components/user/UserNav/navbar"
import UserProfil from "../../components/user/UserNav/userProfil"


export default function Home(){
    return(
        <section className="h-screen">
        <nav className="flex flex-col w-60 shadow-lg h-full  border-r border-slate-500">
          <UserProfil/>
          <NavUser/>
        </nav>
      </section>
    )
}