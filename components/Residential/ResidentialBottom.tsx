import { useRouter } from 'next/navigation'
import Button from '../Button'

const ResidentialBottom = () => {
  const router = useRouter()
  return (
    <div className='flex h-full flex-col items-center justify-center text-center'>
      <div className='flex flex-row'>
        <div className='m-10'>
          <h1 className='mb-5 text-center text-lg font-bold text-white lg:text-3xl'>
            View Previous Residential Projects
          </h1>
          <Button
            onClick={() => router.push('/gallery')}
            className='mb-5 bg-violet-300 p-5 text-lg hover:bg-violet-600 hover:text-white'
          >
            Gallery
          </Button>
        </div>
        <div className='m-10'>
          <h1 className='mb-5 text-center text-xl font-bold text-white lg:text-3xl'>
            Hear from Multiple Satisfied Clients
          </h1>
          <Button
            onClick={() => router.push('/testimonials')}
            className='mb-5 bg-blue-300 p-5 text-lg hover:bg-blue-600 hover:text-white'
          >
            Testimonials
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ResidentialBottom
