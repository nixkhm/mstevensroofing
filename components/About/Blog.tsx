import dans from '@/public/About_Images/dans-papers.png'
import facebook from '@/public/About_Images/facebook.png'
import LinkPreview from '../LinkPreview'

const Blog = () => {
  return (
    <div className='bg-gray-300'>
      <h1 className='text-center text-3xl font-semibold pt-10'>
        Read about us!
      </h1>
      <LinkPreview
        url='https://www.danspapers.com/2021/06/m-stevens-roofing-specialist-remodeling-co-raising-the-roof/'
        img={dans}
        description='M. Stevens Roofing Specialist & Remodeling Co. Is Raising the Roof'
      />
      <LinkPreview
        url='https://www.facebook.com/mstevensroofing'
        img={facebook}
        description='Check us out on Facebook!'
      />
    </div>
  )
}

export default Blog
