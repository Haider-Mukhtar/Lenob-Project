import HeroSection from "../components/hero-section";
import MessageSection from "../components/message-section";
import Navbar from "../components/navbar";
import HeroVideo from "../components/ui/hero-video";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroVideo />
      <MessageSection />
    </>
  );
};

export default Home;