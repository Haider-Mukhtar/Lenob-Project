import React from 'react'
import Navbar from '../components/navbar'
import AHeroSection from '../components/about-us/a-hero-section'
import AWWRSection from '../components/about-us/a-wwr-section'
import AWWBSection from '../components/about-us/a-wwb-section'
import AWWDSection from '../components/about-us/a-wwd-section'
import ACoreValuesSection from '../components/about-us/a-core-values-section'

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <AHeroSection />
      <AWWRSection />
      <AWWBSection />
      <ACoreValuesSection />
      <AWWDSection />
    </>
  )
}

export default AboutUs