import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import SEOHeroSection from '../components/seo/seo-hero-section'
import SEOMessageSection from '../components/seo/seo-message-section'
import SEOStepsSection from '../components/seo/seo-steps-section'

const SEO = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Navbar />
      <SEOHeroSection />
      <SEOMessageSection />

      <SEOStepsSection />

    </>
  )
}

export default SEO