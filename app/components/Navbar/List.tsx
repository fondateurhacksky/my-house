import Link from 'next/link'
import { navLinks } from "../../lib/utility";
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation';

export default function List({ horiVisible }: { horiVisible: boolean }) {
  const pathname = usePathname();

  return (
    <ul
      className="
        absolute top-1/2 -translate-y-1/2 
        left-1/2 -translate-x-1/2 
        flex  
        gap-6 
      "
    >
      {navLinks.map((post) => (
        <li key={post.id}>
          <Link
            href={post.slug}
            scroll={false}
            className={clsx(`w-32 flex items-center justify-center py-2 border-2 border-slate-500 rounded text-center hover:bg-slate-200 transition `,
              pathname === post.slug &&
                "bg-slate-200 text-black"
            )}
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
