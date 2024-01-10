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
import { OrbitControls as OrbitControlsType } from 'three/examples/jsm/controls/OrbitControls.js'

const Patio2_3DModel = () => {
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

  const LazyLoadedModel = React.lazy(() => import('@/public/Patio_2'))

  const PatioModel = () => {
    useEffect(() => {
      useGLTF.preload('@/public/Patio_2')
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
      if (azimuth === -2.6) setRotate(false)
      else if (azimuth === -3.1) setRotate(true)
    }
  }

  /* TODO: Fix TypeScript Type Error for ref here */
  const setControlsRef = (ref: any | null) => {
    controls.current = ref
  }

  return (
    <div
      className={`lg:w[50%] w[100%] h-[100%] items-center bg-sky-200 bg-opacity-70 ${
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
          ref={orbitControls => setControlsRef(orbitControls)}
          rotateSpeed={0.5}
          autoRotateSpeed={0.3}
          minAzimuthAngle={-3.1}
          maxAzimuthAngle={-2.6}
          minPolarAngle={1.01}
          maxPolarAngle={1.5}
          autoRotate={inView && true}
          enableZoom={false}
          reverseOrbit={rotate}
          onChange={handleChange}
        />
        <ambientLight intensity={2} />
        <ambientLight intensity={1} />
        <PerspectiveCamera
          makeDefault
          position={[-22, 77, -550]}
          fov={130}
          zoom={1.5}
        />
        <PatioModel />
      </Canvas>
    </div>
  )
}

export default Patio2_3DModel
