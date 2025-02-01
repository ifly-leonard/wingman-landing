// app/products/page.tsx
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold tracking-tight mb-8">Our Products</h1>
      <ul className="grid gap-4 max-w-2xl mx-auto">
        <li className="p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
          <Link 
            href="/products/wingman-logbook-app"
            className="flex items-center justify-between text-lg font-medium hover:underline"
          >
            <span>Wingman Logbook App</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </li>
        <li className="p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
          <Link 
            href="/products/airroster-app"
            className="flex items-center justify-between text-lg font-medium hover:underline"
          >
            <span>AirRoster App</span>
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}
