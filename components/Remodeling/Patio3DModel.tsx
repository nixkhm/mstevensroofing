import React, { useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useProgress
} from '@react-three/drei'
import { Suspense } from 'react'
import Loading from '@/components/Loading'
import { useInView } from 'react-intersection-observer'

const Patio3DModel = () => {
  const [isGrabbing, setGrabbing] = useState(false)

  const [ref, inView] = useInView()

  const handleMouseDown = () => {
    setGrabbing(true)
  }

  const handleMouseUp = () => {
    setGrabbing(false)
  }

  const { progress } = useProgress()

  const LazyLoadedModel = React.lazy(() => import('@/public/Patio'))

  const PatioModel = () => {
    useEffect(() => {
      useGLTF.preload('@/public/Patio')
    }, [])

    return (
      <Suspense fallback={null}>
        <LazyLoadedModel />
      </Suspense>
    )
  }

  return (
    <div
      className={`lg:w[50%] w[100%] bg-navy h-[100%] items-center  ${
        isGrabbing ? 'cursor-grabbing' : 'hover:cursor-grab'
      }`}
      style={{ height: '100%', width: '100%', margin: '0 auto' }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {progress < 100 ?? (
        <div className='relative h-full w-full'>
          <Loading />
        </div>
      )}
      <Canvas ref={ref}>
        <OrbitControls
          rotateSpeed={0.3}
          reverseOrbit={true}
          minAzimuthAngle={-2.7}
          maxAzimuthAngle={-0.2}
          minPolarAngle={0.8}
          maxPolarAngle={1.3}
          autoRotate={inView && true}
          minZoom={6}
          maxZoom={10}
          enableZoom={true}
        />
        <ambientLight intensity={2} />
        <ambientLight intensity={1} />
        <PerspectiveCamera
          makeDefault
          position={[-22, 8, -19]}
          fov={110}
          zoom={6}
        />
        <PatioModel />
      </Canvas>
    </div>
  )
}

export default Patio3DModel
