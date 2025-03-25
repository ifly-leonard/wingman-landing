import { motion } from "framer-motion"
import { NumberTicker } from "@/components/ui/number-ticker"

export default function WingmanProductStats() {
    return (
        <section id="wingman-product-stats" className="mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-gray-800">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <NumberTicker
                        value={10000}
                        suffix="+"
                        className="text-2xl font-bold text-blue-500"
                    />                    
                    <p className="text-sm">Downloads</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.65 }}
                >
                    <p className="text-2xl font-bold text-blue-500">120.5%</p>
                    <p className="text-sm">YoY Growth</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.75 }}
                >
                    <p className="text-2xl font-bold text-blue-500">1.5M+</p>
                    <p className="text-sm">Active User Base</p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.85 }}
                >
                    <p className="text-2xl font-bold text-blue-500">1,500+</p>
                    <p className="text-sm">5-Star Reviews</p>
                </motion.div>
            </div>
        </section>
    )
}