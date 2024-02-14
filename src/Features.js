import React from 'react'
import img1 from './images/pexels2.png'

export default function Features() {
  return (
    <div id='Features'>
        <div className="featurs">
            <h2>FEATURE</h2>
            <h1>Why choose us</h1>
        </div>
      <div className="root">
        <div>
            <h2>Exprienced Staff</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, quam id consequuntur aliquid vero modi quo enim! Magni dicta facilis dignissimos expedita!</p>

            <h2>Pre Booking Online</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eveniet repudiandae praesentium minus. Ratione, in.</p>
      
            <h2>Affordable</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, autem? Consequatur,sequi! Incidunt laborum assumenda aut debitis.</p>
        </div>
        <div>
          <img  src={img1} alt="" />
        </div>
      </div>
      
    </div>
  )
}
