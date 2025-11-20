export default function MainFooter() {

  return(
        <footer className="border-b border-slate-500 shadow-lg w-full bg-gray-100">

            <ul className="m-4 flex-row  justify-around items-center flex text-slate-800 text-black">
                <li className="hover:underline"><a href="/a-propos">À propos de nous</a></li>
                <li className="hover:underline"><a href="/pourquoi-nous">Pourquoi nous</a></li>
                <li className="hover:underline"><a href="/comment-nous-fonctionnons">Comment nous fonctionnons</a></li>
                <li className="hover:underline"><a href="/nos-contacts">Nos contacts</a></li>
            </ul>

        </footer>
  )

}