import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import catVegetables from '../assets/images/cat-vegetables.jpg';
import catOilseeds from '../assets/images/cat-oilseeds.jpg';
import catFruits from '../assets/images/cat-fruits.jpg';
import catPulses from '../assets/images/cat-pulses.jpg';
import catCashcrops from '../assets/images/cat-cashcrops.jpg';
import catFlower from '../assets/images/cat-flower.jpg';
import catSpices from '../assets/images/cat-spices.jpg';
import catDryfruits from '../assets/images/cat-dryfruits.jpg';
import catFertilizer from '../assets/images/cat-fertilizer.jpg';
import catAnimalfeed from '../assets/images/cat-animalfeed.jpg';

const categories = [
  { key: 'vegetables', name: 'Vegetables', img: catVegetables, count: '120+', icon: '#cat-vegetables' },
  { key: 'oil_seeds', name: 'Oil Seeds', img: catOilseeds, count: '85+', icon: '#cat-oilseeds' },
  { key: 'fruits', name: 'Fruits', img: catFruits, count: '95+', icon: '#cat-fruits' },
  { key: 'pulse_legumes', name: 'Pulse & Legumes', img: catPulses, count: '70+', icon: '#cat-pulses' },
  { key: 'cash_crops', name: 'Cash Crops', img: catCashcrops, count: '60+', icon: '#cat-cashcrops' },
  { key: 'flower', name: 'Flower', img: catFlower, count: '45+', icon: '#cat-flower' },
  { key: 'spices', name: 'Spices', img: catSpices, count: '80+', icon: '#cat-spices' },
  { key: 'dry_fruits', name: 'Dry Fruits', img: catDryfruits, count: '55+', icon: '#cat-dryfruits' },
  { key: 'organic_fertilizer', name: 'Organic Fertilizer', img: catFertilizer, count: '40+', icon: '#cat-fertilizer' },
  { key: 'animal_feed', name: 'Animal Feed', img: catAnimalfeed, count: '35+', icon: '#cat-animalfeed' },
];

const Category = () => {
  const { t } = useTranslation();

  return (
    <section className="tkb-category-section">
      <div className="container-lg">

        {/* Section Header */}
        <div className="tkb-category-header">
          <div className="tkb-category-header-left">
            <div className="tkb-category-header-icon">
              🌿
            </div>
            <div>
              <h2 className="tkb-category-heading">
                {t('home.shop_by_category')} <span>{t('home.shop_category_hl')}</span>
              </h2>
              <p className="tkb-category-subtitle">
                {t('home.shop_category_sub')}
              </p>
            </div>
          </div>

          <div className="tkb-category-header-actions">
            <Link to="/product-list" className="tkb-category-view-all">
              {t('common.view_all')} →
            </Link>
            <button className="tkb-category-nav-btn" aria-label="Previous">❮</button>
            <button className="tkb-category-nav-btn" aria-label="Next">❯</button>
          </div>
        </div>

        {/* Category Grid */}
        <div className="tkb-category-grid">
          {categories.map((cat, index) => (
            <Link to="/product-list" className="tkb-category-card" key={index}>
              <span className="tkb-category-badge">{cat.count}</span>
              <div className="tkb-category-img-wrap">
                <img src={cat.img} alt={t(`categories.${cat.key}`, cat.name)} />
              </div>
              <h4 className="tkb-category-name">{t(`categories.${cat.key}`, cat.name)}</h4>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Category
