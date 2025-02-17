"use client"

import Globe from "@/components/ui/globe";

export default function SupportGlobe() {
  return (
    <section className="body-font mt-12 flex px-10 py-24 mx-auto max-w-7xl md:flex-row flex-col items-center justify-center">
      <div className="relative flex max-w-full items-center justify-center overflow-hidden rounded-lg border px-40 pb-40 pt-8 md:pb-60 bg-blue-500">
        
        <span className="pointer-events-none whitespace-pre-wrap bg-clip-text text-center leading-none text-white">        
            <p className="mt-2 mb-12">
                At Wingman, we pride ourselves with providing industry leading support for our customers. 
                You will NEVER talk to an AI chat bot. 
            </p>

            <h2 className="text-8xl font-bold">Get support</h2>                    

        </span>

        <Globe className="top-28" />
        
        <div className="pointer-events-none absolute inset-0 h-full" />
      </div>
    </section>
  );
}