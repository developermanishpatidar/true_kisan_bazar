import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="tkb-page">
      <Header />
      <main>
        <section className="tkb-about-hero">
          <div className="tkb-about-hero-bg" aria-hidden="true" />
          <div className="container-lg tkb-about-hero-inner">
            <p className="tkb-section-kicker tkb-section-kicker--light">{t('about.kicker')}</p>
            <h1>{t('about.hero_title')}</h1>
            <p>{t('about.hero_desc')}</p>
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
                <p className="tkb-section-kicker">{t('about.story_kicker')}</p>
                <h2 className="tkb-page-title">{t('about.story_title')}</h2>
                <p className="tkb-page-copy">{t('about.story_p1')}</p>
                <p className="tkb-page-copy">{t('about.story_p2')}</p>
                <div className="tkb-about-actions">
                  <Link to="/enquiry" className="tkb-cta-btn tkb-cta-btn--primary">{t('about.post_enquiry')}</Link>
                  <Link to="/product-list" className="tkb-about-text-link">{t('about.browse_listings')}</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tkb-about-values">
          <div className="container-lg">
            <div className="tkb-values-header">
              <p className="tkb-values-kicker">{t('about.values_kicker')}</p>
              <h2 className="tkb-values-title">{t('about.values_title')}</h2>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <article className="tkb-value-card">
                  <span className="tkb-value-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                  </span>
                  <h3>{t('about.mission')}</h3>
                  <p>{t('about.mission_desc')}</p>
                </article>
              </div>
              <div className="col-md-4">
                <article className="tkb-value-card">
                  <span className="tkb-value-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg>
                  </span>
                  <h3>{t('about.vision')}</h3>
                  <p>{t('about.vision_desc')}</p>
                </article>
              </div>
              <div className="col-md-4">
                <article className="tkb-value-card">
                  <span className="tkb-value-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.86 0 3.58.57 5 1.54"/><path d="M21 3l-9 9"/></svg>
                  </span>
                  <h3>{t('about.promise')}</h3>
                  <p>{t('about.promise_desc')}</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="tkb-about-stats">
          <div className="container-lg">
            <div className="tkb-stats-header">
              <span className="tkb-stats-badge">{t('about.milestones')}</span>
              <h2 className="tkb-stats-heading">{t('about.our_success')}</h2>
            </div>
            <div className="tkb-stats-timeline">
              <div className="tkb-stats-line" aria-hidden="true"></div>
              <div className="tkb-stats-grid">
                <div className="tkb-stat-item">
                  <div className="tkb-stat-dot" aria-hidden="true"></div>
                  <strong>200+</strong>
                  <span>{t('about.farms_across')}<br />{t('about.acres')}</span>
                </div>
                <div className="tkb-stat-item">
                  <div className="tkb-stat-dot" aria-hidden="true"></div>
                  <strong>20+</strong>
                  <span>{t('about.countries')}<br />{t('about.expansion')}</span>
                </div>
                <div className="tkb-stat-item">
                  <div className="tkb-stat-dot" aria-hidden="true"></div>
                  <strong>250+</strong>
                  <span>{t('about.customers')}</span>
                </div>
                <div className="tkb-stat-item">
                  <div className="tkb-stat-dot" aria-hidden="true"></div>
                  <strong>95%</strong>
                  <span>{t('about.customer')}<br />{t('about.satisfaction_rate')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="tkb-about-offer">
          <div className="container-lg">
            <div className="text-center mb-4">
              <p className="tkb-section-kicker">{t('about.offer_kicker')}</p>
              <h2 className="tkb-page-title">{t('about.offer_title')}</h2>
            </div>
            <div className="row g-4">
              {[
                [t('about.offer_buy_sell'), t('about.offer_buy_sell_desc')],
                [t('about.offer_mandi'), t('about.offer_mandi_desc')],
                [t('about.offer_listings'), t('about.offer_listings_desc')],
                [t('about.offer_directory'), t('about.offer_directory_desc')],
                [t('about.offer_guides'), t('about.offer_guides_desc')],
                [t('about.offer_mobile'), t('about.offer_mobile_desc')],
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
