"use client"
import React from 'react';
import Image from 'next/image';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import './test.css'

const Test = () => {
  return (
    <div className='test-container'>
      <Image priority src={SpringExpanded} className='content-container-background' alt='test'/>
    </div>
  )
}

export default Test
