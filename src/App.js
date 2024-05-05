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
import Career from './pages/Career';
import JobDescription from './pages/JobDescription';
import NewsDetails from './pages/NewsDetails';
import Contact from './pages/Contact';
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
        <Route path="/career" element={<Career />} />
        <Route path="/job-description" element={<JobDescription />} />
        <Route path="/news-details" element={<NewsDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
