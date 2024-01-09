import { useEffect, useState } from 'react'
import Image from 'next/image'
import Kitchen_Placeholder from '@/public/Remodeling_Images/kitchen1_placeholder.gif'

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
    <div className='w-full bg-gray-600 p-10 text-center'>
      <div className='lg:grid lg:grid-cols-1 lg:gap-6'>
        <div className='model-container mb-6 rounded-3xl bg-gray-800 p-6'>
          {webGLSupported ? (
            <div>Entryway 3D Model</div>
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

        <div className='col-span-2'>
          <h1 className='mb-3 text-2xl font-bold'>
            Enter the entryway of your dreams!
          </h1>
          <p className='mx-auto text-sm font-normal lg:w-3/4 lg:text-xl'>
            Imagine walking through doors that transcend the ordinary, into
            spaces that embody both luxury and functionality. Our skilled
            craftsmen are dedicated to transforming houses into stunning works
            of art, with an emphasis on crafting entryways that leave a lasting
            impression. With a passion for precision and unparalleled expertise,
            we redefine the construction experience. Each detail is carefully
            considered to reflect your unique style and aspirations. Your home
            is not just a structure; it&apos;s a canvas upon which we paint the
            picture of your dreams. Our kitchen remodeling services, a testament
            to our commitment, elevate your living space to new heights. Whether
            it&apos;s creating a culinary haven or building an entryway that
            welcomes you with timeless elegance, we turn visions into reality.
          </p>
        </div>
      </div>
    </div>
  )
}

export default EntryInfo
