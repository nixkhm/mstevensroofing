import Image from 'next/image'
import React from 'react'

interface LinkPreviewProps {
  url: string
  img: any
  description: string
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ url, img, description }) => {
  return (
    <div className='flex items-center justify-center bg-gray-300 text-center hover:bg-blue-900 hover:text-white rounded-full mt-10 transition p-2'>
      <Image
        src={img}
        alt='Website preview'
        className='w-1/6 h-2/5 rounded-2xl p-1 lg:block hidden'
      />
      <div className='flex-col ml-10'>
        <h1 className='lg:text-xl text-md font-medium'>{description}</h1>
        <a href={url} target='_blank' className='text-xl underline'>
          Visit Article
        </a>
      </div>
    </div>
  )
}

export default LinkPreview
