"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const mockupImages = [
    "/images/app-mockups/airroster/1.png",
    "/images/app-mockups/airroster/2.png",
    "/images/app-mockups/airroster/3.png",
    "/images/app-mockups/airroster/4.png",
    "/images/app-mockups/airroster/5.png",
];

const contentData = [
    {
        header: "Mockup 1: Introduction",
        content: "<p className='text-red-500'>This is the first mockup, introducing the user to the app.</p><p>It showcases the login screen and the initial user interface.</p>"
    },
    {
        header: "Mockup 2: Dashboard",
        content: "<p>The second mockup displays the app's dashboard.</p><p>Here, users can view their schedules, upcoming flights, and important notifications.</p>"
    },
    {
        header: "Mockup 3: Flight Details",
        content: "<p>This mockup delves deeper into the flight details section.</p><p>Users can access information about their flights, including departure and arrival times, gate numbers, and more.</p>"
    },
    {
        header: "Mockup 4: Crew Management",
        content: "<p>The fourth mockup highlights the crew management feature.</p><p>This section allows users to view and manage crew assignments, ensuring efficient team operations.</p>"
    },
    {
        header: "Mockup 5: Reporting",
        content: "<p>The final mockup focuses on the reporting feature.</p><p>Users can generate and view reports on various aspects of their operations, facilitating data-driven decision-making.</p>"
    },
];

export default function AirrosterProductExplainerScrollSync() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sectionHeight = window.innerHeight;
            const index = Math.min(
                Math.floor(scrollPosition / sectionHeight),
                mockupImages.length - 1
            );
            console.log(`Image ${index + 1} is being displayed`);
            setActiveIndex(index);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="airroster-product-explainer-scrollsync" className="min-h-screen">                    
            <div className="py-12 sm:py-20 max-w-screen-lg mx-auto px-6">            
                <div className="grid grid-cols-3 gap-4">                
                    <div className="sticky top-0 col-span-1 h-screen flex items-center justify-center">
                            <Image
                                src={mockupImages[activeIndex]}
                                alt={`Mockup ${activeIndex + 1}`}
                                width={428}
                                height={926}
                                className="rounded-lg"
                            />
                    </div>
                    <div className="col-span-2">
                        {contentData.map((content, index) => (
                            <div
                                key={index}
                                className="h-screen d-flex items-center justify-center px-8 py-48 text-left"
                            >
                                <div>
                                    <h3 className="text-4xl font-bold">
                                        {content.header}
                                    </h3>
                                </div>
                                <div className="mt-4">
                                    <div className="text-left" dangerouslySetInnerHTML={{ __html: content.content }}></div>
                                </div>                                            
                            </div>
                        ))}
                    </div>
                </div>
            </div>            
        </section>
    );
}
