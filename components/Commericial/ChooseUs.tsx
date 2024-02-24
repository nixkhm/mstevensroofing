import CommercialBlock from './CommercialBlock'
import group from '@/public/Commercial_Images/group.png'
import shield from '@/public/Commercial_Images/shield.png'
import light from '@/public/Commercial_Images/light-bulb.png'
import GalleryTestimonial from '../GalleryTestimonial'

const ChooseUs = () => {
  return (
    <div className='flex-col bg-sky-100 text-center lg:flex-row'>
      <h1 className='pt-10 text-5xl font-extrabold'>Why Choose Us</h1>
      <div className='mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:grid-rows-1'>
        <CommercialBlock
          image={light}
          title='Professional'
          copy='M. Stevens Roofing is reliable, we give free estimates and guarantee all work will be completed, in a professional and timely manner.'
        />
        <CommercialBlock
          image={group}
          title='Trusted'
          copy='M. Stevens Roofing has been in business for more than 25 years, serving commercial and residential clients.'
        />
        <CommercialBlock
          image={shield}
          title='Experts'
          copy='We have received a number of awards for quality and service. Rest assured that with M. Stevens Roofing, you are getting the very best.'
        />
      </div>
      <GalleryTestimonial textColor='black' />
    </div>
  )
}

export default ChooseUs
