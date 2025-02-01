"use client"

import Globe from "@/components/ui/globe";

export default function GlobeDemo() {
  return (
    <section className="body-font mt-12 flex px-10 py-24 mx-auto max-w-7xl md:flex-row flex-col items-center justify-center">
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
        
        <span className="pointer-events-none whitespace-pre-wrap bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
          Globe
        </span>

        <Globe className="top-28" />
        
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    </section>
  );
}