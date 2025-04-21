"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface USPData {
  id: number;
  title: string;
  description: string;
  icon: string;
}

// Data for USP cards based on the image
const uspData: USPData[] = [
  {
    id: 1,
    title: "Airline Roster Import",
    description: "Auto Sync roster from AIMS eCrew, ARMS, CAE, CESAR and other roster systems",
    icon: "/images/products/wingman/icons/airline-roster.svg"
  },
  {
    id: 2,
    title: "Works Offline",
    description: "Works anywhere, even without network",
    icon: "/images/products/wingman/icons/offline.svg"
  },
  {
    id: 3,
    title: "Download Any Format",
    description: "PDF, CSV, Excel Logbook export",
    icon: "/images/products/wingman/icons/download-format.svg"
  },
  {
    id: 4,
    title: "Regulator Compliant",
    description: "FAA, EASA, UK CAA, GCAA, CASA Compliant Logging and formats",
    icon: "/images/products/wingman/icons/regulator.svg"
  },
  {
    id: 5,
    title: "Cloud Backup",
    description: "Data continuously secured across servers and devices",
    icon: "/images/products/wingman/icons/cloud-backup.svg"
  },
  {
    id: 6,
    title: "Available for iOS, Android and Web",
    description: "Access Your Logbook across platforms",
    icon: "/images/products/wingman/icons/multi-platform.svg"
  },
  {
    id: 7,
    title: "Migrate From Any Logbook App",
    description: "Transfer your logbook from any other app or excel format",
    icon: "/images/products/wingman/icons/migrate.svg"
  },
  {
    id: 8,
    title: "Store License Expiries",
    description: "Store license, medical expiries and get notified",
    icon: "/images/products/wingman/icons/license.svg"
  },
  {
    id: 9,
    title: "Currency Tracking",
    description: "Setup custom rules for auto recency and FTL limits tracking",
    icon: "/images/products/wingman/icons/currency.svg"
  }
];

interface USPCardProps {
  title: string;
  description: string;
  icon: string;
  visible: boolean;
  zIndex: number;
}

// Individual USP Card component
const USPCard = ({ title, description, icon, visible, zIndex }: USPCardProps) => {
  return (
    <div 
      className={`
        absolute w-full bg-white rounded-xl shadow-xl 
        transition-all duration-500 ease-in-out
        p-8 md:p-12 lg:p-16
        min-h-[70vh] flex flex-col justify-center
        ${visible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-10'}
      `}
      style={{
        zIndex,
        transform: visible ? `translateY(${zIndex * 12}px)` : 'translateY(50px)',
      }}
    >
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start h-full">
        <div className="flex-shrink-0">
          <Image 
            src={icon} 
            alt={`${title} icon`} 
            width={120} 
            height={120} 
            className="text-blue-500"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{title}</h3>
          <p className="text-xl md:text-2xl text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Main USP Cards component
export default function WingmanProductUSPCards() {
  const [isCrawler, setIsCrawler] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Check if it's a crawler (simplified browser-side detection)
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isBot = /bot|googlebot|crawler|spider|robot|crawling/i.test(userAgent);
    setIsCrawler(isBot);
  }, []);

  // Set up scroll-based card stacking
  useEffect(() => {
    if (isCrawler) return;
    
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, bottom, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // If container is not visible at all, show no cards
      if (bottom < 0 || top > windowHeight) {
        setVisibleCards([]);
        return;
      }
      
      // Calculate how many cards to show based on scroll position
      const scrollProgress = Math.max(0, 1 - (top / windowHeight));
      const totalCards = uspData.length;
      const cardsToShow = Math.min(
        totalCards,
        Math.max(1, Math.ceil(scrollProgress * totalCards * 1.5))
      );
      
      // Create array of visible card indices
      const newVisibleCards = Array.from(
        { length: cardsToShow }, 
        (_, i) => totalCards - i - 1
      );
      
      setVisibleCards(newVisibleCards);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCrawler]);

  return (
    <div className="py-16 w-full max-w-full mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Built for Pilots across the Globe 🌍
      </h2>
      
      {isCrawler ? (
        // SEO-friendly grid layout for crawlers
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {uspData.map((usp) => (
            <div key={usp.id} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <Image 
                    src={usp.icon} 
                    alt={`${usp.title} icon`} 
                    width={64} 
                    height={64}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{usp.title}</h3>
                  <p className="text-gray-600">{usp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Full-screen stacked cards that reveal as you scroll
        <div 
          ref={containerRef}
          className="relative min-h-screen w-full"
        >
          <div className="sticky top-0 h-screen w-full flex items-center justify-center">
            <div className="relative w-full max-w-7xl mx-auto px-4">
              {uspData.map((usp, index) => (
                <USPCard 
                  key={usp.id}
                  title={usp.title}
                  description={usp.description}
                  icon={usp.icon}
                  visible={visibleCards.includes(index)}
                  zIndex={uspData.length - index}
                />
              ))}
            </div>
          </div>
          
          {/* Spacer for scrolling */}
          <div style={{ height: `${uspData.length * 50}vh` }} />
        </div>
      )}
    </div>
  );
} 