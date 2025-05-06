"use client"
import React, { useEffect, useRef } from 'react'
import { useLoader } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls, useScroll } from '@react-three/drei';

const page = (props) => {
  const { nodes, materials } = useGLTF('/lipstick.glb')
  const modelRef = useRef(null);
  const scroll = useScroll();
  const rotationSpeed = 0.1;

  return (
    <div className='test-scroll-div' style={{ height: '100vh', width: '100vw', overflowY: 'auto' }}>
      <Canvas>
        <Environment preset='studio' />
        <OrbitControls />
        <group {...props} dispose={null}>
          <group scale={0.01}>
            <group
              position={[-45.848, 58.243, -17.769]}
              rotation={[Math.PI / 2, 0, -0.262]}
              scale={[1.009, 1.009, 1.046]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Circle002_Material_#26_0'].geometry}
                material={materials.Material_26}
                position={[8.778, -80.737, 54.321]}
              />
            </group>
            <group
              position={[-49.423, 58.243, -16.375]}
              rotation={[Math.PI / 2, 0, 0.436]}
              scale={[1.009, 1.009, 1.046]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Object001_Material_#26_0'].geometry}
                material={materials.Material_26}
                position={[8.778, -80.737, 54.321]}
              />
            </group>
          </group>
        </group>
      </Canvas>
    </div>
  )
}

export default page
