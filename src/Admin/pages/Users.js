import React, { useState, useMemo } from 'react';
import { useAdmin } from '../context/AdminContext';
import StatCard from '../components/StatCard';

const Users = () => {
  const { users, toggleUserVerified, toggleUserStatus } = useAdmin();

  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const farmerCount = users.filter((u) => u.role === 'Farmer').length;
  const buyerCount = users.filter((u) => u.role === 'Buyer').length;
  const manufacturerCount = users.filter((u) => u.role === 'Manufacturer').length;
  const verifiedCount = users.filter((u) => u.verified).length;

  const filteredUsers = useMemo(() => {
    return users.filter((u) => {
      const matchesSearch =
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.phone.includes(searchTerm) ||
        (u.category && u.category.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesRole = roleFilter === 'all' || u.role.toLowerCase() === roleFilter.toLowerCase();
      const matchesStatus =
        statusFilter === 'all' ||
        (statusFilter === 'verified' && u.verified) ||
        (statusFilter === 'unverified' && !u.verified) ||
        (statusFilter === 'suspended' && u.status === 'Suspended');
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, searchTerm, roleFilter, statusFilter]);

  return (
    <div>
      <div className="adm-page-header">
        <div className="adm-page-title-group">
          <h1>Farmers &amp; Buyers Directory</h1>
          <p>Manage verified farmer identities, wholesale trader accounts, and enterprise processors</p>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="adm-stats-grid mb-4">
        <StatCard
          title="Registered Farmers"
          value={farmerCount}
          desc="Individual growers & FPOs"
          colorTheme="green"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z" />
              <path d="M12 6v6l4 2" />
            </svg>
          }
        />
        <StatCard
          title="Wholesale Buyers"
          value={buyerCount}
          desc="APMC commission agents & traders"
          colorTheme="blue"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          }
        />
        <StatCard
          title="Food Processors"
          value={manufacturerCount}
          desc="Flour mills, dairy & packaging units"
          colorTheme="purple"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          }
        />
        <StatCard
          title="Verified Accounts"
          value={`${verifiedCount} / ${users.length}`}
          desc="Phone & APMC license verified"
          colorTheme="amber"
          icon={
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          }
        />
      </div>

      {/* Filter bar */}
      <div className="adm-card" style={{ padding: '1rem' }}>
        <div className="adm-filters-bar" style={{ margin: 0 }}>
          <div className="adm-filter-group" style={{ flex: 1 }}>
            <input
              type="text"
              className="adm-input"
              style={{ maxWidth: '320px' }}
              placeholder="Search by name, phone, district, crops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="adm-select"
              value={roleFilter}
              onChange={(e) => setRoleFilter(e.target.value)}
            >
              <option value="all">All Roles</option>
              <option value="farmer">Farmers</option>
              <option value="buyer">Buyers</option>
              <option value="manufacturer">Manufacturers</option>
            </select>
            <select
              className="adm-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Statuses</option>
              <option value="verified">Verified Only</option>
              <option value="unverified">Unverified Only</option>
              <option value="suspended">Suspended Only</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="adm-card">
        <div className="adm-card-header">
          <h3 className="adm-card-title">Directory Members ({filteredUsers.length})</h3>
        </div>

        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Member Name</th>
                <th>Role</th>
                <th>Specialization / Crops</th>
                <th>Location</th>
                <th>Phone Number</th>
                <th>Verification</th>
                <th>Status</th>
                <th>Quick Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((u) => (
                <tr key={u.id}>
                  <td>
                    <div style={{ fontWeight: '600', color: '#0f2e16' }}>{u.name}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Member since {u.joined}</div>
                  </td>
                  <td>
                    <span
                      className={`adm-badge ${
                        u.role === 'Farmer'
                          ? 'adm-badge--sell'
                          : u.role === 'Buyer'
                          ? 'adm-badge--buy'
                          : 'adm-badge--in_progress'
                      }`}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td>{u.category}</td>
                  <td>{u.location}</td>
                  <td>+91 {u.phone}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => toggleUserVerified(u.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                      title="Click to toggle verified badge"
                    >
                      <span className={`adm-badge ${u.verified ? 'adm-badge--approved' : 'adm-badge--pending'}`}>
                        {u.verified ? '✓ Verified' : 'Unverified'}
                      </span>
                    </button>
                  </td>
                  <td>
                    <span className={`adm-badge ${u.status === 'Active' ? 'adm-badge--active' : 'adm-badge--rejected'}`}>
                      {u.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <button
                        type="button"
                        className={`adm-btn adm-btn--sm ${u.status === 'Active' ? 'adm-btn--danger' : 'adm-btn--primary'}`}
                        onClick={() => toggleUserStatus(u.id)}
                      >
                        {u.status === 'Active' ? 'Suspend' : 'Activate'}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
