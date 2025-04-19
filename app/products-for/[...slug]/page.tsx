import { notFound } from 'next/navigation';

// This catch-all route will handle any undefined routes under /products-for/
// and trigger the not-found.tsx in the products-for directory
export default function CatchAllProductsPage() {
  // Always trigger the not-found page
  notFound();
  
  // This code will never be reached
  return null;
} 