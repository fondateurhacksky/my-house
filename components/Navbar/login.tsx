import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { logs } from "../../utility/utility";



export default function LogBtn() {

  const route = useRouter();

        const handlerClick = (slug: string) =>{
                route.push(`${slug}`);
        }

  return (
    <div className='hidden sm:flex mx-3 '>
      {logs.map((log) => (
          <button key={log.id} onClick={() => handlerClick(log.slug)} className={` text-slate-50 bg-slate-800 shadow-md rounded md:text-base font-bold px-2 py-1 md:p-3 my-3 last:mx-2 w-28`}>
            <Link href={log.slug}>{log.title}</Link>
          </button>
      ))}
    </div>
  );
}

