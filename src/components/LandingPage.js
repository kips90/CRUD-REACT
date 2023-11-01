import React from 'react'
import img from "../images/img.png"

export default function LandingPage(props) {
  return (
    <div id='landing' className='container row '>
        <div className='col-sm-6 d-flex  align-items-center'>
          <img src={img} alt='loading...'  className='img-fluid'/>
        </div>
        <div className='col-sm-6 d-flex  align-items-center'>
          <div>
            <h1>Blog</h1>
            <h6>Get all your articles published with us</h6>
          </div>
        </div>

      </div>






  )
}
