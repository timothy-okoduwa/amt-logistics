import Home from './pages/Home';
import './App.css';
import TopName from './component/TopName';
import NavBarr from './component/NavBarr';
import Footer from './component/Footer';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Compliance from './pages/Compliance';
import Faqs from './pages/Faqs';
import Newss from './pages/Newss';
function App() {
  return (
    <BrowserRouter>
      <div className="youuu fixed-top">
        <TopName />
        <NavBarr />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/news" element={<Newss />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
