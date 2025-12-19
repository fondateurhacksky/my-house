'use client'

import { useState } from "react"
import 'react-phone-number-input/style.css'
import PhoneInputField from "./inputPhone"

export default function Form() {
  const [phone, setPhone] = useState<string | undefined>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Tu pourras récupérer ici toutes les valeurs du formulaire
    console.log("Téléphone:", phone)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full md:w-1/2 bg-[#3A3751]
 rounded-xl p-5 shadow-xl"
    >
      {/* TITRE */}
      <h1 className="text-2xl font-bold text-white text-center uppercase tracking-wider">
        Rejoignez MyHouse
      </h1>

      {/* Barre décorative */}
      <div className="w-24 h-1 bg-white mx-auto rounded-full "></div>

      <p className="text-sm text-white text-center mb-2">
        Inscrivez-vous pour accéder aux services et commencer vos démarches.
      </p>

      {/* NOM + PRÉNOM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <input
          className="w-full bg-transparent border-b border-slate-300 text-white py-2 text-sm 
                     placeholder-slate-300 focus:outline-none hover:border-indigo-300 
                     focus:border-indigo-400"
          placeholder="Nom"
        />

        <input
          className="w-full bg-transparent border-b border-slate-300 text-white py-2 text-sm 
                     placeholder-slate-300 focus:outline-none hover:border-indigo-300 
                     focus:border-indigo-400"
          placeholder="Prénom"
        />
      </div>

      {/* TÉLÉPHONE avec +225 */}
      {/* <div className="w-full border-b border-slate-300 hover:border-indigo-300 focus-within:border-indigo-400 pb-1"> */}
       <label className="text-sm text-slate-300 relative top-1">
          Numéro de téléphone
        </label>
        <PhoneInputField
                 value={phone}
                 onChange={setPhone}
                 style="
                bg-transparent  text-slate-300
                 border border-gray-300 rounded-md px-3 py-2
                 focus:outline-none
               "
               />
      {/* </div> */}

      {/* EMAIL */}
      <input
        className="w-full bg-transparent border-b border-slate-300 text-white py-2 text-sm 
                   placeholder-slate-300 focus:outline-none hover:border-indigo-300 
                   focus:border-indigo-400"
        placeholder="Email (facultatif)"
      />

      {/* VILLE + COMMUNE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          className="w-full bg-transparent border-b border-slate-300 text-white py-2 text-sm 
                     placeholder-slate-300 focus:outline-none hover:border-indigo-300 
                     focus:border-indigo-400"
          placeholder="Ville"
        />

        <input
          className="w-full bg-transparent border-b border-slate-300 text-white py-2 text-sm 
                     placeholder-slate-300 focus:outline-none hover:border-indigo-300 
                     focus:border-indigo-400"
          placeholder="Commune"
        />
      </div>

      {/* LOCALISATION */}
      <textarea
        rows={2}
        maxLength={120}
        className="w-full bg-transparent border border-slate-400 rounded-md p-3 text-sm 
                   text-white placeholder-slate-300 focus:outline-none focus:border-indigo-400 
                   hover:border-indigo-300 resize-none"
        placeholder="Localisation (ex: Riviera 2, près du carrefour...)"
      ></textarea>

      <p className="text-xs text-center text-white mt-2">
        Vos informations restent strictement confidentielles.
      </p>

      {/* BOUTON */}
      <button
        type="submit"
        className="w-full mt-2 px-20 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 
                         hover:from-indigo-600 hover:to-indigo-700 text-white 
                         rounded-xl text-sm font-medium shadow-md hover:shadow-xl 
                         transition-all hover:-translate-y-1 mx-auto tracking-wider"
      >
        Envoyez
      </button>
    </form>
  )
}
