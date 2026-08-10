import React from 'react';
import { Sliders, Cpu, Send, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Connect & Select Model',
      description: 'Choose your preferred AI foundation model (GPT-4o, Claude 3.5, Gemini Pro) and connect your team data sources.',
      icon: <Cpu size={24} />,
      detail: '1-click API integration'
    },
    {
      num: '02',
      title: 'Customize Prompts & Triggers',
      description: 'Set custom brand tone guidelines, automated trigger events, webhook responses, and multiplayer role permissions.',
      icon: <Sliders size={24} />,
      detail: 'Visual drag-and-drop workflow'
    },
    {
      num: '03',
      title: 'Publish, Sync & Automate',
      description: 'Stream AI output directly into Notion, Slack, CMS, GitHub, or custom database endpoints automatically.',
      icon: <Send size={24} />,
      detail: 'Automated 24/7 background sync'
    }
  ];

  return (
    <section id="how-it-works" className="how-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <span>Simple 3-Step Process</span>
          </div>
          <h2>How Avento AI Supercharges Your Pipeline</h2>
          <p>
            Get up and running in under 3 minutes with zero complex setup required.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="glass-card step-card">
              <div className="step-number-badge">{step.num}</div>
              <div className="step-icon-box">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
              <div className="step-footer-detail">
                <span>{step.detail}</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .how-section {
          padding: 80px 0;
          position: relative;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .step-card {
          padding: 32px;
          position: relative;
          display: flex;
          flex-direction: column;
          border-color: rgba(226, 232, 240, 0.9);
        }

        .step-number-badge {
          position: absolute;
          top: 24px;
          right: 24px;
          font-family: var(--font-heading);
          font-size: 36px;
          font-weight: 800;
          color: rgba(139, 92, 246, 0.15);
        }

        .step-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }

        .step-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .step-desc {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .step-footer-detail {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary);
        }

        @media (max-width: 1024px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .steps-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
