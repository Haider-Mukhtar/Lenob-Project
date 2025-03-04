import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import AHeroSection from '../components/about-us/a-hero-section'
import AWWRSection from '../components/about-us/a-wwr-section'
import AWWBSection from '../components/about-us/a-wwb-section'
import AWWDSection from '../components/about-us/a-wwd-section'
import ACoreValuesSection from '../components/about-us/a-core-values-section'
import AFormSection from '../components/about-us/a-form-section'

const AboutUs = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Navbar />
      <AHeroSection />
      <AWWRSection />
      <AWWBSection />
      <ACoreValuesSection />
      <AWWDSection />
      <AFormSection />
    </>
  )
}

export default AboutUs