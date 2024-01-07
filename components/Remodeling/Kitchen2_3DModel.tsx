'use client'

import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useProgress
} from '@react-three/drei'
import { Suspense } from 'react'
import Loading from '@/components/Loading'

const Kitchen2_3DModel = () => {
  const [isGrabbing, setGrabbing] = useState(false)

  const handleMouseDown = () => {
    setGrabbing(true)
  }

  const handleMouseUp = () => {
    setGrabbing(false)
  }

  const { progress } = useProgress()
  const LazyLoadedModel = React.lazy(() => import('@/public/Kitchen_2'))

  const KitchenModel = () => {
    useEffect(() => {
      useGLTF.preload('@/public/Kitchen_2')
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
      {progress < 100 && <Loading />}
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[4, 3, 0]}
          fov={115}
          zoom={3}
        />
        <OrbitControls
          enableZoom={false}
          rotateSpeed={0.3}
          autoRotate={true}
          autoRotateSpeed={0.75}
          minAzimuthAngle={0.8}
          maxAzimuthAngle={2.35}
          minPolarAngle={1.1}
          maxPolarAngle={1.5}
        />
        <ambientLight intensity={3} />
        <pointLight position={[0, 20, 10]} intensity={2} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <KitchenModel />
      </Canvas>
    </div>
  )
}

export default Kitchen2_3DModel
