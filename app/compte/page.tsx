"use client";

import Link from "next/link";
import { useState } from "react";
import { FiSmartphone } from "react-icons/fi";

export default function ConnexionPage() {

  const [phone, setPhone] = useState("");

  const handleSendCode = () => {
    if (!phone) return alert("Veuillez entrer votre numéro !");
    // Ici tu appelleras ton API pour envoyer un OTP
    console.log("Numéro envoyé :", phone);
  };

  return (
    <div className="min-h-screen flex justify-center items-center  px-4">

      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <FiSmartphone className="text-indigo-600 text-4xl" />
          <h1 className="text-2xl font-bold text-slate-800 mt-2">Connexion</h1>
          <p className="text-sm text-slate-500 mt-1 text-center">
            Connectez-vous avec votre numéro pour continuer.
          </p>
        </div>

        {/* INPUT */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-slate-700">Numéro de téléphone</label>
          <input
            type="text"
            placeholder="07 49 85 23 10"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none 
                       focus:border-indigo-500 text-sm"
          />
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSendCode}
          className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md 
                     font-medium hover:bg-indigo-700 transition-all"
        >
          Recevoir un code
        </button>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <span className="h-px bg-gray-300 w-full"></span>
          <span className="text-sm text-gray-400">ou</span>
          <span className="h-px bg-gray-300 w-full"></span>
        </div>

        {/* LINK INSCRIPTION */}
        <Link
          href="/compte/inscription"
          className="block w-full bg-green-600 text-white py-2 text-center rounded-md 
                     font-medium hover:bg-green-700 transition-all"
        >
          Créer un nouveau compte
        </Link>

      </div>

    </div>
  );
}
