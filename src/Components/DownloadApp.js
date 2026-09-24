import React from 'react';
import { Link } from 'react-router-dom';
import img_app_store from '../assets/images/img-app-store.png';
import img_google_play from '../assets/images/img-google-play.png';
import banner_onlineapp from '../assets/images/banner-onlineapp.png';

const DownloadApp = () => {
  return (
    <section className="tkb-app-section">
      <div className="container-lg">
        <div className="tkb-app-banner">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <p className="tkb-section-kicker tkb-section-kicker--light">Trade on the go</p>
              <h2 className="tkb-app-title">Download Fasal Junction App</h2>
              <p className="tkb-app-text">Post crops, check mandi rates and connect with verified buyers and sellers from your phone.</p>
              <ul className="tkb-app-points">
                <li>Post a sell or buy enquiry in minutes</li>
                <li>Follow live rates before you agree a price</li>
                <li>Chat with verified traders securely</li>
              </ul>
              <div className="tkb-app-stores">
                <Link to="#" title="App Store">
                  <img src={img_app_store} alt="Download on the App Store" />
                </Link>
                <Link to="#" title="Google Play">
                  <img src={img_google_play} alt="Get it on Google Play" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <img src={banner_onlineapp} alt="Fasal Junction mobile app" className="tkb-app-phone" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
