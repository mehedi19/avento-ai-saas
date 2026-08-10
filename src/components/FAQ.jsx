import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'What is Avento AI and how does it work?',
      a: 'Avento AI is an all-in-one multi-modal AI platform designed for modern teams. It connects foundational LLM models (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro) into a single collaborative workspace for generating high-converting copy, clean code snippets, and automated workflow triggers.'
    },
    {
      q: 'Can I try Avento AI for free without entering a credit card?',
      a: 'Yes! Our Free / Hobby tier gives you 5,000 tokens per month with zero credit card required. You can upgrade to Starter or Pro at any time for unlimited team collaboration and advanced models.'
    },
    {
      q: 'Which AI models are supported on Avento AI?',
      a: 'Avento AI natively supports OpenAI GPT-4o, Anthropic Claude 3.5 Sonnet, Google Gemini 1.5 Pro, and custom fine-tuned models. You can easily switch models per prompt or let our intelligent router pick the best model for your task.'
    },
    {
      q: 'How does Avento AI protect our company data & privacy?',
      a: 'We enforce strict zero data retention policy. Your prompt inputs and enterprise data are never stored or used to train public foundation models. All data is encrypted using AES-256 at rest and TLS 1.3 in transit with SOC2 Type II compliance.'
    },
    {
      q: 'Can I cancel or change my subscription plan anytime?',
      a: 'Absolutely. You can upgrade, downgrade, or cancel your subscription plan directly from your billing dashboard with a single click. Upgrades take effect immediately, while cancellations remain active until the end of your billing cycle.'
    },
    {
      q: 'Do you support custom webhooks and API integrations?',
      a: 'Yes! Pro and Enterprise plans include visual node-based workflow builders and REST/GraphQL API webhooks so you can trigger AI steps from Slack, Notion, GitHub, or custom ERP systems.'
    },
    {
      q: 'How does team seat licensing work for annual billing?',
      a: 'Annual billing offers a 20% discount across all plans. You can add or remove team seats as your team grows, and billing will automatically pro-rate based on active team members.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2>Got Questions? We Have Answers</h2>
          <p>
            Everything you need to know about Avento AI features, billing, security, and team collaboration.
          </p>

          {/* Quick FAQ Search Bar */}
          <div className="faq-search-box">
            <Search size={16} className="search-icon" />
            <input 
              type="text"
              placeholder="Search questions (e.g. security, pricing, models)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
            />
          </div>
        </div>

        {/* Accordions */}
        <div className="faq-accordion-list">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`glass-card faq-card ${isOpen ? 'open' : ''}`}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
              >
                <div className="faq-question-row">
                  <h3 className="faq-question">{faq.q}</h3>
                  <div className={`faq-chevron ${isOpen ? 'rotate' : ''}`}>
                    <ChevronDown size={18} />
                  </div>
                </div>
                {isOpen && (
                  <div className="faq-answer-body">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="no-faqs">
              No matching questions found for "{searchQuery}". Try another search term!
            </div>
          )}
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 90px 0;
        }

        .faq-search-box {
          position: relative;
          max-width: 480px;
          margin: 24px auto 0 auto;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }

        .faq-search-input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-light);
          font-size: 14px;
          outline: none;
          background: #FFFFFF;
          box-shadow: var(--shadow-sm);
        }

        .faq-search-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
        }

        .faq-accordion-list {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-card {
          padding: 22px 28px;
          cursor: pointer;
          border-color: rgba(226, 232, 240, 0.9);
          transition: all 0.25s ease;
        }

        .faq-card.open {
          border-color: var(--border-glow);
          box-shadow: var(--shadow-md);
        }

        .faq-question-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .faq-question {
          font-size: 17px;
          font-weight: 700;
          color: var(--text-main);
        }

        .faq-chevron {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #F1F5F9;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, background 0.3s ease;
          flex-shrink: 0;
        }

        .faq-chevron.rotate {
          transform: rotate(180deg);
          background: var(--primary-light);
          color: var(--primary);
        }

        .faq-answer-body {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid rgba(226, 232, 240, 0.8);
          animation: fadeIn 0.3s ease;
        }

        .faq-answer-body p {
          font-size: 15px;
          color: var(--text-muted);
          line-height: 1.65;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .no-faqs {
          text-align: center;
          padding: 40px;
          color: var(--text-muted);
        }
      `}</style>
    </section>
  );
}
