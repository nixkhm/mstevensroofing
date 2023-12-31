import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Parallax, Pagination, Navigation } from 'swiper/modules'

import aboutServicesHeader from '@/public/About_Images/AboutServicesheader.jpg'
import Image from 'next/image'
import Header from '../Header'

const AboutServices = () => {
  return (
    <div>
      {/* Center this */}
      <Header img={aboutServicesHeader} alt='abt' title='Services' />
    </div>
  )
}

export default AboutServices
