import React, { useState, useMemo } from 'react';
import { useAdmin } from '../context/AdminContext';
import AdminModal from '../components/AdminModal';

const SupportTickets = () => {
  const { tickets, updateTicketStatus } = useAdmin();

  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [resolutionNote, setResolutionNote] = useState('');

  const filteredTickets = useMemo(() => {
    return tickets.filter((t) => {
      if (statusFilter === 'all') return true;
      return t.status === statusFilter;
    });
  }, [tickets, statusFilter]);

  const handleResolveSubmit = (newStatus) => {
    if (selectedTicket) {
      updateTicketStatus(selectedTicket.id, newStatus);
      setSelectedTicket(null);
      setResolutionNote('');
    }
  };

  return (
    <div>
      <div className="adm-page-header">
        <div className="adm-page-title-group">
          <h1>Support &amp; Grievance Inbox</h1>
          <p>Address farmer technical questions, payment settlement queries, and listing inquiries</p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="adm-card" style={{ padding: '1rem' }}>
        <div className="adm-filters-bar" style={{ margin: 0 }}>
          <div className="adm-filter-group">
            <select
              className="adm-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Inquiries ({tickets.length})</option>
              <option value="open">Open / Unresolved</option>
              <option value="in_progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>
        </div>
      </div>

      {/* Tickets Table */}
      <div className="adm-card">
        <div className="adm-card-header">
          <h3 className="adm-card-title">User Inquiries ({filteredTickets.length})</h3>
        </div>

        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Sender</th>
                <th>Subject Topic</th>
                <th>Priority</th>
                <th>Submitted On</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.map((t) => (
                <tr key={t.id}>
                  <td>
                    <strong style={{ color: '#0f2e16' }}>{t.id}</strong>
                  </td>
                  <td>
                    <div style={{ fontWeight: '600' }}>{t.name}</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>{t.email || t.phone}</div>
                  </td>
                  <td>
                    <div style={{ fontWeight: '500' }}>{t.subject}</div>
                    <div style={{ fontSize: '12px', color: '#64748b', maxWidth: '300px' }}>
                      {t.message.slice(0, 65)}...
                    </div>
                  </td>
                  <td>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        color: t.priority === 'high' ? '#dc2626' : t.priority === 'medium' ? '#d97706' : '#2563eb'
                      }}
                    >
                      {t.priority}
                    </span>
                  </td>
                  <td style={{ fontSize: '12px', color: '#64748b' }}>{t.date}</td>
                  <td>
                    <span className={`adm-badge adm-badge--${t.status}`}>
                      {t.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="adm-btn adm-btn--secondary adm-btn--sm"
                      onClick={() => {
                        setSelectedTicket(t);
                        setResolutionNote(t.notes || '');
                      }}
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ticket Details & Resolution Modal */}
      <AdminModal
        isOpen={Boolean(selectedTicket)}
        onClose={() => setSelectedTicket(null)}
        title={`Support Ticket ${selectedTicket?.id}`}
        wide={true}
        footer={
          selectedTicket && (
            <>
              {selectedTicket.status !== 'resolved' && (
                <>
                  {selectedTicket.status === 'open' && (
                    <button
                      type="button"
                      className="adm-btn adm-btn--secondary"
                      onClick={() => handleResolveSubmit('in_progress')}
                    >
                      Mark In Progress
                    </button>
                  )}
                  <button
                    type="button"
                    className="adm-btn adm-btn--primary"
                    onClick={() => handleResolveSubmit('resolved')}
                  >
                    Mark Resolved
                  </button>
                </>
              )}
              {selectedTicket.status === 'resolved' && (
                <button
                  type="button"
                  className="adm-btn adm-btn--secondary"
                  onClick={() => handleResolveSubmit('open')}
                >
                  Re-open Ticket
                </button>
              )}
              <button
                type="button"
                className="adm-btn adm-btn--secondary"
                onClick={() => setSelectedTicket(null)}
              >
                Close
              </button>
            </>
          )
        }
      >
        {selectedTicket && (
          <div>
            <div className="adm-form-grid" style={{ marginBottom: '1.25rem' }}>
              <div className="adm-form-group">
                <span className="adm-label">Sender Name</span>
                <strong>{selectedTicket.name}</strong>
              </div>
              <div className="adm-form-group">
                <span className="adm-label">Contact Email / Phone</span>
                <div>{selectedTicket.email} ({selectedTicket.phone})</div>
              </div>
              <div className="adm-form-group">
                <span className="adm-label">Topic / Subject</span>
                <strong>{selectedTicket.subject}</strong>
              </div>
              <div className="adm-form-group">
                <span className="adm-label">Ticket Status</span>
                <span className={`adm-badge adm-badge--${selectedTicket.status}`}>
                  {selectedTicket.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <span className="adm-label">User's Message:</span>
              <div
                style={{
                  background: '#f8faf8',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid #e2ece2',
                  fontSize: '13px',
                  lineHeight: '1.6',
                  marginTop: '0.35rem'
                }}
              >
                {selectedTicket.message}
              </div>
            </div>

            <div className="adm-form-group">
              <label className="adm-label">Resolution / Internal Audit Notes</label>
              <textarea
                className="adm-textarea"
                rows="3"
                placeholder="Log internal action taken, farmer callback notes, or resolution details..."
                value={resolutionNote}
                onChange={(e) => setResolutionNote(e.target.value)}
              />
            </div>
          </div>
        )}
      </AdminModal>
    </div>
  );
};

export default SupportTickets;
