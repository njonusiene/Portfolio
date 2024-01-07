import React from 'react'
import './arrow.css'

const Arrow = () => {
  return (
    <div className='container'>
    <ul>
      <li>
        <div className='animated-arrow'>
          <span className='the-arrow -left'>
            <span className='shaft'></span>
          </span>
          <span className='main'>
            <span className='text'>
              Neringa Jonušienė
            </span>
            <span className='the-arrow -right'>
              <span className='shaft'></span>
            </span>
          </span>
        </div>
      </li>
    </ul>
  </div>
  
  )
}

export default Arrow
