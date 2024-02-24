import Image from 'next/image'

interface CommercialBlockProps {
  title: string
  copy: string
  image: any
}

const CommercialBlock: React.FC<CommercialBlockProps> = ({
  title,
  copy,
  image
}) => {
  return (
    <div className='m-5 flex flex-col items-center justify-center gap-x-5 rounded-xl border-4 border-solid border-black p-5 '>
      <h1 className='text-3xl font-bold'>{title}</h1>
      <Image
        src={image}
        alt='icon'
        height={200}
        width={200}
        className='animate-pulse p-2 transition hover:scale-110'
      />
      <h1 className='text-lg font-normal'>{copy}</h1>
    </div>
  )
}

export default CommercialBlock
