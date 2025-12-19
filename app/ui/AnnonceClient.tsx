"use client"; 
import { useState } from "react";
import FilterPanel from "@/app/ui/FilterPanel";
import ServiceCarousel from "@/app/ui/ServiceCarousel";

export default function AnnonceClient({
  category,
  services,
}: {
  category: string;
  services: any[];
}) {
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <main className="flex px-6 py-8 gap-6 bg-gray-100 rounded-md">
        <FilterPanel
          category="services"
          hasSearched={hasSearched}
          onSearch={() => setHasSearched(true)}
        />

        {hasSearched && (
            <ServiceCarousel
              title={category}
              services={services}
            />
        )}
    </main>
  );
}
