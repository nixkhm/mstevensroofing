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
          className={`flex-none mt-10 custom-hidden ${
            inView ? 'custom-showTranstion' : ''
          }`}
          style={{ width: '25%' }}
        >
          <h1 className='lg:text-4xl text-xl font-bold text-center hover:scale-125 transition smooth'>
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
          className={`flex-none mt-10 custom-hidden ${
            inView ? 'custom-showTranstion' : ''
          }`}
          style={{ width: '25%' }}
        >
          <h1 className='lg:text-4xl text-xl font-bold text-center hover:scale-110 transition smooth'>
            {title}
          </h1>
          {showContactButton && (
            <div className='flex flex-col mt-5'>
              <Button
                className={twMerge(
                  'p-5 mb-10 lg:text-2xl text-lg bg-blue-300 hover:bg-blue-600 hover:text-white'
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
