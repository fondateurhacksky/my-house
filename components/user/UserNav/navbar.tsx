import Link from "next/link";


export default function NavUser() {
    return(
        <ul className="flex-col flex justify-around	items-center			 w-60 h-80">
          <li className="hover:bg-gray-100 p-2 rounded-md">
            <Link href="#">Accueil</Link>
          </li>

          <li className="hover:bg-gray-100 p-2 rounded-md">
            <Link href="#">Voir mon profil</Link>
          </li>

          <li className="hover:bg-gray-100 p-2 rounded-md">
            <Link href="#">Mes intérêts</Link>
          </li>

          <li className="hover:bg-gray-100 p-2 rounded-md">
            <Link href="#">Déconnexion</Link>
            </li>

        </ul>
    )
}