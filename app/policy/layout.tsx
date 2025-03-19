// app/products/layout.tsx
"use client"

// import Link from "next/link" // Commented out as currently unused
// import { motion } from "framer-motion" // Commented out as currently unused
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