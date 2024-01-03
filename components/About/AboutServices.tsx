import aboutServicesHeader from '@/public/About_Images/AboutServicesheader.jpg'
import Header from '../Header'
import ServicesBlock from './ServicesBlock'

const AboutServices = () => {
  return (
    <div>
      <Header img={aboutServicesHeader} alt='abt' title='Services' center />
      <ServicesBlock title={'Roofing'} titleLeft />
      <ServicesBlock title={'Remodeling'} titleRight />
      <ServicesBlock title={'Repairs'} titleLeft />

      <ServicesBlock
        title={'... And much more. Contact us today for a free quote!'}
        titleRight
        showContactButton
      />
    </div>
  )
}

export default AboutServices
