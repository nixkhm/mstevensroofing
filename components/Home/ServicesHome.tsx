import Image from 'next/image'
import commercial from '../../public/services_home/commercial.png'
import remodeling from '../../public/services_home/remodeling.png'
import residential from '../../public/services_home/residential.png'
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
    <div className='relative flex-1 text-center lg:mb-0 mt-10 p-4 rounded-3xl group'>
      <h1 className='text-4xl font-extrabold mb-5'>{title}</h1>
      <div className='relative'>
        <p className='text-lg max-w-[450px] min-w-[250px] bg-gray-300 p-2 rounded-lg font-medium mb-5 mx-auto'>
          {description}
        </p>
        <div className='absolute inset-0 rounded-xl transition duration-300 opacity-0'>
          <div className='flex items-center justify-center h-full'>
            <span className='text-white text-lg font-bold'>{title}</span>
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
          'p-4 mt-5 text-lg hover:bg-black hover:text-white border-solid border-black border-2'
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
    <div className='flex flex-col lg:flex-row justify-center lg:space-x-8 bg-yellow-400 relative transition'>
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
