import React from 'react';
import { Link } from 'react-router-dom';
import category_thumb_1 from '../assets/images/category-thumb-1.jpg'
import category_thumb_2 from '../assets/images/category-thumb-2.jpg'
import category_thumb_3 from '../assets/images/category-thumb-3.jpg'
import category_thumb_4 from '../assets/images/category-thumb-4.jpg'
import category_thumb_5 from '../assets/images/category-thumb-5.jpg'
import category_thumb_6 from '../assets/images/category-thumb-6.jpg'
import category_thumb_7 from '../assets/images/category-thumb-7.jpg'
import category_thumb_8 from '../assets/images/category-thumb-8.jpg'


const Category = () => {

  return (
    <div>
      <section className="py-5 overflow-hidden">
        <div className="container-lg">
            <div className="row">
            <div className="col-md-12">

                <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                <h2 className="section-title">Category</h2>

                <div className="d-flex align-items-center">
                    <Link to="#" className="btn btn-primary me-2">View All</Link>
                    <div className="swiper-buttons">
                    <button className="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                    <button className="swiper-next category-carousel-next btn btn-yellow">❯</button>
                    </div>
                </div>
                </div>
                
            </div>
            </div>
            <div className="row">
            <div className="col-md-12">

                <div className="category-carousel swiper">
                <div className="swiper-wrapper">
                    <Link to="#" className="nav-link swiper-slide text-center">
                    <img src={category_thumb_1} className="rounded-circle" alt="Category Thumbnail" />
                    <h4 className="fs-6 mt-3 fw-normal category-title">Fruits & Veges</h4>
                    </Link>
                    <Link to="#" className="nav-link swiper-slide text-center">
                    <img src={category_thumb_2} className="rounded-circle" alt="Category Thumbnail" />
                    <h4 className="fs-6 mt-3 fw-normal category-title">Breads & Sweets</h4>
                    </Link>
                    <Link to="#" className="nav-link swiper-slide text-center">
                    <img src={category_thumb_3} className="rounded-circle" alt="Category Thumbnail" />
                    <h4 className="fs-6 mt-3 fw-normal category-title">Fruits & Veges</h4>
                    </Link>
                    <Link to="#" className="nav-link swiper-slide text-center">
                    <img src={category_thumb_4} className="rounded-circle" alt="Category Thumbnail" />
                    <h4 className="fs-6 mt-3 fw-normal category-title">Beverages</h4>
                    </Link>
                    <Link to="#" className="nav-link swiper-slide text-center">
                    <img src={category_thumb_5} className="rounded-circle" alt="Category Thumbnail" />
                    <h4 className="fs-6 mt-3 fw-normal category-title">Meat Products</h4>
                    </Link>
                    <Link to="#" className="nav-link swiper-slide text-center">
                    <img src={category_thumb_6} className="rounded-circle" alt="Category Thumbnail" />
                    <h4 className="fs-6 mt-3 fw-normal category-title">Breads</h4>
                    </Link>
                    <Link to="#" className="nav-link swiper-slide text-center">
                    <img src={category_thumb_7} className="rounded-circle" alt="Category Thumbnail" />
                    <h4 className="fs-6 mt-3 fw-normal category-title">Fruits & Veges</h4>
                    </Link>
                    <Link to="#" className="nav-link swiper-slide text-center">
                    <img src={category_thumb_8} className="rounded-circle" alt="Category Thumbnail" />
                    <h4 className="fs-6 mt-3 fw-normal category-title">Breads & Sweets</h4>
                    </Link>
                    <Link to="#" className="nav-link swiper-slide text-center">
                    <img src={category_thumb_1} className="rounded-circle" alt="Category Thumbnail" />
                    <h4 className="fs-6 mt-3 fw-normal category-title">Fruits & Veges</h4>
                    </Link>
                    <Link to="#" className="nav-link swiper-slide text-center">
                    <img src={category_thumb_2} className="rounded-circle" alt="Category Thumbnail" />
                    <h4 className="fs-6 mt-3 fw-normal category-title">Beverages</h4>
                    </Link>
                    <Link to="#" className="nav-link swiper-slide text-center">
                    <img src={category_thumb_3} className="rounded-circle" alt="Category Thumbnail" />
                    <h4 className="fs-6 mt-3 fw-normal category-title">Meat Products</h4>
                    </Link>
                    <Link to="#" className="nav-link swiper-slide text-center">
                    <img src={category_thumb_4} className="rounded-circle" alt="Category Thumbnail" />
                    <h4 className="fs-6 mt-3 fw-normal category-title">Breads</h4>
                    </Link>
                    
                </div>
                </div>

            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Category
