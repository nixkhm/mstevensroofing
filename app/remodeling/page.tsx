'use client'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import remodeling_header from '@/public/Remodeling_Images/remodeling_header.png'
import Kitchen3DModel from '@/components/Remodeling/Kitchen3DModel'
import RemodelingInfo from '@/components/Remodeling/RemodelingInfo'
import KitchenInfo from '@/components/Remodeling/KitchenInfo'
import Footer from '@/components/Footer'

export default function Remodeling() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <div
      className={`relative h-full w-full bg-gray-600 text-white transition-opacity duration-300 ease-in-out ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Header
        img={remodeling_header}
        title='Remodeling'
        alt='Remodeling Header'
      />
      <RemodelingInfo />
      <KitchenInfo />
      <Footer />
    </div>
  )
}
