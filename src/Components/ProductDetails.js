import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';

const GALLERY_IMAGES = [
  {
    full: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&h=600&fit=crop',
    thumb: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop',
    alt: 'Banana plantation thumbnail 1',
  },
  {
    full: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=800&h=600&fit=crop',
    thumb: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=200&h=200&fit=crop',
    alt: 'Banana plantation thumbnail 2',
  },
  {
    full: 'https://images.unsplash.com/photo-1528825871115-3582a0260b03?w=800&h=600&fit=crop',
    thumb: 'https://images.unsplash.com/photo-1528825871115-3582a0260b03?w=200&h=200&fit=crop',
    alt: 'Banana plantation thumbnail 3',
  },
  {
    full: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=800&h=600&fit=crop',
    thumb: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=200&h=200&fit=crop',
    alt: 'Green banana bunch thumbnail 4',
  },
];

const SIMILAR_PRODUCTS = [
  {
    name: 'Potato',
    name_hi: 'आलू',
    badge: 'sell',
    location: 'Kadambagachi',
    location_hi: 'कादम्बागाछी',
    price: '₹20.00/Ton',
    price_hi: '₹20.00/टन',
    quantity: '20',
    subCategory: 'Potato Kufri Bahar',
    subCategory_hi: 'आलू कुफरी बहार',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop'
  },
  {
    name: 'Potato',
    name_hi: 'आलू',
    badge: 'sell',
    location: 'Kadambagachi',
    location_hi: 'कादम्बागाछी',
    price: '₹20.00/Ton',
    price_hi: '₹20.00/टन',
    quantity: '20',
    subCategory: 'Potato Kufri Chandramukhi',
    subCategory_hi: 'आलू कुफरी चंद्रमुखी',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop'
  },
  {
    name: 'Potato',
    name_hi: 'आलू',
    badge: 'sell',
    location: 'Kadambagachi',
    location_hi: 'कादम्बागाछी',
    price: '₹20.00/Ton',
    price_hi: '₹20.00/टन',
    quantity: '20',
    subCategory: 'Potato Kufri Bahar',
    subCategory_hi: 'आलू कुफरी बहार',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop'
  },
  {
    name: 'Potato',
    name_hi: 'आलू',
    badge: 'sell',
    location: 'Kadambagachi',
    location_hi: 'कादम्बागाछी',
    price: '₹20.00/Ton',
    price_hi: '₹20.00/टन',
    quantity: '20',
    subCategory: 'Potato Kufri Chandramukhi',
    subCategory_hi: 'आलू कुफरी चंद्रमुखी',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop'
  },
  {
    name: 'Potato',
    name_hi: 'आलू',
    badge: 'buy',
    location: 'Delhi',
    location_hi: 'दिल्ली',
    price: '₹20.00/Ton',
    price_hi: '₹20.00/टन',
    quantity: '20',
    subCategory: 'Potato Kufri Chandramukhi',
    subCategory_hi: 'आलू कुफरी चंद्रमुखी',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop'
  }
];

