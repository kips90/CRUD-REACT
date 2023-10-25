import React from 'react'
import logo from "../logo.svg"

export default function LandingPage(props) {
  return (
    <div id='landing' className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={logo} alt='image loading' />
        </div>
        <div className='col-md-6'>
          <div>LandingPage</div>
          <h1>{props.myname}</h1>
        </div>
      </div>
    </div>
  )
}
