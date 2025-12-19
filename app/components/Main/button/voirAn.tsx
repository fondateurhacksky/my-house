import Link from "next/link";
import { TfiAnnouncement } from "react-icons/tfi";

export default function PublierAn() {
    return (
        <div>
            <Link
                href="/annonces/deposer"
                className="block duration-500 w-full text-xl font-medium hover:bg-slate-700 rounded-md border-2 border-slate-700 text-slate-950 hover:text-white md:text-base p-3 mt-3"
            >
                Déposer une annonce{" "}
                <TfiAnnouncement className="inline-block w-4 h-5 pb-0.5" />
            </Link>
        </div>
    );
}
