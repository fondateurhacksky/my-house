'use client'
import { useSession } from 'next-auth/react';
import Avatar from './avatar';


export default function UserProfil() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  // Si l'utilisateur est connecté, affichez ses informations
  if (session?.user) {
    const { name, image } = session.user;

    // Fonction de chargement d'image personnalisée
        return (
      <div className="flex rounded bg-blue-500  w-56 p-4 mb-4 h-32 items-end ">
        {image && <Avatar src={image} />}

        <div className="text-white font-bold px-2 mb-6 w-full">
          <h3 className="">{name}</h3>
        </div>
      </div>
    );
  }
}
