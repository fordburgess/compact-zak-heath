"use client"
import React, { useState, useEffect, useRef } from 'react'
import { useLoader, useFrame } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls, useScroll } from '@react-three/drei';

const Lipstick = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const { nodes, materials } = useGLTF('/lipstick.glb')
  const modelRef = useRef(null);
  const scroll = useScroll();
  const rotationSpeed = 0.1;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (modelRef.current && scrollY) {
      modelRef.current.rotation.z = -(scrollY - 870) * 0.0005;
      modelRef.current.rotation.y = -(scrollY - 870) * 0.0005;
    }
  }, [scrollY])

  if (!nodes || !materials) {
    return <p>Loading</p>
  }

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <group scale={0.035}>
        <group
          position={[0, 0, 0]}
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
          position={[0, 0, 0]}
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
  )
}

export default Lipstick
