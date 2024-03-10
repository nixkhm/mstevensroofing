import { useEffect, useState } from 'react'
import Image from 'next/image'
import Porch_Placeholder from '@/public/Remodeling_Images/porch_placeholder.gif'
import Porch3DModel from './Porch3DModel'
import Button from '../Button'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/navigation'
import ServicesTicker from '../ServicesTicker'

const EntryInfo = () => {
  const [webGLSupported, setWebGLSupported] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const gl =
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    if (!gl) {
      setWebGLSupported(false)
    }
  }, [])

  const porchServices = [
    'Porch Construction',
    'Entry Remodeling',
    'Door Installation',
    'Flooring',
    'Staircase Construction',
    'Railing Installation',
    'Column & Post Replacement',
    'Roof Repair/Replacement',
    'Exterior Lighting',
    'Screened Porch Construction',
    'Painting/Staining',
    'Custom Features',
    'Landscaping',
    'Maintenance Services',
    'Facade Enhancements',
    'Window Installation',
    'Siding Repair/Replacement',
    'Outdoor Living Spaces',
    'Accessibility Modifications'
  ]

  return (
    <div>
      <div
        className='w-full p-10 text-center'
        style={{
          background: `linear-gradient(#EEC584, #CACAAA, #55868C)`
        }}
      >
        <div className='lg:grid lg:grid-cols-1 lg:gap-1'>
          <div className='model-container mx-auto mb-6 rounded-3xl bg-black p-6 lg:w-[60%]'>
            {webGLSupported ? (
              <Porch3DModel />
            ) : (
              <div className='relative h-full w-full'>
                <Image
                  src={Porch_Placeholder}
                  alt='Porch Placeholder'
                  layout='fill'
                />
                <h1 className='text-md relative  flex items-center justify-center bg-black p-1 font-bold text-white'>
                  3D Models are supported by WebGL enabled browsers (Chrome,
                  Firefox, Edge)
                </h1>
              </div>
            )}
          </div>

          <div className='col-span-2 text-black'>
            <h1 className='mb-3 text-3xl font-bold'>
              Front-Facade Remodeling for Lasting Impressions
            </h1>
            <p className='mx-auto text-sm font-normal lg:w-3/4 lg:text-xl'>
              Step into a world where skilled artisans breathe life into your
              home&apos;s exterior. With precision and a keen eye for detail, we
              transform porches and entryways into captivating masterpieces,
              reflecting your unique style. From timeless elegance to functional
              sophistication, our front-facade remodeling services ensure
              lasting impressions. Trust us to redefine your living space with a
              harmonious blend of architectural brilliance and welcoming charm
            </p>
            <Button
              className={twMerge(
                'mt-10 border-4 border-black bg-blue-300 p-4 text-xl hover:bg-white lg:mr-5 lg:p-5'
              )}
            >
              Get a Free Quote
            </Button>
            <Button
              onClick={() => router.push('/#testimonials')}
              className={twMerge(
                'mt-10 border-4 border-black bg-yellow-300 p-4 text-xl hover:bg-white lg:ml-5 lg:p-5'
              )}
            >
              Hear from Satisfied Clients
            </Button>
          </div>
        </div>
      </div>
      <div>
        <ServicesTicker services={porchServices} speed={200} />
      </div>
    </div>
  )
}

export default EntryInfo
