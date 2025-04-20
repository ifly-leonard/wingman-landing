// app/products/wingman-logbook-app/page.tsx
"use client"

import { useRef, useEffect } from "react"
import WingmanProductHero from "@/components/sections/products/wingman/wm-product-hero"
import WingmanProductStats from "@/components/sections/products/wingman/wm-product-stats"
import WingmanProductPainpointReveal from "@/components/sections/products/wingman/wm-product-pain-points"
import WingmanProductSolutionReveal from "@/components/sections/products/wingman/wm-product-solution-point"
import { WingmanProductRosterIntegrations } from "@/components/sections/products/wingman/wm-product-roster-integrations"
import WingmanProductAirlines from "@/components/sections/products/wingman/wm-product-airlines"
import WingmanEffortCalculator from "@/components/sections/products/wingman/wm-effort-calculator"
import { WingmanProductEAASurvey } from "@/components/sections/products/wingman/wm-product-eaa-survey"
import WingmanProductFeatures from "@/components/sections/products/wingman/wm-product-features"
import Script from "next/script"
import { useScrollBackground } from "@/app/hooks/useScrollBackground"

import { TextReveal } from "@/components/ui/text-reveal"
import BentoDemo from "@/components/sections/home/bento"

export default function WingmanLogbookApp() {
    const painPointSectionRef = useRef<HTMLElement>(null);
    const backgroundColor = useScrollBackground({
        targetRef: painPointSectionRef,
        activeColor: "bg-red-100",
        defaultColor: "",
        threshold: 0.4,
    });

    useEffect(() => {
        // Use requestAnimationFrame for better performance with DOM updates
        const updateBackground = () => {
            if (backgroundColor) {
                document.body.classList.add(backgroundColor);
            } else {
                document.body.classList.remove("bg-red-100");
            }
        };
        
        window.requestAnimationFrame(updateBackground);
        
        return () => {
            // Clean up by removing the class when component unmounts
            document.body.classList.remove("bg-red-100");
        };
    }, [backgroundColor]);

    return (
        <div>
            <Script id="schema-wingman-app" type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "MobileApplication",
                    "name": "Wingman Pilot Logbook",
                    "operatingSystem": "iOS, Android, Web",
                    "applicationCategory": "BusinessApplication",
                    "description": "Logbook for pilots worldwide. Sync rosters from 80+ airlines. iOS, Android & Web supported. Export summaries in PDF and Excel. Trusted by 10,000+ pilots globally.",
                    "url": "https://www.wingmanlog.in/",
                    "downloadUrl": "https://onelink.to/wingman",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.8",
                        "ratingCount": "600"
                    },
                    "offers": {
                        "@type": "Offer",
                        "price": "50",
                        "priceCurrency": "USD"
                    },
                    "applicationStore": [
                        "https://play.google.com/store/apps/details?id=com.logbook.wingman",
                        "https://apps.apple.com/in/app/wingman-pilot-logbook/id1415293165"
                    ],
                    "creator": {
                        "@type": "Organization",
                        "name": "Wingman",
                        "url": "https://www.wingmanlog.in/"
                    }
                }
                `}
            </Script>
            <WingmanProductHero />
            <WingmanProductStats />
                {/*
                    - Should explain the product 
                    - Overall years to date (from inception) stats.
                    - Should target the pain points. Should be scrollable. Excel, Manual, Whitener
                    - Task & Time saver calculator 
                    - Value for money: Cost comparison calculator (compare with other products)
                    - CTA #1
                    - Testimonials 
                    - Plug for binder?
                    - System Integrations
                    - Airline Logo carousels 
                    - FAQs
                    - CTA #2
                */}

            
            <section>
                <div className="flex flex-col items-center max-w-3xl mx-auto mt-10 text-xl text-gray-500">
                    <div className="text-center mt-2">
                        Ever wondered why thousands of pilots are switching to digital logbooks? Discover how Wingman is revolutionizing flight logging for time-conscious aviators.
                    </div>
                </div>
            </section>

            <section id="product-oneliner" className="z-10 flex max-w-6xl min-h-64 items-center justify-center">
                <div className="flex">        
                    <TextReveal text="Humans took to the skies in the early 1900s 🫡. By the late 1920s, pilots began logging their flights one-by-one, by hand 🤔. A century later, while aircraft have evolved into cutting-edge machines, logbooks remain stuccccck in the passsssttttt. 😭" />
                </div>
            </section>

            <section id="pain-point-reveal" className="flex max-w-6xl items-center justify-center" ref={painPointSectionRef}>                
                <WingmanProductPainpointReveal />                
            </section>

            <section id="eaa-survey" className="flex  items-center justify-center">
                <WingmanProductEAASurvey />
            </section>

            {/* <section id="product-explanation" className="flex max-w-6xl items-center justify-center">
                <WingmanEffortCalculator />           
            </section>                      */}

            
            <section id="solution-reveal" className="flex max-w-6xl items-center justify-center">               
                <WingmanProductSolutionReveal />
            </section>   
            
            
            <section id="features" className="flex max-w-6xl items-center justify-center">
                <WingmanProductFeatures />
            </section>

            <section id="task-and-time-saver" className="flex max-w-6xl items-center justify-center">
                {/* <BentoDemo /> */}
            </section>      
            
            
            <section id="roster-integrations" className="flex max-w-6xl items-center justify-center">
                <WingmanProductRosterIntegrations />
            </section>

            <section id="airline-partners" className="flex max-w-6xl items-center justify-center">
                <WingmanProductAirlines />
            </section>


        </div>
    );
}
