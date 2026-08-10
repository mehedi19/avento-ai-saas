import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Alex Rivera',
      role: 'CEO & Co-founder',
      company: 'TechFlow SaaS',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      comment: 'Avento AI transformed how our engineering and marketing teams produce technical blogs and release notes. We saved over 40 hours per week in sprint 1.',
      verified: true
    },
    {
      name: 'Dr. Marcus Vance',
      role: 'Head of Product',
      company: 'Vercel Partner Team',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      comment: 'The sub-second response streaming and multiplayer canvas make Avento AI miles ahead of traditional AI tools. Our content throughput increased by 300%.',
      verified: true
    },
    {
      name: 'Elena Rostova',
      role: 'Lead Content Strategist',
      company: 'Canva Design Lab',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      comment: 'Setting up custom brand tone rules was a breeze. Now 15+ writers generate aligned draft copy without constant review bottlenecks.',
      verified: true
    },
    {
      name: 'Liam Takahashi',
      role: 'VP of Growth',
      company: 'Stripe Ecosystem',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      comment: 'The 1-click integrations with Notion, Slack, and GitHub meant zero developer onboarding friction. It worked right out of the box.',
      verified: true
    },
    {
      name: 'Sophie Chen',
      role: 'Founder',
      company: 'OmniGrowth Studio',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      comment: 'Zero data retention and SOC2 compliance gave our enterprise legal team complete peace of mind. Truly enterprise grade.',
      verified: true
    },
    {
      name: 'David Miller',
      role: 'Staff Engineer',
      company: 'Supabase Ecosystem',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
      rating: 5,
      comment: 'The code generator feature produces clean, typed React components with unit tests. Highly recommended for full-stack developers.',
      verified: true
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <div className="badge-pill">
            <MessageSquareQuote size={14} />
            <span>Trusted by 10,000+ Teams</span>
          </div>
          <h2>Loved by Founders, Engineers & Creators</h2>
          <p>
            Here is what leaders at top tech companies have to say about scaling with Avento AI.
          </p>

          <div className="rating-summary-badge">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <span className="rating-text"><strong>4.9 / 5.0</strong> based on 2,400+ verified G2 reviews</span>
          </div>
        </div>

        {/* Bento Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-card glass-card-interactive review-card">
              <div className="review-stars">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p className="review-comment">"{rev.comment}"</p>
              
              <div className="reviewer-info">
                <img src={rev.avatar} alt={rev.name} className="reviewer-avatar" />
                <div>
                  <div className="reviewer-name">
                    <span>{rev.name}</span>
                    {rev.verified && <CheckCircle2 size={13} className="text-primary inline-check" />}
                  </div>
                  <div className="reviewer-role">{rev.role} • {rev.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          padding: 90px 0;
          background: linear-gradient(180deg, var(--bg-page) 0%, #F1F5F9 50%, var(--bg-page) 100%);
        }

        .rating-summary-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #FFFFFF;
          border: 1px solid var(--border-light);
          padding: 8px 18px;
          border-radius: 999px;
          margin-top: 20px;
          box-shadow: var(--shadow-sm);
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .rating-text {
          font-size: 13px;
          color: var(--text-muted);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .review-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          border-color: rgba(226, 232, 240, 0.9);
        }

        .review-stars {
          display: flex;
          gap: 2px;
          margin-bottom: 16px;
        }

        .review-comment {
          font-size: 15px;
          color: var(--text-main);
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .reviewer-info {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--border-light);
        }

        .reviewer-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          object-fit: cover;
        }

        .reviewer-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .reviewer-role {
          font-size: 12px;
          color: var(--text-muted);
        }

        @media (max-width: 1024px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .reviews-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
