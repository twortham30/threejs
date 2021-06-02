

import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { useSpring, a } from 'react-spring';
import { useFrame } from "react-three-fiber";


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../home2.gltf');
  

let speed = .015;
useFrame(() => (
  
  group.current.rotation.y += speed
 


  ));


  return (
    
    <group  ref={group} onClref={group} {...props} dispose={null}>
      <group  position={[0, 0, 3]}>
        <mesh  material={materials.home} geometry={nodes.Cube001.geometry} colo />
        <mesh material={materials['gagrage door']} geometry={nodes.Cube001_1.geometry} />
        <mesh material={materials['front door']} geometry={nodes.Cube001_2.geometry} />
        <mesh material={materials.window} geometry={nodes.Cube001_3.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('../../../home2.gltf')
