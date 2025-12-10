"use client";

import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import UserProfil from '../../ui/profil';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';



export default function LogBtn() {
  const isLogged = false;
  const pathname = usePathname();
  const isLoginPage = pathname === "/compte";

  return (
    <div className="absolute top-0  right-[10px] hidden sm:flex">
      {isLogged ? (
        <UserProfil />
      ) : (
        <Link
          href="/compte"
          className={clsx(
            "bg-slate-100 flex items-center justify-center gap-2 text-slate-600 border border-slate-300 rounded-md md:text-base font-medium my-2 w-40 h-11 hover:bg-slate-300 transition-all",
            isLoginPage && "hidden"   // 👈 EXACTEMENT CE QUE TU VOULAIS
          )}
        >
          <FiUser className="text-xl" />
          <span>Se connecter</span>
        </Link>
      )}
    </div>
  );
}
