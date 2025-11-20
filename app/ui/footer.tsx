export default function Footer() {
  return (
    <footer className="text-black py-8 w-full flex flex-col items-center">
      {/* Première ligne : liens */}

      <div className="w-1/2 border-t border-slate-700 mt-6 pt-4 text-center text-xs text-slate-100"></div>
      <ul className="w-1/2 flex flex-col sm:flex-row justify-center gap-6 text-center text-sm sm:text-base">
        <li>
          <a
            href="/a-propos"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            À propos de nous
          </a>
        </li>
        <li>
          <a
            href="/pourquoi-nous"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Pourquoi nous
          </a>
        </li>
        <li>
          <a
            href="/comment-nous-fonctionnons"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Comment nous fonctionnons
          </a>
        </li>
        <li>
          <a
            href="/nos-contacts"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Nos contacts
          </a>
        </li>
      </ul>

      {/* Deuxième ligne */}
      <div className="w-4/5 border-t border-slate-700 mt-4 pt-3 text-center text-xs text-slate-500 ">
        © {new Date().getFullYear()} MonSite. Tous droits réservés.
      </div>
    </footer>
  );
}
