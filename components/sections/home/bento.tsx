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
      name: "Save your files",
      description: "We automatically save your files as you type.",
      href: "/",
      cta: "Learn more",
      background: <Image src="/images/backgrounds/pattern-1.png" width={300} height={300} alt="" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      name: "Full text search",
      description: "Search through all your files in one place.",
      href: "/",
      cta: "Learn more",
      background: <Image src="/images/backgrounds/pattern-2.png" width={300} height={300} alt="" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Multilingual",
      description: "Supports 100+ languages and counting.",
      href: "/",
      cta: "Learn more",
      background: <Image src="/images/backgrounds/pattern-3.png" width={300} height={300} alt="" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Calendar",
      description: "Use the calendar to filter your files by date.",
      href: "/",
      cta: "Learn more",
      background: <Image src="/images/backgrounds/pattern-4.png" width={300} height={300} alt="" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "Notifications",
      description:
        "Get notified when someone shares a file or mentions you in a comment.",
      href: "/",
      cta: "Learn more",
      background: <Image src="/images/backgrounds/pattern-5.png" width={300} height={300} alt="" className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];
  
  export default function BentoDemo() {
    return (
    <section className="text-gray-600 body-font mt-12 container flex px-10 py-24 mx-auto max-w-7xl md:flex-row flex-col items-center">
        <p>
            DEV: Bento Grid Component
        </p>
        <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
            ))}
        </BentoGrid>
    </section>
    );
  }
  