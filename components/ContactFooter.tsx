import phone from '@/public/footer/phone.png'
import waypoint from '@/public/footer/waypoint.png'
import email from '@/public/footer/email.png'

import Image from 'next/image'

const ContactFooter = () => {
  return (
    <div className='bg-yellow-400 text-black relative'>
      <div className='flex lg:flex-row flex-col justify-evenly items-center text-center p-4'>
        <div className='flex-col relative'>
          <h1 className='text-2xl font-extrabold'>Call us now!</h1>
          <div className='flex items-center mb-10'>
            <Image
              src={phone}
              alt='phone'
              width={50}
              height={50}
              className='opacity-70 lg:block hidden mr-2'
            />
            <div className='flex flex-col ml-4'>
              <h2 className='text-lg font-semibold'>Office: 631-345-2539</h2>
              <h2 className='text-lg font-semibold'>Mobile: 631-662-1862</h2>
            </div>
          </div>
        </div>
        <div className='flex-col relative'>
          <h1 className='text-2xl font-extrabold'>Our Locations</h1>
          <div className='flex items-center mb-10'>
            <Image
              src={waypoint}
              alt='phone'
              width={50}
              height={80}
              className='opacity-70 lg:block hidden mr-2'
            />
            <div className='flex flex-col ml-4'>
              <h2 className='text-lg font-semibold'>
                29 Lincoln Rd, Medford, NY 11763
              </h2>
              <h2 className='text-lg font-semibold'>
                53 Hill St, Southampton, NY 11968
              </h2>
            </div>
          </div>
        </div>
        <div className='flex-col relative'>
          <h1 className='text-2xl font-extrabold'>Send a Message</h1>
          <div className='flex items-center mb-10'>
            <Image
              src={email}
              alt='phone'
              width={100}
              height={50}
              className='opacity-70 lg:block hidden mr-2'
            />
            <div className='flex flex-col ml-4'>
              <h2 className='text-lg font-semibold'>
                mstevensroofing@optonline.net
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFooter
