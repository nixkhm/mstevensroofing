import Image from 'next/image'
import logowht from '@/public/logo/logowht.png'
import { SocialIcon } from 'react-social-icons'
import ContactFooter from './ContactFooter'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <ContactFooter />
      <div className='flex bg-black text-white text-xl items-center justify-center text-center p-8'>
        {/* Left Section: Logo and Social Links */}
        <div className='flex flex-row mr-16'>
          <div className='items-center justify-center align-center'>
            <Image
              src={logowht}
              alt='Logo'
              className='hover:scale-110 transition'
            />
            <div className='flex flex-row mt-4 ml-15'>
              <SocialIcon
                url='https://www.facebook.com/mstevensroofing'
                target='_blank'
                style={{
                  height: 50,
                  width: 50,
                  padding: '5px',
                  marginRight: '10px'
                }}
                bgColor='transparent'
                className='bg-blue-600 hover:text-white rounded-full hover:bg-gray-700'
              />
              <SocialIcon
                url='https://www.yelp.com/biz/m-stevens-roofing-and-remodeling-southampton-2#reviews'
                target='_blank'
                style={{
                  height: 50,
                  width: 50,
                  padding: '5px',
                  marginRight: '10px'
                }}
                bgColor='transparent'
                className='bg-red-600 hover:text-white rounded-full hover:bg-gray-700'
              />
              <SocialIcon
                url='https://www.angi.com/companylist/us/ny/medford/m-stevens-roofing-co-inc-reviews-484988.htm#reviews-section'
                target='_blank'
                style={{
                  height: 50,
                  width: 50,
                  padding: '5px',
                  marginRight: '10px',
                  color: '#3b5998'
                }}
                bgColor='transparent'
                className='social-icon-footer bg-black rounded-full hover:bg-gray-700'
              />
            </div>
          </div>
        </div>

        {/* Right Section: Contact Info and Licensing Numbers */}
        <div>
          {/* Licensing Numbers */}
          <div className='bg-white text-black rounded-3xl p-5 font-semibold'>
            <p className='lg:text-xl text-lg'>
              We are fully licensed and insured. Here are our license numbers:
            </p>
            <div className='lg:text-lg text-md'>
              <p>Suffolk: #22.857-HI</p>
              <p>East Hampton: #9504</p>
              <p>Southampton: #L005531</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className='bg-black text-white text-center p-10 text-sm'>
        © {currentYear} M. Steven Roofing & Remodeling - All Rights Reserved
        <br />
        <a
          className='underline mt-10 hover:cursor-pointer'
          href='https://nick-masters.vercel.app/'
          target='_blank'
        >
          Developed by Nicholas Masters
        </a>
      </h2>
    </>
  )
}

export default Footer
