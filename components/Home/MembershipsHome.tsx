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
        <h1 className='text-4xl items-center text-center font-extrabold mt-10'>
          Memberships
        </h1>
      </div>
      <div className='flex justify-center items-center mt-10 mb-10 flex-wrap'>
        <div
          ref={el => el && imagesRef.current.push(el)}
          className='mx-2 my-2 hover:scale-110 transition image-container'
        >
          <Image src={carlisle} alt='carlisle' width={200} />
        </div>
        <div
          ref={el => el && imagesRef.current.push(el)}
          className='mx-2 my-2 hover:scale-110 transition image-container'
        >
          <Image src={bbbacred} alt='bbbacred' width={200} />
        </div>
        <div
          ref={el => el && imagesRef.current.push(el)}
          className='mx-2 my-2 hover:scale-110 transition image-container'
        >
          <Image src={versico} alt='versico' width={200} />
        </div>
        <div
          ref={el => el && imagesRef.current.push(el)}
          className='mx-2 my-2 hover:scale-110 transition image-container'
        >
          <Image src={gaf} alt='gaf' width={200} />
        </div>
        <div
          ref={el => el && imagesRef.current.push(el)}
          className='mx-2 my-2 hover:scale-110 transition image-container'
        >
          <Image src={nationalroofing} alt='nationalroofing' width={200} />
        </div>
      </div>
    </div>
  )
}

export default MembershipHome
