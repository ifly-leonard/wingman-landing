"use client"

import { createContext, useContext, useEffect, useState, ReactNode, useCallback, useMemo } from "react"

/**
 * BackgroundContext.tsx
 * 
 * This file creates a system that manages changing the page background color as users scroll.
 * 
 * HOW IT WORKS:
 * 1. The BackgroundProvider component keeps track of all page sections that want to change 
 *    the background color when they're visible on screen.
 * 
 * 2. Each section can register itself with:
 *    - An ID (which section it is)
 *    - A color (what background color it wants to use)
 *    - A priority (which section "wins" if multiple are visible at once)
 * 
 * 3. When a section becomes visible as the user scrolls, it tells the BackgroundProvider
 *    it's visible. The provider then decides which color to apply to the page background.
 * 
 * 4. If multiple sections are visible at the same time, the one with the highest priority wins.
 * 
 * This creates a smooth, scroll-based background color change effect throughout the page.
 */

/**
 * Defines the data we track for each section that can change the background
 */
type BackgroundSection = {
  id: string         // Unique ID of the section (matches the HTML ID attribute)
  color: string      // CSS class to apply (like "bg-red-500")
  priority: number   // Higher numbers = higher priority when multiple sections are visible
  isVisible: boolean // Whether the section is currently visible in the viewport
}

/**
 * Defines the functions and data our background system provides
 */
type BackgroundContextType = {
  registerSection: (id: string, color: string, priority: number) => void // Add a section to track
  unregisterSection: (id: string) => void                                // Remove a section
  setVisibility: (id: string, isVisible: boolean) => void                // Update when a section becomes visible
  currentBackgroundColor: string | null                                  // The currently active background color
}

// Create the React Context (a way to share data between components)
const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined)

/**
 * Helper function to add multiple CSS classes to an element
 * Handles space-separated class strings correctly
 */
function addClasses(element: HTMLElement, classes: string) {
  if (!classes) return;
  
  // Split the classes string by spaces and add each class individually
  classes.split(' ').forEach(className => {
    if (className) {
      element.classList.add(className);
    }
  });
}

/**
 * Helper function to remove multiple CSS classes from an element
 * Handles space-separated class strings correctly
 */
function removeClasses(element: HTMLElement, classes: string) {
  if (!classes) return;
  
  // Split the classes string by spaces and remove each class individually
  classes.split(' ').forEach(className => {
    if (className) {
      element.classList.remove(className);
    }
  });
}

/**
 * BackgroundProvider: The main component that manages the background color system
 * 
 * This wraps the entire application (in layout.tsx) and provides the background
 * color management to all components on the page.
 * 
 * @param {ReactNode} children - The content of the website that will be wrapped
 */
