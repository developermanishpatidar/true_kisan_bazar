import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './MandiRate.css';
import { initialMandiRates, getLocalizedMandiRate } from '../data/mandiRatesData';

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'vegetables', label: 'Vegetables' },
  { key: 'fruits', label: 'Fruits' },
  { key: 'grains_pulses', label: 'Grains & Pulses' },
  { key: 'spices', label: 'Spices' },
  { key: 'cash_crops', label: 'Cash Crops' }
];

const MandiRate = () => {
  const { t, i18n } = useTranslation();
  const [rates, setRates] = useState(initialMandiRates);
  const [visibleCount, setVisibleCount] = useState(12);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Try to load any additional real-time live rates from API, merging with comprehensive dataset
  useEffect(() => {
    let isMounted = true;
    const fetchLiveRates = async () => {
      try {
        const response = await fetch('https://api.maikisaan.com/api/mobile/v1/home-mandi/');
        if (response.ok) {
          const data = await response.json();
          if (isMounted && data.records && Array.isArray(data.records) && data.records.length > 0) {
            // Format incoming live records to match schema
            const liveItems = data.records.map((item, index) => ({
              id: `live-${index}`,
              commodity: item.commodity || 'Commodity',
              market: item.market || 'APMC',
              state: item.state || 'India',
              modal_price: item.modal_price || 0,
              price_trend: (item.price_change_pct !== null && item.price_change_pct > 0) ? 'up' : 'down',
              category: 'Vegetables',
              unit: 'Quintal',
              arrival_date: item.arrival_date || 'Today',
              image: item.image || 'https://d1yqhfsa94yj9h.cloudfront.net/media/product_subcategories/tomato.png'
            }));

            // Merge with local dataset without duplicating exact commodity + market
            setRates((prev) => {
              const liveKeys = new Set(liveItems.map(l => `${l.commodity.toLowerCase()}-${l.market.toLowerCase()}`));
              const nonDuplicatePrev = prev.filter(p => !liveKeys.has(`${p.commodity.toLowerCase()}-${p.market.toLowerCase()}`));
              return [...liveItems, ...nonDuplicatePrev];
            });
          }
        }
      } catch (err) {
        // Silently use rich local rates if offline or API is restricted
      }
    };

    fetchLiveRates();
    return () => {
      isMounted = false;
    };
  }, []);

  // Filter rates by search query and category
  const filteredRates = rates.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !query ||
      item.commodity.toLowerCase().includes(query) ||
      item.market.toLowerCase().includes(query) ||
      (item.state && item.state.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const displayedRates = filteredRates.slice(0, visibleCount);
  const hasMore = visibleCount < filteredRates.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setVisibleCount(12); // Reset back to 12 when searching
  };

  const handleCategorySelect = (catLabel) => {
    setSelectedCategory(catLabel);
    setVisibleCount(12); // Reset back to 12 when changing category
  };

  const clearSearch = () => {
    setSearchQuery('');
    setVisibleCount(12);
  };

  return (
    <div className="tkb-page">
      <Header />
      <main className="main-content">
        <div className="mandi-page-wrapper">
          <div className="mandi-container">
            {/* Header with Title and Live Badge */}
            <div className="mandi-header-bar">
              <div className="mandi-title-group">
                <h1 className="mandi-main-title">{t('mandi_page.title')}</h1>
                <div className="mandi-live-badge">
                  {t('mandi_page.live')} <span className="mandi-live-dot" aria-hidden="true" />
                </div>
              </div>
            </div>

            {/* Controls: Search and Categories */}
            <div className="mandi-controls">
              <div className="mandi-search-row">
                <div className="mandi-search-input-wrap">
                  <span className="mandi-search-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="mandi-search-input"
                    placeholder={t('mandi_page.search_placeholder')}
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="mandi-search-clear"
                      onClick={clearSearch}
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Category Pills */}
              <div className="mandi-categories-bar" role="tablist">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    role="tab"
                    aria-selected={selectedCategory === cat.label}
                    className={`mandi-cat-chip ${selectedCategory === cat.label ? 'active' : ''}`}
                    onClick={() => handleCategorySelect(cat.label)}
                  >
                    {t(`mandi_page.${cat.key}`, cat.label)}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Mandi Rate Cards */}
            {displayedRates.length > 0 ? (
              <div className="mandi-grid">
                {displayedRates.map((rawItem) => {
                  const item = getLocalizedMandiRate(rawItem, i18n.language);
                  return (
                    <div className="mandi-card" key={item.id}>
                      <div className="mandi-card-top">
                        <div className="mandi-image-circle">
                          <img
                            src={item.image}
                            alt={item.commodity}
                            loading="lazy"
                            onError={(e) => {
                              e.target.src = 'https://d1yqhfsa94yj9h.cloudfront.net/media/product_subcategories/tomato.png';
                            }}
                          />
                        </div>
                        <div className="mandi-info">
                          <h4 title={item.commodity}>{item.commodity}</h4>
                          <span title={`${item.market}, ${item.state || ''}`}>{item.market}</span>
                        </div>
                      </div>

                      {/* Price with Directional Arrow */}
                      <div className="mandi-price-box">
                        {item.price_trend === 'up' ? (
                          <svg width="13" height="10" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Price up">
                            <path d="M0 14L10.2308 0L21 14H0Z" fill="#19A047" />
                          </svg>
                        ) : (
                          <svg width="13" height="10" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Price down">
                            <path d="M0 0L10.2308 14L21 0H0Z" fill="#D70000" />
                          </svg>
                        )}
                        <h3>
                          ₹{Number(item.modal_price).toLocaleString('en-IN')}/- {item.unit || (i18n.language === 'hi' ? 'क्विंटल' : 'Quintal')}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="mandi-empty-state">
                <h3>{t('mandi_page.no_results')}</h3>
                <p>
                  {i18n.language === 'hi'
                    ? `"${searchQuery}" से मेल खाने वाला कोई परिणाम नहीं मिला। कृपया अन्य शब्द या श्रेणी खोजें।`
                    : `We couldn't find any results matching "${searchQuery}". Try a different keyword or category.`}
                </p>
                <button
                  type="button"
                  className="mandi-reset-btn"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                >
                  {i18n.language === 'hi' ? 'फ़िल्टर रीसेट करें' : 'Reset Filters'}
                </button>
              </div>
            )}

            {/* Load More Option */}
            {hasMore && (
              <div className="mandi-load-more-section">
                <span className="mandi-count-label">
                  {i18n.language === 'hi'
                    ? `कुल ${filteredRates.length} में से ${displayedRates.length} मंडी भाव`
                    : `Showing ${displayedRates.length} of ${filteredRates.length} mandi prices`}
                </span>
                <button
                  type="button"
                  className="mandi-load-more-btn"
                  onClick={handleLoadMore}
                >
                  {t('mandi_page.load_more')}
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MandiRate;
