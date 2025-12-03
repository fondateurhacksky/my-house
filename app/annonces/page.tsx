import { annLinks } from "../lib/utility";
import CategoryCard from "../components/CategoryCard";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Annonces',
}
export default function AnnoncesPage() {

  return (
    <main>
      <h1 className="text-3xl font-bold text-center mb-3">
        Que recherchez-vous ?
      </h1>
      <p className="text-center text-gray-600 mb-10">
        Choisissez une catégorie pour voir les annonces disponibles.
      </p>

      <div className="flex flex-row justify-around h-80">
        {annLinks.map((cat) => (
          <CategoryCard
            key={cat.title}
            icon={cat.icon}
            title={cat.title}
            description={cat.description}
            link={cat.link}
          />
        ))}
      </div>
    </main>
  );
}
