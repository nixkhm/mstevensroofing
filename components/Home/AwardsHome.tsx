import AwardsCarousel from './AwardsCarousel'

const AwardsHome = () => {
  return (
    <div className='relative'>
      <div className='flex flex-col items-center bg-blue-400 py-8 text-center'>
        <h1 className='mb-8 pt-10 text-4xl font-extrabold lg:text-5xl xl:text-6xl'>
          Awards
        </h1>
        <div className='max-w-[475px] lg:max-w-[1000px]'>
          <h2 className='ml-10 mr-9 text-xl font-semibold lg:text-2xl'>
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
