"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

// Define types for feature props
interface FeatureProps {
  title: string
  description: string
  image: string
  index: number
  total: number
}

// Feature card component
const FeatureCard = ({ title, description, image, index, total }: FeatureProps) => {
  return (
    <div className="w-full bg-white rounded-xl p-6 shadow-lg overflow-hidden mb-4">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
        <div className="md:w-1/2">
          <Image 
            src={image}
            alt={title}
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

// Define the feature data structure
interface Feature {
  title: string
  description: string
  image: string
}

export default function WingmanStackedFeatures() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)

  // Features data - reversed order for stacking (first feature at bottom)
  const features: Feature[] = [
    {
      title: "Multi-Platform Access",
      description: "Use Wingman on iOS, Android, and web. Your logbook is always with you, wherever you go.",
      image: "/images/app-mockups/wingman/my-flights.png"
    },
    {
      title: "Export & Print",
      description: "Generate professional PDF exports for authorities and employers. Back up your data in multiple formats.",
      image: "/images/app-mockups/wingman/my-flights.png"
    },
    {
      title: "Flight Analysis",
      description: "Track hours, cycles, and experience across aircraft types. See detailed breakdowns of your flying career.",
      image: "/images/app-mockups/wingman/my-flights.png"
    },
    {
      title: "Digital Signatures",
      description: "Get your flights digitally signed by your captains. Maintain regulatory compliance without the paperwork.",
      image: "/images/app-mockups/wingman/my-flights.png"
    },
    {
      title: "Auto Flight Import",
      description: "Sync your roster from 80+ airlines directly. No more manual entry, with one-click import from your crew portal.",
      image: "/images/app-mockups/wingman/my-flights.png"
    }
  ]

  // Adjust scroll event to trigger effects earlier
  useEffect(() => {
    if (typeof window === 'undefined') return

    const scrollHandler = () => {
      if (!containerRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const containerTop = containerRect.top
      const windowHeight = window.innerHeight
      
      // Start the effect much earlier - when the container starts to enter viewport
      if (containerTop < windowHeight) {
        // Calculate progress as soon as container enters viewport (bottom of screen)
        // 0 = just entered viewport, 1 = top of container at top of viewport
        const progress = Math.min(1, Math.max(0, 1 - (containerTop / windowHeight)))
        setScrollProgress(progress)
        
        // Calculate which card should be active based on scroll position
        // Start showing cards earlier in the scroll
        const cardIndex = Math.min(
          features.length - 1,
          Math.floor(progress * (features.length + 0.5))
        )
        
        setActiveIndex(cardIndex)
      }
    }

    window.addEventListener('scroll', scrollHandler)
    // Trigger initial calculation
    scrollHandler()

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [features.length])

  return (
    <div className="w-full relative" style={{ height: '2000px' }}>
      <div className="max-w-4xl mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-tight mb-4">Powerful Features for Modern Pilots</h2>
        <p className="text-xl text-gray-700">Everything you need to manage your flying career, all in one place.</p>
      </div>
      
      {/* Sticky cards container */}
      <div 
        ref={containerRef} 
        className="sticky top-0 pt-20 pb-40 left-0 w-full z-10"
        style={{ height: '100vh' }}
      >
        {/* Card stack container */}
        <div className="relative max-w-3xl mx-auto px-4 h-[500px] flex items-center">
          {features.map((feature, index) => {
            // Reverse the index to show cards from bottom to top
            const reverseIndex = features.length - 1 - index;
            
            // Calculate stacking effect
            // The first card should be at the bottom (index = features.length - 1)
            // As activeIndex increases, cards should stack up
            const isActive = reverseIndex <= activeIndex;
            
            // Scale should get smaller as cards stack up (higher in the stack = smaller)
            const scale = isActive 
              ? Math.max(0.85, 1 - (0.03 * (activeIndex - reverseIndex))) 
              : 0.95;
            
            // Translation should move cards up as they stack (higher in stack = more upward)
            const translateY = isActive
              ? -(Math.min(20, 5 * (activeIndex - reverseIndex)))
              : 0;
            
            // Opacity decreases as cards move higher in the stack
            const opacity = isActive
              ? Math.max(0.5, 1 - (0.2 * (activeIndex - reverseIndex)))
              : 0;
              
            return (
              <div 
                key={index}
                className={`absolute left-0 right-0 mx-auto feature-card transition-all duration-300 ease-in-out`}
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity: reverseIndex < activeIndex - 2 ? 0 : opacity,
                  zIndex: reverseIndex + 1,
                  visibility: reverseIndex < activeIndex - 2 ? 'hidden' : 'visible',
                }}
              >
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  image={feature.image}
                  index={index}
                  total={features.length}
                />
              </div>
            );
          })}
        </div>
        
        {/* Indicator showing scroll progress */}
        <div className="mt-10 max-w-3xl mx-auto px-4 flex justify-between">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
              style={{ width: `${scrollProgress * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      
      {/* Empty spacer to push content below it */}
      <div style={{ height: '200px' }}></div>
    </div>
  )
} 