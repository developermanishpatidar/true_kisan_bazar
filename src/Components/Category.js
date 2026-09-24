import React from 'react';
import { Link } from 'react-router-dom';
import catVegetables from '../assets/images/cat-vegetables.jpg'
import catOilseeds from '../assets/images/cat-oilseeds.jpg'
import catFruits from '../assets/images/cat-fruits.jpg'
import catPulses from '../assets/images/cat-pulses.jpg'
import catCashcrops from '../assets/images/cat-cashcrops.jpg'
import catFlower from '../assets/images/cat-flower.jpg'
import catSpices from '../assets/images/cat-spices.jpg'
import catDryfruits from '../assets/images/cat-dryfruits.jpg'
import catFertilizer from '../assets/images/cat-fertilizer.jpg'
import catAnimalfeed from '../assets/images/cat-animalfeed.jpg'

const categories = [
  { name: 'Vegetables', img: catVegetables, count: '120+', icon: '#cat-vegetables' },
  { name: 'Oil Seeds', img: catOilseeds, count: '85+', icon: '#cat-oilseeds' },
  { name: 'Fruits', img: catFruits, count: '95+', icon: '#cat-fruits' },
  { name: 'Pulse & Legumes', img: catPulses, count: '70+', icon: '#cat-pulses' },
  { name: 'Cash Crops', img: catCashcrops, count: '60+', icon: '#cat-cashcrops' },
  { name: 'Flower', img: catFlower, count: '45+', icon: '#cat-flower' },
  { name: 'Spices', img: catSpices, count: '80+', icon: '#cat-spices' },
  { name: 'Dry Fruits', img: catDryfruits, count: '55+', icon: '#cat-dryfruits' },
  { name: 'Organic Fertilizer', img: catFertilizer, count: '40+', icon: '#cat-fertilizer' },
  { name: 'Animal Feed', img: catAnimalfeed, count: '35+', icon: '#cat-animalfeed' },
];

const Category = () => {

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
                Shop by <span>Category</span>
              </h2>
              <p className="tkb-category-subtitle">
                Browse our wide range of fresh & organic products
              </p>
            </div>
          </div>

          <div className="tkb-category-header-actions">
            <Link to="#" className="tkb-category-view-all">
              View All →
            </Link>
            <button className="tkb-category-nav-btn" aria-label="Previous">❮</button>
            <button className="tkb-category-nav-btn" aria-label="Next">❯</button>
          </div>
        </div>

        {/* Category Grid */}
        <div className="tkb-category-grid">
          {categories.map((cat, index) => (
            <Link to="#" className="tkb-category-card" key={index}>
              <span className="tkb-category-badge">{cat.count}</span>
              <div className="tkb-category-img-wrap">
                <img src={cat.img} alt={cat.name} />
              </div>
              <h4 className="tkb-category-name">{cat.name}</h4>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Category
