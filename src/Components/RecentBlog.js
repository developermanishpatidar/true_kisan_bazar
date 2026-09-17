import React from 'react';
import { Link } from 'react-router-dom';
import post_thumbnail_1 from '../assets/images/post-thumbnail-1.jpg';
import post_thumbnail_2 from '../assets/images/post-thumbnail-2.jpg';
import post_thumbnail_3 from '../assets/images/post-thumbnail-3.jpg';

const RecentBlog = () => {
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: "none"}}>
            <defs>
                <symbol xmlns="http://www.w3.org/2000/svg" id="category" viewBox="0 0 24 24"><path fill="currentColor" d="M19 5.5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Z"/></symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" id="calendar" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"/></symbol>
            </defs>
        </svg>
      <section id="latest-blog" className="pb-4">
        <div className="container-lg">
            <div className="row">
            <div className="section-header d-flex align-items-center justify-content-between my-4">
                <h2 className="section-title">Our Recent Blog</h2>
                <Link to="#" className="btn btn-primary">View All</Link>
            </div>
            </div>
            <div className="row">
            <div className="col-md-4">
                <article className="post-item card border-0 shadow-sm p-3">
                <div className="image-holder zoom-effect">
                    <Link to="#">
                    <img src={post_thumbnail_1} alt="post" className="card-img-top" />
                    </Link>
                </div>
                <div className="card-body">
                    <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                    <div className="meta-date"><svg width="16" height="16"><use xlinkHref="#calendar"></use></svg>22 Aug 2021</div>
                    <div className="meta-categories"><svg width="16" height="16"><use xlinkHref="#category"></use></svg>tips & tricks</div>
                    </div>
                    <div className="post-header">
                    <h3 className="post-title">
                        <Link to="#" className="text-decoration-none">Top 10 casual look ideas to dress up your kids</Link>
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                    </div>
                </div>
                </article>
            </div>
            <div className="col-md-4">
                <article className="post-item card border-0 shadow-sm p-3">
                <div className="image-holder zoom-effect">
                    <Link to="#">
                    <img src={post_thumbnail_2} alt="post" className="card-img-top" />
                    </Link>
                </div>
                <div className="card-body">
                    <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                    <div className="meta-date"><svg width="16" height="16"><use xlinkHref="#calendar"></use></svg>25 Aug 2021</div>
                    <div className="meta-categories"><svg width="16" height="16"><use xlinkHref="#category"></use></svg>trending</div>
                    </div>
                    <div className="post-header">
                    <h3 className="post-title">
                        <Link to="#" className="text-decoration-none">Latest trends of wearing street wears supremely</Link>
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                    </div>
                </div>
                </article>
            </div>
            <div className="col-md-4">
                <article className="post-item card border-0 shadow-sm p-3">
                <div className="image-holder zoom-effect">
                    <Link to="#">
                    <img src={post_thumbnail_3} alt="post" className="card-img-top" />
                    </Link>
                </div>
                <div className="card-body">
                    <div className="post-meta d-flex text-uppercase gap-3 my-2 align-items-center">
                    <div className="meta-date"><svg width="16" height="16"><use xlinkHref="#calendar"></use></svg>28 Aug 2021</div>
                    <div className="meta-categories"><svg width="16" height="16"><use xlinkHref="#category"></use></svg>inspiration</div>
                    </div>
                    <div className="post-header">
                    <h3 className="post-title">
                        <Link to="#" className="text-decoration-none">10 Different Types of comfortable clothes ideas for women</Link>
                    </h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipi elit. Aliquet eleifend viverra enim tincidunt donec quam. A in arcu, hendrerit neque dolor morbi...</p>
                    </div>
                </div>
                </article>
            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default RecentBlog;
