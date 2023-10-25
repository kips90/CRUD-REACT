import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Home({name, cohort}) {
  return (
    <div>
        <Navbar cohort={cohort}/>
        
        <Footer/>
    </div>
  )
}
