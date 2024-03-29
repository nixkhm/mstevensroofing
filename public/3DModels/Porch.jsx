/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 porch.gltf 
Author: G&L Architectural Graphics Inc (https://sketchfab.com/BERSEKAEL)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/509-mac-millan-ct-front-porch-upgrade-333c9bd86653460f86b875e318b2d675
Title: 509 Mac Millan Ct Front Porch Upgrade
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  useGLTF.preload('/3DModels/PorchModel/porch.gltf');
  const { nodes, materials } = useGLTF('/3DModels/PorchModel/porch.gltf'); 
   return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0.5]}>
        <mesh geometry={nodes.Material2.geometry} material={materials.material} />
        <mesh geometry={nodes.Material2_1.geometry} material={materials.material_0} />
        <mesh geometry={nodes.Material2_2.geometry} material={materials.material_1} />
        <mesh geometry={nodes.Material2_3.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Material2_4.geometry} material={materials.material_3} />
        <mesh geometry={nodes.Material2_5.geometry} material={materials.material_4} />
        <mesh geometry={nodes.Material2_6.geometry} material={materials.material_5} />
        <mesh geometry={nodes.Material2_7.geometry} material={materials.material_7} />
        <mesh geometry={nodes.Material2_8.geometry} material={materials.material_6} />
        <mesh geometry={nodes.Material2_9.geometry} material={materials.material_8} />
        <mesh geometry={nodes.Material2_10.geometry} material={materials.material_9} />
        <mesh geometry={nodes.Material2_11.geometry} material={materials.material_10} />
        <mesh geometry={nodes.Material2_12.geometry} material={materials.material_11} />
        <mesh geometry={nodes.Material2_13.geometry} material={materials.material_12} />
        <lineSegments geometry={nodes.Material2_14.geometry} material={materials.edge_color000255} />
        <mesh geometry={nodes.Material2_15.geometry} material={materials.material_13} />
        <mesh geometry={nodes.Material2_16.geometry} material={materials.material_14} />
        <mesh geometry={nodes.Material2_17.geometry} material={materials.material_15} />
        <mesh geometry={nodes.Material2_18.geometry} material={materials.material_16} />
        <mesh geometry={nodes.Material2_19.geometry} material={materials.material_18} />
        <mesh geometry={nodes.Material2_20.geometry} material={materials.material_17} />
        <mesh geometry={nodes.Material2_21.geometry} material={materials.material_19} />
        <mesh geometry={nodes.Material2_22.geometry} material={materials.material_20} />
        <mesh geometry={nodes.Material2_23.geometry} material={materials.material_21} />
        <mesh geometry={nodes.Material2_24.geometry} material={materials.material_22} />
        <mesh geometry={nodes.Material2_25.geometry} material={materials.material_24} />
        <mesh geometry={nodes.Material2_26.geometry} material={materials.material_23} />
        <mesh geometry={nodes.Material2_27.geometry} material={materials.material_25} />
        <mesh geometry={nodes.Material2_28.geometry} material={materials.material_26} />
        <mesh geometry={nodes.Material2_29.geometry} material={materials.material_27} />
        <mesh geometry={nodes.Material2_30.geometry} material={materials.material_28} />
        <mesh geometry={nodes.Material2_31.geometry} material={materials.material_29} />
        <mesh geometry={nodes.Material2_32.geometry} material={materials.material_30} />
        <mesh geometry={nodes.Material2_33.geometry} material={materials.material_31} />
        <mesh geometry={nodes.Material3.geometry} material={materials.material_34} />
        <mesh geometry={nodes.Material2_34.geometry} material={materials.material_32} />
        <mesh geometry={nodes.Material2_35.geometry} material={materials.material_33} />
        <mesh geometry={nodes.Material2_36.geometry} material={materials.material_35} />
      </group>
    </group>
  )
}

