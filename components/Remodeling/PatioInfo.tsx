import React, { useEffect, useState } from 'react'
import Patio3DModel from './Patio3DModel'
import Patio2_3DModel from './Patio2_3DModel'
import Image from 'next/image'
import ServicesTicker from '../Ticker'

const PatioInfo = () => {
  const [webGLSupported, setWebGLSupported] = useState(true)

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      setWebGLSupported(false)
    }
  }, [])

  const patioRemodelingServices = [
    'Patio Design and Planning',
    'Deck Construction',
    'Pergola and Gazebo Installation',
    'Outdoor Kitchen Construction',
    'Custom Patio Flooring Installation',
    'Patio Cover and Awning Installation',
    'Fire Pit and Fireplace Construction',
    'Outdoor Lighting Design and Installation'
  ]

  return (
    <div>
      <div
        className='w-full p-10 text-center'
        style={{
          background: `linear-gradient(#2E2F2F, #847577, #FDF0D5)`
        }}
      >
        <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
          <div className='model-container mb-6 rounded-3xl bg-gray-500 p-6'>
            {webGLSupported ? (
              <Patio3DModel />
            ) : (
              <div className='relative h-full w-full'>
                {/* <Image
                src={Patio_Placeholder}
                alt='Patio Placeholder'
                layout='fill'
                fill
              /> */}
                <h1 className='relative flex items-center justify-center bg-white p-2 text-sm font-bold text-black'>
                  3D Models are supported by WebGL enabled browsers (Chrome,
                  Firefox, Edge)
                </h1>
                GIF Placeholder
              </div>
            )}
          </div>

          <div className='model-container mb-6 hidden rounded-3xl bg-gray-500 p-6 lg:block'>
            {webGLSupported ? (
              <Patio2_3DModel />
            ) : (
              <div className='relative h-full w-full'>
                <h1 className='relative flex items-center justify-center bg-white p-2 text-sm font-bold text-black'>
                  3D Models are supported by WebGL enabled browsers (Chrome,
                  Firefox, Edge)
                </h1>
                <p>GIF Placeholder</p>
              </div>
            )}
          </div>

          <div className='col-span-2'>
            <h1 className='mb-3 text-3xl font-bold text-black'>
              Elevate Your Outdoor Space
            </h1>
            <p className='mx-auto text-sm font-normal text-black lg:w-3/4 lg:text-xl'>
              Our patio remodeling services redefine excellence, turning your
              outdoor dreams into a masterpiece. Experience the pinnacle of
              satisfaction with our skilled craftsmen, dedicated to transforming
              spaces and creating lasting impressions. Elevate your home with
              precision, passion, and unparalleled expertise, where every detail
              reflects your unique style. Trust us to create a backyard
              that&apos;s not only visually stunning but also a reflection of
              your aspirations.
            </p>
          </div>
        </div>
      </div>
      <div>
        <ServicesTicker services={patioRemodelingServices} speed={90} />
      </div>
    </div>
  )
}

export default PatioInfo
