import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import mountain from '@/public/Residential_Images/mountain.png'
import sun from '@/public/Residential_Images/sun.png'
import cloudBottom from '@/public/Residential_Images/cloud-bottom.svg'
import cloudLeft from '@/public/Residential_Images/clouds-left.svg'
import cloudRight from '@/public/Residential_Images/clouds-right.svg'
import stars from '@/public/Residential_Images/stars.svg'
import house from '@/public/Residential_Images/house.png'

import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ResidentialParallax = () => {
  const [background, setBackground] = useState(20)

  const parallaxRef = useRef(null)
  const mountainRef = useRef(null)
  const sunRef = useRef(null)
  const cloudsBottomRef = useRef(null)
  const cloudsLeftRef = useRef(null)
  const cloudsRightRef = useRef(null)
  const starsRef = useRef(null)
  const copyRef = useRef(null)
  const houseRef = useRef(null)

  const [ref, inView] = useInView({
    triggerOnce: false
  })

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: 'top top',
          end: '5000 bottom',
          scrub: true,
          pin: true,
          onUpdate: self => {
            setBackground(Math.ceil(self.progress * 100 + 20))
          }
        }
      })
      tl.to(
        mountainRef.current,
        {
          y: '+=80'
        },
        0
      )
      tl.to(
        starsRef.current,
        {
          top: 0
        },
        0.5
      )
      tl.to(
        cloudsBottomRef.current,
        {
          opacity: 0,
          duration: 0.5
        },
        0
      )
      tl.to(
        cloudsLeftRef.current,
        {
          x: '-20%',
          opacity: 0
        },
        0
      )
      tl.to(
        cloudsRightRef.current,
        {
          x: '20%',
          opacity: 0
        },
        0
      )
      tl.to(
        sunRef.current,
        {
          y: '+=500'
        },
        0
      )
      tl.to(
        houseRef.current,
        {
          y: '-=300',
          opacity: '+=5'
        },
        0
      )
      tl.to(
        copyRef.current,
        {
          y: '-=200%',
          opacity: '+=5'
        },
        0
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div
      className='parallax-outer overflow-hidden'
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backgroundColor: '#96ACB7',
        color: '#36558F',
        background: `linear-gradient(#FCDE9C, #96ACB7 ${background}%, #40376E, #48233C )`
      }}
    >
      <div className='parallax relative h-[110vh] w-full text-white'>
        <Image
          ref={mountainRef}
          className='mountain scale-y-90'
          src={mountain}
          alt='mountain'
        />
        <Image
          ref={sunRef}
          className={`sun custom-hidden ${
            inView ? 'custom-showTranstion' : ''
          }`}
          src={sun}
          alt='sun'
        />
        <Image
          ref={cloudsBottomRef}
          className='clouds-bottom'
          src={cloudBottom}
          alt='cloud-bottom'
        />
        <Image
          ref={cloudsLeftRef}
          className='clouds-left'
          src={cloudLeft}
          alt='cloud-left'
        />
        <Image
          ref={cloudsRightRef}
          className='clouds-right'
          src={cloudRight}
          alt='cloud-right'
        />
        <Image ref={starsRef} className='stars' src={stars} alt='stars' />
        <Image
          ref={ref}
          className={`house custom-hidden w-2/5 lg:block lg:w-1/5 ${
            inView ? 'custom-showTranstion' : ''
          }`}
          src={house}
          alt='house'
        />

        <div ref={copyRef} className='copy'>
          <h1 className='rounded-full bg-blue-600 bg-opacity-80 p-5 text-xl font-bold lg:text-4xl'>
            Residential Roofing, Professionally Done
          </h1>
          <p
            className='text-md mt-5 rounded-xl border-2 border-black bg-violet-200 p-8 font-semibold text-black lg:text-xl'
            style={{ width: '75%' }}
          >
            Whether you have a leaky roof or you&apos;ve recently been
            considering starting fresh with a new one, don&apos;t delay any
            longer! Call us and we will come to your home and give you an
            estimate, free of charge. The safety and protection of your home are
            always our first priorities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ResidentialParallax
