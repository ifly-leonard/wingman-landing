"use client"; // Ensure this runs on the client side

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const DiscussionEmbed = dynamic(() => import("disqus-react").then((mod) => mod.DiscussionEmbed), { ssr: false });

const DisqusComments = ({ post }: { post?: any }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const disqusShortname = "wingman-lp";
  const disqusConfig = {
    url: "http://localhost:3000/blog",
    identifier: post?.id || "123", // Ensure unique post ID
    title: post?.title || "test title", // Use dynamic post title
  };

  if (!isClient) return null; // Prevent rendering on the server

  return (
    <>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </>
  );
};

export default DisqusComments;
