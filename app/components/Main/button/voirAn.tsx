import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { TfiAnnouncement } from 'react-icons/tfi';
import { FaPeopleRoof } from "react-icons/fa6";
import { FaHouseFlag } from "react-icons/fa6";

import clsx from 'clsx';

export default function VoirAn({}) {
    const [showDiv, setShowDiv] = useState(true);

 const router = useRouter();

        const handlerClickDiv = () =>{
                router.push(`/blog/annonces/register/person`);
        }
        const handlerClickDiv2 = () =>{
            router.push(`/blog/annonces/register/house`);
    }

    const handlerClick = () => {
        setShowDiv(!showDiv); // Inverse la valeur actuelle de showDiv à chaque clic sur le bouton
    };

    return (
        <div>
            <button
                onClick={handlerClick}
                className={clsx("duration-500 w-full text-xl font-medium hover:bg-slate-700 rounded-t-lg p-2 border-2 border-slate-700 text-slate-950 hover:text-white md:text-base font-bold px-3 py-3 md:p-3 mt-3 mr-3",
                showDiv && 'rounded-lg'
                )}
            >
                Faire une annonce <TfiAnnouncement className="inline-block w-4 h-5 pb-0.5" />
            </button>


                <div className={clsx(
                    'border-t-none border-x-2 border-b-2 border-orange-500 rounded-b-lg',
                    showDiv && 'invisible')}>
                    <button
                    onClick={handlerClickDiv}
                    className='block w-full hover:bg-slate-100 text-center p-2 border-b-2 border-orange-500'>
                        <FaPeopleRoof className="inline-block w-4 h-5 pb-1"/> Pour le Personnel
                    </button>
                    <button 
                    onClick={handlerClickDiv2}
                    className='block w-full hover:bg-slate-100 rounded text-center p-2'>
                    <FaHouseFlag className="inline-block w-4 h-5 pb-1"/> Pour le Mobilier
                    </button>
                </div>
        </div>
    );
}
