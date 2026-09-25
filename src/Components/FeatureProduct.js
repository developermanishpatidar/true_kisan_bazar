import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ListingProductCard from '../CommonComponents/ListingProductCard';
import { featuredProducts } from '../data/homeProducts';

const FeatureProduct = () => {
  const { t } = useTranslation();

  return (
    <section id="featured-products" className="products-carousel tkb-listing-section">
      <div className="container-lg overflow-hidden py-4">
        <div className="section-header d-flex flex-wrap justify-content-between align-items-center mb-4">
          <h2 className="section-title mb-0">{t('home.featured_products')}</h2>
          <div className="d-flex align-items-center">
            <Link to="/product-list" className="btn btn-primary rounded-pill px-4 me-2">{t('common.view_all')}</Link>
            <div className="swiper-buttons">
              <button type="button" className="swiper-prev products-carousel-prev btn btn-primary">❮</button>
              <button type="button" className="swiper-next products-carousel-next btn btn-primary">❯</button>
            </div>
          </div>
        </div>
        <div className="swiper tkb-listing-swiper">
          <div className="swiper-wrapper">
            {featuredProducts.map((product) => (
              <div className="swiper-slide" key={`${product.name}-${product.location}`}>
                <ListingProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
