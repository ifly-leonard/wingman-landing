"use client"; // Ensure this component runs on the client side to dynamically load Disqus comments

import dynamic from "next/dynamic"; // Import dynamic to dynamically load the Disqus React component
import { useEffect, useState } from "react"; // Import useState and useEffect from React for state management and side effects

// Define a proper interface for the post object to ensure type safety
interface DisqusPost {
  id: string;
  title: string;
  url: string;
}

// Dynamically load the DiscussionEmbed component from disqus-react with a custom loading indicator
const DiscussionEmbed = dynamic(() => import("disqus-react").then((mod) => mod.DiscussionEmbed), { 
  ssr: false, // Ensure server-side rendering is disabled for this component
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" /> // Custom loading indicator
});

// The DisqusComments component that renders the Disqus discussion embed
const DisqusComments = ({ post }: { post: DisqusPost }) => {
  const [isClient, setIsClient] = useState(false); // State to track if the component is running on the client side
  const [error, setError] = useState<string | null>(null); // State to track any errors that occur
  const [baseUrl, setBaseUrl] = useState("");

  // Effect to set isClient to true once the component mounts and determine base URL
  useEffect(() => {
    setIsClient(true);
    
    // Determine if we're in production or development
    const isProd = window.location.hostname !== "localhost";
    setBaseUrl(isProd ? "https://wingmanlog.in" : "http://localhost:3000");
  }, []);

  // Define the Disqus shortname and configuration
  const disqusShortname = "wingman-lp"; // The Disqus shortname for the site
  
  const disqusConfig = {
    url: `${baseUrl}/post/${post.url}`,
    identifier: `post-${post.id}`,
    title: post.title,
  };

  // If the component is not running on the client side, return null
  if (!isClient) return null;

  // If an error has occurred, display an error message
  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg">
        Comments are temporarily unavailable. Please try again later.
      </div>
    );
  }

  // Return the DiscussionEmbed component with the specified configuration and error handling
  return (
    <div onError={() => setError("Failed to load comments")}>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
