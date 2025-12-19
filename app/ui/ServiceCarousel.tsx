"use client";

import { useState } from "react";
import ServiceCard from "./ServiceCard";

export default function ServiceCarousel({
  services,
  title,
}: {
  services: any[];
  title: string;
}) {
  const [index, setIndex] = useState(0);

  const ITEMS_PER_PAGE = 3;
  const maxIndex = Math.max(services.length - ITEMS_PER_PAGE, 0);

  const visibleServices = services.slice(
    index,
    index + ITEMS_PER_PAGE
  );

  return (
      <section className=" relative w-full bg-white border-2 border-slate-300 rounded-md shadow-xl px-14 py-8">
        
          <h1 className="text-2xl font-bold mb-6 capitalize">
              Annonces – {title}
          </h1>

        {/* BOUTON PREVIOUS */}
        <button
          onClick={() =>
            setIndex((i) => Math.max(i - ITEMS_PER_PAGE, 0))
          }
          disabled={index === 0}
          className="absolute left-3 top-1/2 -translate-y-1/2
                     w-10 h-10 rounded-full border bg-white
                     text-xl font-bold
                     disabled:opacity-30"
        >
          ‹
        </button>

        {/* ZONE D’AFFICHAGE DES CARDS */}
        <div className="flex gap-8 w-full">
          {visibleServices.map((item) => (
            <div
              key={item.id}
              className="flex-1 min-w-0"
            >
              <ServiceCard service={item} />
            </div>
          ))}
        </div>

        {/* BOUTON NEXT */}
        <button
          onClick={() =>
            setIndex((i) =>
              Math.min(i + ITEMS_PER_PAGE, maxIndex)
            )
          }
          disabled={index >= maxIndex}
          className="absolute right-3 top-1/2 -translate-y-1/2
                     w-10 h-10 rounded-full border bg-white
                     text-xl font-bold
                     disabled:opacity-30"
        >
          ›
        </button>
      </section>
  );
}
