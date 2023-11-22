'use client'
import { useSession } from 'next-auth/react';
import Avatar from './avatar';
import ProfilText from '../../../app/ui/profilText';


export default function UserProfil() {
  const { data: session, status } = useSession();

  // Vérifiez si la session est chargée
  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Si l'utilisateur est connecté, affichez ses informations
  if (session?.user) {
    const { name, image } = session.user;

    // Fonction de chargement d'image personnalisée
        return (
      <div className="bg-blue-500 flex p-4 m-4 rounded-sm items-center ">
        {image ? (<Avatar src={image} />) : (<ProfilText name={name} />)}

        <div className="text-white px-2 w-full">
          <h3 className="">{name}</h3>
        </div>
      </div>
    );
  }
}
