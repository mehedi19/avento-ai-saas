import React, { useState } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AuthModal({ isOpen, mode, onClose }) {
  const [authMode, setAuthMode] = useState(mode || 'signup');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="glass-card modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-logo-icon">
            <Sparkles size={22} />
          </div>
          <h3>{authMode === 'signup' ? 'Create Your Free Account' : 'Welcome Back to Avento AI'}</h3>
          <p>{authMode === 'signup' ? 'Start your 14-day free trial with 5,000 complimentary AI tokens.' : 'Log in to manage your workspaces, models, and custom workflows.'}</p>
        </div>

        {submitted ? (
          <div className="modal-success-state">
            <div className="success-icon-badge">✨</div>
            <h4>Welcome to Avento AI!</h4>
            <p>We sent an activation link to <strong>{email}</strong>. Click the link to launch your workspace.</p>
            <button onClick={onClose} className="btn btn-primary w-full mt-4">
              Go to Workspace Dashboard
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="modal-form">
            <button type="button" className="btn btn-secondary social-auth-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              Continue with GitHub
            </button>

            <div className="modal-divider"><span>or continue with email</span></div>

            <div className="form-group">
              <label>Work Email</label>
              <input 
                type="email" 
                required 
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                required 
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
            </div>

            <button type="submit" className="btn btn-primary btn-glow w-full modal-submit-btn">
              {authMode === 'signup' ? 'Get Started Free' : 'Log In to Account'}
              <ArrowRight size={16} />
            </button>

            <div className="modal-footer-switch">
              {authMode === 'signup' ? (
                <span>Already have an account? <button type="button" onClick={() => setAuthMode('login')} className="switch-link">Log in</button></span>
              ) : (
                <span>Don't have an account? <button type="button" onClick={() => setAuthMode('signup')} className="switch-link">Sign up free</button></span>
              )}
            </div>
          </form>
        )}
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }

        .modal-container {
          width: 100%;
          max-width: 440px;
          padding: 36px;
          position: relative;
          background: #FFFFFF;
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 25px 60px rgba(124, 58, 237, 0.25);
          animation: scaleUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }

        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          color: var(--text-muted);
          padding: 6px;
          border-radius: 50%;
          transition: background 0.2s ease;
        }

        .modal-close-btn:hover {
          background: #F1F5F9;
          color: var(--text-main);
        }

        .modal-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .modal-logo-icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: linear-gradient(135deg, #7C3AED 0%, #A855F7 100%);
          color: #FFF;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.3);
        }

        .modal-header h3 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .modal-header p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .social-auth-btn {
          width: 100%;
          padding: 12px;
          font-size: 14px;
          margin-bottom: 18px;
        }

        .modal-divider {
          display: flex;
          align-items: center;
          text-align: center;
          margin-bottom: 18px;
          color: var(--text-light);
          font-size: 12px;
        }

        .modal-divider::before, .modal-divider::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid var(--border-light);
        }

        .modal-divider span {
          padding: 0 10px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-main);
        }

        .form-input {
          padding: 12px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          font-size: 14px;
          outline: none;
        }

        .form-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
        }

        .modal-submit-btn {
          padding: 14px;
          margin-top: 8px;
          margin-bottom: 20px;
        }

        .modal-footer-switch {
          text-align: center;
          font-size: 13px;
          color: var(--text-muted);
        }

        .switch-link {
          color: var(--primary);
          font-weight: 700;
          text-decoration: underline;
        }

        .modal-success-state {
          text-align: center;
          padding: 10px 0;
        }

        .success-icon-badge {
          font-size: 40px;
          margin-bottom: 12px;
        }

        .mt-4 { margin-top: 16px; }
      `}</style>
    </div>
  );
}
