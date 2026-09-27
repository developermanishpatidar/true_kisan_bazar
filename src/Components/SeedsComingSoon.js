import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './SeedsComingSoon.css';

const SeedsComingSoon = () => {
  const { t } = useTranslation();
  const [contact, setContact] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const trimmed = contact.trim();
    if (!trimmed) {
      setError(t('seeds_coming_soon.error_required'));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(trimmed) && !phoneRegex.test(trimmed)) {
      setError(t('seeds_coming_soon.error_invalid'));
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('fasal_seed_notifications') || '[]');
        stored.push({ contact: trimmed, date: new Date().toISOString() });
        localStorage.setItem('fasal_seed_notifications', JSON.stringify(stored));
      } catch (err) {
        console.error('Error saving notification preference:', err);
      }
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  }, [contact, t]);

  return (
    <div className="tkb-page tkb-seeds-simple-page">
      <Header />
      <main>
        <section className="tkb-seeds-simple-section" aria-labelledby="seeds-coming-title">
          <div className="container-lg">
            <div className="tkb-seeds-simple-card">
              {/* Sprout & Seed Visual Badge */}
              <div className="tkb-seeds-simple-icon-wrap" aria-hidden="true">
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>
                  <path d="M12 12v6"/>
                  <path d="M12 15l2.5-2.5"/>
                </svg>
              </div>

              <span className="tkb-seeds-simple-kicker">{t('seeds_coming_soon.kicker')}</span>
              
              <h1 id="seeds-coming-title" className="tkb-seeds-simple-title">
                {t('seeds_coming_soon.title')}
              </h1>

              <p className="tkb-seeds-simple-desc">
                {t('seeds_coming_soon.desc')}
              </p>

              {/* Simple 1-line Notification Form */}
              <div className="tkb-seeds-simple-notify">
                {isSubmitted ? (
                  <div className="tkb-seeds-simple-success" role="alert">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{t('seeds_coming_soon.success_desc')}</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="tkb-seeds-simple-input-group">
                      <input
                        type="text"
                        placeholder={t('seeds_coming_soon.notify_placeholder')}
                        value={contact}
                        onChange={(e) => {
                          setContact(e.target.value);
                          if (error) setError('');
                        }}
                        className={`tkb-seeds-simple-input${error ? ' has-error' : ''}`}
                        aria-label="Mobile number or email"
                        disabled={isSubmitting}
                      />
                      <button type="submit" className="tkb-seeds-simple-btn" disabled={isSubmitting}>
                        {isSubmitting ? t('seeds_coming_soon.submitting') : t('seeds_coming_soon.notify_btn')}
                      </button>
                    </div>
                    {error && <p className="tkb-seeds-simple-error" role="alert">{error}</p>}
                  </form>
                )}
              </div>

              {/* Quick Navigation Actions */}
              <div className="tkb-seeds-simple-actions">
                <Link to="/" className="tkb-seeds-btn-primary">
                  {t('seeds_coming_soon.go_home')}
                </Link>
                <Link to="/mandi-rate" className="tkb-seeds-btn-ghost">
                  {t('seeds_coming_soon.mandi_rates')}
                </Link>
                <Link to="/product-list" className="tkb-seeds-btn-ghost">
                  {t('seeds_coming_soon.crop_listings')}
                </Link>
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
