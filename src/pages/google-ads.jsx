import Footer from "../components/footer"
import GAClientsSaysSection from "../components/ga-clients-says-section"
import GADidWrongSection from "../components/ga-did-wrong-section"
import GAFAQSection from "../components/ga-faq-section"
import GAFormSection from "../components/ga-form-section"
import GAHeroSection from "../components/ga-hero-section"
import GAImagesScetion from "../components/ga-images-scetion"
import GAIndustriesServedSection from "../components/ga-industries-served-section"
import GAMakeStandoutSection from "../components/ga-make-standout-section"
import GAMessageSection from "../components/ga-message-section"
import GAPPCAgencySection from "../components/ga-ppc-agency-section"
import GAProblemSection from "../components/ga-problem-section"
import InnovateInspireCreateSection from "../components/innovate-inspire-create-section"
import Navbar from "../components/navbar"
import ReadyToWorkSection from "../components/ready-to-work-section"

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
      <GAClientsSaysSection />
      <GAFAQSection />
      <GAFormSection />
      <InnovateInspireCreateSection />
      <ReadyToWorkSection />
      <Footer />
    </>
  )
}

export default GoogleAds