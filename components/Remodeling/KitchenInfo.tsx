import React from 'react'
import Kitchen3DModel from './Kitchen3DModel'

const KitchenInfo = () => {
  return (
    <div
      className='w-full bg-gray-600 p-10'
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem'
      }}
    >
      <div className='model-container rounded-3xl bg-gray-800'>
        <Kitchen3DModel />
      </div>
      <div
        className='text-center text-lg'
        style={{
          width: '75%',
          margin: '0 auto'
        }}
      >
        <h1 className='text-2xl font-bold'>
          Embark on a Journey to Culinary Splendor!
        </h1>
        <p className='mt-5 text-sm font-normal lg:text-xl'>
          Our kitchen remodeling services redefine excellence, turning your
          dreams into a masterpiece. Experience the pinnacle of satisfaction
          with our skilled craftsmen, dedicated to transforming spaces and
          creating lasting impressions. Elevate your home with precision,
          passion, and unparalleled expertise, where every detail reflects your
          unique style. Discover a culinary haven that&apos;s more than just a
          kitchen;
          <br /> it&apos;s an embodiment of your aspirations.
        </p>
      </div>
    </div>
  )
}

export default KitchenInfo
