import Image from "next/image"
import NavUser from "./UserNav/navbar"
import UserProfil from "./UserNav/userProfil"


export default function Home(){
    return(
        <main className="h-screen">
        <nav className="flex flex-col w-80 shadow-lg h-full  border-r border-slate-500">
         <UserProfil/>
          <NavUser/>
        </nav>
      </main>
    )
}