import SectionHeader from "@/components/ui/section-header";
import Link from "next/link"
export default function CookiePolicyPage() {
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
                <li className="inline-flex items-center">
                    <Link className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/policy">
                        Policies
                    </Link>
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
                    Cookies
                </li>
            </ol>

            <section id="header" className="p-12 bg-gradient-to-r from-blue-500 to-blue-500/90 rounded-2xl w-full max-w-screen-xl">
                <div className="text-white text-center">
                    <h2 className="text-4xl font-bold">Cookie Policy</h2>
                    <p className="mt-3">Last updated: <strong>8 FEB 2025</strong></p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-screen-xl p-6 text-gray-800 space-y-8">
                <h2 className="text-2xl font-bold">Important Information and Who We Are</h2>
                <p>WINGMAN AVTECH PRIVATE LIMITED ("Wingman", "we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, transfer, and store your data when you access any of our products, services, or applications. Currently, these include:</p>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Wingman Pilot Logbook</li>
                    <li>AirRoster</li>
                    <li>Wingman Canvas</li>
                </ul>                
            </section>

        </>
    );
}