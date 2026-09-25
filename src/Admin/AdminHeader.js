import React, { useState, useRef, useEffect } from 'react';
import { useAdmin } from './context/AdminContext';
import { Link, useNavigate } from 'react-router-dom';
import AdminModal from './components/AdminModal';

const AdminHeader = ({ onToggleSidebar }) => {
  const { notifications, markNotificationsRead, showToast } = useAdmin();
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  const unreadCount = notifications.filter((n) => n.unread).length;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleConfirmLogout = () => {
    setShowLogoutConfirm(false);
    setShowProfileDropdown(false);
    localStorage.removeItem('adminAuth');
    showToast('You have been logged out of the Admin Portal.', 'info');
    navigate('/admin-login');
  };

  return (
    <header className="adm-header">
      <div className="adm-header-left">
        <button
          type="button"
          className="adm-hamburger"
          onClick={onToggleSidebar}
          aria-label="Toggle navigation drawer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>

        <div className="adm-header-search">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="adm-search-icon"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className="adm-search-input"
            placeholder="Search crops, mandis, enquiries, farmers..."
          />
        </div>
      </div>

      <div className="adm-header-right">
        {/* Quick link to Post Enquiry */}
        <Link to="/admin/enquiries" className="adm-quick-btn d-none d-sm-inline-flex">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>Review Enquiries</span>
        </Link>

        {/* Notifications Dropdown */}
        <div style={{ position: 'relative' }} ref={notifRef}>
          <button
            type="button"
            className="adm-icon-btn"
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Notifications"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            {unreadCount > 0 && <span className="adm-unread-dot" />}
          </button>

          {showNotifications && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 'calc(100% + 8px)',
                width: '320px',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                border: '1px solid #e2ece2',
                zIndex: 1050,
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  padding: '12px 16px',
                  background: '#f8faf8',
                  borderBottom: '1px solid #e2ece2',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <strong style={{ fontSize: '13px', color: '#0f2e16' }}>Notifications ({unreadCount})</strong>
                {unreadCount > 0 && (
                  <button
                    onClick={markNotificationsRead}
                    style={{
                      background: 'none',
                      border: 'none',
                      fontSize: '11px',
                      color: '#16a34a',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Mark read
                  </button>
                )}
              </div>
              <div style={{ maxHeight: '280px', overflowY: 'auto' }}>
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      padding: '10px 14px',
                      borderBottom: '1px solid #f1f5f1',
                      background: item.unread ? '#f0fdf4' : '#fff',
                      fontSize: '12px'
                    }}
                  >
                    <div style={{ fontWeight: '600', color: '#1e293b' }}>{item.title}</div>
                    <div style={{ color: '#64748b', marginTop: '2px' }}>{item.desc}</div>
                    <div style={{ color: '#94a3b8', fontSize: '10px', marginTop: '4px' }}>{item.time}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Direct Quick Logout Button */}
        {/* <button
          type="button"
          className="adm-icon-btn"
          onClick={() => setShowLogoutConfirm(true)}
          title="Sign out of Admin Portal"
          aria-label="Log Out"
          style={{ color: '#ef4444' }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
        </button> */}

        {/* Admin Profile Dropdown Trigger */}
        <div style={{ position: 'relative' }} ref={profileRef}>
          <div
            className="adm-admin-profile"
            onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            role="button"
            tabIndex={0}
            aria-expanded={showProfileDropdown}
            aria-haspopup="true"
          >
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop"
              alt="Admin Officer"
              className="adm-avatar"
            />
            <div className="adm-profile-text">
              <span className="adm-profile-name">Priya Deshmukh</span>
              <span className="adm-profile-role">Chief Administrator</span>
            </div>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              style={{
                marginLeft: '4px',
                color: '#64748b',
                transform: showProfileDropdown ? 'rotate(180deg)' : 'none',
                transition: 'transform 0.2s ease'
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>

          {/* Profile Dropdown Menu */}
          {showProfileDropdown && (
            <div className="adm-profile-dropdown">
              <div className="adm-profile-dropdown-header">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop"
                  alt="Admin"
                  style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #bbf7d0' }}
                />
                <div style={{ lineHeight: 1.3 }}>
                  <div style={{ fontWeight: '700', fontSize: '13px', color: '#0f2e16' }}>Priya Deshmukh</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>admin@fasaljunction.com</div>
                  <span
                    style={{
                      display: 'inline-block',
                      marginTop: '4px',
                      fontSize: '10px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      color: '#15803d',
                      background: '#dcfce7',
                      padding: '1px 6px',
                      borderRadius: '4px'
                    }}
                  >
                    Super Admin
                  </span>
                </div>
              </div>

              <div className="adm-profile-dropdown-menu">
                <Link
                  to="/admin/settings"
                  className="adm-dropdown-item"
                  onClick={() => setShowProfileDropdown(false)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                  <span>Profile &amp; Settings</span>
                </Link>

                <Link
                  to="/admin/enquiries"
                  className="adm-dropdown-item"
                  onClick={() => setShowProfileDropdown(false)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span>Pending Enquiries</span>
                </Link>

                <Link
                  to="/"
                  className="adm-dropdown-item"
                  onClick={() => setShowProfileDropdown(false)}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  <span>View Public Marketplace</span>
                </Link>

                <div className="adm-dropdown-divider" />

                <button
                  type="button"
                  className="adm-dropdown-item adm-dropdown-item--danger"
                  onClick={() => {
                    setShowProfileDropdown(false);
                    setShowLogoutConfirm(true);
                  }}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Logout Confirmation Popup Modal ── */}
      <AdminModal
        isOpen={showLogoutConfirm}
        onClose={() => setShowLogoutConfirm(false)}
        title="Admin Sign Out"
      >
        <div className="adm-logout-dialog">
          <div className="adm-logout-icon-wrap">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
          </div>
          <h4 className="adm-logout-title">Are you sure you want to log out?</h4>
          <p className="adm-logout-desc">
            You will be signed out of the <strong>Fasal Junction Admin Portal</strong>. Any unsaved edits will be preserved in your local session, and you can log back in at any time.
          </p>
          <div className="adm-logout-actions">
            <button
              type="button"
              className="adm-btn adm-btn--secondary"
              onClick={() => setShowLogoutConfirm(false)}
              style={{ minWidth: '110px' }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="adm-btn adm-btn--danger"
              onClick={handleConfirmLogout}
              style={{ minWidth: '130px', background: '#dc2626', color: '#fff', border: 'none' }}
            >
              Yes, Log Out
            </button>
          </div>
        </div>
      </AdminModal>
    </header>
  );
};

export default AdminHeader;
