import Link from 'next/link';

export default function NotFound() {
  return (
    <div className=" min-h-screen flex  items-center justify-around  bg-gray-50 px-4 py-10 text-center">


      <di>
        
      {/* Image */}
      <img 
        src="/outils/notfound.svg"  // Mets le vrai chemin exact
        alt="Not found"
        className="w-[260px] sm:w-[350px] md:w-[420px] mb-6 mx-auto"
      />
      </di>

      {/* Titre */}
   <di>
       <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">
        Oups… Page introuvable
      </h1>

      {/* Sous-titre */}
      <p className="text-gray-600 max-w-md mx-auto mb-6">
        Il semble que la page que vous recherchez n'existe plus ou a été déplacée.
      </p>

      {/* Bouton retour */}
      <Link 
        href="/"
        className="
          px-6 py-3 bg-blue-600 text-white 
          font-medium rounded-md shadow 
          hover:bg-blue-700 transition
        "
      >
        Retour à l'accueil
      </Link>
   </di>
    </div>
  );
}
