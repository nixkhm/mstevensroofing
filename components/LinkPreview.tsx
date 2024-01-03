import Image from 'next/image'
import React from 'react'

interface LinkPreviewProps {
  url: string
  img: any
  description: string
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ url, img, description }) => {
  return (
    <div
      className='mt-5 flex items-center justify-center rounded-full bg-gray-300 p-2 text-center transition-shadow hover:cursor-pointer'
      onClick={() => window.open(url, '_blank')}
    >
      <Image
        src={img}
        alt='Website preview'
        className='hidden h-2/5 w-1/6 rounded-2xl p-1 lg:block'
      />
      <div className='flex-col rounded-full p-10 hover:bg-blue-900 hover:text-white lg:ml-10'>
        <h1 className='mb-3 text-lg font-medium lg:text-xl'>{description}</h1>
        <a
          href={url}
          target='_blank'
          className='rounded-full p-2 text-xl underline hover:bg-black'
        >
          Visit Article
        </a>
      </div>
    </div>
  )
}

export default LinkPreview
