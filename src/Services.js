import React from 'react'
import servicpng1 from './images/servis1.png'
import servicpng2 from './images/servis2.png'
import servicpng3 from './images/servis3.png'
import servicpng4 from './images/servis4.png'

export default function Services() {
  return (
    <div id='Services'>
        <div className="title-text">
            <p>SERVICES</p>
            <h1>We Provided Better</h1>
        </div>
        <div className="services-box">
            <div className="service-block">
                <img src={servicpng1} alt="" />
                <div className="servic-cards">
                    <h3>Skin Care Products</h3>
                    <hr/>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, corrupti.</p>
                </div>
            </div>
            <div className="service-block">
                <img src={servicpng2} alt="" />
                <div className="servic-cards">
                    <h3>Cosmatics Spa</h3>
                    <hr />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, corrupti.</p>
                </div>
            </div>
            <div className="service-block">
                <img src={servicpng3} alt="" />
                <div className="servic-cards">
                    <h3>Golden Pearl</h3>
                    <hr />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, corrupti.</p>
                </div>
            </div>
            <div className="service-block">
                <img src={servicpng4} alt="" />
                <div className="servic-cards">
                    <h3>Cosmatic Sprey</h3>
                    <hr />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta, corrupti.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}
