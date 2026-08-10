import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenAuthModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Interactive Studio', href: '#studio' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo">
          <div className="logo-icon">
            <Sparkles className="sparkle-icon" size={20} />
          </div>
          <span className="logo-text">Avento <span className="logo-badge">AI</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="navbar-actions">
          <button onClick={() => onOpenAuthModal('login')} className="btn btn-secondary nav-btn-login">
            Log In
          </button>
          <button onClick={() => onOpenAuthModal('signup')} className="btn btn-primary nav-btn-cta">
            Get Started
            <ArrowRight size={16} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-content">
            <nav className="mobile-nav">
              {navLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mobile-drawer-actions">
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenAuthModal('login'); }}
                className="btn btn-secondary w-full"
              >
                Log In
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); onOpenAuthModal('signup'); }}
                className="btn btn-primary w-full"
              >
                Get Started Free
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 18px 0;
          transition: all 0.3s ease;
        }

        .navbar-header.scrolled {
          padding: 12px 0;
          background: rgba(255, 255, 255, 0.88);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-heading);
          font-size: 22px;
          font-weight: 800;
          color: var(--text-main);
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #7C3AED 0%, #A855F7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
        }

        .logo-text {
          letter-spacing: -0.03em;
        }

        .logo-badge {
          font-size: 11px;
          background: rgba(124, 58, 237, 0.1);
          color: var(--primary);
          padding: 2px 6px;
          border-radius: 6px;
          vertical-align: middle;
          margin-left: 2px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 32px;
        }

        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          position: relative;
        }

        .nav-link:hover {
          color: var(--primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background: var(--primary);
          border-radius: 2px;
          transition: width 0.2s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .nav-btn-login {
          padding: 8px 18px;
          font-size: 14px;
        }

        .nav-btn-cta {
          padding: 10px 20px;
          font-size: 14px;
        }

        .mobile-menu-toggle {
          display: none;
          padding: 8px;
          color: var(--text-main);
          border-radius: 8px;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 68px;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-light);
          padding: 24px 16px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .mobile-nav-link {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-main);
          padding: 8px 0;
          border-bottom: 1px solid rgba(226, 232, 240, 0.4);
        }

        .mobile-drawer-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .w-full {
          width: 100%;
        }

        @media (max-width: 1024px) {
          .desktop-nav {
            display: none;
          }
          .nav-btn-login {
            display: none;
          }
          .mobile-menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
