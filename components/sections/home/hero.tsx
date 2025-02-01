"use client"

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import SparklesText from "@/components/ui/sparkles-text";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";

function HomePageHeroSection() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["airline pilots", "cabin crew", "student pilots", "ground school", "FTOs", "NSOP pilots"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">          
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-6xl tracking-tight text-center font-semibold">            
              <div className="flex flex-row gap-3 text-center justify-center">
                <div>
                  <SparklesText text="Modern" /> 
                </div>
                <div>apps for</div>
              </div>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-blue-500"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
              Wingman makes beautiful, AI powered apps for the folks in aviation. 
            </p>
          </div>
          
          <div className="flex flex-row gap-3">
            
            <Button size="lg" className="gap-4" variant="outline" asChild>
              <Link href="/">Learn More</Link>
            </Button>
                                  
            <RainbowButton>
              Get Started
            </RainbowButton>

          </div>
        </div>
      </div>
    </div>
  );
}

export { HomePageHeroSection };
