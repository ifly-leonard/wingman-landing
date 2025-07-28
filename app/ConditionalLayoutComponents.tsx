"use client"

import { usePathname } from 'next/navigation'
import HeaderBanner from "@/components/shared/header-banner";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer"

export default function ConditionalLayoutComponents({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  const isEmbedPage = pathname.startsWith('/embed-airline-list')

  if (isEmbedPage) {
    // For embed pages, return only the children without header/footer
    return <>{children}</>
  }

  // For all other pages, include the full layout
  return (
    <>
      {/* HEADER BANNER */}
      <HeaderBanner /> {/* Control it using the data file */}
      {/* END HEADER BANNER */}

      {/* NAVBAR */}
      <Navbar />
      {/* END NAVBAR */}
      
      {/* PAGE CONTENTS */}
      {children}
      {/* END PAGE CONTENTS */}

      {/* FOOTER */}
      <Footer />
      {/* END FOOTER */}
    </>
  )
} 