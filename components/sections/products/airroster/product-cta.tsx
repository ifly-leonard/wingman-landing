
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function AirrosterProductCTA() {
    return (
        <section id="cta" className="p-5 bg-gradient-to-r from-blue-500 to-blue-600 flex justify-between items-center rounded-2xl md:p-10 w-full max-w-screen-xl">
            <div className="text-white text-left">
                <h2 className="text-2xl font-bold">Convinced already?</h2>
                <p>Find out why 50,000+ users love AirRoster</p>
            </div>
            
            {/* <Button href="#" className="bg-white text-blue-500 py-2 px-4 rounded-lg hover:bg-white hover:scale-100 transition duration-300">
                Try AirRoster now for FREE
            </Button> */}

            {/* <RainbowButton className="bg-white">
            Try AirRoster now for FREE
            </RainbowButton> */}

            <Link href="https://app.airroster.com" target="_blank">
                <Button className={cn(
                    "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center border-0 bg-white px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",

                    // before styles
                    "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",

                    // light mode colors
                    "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",

                    // dark mode colors
                    "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",                    
                )}>
                    Try AirRoster now for FREE
                </Button>
            </Link>
        </section>
    )
}