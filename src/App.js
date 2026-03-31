import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import AboutUs from './Components/Shared/AboutUsPage/AboutUs';
import PrivacyPolicyBanner from './Components/Shared/PrivacyPolicy/PrivacyPolicyPage';
import TermsConditionsPage from './Components/Shared/TermsConditions/TermsConditionsPage';
import Services from './Components/Shared/ServicesPage/Services';
import ContactUs from './Components/Shared/ContactUs/ContactUs';
import ServicesMobile from './Components/Shared/ServiceMobile/ServiceMobile';
import Join from './Components/Shared/Join/Join';
import Blog from './Components/Shared/Blog/Blog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductPortfolioPage from './Components/Shared/OurPortfolio/ProductPortfolioPage';
import ProductPortfolio from './Components/Shared/OurPortfolio/ProductPortfolio';
import JoinOurTeam from './Components/Shared/Join/JoinOurTeam';
import OurPartner from './Components/Shared/OurPartners/OurPartner';
import OurProducts from './Components/Shared/OurProducts/OurProducts';
import Quote from './Components/Shared/Quote/Quote';
import { useEffect } from 'react';
import gsap from 'gsap';
import DigitalMarketing from './Components/Shared/DigitalMarketing/DigitalMarketing';
import Iotsolutions from './Components/Shared/Iotsolutions/Iotsolutions';
import ViewCTODetails from './Components/ViewCTODertails';
import ScrollToTop from './utils/ScrollToTop';
import { ThemeProvider } from './Contaxt/ThemeProvider';
import BlogById from './Components/BlogById';
import ServicesDetails from './Components/Shared/ServicesPage/ServiceDetails';
import MetaPixel from './utils/MetaPixel';
import Gamezone from './Components/Common/Gamezone';

function App() {

  useEffect(() => {
    const mouseMoveHandler = (e) => {

      gsap.to('.cursor', {
        duration: 1,
        x: e.clientX,
        y: e.clientY,
        ease: 'back.out',
      });
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <div className="App">
      <div className="cursor"

      ></div>

      <ThemeProvider>
        <ToastContainer />
        <BrowserRouter>
          {/* ✅ Meta Pixel Tracker */}
          <MetaPixel />
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/portfolio" element={<ProductPortfolio />} />
            <Route exact path="/contact-us" element={<ContactUs />} />
            <Route exact path="/service-mobile-app" element={<ServicesMobile />} />
            <Route exact path="/jointeam" element={<Join />} />
            <Route exact path="/blog" element={<Blog />} />
            {/* <Route exact path="/blog/:id" element={<BlogById />} /> */}
            <Route exact path="/blog/:slug" element={<BlogById />} />
            <Route exact path="/privacy-policy" element={<PrivacyPolicyBanner />} />
            <Route exact path="/terms-conditions" element={<TermsConditionsPage />} />
            <Route exact path="/product-portfolio" element={<ProductPortfolioPage />} />
            <Route exact path="/join-our-team" element={<JoinOurTeam />} />
            <Route exact path="/our-partner" element={<OurPartner />} />
            <Route exact path="/our-products" element={<OurProducts />} />
            <Route exact path="/quote" element={<Quote />} />
            <Route exact path="/digital-marketing" element={<DigitalMarketing />} />
            <Route exact path="/iot-solution" element={<Iotsolutions />} />
            <Route exact path="/view-cto-details" element={<ViewCTODetails />} />
            <Route exact path="/services-details/:slug" element={<ServicesDetails />} />
            <Route exact path="/fun-zone" element={<Gamezone/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
