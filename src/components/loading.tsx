import React from 'react'
import './styles/loading.css'

const Loading = () => {
  return (
    <div className='loading-container'>
      <span className='loader'></span>
      <div className='loading-text'>
        <p>Loading</p>
        <p className='ellipse'>.</p>
        <p className='ellipse'>.</p>
        <p className='ellipse'>.</p>
      </div>
    </div>
  )
}

export default Loading
