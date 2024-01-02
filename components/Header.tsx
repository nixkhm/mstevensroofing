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
      <Image src={img} alt={alt} className='w-full opacity-50' />
      <h1
        className={`text-black lg:text-6xl text-4xl p-4 font-extrabold absolute
          ${
            center
              ? `text-center w-full top-1/2 transform -translate-y-1/2`
              : 'bottom-0 left-0'
          }`}
      >
        {title}
      </h1>
    </div>
  )
}

export default Header
