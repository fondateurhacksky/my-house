import Image from "next/image";

export default function Avatar({src} : {src:string}) {
  return (
    <div>
      <Image 
      src={src} 
      width={100}
      height={100}
      alt="Photo de Profile" 
      className="rounded-full border-2 border-gray-400"
      />
    </div>
  );
}