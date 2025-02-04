import GoogleAds from './pages/google-ads';
import Home from './pages/home';
import { Route, Routes } from 'react-router';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/google-ads" element={<GoogleAds />} />
    </Routes>
  );
};

export default App;