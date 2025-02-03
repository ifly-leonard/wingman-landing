"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function AirrosterProductGallery() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            const interval = setInterval(() => {
                scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
                if (
                    scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
                    scrollContainer.scrollWidth
                ) {
                    scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
                }
            }, 3000);
            return () => clearInterval(interval);
        }
    }, []);

    return (
        <section id="airroster-product-gallery" className="flex flex-col items-center w-full py-8">
            <div
                ref={scrollContainerRef}
                className="relative flex overflow-hidden w-full max-w-5xl space-x-4 mt-5 mb-5"
            >
                {[
                    "/images/app-mockups/airroster/1.png",
                    "/images/app-mockups/airroster/2.png",
                    "/images/app-mockups/airroster/3.png",
                    "/images/app-mockups/airroster/4.png",
                    "/images/app-mockups/airroster/5.png",                    
                ].map((imageUrl, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-320 h-568 rounded-lg overflow-hidden"
                    >
                        <Image
                            src={imageUrl}
                            alt={`Carousel image ${index + 1}`}
                            width={256}
                            height={160}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
