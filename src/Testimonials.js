import React from 'react'
import png1 from './images/ken.png'
import png2 from './images/alis.png'
import png3 from './images/jack.png'

export default function Testimonials() {
  return (
    <div id='testinomials'>
        <div className='title-text'>
          <p>TESTIMONIAL</p>
          <h1>What Client Say's</h1>
        </div>

        <div className="testimonial-block">
          <div className="testimonial-block2">
            <div className="user">
                <img className="img-testmo" src={png1} alt="" />
                <div className='user-info'>
                    <h4>KEN NORMAN</h4>
                    <small>@kennorman</small>
                </div>
            </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nisi deleniti ad placeat laboriosam sit id optio totam. Libero, doloremque?</p>
          </div>
            <div className="testimonial-block2">
            <div className="user">
                <img className="img-testmo" src={png2} alt="" />
                <div className='user-info'>
                    <h4>ALIS MARTINE</h4>
                    <small>@alismartin</small>
                </div>
            </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nisi deleniti ad placeat laboriosam sit id optio totam. Libero, doloremque?</p>
          </div>
          <div className="testimonial-block2">
            <div className="user">
                <img className="img-testmo" src={png3} alt="" />
                <div className='user-info'>
                    <h4>JACK SPARROW</h4>
                    <small>@jacksparrow</small>
                </div>
            </div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem nisi deleniti ad placeat laboriosam sit id optio totam. Libero, doloremque?</p>
          </div>
        </div>
    </div>
  )
}
