import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './Faq.css';

const FAQ_ITEMS = [
  {
    id: 'what-is-fasal-junction',
    category: 'general',
    categoryLabel: 'General',
    question: 'What is Fasal Junction and how does it work?',
    answer: "Fasal Junction is India's dedicated digital agricultural marketplace connecting farmers, buyers, FPOs, and agribusinesses directly. Farmers can post crop sell enquiries with photos, varieties, and expected prices, while bulk buyers and agro-processors post purchase requirements. Users can also view live daily mandi rates across APMC mandis to trade with transparent rate knowledge."
  },
  {
    id: 'is-free-for-farmers',
    category: 'general',
    categoryLabel: 'General',
    question: 'Is Fasal Junction free to use for farmers?',
    answer: 'Yes! Creating an account, checking live mandi rates across India, and posting crop sell enquiries on Fasal Junction is completely free for farmers. Our mission is to eliminate unfair intermediaries and help farmers receive the best possible value for their harvest.'
  },
  {
    id: 'who-can-register',
    category: 'general',
    categoryLabel: 'General',
    question: 'Who can register and trade on Fasal Junction?',
    answer: 'Any individual or organization involved in agriculture can register, including individual farmers, tenant cultivators, Farmer Producer Organizations (FPOs), commission agents, mandi traders, wholesalers, retail buyers, food processing manufacturers, and exporters.'
  },
  {
    id: 'how-to-post-enquiry',
    category: 'farmers',
    categoryLabel: 'For Farmers',
    question: 'How do I post an enquiry to sell my crop?',
    answer: 'Click on the "Buy & Sell" button or navigate to the Enquiry page. Select "Sell", pick your product category (Fruits, Vegetables, Grains, or Pulses), choose your sub-category and variety, set your location, quantity (in kg, quintal, or ton), and your expected price bracket. You can also upload photos of your crop lot and set your harvest availability before submitting.'
  },
  {
    id: 'price-units-switch',
    category: 'farmers',
    categoryLabel: 'For Farmers',
    question: 'How do price options work when I change quantity units (kg / quintal / ton)?',
    answer: 'Fasal Junction automatically recalculates and displays realistic mandi price ranges based on the unit you select. For example, selecting "kg" shows price brackets per kg (e.g. ₹30 - ₹60 / kg), while switching to "quintal" or "ton" updates both the Expected Price and Minimum Expected Price brackets to per-quintal (e.g. ₹2,500 - ₹4,000 / quintal) or per-ton rates respectively.'
  },
  {
    id: 'crop-photos-importance',
    category: 'farmers',
    categoryLabel: 'For Farmers',
    question: 'Why should I upload multiple photos of my crop lot?',
    answer: 'High-quality, genuine photos of your crop, grain uniformity, and packaging increase buyer trust significantly. Listings with genuine photos receive up to 3x more buyer inquiries and result in faster deal closures with minimal physical sample rejections.'
  },
  {
    id: 'how-buyers-contact',
    category: 'farmers',
    categoryLabel: 'For Farmers',
    question: 'How do buyers contact me after I post an enquiry?',
    answer: "When a verified buyer is interested in your crop lot, they can request contact details or respond directly through the platform. You will receive an SMS and in-app notification with the buyer's details so you can discuss inspection, dispatch, and payment terms directly."
  },
  {
    id: 'how-to-search-crops',
    category: 'buyers',
    categoryLabel: 'For Buyers',
    question: 'How can buyers find specific crop varieties and grades?',
    answer: 'Buyers can navigate to the Product Listings page or use the top search bar. You can filter crops by Category (Grains, Pulses, Fruits, Vegetables), Sub-Category, Grade (Grade A export, Grade B market standard), and state or district location.'
  },
  {
    id: 'unlock-contact-details',
    category: 'buyers',
    categoryLabel: 'For Buyers',
    question: 'How do I unlock contact details for a crop listing?',
    answer: "On any product card or Product Details page, registered buyers can click 'Unlock Contact' to view the farmer's name, verified contact number, and exact farm or mandi location. This connects you directly without unnecessary brokerage fees."
  },
  {
    id: 'buyer-post-requirement',
    category: 'buyers',
    categoryLabel: 'For Buyers',
    question: 'Can commercial buyers and manufacturers post bulk buying requirements?',
    answer: 'Yes! On the Enquiry page, toggle to "Buy". You can specify the commodity, required quantity, target delivery location, and expected price bracket. Local farmers and FPOs with matching harvests will be notified to contact you.'
  },
  {
    id: 'mandi-rates-source',
    category: 'mandi',
    categoryLabel: 'Mandi Rates',
    question: 'Where do the live mandi rates come from?',
    answer: 'Mandi rates on Fasal Junction are sourced directly from government APMC mandi feeds (including AGMARKNET), state agriculture marketing boards, and verified on-ground mandi reporters. We display minimum, maximum, and modal prices updated on active trading days.'
  },
  {
    id: 'mandi-rates-frequency',
    category: 'mandi',
    categoryLabel: 'Mandi Rates',
    question: 'How often are mandi rates updated?',
    answer: 'Rates are updated continuously as market sessions report their daily arrivals and modal auction rates, typically between 10:00 AM and 5:00 PM IST on working market days.'
  },
  {
    id: 'why-actual-price-differs',
    category: 'mandi',
    categoryLabel: 'Mandi Rates',
    question: 'Why might negotiated farm-gate prices differ from mandi modal rates?',
    answer: 'APMC modal rates reflect wholesale auction averages inside the market yard. The actual farm-gate price agreed between buyer and seller may vary depending on moisture content, foreign matter, grain size, packaging, freight distance, and immediate market supply.'
  },
  {
    id: 'transportation-logistics',
    category: 'payments',
    categoryLabel: 'Safety & Payments',
    question: 'Who handles transportation and freight delivery for crop lots?',
    answer: 'By default, transportation terms are agreed directly between the buyer and seller during negotiation (e.g. ex-farm pickup by buyer or mandi delivery by farmer). Fasal Junction also assists in connecting traders with verified agri-logistics partners upon request.'
  },
  {
    id: 'trade-payment-safety',
    category: 'payments',
    categoryLabel: 'Safety & Payments',
    question: 'How are payments safely handled between buyer and seller?',
    answer: 'We strongly advise parties to verify quality certificates and weight slips before releasing final payments. Standard trade practice recommends an initial advance upon loading and final settlement upon weight slip confirmation at the unloading point. Never share banking passwords or OTPs with anyone.'
  },
  {
    id: 'dispute-resolution',
    category: 'payments',
    categoryLabel: 'Safety & Payments',
    question: 'What happens if there is a dispute regarding lot quality or weight?',
    answer: 'We encourage buyers and sellers to establish clear acceptance criteria (e.g. moisture threshold, dockage percentage) in advance. If a disagreement occurs, you can contact our Customer Support desk for mediation assistance and trade verification records.'
  }
];

const CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General' },
  { id: 'farmers', label: 'For Farmers' },
  { id: 'buyers', label: 'For Buyers' },
  { id: 'mandi', label: 'Mandi Rates' },
  { id: 'payments', label: 'Safety & Payments' }
];

const Faq = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIds, setOpenIds] = useState(new Set(['what-is-fasal-junction', 'how-to-post-enquiry']));

  const [headerHeight, setHeaderHeight] = useState(80);
  const [isCategorySticky, setIsCategorySticky] = useState(false);
  const sentinelRef = useRef(null);

  // Dynamically track sticky header height
  useEffect(() => {
    const updateHeight = () => {
      const headerEl = document.querySelector('.tkb-sticky-header');
      if (headerEl) {
        setHeaderHeight(headerEl.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // IntersectionObserver to detect when category strip reaches sticky position
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCategorySticky(!entry.isIntersecting);
      },
      {
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0
      }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [headerHeight]);

  // Toggle single accordion item
  const toggleItem = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Filter questions based on search query and category tab
  const filteredFaqs = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return FAQ_ITEMS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        !q ||
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="tkb-faq-page">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="tkb-faq-hero">
          <div className="tkb-faq-hero-bg" aria-hidden="true" />
          <div className="container-lg tkb-faq-hero-inner">
            <span className="tkb-faq-kicker">
              {t('faq.kicker', 'Help & Knowledge Center')}
            </span>
            <h1>{t('footer.faq', 'Frequently Asked Questions')}</h1>
            <p>
              {t(
                'faq.hero_desc',
                'Got questions about crop trading, live mandi rates, or posting enquiries? Find clear answers below.'
              )}
            </p>

            {/* Live Search Input */}
            <div className="tkb-faq-search-wrap">
              <svg
                className="tkb-faq-search-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                className="tkb-faq-search-input"
                placeholder={t('faq.search_placeholder', 'Search answers, crop enquiry, mandi rates, payments...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search FAQs"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="tkb-faq-clear-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Category Strip Sentinel */}
        <div ref={sentinelRef} className="tkb-faq-category-sentinel" aria-hidden="true" />

        {/* Sticky Category Filter Strip */}
        <div
          className={`tkb-faq-category-strip${isCategorySticky ? ' is-sticky' : ''}`}
          style={{ top: `${headerHeight}px` }}
        >
          <div className="container-lg" style={{ maxWidth: '960px' }}>
            <div className="tkb-faq-categories" role="tablist" aria-label="FAQ categories">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  className={`tkb-faq-tab${activeCategory === cat.id ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="tkb-faq-content">
          <div className="container-lg" style={{ maxWidth: '960px' }}>

            {/* Results Count Bar */}
            <div className="tkb-faq-results-bar">
              <span>
                Showing <strong className="tkb-faq-count-badge">{filteredFaqs.length}</strong> questions
              </span>
              {searchQuery && (
                <span>
                  Search results for &quot;<em>{searchQuery}</em>&quot;
                </span>
              )}
            </div>

            {/* Accordion List */}
            {filteredFaqs.length > 0 ? (
              <div className="tkb-faq-accordion">
                {filteredFaqs.map((faq) => {
                  const isOpen = openIds.has(faq.id);
                  return (
                    <div
                      key={faq.id}
                      className={`tkb-faq-item${isOpen ? ' open' : ''}`}
                    >
                      <button
                        type="button"
                        className="tkb-faq-question"
                        onClick={() => toggleItem(faq.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-ans-${faq.id}`}
                      >
                        <div className="tkb-faq-q-left">
                          <span className="tkb-faq-q-badge">{faq.categoryLabel}</span>
                          <span>{faq.question}</span>
                        </div>
                        <span className="tkb-faq-icon-toggle" aria-hidden="true">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          id={`faq-ans-${faq.id}`}
                          className="tkb-faq-answer"
                          role="region"
                        >
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              /* No Search Results */
              <div className="tkb-faq-empty">
                <svg
                  className="tkb-faq-empty-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                <h3>No Matching Questions Found</h3>
                <p>
                  We couldn&apos;t find any FAQs matching &quot;{searchQuery}&quot;. Try using different terms or browse all categories.
                </p>
                <button
                  type="button"
                  className="tkb-faq-reset-btn"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                >
                  Reset Search & Filters
                </button>
              </div>
            )}

            {/* Bottom Support Assistance Banner */}
            <div className="tkb-faq-help-card">
              <div className="tkb-faq-help-info">
                <h3>Still have questions?</h3>
                <p>Can&apos;t find the answer you&apos;re looking for? Our agricultural support team is here to help.</p>
              </div>
              <div className="tkb-faq-help-actions">
                <Link to="/contact" className="tkb-faq-btn-contact">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  {t('footer.contact', 'Contact Support')}
                </Link>
                <a href="tel:+911800123456" className="tkb-faq-btn-call">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z" /></svg>
                  1800-123-456
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Faq;
