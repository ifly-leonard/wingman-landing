"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import AirrosterProductGallery from "@/components/sections/products/airroster/product-gallery"
import AirrosterProductStats from "@/components/sections/products/airroster/product-stats"
import { useEffect, useRef } from "react";
import AirrosterProductFeatures from "@/components/sections/products/airroster/product-features"
import AirrosterProductExplainerScrollSync from "@/components/sections/products/airroster/product-explainer-scrollsync"
import AirrosterProductTestimonials from "@/components/sections/products/airroster/product-testimonials"
import { AirrosterProductRosterIntegrations } from "@/components/sections/products/airroster/product-roster-integrations"
import AnimatedAccordionPage from "@/components/sections/products/airroster/product-faq"
import AirrosterProductCTA from "@/components/sections/products/airroster/product-cta"
import AirrosterProductAirlines from "@/components/sections/products/airroster/product-airlines"
import { AirrosterProductOneliner } from "@/components/sections/products/airroster/product-oneliner"
import AirrosterProductPricingTable from "@/components/sections/products/airroster/product-pricing"
import AirrosterProductHero from "@/components/sections/products/airroster/product-hero"

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
        <div>
            
            <AirrosterProductHero />
                        
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
