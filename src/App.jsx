import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Integrations from './components/Integrations';
import InteractiveStudio from './components/InteractiveStudio';
import HowItWorks from './components/HowItWorks';
import FeatureShowcase from './components/FeatureShowcase';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

export default function App() {
  const [authModal, setAuthModal] = useState({ isOpen: false, mode: 'signup' });

  const handleOpenAuthModal = (mode = 'signup') => {
    setAuthModal({ isOpen: true, mode });
  };

  const handleCloseAuthModal = () => {
    setAuthModal({ isOpen: false, mode: 'signup' });
  };

  return (
    <div className="app-main-wrapper">
      {/* Navbar Header */}
      <Navbar onOpenAuthModal={handleOpenAuthModal} />

      {/* Hero Section */}
      <Hero onOpenAuthModal={handleOpenAuthModal} />

      {/* Feature Bento Grid */}
      <FeatureGrid />

      {/* App Integrations */}
      <Integrations />

      {/* Interactive AI Studio Sandbox */}
      <InteractiveStudio />

      {/* How It Works 3-Step Process */}
      <HowItWorks />

      {/* Deep-Dive Feature Showcase */}
      <FeatureShowcase />

      {/* Pricing Matrix */}
      <Pricing onOpenAuthModal={handleOpenAuthModal} />

      {/* Social Proof & Reviews */}
      <Testimonials />

      {/* Searchable FAQ Accordion */}
      <FAQ />

      {/* Glowing Call to Action */}
      <CallToAction onOpenAuthModal={handleOpenAuthModal} />

      {/* Footer */}
      <Footer />

      {/* Signup / Login Modal */}
      <AuthModal 
        isOpen={authModal.isOpen} 
        mode={authModal.mode} 
        onClose={handleCloseAuthModal} 
      />
    </div>
  );
}
