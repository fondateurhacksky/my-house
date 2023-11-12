import { useRouter } from 'next/navigation';
import { TfiAnnouncement } from 'react-icons/tfi';


export default function VoirAn({}){
    const router = useRouter();

        const handlerClick = () =>{
                router.push(`/blog/annonces/register`);
        }

    return(
        <div>
            <button onClick={() => handlerClick()} className="text-xl font-medium hover:bg-green-500 hover:shadow-lg hover:shadow-green-500/50 rounded p-2 border-2 border-orange-500  text-slate-950 hover:text-slate-50 md:text-base font-bold px-3 py-3 md:p-3  my-3 mr-3">
                Faire une annonces <TfiAnnouncement className="inline-block w-4 h-5 pb-0.5" />
            </button>
        </div>
    )
}