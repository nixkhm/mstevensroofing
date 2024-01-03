import Image from 'next/image'
import commercial from '@/public/Home_Images/services_home/commercial.png'
import remodeling from '@/public/Home_Images/services_home/remodeling.png'
import residential from '@/public/Home_Images/services_home/residential.png'
import Button from '../Button'
import { twMerge } from 'tailwind-merge'
import { useRouter } from 'next/navigation'

const ServiceContainer = ({
  title,
  description,
  image,
  alt
}: {
  title: string
  description: string
  image: any
  alt: string
}) => {
  const router = useRouter()

  const handleButtonClick = () => {
    router.push(`/${title.toLowerCase()}`)
  }

  return (
    <div className='group relative mt-10 flex-1 rounded-3xl p-4 text-center lg:mb-0'>
      <h1 className='mb-5 text-4xl font-extrabold'>{title}</h1>
      <div className='relative'>
        <p className='mx-auto mb-5 min-w-[250px] max-w-[450px] rounded-lg bg-gray-300 p-2 text-lg font-medium'>
          {description}
        </p>
        <div className='absolute inset-0 rounded-xl opacity-0 transition duration-300'>
          <div className='flex h-full items-center justify-center'>
            <span className='text-lg font-bold text-white'>{title}</span>
          </div>
        </div>
        <div className='flex justify-center overflow-hidden rounded-xl'>
          <Image
            src={image}
            alt={alt}
            height={100}
            width={400}
            className='rounded-xl transition duration-300'
          />
        </div>
      </div>

      <Button
        className={twMerge(
          'mt-5 border-2 border-solid border-black p-4 text-lg hover:bg-black hover:text-white'
        )}
        onClick={handleButtonClick}
      >
        View {title} Info
      </Button>
    </div>
  )
}

const ServicesHome = () => {
  return (
    <div className='relative flex flex-col justify-center bg-yellow-400 transition lg:flex-row lg:space-x-8'>
      <ServiceContainer
        title='Residential'
        description="Whether you have a leaky roof or you've recently been considering starting fresh with a new one, don't delay any longer! Call us and we will come to your home and give you a free estimate."
        image={residential}
        alt='Residential Service'
      />

      <ServiceContainer
        title='Commercial'
        description='As the leading installer of commercial roofing on Long Island, we service all types of businesses. All work is guaranteed, and we work in a professional and timely manner.'
        image={commercial}
        alt='Commercial Service'
      />

      <ServiceContainer
        title='Remodeling'
        description="If you are thinking about transforming your home, look no further than M. Stevens. We pride ourselves on our quality, professionalism, and speed. Don't delay your dream kitchen any longer, call today!"
        image={remodeling}
        alt='Remodeling Service'
      />
    </div>
  )
}

export default ServicesHome
