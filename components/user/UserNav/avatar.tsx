import Image from "next/image";

export default function Avatar({src} : {src:string}) {
  return (
    <div className="shadow-2xl">
      <Image 
      src={src} 
      width={40}
      height={40}
      alt="Photo de Profile" 
      />
    </div>
  );
}