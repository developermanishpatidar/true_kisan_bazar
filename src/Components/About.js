import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';

const About = () => {
  return (
    <div className="tkb-page">
      <Header />
      <main>
        <section className="tkb-about-hero">
          <div className="tkb-about-hero-bg" aria-hidden="true" />
          <div className="container-lg tkb-about-hero-inner">
            <p className="tkb-section-kicker tkb-section-kicker--light">Who we are</p>
            <h1>A trusted marketplace for India’s farmers, buyers and sellers</h1>
            <p>Fasal Junction connects crop trade with live mandi rates, verified enquiries and a simpler way to buy and sell produce.</p>
          </div>
        </section>

        <section className="tkb-about-story">
          <div className="container-lg">
            <div className="row align-items-center g-4 g-xl-5">
              <div className="col-lg-6">
                <div className="tkb-about-photo">
                  <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&h=700&fit=crop" alt="Farmer walking through a crop field" />
                </div>
              </div>
              <div className="col-lg-6">
                <p className="tkb-section-kicker">Our story</p>
                <h2 className="tkb-page-title">Built to make crop trade fair, fast and local</h2>
                <p className="tkb-page-copy">
                  Farmers often sell without knowing today’s rate. Buyers spend time chasing lots that are already gone.
                  Fasal Junction brings both sides onto one platform so quantity, variety, location and price are clear before anyone agrees a deal.
                </p>
                <p className="tkb-page-copy">
                  From first enquiry to verified contact, the goal is simple: fewer middle steps, better information, and a marketplace that works as well on a phone as it does in the mandi.
                </p>
                <div className="tkb-about-actions">
                  <Link to="/enquiry" className="tkb-cta-btn tkb-cta-btn--primary">Post an enquiry</Link>
                  <Link to="/product-list" className="tkb-about-text-link">Browse listings</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tkb-about-values">
          <div className="container-lg">
            <div className="tkb-values-header">
              <p className="tkb-values-kicker">What drives us</p>
              <h2 className="tkb-values-title">Built on clear principles</h2>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <article className="tkb-value-card">
                  <span className="tkb-value-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  </span>
                  <h3>Mission</h3>
                  <p>Give every farmer and trader a trusted place to post, compare rates and close crop deals with confidence.</p>
                </article>
              </div>
              <div className="col-md-4">
                <article className="tkb-value-card">
                  <span className="tkb-value-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                  </span>
                  <h3>Vision</h3>
                  <p>Become India's most used crop marketplace, where mandi prices and verified enquiries sit side by side.</p>
                </article>
              </div>
              <div className="col-md-4">
                <article className="tkb-value-card">
                  <span className="tkb-value-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.86 0 3.58.57 5 1.54"/><path d="M21 3l-9 9"/></svg>
                  </span>
                  <h3>Promise</h3>
                  <p>Free to post, clear lot details, and live rates before you agree a price — with support when you need it.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="tkb-about-stats">
          <div className="container-lg">
            <div className="tkb-stats-header">
              <span className="tkb-stats-badge">Milestones</span>
              <h2 className="tkb-stats-heading">Our Success</h2>
            </div>
            <div className="tkb-stats-timeline">
              <div className="tkb-stats-line" aria-hidden="true"></div>
              <div className="tkb-stats-grid">
                <div className="tkb-stat-item">
                  <div className="tkb-stat-dot" aria-hidden="true"></div>
                  <strong>200+</strong>
                  <span>Farms Across<br />232,000 Acres</span>
                </div>
                <div className="tkb-stat-item">
                  <div className="tkb-stat-dot" aria-hidden="true"></div>
                  <strong>20+</strong>
                  <span>Countries Global<br />Expansion</span>
                </div>
                <div className="tkb-stat-item">
                  <div className="tkb-stat-dot" aria-hidden="true"></div>
                  <strong>250+</strong>
                  <span>Customers</span>
                </div>
                <div className="tkb-stat-item">
                  <div className="tkb-stat-dot" aria-hidden="true"></div>
                  <strong>95%</strong>
                  <span>Customer<br />Satisfaction Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tkb-about-offer">
          <div className="container-lg">
            <div className="text-center mb-4">
              <p className="tkb-section-kicker">What we offer</p>
              <h2 className="tkb-page-title">A complete crop-trade workflow</h2>
            </div>
            <div className="row g-4">
              {[
                ['Buy & Sell', 'Post a crop or purchase enquiry with variety, quantity and location.'],
                ['Mandi rates', 'Check today’s rate before you negotiate so the deal stays fair.'],
                ['Verified listings', 'See farmer details, buyer views and lot photos in one card.'],
                ['Directory', 'Find farmers, buyers and manufacturers by crop and region.'],
                ['Guides & tips', 'Practical kisan stories, yojana notes and crop how-tos.'],
                ['Mobile app', 'Trade on the go with the same enquiry flow on your phone.'],
              ].map(([title, text]) => (
                <div className="col-md-6 col-lg-4" key={title}>
                  <article className="tkb-offer-card">
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
