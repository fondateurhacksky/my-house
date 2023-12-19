'use client'
import NavBar from "../../app/ui/NavBar";
import FacebookProvider from "../../app/ui/facebook";
import GoogleProvider from "../../app/ui/google";
import { useRouter } from 'next/navigation'

export default function HomeSigne() {
   const router = useRouter()

   const handleClick = () => {
      router.push('/inscription/form')
    }
   return (
   <main>
   <NavBar />
      <div className="w-screen h-screen flex flex-col justify-center items-center">

         <div className="w-1/4 mb-3">
            <button type="button" onClick={handleClick} className="bg-slate-50 p-2 text-center w-full h-full border border-slate-200 rounded-lg font-semibold text-base hover:bg-green-500">Remplir un formulaire d'inscriptopn</button>
         </div>
         
         <div className="flex items-center w-80 my-2">
              <div className="flex-1 h-0.5 bg-slate-700"></div>
              <p className="text-slate-700 px-4">or</p>
              <div className="flex-1 h-0.5 bg-slate-700"></div>
        </div>
        
         <div className="w-1/4">
            <FacebookProvider text={"S'inscrire avec "}/>
            <GoogleProvider  text={"S'inscrire avec "}/>
         </div>
         
      </div>
   </main> 
   );
}
