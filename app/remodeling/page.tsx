'use client'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import remodeling_header from '@/public/Remodeling_Images/remodeling_header.png'
import KitchenInfo from '@/components/Remodeling/KitchenInfo'
import Footer from '@/components/Footer'
import EntryInfo from '@/components/Remodeling/EntryInfo'
import PatioInfo from '@/components/Remodeling/PatioInfo'

export default function Remodeling() {
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
      <Header
        img={remodeling_header}
        title='Remodeling'
        alt='Remodeling Header'
      />
      <KitchenInfo />
      <PatioInfo />
      <EntryInfo />
      <Footer />
    </div>
  )
}
