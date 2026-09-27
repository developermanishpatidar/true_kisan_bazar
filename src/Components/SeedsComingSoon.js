import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './SeedsComingSoon.css';

const SeedsComingSoon = () => {
  const { t } = useTranslation();

  const QUICK_LINKS = [
    { to: '/', label: t('seeds_coming_soon.go_home') },
    { to: '/mandi-rate', label: t('seeds_coming_soon.explore_mandi') },
    { to: '/product-list', label: t('seeds_coming_soon.browse_products') },
    { to: '/enquiry', label: t('header.buy_sell') },
  ];

  return (
    <div className="tkb-page tkb-seeds-page">
      <Header />
      <main>
        <section className="tkb-seeds-simple" aria-labelledby="seeds-title">
          <div className="container-lg">
            <div className="tkb-seeds-simple-card">
              {/* Agricultural Sprout Badge */}
              <div className="tkb-seeds-icon-wrap" aria-hidden="true">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
                  <path d="M12 12v6" />
                  <path d="M12 15l2-2" />
                </svg>
              </div>

              <p className="tkb-seeds-simple-kicker">{t('seeds_coming_soon.kicker')}</p>
              <h1 id="seeds-title" className="tkb-seeds-simple-title">{t('seeds_coming_soon.title')}</h1>
              
              <p className="tkb-seeds-simple-copy">
                {t('seeds_coming_soon.message')}
              </p>

              {/* Action Buttons */}
              <div className="tkb-seeds-simple-actions">
                <Link to="/" className="tkb-seeds-btn-primary">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                  {t('seeds_coming_soon.go_home')}
                </Link>
                <Link to="/mandi-rate" className="tkb-seeds-btn-ghost">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="12" y1="20" x2="12" y2="10"/>
                    <line x1="18" y1="20" x2="18" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="16"/>
                  </svg>
                  {t('seeds_coming_soon.explore_mandi')}
                </Link>
              </div>

              {/* Quick Navigation Links */}
              <div className="tkb-seeds-simple-footer">
                <span className="tkb-seeds-links-label">{t('footer.quick_links')}:</span>
                <div className="tkb-seeds-links-group">
                  {QUICK_LINKS.map((item) => (
                    <Link key={item.to} to={item.to} className="tkb-seeds-link-pill">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SeedsComingSoon;
