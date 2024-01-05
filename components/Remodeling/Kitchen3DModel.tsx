import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import Model from '@/public/Kitchen'

const Kitchen3DModel = () => {
  const [isGrabbing, setGrabbing] = useState(false)

  const handleMouseDown = () => {
    setGrabbing(true)
  }

  const handleMouseUp = () => {
    setGrabbing(false)
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
        <OrbitControls
          enableZoom={true}
          zoomSpeed={0.5}
          rotateSpeed={0.5}
          minDistance={12}
          maxDistance={15}
          target={[8, 3, 0]}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={-Math.PI / 2.5}
          autoRotate={true}
          autoRotateSpeed={0.09999}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 0]} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Kitchen3DModel
