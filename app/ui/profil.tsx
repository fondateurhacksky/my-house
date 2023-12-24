import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ProfilText from "./profilText";
import Image from "next/image";

export default function UserProfil() {

    const router = useRouter();
    const { data: session, status } = useSession();

    const handlerClick = () => {
        router.push('/user')
    }
    if (session?.user) {
        const { name, image } = session.user;
    return (
        <button 
        onClick={handlerClick}
        className="flex justify-center items-center">
        {image ? 
            (<Image 
            src={image}
            width={40}
            height={40}
            className="rounded-full mr-2"
            alt="Photo de profil"/>) : <ProfilText name={name}/> }

        </button>
    )
}
}