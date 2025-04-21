import React, { useEffect } from "react"
import styles from "./wm-stacked-cards.module.css"
import Image from "next/image"

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
            
            // Add transition
            items.forEach(item => {
                item.setAttribute('style', 'transition: transform 0.3s, opacity 0.3s');
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
                        // For vertical scaling only - keep horizontal size consistent
                        let scaleY = 1 - (0.05 * index);
                        let translateY = (index * marginY);
                        
                        if (scrolling <= 0) {
                            const scrollPercent = Math.min(Math.abs(scrolling) / cardHeight, 1);
                            const scrolledItems = Math.ceil(scrollPercent * itemsLength);
                            
                            if (index < scrolledItems) {
                                scaleY = scaleY - (0.05 * scrollPercent);
                                translateY = translateY + (20 * scrollPercent);
                            }
                        }
                        
                        // Use scaleY instead of scale to only scale vertically
                        item.style.transform = `translateY(${translateY}px) scaleY(${scaleY})`;
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
    
    return (
        <div className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4 mb-12 text-center">
                <h2 className="text-4xl font-bold tracking-tight mb-4">Powerful Features for Modern Pilots</h2>
                <p className="text-xl text-gray-700">Everything you need to manage your flying career, all in one place.</p>
            </div>
            
            <div className="max-w-3xl mx-auto px-4">
                <ul className={`${styles['stack-cards']} js-stack-cards`}>
                    <li className={`${styles['stack-cards__item']} bg-white rounded-lg shadow-lg overflow-hidden js-stack-cards__item`}>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="md:w-1/2">
                                    <h3 className="text-2xl font-bold mb-3">Auto Flight Import</h3>
                                    <p className="text-gray-700">Sync your roster from 80+ airlines directly. No more manual entry.</p>
                                </div>
                                <div className="md:w-1/2">
                                    <Image 
                                        src="/images/app-mockups/wingman/my-flights.png"
                                        alt="Auto Flight Import"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                    

                    <li className={`${styles['stack-cards__item']} bg-white rounded-lg shadow-lg overflow-hidden js-stack-cards__item`}>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="md:w-1/2">
                                    <h3 className="text-2xl font-bold mb-3">Digital Signatures</h3>
                                    <p className="text-gray-700">Get your flights digitally signed by your captains. Maintain compliance without the paperwork.</p>
                                </div>
                                <div className="md:w-1/2">
                                    <Image 
                                        src="/images/app-mockups/wingman/my-flights.png"
                                        alt="Digital Signatures"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className={`${styles['stack-cards__item']} bg-white rounded-lg shadow-lg overflow-hidden js-stack-cards__item`}>
                        <div className="p-6">
                            <div className="flex flex-col md:flex-row items-center gap-6">
                                <div className="md:w-1/2">
                                    <h3 className="text-2xl font-bold mb-3">Flight Analysis</h3>
                                    <p className="text-gray-700">Track hours, cycles, and experience across aircraft types. See detailed breakdowns of your flying career.</p>
                                </div>
                                <div className="md:w-1/2">
                                    <Image 
                                        src="/images/app-mockups/wingman/my-flights.png"
                                        alt="Flight Analysis"
                                        width={400}
                                        height={300}
                                        className="rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}