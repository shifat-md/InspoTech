import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Portfolio from './pages/Portfolio';
import CaseStudy from './pages/CaseStudy';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import FAQ from './pages/FAQ';
import Process from './pages/Process';
import PolicyPage from './pages/PolicyPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          {/* Core Navigation Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />

          {/* Resources & Case Studies */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<CaseStudy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/process" element={<Process />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/careers" element={<Careers />} />

          {/* Legal & Policy Pages */}
          <Route path="/privacy-policy" element={<PolicyPage policyKey="privacy-policy" />} />
          <Route path="/terms-of-service" element={<PolicyPage policyKey="terms-of-service" />} />
          <Route path="/cookie-policy" element={<PolicyPage policyKey="cookie-policy" />} />
          <Route path="/refund-policy" element={<PolicyPage policyKey="refund-policy" />} />
          <Route path="/disclaimer" element={<PolicyPage policyKey="disclaimer" />} />
          <Route path="/accessibility" element={<PolicyPage policyKey="accessibility" />} />

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
