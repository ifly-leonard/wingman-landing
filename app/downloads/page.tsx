"use client"

import Link from "next/link"
import SectionHeader from "@/components/ui/section-header"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { downloads } from "@/data/downloads"

export default function DownloadsPage() {
  // Format download count with commas
  const formatDownloadCount = (count: number) => {
    return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <SectionHeader header="DOWNLOADS" subheader="Official Resources" />
      
      {/* Downloads list */}
      <div className="flex flex-col gap-6 max-w-3xl mx-auto mt-8">
        {downloads.map((item) => (
          <div 
            key={item.id} 
            className="border rounded-lg p-6 hover:shadow-lg hover:border-blue-500 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
              <div>
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm text-gray-500">{item.fileSize}</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span className="text-sm text-gray-500">{formatDownloadCount(item.downloadCount)} downloads</span>
                </div>
                                
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-xs uppercase font-bold text-gray-400 mr-2">File type:</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">.{item.fileType}</span>
              </div>
              
              <Link 
                href={item.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA section */}
      <section className="p-5 my-12 bg-gradient-to-r from-blue-500 to-blue-600 flex flex-col md:flex-row justify-between items-center rounded-2xl md:p-10 w-full max-w-3xl mx-auto">
        <div className="text-white text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Looking for something else?</h2>
          <p>If you can&apos;t find what you need, our support team is here to help.</p>
        </div>
        
        <Link href="https://support.wingmanlog.in/portal/en/newticket" target="_blank" className="inline-block">
          <RainbowButton>
            Contact Support
          </RainbowButton>
        </Link>
      </section>
    </div>
  )
}