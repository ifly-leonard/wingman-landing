// app/products/wingman-logbook-app/page.tsx
"use client"

import { useEffect } from "react"
import WingmanProductHero from "@/components/sections/products/wingman/wm-product-hero"
import WingmanProductStats from "@/components/sections/products/wingman/wm-product-stats"
import WingmanProductPainpointReveal from "@/components/sections/products/wingman/wm-product-pain-points"
import WingmanProductSolutionReveal from "@/components/sections/products/wingman/wm-product-solution-point"
import { WingmanProductRosterIntegrations } from "@/components/sections/products/wingman/wm-product-roster-integrations"
import WingmanProductAirlines from "@/components/sections/products/wingman/wm-product-airlines"
import WingmanEffortCalculator from "@/components/sections/products/wingman/wm-effort-calculator"
import { WingmanProductEAASurvey } from "@/components/sections/products/wingman/wm-product-eaa-survey"
import WingmanProductFeatures from "@/components/sections/products/wingman/wm-product-features"
import WingmanProductUSPCards from "@/components/sections/products/wingman/wm-product-usp-cards"
import HeroScrollDemo from "@/components/container-scroll-animation-demo"
import Script from "next/script"

import { useScrollBackground } from "@/app/hooks/useScrollBackground"
import { useBackgroundContext } from "@/app/contexts/BackgroundContext"

import { TextReveal } from "@/components/ui/text-reveal"
import BentoDemo from "@/components/sections/home/bento"

/**
 * WingmanLogbookApp Page
 * 
 * This page includes scroll-triggered background color changes for different sections.
 * 
 * HOW THE BACKGROUND COLOR CHANGES WORK:
 * 
 * 1. We use the useScrollBackground hook to set up which sections should 
 *    change the background color when they're visible.
 * 
 * 2. For each section:
 *    - targetId:  The HTML ID of the section (must match the ID in the HTML below)
 *    - color:     The Tailwind CSS class to apply for the background (and text if needed)
 *    - priority:  Which section "wins" when multiple are visible (higher number wins)
 *    - threshold: How much of the section must be visible to trigger (0.4 = 40%)
 * 
 * 3. The background changes happen automatically as you scroll through the page.
 *    - When a section is 40% visible, its background color activates
 *    - When multiple sections are visible, the one with higher priority wins
 *    - When no sections are visible, the background returns to default
 * 
 * 4. All transitions between colors are smooth thanks to CSS transitions
 *    defined in the globals.css file.
 */
export default function WingmanLogbookApp() {
    // SECTION 1: Pain Point Reveal - changes background to red when visible
    useScrollBackground({
        targetId: "pain-point-reveal",   // Must match HTML ID in the markup below
        color: "bg-black text-white",  // Background color (and text color) to apply
        priority: 10,                     // Priority level (higher numbers take precedence)
        threshold: 0.4,                   // Activates when section is 40% visible
    });

    // SECTION 2: Solution Reveal - changes background to light green when visible
    // useScrollBackground({
    //     targetId: "solution-reveal",     // Must match HTML ID in the markup below
    //     color: "bg-green-500",           // Background color to apply 
    //     priority: 20,                    // Higher priority than pain-point-reveal
    //     threshold: 0.4,                  // Activates when section is 40% visible
    // });
    
    // Debug: log current background color when it changes
    const { currentBackgroundColor } = useBackgroundContext();
    
    useEffect(() => {
        console.log("Current background color:", currentBackgroundColor);
    }, [currentBackgroundColor]);

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

            {/* BACKGROUND CHANGE SECTION 1: Red background when visible */}
            <section id="pain-point-reveal" className="flex max-w-6xl items-center justify-center">                
                <WingmanProductPainpointReveal />                
            </section>

            <section id="eaa-survey" className="flex items-center justify-center">
                <WingmanProductEAASurvey />
            </section>

            {/* <section id="product-explanation" className="flex max-w-6xl items-center justify-center">
                <WingmanEffortCalculator />           
            </section>                      */}

            
            {/* BACKGROUND CHANGE SECTION 2: Green background when visible */}
            <section id="solution-reveal" className="flex max-w-6xl items-center justify-center">               
                <WingmanProductSolutionReveal />
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
