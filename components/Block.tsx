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
      className='flex flex-grow border-black border-8 rounded-3xl group relative items-center justify-center overflow-hidden transition-all'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ width: '200px', height: '250px' }}
    >
      <div
        className={`w-full h-full absolute bg-gray-700 bg-opacity-60 transition-all ${
          isHovered ? 'block' : 'hidden'
        }`}
      />
      <Image
        src={image}
        alt='Roof Clipart'
        className={`w-full ${resize ? 'p-10' : 'p-2'}`}
      />
      {isHovered && (
        <h1
          className='absolute text-2xl bg-white p-2 rounded-full font-semibold transition-all'
          style={{ transform: 'translateY(0)' }}
        >
          {name}
        </h1>
      )}
    </div>
  )
}

export default Block
