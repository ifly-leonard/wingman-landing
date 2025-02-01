// app/products/wingman-logbook-app/page.tsx
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const pageName = "Wingman Logbook App";

export default function WingmanLogbookApp() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        type: 'spring',
                        velocity: 1.2,
                        stiffness: 400,
                        damping: 10,
                        mass: 1,
                        bounce: 10,
                        restSpeed: 0.001,
                        restDelta: 0.001
                    }}
                >
                    <div className="p-3 rounded-3xl mb-2 shadow-lg">
                        <img src="../../../images/app-logos/wingman-logo-svg.svg" alt="" className="w-24" />
                    </div>
                </motion.div>

                <div className="text-6xl font-bold text-gray-300 mb-4">Coming Soon</div>
                <p>
                    This page inherits the layout of in the /products directory. This page is currently under development
                </p>
                <div className="mt-4">
                    <Link href="/">
                        <Button>
                            Back to Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
