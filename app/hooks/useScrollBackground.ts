import { useState, useEffect, RefObject } from 'react';

type UseScrollBackgroundProps = {
  targetRef: RefObject<HTMLElement>;
  activeColor: string;
  defaultColor: string;
  threshold?: number;
};

export function useScrollBackground({
  targetRef,
  activeColor,
  defaultColor,
  threshold = 0.4,
}: UseScrollBackgroundProps): string {
  const [backgroundColor, setBackgroundColor] = useState(defaultColor);

  useEffect(() => {
    if (!targetRef.current) return;

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Check if element is visible at the threshold specified
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          setBackgroundColor(activeColor);
        } else {
          setBackgroundColor(defaultColor);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      {
        threshold: [0, threshold, 1.0], // Add more thresholds for smoother detection
        rootMargin: '0px',
      }
    );

    observer.observe(targetRef.current);

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef, activeColor, defaultColor, threshold]);

  return backgroundColor;
} 