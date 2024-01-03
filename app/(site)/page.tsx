'use client'

import Footer from '@/components/Footer'
import AboutHome from '@/components/Home/AboutHome'
import AwardsHome from '@/components/Home/AwardsHome'
import CarouselHome from '@/components/Home/Carousel'
import MembershipHome from '@/components/Home/MembershipsHome'
import ServicesHome from '@/components/Home/ServicesHome'
import TestimonialHome from '@/components/Home/TestimonialHome'
import { useEffect, useState } from 'react'

export default function Home() {
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
      <CarouselHome />
      <AboutHome />
      <ServicesHome />
      <AwardsHome />
      <TestimonialHome />
      <MembershipHome />
      <Footer />
    </div>
  )
}
