import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import '../AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'superadmin',
    rememberMe: true,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Check if admin is already authenticated
  useEffect(() => {
    try {
      const existingAuth = localStorage.getItem('adminAuth');
      if (existingAuth) {
        const parsed = JSON.parse(existingAuth);
        if (parsed && parsed.token) {
          // Pre-populate email if remembered
          setFormData((prev) => ({
            ...prev,
            email: parsed.user || 'admin@fasaljunction.com',
          }));
        }
      }
    } catch (e) {
      // Ignore parse errors
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleFillDemo = () => {
    setFormData({
      email: 'admin@fasaljunction.com',
      password: 'admin123',
      role: 'superadmin',
      rememberMe: true,
    });
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const trimmedEmail = formData.email.trim();
    const trimmedPassword = formData.password.trim();

    if (!trimmedEmail) {
      setErrorMessage('Please enter your administrative email address.');
      return;
    }
    if (!trimmedPassword) {
      setErrorMessage('Please enter your administrator password.');
      return;
    }

    setIsLoading(true);

    // Simulated secure enterprise authentication
    setTimeout(() => {
      // Verification check (accepts demo credentials or valid email format)
      if (
        (trimmedEmail === 'admin@fasaljunction.com' && trimmedPassword === 'admin123') ||
        (trimmedEmail.includes('@') && trimmedPassword.length >= 6)
      ) {
        const roleLabel =
          formData.role === 'superadmin'
            ? 'Super Administrator'
            : formData.role === 'manager'
            ? 'Market Operations Manager'
            : 'Trader Verification Officer';

        const authPayload = {
          user: trimmedEmail,
          role: roleLabel,
          token: `adm_sec_${Math.random().toString(36).substring(2)}${Date.now()}`,
          loggedAt: new Date().toISOString(),
          rememberMe: formData.rememberMe,
        };

        localStorage.setItem('adminAuth', JSON.stringify(authPayload));
        setSuccessMessage('Credentials verified. Directing to Admin Portal...');

        setTimeout(() => {
          navigate('/admin/dashboard');
        }, 700);
      } else {
        setIsLoading(false);
        setErrorMessage('Invalid credentials. Tip: Use admin@fasaljunction.com / admin123 for instant demo access.');
      }
    }, 800);
  };

  return (
    <div className="adm-login-page">
      <div className="adm-login-container">
        {/* Top bar with back to home and security status */}
        <div className="adm-login-topbar">
          <Link to="/" className="adm-login-backlink" title="Return to Fasal Junction Marketplace">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Back to Marketplace</span>
          </Link>
          <div className="adm-login-sec-pill">
            <span className="adm-sec-dot" />
            <span>Secure Gateway</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="adm-login-card">
          <div className="adm-login-header">
            <div className="adm-login-logo-wrap">
              <img src={logo} alt="Fasal Junction" className="adm-login-logo-img" />
            </div>
            <h1 className="adm-login-title">
              <span>Admin Portal</span>
              <span className="adm-login-badge">Logon</span>
            </h1>
            <p className="adm-login-desc">
              Authorized personnel access to live mandi pricing, crop listings, buyer enquiries, and trader accounts.
            </p>
          </div>

          {/* Feedback Alerts */}
          {errorMessage && (
            <div className="adm-login-alert adm-login-alert--danger" role="alert">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: '1px' }}>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span>{errorMessage}</span>
            </div>
          )}

          {successMessage && (
            <div className="adm-login-alert adm-login-alert--success" role="alert">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: '1px' }}>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>{successMessage}</span>
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} noValidate>
            {/* Email Field */}
            <div className="adm-form-group">
              <label className="adm-form-label" htmlFor="adminEmail">
                Admin Work Email
              </label>
              <div className="adm-input-wrapper">
                <input
                  id="adminEmail"
                  name="email"
                  type="email"
                  className="adm-input-field"
                  placeholder="admin@fasaljunction.com"
                  autoComplete="username"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <span className="adm-input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Password Field */}
            <div className="adm-form-group">
              <label className="adm-form-label" htmlFor="adminPassword">
                Security Password
              </label>
              <div className="adm-input-wrapper">
                <input
                  id="adminPassword"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  className="adm-input-field"
                  placeholder="••••••••••••"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <span className="adm-input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <button
                  type="button"
                  className="adm-pwd-toggle"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Access Role Selection */}
            <div className="adm-form-group">
              <label className="adm-form-label" htmlFor="adminRole">
                Administrative Role
              </label>
              <div className="adm-input-wrapper">
                <select
                  id="adminRole"
                  name="role"
                  className="adm-input-field"
                  value={formData.role}
                  onChange={handleChange}
                  disabled={isLoading}
                  style={{ cursor: 'pointer' }}
                >
                  <option value="superadmin">Super Administrator (Full System Control)</option>
                  <option value="manager">Market Operations Manager (Mandi & Rates)</option>
                  <option value="moderator">Trader Verification Officer (KYC & Enquiries)</option>
                </select>
                <span className="adm-input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Remember Me & Help */}
            <div className="adm-form-row-helpers">
              <label className="adm-checkbox-label">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="adm-checkbox-input"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  disabled={isLoading}
                />
                <span>Remember this workstation</span>
              </label>
              <button
                type="button"
                className="adm-forgot-btn"
                onClick={() =>
                  alert('For password resets or credential recovery, please contact IT Security at security@fasaljunction.com')
                }
              >
                Security Help?
              </button>
            </div>

            {/* Submit Button */}
            <button type="submit" className="adm-submit-btn" disabled={isLoading}>
              {isLoading ? (
                <>
                  <span className="adm-spinner" />
                  <span>Authenticating Gateway...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Admin Portal</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Quick Demo Credential Helper Box */}
          <div className="adm-demo-box">
            <div className="adm-demo-text">
              <strong>Quick Demo Access:</strong><br />
              Email: <code>admin@fasaljunction.com</code> | Pass: <code>admin123</code>
            </div>
            <button
              type="button"
              className="adm-demo-fill-btn"
              onClick={handleFillDemo}
              disabled={isLoading}
            >
              Auto-Fill Demo
            </button>
          </div>
        </div>

        {/* Security & Audit Compliance Footer */}
        <footer className="adm-login-footer">
          <div>Fasal Junction Agri-Tech Private Limited © 2026. All rights reserved.</div>
          <div className="adm-login-footer-badges">
            <span className="adm-login-footer-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              256-Bit SSL Encrypted
            </span>
            <span className="adm-login-footer-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Audit-Logged
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLogin;
