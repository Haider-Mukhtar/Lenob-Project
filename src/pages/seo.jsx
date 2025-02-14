import React from 'react'
import Navbar from '../components/navbar'
import SEOHeroSection from '../components/seo/seo-hero-section'
import SEOMessageSection from '../components/seo/seo-message-section'

const SEO = () => {
  return (
    <>
      <Navbar />
      <SEOHeroSection />
      <SEOMessageSection />
    </>
  )
}

export default SEO