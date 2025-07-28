import React, { useEffect } from "react"
import Image from "next/image"

// Define feature data interface
interface Feature {
  title: string;
  description: string;
  image: string;
  alt: string;
}

// Features data
const features: Feature[] = [
  {
    title: "Airline Roster Import",
    description: "Easily sync your flight roster from systems like AIMS eCrew, ARMS, CAE, CESAR, and others, saving time and reducing manual data entry errors.",
    image: "/images/app-mockups/wingman/my-flights.png",
    alt: "Airline Roster Import"
  },
  {
    title: "Works Offline",
    description: "Access and update your logbook anytime, anywhere — even without an internet connection, ensuring reliability during flights or in remote locations.",
    image: "/images/app-mockups/wingman/my-flights.png",
    alt: "Works Offline"
  },
  {
    title: "Download Any Format",
    description: "Export your complete logbook in popular formats like PDF, CSV, and Excel, making it easy to share, archive, or submit for audits and applications.",
    image: "/images/app-mockups/wingman/my-flights.png",
    alt: "Download Any Format"
  },
  {
    title: "Regulator Compliant",
    description: "Stay compliant with FAA, EASA, UK CAA, GCAA, CASA standards with built-in templates and logging formats that match regulatory requirements worldwide.",
    image: "/images/app-mockups/wingman/my-flights.png",
    alt: "Regulator Compliant"
  },
  {
    title: "Cloud Backup",
    description: "Your data is continuously backed up across secure servers and devices, protecting your logbook against loss, corruption, or device failure.",
    image: "/images/app-mockups/wingman/my-flights.png",
    alt: "Cloud Backup"
  },
  {
    title: "Available for iOS, Android, and Web",
    description: "Seamlessly access your logbook across mobile devices and browsers, ensuring you can manage and update your records from any platform.",
    image: "/images/app-mockups/wingman/my-flights.png",
    alt: "Available for iOS, Android, and Web"
  },
  {
    title: "Migrate From Any Logbook App",
    description: "Easily transfer your existing logbook data from any other application or Excel spreadsheet, ensuring a smooth transition without starting from scratch.",
    image: "/images/app-mockups/wingman/my-flights.png",
    alt: "Migrate From Any Logbook App"
  },
  {
    title: "Store License Expiries",
    description: "Keep track of your license, type ratings, and medical certificate expiry dates with automated reminders, helping you stay current and compliant.",
    image: "/images/app-mockups/wingman/my-flights.png",
    alt: "Store License Expiries"
  },
  {
    title: "Currency Tracking",
    description: "Set up custom rules to monitor flight recency and Flight Time Limitations (FTL), ensuring you're always flight-ready and within operational limits.",
    image: "/images/app-mockups/wingman/my-flights.png",
    alt: "Currency Tracking"
  }
];

// Inline CSS styles
const stackCardsStyles = {
  root: {
    '--stack-cards-gap': '0.75rem',
    '--stack-cards-item-ratio': '2/1',
    position: 'relative',
  },
  item: {
    position: 'sticky',
    top: '1.25rem',
    height: '0',
    paddingBottom: 'calc(100%/(var(--stack-cards-item-ratio)))',
    transformOrigin: 'center top',
  },
  itemContent: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }
};

