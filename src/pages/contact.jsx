import React from 'react'
import Navbar from '../components/navbar'
import CHeroSection from '../components/contact/c-hero-section'
import CWWRSection from '../components/contact/c-wwr-section'
import CFormSection from '../components/contact/c-form-section'

const Contact = () => {
  return (
    <>
      <Navbar />
      <CHeroSection />
      <CWWRSection />
      <CFormSection />
    </>
  )
}

export default Contact