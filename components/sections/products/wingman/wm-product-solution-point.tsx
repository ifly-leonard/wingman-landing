import confetti from 'canvas-confetti';
import { motion } from "framer-motion"

export default function WingmanProductSolutionReveal() {
    return (
        <>
            <div className="mt-10">                
                <div className="text-center space-y-4 pb-20">
                        <h2 className="text-sm text-blue-500 font-mono font-semibold tracking-wider uppercase">
                        What if we told you, you never have to go through this
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold lowercase tracking-tighter leading-tight text-gray-900">
                            <div>
                            never, ever.
                            </div>
                        </h3>
                </div>

                <div className="flex items-center justify-center w-full mt-3">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 1.5 } }}
                        transition={{ 
                          type: 'spring',
                          stiffness: 300,
                          damping: 20,
                          mass: 1,
                          restSpeed: 0.001,
                          restDelta: 0.001
                        }}
                        onViewportEnter={() => {
                            setTimeout(() => {
                                confetti({
                                    particleCount: 500,
                                    spread: 100,
                                    origin: { y: 0.7 }
                                });
                            }, 500);
                        }}
                    >
                        <img
                            onClick={() =>  confetti({
                                particleCount: 500,
                                spread: 100,
                                origin: { y: 0.7 }
                            })}
                            className="object-cover object-center rounded w-96 translate transition hover:scale-105 durtion-250 cursor-pointer"
                            alt="hero"
                            src="/images/app-mockups/wingman/my-flights.png"                            
                        />
                    </motion.div>
                </div>                                      
            </div>
        </>
    )
}