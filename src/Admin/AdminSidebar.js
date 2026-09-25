import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { useAdmin } from './context/AdminContext';

const AdminSidebar = ({ isOpen, onClose }) => {
  const { enquiries, users, tickets } = useAdmin();

  const pendingEnquiriesCount = enquiries.filter((e) => e.status === 'pending').length;
  const openTicketsCount = tickets.filter((t) => t.status === 'open').length;

  const navLinks = [
    {
      to: '/admin/dashboard',
      label: 'Overview',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="adm-nav-icon">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      )
    },
    {
      to: '/admin/enquiries',
      label: 'Enquiries',
      badge: pendingEnquiriesCount > 0 ? pendingEnquiriesCount : null,
      badgeAlert: true,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="adm-nav-icon">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      to: '/admin/products',
      label: 'Crop Catalog',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="adm-nav-icon">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      to: '/admin/mandi-rates',
      label: 'Mandi Rates',
      badge: 'LIVE',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="adm-nav-icon">
          <line x1="12" y1="1" x2="12" y2="23" />
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      )
    },
    {
      to: '/admin/users',
      label: 'Farmers & Buyers',
      badge: users.length,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="adm-nav-icon">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      to: '/admin/blogs',
      label: 'Kisan Stories',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="adm-nav-icon">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      )
    },
    {
      to: '/admin/support',
      label: 'Support Tickets',
      badge: openTicketsCount > 0 ? openTicketsCount : null,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="adm-nav-icon">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      )
    },
    {
      to: '/admin/settings',
      label: 'Platform Settings',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="adm-nav-icon">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      )
    }
  ];

  return (
    <>
      {isOpen && <div className="adm-sidebar-overlay" onClick={onClose} aria-hidden="true" />}
      <aside className={`adm-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="adm-sidebar-brand">
          <Link to="/admin/dashboard" className="adm-brand-link" onClick={onClose}>
            <img src={logo} alt="Fasal Junction" className="adm-brand-logo" />
            <span className="adm-brand-badge">Admin v1.2</span>
          </Link>
          <button
            type="button"
            className="adm-modal-close d-lg-none text-white"
            onClick={onClose}
            aria-label="Close sidebar"
            style={{ color: '#fff', fontSize: '1.5rem' }}
          >
            &times;
          </button>
        </div>

        <nav className="adm-sidebar-nav">
          <p className="adm-nav-section-title">Operations &amp; Commerce</p>
          {navLinks.slice(0, 5).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `adm-nav-item ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <div className="adm-nav-item-left">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className={`adm-nav-pill ${item.badgeAlert ? 'adm-nav-pill--alert' : ''}`}>
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}

          <p className="adm-nav-section-title" style={{ marginTop: '0.85rem' }}>Content &amp; Administration</p>
          {navLinks.slice(5).map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `adm-nav-item ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              <div className="adm-nav-item-left">
                {item.icon}
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span className="adm-nav-pill adm-nav-pill--alert">{item.badge}</span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="adm-sidebar-footer">
          <Link to="/" className="adm-sidebar-storefront-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            <span>View Marketplace</span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
