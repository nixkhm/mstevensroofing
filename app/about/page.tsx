'use client'

import 'intersection-observer'

import AboutInfo from '@/components/About/AboutInfo'
import AboutServices from '@/components/About/AboutServices'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import aboutHeader from '@/public/About_Images/aboutHeader.jpg'
import { useEffect, useState } from 'react'
import Blog from '@/components/About/Blog'

export default function About() {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])
  return (
    <div
      className={`w-full h-full bg-blue-100 relative transition-opacity duration-300 ease-in-out ${
        fadeIn ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <Header img={aboutHeader} title='About Us' alt='About Header' />
      <AboutInfo />
      <AboutServices />
      <Blog />
      <Footer />
    </div>
  )
}
