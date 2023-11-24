'use client'
import Link from "next/link";
import { signOut } from "next-auth/react";
import clsx from "clsx";
// import { navItems } from "../../../app/lib/utility";
import UserProfil from "./userProfil";
import { FaPowerOff } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { TfiAnnouncement } from 'react-icons/tfi';
import { MdInterests } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { SiAcclaim } from "react-icons/si";






export const navItems = [
  { href: "/", label: "Accueil", icon: CiHome },
  { href: "/blog/annonces", label: "Annonces", icon: TfiAnnouncement },
  { href: "/interests", label: "Mes intérêts", icon: MdInterests },
  { href: "/profile", label: "Mon profil", icon: ImProfile },
  { href: "/reclamation", label: "Reclamations", icon: SiAcclaim }
];


export default function NavUser() {
  const handleSignOut = () => {
    signOut();
  };

  return (
    <ul className="flex flex-col  justify-center items-center h-full ">
      <UserProfil/>
      {navItems.map((item, index) => (
        <li
          key={index}
          className="w-56 h-12 text-base rounded-md flex my-1 items-center"
        >
          <Link
            href={item.href}
            className="flex grow items-center justify-center w-80 bg-slate-100 text-black rounded-md py-3 hover:bg-blue-200 hover:text-blue-500"
          >
             <item.icon className="w-6 h-4 "/>{item.label}
          </Link>
        </li>
      ))}

      <button
        onClick={handleSignOut}
        className="text-base w-30 p-4 rounded-md bg-slate-100 flex self-start ml-2 items-center hover:bg-red-100 hover:text-red-500 py-3 my-2 text-center cursor-pointer"
      >
        <FaPowerOff className="mx-2"/>
 Déconnexion
      </button>
    </ul>
  );
}
