import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Login = () => {

   useEffect(() => {

      (function () {

        function initLogin() {
          var form = document.getElementById("loginPhoneForm");
          if (!form) {
            return;
          }

          var terms = document.getElementById("acceptTerms");
          var nextBtn = document.getElementById("loginNextBtn");
          var phoneStep = document.getElementById("loginPhoneStep");
          var otpStep = document.getElementById("loginOtpStep");
          var phoneInput = document.getElementById("mobileNumber");
          var stepPhone = document.getElementById("stepPhone");
          var stepOtp = document.getElementById("stepOtp");

          function syncNext() {
            if (nextBtn && terms && phoneInput) {
              nextBtn.disabled = !(terms.checked && phoneInput.value.replace(/\D/g, "").length >= 10);
            }
          }

          if (terms) {
            terms.addEventListener("change", syncNext);
          }
          if (phoneInput) {
            phoneInput.addEventListener("input", syncNext);
          }
          syncNext();

          form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (nextBtn && nextBtn.disabled) {
              return;
            }
            if (phoneStep) {
              phoneStep.hidden = true;
            }
            if (otpStep) {
              otpStep.hidden = false;
            }
            if (stepPhone) {
              stepPhone.classList.add("is-done");
              stepPhone.classList.remove("is-current");
            }
            if (stepOtp) {
              stepOtp.classList.add("is-current");
            }
          });

          var otpForm = document.getElementById("loginOtpForm");
          if (otpForm) {
            var otpInputs = otpForm.querySelectorAll(".tkb-otp-inputs input");
            otpInputs.forEach(function (input, index) {
              input.addEventListener("input", function () {
                input.value = input.value.replace(/\D/g, "").slice(0, 1);
                if (input.value && otpInputs[index + 1]) {
                  otpInputs[index + 1].focus();
                }
              });
              input.addEventListener("keydown", function (event) {
                if (event.key === "Backspace" && !input.value && otpInputs[index - 1]) {
                  otpInputs[index - 1].focus();
                }
              });
            });

            otpForm.addEventListener("submit", function (event) {
              event.preventDefault();
              window.location.href = "profile.html";
            });
          }
        }
        initLogin();
      })();
   }, []) 

  return (
    <div>
        <header className="tkb-login-top">
            <Link to="/" className="tkb-login-logo">
            <img src={logo} alt="True Kisan Bazar" />
            </Link>

            <nav className="tkb-login-steps" aria-label="Onboarding progress">
            <span className="tkb-login-step is-current is-done" id="stepPhone">
                <span className="tkb-login-step-index" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                Enter Phone number
            </span>
            <span className="tkb-login-dash">—</span>
            <span className="tkb-login-step" id="stepOtp">
                <span className="tkb-login-step-index" aria-hidden="true"></span>
                OTP verification
            </span>
            <span className="tkb-login-dash">—</span>
            <span className="tkb-login-step" id="stepDash">
                <span className="tkb-login-step-index" aria-hidden="true"></span>
                Onboarding Dashboard
            </span>
            </nav>

            <div className="tkb-login-tools">
            <button type="button" className="tkb-lang-btn">English ▾</button>
            <button type="button" className="tkb-help-btn" aria-label="Help">?</button>
            </div>
        </header>
        <main className="tkb-login-card-wrap">
            <div className="tkb-login-card">
            <div className="tkb-login-mark">
                <img src={logo} alt="" />
            </div>
            <h1 className="tkb-login-brand">Fasal Setu</h1>

            <div id="loginPhoneStep">
                <h2 className="tkb-login-heading">Enter Phone number for verification</h2>
                <form id="loginPhoneForm" action="#" method="post">
                <div className="tkb-login-field">
                    <label for="countrySelect">Select Country</label>
                    <select id="countrySelect" className="tkb-login-select" name="country">
                    <option value="IN" selected>🇮🇳 India</option>
                    <option value="US">🇺🇸 United States</option>
                    <option value="UAE">u🇦🇪 United Arab Emirates</option>
                    </select>
                </div>
                <div className="tkb-login-field">
                    <label for="businessSelect">Business Type</label>
                    <select id="businessSelect" className="tkb-login-select" name="business">
                    <option value="seller" selected>Seller</option>
                    <option value="buyer">Buyer</option>
                    </select>
                </div>
                <div className="tkb-login-phone-row">
                    <span aria-hidden="true">🇮🇳</span>
                    <span className="tkb-login-dial">+91</span>
                    <input type="tel" id="mobileNumber" name="mobile" inputmode="numeric" autocomplete="tel" placeholder="Enter Your Mobile number" maxlength="10" required />
                </div>

                <p className="tkb-login-safe">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    Don’t Worry ! Your Details are safe with us.
                </p>

                <label className="tkb-login-terms">
                    <input type="checkbox" id="acceptTerms" name="accept_terms" />
                    <span>I accept all the <Link to="#">Terms</Link> and <Link to="#">Privacy Policy</Link></span>
                </label>

                <button type="submit" className="tkb-login-next" id="loginNextBtn" disabled>Next</button>
                </form>
            </div>

            <div id="loginOtpStep" hidden>
                <h2 className="tkb-login-heading">OTP verification</h2>
                <p className="tkb-login-safe">Enter the 4-digit code sent to your mobile number.</p>
                <form id="loginOtpForm" action="#" method="post">
                <div className="tkb-otp-inputs">
                    <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 1" required />
                    <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 2" required />
                    <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 3" required />
                    <input type="text" inputmode="numeric" maxlength="1" aria-label="Digit 4" required />
                </div>
                <button type="submit" className="tkb-login-next">Verify &amp; Continue</button>
                </form>
            </div>
            </div>
        </main>
    </div>
  )
}

export default Login;
