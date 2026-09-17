import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';

const Profile = () => {
  return (
    <div>
        <Header />
        <main className="tkb-profile-main">
            <div className="tkb-profile-banner" aria-hidden="true"></div>
            <div className="container-lg tkb-profile-layout">
                <div className="row g-4">
                <div className="col-lg-8">
                    <section className="tkb-profile-card">
                    <h1 className="tkb-profile-card-title">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="8" r="3.2"/>
                        <path d="M5.5 19c.6-3.4 3.1-5.2 6.5-5.2s5.9 1.8 6.5 5.2"/>
                        </svg>
                        Personal Information
                    </h1>
                    <form action="#" method="post">
                        <div className="row g-3 g-md-4">
                        <div className="col-md-6">
                            <label className="tkb-profile-label" for="profileName">Name</label>
                            <input className="tkb-profile-input" id="profileName" name="name" value="Vijay Patidar" />
                        </div>
                        <div className="col-md-6">
                            <label className="tkb-profile-label" for="profileEmail">Email</label>
                            <input className="tkb-profile-input" id="profileEmail" name="email" type="email" value="vijay.ptdr10@gmail.com" />
                        </div>
                        <div className="col-md-6">
                            <label className="tkb-profile-label" for="profilePhone">Phone</label>
                            <div className="tkb-profile-input-wrap">
                            <input className="tkb-profile-input is-locked" id="profilePhone" name="phone" value="8602221455" readonly />
                            <span className="tkb-profile-check" aria-hidden="true">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                            </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="tkb-profile-label" for="profileType">Business Type</label>
                            <div className="tkb-profile-input-wrap">
                            <input className="tkb-profile-input is-locked" id="profileType" name="business_type" value="farmer" readonly />
                            <span className="tkb-profile-check" aria-hidden="true">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                            </span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="tkb-profile-label" for="profileAddress">Address</label>
                            <input className="tkb-profile-input" id="profileAddress" name="address" value="Morta" />
                        </div>
                        <div className="col-md-6">
                            <label className="tkb-profile-label" for="profileState">State</label>
                            <input className="tkb-profile-input" id="profileState" name="state" value="Madhya Pradesh" />
                        </div>
                        <div className="col-md-6">
                            <label className="tkb-profile-label" for="profileCity">City</label>
                            <input className="tkb-profile-input" id="profileCity" name="city" value="Shajapur" />
                        </div>
                        <div className="col-md-6">
                            <label className="tkb-profile-label" for="profileDistrict">District</label>
                            <input className="tkb-profile-input" id="profileDistrict" name="district" value="Shajapur" />
                        </div>
                        </div>
                    </form>
                    </section>
                </div>

                <div className="col-lg-4">
                    <aside className="tkb-side-card">
                    <div className="tkb-completion-row">
                        <div>
                        <h2 className="tkb-completion-title">Profile completion</h2>
                        <p className="tkb-completion-meta">50% complete</p>
                        <p className="tkb-completion-copy">Keep going! You’re doing great.</p>
                        <Link className="tkb-btn-complete" to="#">Complete Now →</Link>
                        </div>
                        <svg className="tkb-progress-ring" viewBox="0 0 86 86" aria-hidden="true">
                        <circle cx="43" cy="43" r="35" stroke="#ececec"></circle>
                        <circle cx="43" cy="43" r="35" stroke="#e39b1f" stroke-linecap="round" stroke-dasharray="219.91" stroke-dashoffset="109.955" transform="rotate(-90 43 43)"></circle>
                        <text x="43" y="49" text-anchor="middle" font-size="16" font-weight="700" fill="#333" font-family="Inter, Nunito, sans-serif">50%</text>
                        </svg>
                    </div>
                    </aside>

                    <aside className="tkb-side-card">
                    <h2 className="tkb-quick-title">Quick links</h2>
                    <ul className="tkb-quick-list">
                        <li>
                        <Link to="/enquiry">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>
                            My Enquiries
                            <svg className="tkb-quick-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                        </Link>
                        </li>
                        <li>
                        <Link to="#">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16v12H4z"/><path d="M8 7V5a4 4 0 0 1 8 0v2"/></svg>
                            Subscription
                            <svg className="tkb-quick-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                        </Link>
                        </li>
                        <li>
                        <Link to="#">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                            Notifications
                            <svg className="tkb-quick-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                        </Link>
                        </li>
                        <li>
                        <Link to="#">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/></svg>
                            My Credits Status
                            <svg className="tkb-quick-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                        </Link>
                        </li>
                    </ul>
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
