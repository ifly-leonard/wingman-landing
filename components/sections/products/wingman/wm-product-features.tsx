import Image from "next/image"
import { motion } from "framer-motion"
export default function WingmanProductFeatures() {
    return (
        <>            
            <section id="hero">
                <div className="sm:py-20 py-12 min-h-[100vh] w-full overflow-hidden">
                    
                    <main className="mx-auto pt-16 sm:pt-24 md:pt-32 text-center relative px-4">                    
                        <div className="max-w-5xl mx-auto">

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
                            <Image 
                                src="../../../images/app-logos/wingman-logo-svg.svg" 
                                alt="Wingman Logo" 
                                width={96}
                                height={96}
                                className="w-24" 
                            />
                        </div>                    
                    </motion.div>                                                     
                </div>

                            <h1 className="text-5xl font-bold mb-4 tracking-tighter" style={{opacity: 1, willChange: "auto"}}>Smart scheduling powered by AI.</h1>
                            <p className="max-w-2xl mx-auto text-xl mb-8 font-medium text-balance" style={{opacity: 1, willChange: "auto"}}>
                            Cal AItransforms your speech into text instantly. Perfect for quick note-taking, content creation, and capturing ideas on-the-go.
                            </p>                        
                        </div>
                        <div className="flex flex-nowrap items-center justify-center gap-4 sm:gap-8 h-auto sm:h-[500px] select-none">
                        <Image                           
                                className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
                                alt="Wingman app interface showing flight details"
                                src="/images/app-mockups/wingman/my-flights.png"
                                width={400}
                                height={600}
                            />
                            <Image                           
                                className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
                                alt="Wingman app interface showing flight details"
                                src="/images/app-mockups/wingman/my-flights.png"
                                width={400}
                                height={600}
                            />
                            <Image                           
                                className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
                                alt="Wingman app interface showing flight details"
                                src="/images/app-mockups/wingman/my-flights.png"
                                width={400}
                                height={600}
                            />
                            <Image                           
                                className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
                                alt="Wingman app interface showing flight details"
                                src="/images/app-mockups/wingman/my-flights.png"
                                width={400}
                                height={600}
                            />
                            <Image                           
                                className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
                                alt="Wingman app interface showing flight details"
                                src="/images/app-mockups/wingman/my-flights.png"
                                width={400}
                                height={600}
                            />
                            <Image                           
                                className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
                                alt="Wingman app interface showing flight details"
                                src="/images/app-mockups/wingman/my-flights.png"
                                width={400}
                                height={600}
                            />
                            <Image                           
                                className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0"
                                alt="Wingman app interface showing flight details"
                                src="/images/app-mockups/wingman/my-flights.png"
                                width={400}
                                height={600}
                            />
                            <img 
                                src="/Device-2.png" 
                                alt="iPhone" 
                                className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0" 
                                style={{opacity: 1, willChange: "auto", transform: "none"}} 
                            />
                            <img 
                                src="/Device-3.png" 
                                alt="iPhone" 
                                className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0" 
                                style={{opacity: 1, willChange: "auto", transform: "none"}} 
                            />
                            <img 
                                src="/Device-4.png" 
                                alt="iPhone" 
                                className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0" 
                                style={{opacity: 1, willChange: "auto", transform: "none"}} 
                            />
                            <img 
                                src="/Device-5.png" 
                                alt="iPhone" 
                                className="w-40 sm:w-64 h-[333px] sm:h-[500px] flex-shrink-0" 
                                style={{opacity: 1, willChange: "auto", transform: "none"}} 
                            />
                        </div>
                    </main>
                </div>
            </section>
        </>
    );
}