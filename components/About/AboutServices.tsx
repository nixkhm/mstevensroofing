import aboutServicesHeader from '@/public/About_Images/AboutServicesheader.jpg'
import Header from '../Header'
import ServicesBlock from './ServicesBlock'

const AboutServices = () => {
  return (
    <div>
      <Header img={aboutServicesHeader} alt='abt' title='Services' center />
      <ServicesBlock title={'Roofing'} titleLeft />
      <ServicesBlock title={'Repairs'} titleRight />
      <ServicesBlock title={'Remodeling'} titleLeft />
    </div>
  )
}

export default AboutServices
