import React from 'react';
import { Link } from 'react-router-dom';
import product_thumb_20 from '../assets/images/product-thumb-20.png';
import product_thumb_1 from '../assets/images/product-thumb-1.png';
import product_thumb_21 from '../assets/images/product-thumb-21.png';
import product_thumb_22 from '../assets/images/product-thumb-22.png';
import product_thumb_23 from '../assets/images/product-thumb-23.png';
import product_thumb_10 from '../assets/images/product-thumb-10.png';
import product_thumb_11 from '../assets/images/product-thumb-11.png';
import product_thumb_12 from '../assets/images/product-thumb-12.png';
import product_thumb_13 from '../assets/images/product-thumb-13.png';


const JustArrived = () => {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
            <defs>
                <symbol xmlns="http://www.w3.org/2000/svg" id="star-full" viewBox="0 0 24 24"><path fill="currentColor" d="m3.1 11.3l3.6 3.3l-1 4.6c-.1.6.1 1.2.6 1.5c.2.2.5.3.8.3c.2 0 .4 0 .6-.1c0 0 .1 0 .1-.1l4.1-2.3l4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1c.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7l.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5l-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1c-.5 0-1 .3-1.3.8c0 0 0 .1-.1.1L8.7 8.2L4 8.7h-.1c-.5.1-1 .5-1.2 1c-.1.6 0 1.2.4 1.6"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="star-half" viewBox="0 0 24 24"><path fill="currentColor" d="m3.1 11.3l3.6 3.3l-1 4.6c-.1.6.1 1.2.6 1.5c.2.2.5.3.8.3c.2 0 .4 0 .6-.1c0 0 .1 0 .1-.1l4.1-2.3l4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1c.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7l.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5l-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1c-.5 0-1 .3-1.3.8c0 0 0 .1-.1.1L8.7 8.2L4 8.7h-.1c-.5.1-1 .5-1.2 1c-.1.6 0 1.2.4 1.6m8.9 5V5.8l1.7 3.8c.1.3.5.5.8.6l4.2.5l-3.1 2.8c-.3.2-.4.6-.3 1c0 .2.5 2.2.8 4.1l-3.6-2.1c-.2-.2-.3-.2-.5-.2"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="heart" viewBox="0 0 24 24"><path fill="currentColor" d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3a4.25 4.25 0 0 1 3 1.25a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 6.05Z"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="cart" viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9l-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5Z"/></symbol>
            </defs>
        </svg>
      <section id="latest-products" className="products-carousel">
        <div className="container-lg overflow-hidden pb-5">
            <div className="row">
            <div className="col-md-12">

                <div className="section-header d-flex justify-content-between my-4">
                
                <h2 className="section-title">Just arrived</h2>

                <div className="d-flex align-items-center">
                    <Link to="#" className="btn btn-primary me-2">View All</Link>
                    <div className="swiper-buttons">
                    <button className="swiper-prev products-carousel-prev btn btn-primary">❮</button>
                    <button className="swiper-next products-carousel-next btn btn-primary">❯</button>
                    </div>  
                </div>
                </div>
                
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">

                <div className="swiper">
                <div className="swiper-wrapper">
                    
                    <div className="product-item swiper-slide">
                    <figure>
                        <Link to="#" title="Product Title">
                        <img src={product_thumb_20} alt="Product Thumbnail" className="tab-image" />
                        </Link>
                    </figure>
                    <div className="d-flex flex-column text-center">
                        <h3 className="fs-6 fw-normal">Sunstar Fresh Melon Juice</h3>
                        <div>
                        <span className="rating">
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-half"></use></svg>
                        </span>
                        <span>(222)</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                        <del>$24.00</del>
                        <span className="text-dark fw-semibold">$18.00</span>
                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                        </div>
                        <div className="button-area p-3 pt-0">
                        <div className="row g-1 mt-2">
                            <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                            <div className="col-7"><Link to="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</Link></div>
                            <div className="col-2"><Link to="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></Link></div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="product-item swiper-slide">
                    <figure>
                        <Link to="#" title="Product Title">
                        <img src={product_thumb_1} alt="Product Thumbnail" className="tab-image" />
                        </Link>
                    </figure>
                    <div className="d-flex flex-column text-center">
                        <h3 className="fs-6 fw-normal">Whole Wheat Sandwich Bread</h3>
                        <div>
                        <span className="rating">
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-half"></use></svg>
                        </span>
                        <span>(222)</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                        <del>$24.00</del>
                        <span className="text-dark fw-semibold">$18.00</span>
                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                        </div>
                        <div className="button-area p-3 pt-0">
                        <div className="row g-1 mt-2">
                            <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                            <div className="col-7"><Link to="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</Link></div>
                            <div className="col-2"><Link to="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></Link></div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="product-item swiper-slide">
                    <figure>
                        <Link to="#" title="Product Title">
                        <img src={product_thumb_21} alt="Product Thumbnail" className="tab-image" />
                        </Link>
                    </figure>
                    <div className="d-flex flex-column text-center">
                        <h3 className="fs-6 fw-normal">Sunstar Fresh Melon Juice</h3>
                        <div>
                        <span className="rating">
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-half"></use></svg>
                        </span>
                        <span>(222)</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                        <del>$24.00</del>
                        <span className="text-dark fw-semibold">$18.00</span>
                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                        </div>
                        <div className="button-area p-3 pt-0">
                        <div className="row g-1 mt-2">
                            <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                            <div className="col-7"><Link to="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</Link></div>
                            <div className="col-2"><Link to="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></Link></div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="product-item swiper-slide">
                    <figure>
                        <Link to="#" title="Product Title">
                        <img src={product_thumb_22} alt="Product Thumbnail" className="tab-image" />
                        </Link>
                    </figure>
                    <div className="d-flex flex-column text-center">
                        <h3 className="fs-6 fw-normal">Gourmet Dark Chocolate</h3>
                        <div>
                        <span className="rating">
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-half"></use></svg>
                        </span>
                        <span>(222)</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                        <del>$24.00</del>
                        <span className="text-dark fw-semibold">$18.00</span>
                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                        </div>
                        <div className="button-area p-3 pt-0">
                        <div className="row g-1 mt-2">
                            <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                            <div className="col-7"><Link to="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</Link></div>
                            <div className="col-2"><Link to="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></Link></div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="product-item swiper-slide">
                    <figure>
                        <Link to="#" title="Product Title">
                        <img src={product_thumb_23} alt="Product Thumbnail" className="tab-image" />
                        </Link>
                    </figure>
                    <div className="d-flex flex-column text-center">
                        <h3 className="fs-6 fw-normal">Sunstar Fresh Melon Juice</h3>
                        <div>
                        <span className="rating">
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-half"></use></svg>
                        </span>
                        <span>(222)</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                        <del>$24.00</del>
                        <span className="text-dark fw-semibold">$18.00</span>
                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                        </div>
                        <div className="button-area p-3 pt-0">
                        <div className="row g-1 mt-2">
                            <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                            <div className="col-7"><Link to="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</Link></div>
                            <div className="col-2"><Link to="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></Link></div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="product-item swiper-slide">
                    <figure>
                        <Link to="#" title="Product Title">
                        <img src={product_thumb_10} alt="Product Thumbnail" className="tab-image" />
                        </Link>
                    </figure>
                    <div className="d-flex flex-column text-center">
                        <h3 className="fs-6 fw-normal">Greek Style Plain Yogurt</h3>
                        <div>
                        <span className="rating">
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-half"></use></svg>
                        </span>
                        <span>(222)</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                        <del>$24.00</del>
                        <span className="text-dark fw-semibold">$18.00</span>
                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                        </div>
                        <div className="button-area p-3 pt-0">
                        <div className="row g-1 mt-2">
                            <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                            <div className="col-7"><Link to="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</Link></div>
                            <div className="col-2"><Link to="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></Link></div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="product-item swiper-slide">
                    <figure>
                        <Link to="#" title="Product Title">
                        <img src={product_thumb_11} alt="Product Thumbnail" className="tab-image" />
                        </Link>
                    </figure>
                    <div className="d-flex flex-column text-center">
                        <h3 className="fs-6 fw-normal">Pure Squeezed No Pulp Orange Juice</h3>
                        <div>
                        <span className="rating">
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-half"></use></svg>
                        </span>
                        <span>(222)</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                        <del>$24.00</del>
                        <span className="text-dark fw-semibold">$18.00</span>
                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                        </div>
                        <div className="button-area p-3 pt-0">
                        <div className="row g-1 mt-2">
                            <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                            <div className="col-7"><Link to="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</Link></div>
                            <div className="col-2"><Link to="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></Link></div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="product-item swiper-slide">
                    <figure>
                        <Link to="#" title="Product Title">
                        <img src={product_thumb_12} alt="Product Thumbnail" className="tab-image" />
                        </Link>
                    </figure>
                    <div className="d-flex flex-column text-center">
                        <h3 className="fs-6 fw-normal">Fresh Oranges</h3>
                        <div>
                        <span className="rating">
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-half"></use></svg>
                        </span>
                        <span>(222)</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                        <del>$24.00</del>
                        <span className="text-dark fw-semibold">$18.00</span>
                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                        </div>
                        <div className="button-area p-3 pt-0">
                        <div className="row g-1 mt-2">
                            <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                            <div className="col-7"><Link to="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</Link></div>
                            <div className="col-2"><Link to="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></Link></div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="product-item swiper-slide">
                    <figure>
                        <Link to="#" title="Product Title">
                        <img src={product_thumb_13} alt="Product Thumbnail" className="tab-image" />
                        </Link>
                    </figure>
                    <div className="d-flex flex-column text-center">
                        <h3 className="fs-6 fw-normal">Gourmet Dark Chocolate Bars</h3>
                        <div>
                        <span className="rating">
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-full"></use></svg>
                            <svg width="18" height="18" className="text-warning"><use xlinkHref="#star-half"></use></svg>
                        </span>
                        <span>(222)</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center gap-2">
                        <del>$24.00</del>
                        <span className="text-dark fw-semibold">$18.00</span>
                        <span className="badge border border-dark-subtle rounded-0 fw-normal px-1 fs-7 lh-1 text-body-tertiary">10% OFF</span>
                        </div>
                        <div className="button-area p-3 pt-0">
                        <div className="row g-1 mt-2">
                            <div className="col-3"><input type="number" name="quantity" className="form-control border-dark-subtle input-number quantity" value="1" /></div>
                            <div className="col-7"><Link to="#" className="btn btn-primary rounded-1 p-2 fs-7 btn-cart"><svg width="18" height="18"><use xlinkHref="#cart"></use></svg> Add to Cart</Link></div>
                            <div className="col-2"><Link to="#" className="btn btn-outline-dark rounded-1 p-2 fs-6"><svg width="18" height="18"><use xlinkHref="#heart"></use></svg></Link></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
                </div>

            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default JustArrived;
