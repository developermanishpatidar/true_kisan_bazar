import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './NotFound.css';

const SHORTCUTS = [
  { to: '/', label: 'Home', hint: 'Back to the marketplace' },
  { to: '/product-list', label: 'Listings', hint: 'Browse crops for sale' },
  { to: '/mandi-rate', label: 'Mandi rates', hint: 'Check live prices' },
  { to: '/enquiry', label: 'Enquiry', hint: 'Post a buy or sell request' },
];

const NotFound = () => {
  const location = useLocation();
  const attemptedPath = location.pathname || '/';

  return (
    <div className="tkb-page tkb-notfound-page">
      <Header />
      <main>
        <section className="tkb-notfound" aria-labelledby="notfound-title">
          <div className="container-lg">
            <div className="tkb-notfound-card">
              <p className="tkb-notfound-kicker">Page not found</p>
              <p className="tkb-notfound-code" aria-hidden="true">404</p>
              <h1 id="notfound-title">This harvest path does not exist</h1>
              <p className="tkb-notfound-copy">
                We could not find <span className="tkb-notfound-path">{attemptedPath}</span> on Fasal Junction.
                It may have been moved, or the link might be incorrect.
              </p>
              <div className="tkb-notfound-actions">
                <Link to="/" className="tkb-cta-btn tkb-cta-btn--primary">Go to home</Link>
                <Link to="/contact" className="tkb-notfound-ghost">Contact support</Link>
              </div>
              <ul className="tkb-notfound-shortcuts">
                {SHORTCUTS.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>
                      <strong>{item.label}</strong>
                      <span>{item.hint}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
