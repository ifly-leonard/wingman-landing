// app/products/layout.tsx
"use client"
import { ProgressBar } from "@nadfri/react-scroll-progress-bar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">    
      <main>
        
        <ProgressBar 
          color1   = "gray" 
          color2   = "#3C82F6" 
          height   = "4px"
          position = "fixed"  
        />      

        { children }
        
      </main>          
    </div>
  );
}