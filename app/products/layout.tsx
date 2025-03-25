"use client"
import React from "react"

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="text-center">    
          {children}
        </div>
      </div>
    </div>
  );
}