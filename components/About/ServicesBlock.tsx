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
import Button from '../Button'
import { twMerge } from 'tailwind-merge'

interface ServicesBlockProps {
  title: string
  titleLeft?: boolean
  titleRight?: boolean
  showContactButton?: boolean
}

const ServicesBlock: React.FC<ServicesBlockProps> = ({
  title,
  titleLeft,
  titleRight,
  showContactButton
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false
  })

  return (
    <div className='flex flex-grow items-center bg-blue-100 p-5'>
      {titleLeft && (
        <div
          ref={ref}
          className={`custom-hidden mt-10 flex-none ${
            inView ? 'custom-showTranstion' : ''
          }`}
          style={{ width: '25%' }}
        >
          <h1 className='smooth text-center text-xl font-bold transition hover:scale-125 lg:text-4xl'>
            {title}
          </h1>
        </div>
      )}

      <div
        ref={ref}
        className={`custom-hidden flex flex-grow flex-row gap-4 ${
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
            <Block name={'Flashing/Maintainence'} image={maintainance} resize />
            <Block name={'Leaks'} image={leak} resize />
            <Block name={'Storm Repair'} image={storm} resize />
          </>
        )}

        {title === 'Remodeling' && (
          <>
            <Block name={'Skylights'} image={skylight} resize />
            <Block name={'Outdoor/Patio'} image={patio} />
            <Block name={'Kitchen'} image={kitchen} resize />
          </>
        )}
      </div>
      {titleRight && (
        <div
          ref={ref}
          className={`custom-hidden mt-10 flex-none ${
            inView ? 'custom-showTranstion' : ''
          }`}
          style={{ width: '25%' }}
        >
          <h1 className='smooth text-center text-xl font-bold transition hover:scale-110 lg:text-4xl'>
            {title}
          </h1>
          {showContactButton && (
            <div className='mt-5 flex flex-col'>
              <Button
                className={twMerge(
                  'mb-10 bg-blue-300 p-5 text-lg hover:bg-blue-600 hover:text-white lg:text-2xl'
                )}
              >
                Contact
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ServicesBlock
