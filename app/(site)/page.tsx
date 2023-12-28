'use client'

import About from '@/components/About'
import Awards from '@/components/Awards'
import Carousel from '@/components/Carousel'
import ServicesPreview from '@/components/ServicesPreview'
import { useEffect, useState } from 'react'

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])
  return (
    <div
      className={`w-full h-full relative transition-opacity duration-300 ease-in-out ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Carousel />
      <About />
      <ServicesPreview />
      <Awards />
    </div>
  )
}
