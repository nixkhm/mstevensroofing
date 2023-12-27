'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import Hamburger from 'hamburger-react'
import Button from './Button'
import { twMerge } from 'tailwind-merge'
import Socials from './Socials'
import { useRouter } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <div className='sticky top-0 z-10'>
      <Socials />
      <div className='bg-sky-200 bg-opacity-99'>
        <div className='sticky top-0 flex flex-col z-10 lg:flex-row lg:justify-between lg:items-center'>
          <div className='flex justify-between items-center lg:w-1/4'>
            <Image
              src={logo}
              alt='Logo'
              onClick={() => router.push('/')}
              className='cursor-pointer'
            />
            <div className='lg:hidden mr-5'>
              <Hamburger toggled={isMenuOpen} toggle={setMenuOpen} />
            </div>
          </div>
          <div
            className={`lg:w-3/4 lg:flex lg:justify-end lg:items-center ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
          >
            <div className='flex flex-col lg:flex-row gap-4 ml-auto p-5 font-bold text-black text-xl rounded-lg'>
              <a
                onClick={() => router.push('/about')}
                className='hover-link hover:text-yellow-400 rounded-md hover:bg-black hover:p-3 transition-all duration-300 cursor-pointer'
              >
                About
              </a>
              <a
                onClick={() => router.push('/residential')}
                className='hover-link hover:text-yellow-400 rounded-md hover:bg-black hover:p-3 transition-all duration-300 cursor-pointer'
              >
                Residential
              </a>
              <a
                onClick={() => router.push('/commercial')}
                className='hover-link hover:text-yellow-400 rounded-md hover:bg-black hover:p-3 transition-all duration-300 cursor-pointer'
              >
                Commercial
              </a>
              <a
                onClick={() => router.push('/remodeling')}
                className='hover-link hover:text-yellow-400 rounded-md hover:bg-black hover:p-3 transition-all duration-300 cursor-pointer'
              >
                Remodeling
              </a>
              <a
                onClick={() => router.push('/gallery')}
                className='hover-link hover:text-yellow-400 rounded-md hover:bg-black hover:p-3 transition-all duration-300 cursor-pointer'
              >
                Gallery
              </a>
            </div>
            <Button
              className={twMerge(
                `text-xl mr-5 lg:p-5 p-2 lg:ml-0 lg:mb-0 ml-5 mb-5`
              )}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
