import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';

const Settings = () => {
  const { showToast } = useAdmin();

  const [settings, setSettings] = useState({
    platformName: 'Fasal Junction',
    supportEmail: 'contact@fasaljunction.com',
    supportPhone: '1800-123-456',
    mandiSyncFrequency: 'daily_7am',
    autoApproveVerified: true,
    smsAlerts: true,
    whatsappAlerts: true,
    maintenanceMode: false
  });

  const [adminProfile, setAdminProfile] = useState({
    name: 'Priya Deshmukh',
    email: 'admin@fasaljunction.com',
    role: 'Chief Administrator'
  });

  const handleSavePlatform = (e) => {
    e.preventDefault();
    localStorage.setItem('fj_admin_platform_settings', JSON.stringify(settings));
    showToast('Platform settings saved successfully!', 'success');
  };

  const handleSaveProfile = (e) => {
    e.preventDefault();
    localStorage.setItem('fj_admin_profile', JSON.stringify(adminProfile));
    showToast('Admin profile updated!', 'success');
  };

  return (
    <div>
      <div className="adm-page-header">
        <div className="adm-page-title-group">
          <h1>Platform Settings &amp; Administration</h1>
          <p>Configure mandi data synchronization, listing approval policies, alerts, and admin account</p>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-lg-7">
          <div className="adm-card">
            <div className="adm-card-header">
              <div>
                <h3 className="adm-card-title">General Marketplace Configuration</h3>
                <p className="adm-card-subtitle">Global settings for mandi auctions and trade verification</p>
              </div>
            </div>

            <form onSubmit={handleSavePlatform} className="adm-form-grid">
              <div className="adm-form-group">
                <label className="adm-label">Platform Brand Name</label>
                <input
                  type="text"
                  className="adm-input"
                  value={settings.platformName}
                  onChange={(e) => setSettings({ ...settings, platformName: e.target.value })}
                />
              </div>

              <div className="adm-form-group">
                <label className="adm-label">Official Support Helpline</label>
                <input
                  type="text"
                  className="adm-input"
                  value={settings.supportPhone}
                  onChange={(e) => setSettings({ ...settings, supportPhone: e.target.value })}
                />
              </div>

              <div className="adm-form-group col-span-2">
                <label className="adm-label">Support Email Address</label>
                <input
                  type="email"
                  className="adm-input"
                  value={settings.supportEmail}
                  onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                />
              </div>

              <div className="adm-form-group col-span-2">
                <label className="adm-label">APMC Mandi Rates Sync Schedule</label>
                <select
                  className="adm-select"
                  value={settings.mandiSyncFrequency}
                  onChange={(e) => setSettings({ ...settings, mandiSyncFrequency: e.target.value })}
                >
                  <option value="daily_7am">Daily Morning (07:00 AM IST) - Recommended</option>
                  <option value="twice_daily">Twice Daily (Morning 7 AM &amp; Evening 4 PM)</option>
                  <option value="hourly">Hourly Live APMC Polling</option>
                </select>
              </div>

              <div className="adm-form-group col-span-2" style={{ marginTop: '0.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer', fontSize: '13px' }}>
                    <input
                      type="checkbox"
                      checked={settings.autoApproveVerified}
                      onChange={(e) => setSettings({ ...settings, autoApproveVerified: e.target.checked })}
                    />
                    <span><strong>Auto-approve listings from Verified Farmers</strong> (Skips manual review for trusted badges)</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer', fontSize: '13px' }}>
                    <input
                      type="checkbox"
                      checked={settings.smsAlerts}
                      onChange={(e) => setSettings({ ...settings, smsAlerts: e.target.checked })}
                    />
                    <span><strong>Send SMS alerts to farmers</strong> upon buyer enquiry match</span>
                  </label>

                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', cursor: 'pointer', fontSize: '13px' }}>
                    <input
                      type="checkbox"
                      checked={settings.whatsappAlerts}
                      onChange={(e) => setSettings({ ...settings, whatsappAlerts: e.target.checked })}
                    />
                    <span><strong>Enable WhatsApp Notifications</strong> for Mandi rate updates</span>
                  </label>
                </div>
              </div>

              <div className="adm-form-group col-span-2" style={{ marginTop: '1rem' }}>
                <button type="submit" className="adm-btn adm-btn--primary">
                  Save Platform Settings
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Admin Profile Box */}
        <div className="col-lg-5">
          <div className="adm-card">
            <div className="adm-card-header">
              <h3 className="adm-card-title">Admin Account Profile</h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop"
                alt="Profile Avatar"
                style={{ width: '64px', height: '64px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #bbf7d0' }}
              />
              <div>
                <h4 style={{ margin: 0, fontSize: '15px', color: '#0f2e16' }}>{adminProfile.name}</h4>
                <div style={{ fontSize: '12px', color: '#16a34a', fontWeight: '600' }}>{adminProfile.role}</div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Session active • IP: 103.21.244.12</div>
              </div>
            </div>

            <form onSubmit={handleSaveProfile} className="adm-form-grid" style={{ gridTemplateColumns: '1fr' }}>
              <div className="adm-form-group">
                <label className="adm-label">Full Name</label>
                <input
                  type="text"
                  className="adm-input"
                  value={adminProfile.name}
                  onChange={(e) => setAdminProfile({ ...adminProfile, name: e.target.value })}
                />
              </div>

              <div className="adm-form-group">
                <label className="adm-label">Admin Email</label>
                <input
                  type="email"
                  className="adm-input"
                  value={adminProfile.email}
                  onChange={(e) => setAdminProfile({ ...adminProfile, email: e.target.value })}
                />
              </div>

              <div className="adm-form-group">
                <label className="adm-label">Role Designation</label>
                <input
                  type="text"
                  className="adm-input"
                  value={adminProfile.role}
                  readOnly
                  style={{ background: '#f8faf8' }}
                />
              </div>

              <div style={{ marginTop: '0.75rem' }}>
                <button type="submit" className="adm-btn adm-btn--secondary" style={{ width: '100%' }}>
                  Update Profile Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
