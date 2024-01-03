'use client'

import Image from 'next/image'
import aboutLogo from '@/public/logo/aboutLogo.png'
import Button from '../Button'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/navigation'

const AboutHome = () => {
  const router = useRouter()

  const experience = new Date().getFullYear() - 1988

  return (
    <>
      <div
        className='flex 
                  flex-col 
                  items-center 
                  justify-center
                  bg-red-300'
      >
        <h1
          className='mb-10  ml-5
          mr-5 mt-10
                    text-center 
                    text-3xl 
                    font-extrabold 
                    text-black
                    lg:text-5xl'
        >
          M. Stevens Roofing Specialist &amp; Remodeling Co.
        </h1>
        {/* <div className="text-lg font-medium text-center text-black mt-3">
          WE BELIEVE A GOOD VALUE IS EXCEPTIONAL QUALITY FOR A FAIR PRICE WITH A
          WRITTEN GUARANTEE.
        </div> */}
        <h2 className='text-2xl font-semibold lg:mb-10'>
          {experience}+ Years of Trusted Experience
        </h2>
        <div
          className='flex 
                    flex-col 
                    items-center 
                    justify-center 
                    md:flex-row'
        >
          {/* Image on the left */}
          <div
            className='mt-10 
                      w-full 
                      text-center 
                      font-bold 
                      text-black 
                      md:mt-0 
                      md:w-1/2'
          >
            <Image
              className='w-full 
                        transition
                        duration-300
                        ease-in-out
                        hover:scale-110 
                        hover:rounded-2xl 
                        hover:bg-opacity-50'
              src={aboutLogo}
              alt='Logo'
            />
          </div>
          {/* Copy on the right */}
          <div
            className='mx-auto 
                      ml-5 
                      mr-5 
                      mt-4 
                      max-w-2xl 
                      rounded-xl 
                      bg-gray-300 
                      p-4 
                      text-center 
                      text-lg 
                      font-semibold 
                      text-black
                      shadow-2xl md:w-1/2'
          >
            <p>
              M. Stevens Roofing is a family-owned business with offices in
              South Hampton and Medford. Fully licensed and insured, we&apos;re
              committed to delivering top-notch roofing services on Long Island.
              Our 25-year dedication has earned us accolades, including the
              Super Service Award from Angie&apos;s List and the Dan&apos;s Best
              of the Best Platinum Award for exceptional roofing work. With an
              A+ rating from the Better Business Bureau, M. Stevens Roofing
              guarantees exceptional quality, fair prices, and peace of mind for
              our valued customers. Choose us for the very best in roofing
              services
            </p>
          </div>
        </div>
        <Button
          onClick={() => router.push('/about')}
          className={twMerge(
            `mb-5 mt-10 bg-black p-5 text-xl text-white  hover:bg-red-800`
          )}
        >
          About Us
        </Button>
      </div>
    </>
  )
}

export default AboutHome
