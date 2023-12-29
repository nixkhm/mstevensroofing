import AwardsCarousel from './AwardsCarousel'

const AwardsHome = () => {
  return (
    <div className='relative'>
      <div className='flex flex-col items-center text-center bg-blue-400 py-8'>
        <h1 className='text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-8'>
          Awards
        </h1>
        <div className='max-w-[800px]'>
          <h2 className='text-xl font-semibold min-w-[10px]'>
            At M. Stevens Roofing, we take pride in our commitment to delivering
            exceptional service, and our efforts have been recognized by
            reputable organizations and publishers. Here&apos;s a glimpse of our
            accolades:
          </h2>
          <div className='mt-10'>
            <AwardsCarousel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AwardsHome
