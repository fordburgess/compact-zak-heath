"use client"
import React from 'react';
import Image from 'next/image';
import SpringExpanded from '../../../assets/images/spring-expanded.jpg';
import './test.css'

const Test = () => {
  return (
    <div className='test-container'>
      <Image priority src={SpringExpanded} id='test-container-background' alt='test'/>
      <div className='timeline-container'>
        <div className='time-line'></div>
      </div>
    </div>
  )
}

export default Test
