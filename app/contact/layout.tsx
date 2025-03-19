import React from "react"


export default function PoilicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">        
        {children}
      </div>
    </div>
  );
}