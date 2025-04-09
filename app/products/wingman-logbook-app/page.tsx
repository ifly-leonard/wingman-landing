// app/products/wingman-logbook-app/page.tsx
"use client"

import WingmanProductHero from "@/components/sections/products/wingman/wm-product-hero"
import WingmanProductStats from "@/components/sections/products/wingman/wm-product-stats"
import WingmanProductPainpointReveal from "@/components/sections/products/wingman/wm-product-pain-points"
import WingmanProductSolutionReveal from "@/components/sections/products/wingman/wm-product-solution-point"
import { AnimatedBeamMultipleOutputDemo } from "@/components/sections/products/wingman/wm-product-explainer"

import { WingmanProductRosterIntegrations } from "@/components/sections/products/wingman/wm-product-roster-integrations"
import WingmanProductAirlines from "@/components/sections/products/wingman/wm-product-airlines"
import WingmanFrustrationSlider from "@/components/sections/products/wingman/wm-frustration-slider"
import WingmanEffortCalculator from "@/components/sections/products/wingman/wm-effort-calculator"

import { TextReveal } from "@/components/ui/text-reveal"
const pageName = "Wingman Logbook App";



export default function WingmanLogbookApp() {
    return (
        <div>
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
                <div className="flex flex-col items-center">
                    <div className="text-center mt-2">
                        Wingman is an end-to-end digital pilot logbook for pilots who value time. 
                    </div>
                </div>
            </section>

            <section id="product-oneliner" className="z-10 flex max-w-6xl min-h-64 items-center justify-center">
                <div className="flex">        
                    <TextReveal text="Humans took to the skies in the early 1900s 🫡. By the late 1920s, pilots began logging their flights one-by-one, by hand 🤔. A century later, while aircraft have evolved into cutting-edge machines, logbooks remain stuccccck in the passsssttttt. 😭" />
                </div>
            </section>

            <section id="pain-point-reveal" className="flex max-w-6xl items-center justify-center">                
                <WingmanProductPainpointReveal />
            </section>

            <section id="product-explanation" className="flex max-w-6xl items-center justify-center">
                <WingmanEffortCalculator />           
            </section>                     

            
            <section id="solution-reveal" className="flex max-w-6xl items-center justify-center">               
                <WingmanProductSolutionReveal />
            </section>   
            

            <section id="task-and-time-saver" className="flex max-w-6xl items-center justify-center">
                {/* <WingmanFrustrationSlider /> */}
            </section>      
            
            <WingmanProductRosterIntegrations />

            <WingmanProductAirlines />          


        </div>
    );
}
