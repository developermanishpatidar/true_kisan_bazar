import React, { useState, useMemo } from 'react';
import { useAdmin } from '../context/AdminContext';
import AdminModal from '../components/AdminModal';

const Enquiries = () => {
  const { enquiries, updateEnquiryStatus, deleteEnquiry, showToast } = useAdmin();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      const matchesSearch =
        item.commodity.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = filterType === 'all' || item.type === filterType;
      const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
      const matchesCategory = filterCategory === 'all' || item.category === filterCategory;

      return matchesSearch && matchesType && matchesStatus && matchesCategory;
    });
  }, [enquiries, searchTerm, filterType, filterStatus, filterCategory]);

  const exportCSV = () => {
    const headers = ['ID', 'Type', 'Commodity', 'Category', 'Variety', 'Grade', 'Quantity', 'Unit', 'Price', 'Location', 'State', 'Contact', 'Status', 'Date'];
    const rows = filteredEnquiries.map((e) => [
      e.id,
      e.type,
      e.commodity,
      e.category,
      `"${e.variety}"`,
      e.grade,
      e.quantity,
      e.unit,
      `"${e.expectedPrice}"`,
      `"${e.location}"`,
      `"${e.state}"`,
      `"${e.contactPerson} (${e.phone})"`,
      e.status,
      e.date
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `fasal_junction_enquiries_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Enquiries exported to CSV!', 'success');
  };

  return (
    <div>
      <div className="adm-page-header">
        <div className="adm-page-title-group">
          <h1>Enquiries Management</h1>
          <p>Review, verify, and approve farmer &amp; wholesale buyer buy/sell enquiries</p>
        </div>
        <div className="adm-page-actions">
          <button type="button" className="adm-btn adm-btn--secondary" onClick={exportCSV}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="adm-card" style={{ padding: '1rem' }}>
        <div className="adm-filters-bar" style={{ margin: 0 }}>
          <div className="adm-filter-group" style={{ flex: 1 }}>
            <div style={{ position: 'relative', minWidth: '240px', flex: 1 }}>
              <input
                type="text"
                className="adm-input"
                placeholder="Search by ID, commodity, farmer name, location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="adm-select"
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="all">All Types (Buy &amp; Sell)</option>
              <option value="sell">Sell Enquiries Only</option>
              <option value="buy">Buy Enquiries Only</option>
            </select>
            <select
              className="adm-select"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="pending">Pending Approval</option>
              <option value="approved">Approved / Live</option>
              <option value="completed">Completed / Fulfilled</option>
              <option value="rejected">Rejected</option>
            </select>
            <select
              className="adm-select"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="Grains">Grains</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Oil Seeds">Oil Seeds</option>
            </select>
          </div>
          {(searchTerm || filterType !== 'all' || filterStatus !== 'all' || filterCategory !== 'all') && (
            <button
              type="button"
              className="adm-btn adm-btn--secondary adm-btn--sm"
              onClick={() => {
                setSearchTerm('');
                setFilterType('all');
                setFilterStatus('all');
                setFilterCategory('all');
              }}
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Enquiries Table */}
      <div className="adm-card">
        <div className="adm-card-header">
          <div>
            <h3 className="adm-card-title">Enquiry Submissions ({filteredEnquiries.length})</h3>
            <p className="adm-card-subtitle">Listings submitted by farmers and traders awaiting or in deal status</p>
          </div>
        </div>

        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Type</th>
                <th>Commodity &amp; Variety</th>
                <th>Lot Quantity</th>
                <th>Expected Price</th>
                <th>Poster / Contact</th>
                <th>Location</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredEnquiries.length === 0 ? (
                <tr>
                  <td colSpan="9" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                    No enquiries match the current filters.
                  </td>
                </tr>
              ) : (
                filteredEnquiries.map((enq) => (
                  <tr key={enq.id}>
                    <td>
                      <strong style={{ color: '#0f2e16', fontSize: '12px' }}>{enq.id}</strong>
                      <div style={{ fontSize: '11px', color: '#94a3b8' }}>{enq.date}</div>
                    </td>
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
                    <td style={{ fontWeight: '600', color: '#166534' }}>
                      {enq.expectedPrice}
                    </td>
                    <td>
                      <div style={{ fontWeight: '500' }}>{enq.contactPerson}</div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>{enq.phone}</div>
                    </td>
                    <td>
                      <div>{enq.location}</div>
                      <div style={{ fontSize: '11px', color: '#64748b' }}>{enq.state}</div>
                    </td>
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
                        >
                          Details
                        </button>
                        {enq.status === 'pending' && (
                          <>
                            <button
                              type="button"
                              className="adm-btn adm-btn--primary adm-btn--sm"
                              onClick={() => updateEnquiryStatus(enq.id, 'approved')}
                              title="Approve to marketplace"
                            >
                              Approve
                            </button>
                            <button
                              type="button"
                              className="adm-btn adm-btn--danger adm-btn--sm"
                              onClick={() => updateEnquiryStatus(enq.id, 'rejected')}
                              title="Reject"
                            >
                              Reject
                            </button>
                          </>
                        )}
                        {enq.status === 'approved' && (
                          <button
                            type="button"
                            className="adm-btn adm-btn--secondary adm-btn--sm"
                            onClick={() => updateEnquiryStatus(enq.id, 'completed')}
                            title="Mark as fulfilled deal"
                          >
                            Complete
                          </button>
                        )}
                        <button
                          type="button"
                          className="adm-btn adm-btn--danger adm-btn--sm"
                          onClick={() => {
                            if (window.confirm(`Delete enquiry ${enq.id}?`)) {
                              deleteEnquiry(enq.id);
                            }
                          }}
                          title="Delete enquiry"
                        >
                          &times;
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Enquiry Details Modal */}
      <AdminModal
        isOpen={Boolean(selectedEnquiry)}
        onClose={() => setSelectedEnquiry(null)}
        title={`Enquiry Lot #${selectedEnquiry?.id}`}
        wide={true}
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
              {selectedEnquiry.status === 'approved' && (
                <button
                  type="button"
                  className="adm-btn adm-btn--primary"
                  onClick={() => {
                    updateEnquiryStatus(selectedEnquiry.id, 'completed');
                    setSelectedEnquiry(null);
                  }}
                >
                  Mark as Deal Completed
                </button>
              )}
              <button
                type="button"
                className="adm-btn adm-btn--secondary"
                onClick={() => setSelectedEnquiry(null)}
              >
                Close
              </button>
            </>
          )
        }
      >
        {selectedEnquiry && (
          <div>
            <div className="row g-3">
              {selectedEnquiry.photo && (
                <div className="col-md-5">
                  <div style={{ borderRadius: '12px', overflow: 'hidden', height: '240px', border: '1px solid #e2ece2' }}>
                    <img
                      src={selectedEnquiry.photo}
                      alt={selectedEnquiry.commodity}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ marginTop: '8px', fontSize: '11px', color: '#64748b', textAlign: 'center' }}>
                    Harvest photo submitted by farmer
                  </div>
                </div>
              )}
              <div className={selectedEnquiry.photo ? 'col-md-7' : 'col-12'}>
                <div className="adm-form-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  <div className="adm-form-group">
                    <span className="adm-label">Trade Type</span>
                    <span className={`adm-badge ${selectedEnquiry.type === 'sell' ? 'adm-badge--sell' : 'adm-badge--buy'}`}>
                      {selectedEnquiry.type === 'sell' ? 'PRODUCE FOR SALE' : 'BUYER PURCHASE REQUIREMENT'}
                    </span>
                  </div>
                  <div className="adm-form-group">
                    <span className="adm-label">Current Status</span>
                    <span className={`adm-badge adm-badge--${selectedEnquiry.status}`}>
                      {selectedEnquiry.status.toUpperCase()}
                    </span>
                  </div>
                  <div className="adm-form-group">
                    <span className="adm-label">Commodity</span>
                    <strong>{selectedEnquiry.commodity} ({selectedEnquiry.category})</strong>
                  </div>
                  <div className="adm-form-group">
                    <span className="adm-label">Variety / Grade</span>
                    <div>{selectedEnquiry.variety} (Grade: {selectedEnquiry.grade || 'Standard'})</div>
                  </div>
                  <div className="adm-form-group">
                    <span className="adm-label">Lot Size</span>
                    <strong>{selectedEnquiry.quantity} {selectedEnquiry.unit}</strong>
                  </div>
                  <div className="adm-form-group">
                    <span className="adm-label">Expected Price</span>
                    <strong style={{ color: '#166534' }}>{selectedEnquiry.expectedPrice}</strong>
                  </div>
                  <div className="adm-form-group">
                    <span className="adm-label">Harvesting Date</span>
                    <div>{selectedEnquiry.harvestDate || 'Ready for dispatch'}</div>
                  </div>
                  <div className="adm-form-group">
                    <span className="adm-label">Location</span>
                    <div>{selectedEnquiry.location}, {selectedEnquiry.state}</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid #e2ece2' }}>
              <h4 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '6px', color: '#0f2e16' }}>
                Contact &amp; Verification Details
              </h4>
              <div style={{ background: '#f8faf8', padding: '12px', borderRadius: '8px', fontSize: '13px' }}>
                <div><strong>Poster:</strong> {selectedEnquiry.contactPerson}</div>
                <div><strong>Mobile Phone:</strong> {selectedEnquiry.phone}</div>
                <div style={{ marginTop: '6px' }}><strong>Lot Notes:</strong> {selectedEnquiry.notes || 'None provided'}</div>
              </div>
            </div>
          </div>
        )}
      </AdminModal>
    </div>
  );
};

export default Enquiries;