// Function to get random blob SVG path with different shape for each card
const getRandomBlobPath = (index: number) => {
  const paths = [
    "M55.7,-60.9C68.2,-44.8,72.3,-22.4,70.6,-2.1C68.9,18.2,61.3,36.3,48.5,48.7C35.7,61.1,17.9,67.9,-2.5,70.5C-22.9,73.1,-45.8,71.6,-63.6,59.3C-81.4,47,-94.1,23.5,-93.4,0.7C-92.7,-22.1,-78.7,-44.2,-60.8,-60.3C-42.9,-76.3,-21.5,-86.4,0.6,-87.1C22.6,-87.7,45.2,-79,55.7,-60.9Z",
    "M58.4,-65.7C74.8,-53,86.2,-31.7,86.6,-10.5C87,10.7,76.4,31.9,60.2,45.1C44,58.4,22,63.7,0.1,63.6C-21.8,63.5,-43.7,57.9,-61.9,44C-80.1,30.1,-94.7,7.9,-92.1,-12C-89.6,-31.8,-69.9,-49.3,-50.7,-62.1C-31.6,-74.9,-15.8,-83,5.2,-89C26.2,-95,42.1,-78.5,58.4,-65.7Z",
    "M76.7,-79.1C97.5,-57,111.2,-28.5,111.5,0.3C111.7,29.1,98.7,58.2,77.9,71.4C57.1,84.6,28.6,81.8,1.9,79.6C-24.7,77.3,-49.4,75.6,-61.3,62.1C-73.2,48.6,-72.3,24.3,-71.9,0.3C-71.5,-23.7,-71.6,-47.3,-59.6,-69.3C-47.5,-91.3,-23.7,-111.6,2.7,-114.6C29.2,-117.5,58.4,-103.1,76.7,-79.1Z",
    "M50.4,-65.7C61.7,-55.7,65.1,-35.4,65.9,-16.7C66.8,2,65,19.1,57.6,33.4C50.2,47.7,37.2,59.2,21.5,67.4C5.7,75.6,-12.8,80.5,-31.3,76.8C-49.7,73.1,-68.1,60.8,-74.4,43.8C-80.8,26.8,-75.2,5.2,-66.9,-11.7C-58.7,-28.5,-47.7,-40.6,-35.3,-50.4C-22.9,-60.3,-9,-67.9,6.1,-75.4C21.2,-82.8,39.1,-75.8,50.4,-65.7Z",
    "M56.8,-68.1C69.8,-54.5,74.3,-32.4,77,-10.4C79.7,11.5,80.6,33.4,71.1,49.6C61.6,65.8,41.7,76.3,21,79.6C0.3,83,-20.2,79.1,-39.1,69.6C-58.1,60.2,-75.4,45.2,-81.6,26.5C-87.9,7.8,-83.1,-14.6,-73.3,-34.3C-63.4,-53.9,-48.5,-70.7,-30.5,-80.8C-12.6,-90.9,8.5,-94.3,25.9,-87.6C43.3,-80.9,56.9,-64.2,56.8,-68.1Z",
    "M67.3,-72.2C80.2,-55.7,79.6,-27.8,79.1,-0.4C78.7,26.9,78.4,53.9,65.4,70.3C52.4,86.7,26.2,92.7,2.1,90.2C-22,87.7,-44,76.8,-58.9,60.3C-73.8,43.8,-81.5,21.9,-82.4,-0.9C-83.2,-23.7,-77.2,-47.3,-62.3,-63.8C-47.5,-80.3,-23.7,-89.7,2.3,-92C28.4,-94.3,56.7,-89.5,67.3,-72.2Z",
    "M67.5,-70.9C85.5,-55,96.8,-27.5,94.3,-2.5C91.9,22.5,75.8,45,57.2,57.8C38.6,70.6,17.5,73.8,-4.5,78.3C-26.6,82.9,-49.7,88.8,-65.9,79.3C-82.1,69.7,-91.3,44.6,-93.5,19.7C-95.7,-5.3,-90.8,-30.1,-77.1,-47.3C-63.4,-64.6,-40.8,-74.2,-17.8,-78C5.2,-81.8,27.7,-79.9,45.7,-73.3C63.8,-66.7,78.5,-55.4,67.5,-70.9Z",
    "M47.9,-62.1C61,-49.2,69.7,-33.2,71.5,-16.6C73.2,0,68,17.2,59.5,32.2C51,47.2,39.1,60.1,24.2,66.6C9.3,73.2,-8.7,73.4,-25.2,67.6C-41.7,61.8,-56.7,50,-66.3,34.2C-75.9,18.5,-80.1,-1.2,-75.2,-18.1C-70.2,-35,-56.2,-49.1,-41,-60.6C-25.8,-72.1,-9.5,-81,6.3,-88.5C22,-96,43.9,-102.2,47.9,-62.1Z",
    "M61.4,-73.2C82,-63.5,103.1,-48.1,111.4,-27.4C119.7,-6.7,115.1,19.4,102.6,40.7C90,62,69.4,78.5,46.5,86.6C23.5,94.8,-1.8,94.5,-26.7,88.3C-51.6,82.1,-76.1,69.9,-88.2,49.8C-100.4,29.7,-100.3,1.6,-91.6,-21.4C-82.9,-44.4,-65.6,-62.3,-46.2,-72.2C-26.9,-82.1,-5.5,-84,12.6,-98.4C30.8,-112.7,61.5,-139.5,61.4,-73.2Z"
  ];
  
  // Use a different path for each index, or cycle through them
  return paths[index % paths.length];
};

