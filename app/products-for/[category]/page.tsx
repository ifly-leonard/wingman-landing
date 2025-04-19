import { notFound } from 'next/navigation';

// This will handle routes like /products-for/flight-training-organisations
export default function ProductCategoryPage({ params }: { params: { category: string } }) {
  // List of valid categories
  const validCategories = ['airline-pilots', 'cabin-crew'];
  
  // If the category is not in our valid list, show the not-found page
  if (!validCategories.includes(params.category)) {
    notFound();
  }
  
  // This code should never be reached for invalid categories
  return (
    <div>
      <h1>Error: This page should redirect to the not-found page</h1>
      <p>If you're seeing this, there's an issue with the not-found.tsx configuration</p>
    </div>
  );
} 