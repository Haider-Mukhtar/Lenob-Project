import { useEffect } from "react"
import Footer from "../components/footer"
import GADidWrongSection from "../components/google-ads/ga-did-wrong-section"
import GAFAQSection from "../components/google-ads/ga-faq-section"
import GAHeroSection from "../components/google-ads/ga-hero-section"
import GAImagesScetion from "../components/google-ads/ga-images-scetion"
import GAIndustriesServedSection from "../components/google-ads/ga-industries-served-section"
import GAMakeStandoutSection from "../components/google-ads/ga-make-standout-section"
import GAMessageSection from "../components/google-ads/ga-message-section"
import GAPPCAgencySection from "../components/google-ads/ga-ppc-agency-section"
import GAProblemSection from "../components/google-ads/ga-problem-section"
import InnovateInspireCreateSection from "../components/innovate-inspire-create-section"
import Navbar from "../components/navbar"
import ReadyToWorkSection from "../components/ready-to-work-section"
import ClientsSaysSection from "../components/clients-says-section"
import GAFormSection from "../components/google-ads/ga-form-section"

const GoogleAds = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
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
      <ClientsSaysSection />
      <GAFAQSection />
      <GAFormSection />
      <InnovateInspireCreateSection />
      <ReadyToWorkSection />
      <Footer />
      {/**/}
    </>
  )
}

export default GoogleAds