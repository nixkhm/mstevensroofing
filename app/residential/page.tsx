'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import residentialHeader from '@/public/Residential_Images/residential_header.jpg'
import ResidentialParallax from '@/components/Residential/ResidentialParallax'

export default function Residential() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])
  return (
    <div
      className={`relative h-full w-full transition-opacity duration-300 ease-in-out ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Header
        img={residentialHeader}
        title='Residential'
        alt='Residential Header'
      />
      <ResidentialParallax />
      <Footer />
    </div>
  )
}
