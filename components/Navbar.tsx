'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../public/logo/logo.png'
import Hamburger from 'hamburger-react'
import Button from './Button'
import { twMerge } from 'tailwind-merge'
import Socials from './Socials'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isSticky, setSticky] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let timeoutId: string | number | NodeJS.Timeout | undefined

    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 200) {
        clearTimeout(timeoutId)
        setSticky(true)
      } else {
        timeoutId = setTimeout(() => {
          setSticky(false)
        }, 300)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div id='primary-navbar'>
        <div
          className='top-0 z-10 text-center transition duration-300 ease-in-out lg:sticky 
                lg:text-left'
        >
          <Socials />
          <div className='bg-opacity-99 bg-sky-200'>
            <div className='sticky top-0 z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between'>
              <div className='flex items-center justify-between lg:w-1/4'>
                <Image
                  src={logo}
                  alt='Logo'
                  onClick={() => router.push('/')}
                  className='cursor-pointer'
                />
                <div className='mr-5 lg:hidden'>
                  <Hamburger toggled={isMenuOpen} toggle={setMenuOpen} />
                </div>
              </div>
              <div
                className={`lg:flex lg:w-3/4 lg:items-center lg:justify-end ${
                  isMenuOpen ? 'block' : 'hidden'
                }`}
              >
                <div className='ml-auto flex flex-col gap-4 rounded-lg p-5 text-xl font-bold text-black lg:flex-row'>
                  <a
                    onClick={() => router.push('/about')}
                    className='hover-link cursor-pointer rounded-md transition-all duration-300 hover:bg-black hover:p-3 hover:text-yellow-400'
                  >
                    About
                  </a>
                  <a
                    onClick={() => router.push('/residential')}
                    className='hover-link cursor-pointer rounded-md transition-all duration-300 hover:bg-black hover:p-3 hover:text-yellow-400'
                  >
                    Residential
                  </a>
                  <a
                    onClick={() => router.push('/remodeling')}
                    className='hover-link cursor-pointer rounded-md transition-all duration-300 hover:bg-black hover:p-3 hover:text-yellow-400'
                  >
                    Remodeling
                  </a>
                  <a
                    onClick={() => router.push('/commercial')}
                    className='hover-link cursor-pointer rounded-md transition-all duration-300 hover:bg-black hover:p-3 hover:text-yellow-400'
                  >
                    Commercial
                  </a>

                  <a
                    onClick={() => router.push('/gallery')}
                    className='hover-link cursor-pointer rounded-md transition-all duration-300 hover:bg-black hover:p-3 hover:text-yellow-400'
                  >
                    Gallery
                  </a>
                  <a
                    onClick={() => router.push('/#testimonials')}
                    className='hover-link cursor-pointer rounded-md transition-all duration-300 hover:bg-black hover:p-3 hover:text-yellow-400'
                  >
                    Testimonials
                  </a>
                </div>
                <Button
                  className={twMerge(
                    `mb-5 ml-5 mr-5 p-5 text-xl lg:mb-0 lg:ml-0`
                  )}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Secondary Navbar */}
      <div
        className={`
          text-center
          ${isSticky ? 'top-0 z-10 lg:fixed' : 'hidden'}
          hidden transition-all duration-300 ease-in-out lg:block
        `}
        style={{
          background: isSticky ? 'white' : 'transparent',
          position: isSticky ? 'fixed' : 'relative',
          width: '100%',
          height: isSticky ? '60px' : '0',
          overflow: 'hidden',
          zIndex: 1000,
          transition: 'height 0.4s ease-in-out'
        }}
      >
        <div
          className={`
          sticky top-0
          flex items-center justify-between
          lg:w-full
        `}
        >
          <Image
            src={logo}
            alt='Logo'
            width={200}
            height={100}
            onClick={() => router.push('/')}
            className='cursor-pointer'
          />
          <div className='mr-5 lg:hidden'>
            <Hamburger toggled={isMenuOpen} toggle={setMenuOpen} />
          </div>
          <div
            className={`
              lg:flex lg:items-center lg:justify-end
              ${isMenuOpen ? 'block' : 'hidden'}
            `}
          >
            <div
              className={`
              text-md ml-auto flex gap-4 p-2 font-bold text-black
            `}
            >
              <a
                onClick={() => router.push('/about')}
                className={`
                  hover-link
                  cursor-pointer
                  rounded-md transition-all duration-300
                  hover:bg-black hover:p-2 hover:text-yellow-400
                `}
              >
                About
              </a>
              <a
                onClick={() => router.push('/residential')}
                className={`
                  hover-link
                  cursor-pointer
                  rounded-md transition-all duration-300
                  hover:bg-black hover:p-2 hover:text-yellow-400
                `}
              >
                Residential
              </a>
              <a
                onClick={() => router.push('/remodeling')}
                className={`
                  hover-link
                  cursor-pointer
                  rounded-md transition-all duration-300
                  hover:bg-black hover:p-2 hover:text-yellow-400
                `}
              >
                Remodeling
              </a>
              <a
                onClick={() => router.push('/commercial')}
                className={`
                  hover-link
                  cursor-pointer
                  rounded-md transition-all duration-300
                  hover:bg-black hover:p-2 hover:text-yellow-400
                `}
              >
                Commercial
              </a>

              <a
                onClick={() => router.push('/gallery')}
                className={`
                  hover-link
                  cursor-pointer
                  rounded-md transition-all duration-300
                  hover:bg-black hover:p-2 hover:text-yellow-400
                `}
              >
                Gallery
              </a>
              <a
                onClick={() => router.push('/#testimonials')}
                className={`
                  hover-link
                  cursor-pointer
                  rounded-md transition-all duration-300
                  hover:bg-black hover:p-2 hover:text-yellow-400
                `}
              >
                Testimonials
              </a>
            </div>
            <Button
              className={twMerge(`
                text-md mb-5 ml-5
                mr-5 p-2 lg:mb-0 lg:ml-0
              `)}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
