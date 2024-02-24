import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import mountain from '@/public/Residential_Images/mountain.png'
import sun from '@/public/Residential_Images/sunny.png'
import cloudBottom from '@/public/Residential_Images/cloud-bottom.svg'
import cloudLeft from '@/public/Residential_Images/clouds-left.svg'
import cloudRight from '@/public/Residential_Images/clouds-right.svg'
import stars from '@/public/Residential_Images/stars.svg'
import house1 from '@/public/Residential_Images/house1.png'
import house2 from '@/public/Residential_Images/house2.png'
import house3 from '@/public/Residential_Images/house3.png'
import house4 from '@/public/Residential_Images/house4.png'

import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import ResidentialCommitment from './ResidentialCommitment'
import GalleryTestimonial from '../GalleryTestimonial'

const ResidentialParallax = () => {
  const [background, setBackground] = useState(10)

  const parallaxRef = useRef(null)
  const mountainRef = useRef(null)
  const sunRef = useRef(null)
  const cloudsBottomRef = useRef(null)
  const cloudsLeftRef = useRef(null)
  const cloudsRightRef = useRef(null)
  const starsRef = useRef(null)
  const copyRef = useRef(null)
  const housesRef = [useRef(null), useRef(null), useRef(null), useRef(null)]

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
            if (self.direction === 1) {
              setBackground(Math.ceil(self.progress * 100 + 10))
            }
          }
        }
      })

      tl.to(mountainRef.current, { y: '+=80' }, 0)
      tl.to(starsRef.current, { top: 0 }, 0.5)
      tl.to(cloudsBottomRef.current, { opacity: 0, duration: 0.5 }, 0)
      tl.to(cloudsLeftRef.current, { x: '-20%', opacity: 0 }, 0)
      tl.to(cloudsRightRef.current, { x: '20%', opacity: 0 }, 0)
      tl.to(sunRef.current, { y: '+=200%' }, 0)
      housesRef.forEach(house => {
        tl.to(house.current, { opacity: '+=90' }, 0)
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      className='parallax-outer'
      style={{
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backgroundColor: '#96ACB7',
        color: '#36558F',
        background: `linear-gradient(#FCDE9C, #96ACB7 ${background}%, #40376E, #48233C )`
      }}
    >
      <div className='parallax overflow-visble relative h-[110vh] w-full text-white'>
        <Image
          ref={mountainRef}
          className='mountain scale-y-100'
          src={mountain}
          alt='mountain'
        />
        <Image
          ref={sunRef}
          className={`sun custom-hidden w-[60%] lg:w-[40%] 2xl:w-[30%]  ${
            inView ? 'custom-showTranstion' : ''
          }`}
          src={sun}
          alt='sun'
        />
        <Image
          ref={ref}
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
          ref={housesRef[0]}
          className={`house1 custom-hidden w-1/4 lg:block lg:w-1/6 ${
            inView ? 'custom-showTranstion' : ''
          }`}
          src={house1}
          alt='house'
        />
        <Image
          ref={housesRef[1]}
          className={`house2 custom-hidden w-1/4 lg:block lg:w-1/6 ${
            inView ? 'custom-showTranstion' : ''
          }`}
          src={house2}
          alt='house'
        />
        <Image
          ref={housesRef[2]}
          className={`house3 custom-hidden w-1/4 lg:block lg:w-1/6 ${
            inView ? 'custom-showTranstion' : ''
          }`}
          src={house3}
          alt='house'
        />
        <Image
          ref={housesRef[3]}
          className={`house4 custom-hidden w-1/4 lg:block lg:w-1/6 ${
            inView ? 'custom-showTranstion' : ''
          }`}
          src={house4}
          alt='house'
        />

        <div className='flex flex-col pt-6 text-center lg:pt-28'>
          <h1 className='relative left-[25%] w-[50%] rounded-full  bg-blue-500 bg-opacity-80 p-5 text-xl font-bold lg:text-4xl'>
            Residential Roofing, Professionally Done
          </h1>
          <p className='lg:text-md relative left-[19%] z-50 mt-5 w-[60%] rounded-xl border-2 border-black bg-violet-200 p-8 text-center text-sm font-semibold text-black lg:text-xl'>
            If you&apos;re currently contending with a leaky roof or
            contemplating a fresh start with a new one, we encourage you to take
            prompt action. Contact us, and we&apos;ll promptly schedule a visit
            to provide a complimentary estimate at your residence. Ensuring the
            safety and protection of your home is our primary commitment and top
            priority.
          </p>
        </div>
      </div>
      <ResidentialCommitment />
      <GalleryTestimonial textColor='white' />
    </div>
  )
}

export default ResidentialParallax
