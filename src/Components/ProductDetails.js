import React, { useEffect } from 'react'
import Header from '../CommonComponents/Header';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  useEffect(()=>{
    (function () {
      var mainImage = document.getElementById('mainProductImage');
      var thumbs = document.querySelectorAll('.product-thumb');

      thumbs.forEach(function (thumb) {
        thumb.addEventListener('click', function () {
          var imageUrl = thumb.getAttribute('data-image');
          mainImage.src = imageUrl;
          mainImage.alt = thumb.querySelector('img').alt;

          thumbs.forEach(function (item) {
            item.classList.remove('active');
          });
          thumb.classList.add('active');
        });
      });
    })();
  },[])
  return (
    <div>
        <Header />
      <main className="product-details-main">
            <div className="container">
            <div className="product-details-card">

                <div className="row g-4 g-xl-5 align-items-start">

                <div className="col-lg-4">
                    <div className="product-gallery">
                    <div className="product-gallery-main">
                        <img id="mainProductImage" src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&h=600&fit=crop" alt="Green bananas on tree" />
                    </div>
                    <div className="product-gallery-thumbs">
                        <button type="button" className="product-thumb active" data-image="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&h=600&fit=crop" aria-label="View image 1">
                        <img src="https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop" alt="Banana plantation thumbnail 1" />
                        </button>
                        <button type="button" className="product-thumb" data-image="https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&h=600&fit=crop" aria-label="View image 2">
                        <img src="https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=200&h=200&fit=crop" alt="Banana plantation thumbnail 2" />
                        </button>
                        <button type="button" className="product-thumb" data-image="https://images.unsplash.com/photo-1528825871115-3582a0260b03?w=800&h=600&fit=crop" aria-label="View image 3">
                        <img src="https://images.unsplash.com/photo-1528825871115-3582a0260b03?w=200&h=200&fit=crop" alt="Banana plantation thumbnail 3" />
                        </button>
                        <button type="button" className="product-thumb" data-image="https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=800&h=600&fit=crop" aria-label="View image 4">
                        <img src="https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=200&h=200&fit=crop" alt="Green banana bunch thumbnail 4" />
                        </button>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="product-info">
                    <h2 className="product-info-title">Product Details</h2>
                    <hr className="product-info-divider" />

                    <div className="product-meta">
                        <span className="product-posted">Posted On 22 Aug 2026</span>
                        <span className="product-badge">SELL</span>
                    </div>

                    <h1 className="product-name">Banana</h1>

                    <ul className="product-attributes list-unstyled mb-0">
                        <li className="product-attribute">
                        <span className="product-attribute-icon" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                            <path d="M2 17l10 5 10-5"/>
                            <path d="M2 12l10 5 10-5"/>
                            </svg>
                        </span>
                        <span className="product-attribute-label">Variety :</span>
                        <span className="product-attribute-value">Green Banana</span>
                        </li>
                        <li className="product-attribute">
                        <span className="product-attribute-icon" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <path d="M16 10a4 4 0 0 1-8 0"/>
                            </svg>
                        </span>
                        <span className="product-attribute-label">Quantity :</span>
                        <span className="product-attribute-value">18 Ton</span>
                        </li>
                        <li className="product-attribute">
                        <span className="product-attribute-icon" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                            </svg>
                        </span>
                        <span className="product-attribute-label">Location :</span>
                        <span className="product-attribute-value">Ghodasgav Shirpur</span>
                        </li>
                        <li className="product-attribute">
                        <span className="product-attribute-icon product-attribute-icon-price" aria-hidden="true">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/>
                            <text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="11" font-weight="700" font-family="Inter, sans-serif">&#8377;</text>
                            </svg>
                        </span>
                        <span className="product-attribute-label">Price :</span>
                        <span className="product-attribute-value">&#8377; 21.00 / Kg</span>
                        </li>
                    </ul>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="contact-card">
                    <h3 className="contact-card-title">Contact Information</h3>
                    <hr className="contact-card-divider" />

                    <div className="contact-seller">
                        <img className="contact-seller-avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face" alt="Seller profile" />
                        <div className="contact-seller-info">
                        <span className="contact-seller-type">fpo</span>
                        <span className="contact-seller-stats">125 buyers connected</span>
                        </div>
                    </div>

                    <div className="contact-masked" aria-hidden="true">
                        <span className="contact-masked-bar"></span>
                        <span className="contact-masked-bar"></span>
                        <span className="contact-masked-bar"></span>
                    </div>

                    <button type="button" className="btn-unlock-contact">Unlock Contact</button>
                    </div>
                </div>

                </div>
            </div>

            <section className="similar-products-section">
                <div className="similar-products-header">
                <h2 className="similar-products-title">Similar Products</h2>
                <Link to="#" className="similar-products-view-all">View All &rarr;</Link>
                </div>

                <div className="similar-products-grid">

                <article className="similar-product-card">
                    <Link to="#" className="similar-product-link">
                    <div className="similar-product-image">
                        <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop" alt="Potato" />
                    </div>
                    <div className="similar-product-body">
                        <div className="similar-product-header">
                        <h3 className="similar-product-name">Potato</h3>
                        <span className="similar-product-badge similar-product-badge--sell">SELL</span>
                        </div>
                        <p className="similar-product-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Kadambagachi
                        </p>
                        <div className="similar-product-stats">
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="11" font-weight="700" font-family="Inter, sans-serif">&#8377;</text></svg>
                            Price
                            </span>
                            <span className="similar-product-stat-value">&#8377;20.00/Ton</span>
                        </div>
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                            Quantity
                            </span>
                            <span className="similar-product-stat-value">20</span>
                        </div>
                        </div>
                        <div className="similar-product-category">
                        <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                            Sub Category
                        </span>
                        <span className="similar-product-category-value">Potato Kufri Bahar</span>
                        </div>
                    </div>
                    </Link>
                </article>

                <article className="similar-product-card">
                    <Link to="#" className="similar-product-link">
                    <div className="similar-product-image">
                        <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop" alt="Potato" />
                    </div>
                    <div className="similar-product-body">
                        <div className="similar-product-header">
                        <h3 className="similar-product-name">Potato</h3>
                        <span className="similar-product-badge similar-product-badge--sell">SELL</span>
                        </div>
                        <p className="similar-product-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Kadambagachi
                        </p>
                        <div className="similar-product-stats">
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="11" font-weight="700" font-family="Inter, sans-serif">&#8377;</text></svg>
                            Price
                            </span>
                            <span className="similar-product-stat-value">&#8377;20.00/Ton</span>
                        </div>
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                            Quantity
                            </span>
                            <span className="similar-product-stat-value">20</span>
                        </div>
                        </div>
                        <div className="similar-product-category">
                        <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                            Sub Category
                        </span>
                        <span className="similar-product-category-value">Potato Kufri Chandramukhi</span>
                        </div>
                    </div>
                    </Link>
                </article>

                <article className="similar-product-card">
                    <Link to="#" className="similar-product-link">
                    <div className="similar-product-image">
                        <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop" alt="Potato" />
                    </div>
                    <div className="similar-product-body">
                        <div className="similar-product-header">
                        <h3 className="similar-product-name">Potato</h3>
                        <span className="similar-product-badge similar-product-badge--sell">SELL</span>
                        </div>
                        <p className="similar-product-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Kadambagachi
                        </p>
                        <div className="similar-product-stats">
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="11" font-weight="700" font-family="Inter, sans-serif">&#8377;</text></svg>
                            Price
                            </span>
                            <span className="similar-product-stat-value">&#8377;20.00/Ton</span>
                        </div>
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                            Quantity
                            </span>
                            <span className="similar-product-stat-value">20</span>
                        </div>
                        </div>
                        <div className="similar-product-category">
                        <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                            Sub Category
                        </span>
                        <span className="similar-product-category-value">Potato Kufri Bahar</span>
                        </div>
                    </div>
                    </Link>
                </article>

                <article className="similar-product-card">
                    <Link to="#" className="similar-product-link">
                    <div className="similar-product-image">
                        <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop" alt="Potato" />
                    </div>
                    <div className="similar-product-body">
                        <div className="similar-product-header">
                        <h3 className="similar-product-name">Potato</h3>
                        <span className="similar-product-badge similar-product-badge--sell">SELL</span>
                        </div>
                        <p className="similar-product-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Kadambagachi
                        </p>
                        <div className="similar-product-stats">
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="11" font-weight="700" font-family="Inter, sans-serif">&#8377;</text></svg>
                            Price
                            </span>
                            <span className="similar-product-stat-value">&#8377;20.00/Ton</span>
                        </div>
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                            Quantity
                            </span>
                            <span className="similar-product-stat-value">20</span>
                        </div>
                        </div>
                        <div className="similar-product-category">
                        <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                            Sub Category
                        </span>
                        <span className="similar-product-category-value">Potato Kufri Chandramukhi</span>
                        </div>
                    </div>
                    </Link>
                </article>

                <article className="similar-product-card">
                    <Link to="#" className="similar-product-link">
                    <div className="similar-product-image">
                        <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop" alt="Potato" />
                    </div>
                    <div className="similar-product-body">
                        <div className="similar-product-header">
                        <h3 className="similar-product-name">Potato</h3>
                        <span className="similar-product-badge similar-product-badge--sell">SELL</span>
                        </div>
                        <p className="similar-product-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Kadambagachi
                        </p>
                        <div className="similar-product-stats">
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="11" font-weight="700" font-family="Inter, sans-serif">&#8377;</text></svg>
                            Price
                            </span>
                            <span className="similar-product-stat-value">&#8377;20.00/Ton</span>
                        </div>
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                            Quantity
                            </span>
                            <span className="similar-product-stat-value">20</span>
                        </div>
                        </div>
                        <div className="similar-product-category">
                        <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                            Sub Category
                        </span>
                        <span className="similar-product-category-value">Potato Kufri Bahar</span>
                        </div>
                    </div>
                    </Link>
                </article>

                <article className="similar-product-card">
                    <Link to="#" className="similar-product-link">
                    <div className="similar-product-image">
                        <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop" alt="Potato" />
                    </div>
                    <div className="similar-product-body">
                        <div className="similar-product-header">
                        <h3 className="similar-product-name">Potato</h3>
                        <span className="similar-product-badge similar-product-badge--buy">BUY</span>
                        </div>
                        <p className="similar-product-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Delhi
                        </p>
                        <div className="similar-product-stats">
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="11" font-weight="700" font-family="Inter, sans-serif">&#8377;</text></svg>
                            Price
                            </span>
                            <span className="similar-product-stat-value">&#8377;20.00/Ton</span>
                        </div>
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                            Quantity
                            </span>
                            <span className="similar-product-stat-value">20</span>
                        </div>
                        </div>
                        <div className="similar-product-category">
                        <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                            Sub Category
                        </span>
                        <span className="similar-product-category-value">Potato Kufri Chandramukhi</span>
                        </div>
                    </div>
                    </Link>
                </article>

                <article className="similar-product-card">
                    <Link to="#" className="similar-product-link">
                    <div className="similar-product-image">
                        <img src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop" alt="Potato" />
                    </div>
                    <div className="similar-product-body">
                        <div className="similar-product-header">
                        <h3 className="similar-product-name">Potato</h3>
                        <span className="similar-product-badge similar-product-badge--buy">BUY</span>
                        </div>
                        <p className="similar-product-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        Delhi
                        </p>
                        <div className="similar-product-stats">
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><text x="12" y="16" text-anchor="middle" fill="currentColor" font-size="11" font-weight="700" font-family="Inter, sans-serif">&#8377;</text></svg>
                            Price
                            </span>
                            <span className="similar-product-stat-value">&#8377;20.00/Ton</span>
                        </div>
                        <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>
                            Quantity
                            </span>
                            <span className="similar-product-stat-value">20</span>
                        </div>
                        </div>
                        <div className="similar-product-category">
                        <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                            Sub Category
                        </span>
                        <span className="similar-product-category-value">Potato Kufri Chandramukhi</span>
                        </div>
                    </div>
                    </Link>
                </article>

                </div>
            </section>
            </div>
        </main>
    </div>
  )
}

export default ProductDetails;
