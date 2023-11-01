import React from 'react'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import LandingPage from '../components/LandingPage'
import Blogs from '../components/Blogs'

export default function Home() {
  return (
    <div>
      <LandingPage/>
      <Blogs/>
        
    </div>
  )
}
