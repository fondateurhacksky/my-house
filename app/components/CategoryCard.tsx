import Link from "next/link";

export interface CategoryCardProps {
  icon: string;
  title: string;
  description?: string;
  link: string;
}
export default function CategoryCard({ icon, title, description, link } : CategoryCardProps) {
  return (
    <div className="basis-[300px] bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all p-6 flex flex-col items-center text-center border border-transparent hover:border-slate-500">
      <div className="text-6xl mb-4">{icon}</div>

      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      {description && (
        <p className="text-gray-600 text-sm mb-4">{description}</p>
      )}

      <Link
        href={link}
        className="mt-auto px-8 py-3 bg-slate-600 hover:bg-slate-800 text-white rounded-md text-sm font-medium shadow-md transition"
      >
        Accéder
      </Link>
    </div>
  );
}
