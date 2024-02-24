'use client'

import ChooseUs from '@/components/Commericial/ChooseUs'
import CommercialIntro from '@/components/Commericial/CommercialIntro'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import commercial_header from '@/public/Commercial_Images/commercial_header.png'
import { useEffect, useState } from 'react'

export default function Commercial() {
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
        img={commercial_header}
        title='Commercial'
        alt='Commercial Header'
      />
      <CommercialIntro />
      <ChooseUs />
      <Footer />
    </div>
  )
}
