// app/products/features/page.tsx
"use client";

import { FC } from "react";
import { LucideBrain, LucideClock, LucideCalendar, LucideCloud, LucideUsers, LucideBell } from "lucide-react";

const features = [
    {
        title: "AI-Powered Scheduling",
        description: "Intelligent scheduling that learns your preferences and optimizes your time.",
        Icon: LucideBrain,
    },
    {
        title: "Smart Time Blocking",
        description: "Automatically block time for focused work and personal activities.",
        Icon: LucideClock,
    },
    {
        title: "Predictive Event Planning",
        description: "AI suggests optimal times for meetings and events based on your habits.",
        Icon: LucideCalendar,
    },
    {
        title: "Cloud Sync",
        description: "Access your schedule across all devices in real-time.",
        Icon: LucideCloud,
    },
    {
        title: "Team Collaboration",
        description: "Easily coordinate schedules with team members and clients.",
        Icon: LucideUsers,
    },
    {
        title: "Smart Reminders",
        description: "Contextual notifications that adapt to your schedule and priorities.",
        Icon: LucideBell,
    },
];

const AirrosterProductFeatures: FC = () => {
    return (
        <section id="product-features" className="py-12 sm:py-20 max-w-screen-lg mx-auto px-6">
            <div className="text-center space-y-4 pb-10">
                <h2 className="text-sm text-blue-500 font-mono font-semibold tracking-wider uppercase">
                    Features
                </h2>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold lowercase tracking-tighter leading-tight text-gray-900">
                    What our users <span className="text-blue-500 underline">like</span>
                </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map(({ title, description, Icon }, index) => (
                    <div
                        key={index}
                        className="rounded-lg overflow-hidden bg-white shadow p-6 flex flex-col items-center text-center"
                    >
                        <div className="flex flex-col items-center gap-y-4 mb-4">
                            {/* <div className="bg-gradient-to-b from-blue-500 to-blue-600/80 p-3 rounded-lg text-white">
                                
                            </div> */}
                                <Icon className="w-1/2 h-[30px] text-blue-500" />
                            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{description}</p>                        
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AirrosterProductFeatures;
