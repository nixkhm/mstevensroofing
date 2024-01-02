import React from 'react'
import { useInView } from 'react-intersection-observer'

import Block from '../Block'
import newRoofing from '@/public/About_Images/new_roofing.png'
import flatRoofing from '@/public/About_Images/flat_roofing.png'
import inspection from '@/public/About_Images/inspection.png'
import maintainance from '@/public/About_Images/maintainance.png'
import leak from '@/public/About_Images/leak.png'
import storm from '@/public/About_Images/storm.png'
import skylight from '@/public/About_Images/skylight.png'
import patio from '@/public/About_Images/patio.png'
import kitchen from '@/public/About_Images/kitchen.png'

interface ServicesBlockProps {
  title: string
  titleLeft?: boolean
  titleRight?: boolean
}

const ServicesBlock: React.FC<ServicesBlockProps> = ({
  title,
  titleLeft,
  titleRight
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false
  })

  return (
    <div className='flex items-center bg-blue-100 p-5'>
      {titleLeft && (
        <div className='flex-none mt-10' style={{ width: '25%' }}>
          <h1 className='text-4xl font-bold text-center hover:scale-125 transition smooth'>
            {title}
          </h1>
        </div>
      )}

      <div
        ref={ref}
        className={`custom-hidden flex flex-row flex-grow gap-4 ${
          inView ? 'custom-showTranstion' : ''
        }`}
      >
        {title === 'Roofing' && (
          <>
            <Block name={'New Roofing'} image={newRoofing} />
            <Block name={'Flat Roofing'} image={flatRoofing} />
            <Block name={'Roofing Inspections'} image={inspection} />
          </>
        )}
        {title === 'Repairs' && (
          <>
            <Block name={'Flashing/Maintainence'} image={maintainance} />
            <Block name={'Leaks'} image={leak} />
            <Block name={'Storm Repair'} image={storm} />
          </>
        )}

        {title === 'Remodeling' && (
          <>
            <Block name={'Kitchen'} image={kitchen} />
            <Block name={'Outdoor/Patio'} image={patio} />
            <Block name={'Skylights'} image={skylight} resize />
          </>
        )}
      </div>
      {titleRight && (
        <div className='flex-none mt-10' style={{ width: '25%' }}>
          <h1 className='text-4xl font-bold text-center hover:scale-125 transition smooth'>
            {title}
          </h1>
        </div>
      )}
    </div>
  )
}

export default ServicesBlock
