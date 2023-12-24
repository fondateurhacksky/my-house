 import clsx from 'clsx'
 import { usePathname } from 'next/navigation'
 import { useContext } from 'react'
 import { FilterContext } from '../../app/lib/context'


 export default function Filter({setState} : {setState: React.Dispatch<React.SetStateAction<string>>}) {
  const pathname = usePathname()
  const filter = useContext(FilterContext);

  return (
    <button
    onClick={() => setState(filter === 'visible' ? 'invisible' : 'visible')}
    className={clsx('flex items-center	bg-black px-2 w-auto  rounded cursor-pointer	font-bold ml-3',
     pathname === '/blog/annonces/personnelles' && '',
     !(pathname === '/blog/annonces/personnelles') && 'hidden'
     )}>

      <div>

          <div className='w-8 h-0.5 rounded-full bg-white mb-1 relative'>

            <div className='bg-black absolute border-2 border-white rounded-full top-[-3px] left-1 p-0.5 '></div>

          </div>

          <div className='w-8 h-0.5 bg-white  rounded-full relative'>

          <div className='bg-black absolute border-2 border-white rounded-full top-[-3px] left-5 p-0.5 '></div>

          </div>

          
      </div>

      <p className='text-white text-xl ml-2'>Filtrer</p>
    </button>
  )
}