import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './TermsConditions.css';

const TermsConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="tkb-terms-page">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="tkb-terms-hero">
          <div className="tkb-terms-hero-bg" aria-hidden="true" />
          <div className="container-lg tkb-terms-hero-inner">
            <span className="tkb-terms-kicker">
              {t('terms.kicker', 'Legal & Policy')}
            </span>
            <h1>{t('footer.terms_conditions', 'Terms & Conditions')}</h1>
            <p>
              {t(
                'terms.hero_desc',
                'Please read these Terms and Conditions carefully before using the Fasal Junction agricultural marketplace platform.'
              )}
            </p>
            <div className="tkb-terms-meta">
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
                Applicable Jurisdiction: India
              </span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="tkb-terms-content">
          <div className="container-lg">
            <div className="row g-4">
              {/* Main Terms Content */}
              <div className="col-lg-8">
                <div className="tkb-terms-card">
                  {/* Section 1 */}
                  <article id="acceptance" className="tkb-terms-section">
                    <div className="tkb-terms-section-header">
                      <span className="tkb-terms-number">1</span>
                      <h2>Acceptance of Terms</h2>
                    </div>
                    <p>
                      Welcome to <strong>Fasal Junction</strong> (&quot;Platform&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
                      By accessing, browsing, registering for an account, or using our mobile and web applications, you
                      agree to be bound by these Terms and Conditions (&quot;Terms&quot;) and our Privacy Policy.
                    </p>
                    <p>
                      If you do not agree with any part of these Terms, you must immediately discontinue using our services.
                      These Terms constitute a legally binding agreement between you and Fasal Junction under the Information Technology Act, 2000.
                    </p>
                    <div className="tkb-terms-callout">
                      <p>
                        🌾 <strong>Farmer-First Commitment:</strong> Fasal Junction is built to empower Indian farmers, buyers,
                        FPOs, and agribusinesses through transparent trade, real-time mandi rates, and direct farmer-to-buyer connections.
                      </p>
                    </div>
                  </article>

                  {/* Section 2 */}
                  <article id="eligibility" className="tkb-terms-section">
                    <div className="tkb-terms-section-header">
                      <span className="tkb-terms-number">2</span>
                      <h2>User Eligibility & Account Registration</h2>
                    </div>
                    <p>
                      To register and transact on Fasal Junction, you must:
                    </p>
                    <ul>
                      <li>Be at least 18 years of age and legally competent to enter into a contract.</li>
                      <li>Provide authentic and accurate identity information, including your full name, valid mobile number, and operating location.</li>
                      <li>Select your primary role truthfully: <strong>Farmer / Producer</strong>, <strong>Trader / Buyer</strong>, <strong>FPO</strong>, or <strong>Manufacturer</strong>.</li>
                      <li>Maintain the confidentiality of your login credentials and accept responsibility for all activities conducted under your account.</li>
                    </ul>
                    <p>
                      Fasal Junction reserves the right to suspend or terminate accounts that provide misleading, fraudulent, or outdated registration details.
                    </p>
                  </article>

                  {/* Section 3 */}
                  <article id="marketplace" className="tkb-terms-section">
                    <div className="tkb-terms-section-header">
                      <span className="tkb-terms-number">3</span>
                      <h2>Marketplace Listings & Inquiries</h2>
                    </div>
                    <p>
                      Fasal Junction serves as a digital meeting ground where farmers and producers can post crop sell enquiries,
                      and registered buyers or traders can post purchase requirements.
                    </p>
                    <ul>
                      <li>
                        <strong>Accurate Crop Data:</strong> Sellers must state exact commodity types, varieties (e.g. Sharbati Wheat, Desi Chana),
                        grades (Grade A, B, C), accurate quantities (kg, quintal, ton), and realistic expected prices.
                      </li>
                      <li>
                        <strong>Crop Media:</strong> Any photos or media uploaded must depict genuine samples of the lot offered for sale. Uploading
                        copyrighted or misleading imagery is strictly prohibited.
                      </li>
                      <li>
                        <strong>No Hidden Intermediaries:</strong> Listings intended to bypass genuine producers or artificially manipulate mandi rates are strictly disallowed.
                      </li>
                    </ul>
                  </article>

                  {/* Section 4 */}
                  <article id="mandi-disclaimer" className="tkb-terms-section">
                    <div className="tkb-terms-section-header">
                      <span className="tkb-terms-number">4</span>
                      <h2>Live Mandi Rates Disclaimer</h2>
                    </div>
                    <p>
                      Fasal Junction provides live and historical mandi rate indicators across APMC markets across India
                      (sourced from AGMARKNET and verified local mandi feeds).
                    </p>
                    <p>
                      These prices are published for <strong>reference and informational purposes only</strong>.
                      Final transaction prices are determined through mutual negotiation between buyer and seller based on actual
                      crop lot quality, moisture percentage, packaging, harvest timing, and freight conditions.
                    </p>
                  </article>

                  {/* Section 5 */}
                  <article id="transactions" className="tkb-terms-section">
                    <div className="tkb-terms-section-header">
                      <span className="tkb-terms-number">5</span>
                      <h2>Direct Trade, Payments & Logistics</h2>
                    </div>
                    <p>
                      Unless explicitly agreed under an official Fasal Junction Escrow or Managed Logistics Service agreement:
                    </p>
                    <ul>
                      <li>Contracts of sale are formed directly between the buyer and the seller.</li>
                      <li>Both parties are encouraged to verify lot inspections, quality certifications, and weight slips before releasing final payments.</li>
                      <li>Fasal Junction does not charge hidden brokerage fees on direct farmer-to-buyer interactions.</li>
                      <li>Users must adhere to statutory agricultural produce regulations applicable in their respective state APMC jurisdictions.</li>
                    </ul>
                  </article>

                  {/* Section 6 */}
                  <article id="prohibited" className="tkb-terms-section">
                    <div className="tkb-terms-section-header">
                      <span className="tkb-terms-number">6</span>
                      <h2>Prohibited Conduct</h2>
                    </div>
                    <p>
                      Users of Fasal Junction agree NOT to:
                    </p>
                    <ul>
                      <li>Post fictitious crop listings or engage in price rigging and artificial rate inflation.</li>
                      <li>List banned seeds, illegal substances, or non-certified chemical inputs prohibited by the Government of India.</li>
                      <li>Distribute spam, unsolicited promotional messages, or abusive communications to fellow farmers and traders.</li>
                      <li>Scrape, extract, or reverse-engineer data from Fasal Junction without prior written authorization.</li>
                      <li>Impersonate another individual, farmer organization, or authorized mandi official.</li>
                    </ul>
                  </article>

                  {/* Section 7 */}
                  <article id="liability" className="tkb-terms-section">
                    <div className="tkb-terms-section-header">
                      <span className="tkb-terms-number">7</span>
                      <h2>Limitation of Liability</h2>
                    </div>
                    <p>
                      To the maximum extent permitted by applicable Indian laws, Fasal Junction and its officers, directors,
                      and employees shall not be liable for any indirect, incidental, or consequential damages, including:
                    </p>
                    <ul>
                      <li>Crop spoilage or transit delays handled by independent third-party transporters.</li>
                      <li>Discrepancies in weight or quality that occur after physical delivery inspection has been accepted.</li>
                      <li>Financial disputes arising from off-platform cash transactions conducted outside platform advisory protocols.</li>
                    </ul>
                  </article>

                  {/* Section 8 */}
                  <article id="grievance" className="tkb-terms-section">
                    <div className="tkb-terms-section-header">
                      <span className="tkb-terms-number">8</span>
                      <h2>Grievance Redressal & Support</h2>
                    </div>
                    <p>
                      In compliance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules,
                      2021, the contact details of the Grievance Officer for Fasal Junction are provided below:
                    </p>
                    <div className="tkb-terms-callout">
                      <p>
                        <strong>Grievance Officer:</strong> Legal & Compliance Desk, Fasal Junction<br />
                        <strong>Email:</strong> <a href="mailto:contact@fasaljunction.com">contact@fasaljunction.com</a><br />
                        <strong>Toll-Free Helpline:</strong> <a href="tel:+911800123456">1800-123-456</a><br />
                        <strong>Support Response Window:</strong> Within 48 business hours
                      </p>
                    </div>
                  </article>
                </div>
              </div>

              {/* Sidebar Quick Navigation */}
              <div className="col-lg-4">
                <aside className="tkb-terms-sidebar">
                  <h4>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h7" /></svg>
                    Table of Contents
                  </h4>
                  <ul className="tkb-terms-nav-list">
                    <li><a href="#acceptance">1. Acceptance of Terms</a></li>
                    <li><a href="#eligibility">2. User Eligibility & Accounts</a></li>
                    <li><a href="#marketplace">3. Marketplace & Enquiries</a></li>
                    <li><a href="#mandi-disclaimer">4. Mandi Rates Disclaimer</a></li>
                    <li><a href="#transactions">5. Trade & Payments</a></li>
                    <li><a href="#prohibited">6. Prohibited Conduct</a></li>
                    <li><a href="#liability">7. Limitation of Liability</a></li>
                    <li><a href="#grievance">8. Grievance & Support</a></li>
                  </ul>

                  <div className="tkb-terms-help-box">
                    <h5>Need Legal Assistance?</h5>
                    <p>Have questions regarding these terms, your account, or crop trade verification?</p>
                    <Link to="/contact" className="tkb-terms-contact-btn">
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

export default TermsConditions;
