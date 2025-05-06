"use client"
import React, { useEffect, useRef } from 'react'
import Lipstick from '@/components/lipstick';
import { useLoader } from '@react-three/fiber';
import { Environment, useGLTF } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls, useScroll } from '@react-three/drei';

const page = (props) => {
  const modelRef = useRef(null);
  const scroll = useScroll();
  const rotationSpeed = 0.1;

  return (
    <div className='test-scroll-div' style={{ height: '100vh', width: '100vw', overflowY: 'auto' }}>
      <Canvas>
        <Environment preset='studio' />
        <OrbitControls />
        <Lipstick />
      </Canvas>
    </div>
  )
}

export default page
