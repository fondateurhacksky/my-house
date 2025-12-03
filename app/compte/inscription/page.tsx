import type { Metadata } from 'next'
import FormulaireInscription from '@/app/components/Sign/homeSign';
 
export const metadata: Metadata = {
  title: 'Inscription',
}

export default function Page() {
    return <main className='min-h-screen flex justify-center items-center'>
                <FormulaireInscription/>
           </main>;
}
