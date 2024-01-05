import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import carlisle from '@/public/Home_Images/memberships_home/carlisle.png'
import bbbacred from '@/public/Home_Images/memberships_home/bbbacred.png'
import versico from '@/public/Home_Images/memberships_home/versico.jpg'
import gaf from '@/public/Home_Images/memberships_home/gaf-logo.png'
import nationalroofing from '@/public/Home_Images/memberships_home/nationalroofing.png'

const MembershipHome = () => {
  const images = [
    { src: carlisle, alt: 'carlisle' },
    { src: bbbacred, alt: 'bbbacred' },
    { src: versico, alt: 'versico' },
    { src: gaf, alt: 'gaf' },
    { src: nationalroofing, alt: 'nationalroofing' }
  ]

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

  const renderImageContainer = (
    image: { src: string | StaticImport; alt: string },
    index: React.Key | null | undefined
  ) => (
    <div
      key={index}
      ref={el => el && imagesRef.current.push(el)}
      className='image-container mx-2 my-2 transition hover:scale-110'
    >
      <Image src={image.src} alt={image.alt} width={200} />
    </div>
  )

  return (
    <div className='flex flex-col'>
      <div>
        <h1 className='mt-10 items-center text-center text-4xl font-extrabold'>
          Memberships
        </h1>
      </div>
      <div className='m-10 flex flex-wrap items-center justify-center'>
        {images.map(renderImageContainer)}
      </div>
    </div>
  )
}

export default MembershipHome
