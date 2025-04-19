"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SectionHeader from "@/components/ui/section-header";
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

// Type definitions for the comparison data
interface Feature {
  name: string;
  competitor: boolean;
  ourProduct: boolean;
}

interface FeatureCategory {
  category: string;
  items: Feature[];
}

interface Product {
  name: string;
  logo: string;
  description: string;
  price?: number;
}

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

interface ComparisonData {
  competitor: Product;
  ourProduct: Product;
  features: FeatureCategory[];
  testimonials: Testimonial[];
}

// Function to extract price from product description
const extractPrice = (description: string): number | null => {
  const priceMatch = description.match(/\$(\d+(\.\d+)?)/);
  return priceMatch ? parseFloat(priceMatch[1]) : null;
};

// Dynamic route for product comparisons
export default function ComparisonPage({ params }: { params: Promise<{ comparison: string }> }) {
  // Unwrap params using React.use()
  const resolvedParams = React.use(params);
  const comparisonSlug = resolvedParams.comparison;
  
  const [comparisonData, setComparisonData] = useState<ComparisonData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [priceSavings, setPriceSavings] = useState<{ amount: number; percentage: number } | null>(null);
  
  // Extract potential product names from the comparison slug
  const productNames = comparisonSlug.split('-vs-');
  const product1 = productNames[0]?.replace(/-/g, ' ');
  const product2 = productNames[1]?.replace(/-/g, ' ');

  useEffect(() => {
    async function loadComparisonData() {
      try {
        // Try to load the JSON file based on the URL parameter
        const data = await import(`@/data/comparisons/${comparisonSlug}.json`).then(m => m.default);
        setComparisonData(data);
        
        // Calculate price savings if prices are available
        const competitorPrice = data.competitor.price;
        const ourPrice = data.ourProduct.price;
        
        if (competitorPrice && ourPrice) {
          const savingsAmount = competitorPrice - ourPrice;
          // Only set price savings if our product is cheaper (positive savings)
          if (savingsAmount > 0) {
            const savingsPercentage = (savingsAmount / competitorPrice) * 100;
            setPriceSavings({
              amount: savingsAmount,
              percentage: savingsPercentage
            });
          }
        }
      } catch (err) {
        console.error('Failed to load comparison data:', err);
        // Redirect to the not-found page
        notFound();
      } finally {
        setIsLoading(false);
      }
    }

    loadComparisonData();
  }, [comparisonSlug]);

  // Loading state
  if (isLoading) {
    return (
      <div className="flex flex-col max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent"></div>
            <p className="mt-4 text-gray-600">Loading comparison data...</p>
          </div>
        </div>
      </div>
    );
  }

  // Error state should never be reached since we're using notFound() directly
  if (error) {
    return (
      <div className="flex flex-col max-w-7xl mx-auto px-4 py-12">
        <div className="bg-red-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-red-800 mb-2">Error Loading Comparison</h2>
          <p className="text-red-700">{error}</p>
          <Link href="/compare" className="mt-4 inline-block text-blue-500 hover:underline">
            View all comparisons
          </Link>
        </div>
      </div>
    );
  }

  // Show not-found page if data is null for any reason
  if (!comparisonData) {
    notFound();
  }

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 py-12">

      <SectionHeader 
          subheader="Feature Comparison" 
          header={`See how ${comparisonData.ourProduct.name} stacks up against ${comparisonData.competitor.name}`}
        />

      {/* Hero Section with Product Logos */}
      <section className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-8 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="p-4 rounded-3xl bg-white shadow-md inline-block mb-4">
              <Image 
                src={comparisonData.ourProduct.logo} 
                alt={comparisonData.ourProduct.name}
                width={80}
                height={80}
                className="w-20 h-20"
              />
            </div>
            <h2 className="text-xl font-bold">{comparisonData.ourProduct.name}</h2>
            <p className="text-gray-600 mt-2">{comparisonData.ourProduct.description}</p>
            <p className="text-blue-500 font-bold mt-1">${comparisonData.ourProduct.price?.toFixed(2) ?? '0.00'} USD</p>
          </div>

          <div className="flex items-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">VS</span>
            </div>
          </div>

          <div className="text-center">
            <div className="p-4 rounded-3xl bg-white shadow-md inline-block mb-4">
              <Image 
                src={comparisonData.competitor.logo} 
                alt={comparisonData.competitor.name}
                width={80}
                height={80}
                className="w-20 h-20 opacity-60"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-700">{comparisonData.competitor.name}</h2>
            <p className="text-gray-500 mt-2">{comparisonData.competitor.description}</p>
            <p className="text-gray-500 font-bold mt-1">${comparisonData.competitor.price?.toFixed(2) ?? '0.00'} USD</p>
          </div>
        </div>
      </section>

  
      {/* Feature Comparison */}
      <section className="mb-16">        
      
        <div className="mt-8">
          {comparisonData.features.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{category.category}</h3>
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">
                        Feature
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                        {comparisonData.ourProduct.name}
                      </th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4">
                        {comparisonData.competitor.name}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {category.items.map((feature, featureIndex) => (
                      <tr key={featureIndex} className={featureIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {feature.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {feature.ourProduct ? (
                            <span className="text-green-500">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          ) : (
                            <span className="text-red-500">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          {feature.competitor ? (
                            <span className="text-green-500">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                          ) : (
                            <span className="text-red-500">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

        


      {/* Testimonials */}
      <section className="bg-gray-50 rounded-xl p-8 mb-16">
        <SectionHeader 
          header="What Pilots Are Saying" 
          subheader={`Real feedback from pilots using ${comparisonData.ourProduct.name}`} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {comparisonData.testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <Image 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

        {/* Price Comparison Section */}
        {priceSavings && (          
            <section className="mb-16">
              <SectionHeader 
                header="and the icing on the cake is" 
                subheader="The deal you're getting..."
              />
              
              <div className="mt-8 text-center">
                    <p className="font-medium text-lg text-gray-700 mb-4">
                      With {comparisonData?.competitor.name}, you pay <span className="underline decoration-2 underline-offset-4 font-bold text-red-500">{priceSavings.percentage.toFixed(0)}% more</span> (${comparisonData?.competitor.price?.toFixed(2)}) for <span className="font-bold underline-offset-4 text-red-500 underline">fewer features</span>. 
                      Sounds like a bad deal, doesn't it?
                    </p>                   
                  </div>
            </section>
          )}

      {/* CTA Section */}
      <section className="p-5 bg-gradient-to-r from-blue-500 to-blue-600 flex flex-col md:flex-row justify-between items-center rounded-2xl md:p-10 w-full max-w-screen-xl mt-6">
        <div className="text-white text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">
            You're getting the better deal
          </h2>
          <p>with <span className="font-bold underline-offset-3 underline">{comparisonData.ourProduct.name}</span> over <span className="font-bold underline-offset-3 underline">{comparisonData.competitor.name}</span> in every possible way. Make the smart decision today.</p>
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
            Get {comparisonData.ourProduct.name}
          </Button>
        </Link>
      </section>
    </div>
  );
} 