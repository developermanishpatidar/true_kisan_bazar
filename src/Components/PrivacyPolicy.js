import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="tkb-privacy-page">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="tkb-privacy-hero">
          <div className="tkb-privacy-hero-bg" aria-hidden="true" />
          <div className="container-lg tkb-privacy-hero-inner">
            <span className="tkb-privacy-kicker">
              {t('privacy.kicker', 'Data Privacy & Security')}
            </span>
            <h1>{t('footer.privacy_policy', 'Privacy Policy')}</h1>
            <p>
              {t(
                'privacy.hero_desc',
                'Your trust is our foundation. Learn how Fasal Junction safeguards your personal, trade, and agricultural data.'
              )}
            </p>
            <div className="tkb-privacy-meta">
              <span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                Effective: January 1, 2026
              </span>
              <span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                Last Updated: September 2026
              </span>
              <span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Compliant with India DPDP Act 2023
              </span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="tkb-privacy-content">
          <div className="container-lg">
            <div className="row g-4">
              {/* Main Policy Content */}
              <div className="col-lg-8">
                <div className="tkb-privacy-card">
                  {/* Section 1 */}
                  <article id="intro" className="tkb-privacy-section">
                    <div className="tkb-privacy-section-header">
                      <span className="tkb-privacy-number">1</span>
                      <h2>Introduction & Commitment</h2>
                    </div>
                    <p>
                      <strong>Fasal Junction</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates a dedicated digital
                      crop marketplace connecting farmers, traders, buyers, FPOs, and agricultural processors across India.
                      We respect your privacy and are committed to protecting the personal and operational data you share with us.
                    </p>
                    <p>
                      This Privacy Policy explains how we collect, process, disclose, and secure your information when you access
                      our website, mobile applications, and mandi advisory services, in compliance with the
                      <strong> Digital Personal Data Protection (DPDP) Act, 2023</strong> and the <strong>Information Technology Act, 2000</strong>.
                    </p>
                    <div className="tkb-privacy-callout">
                      <p>
                        🔒 <strong>Zero Data Selling Guarantee:</strong> Fasal Junction never sells, rents, or monetizes farmer contact
                        numbers, farm locations, or transaction histories to third-party telemarketers or external advertisers.
                      </p>
                    </div>
                  </article>

                  {/* Section 2 */}
                  <article id="collection" className="tkb-privacy-section">
                    <div className="tkb-privacy-section-header">
                      <span className="tkb-privacy-number">2</span>
                      <h2>Information We Collect</h2>
                    </div>
                    <p>
                      We collect information to facilitate genuine agricultural transactions, verify buyers and sellers, and deliver reliable mandi rates:
                    </p>
                    <h3>A. Information You Provide to Us</h3>
                    <ul>
                      <li>
                        <strong>Account Registration:</strong> Full name, primary contact number, email address, role (Farmer, Trader, FPO, Manufacturer), and password.
                      </li>
                      <li>
                        <strong>Crop Listings & Inquiries:</strong> Commodity type (e.g. Wheat, Gram, Mustard, Soybean), variety, quality grade, quantity, expected price brackets, harvest timeline, and lot photos.
                      </li>
                      <li>
                        <strong>Location & Mandi Details:</strong> Farm village, tehsil, district, state, and nearest APMC mandi hub.
                      </li>
                      <li>
                        <strong>Verification Documents:</strong> KYC identification (e.g. Aadhaar, Voter ID, PAN, or GSTIN for commercial traders) when required to verify high-volume trading accounts.
                      </li>
                    </ul>

                    <h3>B. Technical & Automated Information</h3>
                    <ul>
                      <li>
                        <strong>Device & Network Data:</strong> IP address, device model, operating system, browser specifications, and mobile network carrier.
                      </li>
                      <li>
                        <strong>Approximate Geolocation:</strong> Sourced with your device permission to present accurate nearest mandi rates, local crop availability, and transport distances.
                      </li>
                    </ul>
                  </article>

                  {/* Section 3 */}
                  <article id="usage" className="tkb-privacy-section">
                    <div className="tkb-privacy-section-header">
                      <span className="tkb-privacy-number">3</span>
                      <h2>How We Use Your Information</h2>
                    </div>
                    <p>
                      We process your data for legitimate agricultural marketplace purposes:
                    </p>
                    <ul>
                      <li>
                        <strong>Enquiry & Trade Matching:</strong> Connecting crop sellers with verified bulk buyers and agro-processors matching their quantity, location, and price requirements.
                      </li>
                      <li>
                        <strong>Market Rate Intelligence:</strong> Aggregating mandi rates to provide transparent pricing trends across APMC markets.
                      </li>
                      <li>
                        <strong>Transaction Security & Fraud Prevention:</strong> Validating user authenticity, weeding out fictitious listings, and blocking bad actors.
                      </li>
                      <li>
                        <strong>Customer Support:</strong> Responding promptly to support tickets, enquiry status checks, and dispute resolutions.
                      </li>
                      <li>
                        <strong>Notifications & Alerts:</strong> Sending SMS, WhatsApp, or in-app updates regarding buyer responses, price alerts, and platform service updates.
                      </li>
                    </ul>
                  </article>

                  {/* Section 4 */}
                  <article id="sharing" className="tkb-privacy-section">
                    <div className="tkb-privacy-section-header">
                      <span className="tkb-privacy-number">4</span>
                      <h2>Data Sharing & Disclosure</h2>
                    </div>
                    <p>
                      We disclose your information only under clear, authorized circumstances:
                    </p>
                    <ul>
                      <li>
                        <strong>With Verified Trade Counterparties:</strong> When a buyer unlocks contact details or responds to a crop enquiry, essential trade contact information (name, phone number, location, and lot details) is shared with the counterparty to finalize crop inspection and logistics.
                      </li>
                      <li>
                        <strong>With Trusted Infrastructure Providers:</strong> Highly secure cloud hosting (AWS / Google Cloud in India), telecom SMS gateways, and mapping APIs that operate under strict non-disclosure obligations.
                      </li>
                      <li>
                        <strong>Statutory & Legal Requirements:</strong> When mandated by applicable Indian law, court summons, or regulatory law enforcement directives.
                      </li>
                    </ul>
                  </article>

                  {/* Section 5 */}
                  <article id="security" className="tkb-privacy-section">
                    <div className="tkb-privacy-section-header">
                      <span className="tkb-privacy-number">5</span>
                      <h2>Data Security & Storage</h2>
                    </div>
                    <p>
                      We adopt rigorous administrative, technical, and physical safeguards:
                    </p>
                    <ul>
                      <li>
                        <strong>Encryption in Transit:</strong> All communication between your device and Fasal Junction servers is encrypted using modern TLS/SSL (HTTPS) 256-bit encryption.
                      </li>
                      <li>
                        <strong>Access Controls:</strong> Role-based access restrictions ensure only authorized administrative personnel can access sensitive operational records.
                      </li>
                      <li>
                        <strong>Server Location:</strong> In alignment with Indian data localization principles, your primary transaction data is stored within certified Indian data centers.
                      </li>
                    </ul>
                  </article>

                  {/* Section 6 */}
                  <article id="rights" className="tkb-privacy-section">
                    <div className="tkb-privacy-section-header">
                      <span className="tkb-privacy-number">6</span>
                      <h2>Your Privacy Rights (DPDP Act)</h2>
                    </div>
                    <p>
                      As a Data Principal under the Digital Personal Data Protection Act, 2023, you have the following rights:
                    </p>
                    <ul>
                      <li>
                        <strong>Right to Access & Summary:</strong> Request a summary of personal data held about you and how it has been processed.
                      </li>
                      <li>
                        <strong>Right to Correction & Updating:</strong> Edit your profile details, crop listings, phone number, and location at any time through your Profile dashboard.
                      </li>
                      <li>
                        <strong>Right to Erasure / Account Deletion:</strong> Request full deactivation of your account and deletion of associated personal data.
                      </li>
                      <li>
                        <strong>Right to Withdraw Consent:</strong> Revoke consent for promotional messaging at any time while retaining critical trade alerts.
                      </li>
                      <li>
                        <strong>Right to Nominate:</strong> Nominate an individual to exercise privacy rights on your behalf in the event of incapacity.
                      </li>
                    </ul>
                  </article>

                  {/* Section 7 */}
                  <article id="cookies" className="tkb-privacy-section">
                    <div className="tkb-privacy-section-header">
                      <span className="tkb-privacy-number">7</span>
                      <h2>Cookies & Tracking Technologies</h2>
                    </div>
                    <p>
                      Fasal Junction uses lightweight cookies and browser local storage solely to:
                    </p>
                    <ul>
                      <li>Maintain your logged-in session securely across pages.</li>
                      <li>Remember your language preference (English or Hindi).</li>
                      <li>Preserve draft enquiry inputs during active browsing to prevent data loss.</li>
                    </ul>
                    <p>
                      We do not deploy intrusive third-party cross-site tracking cookies.
                    </p>
                  </article>

                  {/* Section 8 */}
                  <article id="retention" className="tkb-privacy-section">
                    <div className="tkb-privacy-section-header">
                      <span className="tkb-privacy-number">8</span>
                      <h2>Data Retention & Account Closure</h2>
                    </div>
                    <p>
                      We retain your personal information only for as long as your account is active or as necessary to fulfill marketplace transactions.
                      Upon receiving an account deletion request, your profile is permanently anonymized within 30 days, except where retention is required by statutory taxation or legal dispute obligations under Indian law.
                    </p>
                  </article>

                  {/* Section 9 */}
                  <article id="grievance" className="tkb-privacy-section">
                    <div className="tkb-privacy-section-header">
                      <span className="tkb-privacy-number">9</span>
                      <h2>Grievance Redressal & Contact Desk</h2>
                    </div>
                    <p>
                      If you have questions, concerns, or grievances regarding this Privacy Policy or your personal data handling,
                      please reach out to our designated Data Grievance Officer:
                    </p>
                    <div className="tkb-privacy-callout">
                      <p>
                        <strong>Data Protection & Grievance Officer:</strong> Fasal Junction Privacy Desk<br />
                        <strong>Official Email:</strong> <a href="mailto:privacy@fasaljunction.com">privacy@fasaljunction.com</a> / <a href="mailto:contact@fasaljunction.com">contact@fasaljunction.com</a><br />
                        <strong>Toll-Free Helpline:</strong> <a href="tel:+911800123456">1800-123-456</a><br />
                        <strong>Operating Hours:</strong> Monday – Saturday, 9:00 AM – 6:00 PM IST<br />
                        <strong>Resolution Commitment:</strong> Acknowledgement within 24 hours, resolution within 15 business days
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              {/* Sidebar Quick Navigation */}
              <div className="col-lg-4">
                <aside className="tkb-privacy-sidebar">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h7" /></svg>
                    Table of Contents
                  </h4>
                  <ul className="tkb-privacy-nav-list">
                    <li><a href="#intro">1. Introduction & Commitment</a></li>
                    <li><a href="#collection">2. Information We Collect</a></li>
                    <li><a href="#usage">3. How We Use Data</a></li>
                    <li><a href="#sharing">4. Data Sharing & Disclosure</a></li>
                    <li><a href="#security">5. Data Security & Storage</a></li>
                    <li><a href="#rights">6. Your Privacy Rights (DPDP)</a></li>
                    <li><a href="#cookies">7. Cookies & Tracking</a></li>
                    <li><a href="#retention">8. Data Retention</a></li>
                    <li><a href="#grievance">9. Grievance Officer & Contact</a></li>
                  </ul>

                  <div className="tkb-privacy-help-box">
                    <h5>Have a Privacy Concern?</h5>
                    <p>Want to review or delete your agricultural data or have questions on data safety?</p>
                    <Link to="/contact" className="tkb-privacy-contact-btn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                      {t('footer.contact', 'Contact Support')}
                    </Link>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