export function BackgroundProvider({ children }: { children: ReactNode }) {
  // Store all sections that can change the background
  const [sections, setSections] = useState<BackgroundSection[]>([])
  
  // The currently active background color class
  const [currentBackgroundColor, setCurrentBackgroundColor] = useState<string | null>(null)

  /**
   * Register a new section that wants to change the background color
   * 
   * Called when a component wants to be able to change the background
   * when it's scrolled into view.
   * 
   * @param {string} id - Unique ID of the section (matches HTML element ID)
   * @param {string} color - CSS class for the background color (e.g., "bg-red-500")
   * @param {number} priority - How important this section is (higher = more important)
   */
  const registerSection = useCallback((id: string, color: string, priority: number) => {
    console.log(`BackgroundContext: Registering section ${id} with color ${color} and priority ${priority}`);
    setSections(prev => {
      // Check if section already exists
      if (prev.some(section => section.id === id)) {
        console.log(`BackgroundContext: Section ${id} already exists, updating`);
        return prev.map(section => 
          section.id === id 
            ? { ...section, color, priority } 
            : section
        )
      }
      // Add new section
      console.log(`BackgroundContext: Adding new section ${id}`);
      return [...prev, { id, color, priority, isVisible: false }]
    })
  }, [])

  /**
   * Remove a section from being tracked
   * 
   * Called when a component is removed from the page.
   * 
   * @param {string} id - ID of the section to remove
   */
  const unregisterSection = useCallback((id: string) => {
    console.log(`BackgroundContext: Unregistering section ${id}`);
    setSections(prev => prev.filter(section => section.id !== id))
  }, [])

  /**
   * Update whether a section is currently visible on screen
   * 
   * Called when a section scrolls into or out of view.
   * 
   * @param {string} id - ID of the section that changed visibility
   * @param {boolean} isVisible - Whether the section is now visible or not
   */
  const setVisibility = useCallback((id: string, isVisible: boolean) => {
    console.log(`BackgroundContext: Setting visibility of ${id} to ${isVisible}`);
    setSections(prev => {
      // Only update if the visibility has changed
      const section = prev.find(s => s.id === id);
      if (!section || section.isVisible === isVisible) {
        return prev;
      }
      
      return prev.map(section => 
        section.id === id 
          ? { ...section, isVisible } 
          : section
      );
    });
  }, [])

  /**
   * Determine which background color should be active
   * 
   * This effect runs whenever the sections or their visibility changes.
   * It finds the highest priority visible section and uses its color.
   */
  useEffect(() => {
    // Get only the sections that are currently visible
    const visibleSections = sections.filter(section => section.isVisible)
    console.log(`BackgroundContext: Visible sections: ${JSON.stringify(visibleSections.map(s => s.id))}`);
    
    // If no sections are visible, remove background color
    if (visibleSections.length === 0) {
      console.log(`BackgroundContext: No visible sections, clearing background`);
      setCurrentBackgroundColor(null)
      return
    }
    
    // Find the visible section with the highest priority
    const highestPrioritySection = visibleSections.reduce((highest, current) => 
      current.priority > highest.priority ? current : highest
    , visibleSections[0])
    
    console.log(`BackgroundContext: Setting background to ${highestPrioritySection.color} from section ${highestPrioritySection.id}`);
    setCurrentBackgroundColor(highestPrioritySection.color)
  }, [sections])

  /**
   * Apply the chosen background color to the page
   * 
   * This effect actually updates the HTML body element's CSS classes
   * to change the visual appearance of the page.
   */
  useEffect(() => {
    console.log(`BackgroundContext: Applying background color: ${currentBackgroundColor}`);
    
    // Skip this on the server (Next.js server-side rendering)
    if (typeof document === 'undefined') return;
    
    // Add the current background color class to the body element
    if (currentBackgroundColor) {
      console.log(`BackgroundContext: Adding class ${currentBackgroundColor} to body`);
      addClasses(document.body, currentBackgroundColor);
    }
    
    // Find all other background colors we need to remove
    const allBackgroundColors = sections
      .map(section => section.color)
      .filter(color => color !== currentBackgroundColor);
    
    // Remove all other background colors from the body
    allBackgroundColors.forEach(color => {
      if (color) {
        console.log(`BackgroundContext: Removing class ${color} from body`);
        removeClasses(document.body, color);
      }
    });
    
    // Clean up function when component unmounts
    return () => {
      if (currentBackgroundColor) {
        removeClasses(document.body, currentBackgroundColor);
      }
    };
  }, [currentBackgroundColor, sections]);

  // Create an object with all the functions and data to share with components
  const contextValue = useMemo(() => ({
    registerSection,
    unregisterSection,
    setVisibility,
    currentBackgroundColor
  }), [registerSection, unregisterSection, setVisibility, currentBackgroundColor])

  // Make the background system available to all child components
  return (
    <BackgroundContext.Provider value={contextValue}>
      {children}
    </BackgroundContext.Provider>
  )
}

/**
 * Hook to access the background context from any component
 * 
 * This is how components can connect to the background system.
 * 
 * @returns {BackgroundContextType} The background context functions and data
 */
export function useBackgroundContext() {
  const context = useContext(BackgroundContext)
  if (context === undefined) {
    throw new Error("useBackgroundContext must be used within a BackgroundProvider")
  }
  return context
} 