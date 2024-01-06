import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

const Kitchen3DModel = () => {
  const [isGrabbing, setGrabbing] = useState(false)

  const handleMouseDown = () => {
    setGrabbing(true)
  }

  const handleMouseUp = () => {
    setGrabbing(false)
  }

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
      style={{ height: '100%', width: '75%', margin: '0 auto' }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <Canvas>
        <PerspectiveCamera
          makeDefault
          position={[394, 240, 500]}
          fov={100}
          zoom={1}
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
        <ambientLight intensity={3} />
        <pointLight position={[0, 20, 10]} />
        <KitchenModel />
      </Canvas>
    </div>
  )
}

export default Kitchen3DModel
