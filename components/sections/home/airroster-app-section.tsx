"use client" 

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Iphone15Pro from "@/components/ui/iphone-15-pro";
import Link from "next/link";

export default function AirRosterHomePage() {
    return (
        <section className="text-gray-600 body-font mt-12">
            <motion.div         
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { delay: 0.5, duration: 2.0 } }}                          
                className="container flex px-10 py-24 mx-auto max-w-7xl md:flex-row flex-col items-center"
            >
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
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
                            <img src="images/app-logos/airroster-logo-svg.svg" alt="" className="w-24" />
                        </div>
                    </motion.div>

                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        World's most beautiful roster app
                    </h1>
                    <div className="mb-8 leading-relaxed">
                        AirRoster was designed from the ground up with one thing in mind.
                        To give pilots & crew around the world, an app that will be a delight to use.
                        <br />
                        <h2 className="text-lg font-bold">
                            Supports 80+ airlines, globally
                        </h2>
                    </div>
                    <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
                        Learn more about AirRoster
                    </p>

                    <div className="flex lg:flex-row md:flex-col gap-2" data-aos="fade-out-up" data-aos-delay="300">
                        <Link href="/products/airroster-app">
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
                    </div>
                </div>

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
                            src="images/app-mockups/airroster/Airroster mockup.png"
                            data-aos="zoom-out-up"
                            data-aos-delay="300"
                            data-aos-duration="800"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
