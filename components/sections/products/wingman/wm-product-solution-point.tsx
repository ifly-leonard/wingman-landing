import confetti from 'canvas-confetti';
import { motion } from "framer-motion"
import Image from "next/image"

export default function WingmanProductSolutionReveal() {
    return (
        <>
            <div className="mt-10 ">               
                <div className="text-center space-y-4 pb-20 max-w-full min-h-screen">
                        <h2 className="text-sm text-blue-500 font-mono font-semibold tracking-wider uppercase">
                        What if we told you, you don&apos;t have to go through this
                        </h2>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold lowercase tracking-tighter leading-tight text-gray-900">
                            <div>
                            never, ever.
                            </div>
                        </h3>
                </div>

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
                                Wingman Logbook
                            </h3> 
                        </div>

                        <div className="mt-12">
                            <Image src="/images/award-wreath-wingman.svg" width={200} height={200} alt="Award"></Image>
                        </div>
                    </div>
                </motion.div>   
            </div>
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
                        <Image
                            onClick={() =>  confetti({
                                particleCount: 500,
                                spread: 100,
                                origin: { y: 0.7 }
                            })}
                            className="object-cover object-center rounded w-96 translate transition hover:scale-105 durtion-250 cursor-pointer"
                            alt="Wingman app interface showing flight details"
                            src="/images/app-mockups/wingman/my-flights.png"
                            width={400}
                            height={600}
                        />
                    </motion.div>
                </div>                                      
            </div>
        </>
    )
}