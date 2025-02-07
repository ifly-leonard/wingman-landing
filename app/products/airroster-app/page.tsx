"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import AirrosterProductGallery from "@/components/sections/products/airroster/product-gallery"
import AirrosterProductStats from "@/components/sections/products/airroster/product-stats"
import { useEffect, useRef } from "react";
import AirrosterProductFeatures from "@/components/sections/products/airroster/product-features"
import AirrosterProductExplainerScrollSync from "@/components/sections/products/airroster/product-explainer-scrollsync"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { cn } from "@/lib/utils";
import AirrosterProductTestimonials from "@/components/sections/products/airroster/product-testimonials"
import { MarqueeDemo } from "@/components/sections/home/testimonials"
import { AirrosterProductRosterIntegrations } from "@/components/sections/products/airroster/product-roster-integrations"
import AnimatedAccordionPage from "@/components/sections/products/airroster/product-faq"
import AirrosterProductCTA from "@/components/sections/products/airroster/product-cta"
import AirrosterProductAirlines from "@/components/sections/products/airroster/product-airlines"
import { AirrosterProductOneliner } from "@/components/sections/products/airroster/product-oneliner"
import AirrosterProductPricingTable from "@/components/sections/products/airroster/product-pricing"

const pageName = "AirRoster App";

export default function AirRosterApp() {

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const interval = setInterval(() => {
                scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
            }, 3000);
            return () => clearInterval(interval);
        }
    }, []);



    return (
        <div className="flex flex-col items-center">
            <div className="text-center mt-2">
                <motion.div
                    initial={{ scale: 5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1 }}
                    transition={{
                        type: 'tween',
                        velocity: 9.2,
                        stiffness: 400,
                        damping: 10,
                        mass: 1,
                        bounce: 10,
                        restSpeed: 0.001,
                        restDelta: 0.001
                    }}
                >
                    <div className="p-3 rounded-3xl mb-2 shadow-lg">
                        <img src="../../../images/app-logos/airroster-logo-svg.svg" alt="" className="w-24" />
                    </div>                    
                </motion.div>                                                     
            </div>

            <div>
                <motion.div
                    initial={{ scale: 2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1 }}
                    transition={{
                        type: 'tween',
                        velocity: 9.2,
                        stiffness: 400,
                        damping: 10,
                        mass: 1,
                        bounce: 10,
                        restSpeed: 0.001,
                        restDelta: 0.001,
                        delay: 0.2
                    }}
                >
                    <div className="flex flex-col items-center justify-center">                        

                        <div>
                            <h3 className="text-blue-500 text-3xl mt-5">
                                AirRoster
                            </h3> 
                        </div>

                        <div>
                            <Image src="/images/award.png" width={200} height={200} alt="Award"></Image>
                        </div>
                    </div>
                </motion.div>   
            </div>
                        
            <AirrosterProductStats />            

            <AirrosterProductGallery />

            <AirrosterProductOneliner />

            <AirrosterProductFeatures />

            <AirrosterProductExplainerScrollSync />
            
            <AirrosterProductCTA />

            <AirrosterProductRosterIntegrations />

            <AirrosterProductAirlines />

            <AirrosterProductTestimonials />
            
            <AnimatedAccordionPage />

            <AirrosterProductPricingTable />

                


                     {/* 
                <div className="relative w-80 mb-16">              
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="/images/app-mockups/airroster/Airroster mockup.png"
                            alt="App mockup"
                            width={320}
                            height={640}
                            className="w-full rounded-xl"
                        />
                    </motion.div>
                    
                    <motion.div
                        className="absolute top-12 right--12 bg-white p-2 rounded-lg shadow-lg text-left"
                        initial={{ opacity: 0, y: -10, scale: 0 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        <span className="text-sm font-bold text-blue-500">Optimized</span>
                        <p className="text-xs text-gray-500">See your roster without the clutter</p>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-4 right-4 bg-white p-2 rounded-lg shadow-lg text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                    >
                        <p className="text-xs text-gray-800">AirRoster has revolutionized the way I plan my flights. It's a game-changer!</p>
                        <div className="flex items-center mt-1">
                            <span className="text-yellow-400">★★★★★</span>
                        </div>
                    </motion.div>
                </div> 
            */}

            <div className="mt-4">
                <Link href="/">
                    <Button>
                        Back to Home
                    </Button>
                </Link>
            </div>
        </div>
    );
}
