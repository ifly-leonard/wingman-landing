import SectionHeader from "@/components/ui/section-header";
import Link from "next/link";
export default function PolicyPage() {
    return (
        <>
            {/* <SectionHeader header="POLICY" subheader="Privacy" /> */}

            <ol className="flex items-center whitespace-nowrap mt-10 mb-10">
                <li className="inline-flex items-center">
                    <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="#">
                        Home
                    </a>
                    <svg
                        className="shrink-0 mx-2 size-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </li>
                <li className="inline-flex items-center text-sm font-semibold text-gray-800 truncate" aria-current="page">
                    Policies
                </li>
            </ol>


            <Link href="policy/privacy">Privacy</Link>
            <Link href="policy/cookie">Cookies</Link>
            <Link href="policy/terms-and-conditions">Terms & Conditions</Link>

           

        </>
    );
}