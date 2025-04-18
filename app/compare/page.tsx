"use client"

import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from "@/components/ui/section-header";
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// This would typically come from a data file or API
const availableComparisons = [
  {
    id: 'logtenpro-vs-wingman',
    competitor: {
      name: 'LogTenPro',
      logo: '/images/competitors/logtenpro-logo.svg', // Need to create this
    },
    ourProduct: {
      name: 'Wingman Logbook',
      logo: '/images/app-logos/wingman-logo-svg.svg',
    },
    category: 'Logbook Apps'
  },
  {
    id: 'pilotlog-vs-wingman',
    competitor: {
      name: 'PilotLog',
      logo: '/images/competitors/pilotlog-logo.svg', // Need to create this
    },
    ourProduct: {
      name: 'Wingman Logbook',
      logo: '/images/app-logos/wingman-logo-svg.svg',
    },
    category: 'Logbook Apps'
  },
  {
    id: 'roster-buster-vs-airroster',
    competitor: {
      name: 'Roster Buster',
      logo: '/images/competitors/roster-buster-logo.svg', // Need to create this
    },
    ourProduct: {
      name: 'AirRoster',
      logo: '/images/app-logos/airroster-logo-svg.svg',
    },
    category: 'Roster Apps'
  },
  {
    id: 'crewlog-vs-airroster',
    competitor: {
      name: 'CrewLog',
      logo: '/images/competitors/crewlog-logo.svg', // Need to create this
    },
    ourProduct: {
      name: 'AirRoster',
      logo: '/images/app-logos/airroster-logo-svg.svg',
    },
    category: 'Roster Apps'
  }
];

export default function ComparisonsIndexPage() {
  // Group comparisons by category
  const groupedComparisons = availableComparisons.reduce((acc, comparison) => {
    const category = comparison.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(comparison);
    return acc;
  }, {} as Record<string, typeof availableComparisons>);

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 py-12">   
      
      <SectionHeader 
        header={"See how our products stack up against the competition"}
        subheader={`Product Comparisons`}
      />
          

      {Object.entries(groupedComparisons).map(([category, comparisons]) => (
        <section key={category} className="mb-12">     
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
            {comparisons.map((comparison) => (
              <Link 
                key={comparison.id}
                href={`/compare/${comparison.id}`}
                className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6 group"
              >
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 p-2 rounded-3xl bg-white transition-colors">
                      <Image 
                        src={comparison.ourProduct.logo}
                        alt={comparison.ourProduct.name}
                        width={40}
                        height={40}
                        className="w-10 h-10"
                      />
                    </div>
                    <span className="mx-2 text-gray-400">vs</span>
                    <div className="flex-shrink-0 p-2 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
                      <Image 
                        src={comparison.competitor.logo}
                        alt={comparison.competitor.name}
                        width={40}
                        height={40}
                        className="w-10 h-10 opacity-70"
                      />
                    </div>
                  </div>
                  <div className="rounded-full bg-gray-100 group-hover:bg-blue-100 p-2 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-medium text-lg mb-2">
                  {comparison.ourProduct.name} vs {comparison.competitor.name}
                </h3>
                <p className="text-gray-600">
                  See how {comparison.ourProduct.name} compares to {comparison.competitor.name} feature by feature.
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      <section className="p-5 bg-gradient-to-r from-blue-500 to-blue-600 flex flex-col md:flex-row justify-between items-center rounded-2xl md:p-10 w-full max-w-screen-xl mt-6">
        <div className="text-white text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Don't see the comparison you need?</h2>
          <p>Reach out to us. We'll do our best to break it down for you.</p>
        </div>
        <Link href="/contact">
          <Button className={cn(
            "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center border-0 bg-white px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
            
            // before styles
            "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
            
            // light mode colors
            "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
            
            // dark mode colors
            "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",                    
          )}>
            Talk to support
          </Button>
        </Link>
      </section>
    </div>
  );
}
