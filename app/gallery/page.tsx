'use client'

import Footer from '@/components/Footer'
import GalleryComponent from '@/components/Gallery/Gallery'
import Header from '@/components/Header'
import gallery_header from '@/public/Gallery_Images/gallery_header.jpg'
import { useEffect, useState } from 'react'

export default function Gallery() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <div
      className={`relative h-full w-full  text-white transition-opacity duration-300 ease-in-out ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Header img={gallery_header} title='Gallery' alt='Gallery Header' />
      <GalleryComponent />
      <Footer />
    </div>
  )
}
