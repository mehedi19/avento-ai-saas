import React from 'react';
import { Sparkles, Disc as Discord, Globe, Share2, MessageSquare, Send } from 'lucide-react';

export default function Footer() {
  const columns = [
    {
      title: 'Product',
      links: [
        { label: 'AI Content Studio', href: '#features' },
        { label: 'Code Generator', href: '#features' },
        { label: 'Multi-Modal Assistant', href: '#features' },
        { label: 'Workflow Automations', href: '#how-it-works' },
        { label: 'Integrations', href: '#integrations' },
        { label: 'Changelog v2.4', href: '#' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { label: 'For Marketing Teams', href: '#' },
        { label: 'For Software Engineers', href: '#' },
        { label: 'For Product Managers', href: '#' },
        { label: 'For Founders & Agencies', href: '#' },
        { label: 'Enterprise Security', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'API Reference', href: '#' },
        { label: 'Prompt Engineering Guide', href: '#' },
        { label: 'Community Forum', href: '#' },
        { label: 'System Status 🟢', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About Avento AI', href: '#' },
        { label: 'Careers (We\'re hiring!)', href: '#' },
        { label: 'Press Kit', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'Privacy Policy', href: '#' }
      ]
    }
  ];

  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <a href="#" className="brand-logo footer-logo">
              <div className="logo-icon">
                <Sparkles size={20} />
              </div>
              <span className="logo-text">Avento <span className="logo-badge">AI</span></span>
            </a>
            <p className="footer-brand-desc">
              The next-generation AI platform for content creation, code generation, and automated team workflows.
            </p>
            
            <div className="social-links">
              <a href="#" aria-label="X / Twitter" className="social-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" aria-label="GitHub" className="social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="#" aria-label="Discord" className="social-btn"><Discord size={18} /></a>
              <a href="#" aria-label="Globe" className="social-btn"><Globe size={18} /></a>
              <a href="#" aria-label="Share" className="social-btn"><Share2 size={18} /></a>
            </div>
          </div>

          {/* Nav Columns */}
          {columns.map((col, idx) => (
            <div key={idx} className="footer-nav-col">
              <h4 className="footer-col-title">{col.title}</h4>
              <ul className="footer-links">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a href={link.href} className="footer-link">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright">
            © {new Date().getFullYear()} Avento AI Inc. All rights reserved. Built for speed and scale.
          </div>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <a href="#">Security Statement</a>
            <span>•</span>
            <a href="#">Cookie Preferences</a>
          </div>
        </div>

        {/* Huge Watermark Typography Background Matching Image */}
        <div className="footer-watermark">
          AVENTO AI
        </div>
      </div>

      <style>{`
        .footer-section {
          background: #FFFFFF;
          border-top: 1px solid var(--border-light);
          padding: 80px 0 40px 0;
          position: relative;
          overflow: hidden;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr repeat(4, 1fr);
          gap: 40px;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .footer-brand-col {
          max-width: 320px;
        }

        .footer-logo {
          margin-bottom: 16px;
        }

        .footer-brand-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .social-links {
          display: flex;
          gap: 10px;
        }

        .social-btn {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #F1F5F9;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          background: var(--primary);
          color: #FFFFFF;
          transform: translateY(-2px);
        }

        .footer-col-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 20px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-link {
          font-size: 14px;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--primary);
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 32px;
          border-top: 1px solid var(--border-light);
          font-size: 13px;
          color: var(--text-muted);
          position: relative;
          z-index: 2;
          flex-wrap: wrap;
          gap: 16px;
        }

        .legal-links {
          display: flex;
          gap: 10px;
        }

        .legal-links a:hover {
          color: var(--primary);
        }

        .footer-watermark {
          font-family: var(--font-heading);
          font-size: 160px;
          font-weight: 900;
          color: rgba(226, 232, 240, 0.35);
          letter-spacing: 0.1em;
          text-align: center;
          line-height: 1;
          user-select: none;
          pointer-events: none;
          margin-top: 40px;
          margin-bottom: -40px;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .footer-watermark { font-size: 90px; }
        }

        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom-bar { flex-direction: column; text-align: center; }
          .footer-watermark { font-size: 50px; margin-top: 20px; }
        }
      `}</style>
    </footer>
  );
}
