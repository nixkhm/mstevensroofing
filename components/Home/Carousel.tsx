'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import carousel_1 from '../../public/carousel/carousel_1.jpg'
import carousel_2 from '../../public/carousel/carousel_2.png'
import carousel_3 from '../../public/carousel/carousel_3.png'
import carousel_4 from '../../public/carousel/carousel_4.png'
import Button from '../Button'
import { twMerge } from 'tailwind-merge'

const images = [carousel_1, carousel_2, carousel_3, carousel_4]

const text = [
  'Family-owned and operated, specializing in all aspects of remodeling & roofing services',
  'We have received a number of awards for quality and service.',
  'Exceptional quality for a fair price',
  'Innovative solutions for modern living spaces'
]

const Carousel = () => {
  const [fadeIn, setFadeIn] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [curentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    setFadeIn(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false)
      setTimeout(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
        setCurrentTextIndex(prevIndex => (prevIndex + 1) % text.length)
        setFadeIn(true)
      }, 500)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='relative'>
      <div className={`transition-opacity ease-in-out`}>
        <Image
          src={images[currentImageIndex]}
          alt='Home'
          style={{ width: '100%' }}
        />
      </div>
      <div
        className={`absolute 
                    inset-0 
                    flex
                    flex-col
                    items-center
                    justify-center 
                    text-white
                    mb-10
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
          {text[curentTextIndex]}
        </p>
        <div
          className='flex 
                    flex-col 
                    sm:flex-row 
                    gap-4 
                    mt-5'
        >
          <Button
            className={twMerge(`lg:text-xl text-lg text-black p-2 lg:p-5`)}
          >
            Learn More
          </Button>
          <Button
            className={twMerge(`lg:text-xl text-lg text-black p-2 lg:p-5`)}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
