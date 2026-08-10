import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, Users, Sparkles, Layers, ArrowRight } from 'lucide-react';

export default function FeatureShowcase() {
  return (
    <section className="showcase-section">
      <div className="container">
        {/* Showcase Item 1: Real time collaboration */}
        <div className="showcase-item">
          <div className="showcase-content">
            <div className="badge-pill">
              <Sparkles size={14} />
              <span>Real-Time Multiplayer</span>
            </div>
            <h2>Create Stunning Content Together in Real Time</h2>
            <p>
              Invite writers, developers, and product managers into a shared canvas. Leave inline comments, suggest edits, and generate multi-modal drafts simultaneously.
            </p>
            <ul className="showcase-list">
              <li><CheckCircle2 size={18} className="text-primary" /> Live multiplayer cursors and activity feeds</li>
              <li><CheckCircle2 size={18} className="text-primary" /> Version control with instant draft rollbacks</li>
              <li><CheckCircle2 size={18} className="text-primary" /> Shared team prompt library and brand guidelines</li>
            </ul>
            <a href="#pricing" className="btn btn-secondary">
              Explore Team Features
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="showcase-visual glass-card">
            <div className="visual-header">
              <span className="visual-title">🎨 Brand Campaign Studio</span>
              <span className="live-pill">3 Active Editors</span>
            </div>
            <div className="visual-content-box">
              <div className="editor-cursor cursor-1">
                <span className="cursor-tag tag-purple">Alex (Marketing)</span>
                <p className="cursor-text">"Let’s generate 3 variation options for the Facebook ad headline..."</p>
              </div>
              <div className="editor-cursor cursor-2">
                <span className="cursor-tag tag-pink">Sarah (Design)</span>
                <p className="cursor-text font-bold">✨ Generated Option A: "Transform your team’s output by 10x with Avento AI."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Showcase Item 2: Enterprise Security (Zig Zag Reverse) */}
        <div className="showcase-item reverse">
          <div className="showcase-content">
            <div className="badge-pill">
              <ShieldCheck size={14} />
              <span>Bank-Grade Security</span>
            </div>
            <h2>Built for Security, Built for Scale</h2>
            <p>
              Your enterprise data is protected by strict zero-retention policies. We never use your proprietary inputs to train foundational AI models.
            </p>
            <ul className="showcase-list">
              <li><CheckCircle2 size={18} className="text-primary" /> SOC2 Type II & ISO 27001 Certified</li>
              <li><CheckCircle2 size={18} className="text-primary" /> End-to-end AES-256 data encryption at rest & in transit</li>
              <li><CheckCircle2 size={18} className="text-primary" /> SAML Single Sign-On (SSO) & Granular Role Controls</li>
            </ul>
            <a href="#pricing" className="btn btn-secondary">
              Read Security Whitepaper
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="showcase-visual security-visual">
            <img 
              src="/images/security_lock.jpg" 
              alt="Avento AI Enterprise Security Padlock" 
              className="security-img"
            />
          </div>
        </div>
      </div>

      <style>{`
        .showcase-section {
          padding: 80px 0;
        }

        .showcase-item {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          margin-bottom: 100px;
        }

        .showcase-item:last-child {
          margin-bottom: 0;
        }

        .showcase-item.reverse {
          grid-template-columns: 1fr 1fr;
        }

        .showcase-item.reverse .showcase-content {
          order: 2;
        }

        .showcase-item.reverse .showcase-visual {
          order: 1;
        }

        .showcase-content h2 {
          font-size: 36px;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .showcase-content p {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .showcase-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 32px;
        }

        .showcase-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-main);
        }

        .showcase-visual {
          padding: 24px;
          border-color: rgba(139, 92, 246, 0.2);
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.06);
        }

        .visual-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 20px;
        }

        .visual-title {
          font-weight: 700;
          font-size: 15px;
        }

        .live-pill {
          font-size: 11px;
          font-weight: 700;
          color: #10B981;
          background: rgba(16, 185, 129, 0.1);
          padding: 4px 10px;
          border-radius: 999px;
        }

        .visual-content-box {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .editor-cursor {
          position: relative;
          padding: 14px;
          border-radius: 12px;
          background: #F8FAFC;
          border: 1px solid var(--border-light);
        }

        .cursor-tag {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
          color: #FFF;
          margin-bottom: 6px;
          display: inline-block;
        }

        .tag-purple { background: #7C3AED; }
        .tag-pink { background: #EC4899; }

        .cursor-text {
          font-size: 13px;
          color: var(--text-main);
        }

        .font-bold { font-weight: 600; color: var(--primary); }

        .security-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: transparent;
          box-shadow: none;
        }

        .security-img {
          width: 100%;
          max-width: 440px;
          border-radius: var(--radius-lg);
          box-shadow: 0 20px 60px rgba(124, 58, 237, 0.2);
        }

        @media (max-width: 1024px) {
          .showcase-item, .showcase-item.reverse {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .showcase-item.reverse .showcase-content { order: 1; }
          .showcase-item.reverse .showcase-visual { order: 2; }
          .showcase-content h2 { font-size: 28px; }
        }
      `}</style>
    </section>
  );
}
