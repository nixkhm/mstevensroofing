import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cards'
import { EffectCards, Autoplay } from 'swiper/modules'
import Image from 'next/image'
import TextBubble from '../TextBubble'

import card1 from '@/public/Residential_Images/card1.png'
import card2 from '@/public/Residential_Images/card2.jpeg'
import card3 from '@/public/Residential_Images/card3.jpeg'

const ResidentialCommitment = () => {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='z-30 mt-20 rounded-xl bg-white p-2 text-center text-5xl font-extrabold text-yellow-600'>
        Our Commitment
      </h1>
      <div className='relative mx-auto mb-10 mt-10 w-full max-w-screen-lg'>
        <div className='mb-5 w-full p-5 text-center lg:p-0 lg:text-xl'>
          <TextBubble text='We take pride in our unwavering commitment to excellence. From the initial consultation to the final nail, our team strives for perfection in every aspect of the construction process. Our experienced craftsmen and project managers work seamlessly to ensure that each project is executed with precision and care, meeting and exceeding the highest industry standards.' />
        </div>

        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          className='w-1/2 bg-transparent transition duration-75 ease-in-out hover:scale-105'
        >
          <SwiperSlide>
            <Image src={card1} alt='roofing card' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={card2} alt='roofing card' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={card3} alt='house card' />
          </SwiperSlide>
        </Swiper>

        <div className='mt-5 grid w-full gap-10 p-2 lg:grid-cols-2 lg:text-lg'>
          <TextBubble
            infoCard
            text='Proven Expertise: With decades of experience in the industry, we bring a wealth of knowledge and expertise to every project.'
          />
          <TextBubble
            infoCard
            text='Quality Craftsmanship: Our skilled craftsmen are dedicated to delivering top-notch quality in every detail, ensuring lasting beauty and functionality.'
          />
          <TextBubble
            infoCard
            text='Timely Delivery: We understand the importance of your time. Our efficient project management ensures timely completion without compromising on quality.'
          />
          <TextBubble
            infoCard
            text='Transparent Communication: Stay informed at every step. We believe in open and honest communication to build trust and confidence throughout the construction process.'
          />
        </div>
      </div>
    </div>
  )
}

export default ResidentialCommitment
