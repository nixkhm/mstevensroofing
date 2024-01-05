import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Autoplay, Navigation } from 'swiper/modules'
import Image from 'next/image'
import bbb from '@/public/Home_Images/awards_home/bbb.jpeg'
import dbotb from '@/public/Home_Images/awards_home/dbotb.png'
import angi from '@/public/Home_Images/awards_home/angi.png'

const AwardsContainer = ({
  title,
  description,
  image,
  alt,
  link
}: {
  title: string
  description: string
  image: any
  alt: string
  link: string
}) => {
  return (
    <div className='group relative z-40 flex-1 rounded-3xl p-4 text-center lg:mb-0'>
      <div className='flex justify-center overflow-hidden rounded-xl'>
        <Image
          src={image}
          alt={alt}
          height={300}
          width={300}
          className='rounded-xl transition duration-300'
        />
      </div>
      <div className='mx-auto mt-10 max-w-[600px] cursor-pointer rounded-full p-2 transition hover:text-white lg:bg-white lg:hover:bg-black'>
        <h1
          className=' text-2xl font-bold text-blue-800 hover:text-white'
          onClick={() => {
            window.open(link, '_blank')
          }}
        >
          {title}
        </h1>
      </div>

      <div className='relative hidden lg:block'>
        <p className='mx-auto mb-5 mt-5 min-w-[250px] max-w-[450px] rounded-lg p-2 text-xl font-medium'>
          {description}
        </p>
        <div className='absolute inset-0 rounded-xl opacity-0 transition duration-300'>
          <div className='flex h-full items-center justify-center'>
            <span className='text-lg font-bold text-white'>{title}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const AwardsCarousel = () => {
  return (
    <div className='flex h-full items-center justify-center'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        navigation={true}
        modules={[Pagination, Autoplay, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <AwardsContainer
            title="Dan's Best of the Best Since 2011 - Platinum Award"
            description="We have received the Platinum Award from Dan's Best of the Best for several years running. The Platinum award recognizes M. Stevens Roofing as the best roofing company on Long Island. This is the top award given in the Roofing category, and we are the only company to have received it in the past decade and beyond: 2011-2023."
            image={dbotb}
            alt="Dan's Best of the Best Award"
            link='https://dansbotb.com/'
          />
        </SwiperSlide>
        <SwiperSlide className='flex- flex items-center justify-center'>
          <AwardsContainer
            title='Better Business Bureau Grade A+'
            description="M. Stevens Roofing has received a grade of A+ from the Better Business Bureau. This grade recognizes that we have had ZERO complaints filed against us. We've achieved this A+ rating by making sure our customers are always happy!"
            image={bbb}
            alt='Better Business Bureau Award'
            link='https://www.bbb.org/us/ny/medford/profile/roofing-contractors/m-stevens-roofing-co-inc-0121-23931/'
          />
        </SwiperSlide>
        <SwiperSlide>
          <AwardsContainer
            title="Angie's List Super Service Award"
            description="Angie's List has given us the Super Service Award multiple years running. This award is given to businesses who maintain a superior service record each year. Of the thousands of businesses monitored by Angie's List, only the top 5% qualify for a Super Service Award."
            image={angi}
            alt="Angi's List Super Service Award"
            link='https://www.angi.com/companylist/us/ny/medford/m-stevens-roofing-co-inc-reviews-484988.htm'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default AwardsCarousel
