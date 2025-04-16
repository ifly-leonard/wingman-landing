'use client'

import { useState } from 'react'
import Image from 'next/image'

interface FallbackImageProps {
  src: string
  alt: string
  fallbackSrc?: string
  className?: string
  width?: number
  height?: number
}

export default function FallbackImage({ 
  src, 
  alt, 
  fallbackSrc = '/images/4042.webp',
  className,
  width = 500,
  height = 300 
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onError={() => setImgSrc(fallbackSrc)}
    />
  )
} 