import SectionHeader from "@/components/ui/section-header";
import Link from "next/link"
import SupportFAQ from "@/components/sections/support/support-faq"
import Globe from "@/components/ui/globe";

export default function CookiePolicyPage() {
    return (
        <>
            {/* <SectionHeader header="POLICY" subheader="Privacy" /> */}

            <ol className="flex items-center whitespace-nowrap mt-10 mb-10">
                <li className="inline-flex items-center">
                    <a className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/">
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
                    <Link className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600" href="/support">
                        Support
                    </Link>
                </li>
            </ol>

            <section className="body-font mt-12 flex px-10 py-24 mx-auto max-w-7xl md:flex-row flex-col items-center justify-center">
                <div className="relative flex max-w-full items-center justify-center overflow-hidden rounded-lg border px-40 pb-40 pt-8 md:pb-60 bg-gray-400">

                    <span className="pointer-events-none whitespace-pre-wrap bg-clip-text text-center leading-none text-white">
                        <p className="mt-2 mb-12">
                            At Wingman, we pride ourselves with providing industry leading support for our customers.
                            You will NEVER talk to an AI chat bot.
                        </p>

                        <h2 className="text-7xl font-bold">Worldwide Support</h2>

                    </span>

                    <Globe className="top-28" />

                    <div className="pointer-events-none absolute inset-0 h-full" />
                </div>
            </section>



            <SupportFAQ />

            <h3 className="text-3xl">
                Still no help?
            </h3>
            <p className="text-2xl">
                It's 19:32 in India, our support team is currently
                <span className="px-3 py-1 border-2 border-gray-500 rounded-3xl ml-1">
                    offline 😴
                </span>
            </p>
            <p className="mt-3">
                Support watch hours: Monday to Saturday, 10:00 to 19:00
            </p>

            <section className="mx-auto w-full max-w-screen-xl p-6 text-gray-800 space-y-8">
                <div className="flex justify-center text-center">
                    <div>

                    </div>
                </div>
                <div className="mt-5 flex gap-3 justify-center">
                    <div className="px-6 py-12 d-flex space-y-8 items-center text-center justify-center bg-gradient-to-r from-blue-500 to-blue-500/90 text-white rounded-2xl w-2/3 cursor-pointer">
                        <div className="text-xl">
                            Search for knowledge base
                        </div>

                        <div>
                            <span className="border-2 border-white rounded-2xl px-3 py-1">
                                1230 articles
                            </span>
                        </div>
                    </div>
                    <div className="px-6 py-12 d-flex space-y-8 items-center text-center justify-center bg-gradient-to-r from-blue-500 to-blue-500/90 text-white rounded-2xl w-2/3 cursor-pointer">
                        <div className="text-xl">
                            Talk to a human
                        </div>

                        <div>
                            <span className="border-2 border-white rounded-2xl px-3 py-1">
                                Avg. response time: <span className="font-bold">18 minutes</span> 🔥
                            </span>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}