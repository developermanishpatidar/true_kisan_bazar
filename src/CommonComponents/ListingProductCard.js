import React from 'react';
import { Link } from 'react-router-dom';

const ListingProductCard = ({ product }) => {
  return (
    <article className="similar-product-card tkb-listing-card">
      <div className="similar-product-image tkb-listing-image-wrap">
        <Link to="/product-detail" title={product.name}>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>
      <div className="similar-product-body">
        <h3 className="similar-product-name">{product.name}</h3>
        <p className="similar-product-location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {product.location}
        </p>

        <div className="similar-product-stats">
          <div className="similar-product-stat">
            <span className="similar-product-stat-label">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8" />
                <text x="12" y="16" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">₹</text>
              </svg>
              Price
            </span>
            <span className="similar-product-stat-value">₹{product.price}</span>
          </div>
          <div className="similar-product-stat">
            <span className="similar-product-stat-label">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
              Quantity
            </span>
            <span className="similar-product-stat-value">{product.quantity}</span>
          </div>
        </div>

        <div className="similar-product-category">
          <span className="similar-product-stat-label">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Variety
          </span>
          <span className="similar-product-category-value tkb-listing-variety-text">{product.variety}</span>
        </div>

        <div className="tkb-listing-farmer">
          <span className="tkb-listing-avatar" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <circle cx="12" cy="8" r="3.1" />
              <path d="M5.6 19c.6-3.3 3-5.1 6.4-5.1s5.8 1.8 6.4 5.1" />
            </svg>
          </span>
          <span className="tkb-listing-farmer-badge">Farmer</span>
          <span className="tkb-listing-views">{product.views} Buyers Viewed</span>
        </div>

        <Link to="/product-detail" className="tkb-listing-cta">
          View More Details
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
};

export default ListingProductCard;
