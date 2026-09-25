import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import banner_add_1 from '../assets/images/banner-ad-1.jpg';
import banner_add_2 from '../assets/images/banner-ad-2.jpg';
import banner_add_3 from '../assets/images/banner-ad-3.jpg';

const Discount = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section className="py-3">
        <div className="container-lg">
            <div className="row">
            <div className="col-md-12">

                <div className="banner-blocks">
                
                <div className="banner-ad d-flex align-items-center large bg-info block-1" style={{backgroundImage: `url(${banner_add_1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} >
                    <div className="banner-content p-5">
                    <div className="content-wrapper text-light">
                        <h3 className="banner-title text-light">{t('home.discount_sale')}</h3>
                        <p>{t('home.discount_sale_desc')}</p>
                        <Link to="/product-list" className="btn-link text-white">{t('home.shop_now')}</Link>
                    </div>
                    </div>
                </div>
                
                <div className="banner-ad bg-success-subtle block-2" style={{backgroundImage: `url(${banner_add_2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} >
                    <div className="banner-content align-items-center p-5">
                    <div className="content-wrapper text-light">
                        <h3 className="banner-title text-light">{t('home.discount_combo')}</h3>
                        <p>{t('home.discount_combo_desc')}</p>
                        <Link to="/product-list" className="btn-link text-white">{t('home.shop_now')}</Link>
                    </div>
                    </div>
                </div>

                <div className="banner-ad bg-danger block-3" style={{backgroundImage: `url(${banner_add_3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} >
                    <div className="banner-content align-items-center p-5">
                    <div className="content-wrapper text-light">
                        <h3 className="banner-title text-light">{t('home.discount_coupon')}</h3>
                        <p>{t('home.discount_coupon_desc')}</p>
                        <Link to="/product-list" className="btn-link text-white">{t('home.shop_now')}</Link>
                    </div>
                    </div>
                </div>

                </div>
                
            </div>
            </div>
        </div>
        </section>
    </div>
  );
};

export default Discount;
