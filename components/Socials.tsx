import { SocialIcon } from 'react-social-icons'

const Socials = () => {
  return (
    <div
      className='top-0
                z-30
                flex
                flex-col
                items-center
                justify-end
                bg-black
                p-1 transition
                lg:sticky
                lg:flex-row
                '
    >
      <div
        className='rounded-full
                    p-2 
                    text-center font-bold 
                    text-white 
                    transition 
                    hover:bg-yellow-400 
                    hover:text-black'
      >
        Office: 631-345-2539
      </div>
      <div
        className='rounded-full 
                    p-2 
                    text-center font-bold 
                    text-white 
                    transition 
                    hover:bg-yellow-400 
                    hover:text-black'
      >
        Cell: 631-662-1862
      </div>

      <div
        className='mb-1 
                    rounded-lg 
                    p-2 text-center 
                    font-bold
                    text-white 
                    transition 
                    hover:bg-yellow-400 
                    hover:text-black'
      >
        mstevensroofing@optonline.net
      </div>
      <div>
        <SocialIcon
          url='https://www.facebook.com/mstevensroofing'
          target='_blank'
          style={{ height: 50, width: 50, padding: 5 }}
          bgColor='transparent'
          className='rounded-full bg-black hover:bg-blue-600 hover:text-white'
        />
        <SocialIcon
          url='https://www.yelp.com/biz/m-stevens-roofing-and-remodeling-southampton-2#reviews'
          target='_blank'
          style={{ height: 50, width: 50, padding: 5 }}
          bgColor='transparent'
          className='rounded-full bg-black hover:bg-red-600 hover:text-white'
        />
        <SocialIcon
          url='https://www.angi.com/companylist/us/ny/medford/m-stevens-roofing-co-inc-reviews-484988.htm#reviews-section'
          target='_blank'
          style={{ height: 50, width: 50, padding: 5, color: '#3b5998' }}
          bgColor='transparent'
          className='social-icon-hover rounded-full bg-black'
        />
      </div>
    </div>
  )
}

export default Socials
