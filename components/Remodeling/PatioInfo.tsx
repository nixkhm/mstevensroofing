import React, { useEffect, useState } from 'react'
import Patio3DModel from './Patio3DModel'
import Patio2_3DModel from './Patio2_3DModel'

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

  return (
    <div
      className='w-full  p-10 text-center'
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
              <h1 className='relative flex items-center justify-center bg-white p-2 text-sm font-bold text-black'>
                3D Models are supported by WebGL enabled browsers (Chrome,
                Firefox, Edge)
              </h1>
              <p>GIF Placeholder</p>
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
            Transform Your Backyard into a Tranquil Oasis of Dreams!
          </h1>
          <p className='mx-auto text-sm font-semibold text-black lg:w-3/4 lg:text-xl'>
            Our patio remodeling services redefine excellence, turning your
            outdoor dreams into a masterpiece. Experience the pinnacle of
            satisfaction with our skilled craftsmen, dedicated to transforming
            spaces and creating lasting impressions. Elevate your home with
            precision, passion, and unparalleled expertise, where every detail
            reflects your unique style. Trust us to create a backyard
            that&apos;s not only visually stunning but also a reflection of your
            aspirations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PatioInfo
