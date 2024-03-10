import { useRouter } from 'next/navigation'
import Button from './Button'

interface GalleryTestimonialProps {
  textColor: string
}

const GalleryTestimonial: React.FC<GalleryTestimonialProps> = ({
  textColor
}) => {
  const router = useRouter()
  return (
    <div className='flex h-full flex-col items-center justify-center text-center'>
      <div className='flex flex-row'>
        <div className='m-10'>
          <h1
            className={`text-md mb-5 text-center font-bold text-${textColor} lg:text-3xl`}
          >
            Browse Our Past Client Work
          </h1>
          <Button
            onClick={() => router.push('/gallery')}
            className='mb-5 bg-violet-300 p-5 text-lg hover:bg-violet-600 hover:text-white'
          >
            Gallery
          </Button>
        </div>
        <div className='m-10'>
          <h1
            className={`text-md mb-5 text-center font-bold text-${textColor} lg:text-3xl`}
          >
            Hear from Multiple Satisfied Clients
          </h1>
          <Button
            onClick={() => router.push('/#testimonials')}
            className='mb-5 bg-blue-300 p-5 text-lg hover:bg-blue-600 hover:text-white'
          >
            Testimonials
          </Button>
        </div>
      </div>
    </div>
  )
}

export default GalleryTestimonial
