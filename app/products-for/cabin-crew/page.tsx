"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/ui/marquee";
import { airlines } from "@/data/airlines";
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";
import SectionHeader from "@/components/ui/section-header";

export default function ProductsForCabinCrew() {
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
    <div className="flex flex-col max-w-7xl mx-auto px-4 py-12">
      {/* Header with Pilot Icon */}
      <section className="flex flex-row items-center mb-8 justify-between">
        {/* Left half - Content */}
        <div className="w-2/3">
          <h1 className="text-left text-4xl font-bold tracking-tighter leading-tight text-gray-900">
            Modern apps for <span className="inline-block bg-blue-500 text-white rounded-sm px-3 py-2">Cabin Crew</span>
          </h1>
          <p className="text-gray-600 mt-4 mb-6 text-left">
            Providing exceptional service at 30,000 feet is demanding, but managing your schedule shouldn't be. 
            We build apps that help cabin crew stay organized and efficient throughout their flying career.
          </p>
                  
        </div>
        
        {/* Right half - Screenshot Gallery */}
        <div className="w-1/3">
          <div className="relative w-full ml-8 px-20">
            <div className="flex gap-4 mt-2 items-end justify-end">            
                 <Link 
              href="/products/airroster-app" 
            className="p-4 rounded-xl shadow-lg transition-colors"
            >
              <Image 
                src="/images/app-logos/airroster-logo-svg.svg" 
                alt="Airroster" 
                width={48} 
                height={48} 
                className="w-12 h-12"
              />
            </Link>
            </div>
          </div>
        </div>
      </section>
      
      
      {/* Trusted by cabin crew pilots */}
      <section className="w-full py-16 bg-gray-50 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <SectionHeader header="Trusted by airline cabin crew" subheader="around the world" />    
          
          {/* Logos Section */}
          <div className="max-w-5xl mx-auto">
            <div className="overflow-hidden">
              <Marquee className={cn("py-4", "[--duration:100s]")} pauseOnHover reverse={false} repeat={4}>
                {airlines.slice(0, 20).map((airline) => (
                  <figure
                    key={airline.icao}
                    className={cn(
                      "relative w-48 mx-4 overflow-hidden p-4",                      
                    )}
                  >
                    <div className="">        
                      <Image 
                        width={160}
                        height={80}
                        alt={`${airline.name}`}
                        src={`https://content.airhex.com/content/logos/airlines_${airline.iata}_701_200_r.png`}
                      />
                      {/* <p className="text-xs font-medium text-center mt-2 text-gray-400">{airline.name}</p> */}
                    </div>      
                  </figure>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>


    {/* AirRoster */}
        <section className="w-full py-16">
            <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
                {/* 1/3 Column */}
                <div className="group w-full md:w-1/3 relative flex justify-center items-center">
                <div className="relative">
                    <div className="relative w-[300px] h-[600px]">
                    {[1, 2, 3, 4].map((num) => (
                        <Image 
                        key={num}
                        src={`/images/app-mockups/airroster/${num}.png`} 
                        alt="AirRoster" 
                        width={300} 
                        height={600} 
                        className={`absolute top-0 left-0 filter grayscale transition-all duration-1000 ease-in-out`}
                        style={{
                            opacity: 0,
                            zIndex: 5 - num,
                            animation: `fadeInOut 8s ease-in-out ${(num-1)*0.80}s infinite`
                        }}
                        />
                    ))}
                    </div>
                    <style jsx global>{`
                    @keyframes fadeInOut {
                        0%, 100% { opacity: 0; }
                        25%, 75% { opacity: 1; }
                    }
                    `}</style>
                </div>
                <div className="absolute z-10 p-3 rounded-3xl bg-white shadow-2xl group-hover:shadow-lg border-2 border-white group-hover:border-blue-500 transition duration-200 ease-in-out">
                    <Image 
                    src="/images/app-logos/airroster-logo-svg.svg" 
                    alt="AirRoster" 
                    width={64} 
                    height={64} 
                    className="w-16 h-16" 
                    />
                </div>
                </div>
                
                {/* 2/3 Column */}
                <div className="w-full md:w-2/3">
                <div className="bg-white p-6 rounded-xl shadow-sm h-full text-left">
                    <div className="flex items-center mb-4">                  
                    <div>
                        <h3 className="text-2xl font-bold text-gray-800">AirRoster</h3>
                        <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">4.8 (1,400+ reviews)</span>
                        </div>
                    </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                    Roster app that just works. Elegant UI, simple to use.
                    </p>                

                    <div className="text-left mt-5 mb-5">
                      <Link href="/products/airroster-app" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
                          bg-blue-500 text-white shadow hover:bg-blue-500/90
                          h-9 px-4 py-2">
                          View AirRoster
                      </Link>                      
                    </div>
                    
                    <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">
                      Airline pilots love AirRoster because
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-background p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="rounded-full bg-red-100 p-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                                <path d="M12 9v4"></path><path d="M12 17h.01"></path><circle cx="12" cy="12" r="10"></circle>
                            </svg>
                            </div>
                            <h5 className="text-gray-900 font-medium">Before</h5>
                        </div>
                        
                        <ul className="text-gray-600 text-sm space-y-2.5 pl-1">
                            <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-0.5">•</span>
                            <span>Missed schedule changes</span>
                            </li>
                            <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-0.5">•</span>
                            <span>Manual roster tracking</span>
                            </li>
                            <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-0.5">•</span>
                            <span>Duty time limit confusion</span>
                            </li>
                            <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-0.5">•</span>
                            <span>Last-minute flight surprises</span>
                            </li>
                        </ul>
                        </div>
                        <div className="bg-background p-4 rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="rounded-full bg-green-100 p-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                                <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                            </div>
                            <h5 className="text-gray-900 font-medium">After</h5>
                        </div>
                        <ul className="text-gray-600 text-sm space-y-2.5 pl-1">
                            <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span>Instant change notifications</span>
                            </li>
                            <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span>Automatic roster syncing</span>
                            </li>
                            <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span>Clear duty time tracking</span>
                            </li>
                            <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span>Schedule predictability</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    

                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-gray-800">
                          AirRoster replaces
                        </h3>
                    </div>
                    <div className="flex gap-3 mt-4">                        
                        <div className="flex flex-row space-x-4">
                            <div className="relative group">                              
                                <Link href="/compare/rosterbuster-vs-airroster" className="flex items-center gap-3 p-3 rounded-xl bg-white border-2 border-gray-300 hover:border-gray-500 transition duration-200 ease-in-out">
                                    <Image 
                                        src="/images/app-logos/competitors/roster-buster-logo.png" 
                                        alt="Competitor App" 
                                        width={32} 
                                        height={32} 
                                        className="w-8 h-8" 
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-900">RosterBuster</span>
                                        <div className="flex items-center">
                                            <span className="text-yellow-500">★</span>
                                            <span className="text-yellow-500">★</span>
                                            <span className="text-gray-300">★</span>
                                            <span className="text-gray-300">★</span>
                                            <span className="text-gray-300">★</span>
                                            <span className="text-sm text-gray-500 ml-1">2.6</span>
                                        </div>
                                    </div>
                                </Link>
                                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white text-xs rounded py-1 px-2 -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap pointer-events-none z-10">
                                    view detailed comparison
                                </span>
                            </div>

                            <div className="relative group">
                                <Link href="/compare/crewlounge-vs-airroster" className="flex items-center gap-3 p-3 rounded-xl bg-white border-2 border-gray-300 hover:border-gray-500 transition duration-200 ease-in-out">
                                    <Image 
                                        src="/images/app-logos/competitors/crewlounge-logo.png" 
                                        alt="Competitor App" 
                                        width={32} 
                                        height={32} 
                                        className="w-8 h-8" 
                                    />
                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-900">CrewLounge AERO</span>
                                        <div className="flex items-center">
                                            <span className="text-yellow-500">★</span>
                                            <span className="text-yellow-500">★</span>
                                            <span className="text-yellow-500">★</span>
                                            <span className="text-gray-300">★</span>
                                            <span className="text-gray-300">★</span>
                                            <span className="text-sm text-gray-500 ml-1">3.8</span>
                                        </div>
                                    </div>
                                </Link>
                                <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white text-xs rounded py-1 px-2 -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap pointer-events-none z-10">
                                    view detailed comparison
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </div>
  );
}
