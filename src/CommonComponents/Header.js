import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/fasal-junction-horizontal.png';

const Header = () => {

  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const headerSentinelRef = useRef(null);
  const headerRef = useRef(null);
  const insightsRef = useRef(null);
  const moreRef = useRef(null);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileInsightsOpen(false);
    setMobileMoreOpen(false);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobile();
  }, [location.pathname, closeMobile]);

  // React IntersectionObserver for sticky header elevation without window scroll listeners
  useEffect(() => {
    const sentinel = headerSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // Broadcast sticky header height for secondary sticky bars (e.g. Blog category strip)
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty('--tkb-header-height', `${headerRef.current.offsetHeight}px`);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Close dropdowns on Escape key
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === 'Escape') {
        setInsightsOpen(false);
        setMoreOpen(false);
        closeMobile();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [closeMobile]);

  // Close desktop dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (insightsRef.current && !insightsRef.current.contains(e.target)) {
        setInsightsOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;

  // Quick links for Insights submenu
  const quickLinks = [
    { key: 'kisan_yojana', to: '#' },
    { key: 'kisan_stories', to: '#' },
    { key: 'kisan_tips', to: '#' },
    { key: 'kisan_guides', to: '#' },
    { key: 'agri_guides', to: '#' },
    { key: 'crop_guides', to: '#' },
  ];

  return (
    <>
      {/* React ref sentinel for sticky elevation detection */}
      <div
        ref={headerSentinelRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '1px',
          width: '100%',
          pointerEvents: 'none',
          visibility: 'hidden'
        }}
        aria-hidden="true"
      />
      <header ref={headerRef} className={`tkb-sticky-header tkb-header-v2${isScrolled ? ' tkb-header-scrolled' : ''}`}>
        <div className="tkb-header-inner">
          {/* Logo */}
          <Link to="/" className="tkb-header-logo" onClick={closeMobile}>
            <img
              src={logo}
              alt="Fasal Junction - आपका खेत, आपका बाजार"
              className="tkb-header-logo-img"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="tkb-nav-desktop" role="navigation" aria-label="Main navigation">
            <ul className="tkb-nav-list">
              <li className="tkb-nav-item">
                <Link to="/marketplace" className={`tkb-nav-link${isActive('/marketplace') ? ' tkb-nav-active' : ''}`}>{t('header.marketplace')}</Link>
              </li>
              <li className="tkb-nav-item">
                <Link to="/product-list" className={`tkb-nav-link${isActive('/product-list') ? ' tkb-nav-active' : ''}`}>{t('header.listing')}</Link>
              </li>
              <li className="tkb-nav-item">
                <Link to="/subscription" className={`tkb-nav-link${isActive('/subscription') ? ' tkb-nav-active' : ''}`}>{t('header.subscription')}</Link>
              </li>
              <li className="tkb-nav-item">
                <Link to="/seeds" className={`tkb-nav-link${isActive('/seeds') ? ' tkb-nav-active' : ''}`}>{t('header.seeds')}</Link>
              </li>
              <li className="tkb-nav-item tkb-nav-mandi-item">
                <Link to="/mandi-rate" className={`tkb-nav-link tkb-nav-mandi-link${isActive('/mandi-rate') ? ' tkb-nav-active' : ''}`}>
                  {t('header.mandi_rates')}
                  <span className="tkb-header-live-badge" aria-label="Live rates">
                    <span className="tkb-live-radar-dot">
                      <span className="tkb-live-radar-ping"></span>
                    </span>
                    {t('header.live')}
                  </span>
                </Link>
              </li>
              {/* Insights with Quick Links submenu */}
              <li className="tkb-nav-item tkb-nav-dropdown" ref={insightsRef}>
                <button
                  type="button"
                  className={`tkb-nav-link tkb-nav-dropdown-toggle${insightsOpen ? ' tkb-dropdown-open' : ''}`}
                  onClick={() => { setInsightsOpen(!insightsOpen); setMoreOpen(false); }}
                  aria-expanded={insightsOpen}
                  aria-haspopup="true"
                >
                  {t('header.insights')}
                  <svg className="tkb-nav-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div className={`tkb-dropdown-menu tkb-dropdown-insights${insightsOpen ? ' tkb-dropdown-show' : ''}`}>
                  {quickLinks.map((link) => (
                    <Link key={link.key} to={link.to} className="tkb-dropdown-item" onClick={() => setInsightsOpen(false)}>
                      {t(`header.${link.key}`)}
                    </Link>
                  ))}
                </div>
              </li>
              {/* More dropdown */}
              <li className="tkb-nav-item tkb-nav-dropdown" ref={moreRef}>
                <button
                  type="button"
                  className={`tkb-nav-link tkb-nav-dropdown-toggle${moreOpen ? ' tkb-dropdown-open' : ''}`}
                  onClick={() => { setMoreOpen(!moreOpen); setInsightsOpen(false); }}
                  aria-expanded={moreOpen}
                  aria-haspopup="true"
                >
                  {t('header.more')}
                  <svg className="tkb-nav-chevron" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div className={`tkb-dropdown-menu${moreOpen ? ' tkb-dropdown-show' : ''}`}>
                  <Link to="/about" className={`tkb-dropdown-item${isActive('/about') ? ' tkb-dropdown-active' : ''}`} onClick={() => setMoreOpen(false)}>{t('header.about_us')}</Link>
                  <Link to="/blog" className={`tkb-dropdown-item${isActive('/blog') ? ' tkb-dropdown-active' : ''}`} onClick={() => setMoreOpen(false)}>{t('header.blog')}</Link>
                  <Link to="/contact" className={`tkb-dropdown-item${isActive('/contact') ? ' tkb-dropdown-active' : ''}`} onClick={() => setMoreOpen(false)}>{t('header.contact')}</Link>
                </div>
              </li>
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="tkb-header-actions">
            <select
              name="language"
              className="tkb-btn-buy-sell tkb-lang-select"
              aria-label="Language"
              value={i18n.language === 'hi' ? 'hindi' : 'english'}
              onChange={(e) => {
                const lang = e.target.value === 'hindi' ? 'hi' : 'en';
                i18n.changeLanguage(lang);
              }}
            >
              <option value="english">English</option>
              <option value="hindi">हिन्दी</option>
            </select>
            <Link to="/enquiry" className="tkb-btn-buy-sell">{t('header.buy_sell')}</Link>
            <Link to="/login" className="tkb-btn-buy-sell">{t('header.login')}</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`tkb-hamburger${mobileOpen ? ' tkb-hamburger-active' : ''}`}
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            <span className="tkb-hamburger-line"></span>
            <span className="tkb-hamburger-line"></span>
            <span className="tkb-hamburger-line"></span>
          </button>
        </div>

        {/* Mobile Overlay */}
        <div className={`tkb-mobile-overlay${mobileOpen ? ' tkb-mobile-overlay-show' : ''}`} onClick={closeMobile}></div>

        {/* Mobile Drawer */}
        <nav className={`tkb-mobile-drawer${mobileOpen ? ' tkb-mobile-drawer-show' : ''}`} role="navigation" aria-label="Mobile navigation">
          <div className="tkb-mobile-drawer-header">
            <Link to="/" className="tkb-header-logo" onClick={closeMobile}>
              <img src={logo} alt="Fasal Junction" className="tkb-header-logo-img" />
            </Link>
            <button className="tkb-mobile-close" onClick={closeMobile} aria-label="Close menu">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>
          <ul className="tkb-mobile-nav-list">
            <li>
              <Link to="/marketplace" className={`tkb-mobile-nav-link${isActive('/marketplace') ? ' tkb-nav-active' : ''}`} onClick={closeMobile}>{t('header.marketplace')}</Link>
            </li>
            <li>
              <Link to="/product-list" className={`tkb-mobile-nav-link${isActive('/product-list') ? ' tkb-nav-active' : ''}`} onClick={closeMobile}>{t('header.listing')}</Link>
            </li>
            <li>
              <Link to="/subscription" className={`tkb-mobile-nav-link${isActive('/subscription') ? ' tkb-nav-active' : ''}`} onClick={closeMobile}>{t('header.subscription')}</Link>
            </li>
            <li>
              <Link to="/seeds" className={`tkb-mobile-nav-link${isActive('/seeds') ? ' tkb-nav-active' : ''}`} onClick={closeMobile}>{t('header.seeds')}</Link>
            </li>
            <li>
              <Link to="/mandi-rate" className={`tkb-mobile-nav-link${isActive('/mandi-rate') ? ' tkb-nav-active' : ''}`} onClick={closeMobile}>
                {t('header.mandi_rates')}
                <span className="tkb-header-live-badge tkb-live-badge-mobile" aria-label="Live rates">
                  <span className="tkb-live-radar-dot"><span className="tkb-live-radar-ping"></span></span>
                  {t('header.live')}
                </span>
              </Link>
            </li>
            {/* Insights accordion */}
            <li className="tkb-mobile-accordion">
              <button
                type="button"
                className={`tkb-mobile-nav-link tkb-mobile-accordion-toggle${mobileInsightsOpen ? ' tkb-accordion-open' : ''}`}
                onClick={() => setMobileInsightsOpen(!mobileInsightsOpen)}
                aria-expanded={mobileInsightsOpen}
              >
                {t('header.insights')}
                <svg className="tkb-mobile-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className={`tkb-mobile-submenu${mobileInsightsOpen ? ' tkb-mobile-submenu-open' : ''}`}>
                {quickLinks.map((link) => (
                  <Link key={link.key} to={link.to} className="tkb-mobile-submenu-link" onClick={closeMobile}>
                    {t(`header.${link.key}`)}
                  </Link>
                ))}
              </div>
            </li>
            {/* More accordion */}
            <li className="tkb-mobile-accordion">
              <button
                type="button"
                className={`tkb-mobile-nav-link tkb-mobile-accordion-toggle${mobileMoreOpen ? ' tkb-accordion-open' : ''}`}
                onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                aria-expanded={mobileMoreOpen}
              >
                {t('header.more')}
                <svg className="tkb-mobile-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
              <div className={`tkb-mobile-submenu${mobileMoreOpen ? ' tkb-mobile-submenu-open' : ''}`}>
                <Link to="/about" className="tkb-mobile-submenu-link" onClick={closeMobile}>{t('header.about_us')}</Link>
                <Link to="/blog" className="tkb-mobile-submenu-link" onClick={closeMobile}>{t('header.blog')}</Link>
                <Link to="/contact" className="tkb-mobile-submenu-link" onClick={closeMobile}>{t('header.contact')}</Link>
              </div>
            </li>
          </ul>
          <div className="tkb-mobile-drawer-footer">
            <select
              name="language-mobile"
              className="tkb-btn-buy-sell tkb-lang-select"
              aria-label="Language"
              value={i18n.language === 'hi' ? 'hindi' : 'english'}
              onChange={(e) => {
                const lang = e.target.value === 'hindi' ? 'hi' : 'en';
                i18n.changeLanguage(lang);
              }}
            >
              <option value="english">English</option>
              <option value="hindi">हिन्दी</option>
            </select>
            <Link to="/enquiry" className="tkb-btn-buy-sell" onClick={closeMobile}>{t('header.buy_sell')}</Link>
            <Link to="/login" className="tkb-btn-buy-sell" onClick={closeMobile}>{t('header.login')}</Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;