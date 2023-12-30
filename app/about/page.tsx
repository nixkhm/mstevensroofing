import AboutInfo from '@/components/About/AboutInfo'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import aboutHeader from '@/public/About_Images/aboutHeader.jpg'

export default function About() {
  return (
    <div className='w-full h-full'>
      <Header img={aboutHeader} title='About Us' alt='About Header' />
      <AboutInfo />
      <Footer />
    </div>
  )
}
