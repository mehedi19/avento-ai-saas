import React, { useState } from 'react';
import { Layers, ArrowUpRight, Check } from 'lucide-react';

export default function Integrations() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Productivity', 'Development', 'Marketing', 'Design'];

  const tools = [
    { name: 'Slack', category: 'Productivity', icon: '💬', desc: 'Auto-publish AI content drafts & alerts.' },
    { name: 'Notion', category: 'Productivity', icon: '📝', desc: 'Sync generated docs directly to databases.' },
    { name: 'GitHub', category: 'Development', icon: '🐙', desc: 'Trigger code generation on pull requests.' },
    { name: 'Figma', category: 'Design', icon: '🎨', desc: 'Generate UI copy & design specs automatically.' },
    { name: 'Google Workspace', category: 'Productivity', icon: '📁', desc: 'Export docs, sheets & presentation decks.' },
    { name: 'Zapier', category: 'Productivity', icon: '⚡', desc: 'Connect to 5,000+ app webhooks in 1-click.' },
    { name: 'Discord', category: 'Marketing', icon: '🎮', desc: 'Manage community bots and AI Q&A helpers.' },
    { name: 'Linear', category: 'Development', icon: '🎯', desc: 'Auto-generate issue descriptions & specs.' },
    { name: 'Jira', category: 'Development', icon: '📋', desc: 'Streamline agile task creation & user stories.' },
    { name: 'HubSpot', category: 'Marketing', icon: '🟠', desc: 'Generate personalized email sequences.' },
    { name: 'VS Code', category: 'Development', icon: '💻', desc: 'Real-time AI inline code completion plugin.' },
    { name: 'Trello', category: 'Productivity', icon: '📊', desc: 'Automate kanban card summaries & tasks.' }
  ];

  const filteredTools = activeCategory === 'All' 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <section id="integrations" className="integrations-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <Layers size={14} />
            <span>50+ Integrations</span>
          </div>
          <h2>Connects With Your Favorite Tools</h2>
          <p>
            Plug Avento AI directly into your existing software stack with zero engineering overhead.
          </p>

          {/* Filter Pills */}
          <div className="category-tabs">
            {categories.map((cat, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveCategory(cat)}
                className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Integration Cards Grid */}
        <div className="tools-grid">
          {filteredTools.map((tool, idx) => (
            <div key={idx} className="glass-card glass-card-interactive tool-card">
              <div className="tool-card-top">
                <span className="tool-emoji">{tool.icon}</span>
                <span className="tool-category-badge">{tool.category}</span>
              </div>
              <h3 className="tool-name">{tool.name}</h3>
              <p className="tool-desc">{tool.desc}</p>
              <div className="tool-connect-bar">
                <span>1-Click Connect</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .integrations-section {
          padding: 80px 0;
          background: linear-gradient(180deg, var(--bg-page) 0%, #F1F5F9 50%, var(--bg-page) 100%);
        }

        .category-tabs {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .cat-btn {
          padding: 8px 18px;
          border-radius: var(--radius-full);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          transition: all 0.2s ease;
        }

        .cat-btn.active, .cat-btn:hover {
          background: var(--primary);
          color: #FFFFFF;
          border-color: var(--primary);
          box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);
        }

        .tools-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .tool-card {
          padding: 22px;
          display: flex;
          flex-direction: column;
          border-color: rgba(226, 232, 240, 0.9);
        }

        .tool-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 14px;
        }

        .tool-emoji {
          font-size: 28px;
        }

        .tool-category-badge {
          font-size: 11px;
          font-weight: 600;
          color: var(--text-muted);
          background: #F1F5F9;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .tool-name {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .tool-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .tool-connect-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          font-weight: 600;
          color: var(--primary);
          padding-top: 10px;
          border-top: 1px solid rgba(226, 232, 240, 0.6);
        }

        @media (max-width: 1024px) {
          .tools-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
          .tools-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 480px) {
          .tools-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
