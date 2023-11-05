
import Link from 'next/link'
import { posts } from "../../utility/utility";
import { clsx } from 'clsx'
import { usePathname } from 'next/navigation';


export default function List({ horiVisible }: { horiVisible: boolean }) {
        const  pathname  = usePathname();
        return (
          <ul className={clsx(` transition-all duration-300 absolute sm:static sm:h-auto h-screen text-white sm:text-black z-30 inset-y-0 right-0 shadow-2xl sm:shadow-none text-base sm:text-xl flex flex-col sm:flex-row sm:pt-0 pt-16 items-center font-medium bg-slate-700 sm:bg-white sm:w-auto
          [&>*:not(:first-child)]:border-t-2 sm:[&>*:not(:first-child)]:border-t-2 [&>*:not(:first-child)]:border-slate-50 sm:[&>*:not(:first-child)]:border-slate-500 sm:[&>*:not(:first-child)]:ml-2`,
          {
            'w-0': horiVisible,
            'w-1/2': !horiVisible,
          }
          )}
          
          >
            {posts.map((post) => (
              <li
                key={post.id}
                className={`last:border-b-2  first:border-t-2 border-slate-50 sm:first:border-t-2 sm:flex-1 w-full sm:w-[135px] ${pathname === post.slug ? 'sm:bg-slate-200' : ''} hover:bg-slate-200 text-center sm:rounded py-1 sm:py-2 sm:border-2 sm:border-slate-500 cursor-pointer  ${post.display}`}
              >
                <Link href={post.slug} scroll={false} className='sm:py-3 px-8 sm:before:ml-[-15px]'>
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        );
      }
      