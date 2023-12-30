import { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import Button from '../Button'

const TestimonialHome = () => {
  useEffect(() => {
    const script1 = document.createElement('script')
    script1.src = 'https://static.elfsight.com/platform/platform.js'
    script1.defer = true
    script1.setAttribute('data-use-service-core', '')
    document.body.appendChild(script1)

    const script2 = document.createElement('script')
    script2.src = 'https://static.elfsight.com/platform/platform.js'
    script2.defer = true
    script2.setAttribute('data-use-service-core', '')
    document.body.appendChild(script2)

    const script3 = document.createElement('script')
    script3.src = 'https://static.elfsight.com/platform/platform.js'
    script3.defer = true
    script3.setAttribute('data-use-service-core', '')
    document.body.appendChild(script3)

    return () => {
      document.body.removeChild(script1)
      document.body.removeChild(script2)
      document.body.removeChild(script3)
    }
  }, [])

  return (
    <div className='flex flex-row bg-gray-300'>
      {/* Left column for heading */}
      <div className='flex-1 flex-col items-center justify-center text-center mt-10'>
        <h1 className='text-4xl font-extrabold'>Testimonials</h1>
        <p className='mt-8 text-2xl font-semibold'>
          Here&apos;s what our clients have to say about us!
        </p>
        <div
          className='elfsight-app-3bcb31fb-78b4-47aa-91a8-5e66fcc4baea mt-10'
          data-elfsight-app-lazy
        ></div>
        <Button
          className={twMerge(
            'mt-8 p-5 hover:bg-blue-600 text-white bg-blue-900 hover:text-black'
          )}
        >
          View More Testimonials
        </Button>
      </div>

      {/* Right column for testimonials */}
      <div className='flex-1 mt-10 lg:mr-10 mr-0'>
        <div
          className='elfsight-app-24fdbb8b-4f98-4214-a6fa-13985523adbb'
          data-elfsight-app-lazy
        ></div>
        <div
          className='elfsight-app-8a48b6de-1a72-45a6-ab67-9ba1989ce356'
          data-elfsight-app-lazy
        ></div>
      </div>
    </div>
  )
}

export default TestimonialHome
