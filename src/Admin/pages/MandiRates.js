import React, { useState, useMemo } from 'react';
import { useAdmin } from '../context/AdminContext';
import AdminModal from '../components/AdminModal';

const MandiRates = () => {
  const { mandiRates, updateMandiRate, addMandiRate, deleteMandiRate } = useAdmin();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [editingRate, setEditingRate] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [rateForm, setRateForm] = useState({
    commodity: '',
    market: '',
    state: 'Maharashtra',
    category: 'Vegetables',
    modal_price: '',
    price_change: 0,
    price_trend: 'steady',
    unit: 'Quintal',
    image: ''
  });

  // Extract unique states and categories
  const states = useMemo(() => {
    return Array.from(new Set(mandiRates.map((r) => r.state))).filter(Boolean);
  }, [mandiRates]);

  const categories = useMemo(() => {
    return Array.from(new Set(mandiRates.map((r) => r.category))).filter(Boolean);
  }, [mandiRates]);

  const filteredRates = useMemo(() => {
    return mandiRates.filter((r) => {
      const matchesSearch =
        r.commodity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.market.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesState = selectedState === 'all' || r.state === selectedState;
      const matchesCategory = selectedCategory === 'all' || r.category === selectedCategory;
      return matchesSearch && matchesState && matchesCategory;
    });
  }, [mandiRates, searchTerm, selectedState, selectedCategory]);

  const handleEditClick = (rate) => {
    setEditingRate(rate);
    setRateForm({
      commodity: rate.commodity,
      market: rate.market,
      state: rate.state,
      category: rate.category,
      modal_price: rate.modal_price,
      price_change: rate.price_change || 0,
      price_trend: rate.price_trend || 'steady',
      unit: rate.unit || 'Quintal',
      image: rate.image || ''
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!rateForm.commodity || !rateForm.market || !rateForm.modal_price) return;

    if (editingRate) {
      updateMandiRate(editingRate.id, {
        ...rateForm,
        modal_price: Number(rateForm.modal_price),
        price_change: Number(rateForm.price_change)
      });
      setEditingRate(null);
    } else {
      addMandiRate({
        ...rateForm,
        modal_price: Number(rateForm.modal_price),
        price_change: Number(rateForm.price_change)
      });
      setShowAddModal(false);
    }

    setRateForm({
      commodity: '',
      market: '',
      state: 'Maharashtra',
      category: 'Vegetables',
      modal_price: '',
      price_change: 0,
      price_trend: 'steady',
      unit: 'Quintal',
      image: ''
    });
  };

  return (
    <div>
      <div className="adm-page-header">
        <div className="adm-page-title-group">
          <h1>APMC Mandi Rates Manager</h1>
          <p>Maintain daily morning auction modal rates and price trend indicators across Indian mandis</p>
        </div>
        <div className="adm-page-actions">
          <button
            type="button"
            className="adm-btn adm-btn--primary"
            onClick={() => {
              setEditingRate(null);
              setRateForm({
                commodity: '',
                market: '',
                state: 'Maharashtra',
                category: 'Vegetables',
                modal_price: '',
                price_change: 0,
                price_trend: 'steady',
                unit: 'Quintal',
                image: ''
              });
              setShowAddModal(true);
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Add Mandi Rate</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="adm-card" style={{ padding: '1rem' }}>
        <div className="adm-filters-bar" style={{ margin: 0 }}>
          <div className="adm-filter-group" style={{ flex: 1 }}>
            <input
              type="text"
              className="adm-input"
              style={{ maxWidth: '300px' }}
              placeholder="Search commodity or APMC market..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="adm-select"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
            >
              <option value="all">All States ({states.length})</option>
              {states.map((st) => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>
            <select
              className="adm-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          {(searchTerm || selectedState !== 'all' || selectedCategory !== 'all') && (
            <button
              type="button"
              className="adm-btn adm-btn--secondary adm-btn--sm"
              onClick={() => {
                setSearchTerm('');
                setSelectedState('all');
                setSelectedCategory('all');
              }}
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Mandi Rates Table */}
      <div className="adm-card">
        <div className="adm-card-header">
          <h3 className="adm-card-title">Live APMC Market Rates ({filteredRates.length})</h3>
        </div>

        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Commodity</th>
                <th>APMC Market</th>
                <th>State</th>
                <th>Category</th>
                <th>Modal Price</th>
                <th>Daily Trend</th>
                <th>Arrival</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRates.map((rate) => (
                <tr key={rate.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <img
                        src={rate.image}
                        alt={rate.commodity}
                        style={{ width: '38px', height: '38px', borderRadius: '6px', objectFit: 'contain', background: '#f8faf8', padding: '2px', border: '1px solid #e2ece2' }}
                      />
                      <strong style={{ color: '#0f2e16' }}>{rate.commodity}</strong>
                    </div>
                  </td>
                  <td>{rate.market}</td>
                  <td>
                    <span className="adm-badge adm-badge--buy">{rate.state}</span>
                  </td>
                  <td>{rate.category}</td>
                  <td>
                    <strong style={{ color: '#166534', fontSize: '14px' }}>
                      ₹{rate.modal_price.toLocaleString()}
                    </strong>{' '}
                    <span style={{ fontSize: '11px', color: '#64748b' }}>/ {rate.unit}</span>
                  </td>
                  <td>
                    <span className={rate.price_trend === 'up' ? 'adm-ticker-change--up' : rate.price_trend === 'down' ? 'adm-ticker-change--down' : ''} style={{ fontWeight: '700' }}>
                      {rate.price_trend === 'up' && '▲ '}
                      {rate.price_trend === 'down' && '▼ '}
                      {rate.price_change > 0 ? `+₹${rate.price_change}` : rate.price_change < 0 ? `₹${rate.price_change}` : 'Steady'}
                    </span>
                  </td>
                  <td>
                    <span className="adm-badge adm-badge--approved">{rate.arrival_date || 'Today'}</span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <button
                        type="button"
                        className="adm-btn adm-btn--secondary adm-btn--sm"
                        onClick={() => handleEditClick(rate)}
                      >
                        Update
                      </button>
                      <button
                        type="button"
                        className="adm-btn adm-btn--danger adm-btn--sm"
                        onClick={() => {
                          if (window.confirm(`Remove ${rate.commodity} at ${rate.market}?`)) {
                            deleteMandiRate(rate.id);
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

      {/* Edit / Add Modal */}
      <AdminModal
        isOpen={showAddModal || Boolean(editingRate)}
        onClose={() => {
          setShowAddModal(false);
          setEditingRate(null);
        }}
        title={editingRate ? `Update Rate: ${editingRate.commodity} (${editingRate.market})` : 'New Mandi Rate Entry'}
        footer={
          <>
            <button
              type="button"
              className="adm-btn adm-btn--secondary"
              onClick={() => {
                setShowAddModal(false);
                setEditingRate(null);
              }}
            >
              Cancel
            </button>
            <button type="button" className="adm-btn adm-btn--primary" onClick={handleFormSubmit}>
              {editingRate ? 'Save Rate Changes' : 'Add Rate'}
            </button>
          </>
        }
      >
        <form onSubmit={handleFormSubmit} className="adm-form-grid">
          <div className="adm-form-group">
            <label className="adm-label">Commodity *</label>
            <input
              type="text"
              className="adm-input"
              required
              placeholder="e.g. Potato / Batata"
              value={rateForm.commodity}
              onChange={(e) => setRateForm({ ...rateForm, commodity: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">APMC Market Name *</label>
            <input
              type="text"
              className="adm-input"
              required
              placeholder="e.g. Agra APMC"
              value={rateForm.market}
              onChange={(e) => setRateForm({ ...rateForm, market: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">State</label>
            <select
              className="adm-select"
              value={rateForm.state}
              onChange={(e) => setRateForm({ ...rateForm, state: e.target.value })}
            >
              <option value="Maharashtra">Maharashtra</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Bihar">Bihar</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
            </select>
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Category</label>
            <select
              className="adm-select"
              value={rateForm.category}
              onChange={(e) => setRateForm({ ...rateForm, category: e.target.value })}
            >
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Grains">Grains</option>
              <option value="Oil Seeds">Oil Seeds</option>
              <option value="Pulses">Pulses</option>
            </select>
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Modal Price (₹) *</label>
            <input
              type="number"
              className="adm-input"
              required
              value={rateForm.modal_price}
              onChange={(e) => setRateForm({ ...rateForm, modal_price: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Price Change (₹)</label>
            <input
              type="number"
              className="adm-input"
              placeholder="+50 or -30"
              value={rateForm.price_change}
              onChange={(e) => setRateForm({ ...rateForm, price_change: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Price Trend</label>
            <select
              className="adm-select"
              value={rateForm.price_trend}
              onChange={(e) => setRateForm({ ...rateForm, price_trend: e.target.value })}
            >
              <option value="up">Up (Bullish)</option>
              <option value="down">Down (Bearish)</option>
              <option value="steady">Steady</option>
            </select>
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Unit</label>
            <select
              className="adm-select"
              value={rateForm.unit}
              onChange={(e) => setRateForm({ ...rateForm, unit: e.target.value })}
            >
              <option value="Quintal">Quintal</option>
              <option value="Ton">Ton</option>
              <option value="Kg">Kg</option>
            </select>
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default MandiRates;
