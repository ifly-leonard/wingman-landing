import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export default function AirrosterProductHero() {
    return (
        <div className="relative overflow-hidden">
            {/* Main container */}
            <div className="container mx-auto px-4 py-12 md:py-24">
                {/* Responsive layout: column on mobile, row on desktop */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-12">
                    
                    {/* Left Column (Content Stack) - full width on mobile, 50% on desktop */}
                    <div className="w-full md:w-1/2 space-y-6">
                        {/* Small intro label */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
                                Crew Management Software
                            </span>
                        </motion.div>
                        
                        {/* Large heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                                Smart Rostering for Modern Airlines
                            </h1>
                        </motion.div>
                        
                        {/* Description paragraph */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <p className="text-lg text-slate-700 max-w-xl">
                                <strong>Optimize crew utilization</strong> with AI-powered rostering that reduces scheduling conflicts, improves crew satisfaction, and ensures regulatory compliance.
                            </p>
                        </motion.div>
                        
                        {/* CTA button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            className="pt-2"
                        >
                            <Button size="lg" className="text-base">
                                Request Demo <ArrowRight className="ml-1" />
                            </Button>
                            {/* Reassurance text */}
                            <p className="text-sm text-slate-500 mt-2">
                                Free 14-day trial. No credit card required.
                            </p>
                        </motion.div>
                        
                        {/* Trust section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            className="pt-6"
                        >
                            <div className="flex flex-col space-y-3">
                                {/* Star rating */}
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                    <span className="ml-2 text-sm font-medium text-slate-700">
                                        4.9/5 from 200+ reviews
                                    </span>
                                </div>
                                
                                {/* Platform logos */}
                                <div className="flex items-center space-x-4 pt-2">
                                    <Image 
                                        src="/images/app-logos/airroster-logo-svg.svg" 
                                        alt="AirRoster" 
                                        width={24} 
                                        height={24}
                                        className="h-6 w-auto grayscale opacity-70" 
                                    />
                                    <span className="h-4 w-px bg-slate-300"></span>
                                    <span className="text-sm text-slate-500">Trusted by 50+ airlines worldwide</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    
                    {/* Right Column (Visual Side) - full width on mobile, 50% on desktop */}
                    <div className="w-full md:w-1/2 mt-10 md:mt-0 relative">
                        {/* Decorative backgrounds */}
                        <div className="absolute inset-0 z-0">
                            {/* Cool gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-200 rounded-3xl"></div>
                            
                            {/* Warm gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-100 opacity-70 rounded-3xl"></div>
                            
                            {/* Dot pattern overlay instead of noise texture */}
                            <div className="absolute inset-0 bg-[radial-gradient(#4f46e540_1px,transparent_1px)] [background-size:20px_20px] opacity-30 rounded-3xl"></div>
                        </div>
                        
                        {/* Main image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: 0.2, 
                                type: "spring",
                                stiffness: 100
                            }}
                            className="relative z-10 p-4 md:p-6"
                        >
                            <Image 
                                src="/images/app-mockups/airroster/3.png"
                                alt="AirRoster App Dashboard" 
                                width={800} 
                                height={600}
                                priority
                                className="rounded-xl shadow-2xl w-full h-auto object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}