import React, { useState, useMemo } from 'react';
import { useAdmin } from '../context/AdminContext';
import AdminModal from '../components/AdminModal';

const Products = () => {
  const { products, addProduct, updateProduct, toggleProductActive, deleteProduct } = useAdmin();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    variety: '',
    category: 'Fruits & Vegetables',
    price: '',
    quantity: '',
    location: '',
    image: '',
    tag: 'Featured'
  });

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.variety.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price) return;

    if (editingProduct) {
      updateProduct(editingProduct.id, formData);
      setEditingProduct(null);
    } else {
      addProduct(formData);
      setShowAddModal(false);
    }

    setFormData({
      name: '',
      variety: '',
      category: 'Fruits & Vegetables',
      price: '',
      quantity: '',
      location: '',
      image: '',
      tag: 'Featured'
    });
  };

  const openEditModal = (prod) => {
    setEditingProduct(prod);
    setFormData({
      name: prod.name,
      variety: prod.variety,
      category: prod.category || 'Fruits & Vegetables',
      price: prod.price,
      quantity: prod.quantity,
      location: prod.location,
      image: prod.image,
      tag: prod.tag || 'Featured'
    });
  };

  return (
    <div>
      <div className="adm-page-header">
        <div className="adm-page-title-group">
          <h1>Crop &amp; Produce Catalog</h1>
          <p>Maintain the marketplace crop listings, pricing benchmarks, and featured displays</p>
        </div>
        <div className="adm-page-actions">
          <button
            type="button"
            className="adm-btn adm-btn--primary"
            onClick={() => {
              setEditingProduct(null);
              setFormData({
                name: '',
                variety: '',
                category: 'Fruits & Vegetables',
                price: '',
                quantity: '',
                location: '',
                image: '',
                tag: 'Featured'
              });
              setShowAddModal(true);
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Add New Crop</span>
          </button>
        </div>
      </div>

      {/* Filter bar */}
      <div className="adm-card" style={{ padding: '1rem' }}>
        <div className="adm-filters-bar" style={{ margin: 0 }}>
          <div className="adm-filter-group" style={{ flex: 1 }}>
            <input
              type="text"
              className="adm-input"
              style={{ maxWidth: '320px' }}
              placeholder="Search crops, variety, farm location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="adm-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories ({products.length})</option>
              <option value="Fruits & Vegetables">Fruits &amp; Vegetables</option>
              <option value="Farm Produce">Farm Produce &amp; Grains</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="adm-card">
        <div className="adm-card-header">
          <h3 className="adm-card-title">Live Produce Offerings ({filteredProducts.length})</h3>
        </div>

        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Crop / Produce</th>
                <th>Category</th>
                <th>Price Benchmark</th>
                <th>Available Lot</th>
                <th>Origin Mandi / Farm</th>
                <th>Views</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((p) => (
                <tr key={p.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <img
                        src={p.image}
                        alt={p.name}
                        style={{ width: '44px', height: '44px', borderRadius: '8px', objectFit: 'cover', border: '1px solid #e2ece2' }}
                      />
                      <div>
                        <div style={{ fontWeight: '600', color: '#0f2e16' }}>{p.name}</div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>{p.variety}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="adm-badge adm-badge--buy">{p.category || 'Produce'}</span>
                  </td>
                  <td>
                    <strong style={{ color: '#166534' }}>{p.price}</strong>
                  </td>
                  <td>{p.quantity}</td>
                  <td>{p.location}</td>
                  <td>{p.views || 0}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => toggleProductActive(p.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0
                      }}
                    >
                      <span className={`adm-badge ${p.active ? 'adm-badge--active' : 'adm-badge--rejected'}`}>
                        {p.active ? 'Active' : 'Hidden'}
                      </span>
                    </button>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <button
                        type="button"
                        className="adm-btn adm-btn--secondary adm-btn--sm"
                        onClick={() => openEditModal(p)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="adm-btn adm-btn--danger adm-btn--sm"
                        onClick={() => {
                          if (window.confirm(`Delete "${p.name}" from catalog?`)) {
                            deleteProduct(p.id);
                          }
                        }}
                      >
                        &times;
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add / Edit Product Modal */}
      <AdminModal
        isOpen={showAddModal || Boolean(editingProduct)}
        onClose={() => {
          setShowAddModal(false);
          setEditingProduct(null);
        }}
        title={editingProduct ? `Edit Crop: ${editingProduct.name}` : 'Catalog New Crop / Produce'}
        footer={
          <>
            <button
              type="button"
              className="adm-btn adm-btn--secondary"
              onClick={() => {
                setShowAddModal(false);
                setEditingProduct(null);
              }}
            >
              Cancel
            </button>
            <button type="button" className="adm-btn adm-btn--primary" onClick={handleFormSubmit}>
              {editingProduct ? 'Update Crop' : 'Save & Publish'}
            </button>
          </>
        }
      >
        <form onSubmit={handleFormSubmit} className="adm-form-grid">
          <div className="adm-form-group">
            <label className="adm-label">Crop Name *</label>
            <input
              type="text"
              className="adm-input"
              required
              placeholder="e.g. Fresh Red Onions"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Category</label>
            <select
              className="adm-select"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="Fruits & Vegetables">Fruits &amp; Vegetables</option>
              <option value="Farm Produce">Farm Produce &amp; Grains</option>
            </select>
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Variety Details *</label>
            <input
              type="text"
              className="adm-input"
              required
              placeholder="e.g. Export Grade Nasik Dark Red"
              value={formData.variety}
              onChange={(e) => setFormData({ ...formData, variety: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Price Benchmark *</label>
            <input
              type="text"
              className="adm-input"
              required
              placeholder="e.g. 24.00/kg or ₹2,400/qtl"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Lot Size / Stock</label>
            <input
              type="text"
              className="adm-input"
              placeholder="e.g. 15 ton"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Farm / Mandi Location</label>
            <input
              type="text"
              className="adm-input"
              placeholder="e.g. Nashik, Maharashtra"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
          <div className="adm-form-group col-span-2">
            <label className="adm-label">Photo Image URL</label>
            <input
              type="url"
              className="adm-input"
              placeholder="https://images.unsplash.com/..."
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
            />
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default Products;
