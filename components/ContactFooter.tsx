import phone from '@/public/footer/phone.png'
import waypoint from '@/public/footer/waypoint.png'
import email from '@/public/footer/email.png'

import Image from 'next/image'
import Button from './Button'
import { twMerge } from 'tailwind-merge'

const ContactFooter = () => {
  return (
    <div className='bg-yellow-400 text-black relative'>
      <div className='flex lg:flex-row flex-col justify-evenly lg:text-left text-center items-center p-4'>
        <div className='flex-col relative'>
          <h1 className='text-2xl font-extrabold lg:mb-2'>Call us now!</h1>
          <div className='flex items-center lg:mb-10 mb-5'>
            <Image
              src={phone}
              alt='phone'
              width={50}
              height={50}
              className='opacity-70 lg:block hidden mr-2 hover:scale-125 transition'
            />
            <div className='flex flex-col ml-4'>
              <h2 className='text-lg font-semibold'>Office: 631-345-2539</h2>
              <h2 className='text-lg font-semibold'>
                Mobile (SMS): 631-662-1862
              </h2>
            </div>
          </div>
        </div>
        <div className='flex-col relative'>
          <h1 className='text-2xl font-extrabold'>Our Locations</h1>
          <div className='flex items-center lg:mb-10 mb-5'>
            <Image
              src={waypoint}
              alt='phone'
              width={50}
              height={80}
              className='opacity-70 lg:block hidden hover:scale-125 transition'
            />
            <div className='flex flex-row text-center'>
              <h2 className='text-lg font-semibold p-2'>
                29 Lincoln Rd
                <br />
                Medford, NY 11763
              </h2>
              <h2 className='text-lg font-semibold p-2'>
                53 Hill St
                <br />
                Southampton, NY 11968
              </h2>
            </div>
          </div>
        </div>
        <div className='flex-col relative'>
          <h1 className='text-2xl font-extrabold mb-2'>Send a Message</h1>
          <div className='flex items-center'>
            <Image
              src={email}
              alt='phone'
              width={79}
              height={80}
              className='opacity-70 lg:block hidden mr-2 mb-10 hover:scale-125 transition'
            />
            <div className='flex flex-col'>
              <h2 className='text-lg font-semibold'>
                mstevensroofing@optonline.net
              </h2>
              <div className='flex items-center justify-center'>
                <Button
                  className={twMerge('p-2 mt-2 border-black border-4 text-lg')}
                >
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFooter
