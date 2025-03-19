// app/products/layout.tsx
"use client"

import Link from "next/link"
// import { motion } from "framer-motion" // Commented out as currently unused
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
          <div className="flex items-center gap-2 text-xl mb-12 p-3 text-gray-500/[.6] bg-gray-100 rounded-md">
            <Link href="/products">Products</Link>
            {'>'}
            {React.isValidElement(children) && 'pageName' in children.props ? children.props.pageName : ''}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}