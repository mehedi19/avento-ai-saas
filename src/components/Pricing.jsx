import React, { useState } from 'react';
import { Check, Sparkles, Zap, ArrowRight, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Pricing({ onOpenAuthModal }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const handlePlanClick = (planName) => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    onOpenAuthModal('signup');
  };

  const plans = [
    {
      name: 'Free / Hobby',
      desc: 'For individuals exploring multi-modal AI generation.',
      priceMonthly: 0,
      priceYearly: 0,
      badge: 'Free Forever',
      popular: false,
      features: [
        '5,000 AI tokens per month',
        'Standard GPT-3.5 & Claude Haiku',
        'Single user workspace',
        'Basic text & code generation',
        'Community Discord support'
      ],
      buttonText: 'Get Started Free',
      buttonStyle: 'btn-secondary'
    },
    {
      name: 'Starter / Creator',
      desc: 'For power creators & freelancers scaling content.',
      priceMonthly: 19,
      priceYearly: 15,
      badge: 'Save $48/yr',
      popular: false,
      features: [
        '50,000 AI tokens per month',
        'Access to GPT-4o & Claude 3.5 Sonnet',
        'Up to 3 team members',
        'Tone of voice customization',
        'Standard API webhooks',
        'Email & chat support'
      ],
      buttonText: 'Start 14-Day Free Trial',
      buttonStyle: 'btn-secondary'
    },
    {
      name: 'Pro / Business',
      desc: 'For growing teams automating full content & code pipelines.',
      priceMonthly: 49,
      priceYearly: 39,
      badge: '🔥 MOST POPULAR',
      popular: true,
      features: [
        'Unlimited AI tokens per month',
        'All AI models (GPT-4o, Claude, Gemini Pro)',
        'Up to 10 team seats included',
        'Real-time multiplayer studio',
        'Custom node-based workflow builder',
        'Priority sub-second API access',
        'Dedicated success manager'
      ],
      buttonText: 'Claim Pro Plan',
      buttonStyle: 'btn-primary btn-glow'
    },
    {
      name: 'Enterprise',
      desc: 'For large organizations needing custom fine-tuning & SLA.',
      priceMonthly: 99,
      priceYearly: 79,
      badge: 'Custom Limits',
      popular: false,
      features: [
        'Custom token & seat volume',
        'Private fine-tuned LLM deployment',
        'Zero data retention SLA guarantee',
        'SAML Single Sign-On (SSO) & Audit logs',
        'Custom ERP / CRM integrations',
        '24/7 Phone & Slack channel support'
      ],
      buttonText: 'Contact Sales',
      buttonStyle: 'btn-secondary'
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <Zap size={14} />
            <span>Simple, Transparent Pricing</span>
          </div>
          <h2>Pick the Right Plan for Your Team</h2>
          <p>
            No hidden fees. Switch or cancel your subscription at any time with 1-click.
          </p>

          {/* Toggle Switch */}
          <div className="pricing-toggle-box">
            <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>Monthly</span>
            <button 
              className={`toggle-switch ${isAnnual ? 'annual' : ''}`}
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label="Toggle Pricing Period"
            >
              <div className="toggle-handle"></div>
            </button>
            <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>
              Yearly <span className="discount-badge">Save 20% OFF</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan, idx) => {
            const price = isAnnual ? plan.priceYearly : plan.priceMonthly;
            return (
              <div 
                key={idx} 
                className={`glass-card pricing-card ${plan.popular ? 'popular' : ''}`}
              >
                {plan.popular && (
                  <div className="popular-badge">
                    <Sparkles size={12} />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-desc">{plan.desc}</p>
                </div>

                <div className="plan-price-row">
                  <span className="price-currency">$</span>
                  <span className="price-number">{price}</span>
                  <span className="price-period">/ month</span>
                </div>
                {isAnnual && <div className="billed-annually">Billed annually (${price * 12}/yr)</div>}

                <button 
                  onClick={() => handlePlanClick(plan.name)}
                  className={`btn ${plan.buttonStyle} plan-btn`}
                >
                  {plan.buttonText}
                  <ArrowRight size={16} />
                </button>

                <div className="features-divider">What's included:</div>

                <ul className="plan-features">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <Check size={16} className="text-primary check-svg" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .pricing-section {
          padding: 90px 0;
          position: relative;
        }

        .pricing-toggle-box {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          margin-top: 28px;
        }

        .toggle-label {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-muted);
        }

        .toggle-label.active {
          color: var(--text-main);
        }

        .discount-badge {
          background: rgba(124, 58, 237, 0.1);
          color: var(--primary);
          font-size: 12px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 999px;
          margin-left: 4px;
        }

        .toggle-switch {
          width: 54px;
          height: 30px;
          border-radius: 999px;
          background: #CBD5E1;
          padding: 3px;
          position: relative;
          transition: background 0.3s ease;
        }

        .toggle-switch.annual {
          background: var(--primary);
        }

        .toggle-handle {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #FFFFFF;
          transition: transform 0.3s ease;
          box-shadow: 0 2px 6px rgba(0,0,0,0.15);
        }

        .toggle-switch.annual .toggle-handle {
          transform: translateX(24px);
        }

        /* Pricing Cards Grid */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          align-items: stretch;
        }

        .pricing-card {
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          position: relative;
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          transition: all 0.3s ease;
        }

        .pricing-card.popular {
          border: 2px solid var(--primary);
          box-shadow: 0 20px 50px rgba(124, 58, 237, 0.18);
          transform: scale(1.03);
          z-index: 2;
        }

        .popular-badge {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #7C3AED 0%, #EC4899 100%);
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 14px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          gap: 6px;
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
        }

        .plan-name {
          font-size: 20px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .plan-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
          min-height: 40px;
          margin-bottom: 20px;
        }

        .plan-price-row {
          display: flex;
          align-items: baseline;
          margin-bottom: 4px;
        }

        .price-currency {
          font-size: 22px;
          font-weight: 800;
          color: var(--text-main);
          margin-right: 2px;
        }

        .price-number {
          font-family: var(--font-heading);
          font-size: 42px;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: -0.03em;
        }

        .price-period {
          font-size: 14px;
          color: var(--text-muted);
          margin-left: 4px;
        }

        .billed-annually {
          font-size: 12px;
          color: var(--text-light);
          margin-bottom: 24px;
        }

        .plan-btn {
          width: 100%;
          padding: 12px;
          margin-bottom: 28px;
          font-size: 14px;
        }

        .features-divider {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 16px;
          padding-top: 16px;
          border-top: 1px solid var(--border-light);
        }

        .plan-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-grow: 1;
        }

        .plan-features li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: var(--text-main);
          line-height: 1.4;
        }

        .check-svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 1100px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr); }
          .pricing-card.popular { transform: none; }
        }

        @media (max-width: 640px) {
          .pricing-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
