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
          className='text-5xl  
          ml-5 mr-5
                    text-center 
                    font-extrabold 
                    text-black 
                    mt-10
                    mb-10'
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
                    md:flex-row 
                    items-center 
                    justify-center'
        >
          {/* Image on the left */}
          <div
            className='w-full 
                      md:w-1/2 
                      text-center 
                      font-bold 
                      text-black 
                      mt-10 
                      md:mt-0'
          >
            <Image
              className='w-full 
                        hover:bg-opacity-50
                        hover:scale-110
                        hover:rounded-2xl
                        transition 
                        duration-300 
                        ease-in-out'
              src={aboutLogo}
              alt='Logo'
            />
          </div>
          {/* Copy on the right */}
          <div
            className='max-w-2xl 
                      p-4 
                      text-center 
                      text-lg 
                      text-black 
                      mt-4 
                      mx-auto 
                      md:w-1/2 
                      font-semibold 
                      bg-gray-300 
                      rounded-xl 
                      shadow-2xl
                      mr-5 ml-5'
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
            `text-xl p-5 text-white mt-10 bg-black hover:bg-red-800  mb-5`
          )}
        >
          About Us
        </Button>
      </div>
    </>
  )
}

export default AboutHome
