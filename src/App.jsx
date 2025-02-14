import FacebookAds from './pages/facebook-ads';
import GoogleAds from './pages/google-ads';
import Home from './pages/home';
import { Route, Routes } from 'react-router';
import SEO from './pages/seo';
import EcommerceMarketing from './pages/ecommerce-marketing';
import B2BLeadGeneration from './pages/b2b-lead-generation';
import AboutUs from './pages/about-us';
import Privacy from './pages/privacy';
import Contact from './pages/contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/google-ads" element={<GoogleAds />} />
      <Route path="/facebook-ads" element={<FacebookAds />} />
      <Route path="/seo" element={<SEO />} />
      <Route path="/ecommerce-marketing" element={<EcommerceMarketing />} />
      <Route path="/b2b-lead-generation" element={<B2BLeadGeneration />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;