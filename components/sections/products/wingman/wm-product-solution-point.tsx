"use client";
import React from "react";
import Image from "next/image"
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function WingmanProductSolutionReveal() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>         
            <div className="text-xl text-black dark:text-white">
              You never, ever have to worry about it. Introducing <br />

              <div className="flex flex-col items-center justify-center h-full">          
                <div className="p-3 rounded-3xl mb-4 shadow-lg mt-5">
                    <Image
                    src="/images/app-logos/wingman-logo-svg.svg"
                    alt="Wingman Logo"
                    width={96}
                    height={96}
                    className="w-24"
                    />
                </div>
              </div>
              <div className="text-6xl font-bold mt-4 leading-none">
                Wingman Logbook
              </div>
            </div>
          </>
        }
      >
        <div className="flex flex-col items-center justify-center h-full">          
        
          <img
            src={`/images/app-mockups/wingman/my-flights.png`}
            alt="Wingman logbook app interface"
            height={720}
            width={1400}
            className="mx-auto object-contain max-h-[85%]"
            draggable={false}
          />
        </div>
      </ContainerScroll>
    </div>
  );
} 