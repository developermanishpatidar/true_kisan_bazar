import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './UserDetail.css';

// Product images
import sugarImg from '../assets/images/product-sugar-s30.jpg';
import basmatiImg from '../assets/images/product-basmati-rice.jpg';
import potatoImg from '../assets/images/product-yukon-gold.jpg';

const UserDetail = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Parse query params or route state
  const queryParams = new URLSearchParams(location.search);
  const initialRoleParam = queryParams.get('role');
  const initialRestrictedParam = queryParams.get('restricted');

  // Role state: 'farmer' | 'buyer'
  const [role, setRole] = useState(() => {
    if (initialRoleParam === 'buyer' || location.state?.person?.role === 'buyer') return 'buyer';
    return 'farmer'; // default to farmer as shown in Image 2
  });

  // Contact restricted state (for buyer as in Image 1)
  const [isContactRestricted, setIsContactRestricted] = useState(() => {
    if (initialRestrictedParam === 'false') return false;
    if (initialRoleParam === 'buyer') return true;
    return role === 'buyer';
  });

  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  // Sync when query changes
  useEffect(() => {
    const qRole = new URLSearchParams(location.search).get('role');
    if (qRole === 'buyer') {
      setRole('buyer');
      setIsContactRestricted(true);
    } else if (qRole === 'farmer') {
      setRole('farmer');
      setIsContactRestricted(false);
    }
  }, [location.search]);

  const passedPerson = location.state?.person;
  const passedName = passedPerson?.name || queryParams.get('name');
  const passedLocation = passedPerson?.location || queryParams.get('location');

  // Demo profile data for Farmer (Reference Image 2)
  const farmerData = {
    address: passedLocation ? `${passedLocation}, 465001` : 'Shajapur, Shajapur, Madhya Pradesh, 465001',
    farmLocation: 'morta',
    organicCertification: 'No',
    name: passedName && role === 'farmer' ? passedName : 'Vijay Patidar',
    mobile: '8602221455',
    email: 'vijay.ptdr10@gmail.com',
    productInterests: 'Not specified',
    products: [
      {
        id: 'yg-1',
        title: 'Yukon Gold',
        category: 'Vegetables',
        image: potatoImg,
      },
    ],
  };

  // Demo profile data for Buyer (Reference Image 1)
  const buyerData = {
    companyName: 'XXXX XXXXXX',
    unlockedCompanyName: passedName && role === 'buyer' ? passedName : 'Kisan Agro Traders Pvt. Ltd.',
    address: passedLocation ? `${passedLocation}, 411043` : 'Pune, Pune, Maharashtra, 411043',
    name: passedName && role === 'buyer' ? passedName : 'Anand Kulkarni',
    mobile: '9822019482',
    email: 'contact@kisanagrotrade.in',
    company: passedName && role === 'buyer' ? passedName : 'Kisan Agro Traders',
    productInterests: 'Not specified',
    products: [
      {
        id: 's30-1',
        title: 'S-30',
        category: 'Sweeteners',
        image: sugarImg,
      },
      {
        id: 'basmati-1',
        title: 'Basmati',
        category: 'Grains and Cereals',
        image: basmatiImg,
      },
    ],
  };

  const handleRoleChange = (newRole, restricted = false) => {
    setRole(newRole);
    setIsContactRestricted(restricted);
    setPurchaseSuccess(false);
  };

  const handlePurchaseContact = () => {
    setIsContactRestricted(false);
    setPurchaseSuccess(true);
    setTimeout(() => setPurchaseSuccess(false), 4000);
  };

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/product-list');
    }
  };

  const isFarmer = role === 'farmer';
  const isBuyer = role === 'buyer';

  return (
    <div className="tkb-detail-page-wrapper">
      <Header />

      {/* Role & Visibility Demo Control Bar */}
      <div className="tkb-role-preview-bar">
        <div className="container-lg tkb-role-bar-inner">
          <div className="tkb-role-bar-info">
            <span className="tkb-role-bar-dot"></span>
            <span>
              <strong>Active Role View:</strong>{' '}
              <span className="tkb-role-bar-active-tag">
                {isFarmer ? 'Farmer View' : isContactRestricted ? 'Buyer View (Restricted)' : 'Buyer View (Unlocked)'}
              </span>
            </span>
          </div>

          <div className="tkb-role-pills" role="tablist">
            <button
              type="button"
              className={`tkb-role-pill${isFarmer ? ' is-selected' : ''}`}
              onClick={() => handleRoleChange('farmer', false)}
            >
              🌾 Farmer View (Vijay Patidar)
            </button>
            <button
              type="button"
              className={`tkb-role-pill${isBuyer && isContactRestricted ? ' is-selected' : ''}`}
              onClick={() => handleRoleChange('buyer', true)}
            >
              🏢 Buyer View (Restricted Contact)
            </button>
            <button
              type="button"
              className={`tkb-role-pill${isBuyer && !isContactRestricted ? ' is-selected' : ''}`}
              onClick={() => handleRoleChange('buyer', false)}
            >
              🔓 Buyer View (Unlocked Contact)
            </button>
          </div>
        </div>
      </div>

      {purchaseSuccess && (
        <div className="tkb-detail-toast" role="alert">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Contact details successfully unlocked!</span>
        </div>
      )}

      {/* Main Detail Container */}
      <main className="tkb-detail-main">
        <div className="container-lg">
          {/* Top Back Button */}
          <div className="tkb-detail-top-nav">
            <button
              type="button"
              className="tkb-btn-back"
              onClick={handleBack}
              aria-label="Go back to previous page"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back</span>
            </button>
          </div>

          {/* Page Heading */}
          <h1 className="tkb-detail-title">Business Information</h1>

          {/* Business Information Card */}
          <div className="tkb-info-card">
            {/* Section 1: Business Details */}
            <div className="tkb-info-section">
              <h2 className="tkb-info-section-title">Business Details</h2>

              <div className="tkb-info-grid">
                {/* ROLE: BUYER -> Show Company Name */}
                {isBuyer && (
                  <div className="tkb-info-item">
                    <span className="tkb-info-label">Company Name</span>
                    <span className="tkb-info-value">
                      {isContactRestricted ? buyerData.companyName : buyerData.unlockedCompanyName}
                    </span>
                  </div>
                )}

                {/* SHARED -> Address */}
                <div className="tkb-info-item tkb-info-address">
                  <span className="tkb-info-label">Address</span>
                  <span className="tkb-info-value">
                    {isFarmer ? farmerData.address : buyerData.address}
                  </span>
                </div>

                {/* ROLE: FARMER -> Show Farm Location & Organic Certification */}
                {isFarmer && (
                  <>
                    <div className="tkb-info-item">
                      <span className="tkb-info-label">Farm Location</span>
                      <span className="tkb-info-value">{farmerData.farmLocation}</span>
                    </div>

                    <div className="tkb-info-item">
                      <span className="tkb-info-label">Organic Certification</span>
                      <span className="tkb-info-value tkb-val-organic">{farmerData.organicCertification}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="tkb-info-divider"></div>

            {/* Section 2: Contact Information */}
            <div className="tkb-info-section">
              <h2 className="tkb-info-section-title">
                {isContactRestricted ? 'Contact Information' : 'Contact Information(Visible)'}
              </h2>

              <div className="tkb-info-grid">
                {/* Name */}
                <div className="tkb-info-item">
                  <span className="tkb-info-label">Name</span>
                  {isContactRestricted ? (
                    <span className="tkb-masked-pill" title="Restricted">••••••••</span>
                  ) : (
                    <span className="tkb-info-value">{isFarmer ? farmerData.name : buyerData.name}</span>
                  )}
                </div>

                {/* Mobile */}
                <div className="tkb-info-item">
                  <span className="tkb-info-label">Mobile</span>
                  {isContactRestricted ? (
                    <span className="tkb-masked-pill" title="Restricted">••••••••</span>
                  ) : (
                    <span className="tkb-info-value">
                      <a href={`tel:${isFarmer ? farmerData.mobile : buyerData.mobile}`} className="tkb-contact-link">
                        {isFarmer ? farmerData.mobile : buyerData.mobile}
                      </a>
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="tkb-info-item">
                  <span className="tkb-info-label">Email</span>
                  {isContactRestricted ? (
                    <span className="tkb-masked-pill" title="Restricted">••••••••</span>
                  ) : (
                    <span className="tkb-info-value">
                      <a href={`mailto:${isFarmer ? farmerData.email : buyerData.email}`} className="tkb-contact-link">
                        {isFarmer ? farmerData.email : buyerData.email}
                      </a>
                    </span>
                  )}
                </div>

                {/* ROLE: BUYER -> Show Company field */}
                {isBuyer && (
                  <div className="tkb-info-item">
                    <span className="tkb-info-label">Company</span>
                    {isContactRestricted ? (
                      <span className="tkb-masked-pill" title="Restricted">••••••••</span>
                    ) : (
                      <span className="tkb-info-value">{buyerData.company}</span>
                    )}
                  </div>
                )}
              </div>

              {/* Restricted notice & Purchase button */}
              {isContactRestricted && (
                <div className="tkb-restricted-notice-box">
                  <p className="tkb-restricted-text">
                    Contact details are restricted. Purchase the conatct details to access and view the contact information.
                  </p>
                  <button
                    type="button"
                    className="tkb-btn-purchase"
                    onClick={handlePurchaseContact}
                  >
                    Purchase Contact Details
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Product Interests */}
          <div className="tkb-outer-section">
            <h2 className="tkb-outer-section-title">Product Interests</h2>
            <div className="tkb-tag-pill">Not specified</div>
          </div>

          {/* Section 4: Products */}
          <div className="tkb-outer-section">
            <h2 className="tkb-outer-section-title">Products</h2>

            <div className="tkb-products-container">
              <div className="tkb-products-grid">
                {(isFarmer ? farmerData.products : buyerData.products).map((product) => (
                  <div className="tkb-product-card" key={product.id}>
                    <div className="tkb-product-img-wrap">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="tkb-product-img"
                        loading="lazy"
                      />
                    </div>
                    <div className="tkb-product-info">
                      <h3 className="tkb-product-name">{product.title}</h3>
                      <span className="tkb-product-category">{product.category}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserDetail;
