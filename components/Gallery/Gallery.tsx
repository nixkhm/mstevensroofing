import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Gallery = () => {
  const images = [
    {
      original: 'https://i.postimg.cc/yYH73vY9/img-2565-crop-u2337582.jpg',
      thumbnail: 'https://i.postimg.cc/yYH73vY9/img-2565-crop-u2337582.jpg'
    },
    {
      original: 'https://i.postimg.cc/yxzC98BB/img-2567-crop-u2337952.jpg',
      thumbnail: 'https://i.postimg.cc/yxzC98BB/img-2567-crop-u2337952.jpg'
    },
    {
      original: 'https://i.postimg.cc/7ZPDmhzZ/img-3128-crop-u2340172.jpg',
      thumbnail: 'https://i.postimg.cc/7ZPDmhzZ/img-3128-crop-u2340172.jpg'
    },
    {
      original: 'https://i.postimg.cc/rySkTxCp/img-5010-crop-u2345722.jpg',
      thumbnail: 'https://i.postimg.cc/rySkTxCp/img-5010-crop-u2345722.jpg'
    },
    {
      original: 'https://i.postimg.cc/Dz8h3NBV/img-6291-crop-u2347942.jpg',
      thumbnail: 'https://i.postimg.cc/Dz8h3NBV/img-6291-crop-u2347942.jpg'
    },
    {
      original: 'https://i.postimg.cc/fTCQtsPn/unadjustednonraw-thumb-17d.jpg',
      thumbnail: 'https://i.postimg.cc/fTCQtsPn/unadjustednonraw-thumb-17d.jpg'
    },
    {
      original: 'https://i.postimg.cc/pXJRfzpS/unadjustednonraw-thumb-1ea7.jpg',
      thumbnail: 'https://i.postimg.cc/pXJRfzpS/unadjustednonraw-thumb-1ea7.jpg'
    },
    {
      original:
        'https://i.postimg.cc/g0QWzKTx/unadjustednonraw-thumb-1f96-crop-u236792.jpg',
      thumbnail:
        'https://i.postimg.cc/g0QWzKTx/unadjustednonraw-thumb-1f96-crop-u236792.jpg'
    },
    {
      original: 'https://i.postimg.cc/G2D1HsWq/unadjustednonraw-thumb-1fe4.jpg',
      thumbnail: 'https://i.postimg.cc/G2D1HsWq/unadjustednonraw-thumb-1fe4.jpg'
    },
    {
      original: 'https://i.postimg.cc/XY2WhWKc/unadjustednonraw-thumb-1ff6.jpg',
      thumbnail: 'https://i.postimg.cc/XY2WhWKc/unadjustednonraw-thumb-1ff6.jpg'
    },
    {
      original: 'https://i.postimg.cc/FsNQHzDV/unadjustednonraw-thumb-1ff7.jpg',
      thumbnail: 'https://i.postimg.cc/FsNQHzDV/unadjustednonraw-thumb-1ff7.jpg'
    },
    {
      original: 'https://i.postimg.cc/NF7qxvfX/unadjustednonraw-thumb-7d5.jpg',
      thumbnail: 'https://i.postimg.cc/NF7qxvfX/unadjustednonraw-thumb-7d5.jpg'
    }
  ]

  return (
    <div className='flex justify-center bg-sky-50'>
      <div className='w-[80%]'>
        <div className='p-6'>
          <ImageGallery
            items={images}
            autoPlay={true}
            lazyLoad={true}
            showBullets={true}
            slideOnThumbnailOver={true}
            showIndex={true}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            thumbnailPosition='left'
            slideInterval={3000}
          />
          <div className='mt-10'>
            <ImageGallery
              items={images}
              autoPlay={true}
              lazyLoad={true}
              showBullets={true}
              slideOnThumbnailOver={true}
              showIndex={true}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              thumbnailPosition='right'
              slideInterval={3000}
            />
          </div>
          <div className='mt-10'>
            <ImageGallery
              items={images}
              autoPlay={true}
              lazyLoad={true}
              showBullets={true}
              slideOnThumbnailOver={true}
              showIndex={true}
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              thumbnailPosition='bottom'
              slideInterval={3000}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
