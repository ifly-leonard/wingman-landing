"use client"

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

            <div className="mt-5">
                {/* This needs to be a separate CTA */}
                <AirrosterProductCTA />    
            </div>
                

            {/* <div className="mt-4">
                <Link href="/">
                    <Button>
                        Back to Home
                    </Button>
                </Link>
            </div> */}
        </div>
    );
}
