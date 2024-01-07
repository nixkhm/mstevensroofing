import React from 'react'
import Kitchen3DModel from './Kitchen3DModel'
import Kitchen2_3DModel from './Kitchen2_3DModel'

const KitchenInfo = () => {
  return (
    <div className='w-full bg-gray-600 p-10 text-center'>
      <div className='lg:grid lg:grid-cols-2 lg:gap-6'>
        <div className='model-container mb-6 rounded-3xl bg-gray-800 p-6'>
          <Kitchen3DModel />
        </div>

        <div className='model-container mb-6 hidden rounded-3xl bg-gray-800 p-6 lg:block'>
          <Kitchen2_3DModel />
        </div>

        <div className='col-span-2'>
          <h1 className='mb-3 text-2xl font-bold'>
            Embark on a Journey to Culinary Splendor!
          </h1>
          <p className='mx-auto text-sm font-normal lg:w-3/4 lg:text-xl'>
            Our kitchen remodeling services redefine excellence, turning your
            dreams into a masterpiece. Experience the pinnacle of satisfaction
            with our skilled craftsmen, dedicated to transforming spaces and
            creating lasting impressions. Elevate your home with precision,
            passion, and unparalleled expertise, where every detail reflects
            your unique style. Discover a culinary haven that&apos;s more than
            just a kitchen; it&apos;s an embodiment of your aspirations.
          </p>
        </div>
      </div>
    </div>
  )
}

export default KitchenInfo
