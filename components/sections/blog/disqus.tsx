"use client"; // Ensure this runs on the client side

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Define a proper interface for the post object
interface DisqusPost {
  id?: string | number;
  title?: string;
}

const DiscussionEmbed = dynamic(() => import("disqus-react").then((mod) => mod.DiscussionEmbed), { 
  ssr: false,
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />
});

const DisqusComments = ({ post }: { post?: DisqusPost }) => {
  const [isClient, setIsClient] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const disqusShortname = "wingman-lp";
  const disqusConfig = {
    url: typeof window !== 'undefined' ? window.location.href : "http://localhost:3000/blog",
    identifier: String(post?.id || "123"),
    title: post?.title || "test title",
  };

  if (!isClient) return null;

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg">
        Comments are temporarily unavailable. Please try again later.
      </div>
    );
  }

  return (
    <div onError={() => setError("Failed to load comments")}>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
