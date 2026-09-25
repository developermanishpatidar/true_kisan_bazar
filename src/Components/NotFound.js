import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './NotFound.css';

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const attemptedPath = location.pathname || '/';

  const SHORTCUTS = [
    { to: '/', label: t('not_found.home'), hint: t('not_found.home_hint') },
    { to: '/product-list', label: t('not_found.listings'), hint: t('not_found.listings_hint') },
    { to: '/mandi-rate', label: t('not_found.mandi_rates'), hint: t('not_found.mandi_rates_hint') },
    { to: '/enquiry', label: t('not_found.enquiry'), hint: t('not_found.enquiry_hint') },
  ];

  return (
    <div className="tkb-page tkb-notfound-page">
      <Header />
      <main>
        <section className="tkb-notfound" aria-labelledby="notfound-title">
          <div className="container-lg">
            <div className="tkb-notfound-card">
              <p className="tkb-notfound-kicker">{t('not_found.kicker')}</p>
              <p className="tkb-notfound-code" aria-hidden="true">404</p>
              <h1 id="notfound-title">{t('not_found.title')}</h1>
              <p className="tkb-notfound-copy">
                {t('not_found.message')} <span className="tkb-notfound-path">{attemptedPath}</span> {t('not_found.message_suffix')}
              </p>
              <div className="tkb-notfound-actions">
                <Link to="/" className="tkb-cta-btn tkb-cta-btn--primary">{t('not_found.go_home')}</Link>
                <Link to="/contact" className="tkb-notfound-ghost">{t('not_found.contact_support')}</Link>
              </div>
              <ul className="tkb-notfound-shortcuts">
                {SHORTCUTS.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>
                      <strong>{item.label}</strong>
                      <span>{item.hint}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
