import Link from 'next/link';
import Image from 'next/image';
import Filter from './filter';

export default function Logo({setState} : {setState: React.Dispatch<React.SetStateAction<string>>}) {
  return (
    <div className='flex relative my-4 ml-3 md:ml-10'>
      <Link href="/">
      <Image
        src="/outils/icon.png"
        width={35}
        height={35}
        alt="Picture of the author"
      />
      </Link>

      <Filter setState={setState}/>
    </div>
  )
}