import React from 'react';
import { Link } from 'react-router-dom';
import banner_newsletter from '../assets/images/banner-newsletter.jpg';

const Form = () => {
  return (
    <section className="tkb-cta-section">
      <div className="container-lg">
        <div className="tkb-cta-banner" style={{ backgroundImage: `url(${banner_newsletter})` }}>
          <div className="tkb-cta-overlay">
            <div className="tkb-cta-copy">
              <p className="tkb-cta-kicker">Start trading today</p>
              <h2>Post your first enquiry today</h2>
              <p className="tkb-cta-text">Free to post. Verified buyers. Today’s rate before you agree a price.</p>
              <ul className="tkb-cta-points">
                <li>No listing fee</li>
                <li>Verified traders</li>
                <li>Live mandi rates</li>
              </ul>
              <div className="tkb-cta-actions">
                <Link to="/enquiry" className="tkb-cta-btn tkb-cta-btn--primary">I have a crop to sell</Link>
                <Link to="/enquiry" className="tkb-cta-btn tkb-cta-btn--ghost">I want to buy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
