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
        <div className='flex flex-row items-center mr-14'>
          <div className='items-center justify-center align-center'>
            <Image
              src={logowht}
              alt='Logo'
              className='hover:scale-110 transition'
            />
            <div className='flex flex-row mt-4 ml-16 items-center'>
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
                url='https://www.google.com/localservices/prolist?g2lbs=ANTchaMqfWXLztNu0KIPi0dJ4uE9AbVh0p28AwdUL_Eqb4mRfTyhynNkYYlEiPlxYKjdmPLpJFSBFinFL_letbz_XgFV72TvBP8b_oCw2PkMRSLrPJHhhNg%3D&hl=en-US&gl=us&ssta=1&q=m%20stevens%20roofing&oq=m%20stevens%20roofing&slp=MgA6HENoTUluZTI4bEtpNGd3TVZOcGVEQngycDFBVFhSAggCYAB6-AFDaEZ0SUhOMFpYWmxibk1nY205dlptbHVaMGlUdXFqVDVZQ0FnQWhhSHhBQUVBRVFBaGdBR0FFWUFpSVJiU0J6ZEdWMlpXNXpJSEp2YjJacGJtZDZEbE4xWm1admJHc2dRMjkxYm5SNWtnRVNjbTl2Wm1sdVoxOWpiMjUwY21GamRHOXlxZ0ZSRUFFcUZTSVJiU0J6ZEdWMlpXNXpJSEp2YjJacGJtY29BRElmRUFFaUczR25Xb1lGRnJKYWFxUTNQdDExd0F1cTljVGlDV2VjVG9OUWJESVZFQUlpRVcwZ2MzUmxkbVZ1Y3lCeWIyOW1hVzVuNEFFQZIBIgoNL2cvMTFqbXozbmRqYgoLL2cvMXRmNm43OG0SBAoCCAE%3D&src=2&spp=CgsvZy8xdGY2bjc4bTq8AVdoOFFBQkFCRUFJWUFCZ0JHQUlpRVcwZ2MzUmxkbVZ1Y3lCeWIyOW1hVzVua2dFU2NtOXZabWx1WjE5amIyNTBjbUZqZEc5eW1nRUFxZ0ZSRUFFcUZTSVJiU0J6ZEdWMlpXNXpJSEp2YjJacGJtY29BRElmRUFFaUczR25Xb1lGRnJKYWFxUTNQdDExd0F1cTljVGlDV2VjVG9OUWJESVZFQUlpRVcwZ2MzUmxkbVZ1Y3lCeWIyOW1hVzVu&serdesk=1&lrlstt=1703978932309&ved=2ahUKEwjVs6-UqLiDAxXhGFkFHR80C-0QvS56BAgWEAE&scp=ChdnY2lkOnJvb2ZpbmdfY29udHJhY3RvchI-EhIJ1_mbyICu4IkRU18dDUkMxJUiEFdlc3QgQmFieWxvbiwgTlkqFA1QWj0YFXSGQNQdYrBIGCUP70rUMAEaEW0gc3RldmVucyByb29maW5nIhFtIHN0ZXZlbnMgcm9vZmluZyoSUm9vZmluZyBjb250cmFjdG9y#ts=3'
                target='_blank'
                style={{
                  height: 50,
                  width: 50,
                  padding: '5px',
                  marginRight: '10px'
                }}
                bgColor='transparent'
                className='bg-green-700 hover:text-white rounded-full hover:bg-gray-700'
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
        <div className='lg:block hidden'>
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
