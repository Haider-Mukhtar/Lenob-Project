import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import SEOHeroSection from '../components/seo/seo-hero-section'
import SEOMessageSection from '../components/seo/seo-message-section'
import SEOStepsSection from '../components/seo/seo-steps-section'
import SEOUltimateGame from '../components/seo/seo-ultimate-game'
import SEOExplosiveGrowth from '../components/seo/seo-explosive-growth'
import SEOHiddenCost from '../components/seo/seo-hidden-cost'
import SEOOutranking from '../components/seo/seo-outranking'
import SEOAuditSection from '../components/seo/seo-audit-section'
import SEORealStoriesSection from '../components/seo/seo-real-stories-section'
import ClientsSaysSection from '../components/clients-says-section'
import SEOFAQSection from '../components/seo/seo-faqs-section'
import SEOFormSection from '../components/seo/seo-form-section'
import InnovateInspireCreateSection from '../components/innovate-inspire-create-section'
import ReadyToWorkSection from '../components/ready-to-work-section'
import Footer from '../components/footer'

const SEO = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <Navbar />
      <SEOHeroSection />
      <SEOMessageSection />
      <SEOUltimateGame />
      <SEOExplosiveGrowth />
      <SEOStepsSection />
      <SEOHiddenCost />
      <SEOOutranking />
      <SEOAuditSection />
      <SEORealStoriesSection />
      <ClientsSaysSection />
      <SEOFAQSection />
      <SEOFormSection />
      <InnovateInspireCreateSection />
      <ReadyToWorkSection />
      <Footer />
    </>
  )
}

export default SEO