import React from 'react'
import footlogo from './images/logo2.png'
import facbook from './images/facbook.png'
import twit from './images/twit.png'
import insta from './images/insta.png'
import youtube from './images/youtub.png'
import location from './images/location.png'
import telegram from './images/telegram.png'
import calling from './images/calling.png'
import clocklogo from './images/clock.png'

export default function Footer() {
  return (
    <div>
      <section id='footer'>
            <img src={footlogo} alt="" className='footer-img' />
            <div className="title-text">
                <p>CONTACT</p>
                <h1>Visit Shop today</h1>
            </div>
            <div className="footer-row">
                <div className="footer-left">
                    <div>
                        <img src={clocklogo} alt="" className='clock-img1' />
                        <img src={clocklogo} alt="" className='clock-img2' />
                    </div>
                    <div>
                        <h1>Opening Hours</h1>
                        <p>Monday to Friday- 9am to 9pm</p>
                        <p>Saturdat to Sunday - 8am to 12pm</p>
                    </div>
                </div>
                <div className="footer-right">
                    <div>
                        <h1>Get In Touch</h1>
                        <p>#90kns shahu colony,in Targaon</p>
                        <p>beutyplus@gmail.com</p>
                        <p>9876543210</p>
                    </div>
                    <div className='footer-right-logo'>
                        <img src={location} alt="" className='footer-logo'/>
                        <img src={telegram} alt="" className='footer-logo'/>
                        <img src={calling} alt="" className='footer-logo'/>
                    </div>
                </div>
            </div>
            <div className="social-links">
                <div className='icons'>
                    <img src={facbook} alt="" className='social-logo'/>
                </div>
                <div className='icons'>
                    <img src={twit} alt="" className='social-logo'/>
                </div>
                <div className='icons'>
                    <img src={insta} alt="" className='social-logo'/>
                </div>
                <div className='icons'>
                    <img src={youtube} alt="" className='social-logo'/>
                </div>
            </div>
            <div className='footer-end'>
                <p>CopyRight CodeGrucool</p>
            </div>
      </section>
    </div>
  )
}
