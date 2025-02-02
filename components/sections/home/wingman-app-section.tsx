"use client" 

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import Link from "next/link";

export default function WingmanAppSectionHomePage() {
    return (
        <section
            className="text-gray-600 body-font mt-12">
            <motion.div         
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 2.0 } }}                          
                className="container flex px-10 py-24 mx-auto max-w-7xl md:flex-row flex-col items-center"
                >
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-3 mb-10 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
                        whileHover={{ scale: 1.1 }}                                                
                        transition={{ 
                          type: 'spring',
                          velocity: 1.2,
                          stiffness: 400,
                          damping: 10,
                          mass: 1,
                          bounce: 10,
                          restSpeed: 0.001,
                          restDelta: 0.001
                        }}
                    >
                        <img
                            className="object-cover object-center rounded w-96"
                            alt="hero"
                            src="images/app-mockups/wingman/my-flights.png"
                            data-aos="zoom-out-up"
                            data-aos-delay="300"
                            data-aos-duration="800"
                        />

                        {/* 
                            Commented out, because it looks like trash. - Leonard
                            
                            <Iphone15Pro
                                className="size-full"
                                src="images/app-mockups/wingman/home-page-screenshot.png"
                            /> 
                        */}
                    </motion.div>
                </div>
                

                <div
                    className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                    data-aos="fade-left"
                >

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
                      whileHover={{ scale: 1.1 }}                                                
                      transition={{ 
                        type: 'spring',
                        velocity: 1.2,
                        stiffness: 400,
                        damping: 10,
                        mass: 1,
                        bounce: 10,
                        restSpeed: 0.001,
                        restDelta: 0.001
                      }}
                    >
                      <div className="p-3 rounded-3xl mb-2 shadow-sm">
                          <img src="images/app-logos/wingman-logo-svg.svg" alt="" className="w-24" />
                      </div>
                    </motion.div>

                    
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        World's #1 pilot logbook app
                    </h1>
                    <div className="mb-8 leading-relaxed">
                        You fly multi-million dollar, state-of-the-art modern airplanes, yet the logging experience is still
                        the same as the 1950s? Take a breath of fresh air. Wingman Pilot Logbook is for the modern aviator.
                        <br />
                        <h2 className="text-lg font-bold mt-3">
                            Anywhere on the planet, 1 logbook app.
                        </h2>
                        <div className="flex flex-row justify-between gap-2 mt-3">
                            <div>🇮🇳 DGCA</div>
                            <div>🇺🇸 FAA</div>
                            <div>🇪🇺 EASA</div>
                            <div>🇬🇧 CAA</div>
                            <div>🇨🇦 TC</div>
                            <div>🇦🇺 CASA and many more...</div>
                        </div>
                    </div>
                    <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                        Learn more about Wingman Pilot Logbook
                    </p>

                    <div className="flex lg:flex-row md:flex-col gap-2" data-aos="fade-out-up" data-aos-delay="300">                        
                            <Link href="/products/wingman-logbook-app">
                                <Button className="inline-flex items-center bg-[#5076C0] text-white border-0 py-2 px-3 focus:outline-none rounded rounded-md mt-4 md:mt-0">                            
                                    Take a look
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-4 h-4 ml-1"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>                            
                            </Button>
                        </Link>

                        <button className="inline-flex items-center bg-white text-[#5076C0] border-0 py-2 px-3 focus:outline-none rounded rounded-md mt-4 md:mt-0">
                            Watch show reel (60 seconds)
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-video"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                                <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
