import Link from 'next/link'
import { posts } from "../../app/lib/utility";
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation';


export default function List({ horiVisible }: { horiVisible: boolean }) {
        const  pathname  = usePathname();
        return (
          <ul className={clsx(`transition-all duration-300 absolute sm:static sm:h-auto h-screen text-white sm:text-black z-30 right-0 shadow-2xl sm:shadow-none text-xs sm:text-sm flex flex-col sm:flex-row sm:pt-0 pt-16 items-center font-medium bg-slate-700 sm:bg-white sm:w-auto
          [&>*:not(:first-child)]:border-t-2 sm:[&>*:not(:first-child)]:border-t-2 [&>*:not(:first-child)]:border-slate-50 sm:[&>*:not(:first-child)]:border-slate-500 sm:[&>*:not(:first-child)]:ml-2 w-0`,
          horiVisible && 'w-3/5'
          )}
          
          >
            {posts.map((post) => (
              <li
                key={post.id}
                className={clsx(`last:border-b-2  first:border-t-2 border-slate-50 sm:first:border-t-2 sm:flex-1 w-full sm:w-[135px]`, pathname === post.slug && 'sm:bg-slate-200 bg-white text-black ', `hover:bg-slate-200 text-center sm:rounded py-1 sm:py-2 sm:border-2 sm:border-slate-500 cursor-pointer ${post.display}`)}
              >
                <Link href={post.slug} scroll={false} className='sm:py-2.5 px-9 sm:before:ml-[-15px]'>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        );
      }
      