const ProductDetails = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const isHi = i18n.language === 'hi';

  return (
    <div className="tkb-page">
      <Header />
      <main className="product-details-main">
        <div className="container">
          <div className="product-details-card">
            <div className="row g-4 g-xl-5 align-items-start">
              {/* Product Gallery */}
              <div className="col-lg-4">
                <div className="product-gallery">
                  <div className="product-gallery-main">
                    <img
                      src={GALLERY_IMAGES[activeImageIndex].full}
                      alt={GALLERY_IMAGES[activeImageIndex].alt}
                    />
                  </div>
                  <div className="product-gallery-thumbs">
                    {GALLERY_IMAGES.map((image, index) => (
                      <button
                        key={index}
                        type="button"
                        className={`product-thumb${index === activeImageIndex ? ' active' : ''}`}
                        onClick={() => setActiveImageIndex(index)}
                        aria-label={`View image ${index + 1}`}
                      >
                        <img src={image.thumb} alt={image.alt} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="col-lg-4">
                <div className="product-info">
                  <h2 className="product-info-title">{t('product_details.title')}</h2>
                  <hr className="product-info-divider" />

                  <div className="product-meta">
                    <span className="product-posted">{t('product_details.posted_on')} 22 Aug 2026</span>
                    <span className="product-badge">{t('common.sell')}</span>
                  </div>

                  <h1 className="product-name">{isHi ? 'केला' : 'Banana'}</h1>

                  <ul className="product-attributes list-unstyled mb-0">
                    <li className="product-attribute">
                      <span className="product-attribute-icon" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                          <path d="M2 17l10 5 10-5"/>
                          <path d="M2 12l10 5 10-5"/>
                        </svg>
                      </span>
                      <span className="product-attribute-label">{t('product_details.variety')} :</span>
                      <span className="product-attribute-value">{isHi ? 'हरा केला' : 'Green Banana'}</span>
                    </li>
                    <li className="product-attribute">
                      <span className="product-attribute-icon" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                          <line x1="3" y1="6" x2="21" y2="6"/>
                          <path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                      </span>
                      <span className="product-attribute-label">{t('product_details.quantity')} :</span>
                      <span className="product-attribute-value">18 {t('common.ton')}</span>
                    </li>
                    <li className="product-attribute">
                      <span className="product-attribute-icon" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                      </span>
                      <span className="product-attribute-label">{t('product_details.location')} :</span>
                      <span className="product-attribute-value">{isHi ? 'घोडासगांव शिरपुर' : 'Ghodasgav Shirpur'}</span>
                    </li>
                    <li className="product-attribute">
                      <span className="product-attribute-icon product-attribute-icon-price" aria-hidden="true">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
                          <text x="12" y="16" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">&#8377;</text>
                        </svg>
                      </span>
                      <span className="product-attribute-label">{t('product_details.price')} :</span>
                      <span className="product-attribute-value">&#8377; 21.00 / {t('common.kg')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Card */}
              <div className="col-lg-4">
                <div className="contact-card">
                  <h3 className="contact-card-title">{t('product_details.contact_info')}</h3>
                  <hr className="contact-card-divider" />

                  <div className="contact-seller">
                    <img className="contact-seller-avatar" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face" alt="Seller profile" />
                    <div className="contact-seller-info">
                      <span className="contact-seller-type">{t('roles.fpo')}</span>
                      <span className="contact-seller-stats">125 {t('product_details.buyers_connected')}</span>
                    </div>
                  </div>

                  <div className="contact-masked" aria-hidden="true">
                    <span className="contact-masked-bar"></span>
                    <span className="contact-masked-bar"></span>
                    <span className="contact-masked-bar"></span>
                  </div>

                  <button type="button" className="btn-unlock-contact">{t('product_details.unlock_contact')}</button>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Products */}
          <section className="similar-products-section">
            <div className="similar-products-header">
              <h2 className="similar-products-title">{t('product_details.similar_products')}</h2>
              <Link to="/product-list" className="similar-products-view-all">{t('product_details.view_all')} &rarr;</Link>
            </div>

            <div className="similar-products-grid">
              {SIMILAR_PRODUCTS.map((item, idx) => {
                const name = isHi ? item.name_hi : item.name;
                const location = isHi ? item.location_hi : item.location;
                const price = isHi ? item.price_hi : item.price;
                const subCategory = isHi ? item.subCategory_hi : item.subCategory;
                const badgeLabel = item.badge === 'sell' ? t('common.sell') : t('common.buy');

                return (
                  <article className="similar-product-card" key={idx}>
                    <Link to="/product-details" className="similar-product-link">
                      <div className="similar-product-image">
                        <img src={item.image} alt={name} />
                      </div>
                      <div className="similar-product-body">
                        <div className="similar-product-header">
                          <h3 className="similar-product-name">{name}</h3>
                          <span className={`similar-product-badge similar-product-badge--${item.badge}`}>
                            {badgeLabel}
                          </span>
                        </div>
                        <p className="similar-product-location">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                          </svg>
                          {location}
                        </p>
                        <div className="similar-product-stats">
                          <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/>
                                <text x="12" y="16" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">&#8377;</text>
                              </svg>
                              {t('common.price')}
                            </span>
                            <span className="similar-product-stat-value">{price}</span>
                          </div>
                          <div className="similar-product-stat">
                            <span className="similar-product-stat-label">
                              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                              </svg>
                              {t('common.quantity')}
                            </span>
                            <span className="similar-product-stat-value">{item.quantity}</span>
                          </div>
                        </div>
                        <div className="similar-product-category">
                          <span className="similar-product-stat-label">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                            </svg>
                            {t('product_details.sub_category')}
                          </span>
                          <span className="similar-product-category-value">{subCategory}</span>
                        </div>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
