import React, { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';

const PEOPLE = [
  { name: "Akash", location: "Aurangabad, Maharashtra", role: "farmer", category: "wheat" },
  { name: "Rakesh Jagdish patil", location: "Dhule, Maharashtra", role: "farmer", category: "rice" },
  { name: "Ajinkya Deshpande", location: "Jalna, Maharashtra", role: "farmer", category: "millets" },
  { name: "Harshu", location: "Aurangabad, Maharashtra", role: "farmer", category: "barley" },
  { name: "Krishna Sonawane", location: "Aurangabad, Maharashtra", role: "farmer", category: "maize" },
  { name: "Bhushan Patil", location: "Dhule, Maharashtra", role: "farmer", category: "sorghum" },
  { name: "Sanket gopal", location: "Pune, Maharashtra", role: "farmer", category: "oats" },
  { name: "Sarthak Kulkarni", location: "Pune, Maharashtra", role: "farmer", category: "tamarind" },
  { name: "Vijay Patidar", location: "Shajapur, Madhya Pradesh", role: "farmer", category: "wheat" },
  { name: "Rahul Sharma", location: "Indore, Madhya Pradesh", role: "farmer", category: "rice" },
  { name: "Suresh Kale", location: "Nashik, Maharashtra", role: "farmer", category: "millets" },
  { name: "Priya More", location: "Nagpur, Maharashtra", role: "farmer", category: "barley" },
  { name: "Amit Joshi", location: "Kolhapur, Maharashtra", role: "farmer", category: "maize" },
  { name: "Ganesh Pawar", location: "Solapur, Maharashtra", role: "farmer", category: "sorghum" },
  { name: "Deepak Yadav", location: "Bhopal, Madhya Pradesh", role: "farmer", category: "oats" },
  { name: "Manoj Singh", location: "Jaipur, Rajasthan", role: "farmer", category: "wheat" },
  { name: "Anil Chavan", location: "Satara, Maharashtra", role: "farmer", category: "rice" },
  { name: "Rohit Deshmukh", location: "Ahmednagar, Maharashtra", role: "farmer", category: "millets" },
  { name: "Nitin Bhosale", location: "Sangli, Maharashtra", role: "farmer", category: "barley" },
  { name: "Kiran Patil", location: "Jalgaon, Maharashtra", role: "farmer", category: "maize" },
  { name: "Sunil Gaikwad", location: "Latur, Maharashtra", role: "farmer", category: "sorghum" },
  { name: "Prakash Shinde", location: "Osmanabad, Maharashtra", role: "farmer", category: "oats" },
  { name: "Mahesh Jadhav", location: "Beed, Maharashtra", role: "farmer", category: "tamarind" },
  { name: "Arjun Rathod", location: "Nanded, Maharashtra", role: "farmer", category: "wheat" },
  { name: "Meera Traders", location: "Mumbai, Maharashtra", role: "buyer", category: "wheat" },
  { name: "Agro Mart", location: "Pune, Maharashtra", role: "buyer", category: "rice" },
  { name: "Hari Om Traders", location: "Indore, Madhya Pradesh", role: "buyer", category: "millets" },
  { name: "Green Basket Co.", location: "Nashik, Maharashtra", role: "buyer", category: "barley" },
  { name: "Kisan Buyers Hub", location: "Nagpur, Maharashtra", role: "buyer", category: "maize" },
  { name: "Shree Grain Buyers", location: "Jaipur, Rajasthan", role: "buyer", category: "sorghum" },
  { name: "Fresh Harvest Traders", location: "Surat, Gujarat", role: "buyer", category: "oats" },
  { name: "Bharat Agri Buy", location: "Ahmedabad, Gujarat", role: "buyer", category: "tamarind" },
  { name: "AgriTech Mills", location: "Pune, Maharashtra", role: "manufacturer", category: "wheat" },
  { name: "Golden Grain Foods", location: "Rajkot, Gujarat", role: "manufacturer", category: "rice" },
  { name: "NutriFlakes Pvt Ltd", location: "Hyderabad, Telangana", role: "manufacturer", category: "millets" },
  { name: "Harvest Pack Co.", location: "Bengaluru, Karnataka", role: "manufacturer", category: "barley" },
  { name: "MaizePlus Industries", location: "Indore, Madhya Pradesh", role: "manufacturer", category: "maize" },
  { name: "Jowar Foods Ltd", location: "Solapur, Maharashtra", role: "manufacturer", category: "sorghum" },
  { name: "Oats & Co.", location: "Chennai, Tamil Nadu", role: "manufacturer", category: "oats" },
  { name: "Tamarind Works", location: "Nagpur, Maharashtra", role: "manufacturer", category: "tamarind" }
];

const CATEGORIES = [
  { value: "all", key: "all_categories", defaultLabel: "All Categories" },
  { value: "wheat", key: "wheat", defaultLabel: "Wheat" },
  { value: "rice", key: "rice", defaultLabel: "Rice" },
  { value: "millets", key: "millets", defaultLabel: "Millets" },
  { value: "barley", key: "barley", defaultLabel: "Barley" },
  { value: "maize", key: "maize", defaultLabel: "Maize (Corn)" },
  { value: "sorghum", key: "sorghum", defaultLabel: "Sorghum (Jowar)" },
  { value: "oats", key: "oats", defaultLabel: "Oats" },
  { value: "tamarind", key: "tamarind", defaultLabel: "Tamarind seeds" }
];

const ROLE_TABS = [
  { key: 'farmer', pluralKey: 'farmers' },
  { key: 'buyer', pluralKey: 'buyers' },
  { key: 'manufacturer', pluralKey: 'manufacturers' }
];

const PER_PAGE = 8;

const PersonCard = ({ person }) => {
  const { t } = useTranslation();
  const roleLabel = t(`roles.${person.role}`, person.role);
  return (
    <Link
      className="tkb-person-card"
      to={`/user-detail?role=${person.role}&name=${encodeURIComponent(person.name)}`}
      state={{ person }}
      data-role={person.role}
      data-category={person.category}
    >
      <span className="tkb-person-badge">{roleLabel}</span>
      <div className="tkb-person-avatar" aria-hidden="true">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <circle cx="12" cy="8" r="3.2" />
          <path d="M5.5 19c.6-3.4 3.1-5.2 6.5-5.2s5.9 1.8 6.5 5.2" />
        </svg>
      </div>
      <h3 className="tkb-person-name">{person.name}</h3>
      <p className="tkb-person-location">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21s7-7.2 7-11.2A7 7 0 0 0 5 9.8C5 13.8 12 21 12 21z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
        {person.location}
      </p>
    </Link>
  );
};

const ProductList = () => {
  const { t } = useTranslation();
  const [activeRole, setActiveRole] = useState('farmer');
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [categorySearch, setCategorySearch] = useState('');
  const gridRef = useRef(null);

  // Filter people by role and category
  const filteredPeople = useMemo(() => {
    return PEOPLE.filter((person) => {
      const roleOk = person.role === activeRole;
      const categoryOk = activeCategory === 'all' || person.category === activeCategory;
      return roleOk && categoryOk;
    });
  }, [activeRole, activeCategory]);

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filteredPeople.length / PER_PAGE));
  const safePage = currentPage > totalPages ? totalPages : currentPage;
  const startIndex = (safePage - 1) * PER_PAGE;
  const pageItems = filteredPeople.slice(startIndex, startIndex + PER_PAGE);

  // Filter categories in the sidebar search
  const visibleCategories = useMemo(() => {
    const query = categorySearch.toLowerCase().trim();
    if (!query) return CATEGORIES;
    return CATEGORIES.filter((cat) => {
      const translated = t(`categories.${cat.key}`, cat.defaultLabel).toLowerCase();
      return translated.includes(query) || cat.defaultLabel.toLowerCase().includes(query);
    });
  }, [categorySearch, t]);

  const handleRoleChange = (role) => {
    setActiveRole(role);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (value) => {
    let newPage = safePage;
    if (value === 'prev') {
      newPage = safePage - 1;
    } else if (value === 'next') {
      newPage = safePage + 1;
    } else {
      newPage = parseInt(value, 10);
    }
    setCurrentPage(newPage);
    if (gridRef.current) {
      gridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const currentRolePlural = t(`product_list.${activeRole === 'farmer' ? 'farmers' : activeRole === 'buyer' ? 'buyers' : 'manufacturers'}`);
  const title = `${t('product_list.all_products')} – ${currentRolePlural}`;

  return (
    <div>
      <Header />
      <main className="tkb-products-main">
        <div className="container-lg">
          <div className="tkb-products-shell">
            <aside className="tkb-category-panel">
              <h2 className="tkb-category-heading">{t('categories.all_categories')}</h2>
              <input
                type="search"
                className="tkb-category-search"
                placeholder={t('product_list.search_categories')}
                value={categorySearch}
                onChange={(e) => setCategorySearch(e.target.value)}
              />
              <ul className="tkb-category-list">
                {visibleCategories.map((cat) => (
                  <li key={cat.value}>
                    <button
                      type="button"
                      className={`tkb-category-btn${activeCategory === cat.value ? ' is-active' : ''}`}
                      data-category={cat.value}
                      onClick={() => handleCategoryChange(cat.value)}
                    >
                      {t(`categories.${cat.key}`, cat.defaultLabel)}
                    </button>
                  </li>
                ))}
              </ul>
            </aside>

            <section>
              <h1 className="tkb-products-title">{title}</h1>
              <div className="tkb-role-tabs" role="tablist" aria-label="User type">
                {ROLE_TABS.map((rt) => (
                  <button
                    key={rt.key}
                    type="button"
                    className={`tkb-role-tab${activeRole === rt.key ? ' is-active' : ''}`}
                    data-role={rt.key}
                    onClick={() => handleRoleChange(rt.key)}
                  >
                    {t(`product_list.${rt.pluralKey}`)}
                  </button>
                ))}
              </div>
              <div className="tkb-product-grid" ref={gridRef}>
                {pageItems.map((person, index) => (
                  <PersonCard key={`${person.name}-${index}`} person={person} />
                ))}
              </div>
              <nav className="tkb-pagination" aria-label="Product list pages">
                <button
                  type="button"
                  className="tkb-page-btn"
                  disabled={safePage === 1}
                  onClick={() => handlePageChange('prev')}
                >
                  {t('product_list.previous')}
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    className={`tkb-page-btn${pageNum === safePage ? ' is-active' : ''}`}
                    onClick={() => handlePageChange(String(pageNum))}
                  >
                    {pageNum}
                  </button>
                ))}
                <button
                  type="button"
                  className="tkb-page-btn"
                  disabled={safePage === totalPages}
                  onClick={() => handlePageChange('next')}
                >
                  {t('product_list.next')}
                </button>
              </nav>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductList;
