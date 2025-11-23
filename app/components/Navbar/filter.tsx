import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { FilterContext } from "../../lib/context";

type FilterProps = {
  setState: React.Dispatch<React.SetStateAction<string>>;
};

export default function Filter({ setState }: FilterProps) {
  const pathname = usePathname();
  const filter = useContext(FilterContext);

  const isPersonnalPage = pathname === "/blog/annonces/personnelles";

  const handleToggle = () => {
    setState(filter === "visible" ? "invisible" : "visible");
  };

  return (
    <button
      onClick={handleToggle}
      className={clsx(
        "flex items-center bg-black px-2 w-auto rounded cursor-pointer font-bold ml-3 transition-all duration-200",
        !isPersonnalPage && "hidden"
      )}
    >
      {/* Icône "filtre" */}
      <div className="flex flex-col justify-center">
        <div className="w-8 h-0.5 rounded-full bg-white mb-1 relative">
          <div className="bg-black absolute border-2 border-white rounded-full top-[-3px] left-1 p-0.5" />
        </div>

        <div className="w-8 h-0.5 bg-white rounded-full relative">
          <div className="bg-black absolute border-2 border-white rounded-full top-[-3px] left-5 p-0.5" />
        </div>
      </div>

      {/* Texte */}
      <p className="text-white text-xl ml-2">Filtrer</p>
    </button>
  );
}
