import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './Subscription.css';

const Subscription = () => {
  const { t } = useTranslation();
  const location = useLocation();

  // Authentication state - checks URL param ?auth=1, localStorage, or allows quick switcher
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('auth') === '1' || urlParams.get('view') === 'loggedin') return true;
    if (urlParams.get('auth') === '0' || urlParams.get('view') === 'loggedout') return false;
    return localStorage.getItem('fj_isLoggedIn') === 'true';
  });

  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'annual'
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [subscribedPlan, setSubscribedPlan] = useState(() => {
    return localStorage.getItem('fj_subscribed_plan') || null;
  });
  const [toastMessage, setToastMessage] = useState(null);

  // Sync state if query changes
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('auth') === '1' || urlParams.get('view') === 'loggedin') {
      setIsLoggedIn(true);
    } else if (urlParams.get('auth') === '0' || urlParams.get('view') === 'loggedout') {
      setIsLoggedIn(false);
    }
  }, [location.search]);

  // Plans data
  const plans = [
    {
      id: 'silver',
      name: t('subscription.silver', 'Silver'),
      tier: 'Standard',
      monthlyPrice: '499',
      annualPrice: '399',
      annualTotal: '4,788',
      color: 'silver',
      popular: false,
      tagline: 'Best for individual farmers & small growers starting direct sales',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
      features: [
        { text: '50 verified buyer/trader contacts per month', active: true },
        { text: 'Live APMC mandi rates for major crops', active: true },
        { text: '5 active crop listings simultaneously', active: true },
        { text: 'Direct WhatsApp click-to-chat with buyers', active: true },
        { text: 'Basic buyer inquiry notifications', active: true },
        { text: 'Standard email & portal support', active: true },
        { text: 'Featured search placement & badge', active: false },
        { text: 'All-India historical mandi price analytics', active: false },
        { text: 'Dedicated agricultural account manager', active: false },
      ],
    },
    {
      id: 'gold',
      name: t('subscription.gold', 'Gold'),
      tier: 'Pro Trader',
      monthlyPrice: '999',
      annualPrice: '799',
      annualTotal: '9,588',
      color: 'gold',
      popular: true,
      tagline: 'Most popular for commercial farmers, local traders & FPOs',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      features: [
        { text: '200 verified buyer/trader contacts per month', active: true },
        { text: 'All 3,800+ APMC mandis live rates & trends', active: true },
        { text: '25 active crop listings with priority ranking', active: true },
        { text: 'Direct phone & WhatsApp contact with buyers', active: true },
        { text: 'Instant SMS & WhatsApp trade lead alerts', active: true },
        { text: 'Verified Seller / Trader trust badge', active: true },
        { text: 'Featured banner placement in crop category', active: true },
        { text: 'Priority customer support (8 AM - 8 PM)', active: true },
        { text: 'Dedicated personal account manager', active: false },
      ],
    },
    {
      id: 'platinum',
      name: t('subscription.platinum', 'Platinum'),
      tier: 'Enterprise & Exporters',
      monthlyPrice: '1,999',
      annualPrice: '1,599',
      annualTotal: '19,188',
      color: 'platinum',
      popular: false,
      tagline: 'Maximum power for large commission agents, exporters & food processors',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 7l5-5h10l5 5-10 15L2 7z" />
          <path d="M2 7h20" />
          <path d="M7 2l5 5 5-5" />
        </svg>
      ),
      features: [
        { text: 'Unlimited verified buyer/trader contacts', active: true },
        { text: 'Real-time AGMARKNET pan-India data & export', active: true },
        { text: 'Unlimited active crop listings with top badge', active: true },
        { text: 'Direct connection to Verified Bulk Buyers & Exporters', active: true },
        { text: 'Custom crop procurement alerts & match-making', active: true },
        { text: 'Premium Platinum Verified Badge on marketplace', active: true },
        { text: 'Top homepage spotlight banner for your produce', active: true },
        { text: 'Dedicated Senior Agribusiness Manager', active: true },
        { text: '24/7 VIP priority support & logistics assistance', active: true },
      ],
    },
  ];

  // Benefits
  const benefits = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: t('subscription.benefit_contacts_title', 'Direct Verified Contacts'),
      desc: t('subscription.benefit_contacts_desc', 'Instantly get verified phone numbers and direct WhatsApp access to genuine buyers, sellers, and traders.'),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 20V10M18 20V4M6 20v-4" />
        </svg>
      ),
      title: t('subscription.benefit_mandi_title', 'Full Mandi Price Trends'),
      desc: t('subscription.benefit_mandi_desc', 'Historical price charts, minimum/maximum/modal arrivals across 3,800+ APMC mandis nationwide.'),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      title: t('subscription.benefit_listing_title', 'Priority Crop Listings'),
      desc: t('subscription.benefit_listing_desc', 'Featured placement on Marketplace search and home page for up to 5x higher visibility and responses.'),
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      title: t('subscription.benefit_verified_title', 'Verified Business Badge'),
      desc: t('subscription.benefit_verified_desc', 'Build trust instantly with a verified farmer/trader badge on your profile and enquiry cards.'),
    },
  ];

  // FAQ list
  const faqs = [
    {
      q: 'Is browsing Fasal Junction free?',
      a: 'Yes! Browsing crop listings, searching mandis, and posting enquiries is 100% free. Subscriptions are designed for serious farmers, traders, and businesses that want direct phone contact details, priority listings, and advanced market insights.',
    },
    {
      q: 'How do the contact credits work?',
      a: 'Each plan gives you a monthly quota of direct buyer and seller contact reveals. Once revealed, the contact remains permanently saved in your dashboard with WhatsApp and phone call access.',
    },
    {
      q: 'Can I upgrade, downgrade or cancel anytime?',
      a: 'Absolutely. You can upgrade to a higher tier anytime to unlock more leads immediately. Subscriptions can be cancelled at any time with no lock-in contracts or hidden fees.',
    },
    {
      q: 'What payment methods are supported?',
      a: 'We accept UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking across 50+ Indian banks, Credit/Debit cards (Visa, MasterCard, RuPay), and NEFT/RTGS for enterprise orders.',
    },
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const handleConfirmSubscription = () => {
    if (!selectedPlan) return;
    setSubscribedPlan(selectedPlan.id);
    localStorage.setItem('fj_subscribed_plan', selectedPlan.id);
    setModalOpen(false);
    setToastMessage(`Congratulations! You have subscribed to the ${selectedPlan.name} Plan.`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  const toggleAuthMode = (mode) => {
    setIsLoggedIn(mode);
    localStorage.setItem('fj_isLoggedIn', mode ? 'true' : 'false');
  };

  return (
    <div className="tkb-sub-root">
      <Header />

      {/* View Switcher Bar for Pair Testing / Demo */}
      <div className="tkb-sub-view-bar" role="region" aria-label="Subscription view switcher">
        <div className="container-lg tkb-sub-view-bar-inner">
          <div className="tkb-sub-view-info">
            <span className="tkb-sub-view-pulse"></span>
            <span className="tkb-sub-view-label">
              <strong>Preview Mode:</strong> Currently viewing as{' '}
              <span className="tkb-sub-view-current">{isLoggedIn ? 'LoggedIn Member' : 'LoggedOut Guest'}</span>
            </span>
          </div>
          <div className="tkb-sub-view-pills" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={!isLoggedIn}
              className={`tkb-sub-view-pill${!isLoggedIn ? ' is-active' : ''}`}
              onClick={() => toggleAuthMode(false)}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
              Logged-Out View
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={isLoggedIn}
              className={`tkb-sub-view-pill${isLoggedIn ? ' is-active' : ''}`}
              onClick={() => toggleAuthMode(true)}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              Logged-In View
            </button>
          </div>
        </div>
      </div>

      {toastMessage && (
        <div className="tkb-sub-toast" role="alert">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span>{toastMessage}</span>
          <button type="button" onClick={() => setToastMessage(null)} className="tkb-sub-toast-close" aria-label="Close">×</button>
        </div>
      )}

      {/* =========================================================================
          LOGGED OUT VIEW (Promotional / Marketing view like maikisaan.com)
          ========================================================================= */}
      {!isLoggedIn ? (
        <div className="tkb-sub-page tkb-sub-loggedout">
          {/* Hero Section */}
          <section className="tkb-sub-hero">
            <div className="tkb-sub-hero-bg"></div>
            <div className="container-lg">
              <div className="tkb-sub-hero-content">
                <span className="tkb-sub-hero-badge">
                  <span className="tkb-hero-badge-sparkle">★</span>
                  {t('subscription.hero_badge', 'PREMIUM AGRICULTURAL MEMBERSHIP')}
                </span>
                <h1 className="tkb-sub-hero-title">
                  {t('subscription.hero_title_1', 'Supercharge your business with')}{' '}
                  <span className="tkb-sub-hero-hl">{t('subscription.hero_title_hl', 'Fasal Junction')}</span>{' '}
                  {t('subscription.hero_title_2', 'Subscription')}
                </h1>
                <p className="tkb-sub-hero-subtitle">
                  {t(
                    'subscription.hero_subtitle',
                    'Connect directly with verified buyers and sellers across India, unlock contact details, access real-time mandi prices, and scale your agricultural trades.'
                  )}
                </p>
                <div className="tkb-sub-hero-actions">
                  <Link to="/login" className="tkb-sub-btn tkb-sub-btn-primary">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                    {t('subscription.login_to_subscribe', 'Login to Subscribe')}
                  </Link>
                  <a href="#plans-preview" className="tkb-sub-btn tkb-sub-btn-outline">
                    {t('subscription.view_plans', 'Explore Plans')}
                  </a>
                </div>

                <div className="tkb-sub-hero-stats">
                  <div className="tkb-sub-hero-stat">
                    <span className="tkb-sub-hero-stat-num">10,000+</span>
                    <span className="tkb-sub-hero-stat-label">{t('subscription.stat_subscribers', 'Active Agri Members')}</span>
                  </div>
                  <div className="tkb-sub-hero-stat-divider"></div>
                  <div className="tkb-sub-hero-stat">
                    <span className="tkb-sub-hero-stat-num">375+</span>
                    <span className="tkb-sub-hero-stat-label">{t('subscription.stat_commodities', 'Commodities Covered')}</span>
                  </div>
                  <div className="tkb-sub-hero-stat-divider"></div>
                  <div className="tkb-sub-hero-stat">
                    <span className="tkb-sub-hero-stat-num">3,800+</span>
                    <span className="tkb-sub-hero-stat-label">{t('subscription.stat_mandis', 'Mandis Connected')}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="tkb-sub-benefits">
            <div className="container-lg">
              <div className="tkb-sub-section-header">
                <span className="tkb-sub-section-tag">ADVANTAGES</span>
                <h2 className="tkb-sub-section-title">{t('subscription.why_subscribe', 'Why Upgrade to Premium?')}</h2>
                <p className="tkb-sub-section-subtitle">
                  {t(
                    'subscription.why_subscribe_desc',
                    'Everything you need to buy and sell crops directly at transparent rates with zero middlemen.'
                  )}
                </p>
              </div>

              <div className="tkb-sub-benefits-grid">
                {benefits.map((b, i) => (
                  <div className="tkb-sub-benefit-card" key={i}>
                    <div className="tkb-sub-benefit-icon">{b.icon}</div>
                    <h3 className="tkb-sub-benefit-title">{b.title}</h3>
                    <p className="tkb-sub-benefit-desc">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Plans Preview Section */}
          <section className="tkb-sub-plans-section" id="plans-preview">
            <div className="container-lg">
              <div className="tkb-sub-section-header">
                <span className="tkb-sub-section-tag">TIERED PRICING</span>
                <h2 className="tkb-sub-section-title">{t('subscription.choose_plan', 'Choose the Perfect Plan')}</h2>
                <p className="tkb-sub-section-subtitle">
                  Transparent, value-focused subscriptions designed to boost your agricultural profits.
                </p>

                {/* Billing toggle */}
                <div className="tkb-sub-billing-toggle">
                  <span className={`tkb-sub-billing-opt${billingCycle === 'monthly' ? ' is-active' : ''}`} onClick={() => setBillingCycle('monthly')}>
                    Monthly
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={billingCycle === 'annual'}
                    className={`tkb-sub-switch${billingCycle === 'annual' ? ' is-checked' : ''}`}
                    onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                    aria-label="Toggle annual billing"
                  >
                    <span className="tkb-sub-switch-thumb"></span>
                  </button>
                  <span className={`tkb-sub-billing-opt${billingCycle === 'annual' ? ' is-active' : ''}`} onClick={() => setBillingCycle('annual')}>
                    Annual
                    <span className="tkb-sub-discount-badge">Save 20%</span>
                  </span>
                </div>
              </div>

              <div className="tkb-sub-plans-grid">
                {plans.map((plan) => {
                  const displayPrice = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
                  return (
                    <div
                      className={`tkb-sub-plan-card tkb-sub-plan-${plan.color}${plan.popular ? ' tkb-sub-plan-popular' : ''}`}
                      key={plan.id}
                    >
                      {plan.popular && (
                        <div className="tkb-sub-plan-badge">
                          ★ {t('subscription.most_popular', 'Most Recommended')}
                        </div>
                      )}
                      <div className="tkb-sub-plan-header">
                        <div className="tkb-sub-plan-icon">{plan.icon}</div>
                        <span className="tkb-sub-plan-tier">{plan.tier}</span>
                        <h3 className="tkb-sub-plan-name">{plan.name}</h3>
                        <p className="tkb-sub-plan-tagline">{plan.tagline}</p>
                      </div>

                      <div className="tkb-sub-plan-price-wrap">
                        <div className="tkb-sub-plan-price">
                          <span className="tkb-sub-plan-currency">₹</span>
                          <span className="tkb-sub-plan-amount">{displayPrice}</span>
                          <span className="tkb-sub-plan-duration">/mo</span>
                        </div>
                        {billingCycle === 'annual' && (
                          <div className="tkb-sub-plan-billed-note">Billed annually at ₹{plan.annualTotal}/yr</div>
                        )}
                      </div>

                      <div className="tkb-sub-plan-features-header">Included Features:</div>
                      <ul className="tkb-sub-plan-features">
                        {plan.features.map((f, i) => (
                          <li
                            key={i}
                            className={`tkb-sub-plan-feature${!f.active ? ' tkb-sub-plan-excluded' : ''}`}
                          >
                            {f.active ? (
                              <svg className="tkb-feat-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            ) : (
                              <svg className="tkb-feat-cross" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                              </svg>
                            )}
                            <span>{f.text}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="tkb-sub-plan-footer">
                        <Link
                          to="/login"
                          className={`tkb-sub-plan-cta${plan.popular ? ' tkb-sub-plan-cta-primary' : ''}`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                          {t('subscription.login_to_subscribe', 'Login to Subscribe')}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="tkb-sub-faqs-section">
            <div className="container-lg">
              <div className="tkb-sub-section-header">
                <span className="tkb-sub-section-tag">QUESTIONS & ANSWERS</span>
                <h2 className="tkb-sub-section-title">Frequently Asked Questions</h2>
                <p className="tkb-sub-section-subtitle">
                  Got questions about how subscriptions work? Find quick answers below.
                </p>
              </div>

              <div className="tkb-sub-faqs-wrap">
                {faqs.map((faq, index) => {
                  const isOpen = activeFaq === index;
                  return (
                    <div className={`tkb-sub-faq-item${isOpen ? ' is-open' : ''}`} key={index}>
                      <button
                        type="button"
                        className="tkb-sub-faq-q"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                      >
                        <span>{faq.q}</span>
                        <svg className="tkb-sub-faq-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
                      </button>
                      {isOpen && (
                        <div className="tkb-sub-faq-a">
                          <p>{faq.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="tkb-sub-cta-section">
            <div className="container-lg">
              <div className="tkb-sub-cta-box">
                <div className="tkb-sub-cta-content">
                  <h2 className="tkb-sub-cta-title">{t('subscription.cta_title', 'Ready to scale your agricultural trading?')}</h2>
                  <p className="tkb-sub-cta-desc">
                    {t(
                      'subscription.cta_desc',
                      'Join thousands of successful farmers, traders, and exporters expanding their direct market reach every day.'
                    )}
                  </p>
                  <Link to="/login" className="tkb-sub-btn tkb-sub-btn-primary tkb-sub-btn-lg">
                    {t('subscription.cta_button', 'Login & Choose Your Plan')}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        /* =========================================================================
           LOGGED IN VIEW (Plan selection with 3 subscription plan boxes: Silver, Gold, Platinum)
           ========================================================================= */
        <div className="tkb-sub-page tkb-sub-loggedin-view">
          {/* Member Banner Header */}
          <section className="tkb-sub-member-hero">
            <div className="container-lg">
              <div className="tkb-sub-member-head">
                <div className="tkb-sub-member-badge">
                  <span className="tkb-sub-member-dot"></span>
                  Active Account: Verified Agri Trader
                </div>
                <h1 className="tkb-sub-member-title">Select Your Subscription Plan</h1>
                <p className="tkb-sub-member-desc">
                  Upgrade your account to unlock unlimited verified buyers, priority crop listings, and real-time mandi arrivals.
                </p>

                {subscribedPlan && (
                  <div className="tkb-sub-current-alert">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    <span>
                      Current Active Plan: <strong style={{ textTransform: 'capitalize' }}>{subscribedPlan} Plan</strong> (Renews next month)
                    </span>
                  </div>
                )}

                {/* Billing toggle */}
                <div className="tkb-sub-billing-toggle tkb-sub-billing-member">
                  <span className={`tkb-sub-billing-opt${billingCycle === 'monthly' ? ' is-active' : ''}`} onClick={() => setBillingCycle('monthly')}>
                    Monthly Billing
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={billingCycle === 'annual'}
                    className={`tkb-sub-switch${billingCycle === 'annual' ? ' is-checked' : ''}`}
                    onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                    aria-label="Toggle annual billing"
                  >
                    <span className="tkb-sub-switch-thumb"></span>
                  </button>
                  <span className={`tkb-sub-billing-opt${billingCycle === 'annual' ? ' is-active' : ''}`} onClick={() => setBillingCycle('annual')}>
                    Annual Billing
                    <span className="tkb-sub-discount-badge">Save 20%</span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* 3 Subscription Plan Boxes: a. Silver, b. Gold, c. Platinum */}
          <section className="tkb-sub-member-plans">
            <div className="container-lg">
              <div className="tkb-sub-plans-grid">
                {plans.map((plan) => {
                  const displayPrice = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
                  const isCurrent = subscribedPlan === plan.id;

                  return (
                    <div
                      className={`tkb-sub-plan-card tkb-sub-plan-${plan.color}${plan.popular ? ' tkb-sub-plan-popular' : ''}${isCurrent ? ' tkb-sub-plan-active' : ''}`}
                      key={plan.id}
                    >
                      {plan.popular && !isCurrent && (
                        <div className="tkb-sub-plan-badge">
                          ★ {t('subscription.most_popular', 'Most Recommended')}
                        </div>
                      )}
                      {isCurrent && (
                        <div className="tkb-sub-plan-badge tkb-sub-badge-active">
                          ✓ Current Plan
                        </div>
                      )}

                      <div className="tkb-sub-plan-header">
                        <div className="tkb-sub-plan-icon">{plan.icon}</div>
                        <span className="tkb-sub-plan-tier">{plan.tier}</span>
                        <h3 className="tkb-sub-plan-name">{plan.name}</h3>
                        <p className="tkb-sub-plan-tagline">{plan.tagline}</p>
                      </div>

                      <div className="tkb-sub-plan-price-wrap">
                        <div className="tkb-sub-plan-price">
                          <span className="tkb-sub-plan-currency">₹</span>
                          <span className="tkb-sub-plan-amount">{displayPrice}</span>
                          <span className="tkb-sub-plan-duration">/mo</span>
                        </div>
                        {billingCycle === 'annual' && (
                          <div className="tkb-sub-plan-billed-note">Billed annually: ₹{plan.annualTotal}</div>
                        )}
                      </div>

                      <div className="tkb-sub-plan-features-header">Plan Highlights:</div>
                      <ul className="tkb-sub-plan-features">
                        {plan.features.map((f, i) => (
                          <li
                            key={i}
                            className={`tkb-sub-plan-feature${!f.active ? ' tkb-sub-plan-excluded' : ''}`}
                          >
                            {f.active ? (
                              <svg className="tkb-feat-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            ) : (
                              <svg className="tkb-feat-cross" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                              </svg>
                            )}
                            <span>{f.text}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="tkb-sub-plan-footer">
                        {isCurrent ? (
                          <button type="button" className="tkb-sub-plan-cta tkb-sub-plan-cta-current" disabled>
                            ✓ Active Subscription
                          </button>
                        ) : (
                          <button
                            type="button"
                            className={`tkb-sub-plan-cta${plan.popular ? ' tkb-sub-plan-cta-primary' : ''}`}
                            onClick={() => handleSelectPlan(plan)}
                          >
                            Subscribe to {plan.name}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Enterprise / Need assistance bar */}
              <div className="tkb-sub-advisor-banner">
                <div className="tkb-sub-advisor-left">
                  <div className="tkb-sub-advisor-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 className="tkb-sub-advisor-title">Need help picking the right plan or customized bulk pricing?</h4>
                    <p className="tkb-sub-advisor-desc">Talk directly with our agricultural market advisors. We help farmers, FPOs, and traders find the best trading strategy.</p>
                  </div>
                </div>
                <Link to="/contact" className="tkb-sub-btn tkb-sub-btn-advisor">
                  Contact Agri Advisor
                </Link>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Checkout / Confirmation Modal */}
      {modalOpen && selectedPlan && (
        <div className="tkb-sub-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="tkb-sub-modal-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="tkb-sub-modal-close" onClick={() => setModalOpen(false)}>×</button>

            <div className="tkb-sub-modal-header">
              <div className="tkb-sub-modal-icon">{selectedPlan.icon}</div>
              <h3>Confirm {selectedPlan.name} Subscription</h3>
              <p>Review your plan details before proceeding to payment.</p>
            </div>

            <div className="tkb-sub-modal-summary">
              <div className="tkb-sub-modal-row">
                <span>Selected Tier</span>
                <strong>{selectedPlan.name} ({selectedPlan.tier})</strong>
              </div>
              <div className="tkb-sub-modal-row">
                <span>Billing Period</span>
                <strong>{billingCycle === 'annual' ? 'Annual (12 Months)' : 'Monthly (1 Month)'}</strong>
              </div>
              <div className="tkb-sub-modal-row">
                <span>Amount</span>
                <strong>
                  ₹{billingCycle === 'annual' ? selectedPlan.annualTotal : selectedPlan.monthlyPrice}
                  {billingCycle === 'annual' && <span className="tkb-modal-save"> (Saved 20%)</span>}
                </strong>
              </div>
              <div className="tkb-sub-modal-row">
                <span>GST (18%)</span>
                <span>Included</span>
              </div>
              <div className="tkb-sub-modal-divider"></div>
              <div className="tkb-sub-modal-row tkb-sub-modal-total">
                <span>Total Payable</span>
                <span className="tkb-sub-modal-total-amt">
                  ₹{billingCycle === 'annual' ? selectedPlan.annualTotal : selectedPlan.monthlyPrice}
                </span>
              </div>
            </div>

            <div className="tkb-sub-modal-methods">
              <span className="tkb-methods-label">Accepted Payment Methods:</span>
              <div className="tkb-methods-tags">
                <span className="tkb-method-tag">UPI (GPay / PhonePe / Paytm)</span>
                <span className="tkb-method-tag">Cards</span>
                <span className="tkb-method-tag">Net Banking</span>
              </div>
            </div>

            <div className="tkb-sub-modal-actions">
              <button
                type="button"
                className="tkb-sub-btn tkb-sub-btn-primary tkb-sub-btn-block"
                onClick={handleConfirmSubscription}
              >
                Proceed to Pay ₹{billingCycle === 'annual' ? selectedPlan.annualTotal : selectedPlan.monthlyPrice}
              </button>
              <button
                type="button"
                className="tkb-sub-btn tkb-sub-btn-ghost tkb-sub-btn-block"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Subscription;
