import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../CommonComponents/Header';
import useThemeSwipers from '../hooks/useThemeSwipers';
import Category from './Category';
import background from '../assets/images/banner-1.jpg'
import SellingProduct from './SellingProduct';
import Discount from './Discount';
import FeatureProduct from './FeatureProduct';
import Form from './Form';
import PopularProduct from './PopularProduct';
import JustArrived from './JustArrived';
import RecentBlog from './RecentBlog';
import DownloadApp from './DownloadApp';
import Feature from './Feature';
import Footer from '../CommonComponents/Footer';


const Home = () => {
  useThemeSwipers();

  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
            <defs>
                <symbol xmlns="http://www.w3.org/2000/svg" id="fresh" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036c-.01-.003-.019 0-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M20 9a1 1 0 0 1 1 1v1a8 8 0 0 1-8 8H9.414l.793.793a1 1 0 0 1-1.414 1.414l-2.496-2.496a.997.997 0 0 1-.287-.567L6 17.991a.996.996 0 0 1 .237-.638l.056-.06l2.5-2.5a1 1 0 0 1 1.414 1.414L9.414 17H13a6 6 0 0 0 6-6v-1a1 1 0 0 1 1-1m-4.793-6.207l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 1 1-1.414-1.414L14.586 7H11a6 6 0 0 0-6 6v1a1 1 0 1 1-2 0v-1a8 8 0 0 1 8-8h3.586l-.793-.793a1 1 0 0 1 1.414-1.414"/></g></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="organic" viewBox="0 0 24 24"><path fill="currentColor" d="M0 2.84c1.402 2.71 1.445 5.241 2.977 10.4c1.855 5.341 8.703 5.701 9.21 5.711c.46.726 1.513 1.704 3.926 2.21l.268-1.272c-2.082-.436-2.844-1.239-3.106-1.68l-.005.006c.087-.484 1.523-5.377-1.323-9.352C7.182 3.583 0 2.84 0 2.84m24 .84c-3.898.611-4.293-.92-11.473 3.093a11.879 11.879 0 0 1 2.625 10.05c3.723-1.486 5.166-3.976 5.606-6.466c0 0 1.27-4.716 3.242-6.677M12.527 6.773l-.002-.002v.004zM2.643 5.22s5.422 1.426 8.543 11.543c-2.945-.889-4.203-3.796-4.63-5.168h.006a15.863 15.863 0 0 0-3.92-6.375z"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="delivery" viewBox="0 0 32 32"><path fill="currentColor" d="m29.92 16.61l-3-7A1 1 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h2.14a4 4 0 0 0 7.72 0h6.28a4 4 0 0 0 7.72 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.08-.39M23 11h2.34l2.14 5H23ZM9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m10.14-3h-6.28a4 4 0 0 0-7.72 0H4V8h17v12.56A4 4 0 0 0 19.14 23M23 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5-3h-1.14A4 4 0 0 0 23 20v-2h5Z"/></symbol>
            </defs>
        </svg>    
      <Header />
        {/* <section style="background-image: url('../assets/images/banner-1.jpg');background-repeat: no-repeat;background-size: cover;"> */}
        <section style={{backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} >
        <div className="container-lg">
            <div className="row">
            <div className="col-lg-6 pt-5 mt-5">
                <h2 className="display-1 ls-1"><span className="fw-bold text-primary">Organic</span> Foods at your <span className="fw-bold">Doorsteps</span></h2>
                <p className="fs-4">Dignissim massa diam elementum.</p>
                <div className="d-flex gap-3">
                <Link to="#" className="btn btn-primary text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Start Shopping</Link>
                <Link to="#" className="btn btn-dark text-uppercase fs-6 rounded-pill px-4 py-3 mt-3">Join Now</Link>
                </div>
                <div className="row my-5">
                <div className="col">
                    <div className="row text-dark">
                    <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0">14k+</p></div>
                    <div className="col"><p className="text-uppercase lh-sm mb-0">Product Varieties</p></div>
                    </div>
                </div>
                <div className="col">
                    <div className="row text-dark">
                    <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0">50k+</p></div>
                    <div className="col"><p className="text-uppercase lh-sm mb-0">Happy Customers</p></div>
                    </div>
                </div>
                <div className="col">
                    <div className="row text-dark">
                    <div className="col-auto"><p className="fs-1 fw-bold lh-sm mb-0">10+</p></div>
                    <div className="col"><p className="text-uppercase lh-sm mb-0">Store Locations</p></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
            <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-3 g-0 justify-content-center">
            <div className="col">
                <div className="card border-0 bg-primary rounded-0 p-4 text-light">
                <div className="row">
                    <div className="col-md-3 text-center">
                    <svg width="60" height="60"><use xlinkHref="#fresh"></use></svg>
                    </div>
                    <div className="col-md-9">
                    <div className="card-body p-0">
                        <h5 className="text-light">Fresh from farm</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-0 bg-secondary rounded-0 p-4 text-light">
                <div className="row">
                    <div className="col-md-3 text-center">
                    <svg width="60" height="60"><use xlinkHref="#organic"></use></svg>
                    </div>
                    <div className="col-md-9">
                    <div className="card-body p-0">
                        <h5 className="text-light">100% Organic</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card border-0 bg-danger rounded-0 p-4 text-light">
                <div className="row">
                    <div className="col-md-3 text-center">
                    <svg width="60" height="60"><use xlinkHref="#delivery"></use></svg>
                    </div>
                    <div className="col-md-9">
                    <div className="card-body p-0">
                        <h5 className="text-light">Free delivery</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <Category />
        <SellingProduct />
        <Discount />
        <FeatureProduct />
        <Form />
        <PopularProduct />
        <JustArrived />
        <RecentBlog />
        <DownloadApp />
        <Feature />
        <Footer />
    </div>
  )
}

export default Home;
