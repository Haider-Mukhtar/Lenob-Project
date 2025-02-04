import GAHeroSection from "../components/ga-hero-section"
import GAImagesScetion from "../components/ga-images-scetion"
import GAMessageSection from "../components/ga-message-section"
import Navbar from "../components/navbar"

const GoogleAds = () => {
  return (
    <>
      <Navbar />
      <GAHeroSection />
      <GAMessageSection />
      <GAImagesScetion />
    </>
  )
}

export default GoogleAds