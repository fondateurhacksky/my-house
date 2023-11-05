import Image from "next/image";


const Ad = ({ nom, prenom, age, description, imageUrl } 
  :{nom:string, prenom:string, age:number, description: string, imageUrl: string}) => {
  return (
    <div className="align-bg-white rounded-lg h-min items-center shadow-md p-4 m-4 w-72">

      <div className="w-full flex justify-center ">

      <Image 
      src={imageUrl} 
      height={200}
      width={200}
      alt={nom} 
      className="object-cover object-center" />

      </div>

      <div>

      <h2 className="text-lg  mt-2">{`${nom}  ${prenom} - ${age} ans `}</h2>
      <h3 className="text-lg font-semibold">Ménage - Dormir : Non</h3>

      </div>
    </div>
  );
};

export default Ad;
