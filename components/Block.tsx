import Image from 'next/image'
import { useState } from 'react'

interface BlockProps {
  name: string
  image: any
  resize?: boolean
}

const Block: React.FC<BlockProps> = ({ name, image, resize }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className='group relative flex flex-grow items-center justify-center overflow-hidden rounded-3xl border-8 border-black transition-all'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: '200px', height: '250px' }}
    >
      <div
        className={`absolute h-full w-full bg-gray-700 bg-opacity-60 transition-all ${
          isHovered ? 'block' : 'hidden'
        }`}
      />
      <Image
        src={image}
        alt='Roof Clipart'
        className={`w-full ${resize ? 'p-16' : 'p-8'}`}
      />
      {isHovered && (
        <h1
          className='absolute rounded-full bg-white p-2 text-2xl font-semibold transition-all'
          style={{ transform: 'translateY(0)' }}
        >
          {name}
        </h1>
      )}
    </div>
  )
}

export default Block
