import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { logs } from "../../lib/utility";
import UserProfil from '../../ui/profil';



export default function AccountPage() {
  const { data: session, status } = useSession();


  
    return (
        <div className='relative right-[10px] hidden sm:flex'>

      
      {session?.user ? (<UserProfil />) : (
        

       logs.map((log) => (
          <button key={log.id} className={`text-slate-50 bg-slate-700 shadow-md rounded md:text-base font-semibold my-2 last:mx-2 w-24 h-[40px] hover:bg-slate-800`}>
            <Link href={log.slug}>{log.title}</Link>
          </button>
      )) 
      )}
    </div>
  );
}

