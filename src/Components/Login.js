import React, { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/images/fasal-junction-horizontal.png';
import logo_512 from '../assets/images/logo512.png';
import loginArt from '../assets/images/img-login.jpg';

const Login = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState('phone');
  const [country, setCountry] = useState('IN');
  const [business, setBusiness] = useState('farmer');
  const [phone, setPhone] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);

  const digits = phone.replace(/\D/g, '').slice(0, 10);
  const canContinue = accepted && digits.length === 10;
  const otpComplete = otp.every((value) => value.length === 1);

  const dialCode = useMemo(() => {
    if (country === 'US') return '+1';
    if (country === 'UAE') return '+971';
    return '+91';
  }, [country]);

  const flag = useMemo(() => {
    if (country === 'US') return '🇺🇸';
    if (country === 'UAE') return '🇦🇪';
    return '🇮🇳';
  }, [country]);

  const handlePhoneSubmit = (event) => {
    event.preventDefault();
    if (!canContinue) return;
    setStep('otp');
  };

  const handleOtpChange = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    if (digit && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleOtpKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();
    if (!otpComplete) return;
    navigate('/profile');
  };

  return (
    <div className="tkb-login-page">
      <header className="tkb-login-top">
        <Link to="/" className="tkb-login-logo">
          <img src={logo} alt="Fasal Junction" />
        </Link>

        <nav className="tkb-login-steps" aria-label="Onboarding progress">
          <span className={`tkb-login-step ${step === 'phone' ? 'is-current' : 'is-done'}`}>
            <span className="tkb-login-step-index" aria-hidden="true">
              {step === 'otp' ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : '1'}
            </span>
            Enter Phone number
          </span>
          <span className="tkb-login-dash" aria-hidden="true" />
          <span className={`tkb-login-step ${step === 'otp' ? 'is-current' : ''}`}>
            <span className="tkb-login-step-index" aria-hidden="true">2</span>
            {t('login.step_otp')}
          </span>
          <span className="tkb-login-dash" aria-hidden="true" />
          <span className="tkb-login-step">
            <span className="tkb-login-step-index" aria-hidden="true">3</span>
            {t('login.step_dashboard')}
          </span>
        </nav>

        <div className="tkb-login-tools">
          <select
            className="tkb-lang-btn"
            value={i18n.language === 'hi' ? 'hi' : 'en'}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' }}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>
          <button type="button" className="tkb-help-btn" aria-label="Help">?</button>
        </div>
      </header>

      <main className="tkb-login-shell">
        <div className="tkb-login-visual">
          <img src={loginArt} alt="" />
          <div className="tkb-login-visual-copy">
            <h2>{t('login.welcome_heading')}</h2>
            <p>{t('login.welcome_desc')}</p>
          </div>
        </div>

        <div className="tkb-login-card-wrap">
          <div className="tkb-login-card">
            <div className="tkb-login-mark">
              <img src={logo_512} alt="" />
            </div>
            <h1 className="tkb-login-brand">Fasal Junction</h1>

            {step === 'phone' ? (
              <>
                <h2 className="tkb-login-heading">{t('login.step_phone')}</h2>
                <form className="tkb-login-form" onSubmit={handlePhoneSubmit}>
                  <div className="tkb-login-grid">
                    <div className="tkb-login-field">
                      <label htmlFor="countrySelect">{t('login.country')}</label>
                      <select
                        id="countrySelect"
                        className="tkb-login-select"
                        name="country"
                        value={country}
                        onChange={(event) => setCountry(event.target.value)}
                      >
                        <option value="IN">🇮🇳 India</option>
                        <option value="US">🇺🇸 United States</option>
                        <option value="UAE">🇦🇪 United Arab Emirates</option>
                      </select>
                    </div>
                    <div className="tkb-login-field">
                      <label htmlFor="businessSelect">{t('login.business_type')}</label>
                      <select
                        id="businessSelect"
                        className="tkb-login-select"
                        name="business"
                        value={business}
                        onChange={(event) => setBusiness(event.target.value)}
                      >
                        <option value="farmer">Farmer</option>
                        <option value="buyer">{t('login.buyer')}</option>
                        <option value="agent">Agent</option>
                        <option value="distributor">Distributor</option>
                        <option value="manufacturer">Manufacturer</option>
                        <option value="company">Company</option>
                        <option value="importer">Importer</option>
                        <option value="exporter">Exporter</option>
                      </select>
                    </div>
                  </div>

                  <div className="tkb-login-field">
                    <label htmlFor="mobileNumber">{t('login.mobile_number')}</label>
                    <div className="tkb-login-phone-row">
                      <span className="tkb-login-flag" aria-hidden="true">{flag}</span>
                      <span className="tkb-login-dial">{dialCode}</span>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobile"
                        inputMode="numeric"
                        autoComplete="tel"
                        placeholder={t('login.mobile_placeholder')}
                        maxLength="10"
                        value={digits}
                        onChange={(event) => setPhone(event.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <p className="tkb-login-safe">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    {t('login.safe_message')}
                  </p>

                  <label className="tkb-login-terms">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="accept_terms"
                      checked={accepted}
                      onChange={(event) => setAccepted(event.target.checked)}
                    />
                    <span>{t('login.terms_accept')} <Link to="/terms-conditions">{t('login.terms')}</Link> & <Link to="/privacy-policy">{t('login.privacy_policy')}</Link></span>
                  </label>

                  <button type="submit" className="tkb-login-next" disabled={!canContinue}>
                    {t('login.next')}
                  </button>
                </form>
              </>
            ) : (
              <>
                <h2 className="tkb-login-heading">{t('login.otp_heading')}</h2>
                <p className="tkb-login-safe">{t('login.otp_message')} {dialCode} {digits}.</p>
                <form className="tkb-login-form" onSubmit={handleOtpSubmit}>
                  <div className="tkb-otp-inputs">
                    {otp.map((value, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength="1"
                        aria-label={`Digit ${index + 1}`}
                        value={value}
                        onChange={(event) => handleOtpChange(index, event.target.value)}
                        onKeyDown={(event) => handleOtpKeyDown(index, event)}
                        required
                      />
                    ))}
                  </div>
                  <button type="submit" className="tkb-login-next" disabled={!otpComplete}>
                    {t('login.verify_continue')}
                  </button>
                  <button type="button" className="tkb-login-back" onClick={() => setStep('phone')}>
                    {t('login.change_number')}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
