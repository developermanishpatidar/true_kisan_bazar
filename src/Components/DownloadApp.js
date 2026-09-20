import React from 'react';
import { Link } from 'react-router-dom';
// import img_app_store from '../assets/images/img-app-store.png';
// import img_google_play from '../assets/images/img-google-play.png';
import banner_onlineapp from '../assets/images/banner-onlineapp.png';


const DownloadApp = () => {
  return (
    <div>
      <section className="pb-4 my-4">
        <div className="container-lg">
            <div className="bg-warning pt-5 rounded-5">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                <div className="col-md-4">
                    <h2 className="mt-5">Download Fasal Setu App</h2>
                    <p>Online Orders made easy, fast and reliable</p>
                    <div className="d-flex gap-2 flex-wrap mb-5">
                    {/* <Link to="#" title="App store"><img src={img_app_store} alt="app-store" /></Link>
                    <Link to="#" title="Google Play"><img src={img_google_play} alt="google-play" /></Link> */}
                    </div>
                </div>
                <div className="col-md-5">
                    <img src={banner_onlineapp} alt="phone" className="img-fluid" />
                </div>
                </div>
            </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default DownloadApp
