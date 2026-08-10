import React from 'react';
import { PenTool, Mic, Code2, Users2, BarChart3, Workflow, Sparkles, CheckCircle } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: <PenTool size={24} />,
      title: 'AI Content Studio',
      description: 'Generate SEO-optimized blog posts, ad copy, and social media campaigns with built-in tone adjusters.',
      badge: 'Real-time Drafts',
      preview: (
        <div className="card-mockup content-mockup">
          <div className="tone-selector">
            <span className="tone-chip active">✨ Professional</span>
            <span className="tone-chip">🔥 Persuasive</span>
            <span className="tone-chip">💡 Witty</span>
          </div>
          <div className="mockup-text-stream">
            <p><strong>Headline:</strong> How AI Automates 80% of Repetitive SaaS Tasks...</p>
            <span className="typing-indicator">Streaming content...</span>
          </div>
        </div>
      )
    },
    {
      icon: <Mic size={24} />,
      title: 'Multi-Modal AI Assistant',
      description: 'Interact with text, voice commands, and document uploads seamlessly across web and mobile.',
      badge: 'Voice & Chat',
      preview: (
        <div className="card-mockup chat-mockup">
          <div className="chat-bubble user">Summarize PDF report & transcribe audio notes</div>
          <div className="chat-bubble ai">
            <Sparkles size={14} className="text-primary inline-icon" /> Here is the 3-point summary...
          </div>
        </div>
      )
    },
    {
      icon: <Code2 size={24} />,
      title: 'Intelligent Code Generator',
      description: 'Write clean React, Python, TypeScript, and SQL code snippets with automated unit test generation.',
      badge: '20+ Languages',
      preview: (
        <div className="card-mockup code-mockup">
          <div className="code-header">
            <span>api.ts</span>
            <span className="code-tag">TypeScript</span>
          </div>
          <pre className="code-body">
            <code>{`async function generateAIResponse(prompt: string) {\n  const res = await avento.query({ prompt });\n  return res.text;\n}`}</code>
          </pre>
        </div>
      )
    },
    {
      icon: <Users2 size={24} />,
      title: 'Real-Time Workspace Collaboration',
      description: 'Collaborate live with teammates, share prompt templates, assign review approvals, and manage roles.',
      badge: 'Multiplayer',
      preview: (
        <div className="card-mockup team-mockup">
          <div className="avatar-group">
            <div className="avatar av-1">JD</div>
            <div className="avatar av-2">AR</div>
            <div className="avatar av-3">SK</div>
            <span className="avatar-more">+14 online</span>
          </div>
          <div className="activity-item">
            <CheckCircle size={14} className="text-green" /> Sarah approved "Q4 Strategy Draft"
          </div>
        </div>
      )
    },
    {
      icon: <BarChart3 size={24} />,
      title: 'Analytics & Token Usage',
      description: 'Track team generation throughput, token expenditure, cost allocations, and efficiency metrics in real time.',
      badge: 'Live Insights',
      preview: (
        <div className="card-mockup chart-mockup">
          <div className="chart-bar-container">
            <div className="chart-bar h-60"></div>
            <div className="chart-bar h-80"></div>
            <div className="chart-bar h-40"></div>
            <div className="chart-bar h-100 active"></div>
            <div className="chart-bar h-75"></div>
          </div>
          <div className="chart-label">+240% Productivity gain</div>
        </div>
      )
    },
    {
      icon: <Workflow size={24} />,
      title: 'Custom AI Workflows',
      description: 'Connect webhooks, databases, Notion, and Slack to trigger automated AI tasks on custom events.',
      badge: 'Visual Builder',
      preview: (
        <div className="card-mockup node-mockup">
          <div className="node node-start">Webhook Trigger</div>
          <div className="node-connector">↓</div>
          <div className="node node-ai">Avento AI Engine</div>
          <div className="node-connector">↓</div>
          <div className="node node-end">Sync to Slack & Notion</div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Sparkles size={14} />
            <span>Powerful Capabilities</span>
          </div>
          <h2>Everything You Need to Scale AI Workflows</h2>
          <p>
            Designed for high-growth teams and ambitious creators who require speed, precision, and enterprise reliability.
          </p>
        </div>

        {/* 6 Bento Grid Cards */}
        <div className="feature-grid">
          {features.map((feat, idx) => (
            <div key={idx} className="glass-card glass-card-interactive feature-card">
              <div className="feature-card-header">
                <div className="feature-icon-wrapper">{feat.icon}</div>
                <span className="feature-card-badge">{feat.badge}</span>
              </div>
              <h3 className="feature-card-title">{feat.title}</h3>
              <p className="feature-card-desc">{feat.description}</p>
              <div className="feature-card-preview">{feat.preview}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .features-section {
          padding: 90px 0;
          position: relative;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .feature-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          border-color: rgba(226, 232, 240, 0.9);
        }

        .feature-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .feature-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(124, 58, 237, 0.08);
          color: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feature-card-badge {
          font-size: 11px;
          font-weight: 700;
          color: var(--primary);
          background: rgba(139, 92, 246, 0.1);
          padding: 4px 10px;
          border-radius: 6px;
          letter-spacing: 0.02em;
        }

        .feature-card-title {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .feature-card-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .feature-card-preview {
          background: #F8FAFC;
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: var(--radius-md);
          padding: 16px;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .card-mockup {
          width: 100%;
        }

        /* Mockup Details */
        .tone-selector {
          display: flex;
          gap: 6px;
          margin-bottom: 10px;
        }

        .tone-chip {
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 6px;
          background: #E2E8F0;
          color: var(--text-muted);
        }

        .tone-chip.active {
          background: var(--primary);
          color: #FFF;
          font-weight: 600;
        }

        .mockup-text-stream {
          font-size: 12px;
          color: var(--text-main);
        }

        .typing-indicator {
          font-size: 11px;
          color: var(--primary);
          font-weight: 600;
        }

        .chat-bubble {
          font-size: 12px;
          padding: 8px 12px;
          border-radius: 10px;
          margin-bottom: 8px;
        }

        .chat-bubble.user {
          background: #E2E8F0;
          color: var(--text-main);
          align-self: flex-end;
        }

        .chat-bubble.ai {
          background: rgba(124, 58, 237, 0.1);
          color: var(--primary);
          font-weight: 500;
        }

        .code-mockup {
          background: #0F172A;
          color: #38BDF8;
          border-radius: 8px;
          padding: 10px 14px;
          font-family: monospace;
          font-size: 11px;
        }

        .code-header {
          display: flex;
          justify-content: space-between;
          color: #94A3B8;
          font-size: 10px;
          margin-bottom: 6px;
        }

        .team-mockup {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .avatar-group {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          color: #FFF;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .av-1 { background: #7C3AED; }
        .av-2 { background: #EC4899; }
        .av-3 { background: #3B82F6; }

        .avatar-more {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 600;
        }

        .activity-item {
          font-size: 11px;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .text-green { color: #10B981; }

        .chart-mockup {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .chart-bar-container {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          height: 50px;
        }

        .chart-bar {
          width: 14px;
          background: #CBD5E1;
          border-radius: 4px;
          transition: height 0.3s ease;
        }

        .chart-bar.active { background: var(--primary); }
        .h-40 { height: 40%; }
        .h-60 { height: 60%; }
        .h-75 { height: 75%; }
        .h-80 { height: 80%; }
        .h-100 { height: 100%; }

        .chart-label {
          font-size: 11px;
          font-weight: 600;
          color: var(--primary);
        }

        .node-mockup {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .node {
          font-size: 10px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid var(--border-light);
          background: #FFF;
        }

        .node-ai { background: var(--primary); color: #FFF; border: none; }
        .node-connector { font-size: 10px; color: var(--text-muted); }

        @media (max-width: 1024px) {
          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .feature-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
