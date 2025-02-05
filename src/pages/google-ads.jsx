import GADidWrongSection from "../components/ga-did-wrong-section"
import GAFAQSection from "../components/ga-faq-section"
import GAHeroSection from "../components/ga-hero-section"
import GAImagesScetion from "../components/ga-images-scetion"
import GAIndustriesServedSection from "../components/ga-industries-served-section"
import GAMakeStandoutSection from "../components/ga-make-standout-section"
import GAMessageSection from "../components/ga-message-section"
import GAPPCAgencySection from "../components/ga-ppc-agency-section"
import GAProblemSection from "../components/ga-problem-section"
import Navbar from "../components/navbar"

const GoogleAds = () => {
  return (
    <>
      <Navbar />
      <GAHeroSection />
      <GAMessageSection />
      <GAImagesScetion />
      <GAProblemSection />
      <GADidWrongSection />
      <GAPPCAgencySection />
      <GAIndustriesServedSection />
      <GAMakeStandoutSection />
      
      <GAFAQSection />
    </>
  )
}

export default GoogleAds