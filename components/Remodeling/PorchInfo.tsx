import { useEffect, useState } from 'react'
import Image from 'next/image'
import Kitchen_Placeholder from '@/public/Remodeling_Images/kitchen1_placeholder.gif'
import Porch3DModel from './Porch3DModel'

const EntryInfo = () => {
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
        background: `linear-gradient(#895B1E, #CCB69B, #284B63 )`
      }}
    >
      <div className='lg:grid lg:grid-cols-1 lg:gap-1'>
        <div className='model-container mx-auto mb-6 rounded-3xl bg-black p-6 lg:w-[80%]'>
          {webGLSupported ? (
            <Porch3DModel />
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

        <div className='col-span-2 text-black'>
          <h1 className='mb-3 text-3xl font-bold'>
            Transformative Front-Facade Remodeling for Lasting Impressions
          </h1>
          <p className='mx-auto text-sm font-normal  lg:w-3/4 lg:text-xl'>
            Step into a world where skilled artisans breathe life into your
            home&apos;s exterior. With precision and a keen eye for detail, we
            transform porches and entryways into captivating masterpieces,
            reflecting your unique style. From timeless elegance to functional
            sophistication, our front-facade remodeling services ensure lasting
            impressions. Trust us to redefine your living space with a
            harmonious blend of architectural brilliance and welcoming charm
          </p>
        </div>
      </div>
    </div>
  )
}

export default EntryInfo
