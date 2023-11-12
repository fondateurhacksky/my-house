import Image from "next/image"
export default function UserProfil() {
    return(
        <div className="flex gap-4">
            <div className="">
              <Image
                src="/users/siaka.jpg" 
                alt="Photo de profil"
                width={100}
                height={100}
                className="m-2 rounded"
              />
            </div>
            <div className=" items-center flex flex-col justify-center p-4 rounded-lg">
              <h3 className="">Nom : Toure </h3>
              <h3 className="">Prenom : Siaka </h3>
            </div>
          </div>
    )
}