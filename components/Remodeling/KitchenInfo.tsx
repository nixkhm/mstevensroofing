import React, { useEffect, useState } from 'react'
import Kitchen3DModel from './Kitchen3DModel'
import Kitchen2_3DModel from './Kitchen2_3DModel'
import Kitchen_Placeholder from '@/public/Remodeling_Images/kitchen1_placeholder.gif'
import Kitchen2_Placeholder from '@/public/Remodeling_Images/kitchen2_placeholder.gif'
import Image from 'next/image'

const KitchenInfo = () => {
  const [webGLSupported, setWebGLSupported] = useState(true)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      setWebGLSupported(false)
    }
  }, [])

  return (
    <div
      className='w-full p-10 text-center'
      style={{
        background: `linear-gradient(#353535, #D9D9D9, #3C6E71, #284B63 )`
      }}
    >
      <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
        <div className='model-container mb-6 rounded-3xl bg-gray-800 p-6'>
          {webGLSupported ? (
            <Kitchen3DModel />
          ) : (
            <div className='relative h-full w-full'>
              <Image
                src={Kitchen_Placeholder}
                alt='Kitchen Placeholder'
                layout='fill'
              />
              <h1 className='relative flex items-center justify-center bg-white p-2 text-sm font-bold text-black'>
                3D Models are supported by WebGL enabled browsers (Chrome,
                Firefox, Edge)
              </h1>
            </div>
          )}
        </div>

        <div className='model-container mb-6 hidden rounded-3xl bg-gray-800 p-6 lg:block'>
          {webGLSupported ? (
            <Kitchen2_3DModel />
          ) : (
            <div className='relative h-full w-full'>
              <Image
                src={Kitchen2_Placeholder}
                alt='Kitchen Placeholder'
                layout='fill'
              />
              <h1 className='relative flex items-center justify-center bg-white p-2 text-sm font-bold text-black'>
                3D Models are supported by WebGL enabled browsers (Chrome,
                Firefox, Edge)
              </h1>
            </div>
          )}
        </div>

        <div className='col-span-2'>
          <h1 className='mb-3 text-3xl font-bold'>
            Embark on a Journey to Culinary Splendor!
          </h1>
          <p className='mx-auto text-sm font-normal lg:w-3/4 lg:text-xl'>
            Our kitchen remodeling services redefine excellence, turning your
            dreams into a masterpiece. Experience the pinnacle of satisfaction
            with our skilled craftsmen, dedicated to transforming spaces and
            creating lasting impressions. Elevate your home with precision,
            passion, and unparalleled expertise, where every detail reflects
            your unique style. Discover a culinary haven that&apos;s more than
            just a kitchen; it&apos;s an embodiment of your aspirations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default KitchenInfo
