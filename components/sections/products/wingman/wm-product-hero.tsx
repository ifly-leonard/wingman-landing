import { motion } from "framer-motion"
import Image from "next/image"

export default function WingmanProductHero() {
    return (
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
    )
}