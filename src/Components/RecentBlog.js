import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import post_thumbnail_1 from '../assets/images/post-thumbnail-1.jpg';
import post_thumbnail_2 from '../assets/images/post-thumbnail-2.jpg';
import post_thumbnail_3 from '../assets/images/post-thumbnail-3.jpg';

const posts = [
  {
    image: post_thumbnail_1,
    date: '12 Sep 2026',
    category: 'Mandi Tips',
    category_hi: 'मंडी टिप्स',
    title: 'How to read mandi rates before you post a crop',
    title_hi: 'फसल पोस्ट करने से पहले मंडी भाव कैसे समझें',
    excerpt: 'Compare today’s mandi price with nearby yards so you set a fair ask and close faster with verified buyers.',
    excerpt_hi: 'आस-पास की मंडियों से आज के भाव की तुलना करें ताकि सही कीमत तय कर सकें और सत्यापित खरीदारों के साथ तेज़ी से सौदा कर सकें।',
  },
  {
    image: post_thumbnail_2,
    date: '08 Sep 2026',
    category: 'Selling Guide',
    category_hi: 'बिक्री गाइड',
    title: 'A simple checklist for your first crop enquiry',
    title_hi: 'अपनी पहली फसल पूछताछ के लिए एक सरल चेकलिस्ट',
    excerpt: 'Variety, quantity, location and photos — the four details buyers look for before they unlock contact.',
    excerpt_hi: 'किस्म, मात्रा, स्थान और तस्वीरें — वे चार विवरण जिन्हें खरीदार संपर्क करने से पहले देखते हैं।',
  },
  {
    image: post_thumbnail_3,
    date: '02 Sep 2026',
    category: 'Farm Insights',
    category_hi: 'कृषि सुझाव',
    title: 'Packaging and grading tips that lift your offer',
    title_hi: 'पैकेजिंग और ग्रेडिंग टिप्स जो आपके सौदे का मूल्य बढ़ाती हैं',
    excerpt: 'Clean lots, clear photos and honest grades help traders trust your listing and improve the final deal.',
    excerpt_hi: 'साफ़ लॉट, स्पष्ट तस्वीरें और सही ग्रेडिंग व्यापारियों का विश्वास बढ़ाते हैं और बेहतर सौदा दिलाते हैं।',
  },
];

const RecentBlog = () => {
  const { t, i18n } = useTranslation();
  const isHi = i18n.language === 'hi';

  return (
    <section id="latest-blog" className="tkb-blog-section">
      <div className="container-lg">
        <div className="tkb-section-head">
          <div>
            <p className="tkb-section-kicker">{t('home.recent_blog_kicker')}</p>
            <h2 className="tkb-section-title">{t('home.recent_blog_title')}</h2>
          </div>
          <Link to="/blog" className="tkb-section-link">{t('common.view_all')}</Link>
        </div>
        <div className="row g-4">
          {posts.map((post) => {
            const title = isHi && post.title_hi ? post.title_hi : post.title;
            const category = isHi && post.category_hi ? post.category_hi : post.category;
            const excerpt = isHi && post.excerpt_hi ? post.excerpt_hi : post.excerpt;

            return (
              <div className="col-md-4" key={post.title}>
                <article className="tkb-blog-card">
                  <Link to="/blog" className="tkb-blog-image">
                    <img src={post.image} alt={title} />
                    <span className="tkb-blog-tag">{category}</span>
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
                      <Link to="/blog">{title}</Link>
                    </h3>
                    <p className="tkb-blog-excerpt">{excerpt}</p>
                    <Link to="/blog" className="tkb-blog-more">
                      {isHi ? 'पूरा पढ़ें →' : 'Read more →'}
                    </Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentBlog;
