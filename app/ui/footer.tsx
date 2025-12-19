import Link from "next/link";
import { footerLinks } from "@/app/lib/utility";

export default function Footer() {
  return (
    <footer className="text-black  w-full flex flex-col items-center">

      {/* Première barre */}
      <div className="w-1/2 border-t border-slate-500 mt-6 pt-4"></div>

      {/* Liens */}
      <ul className="w-1/2 flex flex-col sm:flex-row justify-center gap-6 text-center text-sm sm:text-base">
        {footerLinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.slug}
              scroll={false}
              className=" inline-block text-slate-700 transition-all duration-[100ms] hover:text-black hover:scale-105 " >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* Deuxième barre */}
      <div className="w-4/5 border-t border-slate-500 mt-4 pt-3 text-center text-xs text-slate-500">
        © {2026} MyHouse. Tous droits réservés.
        
      </div>
    </footer>
  );
}
