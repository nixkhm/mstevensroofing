import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useProgress
} from '@react-three/drei'
import { Suspense } from 'react'
import Kitchen_Placeholder from '@/public/Remodeling_Images/kitchen1_placeholder.gif'
import Image from 'next/image'

const Kitchen3DModel = () => {
  const [isGrabbing, setGrabbing] = useState(false)

  const handleMouseDown = () => {
    setGrabbing(true)
  }

  const handleMouseUp = () => {
    setGrabbing(false)
  }

  const { progress } = useProgress()

  const LazyLoadedModel = React.lazy(() => import('@/public/Kitchen'))

  const KitchenModel = () => {
    useEffect(() => {
      useGLTF.preload('@/public/Kitchen')
    }, [])

    return (
      <Suspense fallback={null}>
        <LazyLoadedModel />
      </Suspense>
    )
  }

  return (
    <div
      className={`lg:w[50%] w[100%] h-[100%] items-center bg-gray-200  ${
        isGrabbing ? 'cursor-grabbing' : 'hover:cursor-grab'
      }`}
      style={{ height: '100%', width: '100%', margin: '0 auto' }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {progress < 100 && (
        <div className='relative h-full w-full'>
          <Image
            src={Kitchen_Placeholder}
            alt='Kitchen Placeholder'
            layout='fill'
          />
        </div>
      )}
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[
            394,
            typeof window !== 'undefined' &&
            window.innerHeight &&
            window.innerWidth
              ? window.innerHeight / window.innerWidth
              : 1,
            550
          ]}
          fov={100}
          zoom={0.75}
        />
        <OrbitControls
          enableZoom={false}
          rotateSpeed={0.3}
          autoRotate={true}
          autoRotateSpeed={0.75}
          minAzimuthAngle={0.0009}
          maxAzimuthAngle={0.65}
          minPolarAngle={0.9}
          maxPolarAngle={1.3}
        />
        <ambientLight intensity={5} />
        <pointLight position={[0, 20, 10]} intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <KitchenModel />
      </Canvas>
    </div>
  )
}

export default Kitchen3DModel
