import Link from "next/link";

export interface CategoryCardProps {
  icon: string;
  title: string;
  description?: string;
  link: string;
}
export default function CategoryCard({ icon, title, description, link } : CategoryCardProps) {
  return (
    <div className="cursor-pointer
 basis-[300px] bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border border-transparent hover:border-slate-300">
      <div className="text-6xl mb-4">{icon}</div>

      <h2 className="text-xl font-semibold mb-2">{title}</h2>

      {description && (
        <p className="text-gray-600 text-sm mb-4 text-center">{description}</p>
      )}

      <Link
        href={link}
        className="hover:-translate-y-1 transition-all mt-auto px-20 py-3 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium shadow-md hover:shadow-xl"
      >
        ACCEDER
      </Link>
    </div>
  );
}