export function WingmanProductStackedFeaturesV2() {
    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        // Initialize stacking effect
        const initStackCardsEffect = () => {
            const stackCards = document.querySelector('.js-stack-cards');
            if (!stackCards) return;
            
            // Get all card items
            const items = Array.from(stackCards.querySelectorAll('.js-stack-cards__item')) as HTMLElement[];
            const itemsLength = items.length;
            if (itemsLength <= 0) return;
            
            // Add transition for both transform and box-shadow
            items.forEach(item => {
                item.setAttribute('style', 'transition: transform 0.3s, box-shadow 0.3s');
            });
            
            // Initialize scroll event
            let windowHeight = window.innerHeight;
            let cardTop = stackCards.getBoundingClientRect().top;
            let cardHeight = items[0].offsetHeight;
            let marginY = parseInt(getComputedStyle(stackCards).getPropertyValue('--stack-cards-gap')) || 12; // Default to 12px if not set
            
            // Handle scroll
            const scrollingFn = () => {
                requestAnimationFrame(() => {
                    const scrolling = cardTop - window.scrollY;
                    
                    items.forEach((item, index) => {
                        // SIMPLE VERSION: Just use translateY for movement
                        let translateY = (index * marginY);
                        // Start with normal shadow
                        let shadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                        
                        if (scrolling <= 0) {
                            const scrollPercent = Math.min(Math.abs(scrolling) / cardHeight, 1);
                            const scrolledItems = Math.ceil(scrollPercent * itemsLength);
                            
                            if (index < scrolledItems) {
                                // Just move the card without changing opacity or scaling
                                translateY = translateY + (20 * scrollPercent);
                                
                                // Remove shadow as we scroll away
                                const shadowOpacity = Math.max(0, 0.1 - (scrollPercent * 0.1));
                                shadow = `0 10px 30px rgba(0, 0, 0, ${shadowOpacity})`;
                            }
                        }
                        
                        // Apply translation and shadow
                        item.style.transform = `translateY(${translateY}px)`;
                        item.style.boxShadow = shadow;
                    });
                });
            };
            
            // Attach scroll event
            window.addEventListener('scroll', scrollingFn);
            
            // Handle window resize
            const resizeFn = () => {
                windowHeight = window.innerHeight;
                cardTop = stackCards.getBoundingClientRect().top;
                cardHeight = items[0].offsetHeight;
            };
            
            window.addEventListener('resize', resizeFn);
            
            // Initial calculation
            scrollingFn();
            
            // Return cleanup function
            return () => {
                window.removeEventListener('scroll', scrollingFn);
                window.removeEventListener('resize', resizeFn);
            };
        };
        
        // Initialize after a small delay to ensure DOM is ready
        const initTimer = setTimeout(initStackCardsEffect, 100);
        
        // Cleanup
        return () => {
            clearTimeout(initTimer);
        };
    }, []);
    
    // Add media query style for larger screen sizes
    useEffect(() => {
        // Add responsive CSS with media query
        if (typeof document !== 'undefined') {
            const style = document.createElement('style');
            style.innerHTML = `
                @media (min-width: 64rem) {
                    .js-stack-cards {
                        --stack-cards-gap: 1.125rem;
                    }
                }
                
                @media (min-width: 1024px) {
                    .js-stack-cards__item {
                        top: 2rem;
                    }
                }
            `;
            document.head.appendChild(style);
            
            return () => {
                document.head.removeChild(style);
            };
        }
    }, []);
    
    return (
        <div className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 mb-12 text-center">
                <h2 className="text-4xl font-bold tracking-tight mb-4">Powerful Features for Modern Pilots</h2>
                <p className="text-xl text-gray-700">Everything you need to manage your flying career, all in one place.</p>
            </div>
            
            <div className="max-w-6xl mx-auto px-4">
                <ul 
                    className="js-stack-cards"
                    style={{
                        '--stack-cards-gap': '0.75rem',
                        '--stack-cards-item-ratio': '2/1',
                    } as React.CSSProperties}
                >
                    {features.map((feature, index) => (
                        <li 
                            key={index}
                            className="js-stack-cards__item bg-white rounded-lg overflow-hidden"
                            style={{
                                position: 'sticky',
                                top: '1.25rem',
                                transformOrigin: 'center top',
                            }}
                        >
                            <div className="p-6" style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%'
                            }}>
                                <div className="flex flex-col md:flex-row items-top text-left gap-6">
                                    <div className="md:w-1/2 px-12 mt-12">
                                        <div className="bg-blue-500/50 text-white px-3 py-1 rounded-lg mb-3 w-1/2 mx-left">
                                            Feature {index + 1}
                                        </div>
                                        <h3 className="text-2xl font-bold text-blue-500 mb-3">{feature.title}</h3>
                                        <p className="text-gray-700">{feature.description}</p>
                                    </div>
                                    <div className="md:w-1/2 relative">
                                        {/* Irregular SVG Background Shape */}
                                        <div className="absolute inset-0 z-0 overflow-visible">
                                            <svg 
                                                viewBox="0 0 200 200" 
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-full h-full scale-150 translate-x-10 -translate-y-5"
                                            >
                                                <path 
                                                    fill="#4a89dc22" 
                                                    d={getRandomBlobPath(index)}
                                                    transform="translate(100 100)"
                                                />
                                            </svg>
                                        </div>
                                        
                                        {/* Image on top of the background */}
                                        <div className="relative z-10">
                                            <Image 
                                                src={feature.image}
                                                alt={feature.alt}
                                                width={400}
                                                height={300}
                                                className="rounded-lg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}