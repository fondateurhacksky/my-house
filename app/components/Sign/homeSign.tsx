import Form from "@/app/ui/form";

export default function FormulaireInscription() {
  return (
      <div className="max-w-5xl w-full bg-white p-4 md:px-16 rounded-lg shadow-lg mb-16 
                      flex flex-col md:flex-row items-center gap-10 border border-slate-100 animate-fadeIn">
                        {/* Fade-in animation container */}

        {/* FORMULAIRE — À GAUCHE */}
        <Form/>

        {/* Séparateur vertical */}
        <div className="hidden md:block h-[460px] w-px bg-gray-300"></div>

        {/* IMAGE — À DROITE */}
        <div className="hidden md:flex w-1/2 justify-center items-center">
          <img
            src="/outils/teamwork.svg"
            alt="Illustration d'inscription"
            className="w-full h-auto"
          />
        </div>
      </div>
  );
}
