import Image from 'next/image'
import aboutInfo1 from '@/public/About_Images/AboutInfo1.jpg'
import aboutInfo2 from '@/public/About_Images/AboutInfo2.jpg'
import aboutInfo3 from '@/public/About_Images/AboutInfo3.jpeg'

const AboutInfo = () => {
  return (
    <div className='flex flex-col bg-blue-100'>
      {/* Left Layout */}
      <div className='flex items-center transition-transform ease-in-out transform hover:translate-x-2 hover:opacity-80'>
        <div className='w-full'>
          <Image src={aboutInfo1} alt='About info' objectFit='cover' />
        </div>
        <div className='w-full'>
          <div className='text-center transition ease-in-out lg:hover:scale-125'>
            <h1 className='lg:text-3xl text-lg font-bold'>
              M. Stevens Roofing
              <br />
              Specialist & Remodeling Co.
            </h1>
          </div>
          <p className='text-md font-medium mx-auto text-center p-3'>
            M. Stevens Roofing is a family-owned and operated business, with
            offices in South Hampton and Medford. We are fully licensed and
            insured, and we strive to provide the best roofing service and
            quality available on Long Island.
          </p>
        </div>
      </div>

      {/* Right Layout */}
      <div className='flex items-center transition-transform ease-in-out transform hover:translate-x-2 hover:opacity-80'>
        <div className='w-full transition ease-in-out'>
          <div className='text-center transition ease-in-out lg:hover:scale-125'>
            <h1 className='lg:text-3xl text-lg font-bold'>
              Quality, Passion, and Respect
            </h1>
          </div>
          <p className='text-md font-medium mx-auto text-center p-3'>
            At M. Stevens Roofing, we consider good value as exceptional quality
            at a fair price with a written guarantee. We believe that our high
            ethical standards will be an example in the roofing industry and
            that they will resonate with thousands of customers.
          </p>
        </div>
        <div className='w-full flex justify-end'>
          <Image src={aboutInfo2} alt='About info' objectFit='cover' />
        </div>
      </div>

      {/* Left Layout */}
      <div className='flex items-center transition-transform ease-in-out transform hover:translate-x-2 hover:opacity-80'>
        <div className='w-full'>
          <Image src={aboutInfo3} alt='About info' objectFit='cover' />
        </div>
        <div className='w-full transition ease-in-out'>
          <div className='text-center transition ease-in-out lg:hover:scale-125'>
            <h1 className='lg:text-3xl text-lg font-bold'>
              Servicing Long Island <br /> for Over Three Decades
            </h1>
          </div>
          <p className='text-md font-medium mx-auto text-center p-3'>
            We have received a number of awards for quality and service,
            including the Super Service Award from Angie&apos;s list, and
            Dan&apos;s Best of the Best Platinum Award for exceptional work in
            Roofing on Long Island. We have also received an A+ grade from the
            Better Business Bureau. Rest assured that with M. Stevens Roofing,
            you are getting the very best.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo
