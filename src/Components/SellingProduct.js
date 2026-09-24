import React from 'react';
import { Link } from 'react-router-dom';
import ListingProductCard from '../CommonComponents/ListingProductCard';
import { bestSellingProducts } from '../data/homeProducts';

const SellingProduct = () => {
  return (
    <section className="tkb-listing-section pb-4">
      <div className="container-lg">
        <div className="section-header d-flex flex-wrap justify-content-between align-items-center mb-4">
          <h2 className="section-title mb-0">Best selling products</h2>
          <Link to="/product-list" className="btn btn-primary rounded-pill px-4">View All</Link>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3">
          {bestSellingProducts.map((product) => (
            <div className="col" key={`${product.name}-${product.location}`}>
              <ListingProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellingProduct;
