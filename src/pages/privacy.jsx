import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import PHeroSection from '../components/privacy/p-hero-section'
import PContentSection from '../components/privacy/p-content-section'

const Privacy = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Navbar />
      <PHeroSection /> 
      <PContentSection />
    </>
  )
}

export default Privacy