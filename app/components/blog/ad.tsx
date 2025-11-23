'use client'
import Image from "next/image";
import { useState } from "react";
import { IoPersonRemove } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import clsx from "clsx";

const Ad = ({ nom, prenom, age, imageUrl }: { nom: string, prenom: string, age: number, imageUrl: string }) => {
    const [interested, setInterested] = useState(false);

    const handleInterestToggle = () => {
        setInterested(!interested);
    };

    return (
        <div className="align-bg-white rounded h-min items-center shadow-md p-4 m-2 ">
            <div className="flex justify-center">
                <Image
                    src={imageUrl}
                    width={200}
                    height={100}
                    alt={nom}
                    className="rounded-sm"
                />
            </div>

            <div>
                <h2 className="text-sm  mt-2">{`${nom}  ${prenom} - ${age} ans `}</h2>
                <h3 className="text-base font-medium">Ménage - Dormir : Non</h3>
            </div>

            <div className="flex">
                <button
                    onClick={handleInterestToggle}
                    className={clsx(
                        'flex text-lg	 my-2 justify-center items-center px-4 py-2 rounded text-slate-50 w-full',
                        interested ? 'bg-slate-300 text-slate-900 border border-slate-500' : 'bg-blue-500 border border-blue-500'
                    )}
                >
                    {interested ? (
                        <>
                            {/* Remplacez par l'icône à utiliser */}
                            <IoPersonRemove 
                            className="mx-2" 
                            />
                            Désintéresser
                        </>
                    ) : (
                        <>
                            {/* Remplacez par l'icône à utiliser */}
                            <IoPersonAdd 
                            className="mx-2" />
                            Intéresser
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Ad;
