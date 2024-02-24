import BluePrint from '@/public/Commercial_Images/blueprint.jpeg'
import TextBubble from '../TextBubble'

const CommercialIntro = () => {
  return (
    <div
      className='relative h-full w-full bg-cover bg-center'
      style={{ backgroundImage: `url(${BluePrint.src})` }}
    >
      <div className='relative left-1/2 top-[15%] w-[50%] -translate-x-1/2 -translate-y-1/2 transform rounded-3xl bg-black bg-opacity-75 p-4 text-white'>
        <h1 className='text-center text-4xl font-bold'>
          Quality Construction Built to Last
        </h1>
      </div>
      <div className='relative top-[10%] transform lg:absolute lg:left-1/2 lg:top-[25%] lg:-translate-x-1/2'>
        <div className='mx-auto w-3/4'>
          <TextBubble
            className='text-md text-center font-semibold'
            text='As a trusted leader in the industry, we bring your visions to life with quality craftsmanship and a commitment to lasting structures. From groundbreaking to completion, our dedicated team ensures precision, reliability, and a seamless construction experience'
          />
        </div>
      </div>
      <div className='relative top-[20%] flex items-center justify-center text-center text-sm lg:top-[40%] lg:text-lg'>
        <div className='smooth duration-400 m-2 grid w-3/4 gap-5 transition-transform lg:w-[50%] lg:grid-cols-2 lg:hover:scale-110'>
          <TextBubble
            infoCard
            text='Our commitment to quality craftsmanship ensures that your commercial project is built to withstand the test of time.'
            className='bg-blue-300 '
          />
          <TextBubble
            infoCard
            text='Innovative design, meticulous planning, and expert execution — the pillars of our commercial construction approach.'
            className='bg-blue-300 '
          />
        </div>
      </div>
    </div>
  )
}

export default CommercialIntro
