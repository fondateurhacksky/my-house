import Link from "next/link"
import LoginForm from "../ui/loginForm"


export default function Page() {

  return (
    <main className="min-h-screen flex justify-center items-center">

      <div className="w-full max-w-md bg-gray-100 shadow-md rounded-lg p-6 animate-slideDown mb-12">

        {/* Header */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-3xl font-bold text-slate-800 uppercase">
            Connexion
          </h1>
          <p className="text-sm text-slate-500 mt-1 text-center">
            Entrez votre numéro de téléphone pour continuer.
          </p>
        </div>


        <LoginForm/>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3">
          <span className="h-px bg-gray-500 w-full"></span>
          <span className="text-md text-gray-700 mb-1">ou</span>
          <span className="h-px bg-gray-500 w-full"></span>
        </div>

        {/* LINK INSCRIPTION */}
        <Link
          href="/compte/inscription"
          className="block w-full bg-indigo-800 text-white py-2 text-center rounded-md 
                     font-medium hover:bg-indigo-600 transition-all"
        >
          Créer un nouveau compte
        </Link>

      </div>

    </main>
  )
}
