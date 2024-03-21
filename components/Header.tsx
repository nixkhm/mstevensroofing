import Image from 'next/image'

interface HeaderProps {
  img: any
  title: string
  alt: string
  center?: boolean
}

const Header: React.FC<HeaderProps> = ({ img, title, alt, center }) => {
  return (
    <div className='relative'>
      <Image
        src={img}
        alt={alt}
        className='h-60 w-full opacity-50'
        style={{ objectFit: 'cover' }}
      />
      <h1
        className={`absolute p-4 text-4xl font-extrabold text-black lg:text-6xl
          ${
            center
              ? `top-1/2 w-full -translate-y-1/2 transform text-center`
              : 'bottom-0 left-0'
          }`}
      >
        {title}
      </h1>
    </div>
  )
}

export default Header
