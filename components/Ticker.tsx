import Ticker from 'nice-react-ticker'
import { useInView } from 'react-intersection-observer'

interface ServicesTickerProps {
  services: string[]
  speed: number
}

const ServicesTicker: React.FC<ServicesTickerProps> = ({ services, speed }) => {
  const duplicatedServices = [...services, ...services]

  const [ref, inView] = useInView()

  return (
    <div ref={ref} className='bg-black p-6 text-center text-lg'>
      <Ticker slideSpeed={inView ? speed : 999999999} isNewsTicker={true}>
        {duplicatedServices.map((service, index) => (
          <h1
            key={index}
            className='ml-20 mr-2 h-10 w-60 rounded-xl bg-white p-2 font-semibold text-black'
          >
            {service}
          </h1>
        ))}
      </Ticker>
    </div>
  )
}

export default ServicesTicker
