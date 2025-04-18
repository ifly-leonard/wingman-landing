"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { airlines } from "@/data/airlines";
import { useEffect, useRef, useState } from "react";
import { TextReveal } from "@/components/ui/text-reveal";
import Marquee from "@/components/ui/marquee";
import Globe from "@/components/ui/globe";

// Array of app screenshots for each app
const wingmanImages = [
  "/images/app-mockups/wingman/home-page-screenshot.png",
  "/images/app-mockups/wingman/my-flights.png",
  "/images/app-mockups/wingman/add-flight.png",
  "/images/app-mockups/wingman/atpl-requirements.png",
  "/images/app-mockups/wingman/career.png",
];

const airrosterImages = [
  "/images/app-mockups/airroster/1.png",
  "/images/app-mockups/airroster/2.png",
  "/images/app-mockups/airroster/3.png",
  "/images/app-mockups/airroster/4.png",
  "/images/app-mockups/airroster/5.png",
];

// Modern phone display component with iPhone-like design
function ModernPhoneDisplay({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div className="relative w-[280px] h-[580px] mx-auto">
      {/* Phone frame */}
      <div className="absolute top-0 left-0 w-full h-full bg-black rounded-[40px] overflow-hidden border-[14px] border-black shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-black rounded-b-xl z-10"></div>
        
        {/* Screenshot */}
        <div className="relative w-full h-full overflow-hidden rounded-[32px]">
          {images.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt={`App screenshot ${index + 1}`}
              fill
              className={`object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              priority={index === 0}
            />
          ))}
          
          {/* Dynamic island (fake) */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1/4 h-8 bg-black rounded-full z-10"></div>
        </div>
      </div>
      
      {/* Indicator dots */}
      <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Airline Logo Component for cleaner display
function AirlineLogo({ name }: { name: string }) {
  return (
    <div className="h-10 flex items-center justify-center">
      <div className="bg-gray-100/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
        {name}
      </div>
    </div>
  );
}

export default function ProductsForPage() {
  // Only show airlines that have the "aims2" roster system for demonstration
  const filteredAirlines = airlines.filter(airline => 
    airline.roster_system === "aims2" || airline.roster_system === "arms"
  ).slice(0, 20);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Hero background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-70"></div>
        <div className="absolute top-20 left-0 right-0 h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-3 bg-amber-100/80 backdrop-blur-sm px-3 py-2 rounded-full">
                <div className="w-8 h-8 flex items-center justify-center text-amber-800 font-bold">
                  👨‍✈️
                </div>
                <span className="text-amber-800 font-medium">Modern aviation apps</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Powerful tools built for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Airline Pilots</span>
              </h1>
              
              <p className="text-lg text-gray-600 max-w-xl">
                Designed by pilots, for pilots. Our apps streamline daily workflows and solve real problems for aviation professionals worldwide.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                  Explore Apps
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  View Testimonials
                </Button>
              </div>
            </div>
            
            <div className="flex-1 relative h-[580px] flex items-center justify-center">
              <div className="absolute -right-5 -top-5 w-60 h-60 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute -left-5 -bottom-5 w-60 h-60 bg-cyan-200 rounded-full filter blur-3xl opacity-20"></div>
              <ModernPhoneDisplay images={airrosterImages} />
            </div>
          </div>
        </div>
      </section>
      
      {/* Trusted By Section */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center space-y-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
              Trusted by airline pilots worldwide
              <Globe className="w-8 h-8 text-blue-500" />
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our apps are being used by pilots from major airlines across the globe,
              helping them navigate their flying careers with ease.
            </p>
          </div>
          
          <Marquee className="py-4" pauseOnHover={true}>
            {filteredAirlines.map((airline) => (
              <div key={airline.icao} className="mx-4">
                <AirlineLogo name={airline.name} />
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      
      {/* Product Showcases */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-32">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Our Aviation Apps
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            <TextReveal text="Powerful tools designed to make pilots' lives easier and more productive" />
          </p>
        </div>
        
        {/* AirRoster */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>
            <ModernPhoneDisplay images={airrosterImages} />
          </div>
          
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Roster Management
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  className="w-5 h-5 text-yellow-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>
            
            <h3 className="text-3xl font-bold">AirRoster</h3>
            
            <p className="text-gray-600 text-lg">
              The ultimate roster management app for airline pilots. Track your flights, manage your schedule, and optimize your time off with ease.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Automatic roster imports</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Smart notifications for schedule changes</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Swap request optimization</span>
              </li>
            </ul>
            
            <Button asChild className="rounded-full mt-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
              <Link href="/products/airroster-app">
                Explore AirRoster →
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Wingman Logbook */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-medium">
              Digital Logbook
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg 
                  key={star} 
                  className="w-5 h-5 text-yellow-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>
            
            <h3 className="text-3xl font-bold">Wingman Logbook</h3>
            
            <p className="text-gray-600 text-lg">
              A modern digital logbook that eliminates the hassle of manual entry. Track your hours, aircraft, and career progression all in one place.
            </p>
            
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Automatic flight time calculations</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>License and rating progress tracking</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Secure cloud backup and export options</span>
              </li>
            </ul>
            
            <Button asChild className="rounded-full mt-4 bg-gradient-to-r from-cyan-600 to-cyan-800 text-white">
              <Link href="/products/wingman-logbook-app">
                Explore Wingman Logbook →
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-100 rounded-full filter blur-3xl opacity-30"></div>
            <ModernPhoneDisplay images={wingmanImages} />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to transform your pilot workflow?</h2>
            <p className="text-lg opacity-90">
              Join thousands of pilots who have upgraded their daily workflow with our modern aviation apps.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/products">
                  Get Started Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-white border-white hover:bg-white/10">
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
