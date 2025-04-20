import { useEffect, useRef } from 'react';
import { useBackgroundContext } from '@/app/contexts/BackgroundContext';

/**
 * useScrollBackground.ts
 * 
 * This custom hook connects HTML sections on the page to the background color
 * change system. It watches for when sections appear on screen while scrolling,
 * and triggers the appropriate background color change.
 * 
 * HOW IT WORKS:
 * 1. You provide an HTML element ID, desired background color, and priority
 * 2. The hook finds the element on the page using its ID
 * 3. It sets up a special "observer" that watches for when the element scrolls into view
 * 4. When the element becomes visible enough (based on threshold %), it triggers the background change
 * 5. When the element scrolls away, it triggers the background to return to default
 * 
 * USAGE EXAMPLE:
 * ```
 * // In a page or component:
 * useScrollBackground({
 *   targetId: "my-section-id",    // ID of the HTML element to watch
 *   color: "bg-red-500",          // Tailwind CSS class to apply when visible
 *   priority: 10,                 // Priority (higher wins when multiple are visible)
 *   threshold: 0.4                // How much of the element must be visible (40%)
 * });
 * ```
 */

/**
 * Configuration options for the scroll background hook
 */
type UseScrollBackgroundProps = {
  targetId: string;     // ID of the HTML element to watch (must match an element ID in the DOM)
  color: string;        // CSS class to apply when the element is visible (e.g., "bg-red-500")
  priority: number;     // Priority value (higher numbers take precedence when multiple elements are visible)
  threshold?: number;   // How much of the element must be visible to trigger the effect (0-1, default 0.4 = 40%)
};

/**
 * Hook that watches for an element scrolling into view and changes the page background
 * 
 * @param {UseScrollBackgroundProps} options - Configuration for the scroll background effect
 */
export function useScrollBackground({
  targetId,
  color,
  priority,
  threshold = 0.4,
}: UseScrollBackgroundProps): void {
  // Connect to the global background context system
  const { registerSection, unregisterSection, setVisibility } = useBackgroundContext();
  
  // Keep track of whether we've already registered this section
  const isRegistered = useRef(false);

  /**
   * First Effect: Register this section with the background system
   * 
   * This runs once when the component loads, and registers the section
   * with the background control system.
   */
  useEffect(() => {
    if (!isRegistered.current) {
      console.log(`Registering section: ${targetId} with color ${color} and priority ${priority}`);
      registerSection(targetId, color, priority);
      isRegistered.current = true;
    }
    
    // Clean up when the component is removed from the page
    return () => {
      console.log(`Unregistering section: ${targetId}`);
      unregisterSection(targetId);
    };
  }, [targetId, color, priority, registerSection, unregisterSection]);

  /**
   * Second Effect: Set up the scroll visibility detection
   * 
   * This uses the browser's IntersectionObserver API to detect when
   * the element scrolls into or out of view.
   */
  useEffect(() => {
    // Find the HTML element with the matching ID
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
      console.error(`Element with ID ${targetId} not found`);
      return;
    }
    
    console.log(`Setting up IntersectionObserver for ${targetId}`);

    /**
     * Callback function that runs when the element scrolls into or out of view
     * 
     * @param {IntersectionObserverEntry[]} entries - Information about the element's visibility
     */
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Check if enough of the element is visible
        const isVisible = entry.isIntersecting && entry.intersectionRatio >= threshold;
        console.log(`Section ${targetId} visibility changed: ${isVisible} (ratio: ${entry.intersectionRatio.toFixed(2)})`);
        
        // Update the element's visibility in the background system
        setVisibility(targetId, isVisible);
      });
    };

    // Create an IntersectionObserver that will watch for the element scrolling into view
    const observer = new IntersectionObserver(
      observerCallback,
      {
        // Check visibility at these percentage thresholds (0% to 100%)
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '0px', // No additional margin around the element
      }
    );

    // Start watching the element
    observer.observe(targetElement);
    console.log(`Now observing ${targetId}`);

    // Clean up when the component is removed from the page
    return () => {
      console.log(`Disconnecting observer for ${targetId}`);
      observer.disconnect();
    };
  }, [targetId, threshold, setVisibility]);
} 