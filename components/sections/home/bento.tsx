"use client" 

import Image from "next/image";
import {
    BellIcon,
    CalendarIcon,
    FileTextIcon,
    GlobeIcon,
    InputIcon,
  } from "@radix-ui/react-icons";
  
  import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
  
  const features = [
    {
      Icon: FileTextIcon,
      name: "Direct eGCA Upload",
      description: "Upload logbook entries directly to India's eGCA portal with no manual entry needed after setting verifier and operator.",
      href: "/",
      cta: "Learn more",
      background: <Image src="/images/backgrounds/pattern-1.png" width={300} height={300} alt="" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Roster Sync",
      description: "Sync roster data from AIMS system. Auto-adds flights to your logbook (arms/sabre in pipeline).",
      href: "/",
      cta: "Learn more",
      background: <Image src="/images/backgrounds/pattern-2.png" width={300} height={300} alt="" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: InputIcon,
      name: "Auto-Totals & Reports",
      description: "Auto-calculate and display totals for command, copilot, instructor hours. One-click download of DGCA-compliant reports.",
      href: "/",
      cta: "Learn more",
      background: <Image src="/images/backgrounds/pattern-3.png" width={300} height={300} alt="" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Multi-Platform",
      description: "iOS, Android, and Web App with cross-platform syncing using a single login.",
      href: "/",
      cta: "Learn more",
      background: <Image src="/images/backgrounds/pattern-4.png" width={300} height={300} alt="" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "Pilot-centric Tools",
      description:
        "Pocket-sized preflight briefing, error checking before upload, and multi-crew flight support with correct tagging.",
      href: "/",
      cta: "Learn more",
      background: <Image src="/images/backgrounds/pattern-5.png" width={300} height={300} alt="" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  
  export default function BentoDemo() {
    return (
    <section className="text-gray-600 body-font mt-12 container flex px-10 py-24 mx-auto max-w-7xl md:flex-row flex-col items-center">        
        <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    </section>
    );
  }
  