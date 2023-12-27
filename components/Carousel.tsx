'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import splashHome1 from '../public/images/splashHome1.jpg'
import Button from './Button'
import { twMerge } from 'tailwind-merge'

const Carousel = () => {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  return (
    <div className='relative'>
      <Image src={splashHome1} alt='Home' objectFit='cover' />
      <div
        className={`absolute 
                    inset-0 
                    flex 
                    flex-col 
                    items-center 
                    justify-center 
                    text-white
                    ${
                      fadeIn
                        ? 'opacity-100'
                        : 'opacity-0 transition-opacity duration-5000 ease-in-out'
                    }`}
      >
        <p
          className={`sm:text-lg 
                      md:text-xl 
                      lg:text-2xl 
                      xl:text-3xl 
                      2xl:text-4xl 
                      font-extrabold 
                      bg-black 
                      rounded-3xl 
                      bg-transparent-200 
                      p-3 
                      text-center
                      ${
                        fadeIn
                          ? 'translate-y-0'
                          : '-translate-y-8 opacity-0 transition-transform duration-3000 ease-in-out'
                      }`}
        >
          Family-owned and operated, specializing in all aspects of remodeling
          &amp; roofing services
        </p>
        <div
          className='flex 
                    flex-col 
                    sm:flex-row 
                    gap-4 
                    mt-5'
        >
          <Button className={twMerge(`text-xl text-black p-2 lg:p-5`)}>
            Learn More
          </Button>
          <Button className={twMerge(`text-xl text-black p-2 lg:p-5`)}>
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
