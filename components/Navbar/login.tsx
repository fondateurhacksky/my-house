'use client'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { logs } from "../../app/lib/utility";
import UserProfil from '../../app/ui/profil';



export default function AccountPage() {
  const { data: session, status } = useSession();


  
    return (
        <div className='hidden sm:flex mx-3'>

      
      {session?.user ? (<UserProfil />) : (
        

       logs.map((log) => (
          <button key={log.id} className={` text-slate-50 bg-slate-800 shadow-md rounded md:text-base font-bold px-2 py-1 md:p-2 my-2 last:mx-2 w-28`}>
            <Link href={log.slug}>{log.title}</Link>
          </button>
      )) 
      )}
    </div>
  );
}

