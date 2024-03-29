/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei/useGLTF';
import { useFrame } from "react-three-fiber";



export default function Multifam(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../../../multifam.glb')

  let speed = .01;
useFrame(() => (
  
  group.current.rotation.y += speed
 


  ));

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 1, 0]}>
        <mesh material={materials.WINDOWS} geometry={nodes.Cube_1.geometry} />
        <mesh material={materials.DOOR} geometry={nodes.Cube_2.geometry} />
        <mesh material={materials.hOME} geometry={nodes.Cube_3.geometry} />
      </group>
    </group>
  )
}

useGLTF.preload('../../../multifam.glb')
