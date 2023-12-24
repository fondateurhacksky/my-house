'use client'
import VoireAn from './button/voirAn';
import Text from "./text";
import { clsx } from 'clsx';

export default function Section1() {

  return (
    <section
      className={clsx(`grid grid-rows-3 border-slate-700 w-screen`)}
    >
      <div className="row-span-2 py-4 flex flex-col md:flex-row justify-center	md:justify-evenly items-center">

        <div className="flex flex-col justify-center items-center">
          <Text />
          <VoireAn />
        </div>

        <iframe
            className="lg:w-[400px] lg:h-[330px] w-[300px] h-[250px] mt-5"
            src="https://www.youtube.com/embed/mo5PExrurGY?si=GER8ZI5lplDHf9-u"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        ></iframe>

      </div>

      <footer className="row-span-3 bg-slate-50 border-t border-slate-500 w-full">

        <ul className="m-4 flex-col h-36 justify-around inline-flex text-slate-800">
            <li className="hover:underline"><a href="/a-propos">À propos de nous</a></li>
            <li className="hover:underline"><a href="/pourquoi-nous">Pourquoi nous</a></li>
            <li className="hover:underline"><a href="/comment-nous-fonctionnons">Comment nous fonctionnons</a></li>
            <li className="hover:underline"><a href="/nos-contacts">Nos contacts</a></li>
        </ul>

      </footer>

    </section>
  );
}
