import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font mt-5">
            <div className="container bg-gray-100/80 px-2 py-12 rounded-t-lg mx-auto">                                
                <div className="flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-128 flex-shrink-0 mx-auto text-center">
                        <Link href="/" className="flex title-font font-medium items-center justify-center text-gray-900">
                            <Image src="/images/wm-logo-text-only.svg" width="150" height="100" alt="Wingman" />                            
                        </Link>                    
                        
                        {/* <div className="font-medium text-xl text-gray-500 text-center">
                            Modern apps for <span className="font-bold">everyone</span> in aviation
                        </div> */}


                        <nav className="flex flex-wrap justify-center gap-6 mt-4 uppercase text-sm">
                            <Link href="/policy/privacy" className="text-gray-600 hover:text-gray-800 no-underline transition-colors">Privacy Policy</Link>
                            <Link href="/policy/cookie" className="text-gray-600 hover:text-gray-800 no-underline transition-colors">Cookie Policy</Link>
                            <Link href="/policy/terms-and-conditions" className="text-gray-600 hover:text-gray-800 no-underline transition-colors">Terms and Conditions</Link>
                            <Link href="/policy/refund-policy" className="text-gray-600 hover:text-gray-800 no-underline transition-colors">Refund Policy (WIP)</Link>
                        </nav>


                        <div className="flex justify-center gap-4 mt-6">
                            <Link href="https://www.instagram.com/wingman_avtech" className="text-gray-600 hover:text-gray-800 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                            </Link>
                            <Link href="https://x.com/wingman_avtech" className="text-gray-600 hover:text-gray-800 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
                            </Link>
                            
                            <Link href="https://www.linkedin.com/company/wingman-avtech" className="text-gray-600 hover:text-gray-800 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </Link>
                            <Link href="https://www.tiktok.com/@wingman_avtech" className="text-gray-600 hover:text-gray-800 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
                                </svg>
                            </Link>
                            <Link href="https://www.youtube.com/@wingman_avtech" className="text-gray-600 hover:text-gray-800 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                                </svg>
                            </Link>
                        </div>
                      
                        <div className="flex flex-col items-center mt-5 mb-6">
                            <div className="flex items-center gap-2 border-2 border-gray-300 rounded-full px-3 py-1">
                                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                <span className="text-sm font-medium text-gray-700">All Systems Operational</span>
                            </div>                                   
                        </div>

                        {/* <div className="mt-3 flex flex-wrap items-center justify-center gap-3 cursor-pointer">
                            <div className="flex items-center gap-1.5 rounded-full bg-gray-400 px-3 py-1 text-xs font-bold text-gray-100 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                                GDPR Compliant 🇪🇺
                            </div>
                            <div className="flex items-center gap-1.5 rounded-full bg-gray-400 px-3 py-1 text-xs font-bold text-gray-100 shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                                CCPA Compliant 🇺🇸
                            </div>                        
                        </div> */}

                        <div className="mt-5 text-center">
                            Wingman Avtech Pvt. Ltd © 2017 - 2025                        
                        </div>

                        <div className="mt-1 text-sm text-gray-400 text-center">
                            All logos, trademarks, and brand names belong to their respective owners unless otherwise specified. Use of these marks does not imply endorsement.
                        </div>

                       
                    </div>
                </div>
                {/* <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">POLICIES</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a href="/policy/privacy" className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/policy/cookie" className="text-gray-600 hover:text-gray-800">Cookie Policy</a>
                            </li>
                            <li>
                                <a href="/policy/terms-and-conditions" className="text-gray-600 hover:text-gray-800">Terms and Conditions</a>
                            </li>
                            <li>
                                <a href="/policy/refund-policy" className="text-gray-600 hover:text-gray-800">Refund Policy (WIP)</a>
                            </li>
                        </nav>
                    </div>                                
                </div> */}
            </div>
            {/* <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <a className="text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a className="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </div> */}
        </footer>
    )
}