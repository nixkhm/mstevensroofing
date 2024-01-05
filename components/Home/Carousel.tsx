'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import carousel_1 from '@/public/Home_Images/carousel/carousel_1.jpg'
import carousel_2 from '@/public/Home_Images/carousel/carousel_2.png'
import carousel_3 from '@/public/Home_Images/carousel/carousel_3.png'
import carousel_4 from '@/public/Home_Images/carousel/carousel_4.png'
import Button from '../Button'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/navigation'

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

  const router = useRouter()

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
                    mb-10
                    flex
                    flex-col
                    items-center 
                    justify-center
                    text-white
                    ${
                      fadeIn
                        ? 'opacity-100'
                        : 'duration-5000 opacity-0 transition-opacity ease-in-out'
                    }`}
      >
        <p
          className={`bg-transparent-200 
                      rounded-3xl 
                      bg-black 
                      p-3 
                      text-center 
                      font-extrabold 
                      sm:text-lg 
                      md:text-xl 
                      lg:text-2xl 
                      xl:text-3xl 
                      2xl:text-4xl
                      ${
                        fadeIn
                          ? 'translate-y-0'
                          : 'duration-3000 -translate-y-8 opacity-0 transition-transform ease-in-out'
                      }`}
        >
          {text[curentTextIndex]}
        </p>
        <div
          className='mt-5 
                    flex 
                    flex-col 
                    gap-4 
                    sm:flex-row'
        >
          <Button
            onClick={() => router.push('/about')}
            className={twMerge(`p-2 text-lg text-black lg:p-5 lg:text-xl`)}
          >
            Learn More
          </Button>
          <Button
            className={twMerge(`p-2 text-lg text-black lg:p-5 lg:text-xl`)}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
