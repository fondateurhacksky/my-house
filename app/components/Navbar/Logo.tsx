import Link from 'next/link';
import Image from 'next/image';
// import Filter from './filter';
// j'ai supprimer le filter bar pour mieux mettre le logo et je compte revoire a propos du filter bar d'abord ca position et son design mais pour l'instant je l'ai supprimer pour eviter les erreure de react

export default function Logo({setState} : {setState: React.Dispatch<React.SetStateAction<string>>}) {
  return (
      <Link href="/" className="inline-block relative left-[-25px] md:ml-10">
      <Image
        src="/outils/myhouse.png"
        className='inline-block'
        width={60}
        height={60}
        alt="Picture of the author"
      />
      </Link>

  )
}
