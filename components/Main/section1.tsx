'use client'
import React, { useState, useEffect } from "react";
import VoireAn from './button/voirAn';
import Text from "./text";

export default function Section1() {
  const [isSectionVisible, setSectionVisible] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 200) {
      setSectionVisible(false); // Cacher la section
    } else {
      setSectionVisible(true); // Afficher la section
    }

  };

  // Écoute des événements de défilement lors du montage du composant
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);
    return () => {
      // Nettoyer l'écouteur d'événements lorsque le composant est démonté
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`flex flex-col md:flex-row justify-evenly items-center bg-white border-slate-700 h-screen w-screen ${
        isSectionVisible ? "opacity-100 transition-opacity duration-500" : "opacity-0 transition-opacity duration-500"
      }`}
    >
      <div className="flex flex-col justify-center items-center">
        <Text />
        <VoireAn />
      </div>

        <iframe
          className="lg:w-[400px] lg:h-[330px] w-[300px] h-[250px]"
          src="https://www.youtube.com/embed/mo5PExrurGY?si=GER8ZI5lplDHf9-u"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
    </section>
  );
}
