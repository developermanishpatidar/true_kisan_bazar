import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/fasal-junction-horizontal.png';

const FooterIcon = ({ children }) => (
  <span className="tkb-footer-icon" aria-hidden="true">{children}</span>
);

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="tkb-footer-wrap">
      <footer className="tkb-footer">
        <div className="container-lg">
          <div className="row g-4 gy-5">
            <div className="col-lg-3 col-md-6">
              <div className="tkb-footer-brand">
                <Link to="/" className="tkb-footer-logo">
                  <img src={logo} width="180" height="48" alt="Fasal Junction" />
                </Link>
                <p className="tkb-footer-tagline">{t('footer.tagline')}</p>
                <div className="tkb-footer-social">
                  <Link to="#" aria-label="Facebook">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z"/></svg>
                  </Link>
                  <Link to="#" aria-label="Twitter">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14.7 10.3 22 2h-2.2l-6.2 7-5-7H2.5l7.7 10.8L2 22h2.2l6.8-7.7L16.3 22H22l-7.3-11.7Zm-2.4 2.7-1.1-1.5-6.2-8.3h2.7l4.9 6.6 1.1 1.5 6.5 8.7h-2.7l-5.2-7z"/></svg>
                  </Link>
                  <Link to="#" aria-label="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 12.2s-.2-3.4-1-4.2c-.9-1-2-1-2.5-1.1C16.4 6.6 12 6.6 12 6.6h0s-4.4 0-7.5.3c-.5.1-1.6.1-2.5 1.1-.8.8-1 4.2-1 4.2S.8 15.6 1.6 16.5c.9 1 2.1.9 2.6 1C6.8 17.8 12 17.9 12 17.9s4.4 0 7.5-.3c.5-.1 1.7-.1 2.5-1.1.8-.9 1-4.3 1-4.3zM9.8 15.3V9.2l5.5 3.05z"/></svg>
                  </Link>
                  <Link to="#" aria-label="Instagram">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>
                  </Link>
                  <Link to="#" aria-label="LinkedIn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 9H4V20h2.5zM5.2 4A1.6 1.6 0 1 0 5.2 7.2 1.6 1.6 0 0 0 5.2 4zM20 20h-2.5v-5.6c0-1.7-.7-2.3-1.7-2.3s-1.9.8-1.9 2.4V20H11.4s.1-9.3 0-10.3H14v1.6c.6-1 1.7-1.9 3.5-1.9 2.4 0 4.1 1.6 4.1 5.1z"/></svg>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <h5 className="tkb-footer-title">{t('footer.menu')}</h5>
              <ul className="tkb-footer-links">
                <li>
                  <Link to="/">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 11.5 12 5l8 6.5"/><path d="M6.5 10.5V19h11V10.5"/></svg>
                    </FooterIcon>
                    {t('footer.home')}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3c2.8 4.2 7 6.4 7 11a7 7 0 1 1-14 0c0-4.6 4.2-6.8 7-11Z"/><path d="M12 14.5v4"/></svg>
                    </FooterIcon>
                    {t('footer.crops')}
                  </Link>
                </li>
                <li>
                  <Link to="/seeds">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M4.9 6.5l2.1 2.1M17 15.4l2.1 2.1M3 12h3M18 12h3M4.9 17.5 7 15.4M17 8.6l2.1-2.1"/></svg>
                    </FooterIcon>
                    {t('footer.seeds')}
                  </Link>
                </li>
                <li>
                  <Link to="/mandi-rate">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 19V7l8-3 8 3v12"/><path d="M4 11h16M12 4v15"/></svg>
                    </FooterIcon>
                    {t('footer.mandi_rate')}
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="3.2"/><path d="M5.5 19c.6-3.4 3.1-5.2 6.5-5.2s5.9 1.8 6.5 5.2"/></svg>
                    </FooterIcon>
                    {t('footer.about_us')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>
                    </FooterIcon>
                    {t('footer.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <h5 className="tkb-footer-title">{t('footer.quick_links')}</h5>
              <ul className="tkb-footer-links">
                <li>
                  <Link to="#">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 4h10v16H7z"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>
                    </FooterIcon>
                    {t('footer.kisan_yojana')}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 19V6h9l5 4v9z"/><path d="M14 6v4h5"/></svg>
                    </FooterIcon>
                    {t('footer.kisan_stories')}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/></svg>
                    </FooterIcon>
                    {t('footer.kisan_tips')}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 4h9l3 3v13H6z"/><path d="M15 4v4h4M8 12h8M8 16h6"/></svg>
                    </FooterIcon>
                    {t('footer.kisan_guides')}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 18c2-6 6-9 8-14 2 5 6 8 8 14"/><path d="M7 18h10"/></svg>
                    </FooterIcon>
                    {t('footer.agri_guides')}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>
                    </FooterIcon>
                    {t('footer.crop_guides')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6">
              <h5 className="tkb-footer-title">{t('footer.customer_service')}</h5>
              <ul className="tkb-footer-links">
                <li>
                  <Link to="/support">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8"/><path d="M12 8v.5M12 11v5"/></svg>
                    </FooterIcon>
                    {t('footer.support')}
                  </Link>
                </li>
                <li>
                  <Link to="/faq">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="8"/><path d="M9.6 9.5a2.4 2.4 0 1 1 3.8 2c-.8.5-1.4 1-1.4 2v.3M12 16.5h.01"/></svg>
                    </FooterIcon>
                    {t('footer.faq')}
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z"/></svg>
                    </FooterIcon>
                    {t('footer.contact')}
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3 5 6v6c0 5 3.2 8.4 7 9.5 3.8-1.1 7-4.5 7-9.5V6z"/></svg>
                    </FooterIcon>
                    {t('footer.privacy_policy')}
                  </Link>
                </li>
                <li>
                  <Link to="/terms-conditions">
                    <FooterIcon>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <path d="M14 2v6h6" />
                        <path d="M16 13H8" />
                        <path d="M16 17H8" />
                        <path d="M10 9H8" />
                      </svg>
                    </FooterIcon>
                    {t('footer.terms_conditions')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6">
              <h5 className="tkb-footer-title">{t('footer.get_in_touch')}</h5>
              <ul className="tkb-footer-contact">
                <li>
                  <FooterIcon>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>
                  </FooterIcon>
                  <Link to="mailto:contact@fasaljunction.com">contact@fasaljunction.com</Link>
                </li>
                <li>
                  <FooterIcon>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h2a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7 9.6a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9z"/></svg>
                  </FooterIcon>
                  <Link to="tel:+911800123456">1800-123-456</Link>
                </li>
                <li>
                  <FooterIcon>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/></svg>
                  </FooterIcon>
                  <span>{t('footer.india')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="tkb-footer-bottom">
        <div className="container-lg">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
