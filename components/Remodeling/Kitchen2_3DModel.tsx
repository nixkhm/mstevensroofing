import React, { useEffect, useRef, useState } from 'react'
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
import { OrbitControls as OrbitControlsType } from 'three/examples/jsm/controls/OrbitControls.js'

const Kitchen2_3DModel = () => {
  const [isGrabbing, setGrabbing] = useState(false)
  const [rotate, setRotate] = useState(true)

  const controls = useRef<OrbitControlsType | null>(null)
  const [ref, inView] = useInView()

  const handleMouseDown = () => {
    setGrabbing(true)
  }

  const handleMouseUp = () => {
    setGrabbing(false)
  }

  const { progress } = useProgress()
  const LazyLoadedModel = React.lazy(
    () => import('@/public/3DModels/Kitchen_2')
  )

  const KitchenModel = () => {
    useEffect(() => {
      useGLTF.preload('@/public/3DModels/Kitchen_2')
    }, [])

    return (
      <Suspense fallback={null}>
        <LazyLoadedModel />
      </Suspense>
    )
  }

  const handleChange = () => {
    if (controls.current) {
      const azimuth = controls.current.getAzimuthalAngle()
      if (azimuth === 0.8) setRotate(true)
      else if (azimuth === 2.35) setRotate(false)
    }
  }

  /* TODO: Fix TypeScript Type Error for ref here */
  const setControlsRef = (ref: any | null) => {
    controls.current = ref
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
      {progress < 100 ? (
        <div className='relative h-full w-full'>
          <Loading />
        </div>
      ) : (
        <Canvas ref={ref}>
          <PerspectiveCamera
            makeDefault
            position={[4, 3, 0]}
            fov={115}
            zoom={3}
          />
          <OrbitControls
            ref={orbitControls => setControlsRef(orbitControls)}
            enableZoom={false}
            rotateSpeed={0.3}
            autoRotate={inView && true}
            reverseOrbit={rotate}
            autoRotateSpeed={0.75}
            minAzimuthAngle={0.8}
            maxAzimuthAngle={2.35}
            minPolarAngle={1.1}
            maxPolarAngle={1.5}
            onChange={handleChange}
          />
          <ambientLight intensity={3} />
          <pointLight position={[0, 20, 10]} intensity={2} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} />
          <KitchenModel />
        </Canvas>
      )}
    </div>
  )
}

export default Kitchen2_3DModel
