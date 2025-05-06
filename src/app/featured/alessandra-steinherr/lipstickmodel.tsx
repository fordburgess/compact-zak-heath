"use client"
import React, { useRef } from 'react'
import { useLoader } from '@react-three/fiber';
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useScroll } from '@react-three/drei';

const LipstickModel = () => {
  const gltf = useLoader(GLTFLoader, '/models/lipstick.glb')
  const modelRef = useRef(null);
  const scroll = useScroll();




  return (
    <Canvas style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }} camera={{ position: [0, 0, 5], fov: 75 }}>
      <mesh ref={modelRef} scale={5} position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial />
        {/* <ambientLight intensity={1} /> */}
        {/* <spotLight position={[0, 0, 0]} angle={0.25} intensity={0.8} /> */}
        {/* <directionalLight position={[-10, 10, 5]} intensity={1} /> */}
        {/* <primitive object={gltf.scene} /> */}
      </mesh>
    </Canvas>
  )
}

export default LipstickModel
