import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CallToAction({ onOpenAuthModal }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.7 }
    });
  };

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-glow-backdrop"></div>
          
          <div className="cta-content">
            <div className="cta-badge">
              <Sparkles size={14} />
              <span>Ready to Scale Your Output?</span>
            </div>

            <h2 className="cta-title">Work Smarter With Avento AI Today</h2>
            <p className="cta-subtitle">
              Join 10,000+ teams and creators building faster content, writing clean code, and automating workflows.
            </p>

            {submitted ? (
              <div className="cta-success-box">
                <CheckCircle2 size={24} className="text-green" />
                <div>
                  <h4>You're on the priority list!</h4>
                  <p>Check your email inbox ({email}) to activate your 14-day free trial.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cta-form">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your work email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="cta-input"
                />
                <button type="submit" className="btn btn-primary btn-glow cta-submit-btn">
                  Start 14-Day Free Trial
                  <ArrowRight size={16} />
                </button>
              </form>
            )}

            <div className="cta-guarantees">
              <span>✨ No credit card required</span>
              <span>⚡ 2-minute setup</span>
              <span>🔒 SOC2 Type II Certified</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-section {
          padding: 60px 0 90px 0;
        }

        .cta-banner-card {
          position: relative;
          background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #0F172A 100%);
          border-radius: var(--radius-lg);
          padding: 70px 40px;
          text-align: center;
          color: #FFFFFF;
          overflow: hidden;
          box-shadow: 0 25px 70px rgba(124, 58, 237, 0.25);
          border: 1px solid rgba(139, 92, 246, 0.4);
        }

        .cta-glow-backdrop {
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 500px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.2) 60%, transparent 80%);
          filter: blur(80px);
          pointer-events: none;
        }

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 680px;
          margin: 0 auto;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          padding: 6px 16px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          color: #E9D5FF;
          margin-bottom: 20px;
        }

        .cta-title {
          font-size: 42px;
          font-weight: 800;
          color: #FFFFFF;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .cta-subtitle {
          font-size: 17px;
          color: #CBD5E1;
          line-height: 1.6;
          margin-bottom: 36px;
        }

        .cta-form {
          display: flex;
          gap: 12px;
          max-width: 540px;
          margin: 0 auto 28px auto;
        }

        .cta-input {
          flex: 1;
          padding: 14px 20px;
          border-radius: var(--radius-full);
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          color: #FFFFFF;
          font-size: 15px;
          outline: none;
        }

        .cta-input::placeholder {
          color: #94A3B8;
        }

        .cta-input:focus {
          border-color: #A855F7;
          background: rgba(255, 255, 255, 0.14);
        }

        .cta-submit-btn {
          padding: 14px 28px;
          font-size: 15px;
        }

        .cta-success-box {
          background: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 16px;
          padding: 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          text-align: left;
          margin-bottom: 24px;
        }

        .cta-success-box h4 {
          font-size: 16px;
          color: #34D399;
        }

        .cta-success-box p {
          font-size: 13px;
          color: #E2E8F0;
        }

        .cta-guarantees {
          display: flex;
          justify-content: center;
          gap: 24px;
          font-size: 13px;
          color: #94A3B8;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .cta-banner-card { padding: 40px 20px; }
          .cta-title { font-size: 30px; }
          .cta-form { flex-direction: column; }
          .cta-guarantees { flex-direction: column; gap: 8px; }
        }
      `}</style>
    </section>
  );
}
