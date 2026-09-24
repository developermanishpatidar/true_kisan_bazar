import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';

const Toggle = ({ id, defaultChecked = false }) => {
  const [on, setOn] = useState(defaultChecked);
  return (
    <button
      id={id}
      role="switch"
      aria-checked={on}
      onClick={() => setOn(v => !v)}
      className={`tkb-toggle${on ? ' tkb-toggle--on' : ''}`}
      type="button"
    >
      <span className="tkb-toggle-thumb" />
    </button>
  );
};

const Profile = () => {
  const [avatarSrc, setAvatarSrc] = useState(null);
  const fileInputRef = useRef(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setAvatarSrc(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header />
      <main className="tkb-profile-main">

        {/* ── Profile Hero Banner ── */}
        <div className="tkb-profile-hero">
          <div className="tkb-profile-hero-overlay" aria-hidden="true" />
          <div className="container-lg">
            <div className="tkb-profile-hero-row">

              {/* Left — user identity card */}
              <div className="tkb-hero-user-card">
                <div className="tkb-hero-avatar-wrap">
                  <div className="tkb-hero-avatar">
                    {avatarSrc ? (
                      <img src={avatarSrc} alt="Profile" className="tkb-hero-avatar-img" />
                    ) : (
                      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#2e9d4f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                      </svg>
                    )}
                  </div>
                  {/* Hidden file input */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="avatarFileInput"
                    accept="image/*"
                    className="tkb-avatar-file-input"
                    onChange={handleAvatarChange}
                    aria-label="Upload profile photo"
                  />
                  <button
                    className="tkb-hero-camera-btn"
                    type="button"
                    aria-label="Change photo"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                    </svg>
                  </button>
                </div>
                <div className="tkb-hero-user-info">
                  <h2 className="tkb-hero-name">Vijay Patidar</h2>
                  <p className="tkb-hero-meta">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Member since August 2026
                  </p>
                </div>
              </div>

              {/* Right — Fasal Junction upgrade card */}
              <div className="tkb-hero-upgrade-card">
                <p className="tkb-hero-upgrade-kicker">Earn more with</p>
                <h3 className="tkb-hero-upgrade-title">Fasal Junction</h3>
                <p className="tkb-hero-upgrade-desc">Unlock premium features &amp; grow ahead</p>
                <Link to="#" className="tkb-hero-upgrade-btn">
                  Upgrade Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        </div>

        <div className="container-lg tkb-profile-layout">
          <div className="row g-4">
            <div className="col-lg-8">

              {/* ── Personal Information ── */}
              <section className="tkb-profile-card">
                <h1 className="tkb-profile-card-title">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="3.2" />
                    <path d="M5.5 19c.6-3.4 3.1-5.2 6.5-5.2s5.9 1.8 6.5 5.2" />
                  </svg>
                  Personal Information
                </h1>
                <form action="#" method="post">
                  <div className="row g-3 g-md-4">
                    <div className="col-md-6">
                      <label className="tkb-profile-label" htmlFor="profileName">Name</label>
                      <input className="tkb-profile-input" id="profileName" name="name" defaultValue="Vijay Patidar" />
                    </div>
                    <div className="col-md-6">
                      <label className="tkb-profile-label" htmlFor="profileEmail">Email</label>
                      <input className="tkb-profile-input" id="profileEmail" name="email" type="email" defaultValue="vijay.ptdr10@gmail.com" />
                    </div>
                    <div className="col-md-6">
                      <label className="tkb-profile-label" htmlFor="profilePhone">Phone</label>
                      <div className="tkb-profile-input-wrap">
                        <input className="tkb-profile-input is-locked" id="profilePhone" name="phone" defaultValue="8602221455" readOnly />
                        <span className="tkb-profile-check" aria-hidden="true">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="tkb-profile-label" htmlFor="profileType">Business Type</label>
                      <div className="tkb-profile-input-wrap">
                        <input className="tkb-profile-input is-locked" id="profileType" name="business_type" defaultValue="farmer" readOnly />
                        <span className="tkb-profile-check" aria-hidden="true">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="tkb-profile-label" htmlFor="profileAddress">Address</label>
                      <input className="tkb-profile-input" id="profileAddress" name="address" defaultValue="Morta" />
                    </div>
                    <div className="col-md-6">
                      <label className="tkb-profile-label" htmlFor="profileState">State</label>
                      <input className="tkb-profile-input" id="profileState" name="state" defaultValue="Madhya Pradesh" />
                    </div>
                    <div className="col-md-6">
                      <label className="tkb-profile-label" htmlFor="profileCity">City</label>
                      <input className="tkb-profile-input" id="profileCity" name="city" defaultValue="Shajapur" />
                    </div>
                    <div className="col-md-6">
                      <label className="tkb-profile-label" htmlFor="profileDistrict">District</label>
                      <input className="tkb-profile-input" id="profileDistrict" name="district" defaultValue="Shajapur" />
                    </div>
                  </div>
                </form>
              </section>

              {/* ── KYC & Business Profile ── */}
              <section className="tkb-profile-card tkb-kyc-card">
                <h2 className="tkb-profile-card-title">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="3" />
                    <path d="M2 10h20" />
                    <circle cx="7" cy="15" r="1" />
                    <path d="M11 15h6" />
                  </svg>
                  KYC &amp; Business Profile
                </h2>

                <div className="row g-3 g-md-4">
                  <div className="col-12">
                    <label className="tkb-profile-label" htmlFor="kycFarmSize">Farm Size</label>
                    <input className="tkb-profile-input" id="kycFarmSize" name="farm_size" placeholder="e.g. 5 acres" />
                  </div>
                  <div className="col-12">
                    <label className="tkb-profile-label" htmlFor="kycFarmLocation">Farm Location</label>
                    <textarea className="tkb-profile-input tkb-profile-textarea" id="kycFarmLocation" name="farm_location" rows="3" defaultValue="morta" />
                  </div>
                  <div className="col-md-6">
                    <label className="tkb-profile-label" htmlFor="kycTotalProducts">Total Products Harvested</label>
                    <input className="tkb-profile-input" id="kycTotalProducts" name="total_products" placeholder="e.g. Wheat, Soybean" />
                  </div>
                  <div className="col-md-6">
                    <label className="tkb-profile-label" htmlFor="kycFarmerId">Farmer ID</label>
                    <input className="tkb-profile-input" id="kycFarmerId" name="farmer_id" placeholder="Enter Farmer ID" />
                  </div>
                  <div className="col-12">
                    <label className="tkb-profile-label" htmlFor="kycAadhar">Aadhar Number</label>
                    <input className="tkb-profile-input" id="kycAadhar" name="aadhar" placeholder="XXXX XXXX XXXX" maxLength="14" />
                  </div>
                </div>

                {/* Toggle rows */}
                <div className="tkb-kyc-toggles">
                  <div className="tkb-kyc-toggle-row">
                    <div className="tkb-kyc-toggle-info">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                      <span>Soil Testing Done</span>
                    </div>
                    <Toggle id="toggleSoilTesting" defaultChecked={true} />
                  </div>
                  <div className="tkb-kyc-toggle-row">
                    <div className="tkb-kyc-toggle-info">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 8 12 12 14 14" /></svg>
                      <span>Product Certification Done</span>
                    </div>
                    <Toggle id="toggleCertification" />
                  </div>
                  <div className="tkb-kyc-toggle-row">
                    <div className="tkb-kyc-toggle-info">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
                      <span>Has Own Logistics</span>
                    </div>
                    <Toggle id="toggleLogistics" />
                  </div>
                  <div className="tkb-kyc-toggle-row">
                    <div className="tkb-kyc-toggle-info">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" /><path d="M12 6v6l4 2" /></svg>
                      <span>Is Organic</span>
                    </div>
                    <Toggle id="toggleOrganic" />
                  </div>
                </div>

                <div className="tkb-kyc-footer">
                  <button type="submit" className="tkb-kyc-save-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
                    Save Changes
                  </button>
                </div>
              </section>

            </div>

            {/* ── Sidebar ── */}
            <div className="col-lg-4">
              <aside className="tkb-side-card">
                <div className="tkb-completion-row">
                  <div>
                    <h2 className="tkb-completion-title">Profile completion</h2>
                    <p className="tkb-completion-meta">50% complete</p>
                    <p className="tkb-completion-copy">Keep going! You're doing great.</p>
                    <Link className="tkb-btn-complete" to="#">Complete Now →</Link>
                  </div>
                  <svg className="tkb-progress-ring" viewBox="0 0 86 86" aria-hidden="true">
                    <circle cx="43" cy="43" r="35" stroke="#ececec"></circle>
                    <circle cx="43" cy="43" r="35" stroke="#e39b1f" strokeLinecap="round" strokeDasharray="219.91" strokeDashoffset="109.955" transform="rotate(-90 43 43)"></circle>
                    <text x="43" y="49" textAnchor="middle" fontSize="16" fontWeight="700" fill="#333" fontFamily="Inter, Nunito, sans-serif">50%</text>
                  </svg>
                </div>
              </aside>

              <aside className="tkb-side-card">
                <h2 className="tkb-quick-title">Quick links</h2>
                <ul className="tkb-quick-list">
                  <li>
                    <Link to="/enquiry">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
                      My Enquiries
                      <svg className="tkb-quick-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7h16v12H4z" /><path d="M8 7V5a4 4 0 0 1 8 0v2" /></svg>
                      Subscription
                      <svg className="tkb-quick-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                      Notifications
                      <svg className="tkb-quick-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 10h18" /></svg>
                      My Credits Status
                      <svg className="tkb-quick-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
                    </Link>
                  </li>
                </ul>
              </aside>

              {/* ── My Preferences ── */}
              <aside className="tkb-side-card tkb-pref-card">
                <div className="tkb-pref-header">
                  <h2 className="tkb-quick-title tkb-pref-title">My Preferences</h2>
                  <button className="tkb-pref-edit-btn" type="button">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    Edit
                  </button>
                </div>

                <div className="tkb-pref-group">
                  <p className="tkb-pref-group-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                    STATES
                  </p>
                  <div className="tkb-pref-tags">
                    <span className="tkb-pref-tag">Madhya Pradesh</span>
                  </div>
                </div>

                <div className="tkb-pref-group">
                  <p className="tkb-pref-group-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></svg>
                    DISTRICTS
                  </p>
                  <div className="tkb-pref-tags">
                    <span className="tkb-pref-tag">Shajapur</span>
                  </div>
                </div>

                <div className="tkb-pref-group">
                  <p className="tkb-pref-group-label">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7z" /></svg>
                    COMMODITIES
                  </p>
                  <p className="tkb-pref-empty">No commodities selected yet</p>
                </div>
              </aside>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Profile;
