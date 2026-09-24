import React from 'react';
import { Link } from 'react-router-dom';
import post_thumbnail_1 from '../assets/images/post-thumbnail-1.jpg';
import post_thumbnail_2 from '../assets/images/post-thumbnail-2.jpg';
import post_thumbnail_3 from '../assets/images/post-thumbnail-3.jpg';

const posts = [
  {
    image: post_thumbnail_1,
    date: '12 Sep 2026',
    category: 'Mandi Tips',
    title: 'How to read mandi rates before you post a crop',
    excerpt: 'Compare today’s mandi price with nearby yards so you set a fair ask and close faster with verified buyers.',
  },
  {
    image: post_thumbnail_2,
    date: '08 Sep 2026',
    category: 'Selling Guide',
    title: 'A simple checklist for your first crop enquiry',
    excerpt: 'Variety, quantity, location and photos — the four details buyers look for before they unlock contact.',
  },
  {
    image: post_thumbnail_3,
    date: '02 Sep 2026',
    category: 'Farm Insights',
    title: 'Packaging and grading tips that lift your offer',
    excerpt: 'Clean lots, clear photos and honest grades help traders trust your listing and improve the final deal.',
  },
];

const RecentBlog = () => {
  return (
    <section id="latest-blog" className="tkb-blog-section">
      <div className="container-lg">
        <div className="tkb-section-head">
          <div>
            <p className="tkb-section-kicker">Guides & stories</p>
            <h2 className="tkb-section-title">Our Recent Blog</h2>
          </div>
          <Link to="#" className="tkb-section-link">View All</Link>
        </div>
        <div className="row g-4">
          {posts.map((post) => (
            <div className="col-md-4" key={post.title}>
              <article className="tkb-blog-card">
                <Link to="#" className="tkb-blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="tkb-blog-tag">{post.category}</span>
                </Link>
                <div className="tkb-blog-body">
                  <p className="tkb-blog-meta">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="16" rx="2" />
                      <path d="M16 3v4M8 3v4M3 11h18" />
                    </svg>
                    {post.date}
                  </p>
                  <h3 className="tkb-blog-title">
                    <Link to="#">{post.title}</Link>
                  </h3>
                  <p className="tkb-blog-excerpt">{post.excerpt}</p>
                  <Link to="#" className="tkb-blog-more">Read more →</Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
