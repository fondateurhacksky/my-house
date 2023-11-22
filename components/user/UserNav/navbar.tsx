'use client'
import Link from "next/link";
import { signOut} from "next-auth/react"


export default function NavUser() {
  return (
    <ul className="flex flex-col justify-around justify-center items-center m-4 rounded-sm h-full bg-gray-400">

      <li >
        <Link 
        href="/"
        className="text-white hover:bg-gray-300 hover:text-black rounded-md py-4 px-8 text-center"
        >
          Acceuil</Link>
      </li>

      <li>
        <Link 
        href="/"
        className="text-white hover:bg-gray-300 hover:text-black rounded-md py-4 px-8 text-center" 
        >Mon profil</Link>
      </li>

      <li>
        <Link 
        href=""
        className="text-white hover:bg-gray-300 hover:text-black rounded-md py-4 px-8 text-center"
        >Mes intérêts</Link>
      </li>

      <li 
       onClick={(e) => {
        signOut()
      }}
      className="text-white hover:bg-gray-300 hover:text-black rounded-md py-4 px-8 text-center cursor-pointer">
        Déconnexion
      </li>
      
    </ul>
  );
}
