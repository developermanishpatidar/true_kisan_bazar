import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import StatCard from '../components/StatCard';
import { AreaTrendChart, BarTrendChart } from '../components/TrendChart';
import AdminModal from '../components/AdminModal';

const Overview = () => {
  const {
    enquiries,
    mandiRates,
    users,
    tickets,
    recentActivities,
    updateEnquiryStatus,
    addMandiRate
  } = useAdmin();

  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [showAddMandiModal, setShowAddMandiModal] = useState(false);
  const [newMandiForm, setNewMandiForm] = useState({
    commodity: '',
    market: '',
    state: 'Maharashtra',
    category: 'Vegetables',
    modal_price: '',
    unit: 'Quintal'
  });

  // KPI calculations
  const totalEnquiries = enquiries.length;
  const pendingEnquiries = enquiries.filter((e) => e.status === 'pending').length;
  const totalMarkets = mandiRates.length;
  const verifiedUsers = users.filter((u) => u.verified).length;
  const openTickets = tickets.filter((t) => t.status === 'open').length;

  // Chart data: Monthly trade volume in Lakhs/Crores
  const tradeVolumeData = [
    { label: 'Apr', value: 42, unit: 'Lakhs' },
    { label: 'May', value: 58, unit: 'Lakhs' },
    { label: 'Jun', value: 65, unit: 'Lakhs' },
    { label: 'Jul', value: 89, unit: 'Lakhs' },
    { label: 'Aug', value: 112, unit: 'Lakhs' },
    { label: 'Sep', value: 148, unit: 'Lakhs' }
  ];

  // Commodity index bar data
  const commodityArrivalData = [
    { label: 'Wheat', value: 340 },
    { label: 'Tomato', value: 290 },
    { label: 'Banana', value: 410 },
    { label: 'Pomegranate', value: 180 },
    { label: 'Soybean', value: 250 },
    { label: 'Onion', value: 380 }
  ];

  const handleAddMandiSubmit = (e) => {
    e.preventDefault();
    if (!newMandiForm.commodity || !newMandiForm.market || !newMandiForm.modal_price) return;
    addMandiRate({
      ...newMandiForm,
      modal_price: Number(newMandiForm.modal_price)
    });
    setShowAddMandiModal(false);
    setNewMandiForm({
      commodity: '',
      market: '',
      state: 'Maharashtra',
      category: 'Vegetables',
      modal_price: '',
      unit: 'Quintal'
    });
  };

  return (
    <div>
      {/* ── Page Header ── */}
      <div className="adm-page-header">
        <div className="adm-page-title-group">
          <h1>Operations Overview</h1>
          <p>Real-time agricultural marketplace metrics, enquiries, and mandi rates</p>
        </div>
        <div className="adm-page-actions">
          <button
            type="button"
            className="adm-btn adm-btn--primary"
            onClick={() => setShowAddMandiModal(true)}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Update Mandi Rate</span>
          </button>
          <Link to="/admin/enquiries" className="adm-btn adm-btn--secondary">
            Manage All Enquiries
          </Link>
        </div>
      </div>

      {/* ── Live APMC Mandi Ticker ── */}
      <div className="adm-ticker-bar">
        <div className="adm-ticker-label">
          <span className="adm-ticker-dot" />
          <span>APMC Live Ticker</span>
        </div>
        <div className="adm-ticker-scroll">
          {mandiRates.slice(0, 10).map((rate) => (
            <div key={rate.id} className="adm-ticker-item">
              <span className="adm-ticker-commodity">{rate.commodity}</span>
              <span style={{ color: '#86efac', fontSize: '11px' }}>({rate.market.split(' ')[0]})</span>:
              <span className="adm-ticker-price">₹{rate.modal_price.toLocaleString()}/{rate.unit}</span>
              <span className={rate.price_trend === 'up' ? 'adm-ticker-change--up' : 'adm-ticker-change--down'}>
                {rate.price_change > 0 ? `+₹${rate.price_change}` : `₹${rate.price_change}`}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── KPI Stats Grid ── */}
      <div className="adm-stats-grid">
        <StatCard
          title="Active Enquiries"
          value={totalEnquiries}
          desc={`${pendingEnquiries} pending admin verification`}
          colorTheme="green"
          trend="up"
          trendValue="+14% this week"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          }
        />

        <StatCard
          title="Mandi APMCs Tracked"
          value={totalMarkets}
          desc="Across 7 Indian states & 24 yards"
          colorTheme="blue"
          trend="up"
          trendValue="Live daily sync"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="1" x2="12" y2="23" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          }
        />

        <StatCard
          title="Verified Farmers &amp; Buyers"
          value={`${verifiedUsers} / ${users.length}`}
          desc="91% verification pass rate"
          colorTheme="purple"
          trend="up"
          trendValue="+8 new today"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            </svg>
          }
        />

        <StatCard
          title="Open Support Tickets"
          value={openTickets}
          desc="Average response time: 24 mins"
          colorTheme="amber"
          trend={openTickets > 2 ? 'down' : 'up'}
          trendValue={openTickets > 2 ? 'Action required' : 'Stable'}
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          }
        />
      </div>

      {/* ── Visual Analytics Section ── */}
      <div className="row g-4 mb-4">
        <div className="col-lg-7">
          <div className="adm-card">
            <div className="adm-card-header">
              <div>
                <h3 className="adm-card-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="#16a34a">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                  Trade &amp; Deal Volume Growth (₹ Lakhs)
                </h3>
                <p className="adm-card-subtitle">Monthly aggregate value of completed crop purchases and sales</p>
              </div>
              <span className="adm-badge adm-badge--approved">+32.4% vs Q1</span>
            </div>
            <AreaTrendChart data={tradeVolumeData} height={210} />
          </div>
        </div>

        <div className="col-lg-5">
          <div className="adm-card">
            <div className="adm-card-header">
              <div>
                <h3 className="adm-card-title">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" color="#22c55e">
                    <rect x="2" y="2" width="20" height="20" rx="2" />
                    <line x1="8" y1="18" x2="8" y2="10" />
                    <line x1="12" y1="18" x2="12" y2="6" />
                    <line x1="16" y1="18" x2="16" y2="14" />
                  </svg>
                  Commodity Arrivals (Metric Tons)
                </h3>
                <p className="adm-card-subtitle">Current week lot arrival volume by top commodities</p>
              </div>
            </div>
            <BarTrendChart data={commodityArrivalData} height={210} />
          </div>
        </div>
      </div>

      {/* ── Recent Enquiries & Activity Feed ── */}
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="adm-card">
            <div className="adm-card-header">
              <div>
                <h3 className="adm-card-title">Recent Crop Enquiries (Pending Review)</h3>
                <p className="adm-card-subtitle">Quickly verify farmer photos, pricing reasonableness, and approve to live board</p>
              </div>
              <Link to="/admin/enquiries" className="adm-btn adm-btn--secondary adm-btn--sm">
                View All ({enquiries.length})
              </Link>
            </div>

            <div className="adm-table-wrap">
              <table className="adm-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Commodity / Variety</th>
                    <th>Quantity</th>
                    <th>Expected Price</th>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Quick Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {enquiries.slice(0, 5).map((enq) => (
                    <tr key={enq.id}>
                      <td>
                        <span className={`adm-badge ${enq.type === 'sell' ? 'adm-badge--sell' : 'adm-badge--buy'}`}>
                          {enq.type.toUpperCase()}
                        </span>
                      </td>
                      <td>
                        <div style={{ fontWeight: '600' }}>{enq.commodity}</div>
                        <div style={{ fontSize: '11px', color: '#64748b' }}>{enq.variety}</div>
                      </td>
                      <td>
                        <strong>{enq.quantity}</strong> {enq.unit}
                      </td>
                      <td style={{ fontWeight: '600', color: '#166534' }}>{enq.expectedPrice}</td>
                      <td>{enq.location}, {enq.state}</td>
                      <td>
                        <span className={`adm-badge adm-badge--${enq.status}`}>
                          {enq.status}
                        </span>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          <button
                            type="button"
                            className="adm-btn adm-btn--secondary adm-btn--sm"
                            onClick={() => setSelectedEnquiry(enq)}
                            title="Inspect enquiry lot details"
                          >
                            View
                          </button>
                          {enq.status === 'pending' && (
                            <>
                              <button
                                type="button"
                                className="adm-btn adm-btn--primary adm-btn--sm"
                                onClick={() => updateEnquiryStatus(enq.id, 'approved')}
                                title="Approve listing"
                              >
                                ✓
                              </button>
                              <button
                                type="button"
                                className="adm-btn adm-btn--danger adm-btn--sm"
                                onClick={() => updateEnquiryStatus(enq.id, 'rejected')}
                                title="Reject listing"
                              >
                                ✕
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ── Activity Audit Log ── */}
        <div className="col-lg-4">
          <div className="adm-card">
            <div className="adm-card-header">
              <h3 className="adm-card-title">Live Audit Feed</h3>
              <span className="adm-badge adm-badge--approved">Real-time</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {recentActivities.map((act) => (
                <div
                  key={act.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid #f1f5f1'
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#16a34a',
                      marginTop: '6px',
                      flexShrink: 0
                    }}
                  />
                  <div style={{ flex: 1, fontSize: '13px' }}>
                    <div style={{ color: '#1e293b', fontWeight: '500' }}>{act.action}</div>
                    <div style={{ color: '#94a3b8', fontSize: '11px', marginTop: '2px' }}>
                      {act.user} • {act.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #e2ece2' }}>
              <div style={{ fontSize: '12px', color: '#64748b', display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span>System Health &amp; Sync</span>
                <strong style={{ color: '#15803d' }}>100% Operational</strong>
              </div>
              <div style={{ width: '100%', height: '6px', background: '#dcfce7', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '99%', height: '100%', background: '#16a34a' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Modal: View Enquiry Details ── */}
      <AdminModal
        isOpen={Boolean(selectedEnquiry)}
        onClose={() => setSelectedEnquiry(null)}
        title={`Enquiry Details: ${selectedEnquiry?.id}`}
        footer={
          selectedEnquiry && (
            <>
              {selectedEnquiry.status === 'pending' && (
                <>
                  <button
                    type="button"
                    className="adm-btn adm-btn--danger"
                    onClick={() => {
                      updateEnquiryStatus(selectedEnquiry.id, 'rejected');
                      setSelectedEnquiry(null);
                    }}
                  >
                    Reject Enquiry
                  </button>
                  <button
                    type="button"
                    className="adm-btn adm-btn--primary"
                    onClick={() => {
                      updateEnquiryStatus(selectedEnquiry.id, 'approved');
                      setSelectedEnquiry(null);
                    }}
                  >
                    Approve &amp; Publish
                  </button>
                </>
              )}
              <button type="button" className="adm-btn adm-btn--secondary" onClick={() => setSelectedEnquiry(null)}>
                Close
              </button>
            </>
          )
        }
      >
        {selectedEnquiry && (
          <div>
            {selectedEnquiry.photo && (
              <div style={{ marginBottom: '1rem', borderRadius: '12px', overflow: 'hidden', height: '220px' }}>
                <img
                  src={selectedEnquiry.photo}
                  alt={selectedEnquiry.commodity}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}
            <div className="adm-form-grid">
              <div className="adm-form-group">
                <span className="adm-label">Type</span>
                <span className={`adm-badge ${selectedEnquiry.type === 'sell' ? 'adm-badge--sell' : 'adm-badge--buy'}`}>
                  {selectedEnquiry.type.toUpperCase()}
                </span>
              </div>
              <div className="adm-form-group">
                <span className="adm-label">Commodity &amp; Category</span>
                <strong>{selectedEnquiry.commodity} ({selectedEnquiry.category})</strong>
              </div>
              <div className="adm-form-group">
                <span className="adm-label">Variety / Grade</span>
                <div>{selectedEnquiry.variety} (Grade: {selectedEnquiry.grade || 'N/A'})</div>
              </div>
              <div className="adm-form-group">
                <span className="adm-label">Quantity &amp; Expected Price</span>
                <strong>{selectedEnquiry.quantity} {selectedEnquiry.unit} @ {selectedEnquiry.expectedPrice}</strong>
              </div>
              <div className="adm-form-group">
                <span className="adm-label">Location &amp; State</span>
                <div>{selectedEnquiry.location}, {selectedEnquiry.state}</div>
              </div>
              <div className="adm-form-group">
                <span className="adm-label">Contact Person / Phone</span>
                <div>{selectedEnquiry.contactPerson} ({selectedEnquiry.phone})</div>
              </div>
              <div className="adm-form-group col-span-2">
                <span className="adm-label">Farmer Notes / Terms</span>
                <p style={{ margin: 0, color: '#475569', fontSize: '13px', background: '#f8faf8', padding: '10px', borderRadius: '8px' }}>
                  {selectedEnquiry.notes || 'No specific notes provided.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </AdminModal>

      {/* ── Modal: Add Mandi Rate ── */}
      <AdminModal
        isOpen={showAddMandiModal}
        onClose={() => setShowAddMandiModal(false)}
        title="Add APMC Mandi Rate"
        footer={
          <>
            <button type="button" className="adm-btn adm-btn--secondary" onClick={() => setShowAddMandiModal(false)}>
              Cancel
            </button>
            <button type="button" className="adm-btn adm-btn--primary" onClick={handleAddMandiSubmit}>
              Save Mandi Rate
            </button>
          </>
        }
      >
        <form onSubmit={handleAddMandiSubmit} className="adm-form-grid">
          <div className="adm-form-group">
            <label className="adm-label">Commodity *</label>
            <input
              type="text"
              className="adm-input"
              required
              placeholder="e.g. Onion / Kanda"
              value={newMandiForm.commodity}
              onChange={(e) => setNewMandiForm({ ...newMandiForm, commodity: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">APMC Market Name *</label>
            <input
              type="text"
              className="adm-input"
              required
              placeholder="e.g. Lasalgaon APMC"
              value={newMandiForm.market}
              onChange={(e) => setNewMandiForm({ ...newMandiForm, market: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">State</label>
            <select
              className="adm-select"
              value={newMandiForm.state}
              onChange={(e) => setNewMandiForm({ ...newMandiForm, state: e.target.value })}
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
              value={newMandiForm.category}
              onChange={(e) => setNewMandiForm({ ...newMandiForm, category: e.target.value })}
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
              placeholder="e.g. 2400"
              value={newMandiForm.modal_price}
              onChange={(e) => setNewMandiForm({ ...newMandiForm, modal_price: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Unit</label>
            <select
              className="adm-select"
              value={newMandiForm.unit}
              onChange={(e) => setNewMandiForm({ ...newMandiForm, unit: e.target.value })}
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

export default Overview;
