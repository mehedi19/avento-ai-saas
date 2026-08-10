import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Play, CheckCircle2, ChevronRight, Zap, ShieldCheck, Users, Bot, Cpu } from 'lucide-react';

export default function Hero({ onOpenAuthModal }) {
  const [selectedModel, setSelectedModel] = useState('GPT-4o Enterprise');
  const [activeTab, setActiveTab] = useState('blog');
  const [promptText, setPromptText] = useState('Generate a high-converting launch copy for a new SaaS workflow product targeting remote teams.');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState('');

  const sampleOutputs = {
    blog: "🚀 **Introducing Avento AI: The Engine Behind Modern Teams**\n\nIn today's fast-moving software ecosystem, manual content updates and fragmented team communication slow down execution. Avento AI unifies multi-modal intelligence, real-time collaboration, and webhook automations into one seamless workspace...",
    code: "```jsx\n// Next.js AI Stream Component\nimport { useCompletion } from 'ai/react';\n\nexport default function AIStudio() {\n  const { completion, complete } = useCompletion();\n  return (\n    <div className='p-6 glass-card'>\n      <button onClick={() => complete('Generate SaaS Flow')}>\n        ⚡ Stream AI Response\n      </button>\n      <p>{completion}</p>\n    </div>\n  );\n}\n```",
    summary: "📊 **Executive Summary: Q3 Performance & AI Efficiency Gains**\n\n- **Output Rate**: +340% increase in published articles.\n- **Cost Efficiency**: Saved 42 hours per creator/month.\n- **Key Takeaway**: Deploying Avento AI reduced workflow bottlenecks across marketing & dev teams by 82%.",
    email: "Subject: Streamline your content pipeline with Avento AI ⚡\n\nHi Alex,\n\nWe noticed your team is scaling content production this quarter. Avento AI helps enterprise teams automate draft generation, code snippets, and review approvals with 10x speed.\n\nWould you be open to a 10-minute demo this Thursday?"
  };

  const handlePresetSelect = (tabKey, prompt) => {
    setActiveTab(tabKey);
    setPromptText(prompt);
    simulateGeneration(tabKey);
  };

  const simulateGeneration = (key = activeTab) => {
    setIsGenerating(true);
    setGeneratedResult('');
    const fullText = sampleOutputs[key];
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setGeneratedResult(fullText.substring(0, currentIndex + 4));
        currentIndex += 4;
      } else {
        setGeneratedResult(fullText);
        setIsGenerating(false);
        clearInterval(interval);
      }
    }, 15);
  };

  useEffect(() => {
    simulateGeneration('blog');
  }, []);

  return (
    <section className="hero-section">
      {/* Background Glows */}
      <div className="glow-orb glow-orb-purple-top"></div>

      <div className="container hero-container">
        {/* Top Badge */}
        <div className="badge-pill">
          <span className="pulse-dot"></span>
          <span>✨ Introducing Avento AI 2.0 — Next-Gen AI Workflows</span>
          <ChevronRight size={14} />
        </div>

        {/* Hero Headlines */}
        <h1 className="hero-title">
          A Powerful <span className="text-purple-gradient">AI Platform</span> for Content & Workflows
        </h1>
        <p className="hero-subtitle">
          Streamline content creation, generate code, automate workflow triggers, and collaborate with your team in real time using industry-leading AI models.
        </p>

        {/* Hero CTA Buttons */}
        <div className="hero-actions">
          <button onClick={() => onOpenAuthModal('signup')} className="btn btn-primary btn-glow hero-btn-main">
            Start Free Trial
            <ArrowRight size={18} />
          </button>
          <a href="#studio" className="btn btn-secondary hero-btn-demo">
            <Play size={16} fill="currentColor" />
            Watch 2-Min Demo
          </a>
        </div>

        {/* Interactive Prompt Box Simulator */}
        <div className="hero-playground glass-card">
          <div className="playground-header">
            <div className="model-selector">
              <Bot size={16} className="text-primary" />
              <select 
                value={selectedModel} 
                onChange={(e) => setSelectedModel(e.target.value)}
                className="model-select"
              >
                <option value="GPT-4o Enterprise">GPT-4o Enterprise (Fastest)</option>
                <option value="Claude 3.5 Sonnet">Claude 3.5 Sonnet (Creative)</option>
                <option value="Gemini 1.5 Pro">Gemini 1.5 Pro (Deep Context)</option>
                <option value="Avento Custom Model">Avento Custom Model v2</option>
              </select>
            </div>

            <div className="prompt-tabs">
              <button 
                className={`prompt-tab ${activeTab === 'blog' ? 'active' : ''}`}
                onClick={() => handlePresetSelect('blog', 'Write a high-converting launch copy for a new SaaS workflow product.')}
              >
                🚀 Blog & Copy
              </button>
              <button 
                className={`prompt-tab ${activeTab === 'code' ? 'active' : ''}`}
                onClick={() => handlePresetSelect('code', 'Generate React Component for AI stream output with glassmorphism.')}
              >
                💻 Code Snippet
              </button>
              <button 
                className={`prompt-tab ${activeTab === 'summary' ? 'active' : ''}`}
                onClick={() => handlePresetSelect('summary', 'Summarize Q3 team performance and cost savings breakdown.')}
              >
                📊 Executive Summary
              </button>
              <button 
                className={`prompt-tab ${activeTab === 'email' ? 'active' : ''}`}
                onClick={() => handlePresetSelect('email', 'Draft a cold outreach email sequence to SaaS founders.')}
              >
                📧 Email Sequence
              </button>
            </div>
          </div>

          <div className="playground-input-row">
            <input 
              type="text" 
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="Ask AI to generate content, write code, or create a workflow..."
              className="prompt-input"
            />
            <button 
              onClick={() => simulateGeneration(activeTab)} 
              disabled={isGenerating}
              className="btn btn-primary prompt-submit-btn"
            >
              {isGenerating ? 'Generating...' : 'Generate AI Output'}
              <Sparkles size={16} />
            </button>
          </div>

          {/* Simulated Streaming Output Window */}
          <div className="playground-output">
            <div className="output-top-bar">
              <span className="output-status">
                <span className="live-badge">LIVE STREAM</span> — {selectedModel}
              </span>
              <span className="output-speed">⚡ 120 tokens/sec</span>
            </div>
            <pre className="output-text">
              {generatedResult}
              <span className="typing-cursor">|</span>
            </pre>
          </div>
        </div>

        {/* Dashboard Showcase Frame with Floating Badges */}
        <div className="hero-dashboard-wrapper">
          <div className="floating-metric metric-1">
            <Zap size={18} className="metric-icon purple" />
            <div>
              <div className="metric-value">10x Faster</div>
              <div className="metric-label">Workflow Execution</div>
            </div>
          </div>

          <div className="floating-metric metric-2">
            <ShieldCheck size={18} className="metric-icon green" />
            <div>
              <div className="metric-value">SOC2 Type II</div>
              <div className="metric-label">Enterprise Security</div>
            </div>
          </div>

          <div className="floating-metric metric-3">
            <Users size={18} className="metric-icon blue" />
            <div>
              <div className="metric-value">10,000+</div>
              <div className="metric-label">Active Creators & Teams</div>
            </div>
          </div>

          <img 
            src="/images/hero_dashboard.jpg" 
            alt="Avento AI SaaS Dashboard Preview" 
            className="hero-dashboard-img"
          />
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 140px;
          padding-bottom: 90px;
          text-align: center;
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-title {
          font-size: 58px;
          font-weight: 800;
          line-height: 1.1;
          max-width: 860px;
          margin-bottom: 20px;
        }

        .hero-subtitle {
          font-size: 19px;
          color: var(--text-muted);
          max-width: 680px;
          line-height: 1.6;
          margin-bottom: 36px;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 56px;
        }

        .hero-btn-main {
          padding: 14px 32px;
          font-size: 16px;
        }

        .hero-btn-demo {
          padding: 14px 28px;
          font-size: 16px;
        }

        /* Playground Box */
        .hero-playground {
          width: 100%;
          max-width: 900px;
          padding: 24px;
          text-align: left;
          margin-bottom: 60px;
          border-color: rgba(139, 92, 246, 0.25);
          box-shadow: 0 20px 50px rgba(124, 58, 237, 0.12);
        }

        .playground-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          margin-bottom: 16px;
        }

        .model-selector {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #F1F5F9;
          padding: 6px 12px;
          border-radius: 8px;
        }

        .model-select {
          border: none;
          background: transparent;
          font-weight: 600;
          font-size: 13px;
          color: var(--text-main);
          outline: none;
          cursor: pointer;
        }

        .prompt-tabs {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .prompt-tab {
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          color: var(--text-muted);
          background: transparent;
          transition: all 0.2s ease;
        }

        .prompt-tab:hover, .prompt-tab.active {
          background: var(--primary-light);
          color: var(--primary);
          font-weight: 600;
        }

        .playground-input-row {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
        }

        .prompt-input {
          flex: 1;
          padding: 12px 18px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .prompt-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);
        }

        .prompt-submit-btn {
          padding: 12px 24px;
          font-size: 14px;
        }

        .playground-output {
          background: #0F172A;
          color: #E2E8F0;
          border-radius: var(--radius-md);
          padding: 18px 20px;
          font-family: monospace;
          font-size: 13px;
          min-height: 140px;
          position: relative;
        }

        .output-top-bar {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-body);
          font-size: 11px;
          color: #94A3B8;
          padding-bottom: 10px;
          margin-bottom: 10px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .live-badge {
          color: #34D399;
          font-weight: 700;
        }

        .output-text {
          white-space: pre-wrap;
          word-wrap: break-word;
          line-height: 1.6;
        }

        .typing-cursor {
          display: inline-block;
          color: #A855F7;
          animation: blink 0.8s infinite;
          margin-left: 2px;
          font-weight: bold;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        /* Dashboard Image Wrapper */
        .hero-dashboard-wrapper {
          position: relative;
          width: 100%;
          max-width: 1080px;
          border-radius: var(--radius-lg);
          padding: 8px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(236, 72, 153, 0.2) 100%);
          box-shadow: 0 30px 80px rgba(124, 58, 237, 0.15);
        }

        .hero-dashboard-img {
          width: 100%;
          border-radius: calc(var(--radius-lg) - 4px);
          display: block;
        }

        .floating-metric {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          padding: 12px 18px;
          border-radius: 16px;
          box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.8);
          z-index: 10;
          text-align: left;
          animation: float 4s ease-in-out infinite;
        }

        .metric-1 {
          top: -24px;
          left: -20px;
        }

        .metric-2 {
          bottom: 40px;
          right: -24px;
          animation-delay: 1.5s;
        }

        .metric-3 {
          bottom: -24px;
          left: 40px;
          animation-delay: 2.5s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .metric-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metric-icon.purple { background: rgba(124, 58, 237, 0.1); color: #7C3AED; }
        .metric-icon.green { background: rgba(16, 185, 129, 0.1); color: #10B981; }
        .metric-icon.blue { background: rgba(59, 130, 246, 0.1); color: #3B82F6; }

        .metric-value {
          font-weight: 800;
          font-size: 15px;
          color: var(--text-main);
        }

        .metric-label {
          font-size: 12px;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .hero-title { font-size: 44px; }
          .hero-subtitle { font-size: 17px; }
          .floating-metric { display: none; }
        }

        @media (max-width: 768px) {
          .hero-section { padding-top: 110px; padding-bottom: 50px; }
          .hero-title { font-size: 32px; }
          .hero-subtitle { font-size: 15px; }
          .hero-actions { flex-direction: column; width: 100%; }
          .hero-btn-main, .hero-btn-demo { width: 100%; }
          .playground-input-row { flex-direction: column; }
        }
      `}</style>
    </section>
  );
}
