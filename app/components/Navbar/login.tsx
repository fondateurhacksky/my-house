import Link from 'next/link';
import { FiUser } from 'react-icons/fi';
import UserProfil from '../../ui/profil';

export default function LogBtn() {

  const isLogged = false; // à remplacer plus tard quand tu feras l'auth

  return (
    <div className="relative right-[10px] hidden sm:flex">

      {isLogged ? (
        <UserProfil />
      ) : (
        <Link
          href="/compte"
          className="flex items-center justify-center gap-2 
                     text-slate-50 bg-slate-600 rounded-md 
                     md:text-base font-semibold my-2 
                     w-32 h-[40px] hover:bg-slate-800 
                     transition-all"
        >
          <FiUser className="text-2xl" />
          <span>Compte</span>
        </Link>
      )}

    </div>
  );
}
