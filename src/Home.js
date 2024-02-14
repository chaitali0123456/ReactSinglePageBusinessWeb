import React from 'react'
import './style.css'
import Features from './Features'
import Services from './Services'
import Testimonials from './Testimonials'
import Footer from './Footer'
import logo2 from './images/logo.png'

export default function Home() {
  return (
    <div className='fist-page'>
      <div className='navbar'>
        <div>
          <img src={logo2} alt="" className='home-logo' />
        </div>
        <div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#Features">Features</a></li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#testinomials">Testmonial</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
        </div>
      </div> 
      <div className='text'>
        <h1>Beuty Parlour</h1>
        <p>Make time for Yourself</p>
      </div>
      <div className='home-btn' > 
          <div className="btn1">
              <button>Find Out</button>
          </div>
          <div className='btn2'>
              <button>Read</button>
          </div>
      </div>
     <div>
          <Features/>
          <Services/>
          <Testimonials/>
          <Footer/>
    </div> 

    </div>
  )
}
