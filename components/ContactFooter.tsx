import phone from '@/public/footer/phone.png'
import waypoint from '@/public/footer/waypoint.png'
import email from '@/public/footer/email.png'

import Image from 'next/image'
import Button from './Button'
import { twMerge } from 'tailwind-merge'

const ContactFooter = () => {
  return (
    <div className='relative bg-yellow-400 text-black'>
      <div className='flex flex-col items-center justify-evenly p-4 text-center lg:flex-row lg:text-left'>
        <div className='relative flex-col'>
          <h1 className='text-2xl font-extrabold lg:mb-2'>Call us now!</h1>
          <div className='mb-5 flex items-center lg:mb-10'>
            <Image
              src={phone}
              alt='phone'
              width={50}
              height={50}
              className='mr-2 hidden opacity-70 transition hover:scale-125 lg:block'
            />
            <div className='ml-4 flex flex-col'>
              <h2 className='text-lg font-semibold'>Office: 631-345-2539</h2>
              <h2 className='text-lg font-semibold'>
                Mobile (SMS): 631-662-1862
              </h2>
            </div>
          </div>
        </div>
        <div className='relative flex-col'>
          <h1 className='text-2xl font-extrabold'>Our Locations</h1>
          <div className='mb-5 flex items-center lg:mb-10'>
            <Image
              src={waypoint}
              alt='phone'
              width={50}
              height={80}
              className='hidden opacity-70 transition hover:scale-125 lg:block'
            />
            <div className='flex flex-row text-center'>
              <h2 className='p-2 text-lg font-semibold'>
                29 Lincoln Rd
                <br />
                Medford, NY 11763
              </h2>
              <h2 className='p-2 text-lg font-semibold'>
                53 Hill St
                <br />
                Southampton, NY 11968
              </h2>
            </div>
          </div>
        </div>
        <div className='relative flex-col'>
          <h1 className='mb-2 text-2xl font-extrabold'>Send a Message</h1>
          <div className='flex items-center'>
            <Image
              src={email}
              alt='phone'
              width={79}
              height={80}
              className='mb-10 mr-2 hidden opacity-70 transition hover:scale-125 lg:block'
            />
            <div className='flex flex-col'>
              <h2 className='text-lg font-semibold'>
                mstevensroofing@optonline.net
              </h2>
              <div className='flex items-center justify-center'>
                <Button
                  className={twMerge('mt-2 border-4 border-black p-2 text-lg')}
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
