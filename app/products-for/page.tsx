"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Marquee from "@/components/ui/marquee";
import { airlines } from "@/data/airlines";
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";
import SectionHeader from "@/components/ui/section-header";

export default function ProductsForPilots() {
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
      <section className="flex flex-row items-center mb-8">
        {/* Left half - Content */}
        <div className="w-2/3">
          <h1 className="text-left text-4xl font-bold tracking-tighter leading-tight text-gray-900">
            Modern apps for <span className="inline-block bg-blue-500 text-white rounded-sm px-3 py-2">Airline Pilots</span>
          </h1>
          <p className="text-gray-600 mb-6 text-left">
            Flying an airplane is complex, but the other aspects of the job, does not have to be. 
            We build apps that help airline pilots stay organized and efficient.
          </p>
                  
        </div>
        
        {/* Right half - Screenshot Gallery */}
        <div className="w-1/3">
          <div className="relative w-full ml-8">
           <div className="flex gap-4 mt-2">
            <Link 
              href="/products/wingman-logbook-app" 
              className="p-4 rounded-xl shadow-lg transition-colors"
            >
              <Image 
                src="/images/app-logos/wingman-logo-svg.svg" 
                alt="Wingman Logbook" 
                width={48} 
                height={48} 
                className="w-12 h-12"
              />
            </Link>
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
      
      
      {/* Trusted by airline pilots */}
      <section className="w-full py-16 bg-gray-50 rounded-lg">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <SectionHeader header="Trusted by airline pilots" subheader="around the world" />    
          
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
                    
                    <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Problems that AirRoster solves</h4>
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
                    
                    <div className="text-left">
                    <Link href="/products/airroster-app" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
                        bg-blue-500 text-white shadow hover:bg-blue-500/90
                        h-9 px-4 py-2
                    ">
                        Check "AirRoster" out
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Wingman */}
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
                        src={`/images/app-mockups/wingman/${num}.png`} 
                        alt="Wingman" 
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
                    src="/images/app-logos/wingman-logo-svg.svg" 
                    alt="Wingman" 
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
                        <h3 className="text-2xl font-bold text-gray-800">Wingman Logbook</h3>
                        <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        ))}
                        <span className="ml-2 text-sm text-gray-600">4.9 (2,200+ reviews)</span>
                        </div>
                    </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                    An end-to-end digital pilot logbook for pilots who value time.
                    </p>                
                    
                    <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-800">Problems that Wingman solves</h4>
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
                            <span>Manual flight logging</span>
                            </li>
                            <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-0.5">•</span>
                            <span>Paper logbooks & Excel sheets</span>
                            </li>
                            <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-0.5">•</span>
                            <span>Hours calculation errors</span>
                            </li>
                            <li className="flex items-start gap-2">
                            <span className="text-red-500 mt-0.5">•</span>
                            <span>Time-consuming record keeping</span>
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
                            <span>Automatic flight logging</span>
                            </li>
                            <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span>Digital record keeping</span>
                            </li>
                            <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span>Accurate hours calculation</span>
                            </li>
                            <li className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">•</span>
                            <span>Save hours of admin work</span>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    
                    <div className="text-left">
                    <Link href="/products/wingman-logbook-app" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0
                        bg-blue-500 text-white shadow hover:bg-blue-500/90
                        h-9 px-4 py-2
                    ">
                        Check "Wingman" out
                    </Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

    </div>
  );
}
