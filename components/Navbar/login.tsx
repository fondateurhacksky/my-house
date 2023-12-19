'use client'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { logs } from "../../app/lib/utility";
import UserProfil from '../../app/ui/profil';



export default function AccountPage() {
  const { data: session, status } = useSession();


  
    return (
        <div className='hidden sm:flex'>

      
      {session?.user ? (<UserProfil />) : (
        

       logs.map((log) => (
          <button key={log.id} className={`text-slate-50 bg-slate-700 shadow-md rounded md:text-base font-semibold my-3 last:mx-2 w-24 hover:bg-slate-800`}>
            <Link href={log.slug}>{log.title}</Link>
          </button>
      )) 
      )}
    </div>
  );
}

