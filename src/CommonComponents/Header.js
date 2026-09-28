import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/fasal-junction-horizontal.png';

const Header = () => {

  const { t, i18n } = useTranslation();
  const isHi = i18n.language === 'hi';
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileInsightsOpen, setMobileInsightsOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = localStorage.getItem('isLoggedIn');
    return saved !== null ? saved === 'true' : true;
  });
  const headerRef = useRef(null);
  const insightsRef = useRef(null);
  const moreRef = useRef(null);
  const accountRef = useRef(null);
  const insightsTimeoutRef = useRef(null);
  const moreTimeoutRef = useRef(null);

  const toggleAccountPopup = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAccountOpen((prev) => !prev);
  }, []);

  const closeAccountPopup = useCallback(() => {
    setIsAccountOpen(false);
  }, []);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    localStorage.setItem('isLoggedIn', 'false');
    setIsAccountOpen(false);
    navigate('/login');
  }, [navigate]);

  const handleInsightsEnter = useCallback(() => {
    if (insightsTimeoutRef.current) clearTimeout(insightsTimeoutRef.current);
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    setMoreOpen(false);
    setInsightsOpen(true);
  }, []);

  const handleInsightsLeave = useCallback(() => {
    if (insightsTimeoutRef.current) clearTimeout(insightsTimeoutRef.current);
    insightsTimeoutRef.current = setTimeout(() => {
      setInsightsOpen(false);
    }, 180);
  }, []);

  const handleMoreEnter = useCallback(() => {
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    if (insightsTimeoutRef.current) clearTimeout(insightsTimeoutRef.current);
    setInsightsOpen(false);
    setMoreOpen(true);
  }, []);

  const handleMoreLeave = useCallback(() => {
    if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    moreTimeoutRef.current = setTimeout(() => {
      setMoreOpen(false);
    }, 180);
  }, []);

  // Clear dropdown timeouts on unmount
  useEffect(() => {
    return () => {
      if (insightsTimeoutRef.current) clearTimeout(insightsTimeoutRef.current);
      if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
    };
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileInsightsOpen(false);
    setMobileMoreOpen(false);
  }, []);

  // Close mobile menu and account popup on route change
  useEffect(() => {
    closeMobile();
    setIsAccountOpen(false);
  }, [location.pathname, closeMobile]);

  // Sync login status across tabs / pages
  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === 'isLoggedIn') {
        setIsLoggedIn(e.newValue !== 'false');
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  // Handle scroll detection for sticky header elevation and backdrop styling
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 8;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
        setIsAccountOpen(false);
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
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setIsAccountOpen(false);
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
      <header
        ref={headerRef}
        className={`tkb-sticky-header tkb-header-v2${isScrolled ? ' tkb-header-scrolled' : ''}`}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1030
        }}
      >
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
              <li
                className="tkb-nav-item tkb-nav-dropdown"
                ref={insightsRef}
                onMouseEnter={handleInsightsEnter}
                onMouseLeave={handleInsightsLeave}
              >
                <button
                  type="button"
                  className={`tkb-nav-link tkb-nav-dropdown-toggle${insightsOpen ? ' tkb-dropdown-open' : ''}`}
                  onClick={() => { setInsightsOpen((prev) => !prev); setMoreOpen(false); }}
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
              <li
                className="tkb-nav-item tkb-nav-dropdown"
                ref={moreRef}
                onMouseEnter={handleMoreEnter}
                onMouseLeave={handleMoreLeave}
              >
                <button
                  type="button"
                  className={`tkb-nav-link tkb-nav-dropdown-toggle${moreOpen ? ' tkb-dropdown-open' : ''}`}
                  onClick={() => { setMoreOpen((prev) => !prev); setInsightsOpen(false); }}
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

            {isLoggedIn ? (
              <div className="tkb-account-wrap" ref={accountRef}>
                <button
                  type="button"
                  className="tkb-btn-account"
                  id="accountMenuToggle"
                  onClick={toggleAccountPopup}
                  aria-expanded={isAccountOpen}
                  aria-controls="accountPopup"
                  title={isHi ? 'लॉग इन उपयोगकर्ता - मेनू' : 'Logged In User - Menu'}
                >
                  <span className="tkb-btn-account-icon" aria-hidden="true">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="3.2"/>
                      <path d="M5.5 19c.6-3.4 3.1-5.2 6.5-5.2s5.9 1.8 6.5 5.2"/>
                    </svg>
                  </span>
                  <span>{t('header.logged_in_user', 'Vijay Patidar')}</span>
                  <span className="tkb-account-status-dot" aria-hidden="true"></span>
                  <svg
                    className={`tkb-account-chevron${isAccountOpen ? ' is-open' : ''}`}
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>

                {/* Account Popup with Logout Button */}
                <div
                  className={`tkb-account-popup${isAccountOpen ? ' is-open' : ''}`}
                  id="accountPopup"
                  role="menu"
                  aria-label="User Account"
                >
                  <div className="tkb-account-popup-user">
                    <div className="tkb-account-popup-avatar">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2e9d3a" strokeWidth="2">
                        <circle cx="12" cy="8" r="3.2"/>
                        <path d="M5.5 19c.6-3.4 3.1-5.2 6.5-5.2s5.9 1.8 6.5 5.2"/>
                      </svg>
                    </div>
                    <div className="tkb-account-popup-info">
                      <div className="tkb-account-popup-name">{t('header.logged_in_user', 'Vijay Patidar')}</div>
                      <div className="tkb-account-popup-role">
                        <span className="tkb-account-status-dot"></span>
                        {isHi ? 'सत्यापित किसान (लॉग इन)' : 'Verified Farmer (Logged In)'}
                      </div>
                    </div>
                  </div>

                  <ul className="tkb-account-popup-list">
                    <li>
                      <Link to="/profile" role="menuitem" onClick={closeAccountPopup}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <circle cx="12" cy="8" r="3.2"/><path d="M5.5 19c.6-3.4 3.1-5.2 6.5-5.2s5.9 1.8 6.5 5.2"/>
                        </svg>
                        <span>{t('header.profile')}</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/subscription" role="menuitem" onClick={closeAccountPopup}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <rect x="3" y="7" width="18" height="12" rx="2"/><path d="M7 7V5.8A5 5 0 0 1 17 7"/>
                        </svg>
                        <span>{t('header.subscription')}</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/marketplace" role="menuitem" onClick={closeAccountPopup}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>
                        </svg>
                        <span>{t('header.my_enquiry_list')}</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="tkb-popup-logout-btn"
                        role="menuitem"
                        onClick={handleLogout}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <path d="M10 17l5-5-5-5"/>
                          <path d="M15 12H3"/>
                          <path d="M21 21V3"/>
                        </svg>
                        <span>{t('header.logout')}</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Link to="/login" className="tkb-btn-buy-sell">{t('header.login')}</Link>
            )}
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
            {isLoggedIn && (
              <li>
                <Link to="/profile" className={`tkb-mobile-nav-link${isActive('/profile') ? ' tkb-nav-active' : ''}`} onClick={closeMobile}>
                  <span className="tkb-account-status-dot" style={{ marginRight: '8px' }}></span>
                  {t('header.profile')} ({t('header.logged_in_user', 'Vijay Patidar')})
                </Link>
              </li>
            )}
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
            {isLoggedIn ? (
              <button
                type="button"
                className="tkb-btn-buy-sell tkb-btn-mobile-logout"
                onClick={() => {
                  closeMobile();
                  handleLogout();
                }}
              >
                {t('header.logout')}
              </button>
            ) : (
              <Link to="/login" className="tkb-btn-buy-sell" onClick={closeMobile}>{t('header.login')}</Link>
            )}
          </div>
        </nav>

        {/* Account Backdrop for outside clicks */}
        <div
          className={`tkb-account-backdrop${isAccountOpen ? ' is-open' : ''}`}
          id="accountPopupBackdrop"
          onClick={closeAccountPopup}
          aria-hidden="true"
        />
      </header>
    </>
  )
}

export default Header;