import React, { useState } from 'react';
import { Sparkles, Check, Play, RefreshCw, Copy, CheckCheck } from 'lucide-react';

export default function InteractiveStudio() {
  const [format, setFormat] = useState('Blog Headline & Intro');
  const [tone, setTone] = useState('Professional & High Energy');
  const [targetAudience, setTargetAudience] = useState('SaaS Founders & CTOs');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const [output, setOutput] = useState(
    `# 🚀 The Future of AI Workflows: Scale Faster with Avento AI\n\nIn 2026, high-performing software teams no longer rely on fragmented tools. Avento AI combines multi-modal LLM reasoning with real-time multiplayer editing, empowering teams to ship content 10x faster with zero friction.\n\n### Key Benefits:\n- **Automated Workflows**: Trigger AI tasks directly from GitHub or Slack.\n- **Enterprise Security**: SOC2 Type II compliance with zero data retention.\n- **Cost Efficiency**: Optimize token spending across models effortlessly.`
  );

  const presets = {
    'Blog Headline & Intro': `# 🚀 The Future of AI Workflows: Scale Faster with Avento AI\n\nIn 2026, high-performing software teams no longer rely on fragmented tools. Avento AI combines multi-modal LLM reasoning with real-time multiplayer editing, empowering teams to ship content 10x faster with zero friction.`,
    'Social Media Ad Copy': `🔥 Stop wasting 20+ hours a week writing product docs and social copy.\n\n✨ Avento AI generates production-ready articles, code snippets, and automated workflows in seconds.\n\n👇 Try it free today (No credit card required)\n👉 https://avento.ai/trial`,
    'Cold Outreach Sequence': `Hi [First Name],\n\nI noticed your team is expanding product engineering this quarter. Most CTOs we speak with spend 15+ hours/week manually writing documentation.\n\nAvento AI automates 80% of this pipeline while keeping full SOC2 security.\n\nWould love to show you a 5-minute preview this week.`,
    'React Code Generator': `import React from 'react';\nimport { Sparkles } from 'lucide-react';\n\nexport const AIButton = ({ onClick, children }) => (\n  <button onClick={onClick} className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold flex items-center gap-2 hover:bg-purple-700 shadow-lg transition-all">\n    <Sparkles size={18} />\n    {children}\n  </button>\n);`
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    const targetText = presets[format] || presets['Blog Headline & Intro'];
    setOutput('');
    
    let i = 0;
    const interval = setInterval(() => {
      if (i < targetText.length) {
        setOutput(targetText.substring(0, i + 5));
        i += 5;
      } else {
        setOutput(targetText);
        setIsGenerating(false);
        clearInterval(interval);
      }
    }, 12);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="studio" className="studio-section">
      <div className="container">
        <div className="studio-wrapper glass-card">
          {/* Left Text Column */}
          <div className="studio-info">
            <div className="badge-pill">
              <Sparkles size={14} />
              <span>Interactive AI Studio</span>
            </div>
            <h2>Experience Real-Time AI Generation Live</h2>
            <p>
              Test Avento AI’s multi-modal generation engine right now. Select your output format, adjust tone parameters, and trigger instant streaming generation.
            </p>

            <ul className="studio-feature-list">
              <li>
                <div className="check-icon"><Check size={14} /></div>
                <span>Sub-second generation latency across GPT-4o & Claude 3.5</span>
              </li>
              <li>
                <div className="check-icon"><Check size={14} /></div>
                <span>Custom brand tone enforcement and vocabulary rules</span>
              </li>
              <li>
                <div className="check-icon"><Check size={14} /></div>
                <span>Instant markdown, JSON, and React JSX code exports</span>
              </li>
            </ul>

            <div className="studio-control-group">
              <label>Select Format:</label>
              <select value={format} onChange={(e) => setFormat(e.target.value)} className="studio-select">
                <option value="Blog Headline & Intro">Blog Headline & Intro</option>
                <option value="Social Media Ad Copy">Social Media Ad Copy</option>
                <option value="Cold Outreach Sequence">Cold Outreach Sequence</option>
                <option value="React Code Generator">React Code Generator</option>
              </select>

              <label>Select Tone:</label>
              <select value={tone} onChange={(e) => setTone(e.target.value)} className="studio-select">
                <option value="Professional & High Energy">Professional & High Energy</option>
                <option value="Casual & Conversational">Casual & Conversational</option>
                <option value="Technical & Authoritative">Technical & Authoritative</option>
              </select>

              <button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                className="btn btn-primary btn-glow studio-trigger-btn"
              >
                {isGenerating ? <RefreshCw className="spin" size={16} /> : <Play size={16} fill="currentColor" />}
                {isGenerating ? 'Generating Response...' : 'Run Interactive Studio'}
              </button>
            </div>
          </div>

          {/* Right Live Output Box */}
          <div className="studio-preview-box">
            <div className="preview-top-bar">
              <div className="window-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="preview-title">{format}</div>
              <button onClick={handleCopy} className="copy-btn">
                {copied ? <CheckCheck size={14} className="text-green" /> : <Copy size={14} />}
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            
            <div className="preview-body">
              <pre className="preview-code-output">
                {output}
                <span className="blinking-cursor">|</span>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .studio-section {
          padding: 80px 0;
        }

        .studio-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding: 44px;
          border-color: rgba(139, 92, 246, 0.3);
          box-shadow: 0 20px 60px rgba(124, 58, 237, 0.1);
        }

        .studio-info h2 {
          font-size: 32px;
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 16px;
        }

        .studio-info p {
          font-size: 16px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
        }

        .studio-feature-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }

        .studio-feature-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-main);
        }

        .check-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: rgba(124, 58, 237, 0.1);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .studio-control-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .studio-control-group label {
          font-size: 13px;
          font-weight: 600;
          color: var(--text-main);
        }

        .studio-select {
          padding: 10px 14px;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-light);
          font-size: 14px;
          outline: none;
          background: #FFFFFF;
        }

        .studio-trigger-btn {
          margin-top: 10px;
          padding: 12px 24px;
        }

        /* Preview Box */
        .studio-preview-box {
          background: #0F172A;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }

        .preview-top-bar {
          background: #1E293B;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .window-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-red { background: #EF4444; }
        .dot-yellow { background: #F59E0B; }
        .dot-green { background: #10B981; }

        .preview-title {
          font-size: 12px;
          font-weight: 600;
          color: #94A3B8;
        }

        .copy-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #94A3B8;
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 4px;
          background: rgba(255,255,255,0.05);
        }

        .copy-btn:hover {
          color: #FFF;
          background: rgba(255,255,255,0.1);
        }

        .preview-body {
          padding: 20px;
          flex-grow: 1;
          overflow-y: auto;
        }

        .preview-code-output {
          color: #E2E8F0;
          font-family: var(--font-body);
          font-size: 14px;
          white-space: pre-wrap;
          line-height: 1.6;
        }

        .blinking-cursor {
          color: #A855F7;
          font-weight: bold;
          animation: blink 0.8s infinite;
          margin-left: 2px;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 1024px) {
          .studio-wrapper {
            grid-template-columns: 1fr;
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
