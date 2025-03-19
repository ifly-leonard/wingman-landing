// import { Button } from "@/components/ui/button"; // Commented out as it's currently unused
// import SectionHeader from "@/components/ui/section-header"; // Commented out as it's currently unused (see commented SectionHeader component below)
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

            <div className="container px-12 py-2 text-left max-w-4xl">
                At Wingman, we carefully audit our policies to stay in touch with the regulatory requirements of the countires in which we operate. Please find below the relevant policies. If there are questions, 
                please direct them to <Link href="mailto:leonard@wingmanlog.com?subject=Regarding policies" className="underline underline-offset-2">leonard(at)wingmanlog.com</Link>
            </div>

            <div className="flex gap-12 mt-12">
                <div>
                        <Link                 
                            className="p-6 bg-blue-500 text-white rounded-xl"
                            href="policy/privacy">
                            Privacy
                        </Link>
                </div>
                <div>
                    <Link 
                    className="p-6 bg-blue-500 text-white rounded-xl"
                    href="policy/cookie">Cookies</Link>
                </div>
                <div>
                    <Link 
                    className="p-6 bg-blue-500 text-white rounded-xl"
                    href="policy/terms-and-conditions">Terms & Conditions</Link>
                </div>

                <div>
                <Link 
                    className="p-6 bg-blue-500 text-white rounded-xl"
                    href="policy">Refund (WIP)</Link>
                </div>
            </div>

           

        </>
    );
}