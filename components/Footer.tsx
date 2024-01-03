import Image from 'next/image'
import logowht from '@/public/logo/logowht.png'
import { SocialIcon } from 'react-social-icons'
import ContactFooter from './ContactFooter'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <ContactFooter />
      <div className='flex items-center justify-center bg-black p-8 text-center text-xl text-white'>
        {/* Left Section: Logo and Social Links */}
        <div className='mr-14 flex flex-row items-center'>
          <div className='align-center items-center justify-center'>
            <Image
              src={logowht}
              alt='Logo'
              className='transition hover:scale-110'
            />
            <div className='ml-16 mt-4 flex flex-row items-center'>
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
                className='rounded-full bg-blue-600 hover:bg-gray-700 hover:text-white'
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
                className='rounded-full bg-red-600 hover:bg-gray-700 hover:text-white'
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
                className='rounded-full bg-green-700 hover:bg-gray-700 hover:text-white'
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
                className='social-icon-footer rounded-full bg-black hover:bg-gray-700'
              />
            </div>
          </div>
        </div>

        {/* Right Section: Contact Info and Licensing Numbers */}
        <div className='hidden lg:block'>
          {/* Licensing Numbers */}
          <div className='rounded-3xl bg-white p-5 font-semibold text-black'>
            <p className='text-lg lg:text-xl'>
              We are fully licensed and insured. Here are our license numbers:
            </p>
            <div className='text-md lg:text-lg'>
              <p>Suffolk: #22.857-HI</p>
              <p>East Hampton: #9504</p>
              <p>Southampton: #L005531</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className='bg-black p-10 text-center text-sm text-white'>
        © {currentYear} M. Steven Roofing & Remodeling - All Rights Reserved
        <br />
        <a
          className='mt-10 underline hover:cursor-pointer'
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
