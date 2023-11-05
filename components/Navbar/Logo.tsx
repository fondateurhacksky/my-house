import Link from 'next/link';

import Image from 'next/image'
 
export default function Logo() {
  return (
    <div className='my-4 ml-3 md:ml-10'>
      <Link href="/">
      <Image
        src="/pngegg.png"
        width={35}
        height={35}
        alt="Picture of the author"
      />
      </Link>
    </div>
  )
}