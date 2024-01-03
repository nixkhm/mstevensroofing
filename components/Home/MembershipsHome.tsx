import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import carlisle from '@/public/Home_Images/memberships_home/carlisle.png'
import bbbacred from '@/public/Home_Images/memberships_home/bbbacred.png'
import versico from '@/public/Home_Images/memberships_home/versico.jpg'
import gaf from '@/public/Home_Images/memberships_home/gaf-logo.png'
import nationalroofing from '@/public/Home_Images/memberships_home/nationalroofing.png'

const MembershipHome = () => {
  const imagesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const handleScroll = () => {
      imagesRef.current.forEach(element => {
        const rect = element.getBoundingClientRect()
        if (rect.top < window.innerHeight) {
          element.classList.add('slide-in')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='flex flex-col'>
      <div>
        <h1 className='mt-10 items-center text-center text-4xl font-extrabold'>
          Memberships
        </h1>
      </div>
      <div className='mb-10 mt-10 flex flex-wrap items-center justify-center'>
        <div
          ref={el => el && imagesRef.current.push(el)}
          className='image-container mx-2 my-2 transition hover:scale-110'
        >
          <Image src={carlisle} alt='carlisle' width={200} />
        </div>
        <div
          ref={el => el && imagesRef.current.push(el)}
          className='image-container mx-2 my-2 transition hover:scale-110'
        >
          <Image src={bbbacred} alt='bbbacred' width={200} />
        </div>
        <div
          ref={el => el && imagesRef.current.push(el)}
          className='image-container mx-2 my-2 transition hover:scale-110'
        >
          <Image src={versico} alt='versico' width={200} />
        </div>
        <div
          ref={el => el && imagesRef.current.push(el)}
          className='image-container mx-2 my-2 transition hover:scale-110'
        >
          <Image src={gaf} alt='gaf' width={200} />
        </div>
        <div
          ref={el => el && imagesRef.current.push(el)}
          className='image-container mx-2 my-2 transition hover:scale-110'
        >
          <Image src={nationalroofing} alt='nationalroofing' width={200} />
        </div>
      </div>
    </div>
  )
}

export default MembershipHome
