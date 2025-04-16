import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Link from "next/link";
import Image from "next/image";
import { airlines, Airline } from "../../../../data/airlines";

const firstRow = airlines.slice(0, airlines.length / 20);
const secondRow = airlines.slice(airlines.length / 20);

// https://content.airhex.com/content/logos/airlines_{IATA_CODE}_701_200_r.png
// Write an inline function

const ReviewCard = ({
    iata,
    name,
}: {
    iata: string;
    name: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="">        
        <Image 
          width={200}
          height={100}
          alt={`${name}`}
          src={`https://content.airhex.com/content/logos/airlines_${iata}_701_200_r.png`}
        />
        <p className="text-xs font-medium text-center mt-2 text-gray-400">{name}</p>
      </div>      
    </figure>
  );
};

export default function AirrosterProductAirlines() {
  return (

    <section id="product-airlines" className="mb-20 z-10 overflow-hidden max-w-6xl">
        {/* <SectionHeader header="Integrations" subheader="You are in good company" /> */}
        <div className="flex w-full flex-col items-center justify-center overflow-auto">
            <Marquee pauseOnHover className="[--duration:40s]">
                {firstRow.map((airline: Airline) => (
                    <ReviewCard key={airline.icao} {...airline} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:400s]">
                {secondRow.map((airline: Airline) => (
                    <ReviewCard key={airline.icao} {...airline} />
                ))}
            </Marquee>
            
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
        </div>

        <div>
            <p className="mt-20 text-2xl font-bold tracking-tighter leading-tight text-gray-900">
                AirRoster works with <span className="p-1 bg-blue-500 text-white rounded-md">20+ roster providers</span> covering <span className="p-1 bg-blue-500 text-white rounded-md">100+ airlines</span> in the 🌏                        
                <br />
                <span className="text-lg text-gray-700 font-normal tracking-normal">
                    Can&apos;t find your roster integration? <Link href="/support" className="text-blue-500 underline underline-offset-2 decoration-2">Write to us</Link>, and we&apos;ll integrate it for you. 
                </span>
            </p>
        </div>
    </section>    
  );
}
