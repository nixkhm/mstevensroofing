import Image from 'next/image'

interface HeaderProps {
  img: any
  title: string
  alt: string
}

const Header: React.FC<HeaderProps> = ({ img, title, alt }) => {
  return (
    <div className='relative'>
      <Image src={img} alt={alt} className='w-full opacity-50' />
      <h1 className='lg:text-6xl text-4xl font-extrabold text-black absolute bottom-0 left-0 p-4'>
        {title}
      </h1>
    </div>
  )
}

export default Header
