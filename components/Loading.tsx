import Image from 'next/image'
import loading from '@/public/Remodeling_Images/loading.gif'

const Loadng = () => {
  return (
    <div className='flex h-full items-center justify-center'>
      <Image src={loading} alt='loading' width={100} height={100} />
    </div>
  )
}

export default Loadng
