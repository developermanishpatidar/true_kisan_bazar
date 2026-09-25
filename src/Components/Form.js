import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import banner_newsletter from '../assets/images/banner-newsletter.jpg';

const Form = () => {
  const { t } = useTranslation();

  return (
    <section className="tkb-cta-section">
      <div className="container-lg">
        <div className="tkb-cta-banner" style={{ backgroundImage: `url(${banner_newsletter})` }}>
          <div className="tkb-cta-overlay">
            <div className="tkb-cta-copy">
              <p className="tkb-cta-kicker">{t('home.cta_kicker')}</p>
              <h2>{t('home.cta_title')}</h2>
              <p className="tkb-cta-text">{t('home.cta_desc')}</p>
              <ul className="tkb-cta-points">
                <li>{t('home.cta_p1')}</li>
                <li>{t('home.cta_p2')}</li>
                <li>{t('home.cta_p3')}</li>
              </ul>
              <div className="tkb-cta-actions">
                <Link to="/enquiry" className="tkb-cta-btn tkb-cta-btn--primary">{t('home.cta_sell_btn')}</Link>
                <Link to="/enquiry" className="tkb-cta-btn tkb-cta-btn--ghost">{t('home.cta_buy_btn')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
