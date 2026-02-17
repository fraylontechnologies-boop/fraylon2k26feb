import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import Careers from './pages/Careers';

import Contact from './pages/Contact';
import About from './pages/About';
import Leadership from './pages/Leadership';
import NewsMedia from './pages/NewsMedia';
import Partners from './pages/Partners';
import Solutions from './pages/Solutions';
import ServiceDetail from './pages/ServiceDetail';
import WordpressPage from './pages/services/WordpressPage';
import WebflowPage from './pages/services/WebflowPage';
import SoftwareDevPage from './pages/services/SoftwareDevPage';
import WixPage from './pages/services/WixPage';
import ShopifyPage from './pages/services/ShopifyPage';
import MagentoPage from './pages/services/MagentoPage';
import BubblePage from './pages/services/BubblePage';
import FramerPage from './pages/services/FramerPage';
import DoraPage from './pages/services/DoraPage';
import StudioAiPage from './pages/services/StudioAiPage';
import DigitalTransformationPage from './pages/services/DigitalTransformationPage';
import StaffAugmentationPage from './pages/services/StaffAugmentationPage';
import TechConsultingPage from './pages/services/TechConsultingPage';
import MaintenancePage from './pages/services/MaintenancePage';
import WebAppDevPage from './pages/services/WebAppDevPage';
import CustomCmsPage from './pages/services/CustomCmsPage';
import PortalsPage from './pages/services/PortalsPage';
import EcommercePage from './pages/services/EcommercePage';
import AiIntegrationPage from './pages/services/AiIntegrationPage';
import AiAgentsPage from './pages/services/AiAgentsPage';
import NlpPage from './pages/services/NlpPage';
import UiUxPage from './pages/services/UiUxPage';
import BrandingPage from './pages/services/BrandingPage';
import GraphicDesignPage from './pages/services/GraphicDesignPage';
import NativeAppPage from './pages/services/NativeAppPage';
import HybridAppPage from './pages/services/HybridAppPage';
import InboundMarketingPage from './pages/services/InboundMarketingPage';
import SeoPage from './pages/services/SeoPage';
import SocialMediaPage from './pages/services/SocialMediaPage';
import MvpPage from './pages/services/MvpPage';
import PrototypingPage from './pages/services/PrototypingPage';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <>
      <SmoothScroll />
      <div className="App">
        <Navbar />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/insights/:id" element={<InsightDetail />} />
              <Route path="/careers" element={<Careers />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/news" element={<NewsMedia />} />
              <Route path="/partners" element={<Partners />} />

              <Route path="/solutions" element={<Solutions />} />
              <Route path="/solutions/:type" element={<Solutions />} />

              {/* Individual Service Pages */}
              <Route path="/services/wordpress" element={<WordpressPage />} />
              <Route path="/services/webflow" element={<WebflowPage />} />
              <Route path="/services/software-dev" element={<SoftwareDevPage />} />
              <Route path="/services/wix" element={<WixPage />} />
              <Route path="/services/shopify" element={<ShopifyPage />} />
              <Route path="/services/magento" element={<MagentoPage />} />
              <Route path="/services/bubble" element={<BubblePage />} />
              <Route path="/services/framer" element={<FramerPage />} />
              <Route path="/services/dora" element={<DoraPage />} />
              <Route path="/services/studio-ai" element={<StudioAiPage />} />
              <Route path="/services/digital-transformation" element={<DigitalTransformationPage />} />
              <Route path="/services/staff-augmentation" element={<StaffAugmentationPage />} />
              <Route path="/services/tech-consulting" element={<TechConsultingPage />} />
              <Route path="/services/maintenance" element={<MaintenancePage />} />
              <Route path="/services/web-app-dev" element={<WebAppDevPage />} />
              <Route path="/services/custom-cms" element={<CustomCmsPage />} />
              <Route path="/services/portals" element={<PortalsPage />} />
              <Route path="/services/ecommerce" element={<EcommercePage />} />
              <Route path="/services/ai-integration" element={<AiIntegrationPage />} />
              <Route path="/services/ai-agents" element={<AiAgentsPage />} />
              <Route path="/services/nlp" element={<NlpPage />} />
              <Route path="/services/ui-ux" element={<UiUxPage />} />
              <Route path="/services/branding" element={<BrandingPage />} />
              <Route path="/services/graphic-design" element={<GraphicDesignPage />} />
              <Route path="/services/native-app" element={<NativeAppPage />} />
              <Route path="/services/hybrid-app" element={<HybridAppPage />} />
              <Route path="/services/inbound-marketing" element={<InboundMarketingPage />} />
              <Route path="/services/seo" element={<SeoPage />} />
              <Route path="/services/social-media" element={<SocialMediaPage />} />
              <Route path="/services/mvp-development" element={<MvpPage />} />
              <Route path="/services/prototyping" element={<PrototypingPage />} />

              <Route path="/services/:id" element={<ServiceDetail />} />

              <Route path="/projects" element={<Projects />} />
              <Route path="/work/:id" element={<ProjectDetail />} />

              <Route path="/industries" element={<Industries />} />
              <Route path="/ind/:type" element={<Industries />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
      <CookieConsent />
    </>
  );
}

export default App;
