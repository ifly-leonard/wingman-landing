// app/products/layout.tsx
"use client"

import Link from 'next/link';
import { ProgressBar } from '@nadfri/react-scroll-progress-bar';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ProgressBar color1="white" color2="#4387F6" height="5px" position="sticky" />        
      <main>
        {children}
      </main>          
    </div>
  );
}