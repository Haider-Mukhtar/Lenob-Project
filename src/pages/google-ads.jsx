import GADidWrongSection from "../components/ga-did-wrong-section"
import GAHeroSection from "../components/ga-hero-section"
import GAImagesScetion from "../components/ga-images-scetion"
import GAMessageSection from "../components/ga-message-section"
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
    </>
  )
}

export default GoogleAds