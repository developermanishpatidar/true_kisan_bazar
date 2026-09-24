import React, { useState, useMemo } from 'react';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './Blog.css';

/* ─── Static blog data ─── */
const BLOG_ARTICLES = [
  {
    id: 1,
    title: 'Organic Farming: A Complete Guide for Indian Farmers',
    excerpt: 'Learn the fundamentals of organic farming, from soil preparation to certification, and discover how switching to organic can boost your profits.',
    category: 'Organic Farming',
    author: 'Dr. Rajesh Kumar',
    authorRole: 'Agricultural Scientist',
    date: '18 Sep 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    authorImg: 'https://randomuser.me/api/portraits/men/32.jpg',
    featured: true,
    content: [
      'Organic farming has emerged as a sustainable and profitable alternative for Indian farmers. With growing consumer demand for chemical-free produce, the organic market in India is projected to reach ₹75,000 crore by 2025.',
      'The transition to organic farming begins with understanding your soil. Soil testing is crucial — it reveals the pH level, nutrient content, and microbial health of your land. Based on these results, you can create a customized organic soil management plan.',
      'Key practices include composting, vermicomposting, green manuring, and crop rotation. These methods naturally replenish soil nutrients without synthetic fertilizers. Neem-based pesticides and bio-pesticides replace harmful chemical alternatives.',
      'Certification through agencies like APEDA or state organic certification bodies adds significant value to your produce. Certified organic products command 20-40% higher prices in both domestic and export markets.'
    ],
    takeaways: [
      'Start with soil testing before transitioning to organic',
      'Composting and vermicomposting are foundational practices',
      'Organic certification can increase your income by 20-40%',
      'Government subsidies are available for organic farming transitions'
    ],
    tags: ['Organic', 'Soil Health', 'Certification', 'Sustainable']
  },
  {
    id: 2,
    title: 'Drip Irrigation: Save Water, Maximize Yield',
    excerpt: 'Drip irrigation technology can reduce water usage by up to 60% while increasing crop yield. Here\'s everything you need to know.',
    category: 'Technology',
    author: 'Priya Sharma',
    authorRole: 'Irrigation Expert',
    date: '15 Sep 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
    authorImg: 'https://randomuser.me/api/portraits/women/44.jpg',
    featured: false,
    content: [
      'Drip irrigation is revolutionizing Indian agriculture by delivering water directly to plant roots through a network of pipes, valves, and emitters. This precision approach minimizes water wastage and ensures optimal moisture levels.',
      'The system works by slowly dripping water to the soil at specific points. Unlike flood irrigation which uses 100% more water, drip systems deliver exactly what plants need, reducing water consumption by 40-60%.',
      'Government schemes like PMKSY offer up to 55% subsidy for small farmers and 45% for other farmers on drip irrigation systems. The initial investment typically pays for itself within 2-3 crop cycles.'
    ],
    takeaways: [
      'Drip irrigation saves 40-60% water compared to flood irrigation',
      'Government subsidies cover up to 55% of installation costs',
      'ROI is typically achieved within 2-3 crop cycles',
      'Ideal for vegetables, fruits, and cash crops'
    ],
    tags: ['Irrigation', 'Water Conservation', 'Technology', 'Subsidy']
  },
  {
    id: 3,
    title: 'Understanding Mandi Prices: A Farmer\'s Guide',
    excerpt: 'Navigate the APMC mandi system like a pro. Learn how to track prices, time your sales, and negotiate better deals for your produce.',
    category: 'Market Insights',
    author: 'Amit Patel',
    authorRole: 'Market Analyst',
    date: '12 Sep 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80',
    authorImg: 'https://randomuser.me/api/portraits/men/67.jpg',
    featured: false,
    content: [
      'The Agricultural Produce Market Committee (APMC) mandis form the backbone of India\'s agricultural trade. Understanding how these markets work is essential for every farmer who wants to maximize returns.',
      'Mandi prices fluctuate based on supply, demand, season, and quality of produce. By tracking these patterns using digital platforms, farmers can make informed decisions about when and where to sell.',
      'Key factors affecting mandi prices include seasonal supply patterns, weather disruptions, government procurement policies, and export demand. Keeping track of these variables helps predict price movements.'
    ],
    takeaways: [
      'Track mandi prices daily using digital platforms',
      'Seasonal patterns significantly impact crop prices',
      'Quality grading can increase your selling price by 15-25%',
      'Consider multiple mandis before finalizing sales'
    ],
    tags: ['Mandi', 'Pricing', 'APMC', 'Market']
  },
  {
    id: 4,
    title: 'Wheat Cultivation: Best Practices for Rabi Season',
    excerpt: 'Maximize your wheat yield this rabi season with proven techniques for seed selection, sowing time, and nutrient management.',
    category: 'Crop Guide',
    author: 'Dr. Sunita Verma',
    authorRole: 'Crop Scientist',
    date: '10 Sep 2026',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&q=80',
    authorImg: 'https://randomuser.me/api/portraits/women/68.jpg',
    featured: false,
    content: [
      'Wheat is India\'s second most important cereal crop, and the rabi season offers the perfect conditions for its cultivation. Proper planning and execution can yield 50-60 quintals per hectare.',
      'Seed selection is critical. Choose certified varieties suited to your region — HD-2967, PBW-550, and WH-1105 are popular high-yielding varieties. Treat seeds with fungicide before sowing to prevent smut and bunt diseases.',
      'Optimal sowing time varies by region: mid-October to mid-November in northern India. Timely sowing ensures the crop benefits from the cool growing period and matures before the onset of summer heat.'
    ],
    takeaways: [
      'Use certified high-yielding varieties for your region',
      'Sow between mid-October to mid-November for best results',
      'Apply 120-150 kg Nitrogen per hectare in split doses',
      'First irrigation at 21 days after sowing is critical'
    ],
    tags: ['Wheat', 'Rabi', 'Cultivation', 'Yield']
  },
  {
    id: 5,
    title: 'PM-KISAN and Other Government Schemes for Farmers',
    excerpt: 'A comprehensive list of government subsidies, loans, and schemes available for Indian farmers in 2026.',
    category: 'Government Schemes',
    author: 'Vikram Singh',
    authorRole: 'Policy Analyst',
    date: '8 Sep 2026',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80',
    authorImg: 'https://randomuser.me/api/portraits/men/75.jpg',
    featured: false,
    content: [
      'The Indian government provides numerous financial support schemes for farmers. Understanding and accessing these programs can significantly improve a farmer\'s financial stability.',
      'PM-KISAN provides ₹6,000 annually in three installments directly to farmers\' bank accounts. Kisan Credit Card (KCC) offers short-term loans at subsidized interest rates of 4% for timely repayment.',
      'Fasal Bima Yojana protects against crop losses with premiums as low as 1.5% for rabi crops and 2% for kharif crops. The scheme covers natural calamities, pests, and diseases.'
    ],
    takeaways: [
      'PM-KISAN provides ₹6,000/year — ensure you\'re registered',
      'KCC offers loans at just 4% interest with timely repayment',
      'Fasal Bima premiums start from just 1.5% for rabi crops',
      'e-NAM enables selling in any mandi across India'
    ],
    tags: ['PM-KISAN', 'Subsidy', 'Government', 'Insurance']
  },
  {
    id: 6,
    title: 'Soil Health Cards: Why Every Farmer Needs One',
    excerpt: 'Your soil health card is a roadmap to better yields. Learn how to read it, understand nutrient deficiencies, and apply the right fertilizers.',
    category: 'Soil Health',
    author: 'Dr. Meena Agarwal',
    authorRole: 'Soil Scientist',
    date: '5 Sep 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80',
    authorImg: 'https://randomuser.me/api/portraits/women/52.jpg',
    featured: false,
    content: [
      'The Soil Health Card scheme, launched by the Government of India, provides farmers with crucial information about the nutrient status of their soil along with recommendations for appropriate dosage of nutrients.',
      'Each card contains data on 12 parameters: pH, electrical conductivity, organic carbon, nitrogen, phosphorus, potassium, sulphur, zinc, boron, iron, manganese, and copper.',
      'By following the nutrient recommendations on your soil health card, you can reduce fertilizer costs by 10-15% while improving yield by up to 20%. It prevents over-application of certain nutrients while addressing deficiencies.'
    ],
    takeaways: [
      'Get your soil tested every 2-3 years',
      'Soil health cards cover 12 key nutrient parameters',
      'Following recommendations can cut fertilizer costs by 10-15%',
      'Proper soil management can improve yield by up to 20%'
    ],
    tags: ['Soil Health', 'Fertilizer', 'Government Scheme', 'Testing']
  },
  {
    id: 7,
    title: 'Mushroom Farming: A Profitable Side Business',
    excerpt: 'Start mushroom farming with minimal investment and earn up to ₹1 lakh per month. Complete setup guide for beginners.',
    category: 'Crop Guide',
    author: 'Ravi Deshmukh',
    authorRole: 'Agri-Entrepreneur',
    date: '2 Sep 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=800&q=80',
    authorImg: 'https://randomuser.me/api/portraits/men/45.jpg',
    featured: false,
    content: [
      'Mushroom farming is one of the most profitable agricultural ventures in India, requiring minimal space and investment. With proper techniques, farmers can earn ₹50,000 to ₹1,00,000 per month from a small setup.',
      'Button mushrooms, oyster mushrooms, and paddy straw mushrooms are the three most commercially viable varieties in India. Oyster mushrooms are ideal for beginners due to their low maintenance requirements.',
      'The basic setup requires a dark, well-ventilated room, spawn (mushroom seeds), substrate (wheat straw or paddy straw), and basic humidity control. The total initial investment ranges from ₹10,000 to ₹50,000.'
    ],
    takeaways: [
      'Start with oyster mushrooms — easiest for beginners',
      'Initial investment as low as ₹10,000',
      'Harvest cycle is just 35-45 days',
      'Growing demand in hotels, restaurants, and health-conscious consumers'
    ],
    tags: ['Mushroom', 'Side Business', 'Low Investment', 'High Profit']
  },
  {
    id: 8,
    title: 'Weather Forecasting Apps Every Farmer Should Use',
    excerpt: 'Accurate weather predictions can save your crops. Discover the best weather apps and services designed for Indian farmers.',
    category: 'Technology',
    author: 'Ankit Joshi',
    authorRole: 'AgriTech Specialist',
    date: '30 Aug 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1504386106331-3e4e71712b38?w=800&q=80',
    authorImg: 'https://randomuser.me/api/portraits/men/22.jpg',
    featured: false,
    content: [
      'Weather plays a decisive role in farming success. With climate change making weather patterns increasingly unpredictable, having access to accurate forecasts is more important than ever.',
      'IMD\'s Meghdoot app provides district-level weather forecasts specifically for farmers. It includes advisory services on sowing, irrigation, and harvesting based on predicted weather patterns.',
      'Apps like Skymet, Weather Underground, and Fasal Junction provide hyperlocal weather data, rainfall predictions, and crop-specific advisories. Many also send SMS alerts for severe weather events.'
    ],
    takeaways: [
      'Meghdoot app provides free IMD forecasts for farmers',
      'Use hyperlocal weather apps for field-level predictions',
      'Set up SMS alerts for severe weather events',
      'Plan irrigation and spraying around weather forecasts'
    ],
    tags: ['Weather', 'Apps', 'Technology', 'Climate']
  },
  {
    id: 9,
    title: 'Natural Pest Control Methods for Vegetable Crops',
    excerpt: 'Reduce chemical dependency with these effective natural pest control techniques. Safe for your health, your soil, and the environment.',
    category: 'Organic Farming',
    author: 'Kavita Nair',
    authorRole: 'Organic Farming Consultant',
    date: '28 Aug 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c18?w=800&q=80',
    authorImg: 'https://randomuser.me/api/portraits/women/33.jpg',
    featured: false,
    content: [
      'Chemical pesticides have long-term detrimental effects on soil health, water quality, and human health. Natural pest control methods offer effective alternatives that are both eco-friendly and cost-effective.',
      'Neem oil spray is one of the most versatile natural pesticides. It works against over 200 species of insects including aphids, whiteflies, and mealybugs. Mix 5ml neem oil with 1 liter of water and spray during cool hours.',
      'Companion planting is another powerful strategy. Marigolds repel nematodes and aphids, basil deters flies and mosquitoes, and garlic planted near roses keeps aphids away. These natural barriers reduce pest pressure significantly.'
    ],
    takeaways: [
      'Neem oil is effective against 200+ pest species',
      'Companion planting naturally reduces pest pressure',
      'Pheromone traps help monitor and control specific pests',
      'Encourage beneficial insects like ladybugs and lacewings'
    ],
    tags: ['Pest Control', 'Natural', 'Organic', 'Neem']
  },
  {
    id: 10,
    title: 'Cold Storage: Reducing Post-Harvest Losses',
    excerpt: 'India loses 30% of its produce post-harvest. Learn how cold storage solutions can help you preserve quality and get better prices.',
    category: 'Market Insights',
    author: 'Suresh Reddy',
    authorRole: 'Supply Chain Expert',
    date: '25 Aug 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80',
    authorImg: 'https://randomuser.me/api/portraits/men/55.jpg',
    featured: false,
    content: [
      'Post-harvest losses in India amount to approximately ₹92,000 crore annually. Fruits and vegetables suffer the most, with losses ranging from 25-40% between farm and fork.',
      'Modern cold storage facilities maintain produce at optimal temperatures — fruits at 0-4°C, vegetables at 5-12°C, and flowers at 2-5°C. This dramatically extends shelf life and maintains nutritional value.',
      'Government schemes like the National Horticulture Mission provide up to 35% capital subsidy for setting up cold storage units. Solar-powered cold rooms are emerging as affordable alternatives for small farmers.'
    ],
    takeaways: [
      'Post-harvest losses cost Indian farmers ₹92,000 crore annually',
      'Cold storage can extend produce shelf life by 2-10x',
      'Government subsidies cover up to 35% of cold storage setup costs',
      'Solar cold rooms are a viable option for small farmers'
    ],
    tags: ['Cold Storage', 'Post-Harvest', 'Supply Chain', 'Subsidy']
  },
  {
    id: 11,
    title: 'Vermicomposting: Turn Waste Into Gold',
    excerpt: 'Create nutrient-rich vermicompost from agricultural waste. A step-by-step guide to setting up your own vermiculture unit.',
    category: 'Soil Health',
    author: 'Dr. Anjali Mishra',
    authorRole: 'Compost Specialist',
    date: '22 Aug 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&q=80',
    authorImg: 'https://randomuser.me/api/portraits/women/65.jpg',
    featured: false,
    content: [
      'Vermicomposting is the process of using earthworms to convert organic waste into nutrient-rich compost. This "black gold" is far superior to chemical fertilizers in improving soil structure and fertility.',
      'Eisenia fetida (red wigglers) are the most efficient composting worms. They can consume waste equal to their body weight daily and produce castings rich in nitrogen, phosphorus, and potassium.',
      'A basic vermicompost bed can be set up in a shaded area using bricks and a polythene sheet base. Layer cow dung, crop residues, and kitchen waste, then introduce 1 kg of earthworms per square meter.'
    ],
    takeaways: [
      'Earthworms consume their body weight in waste daily',
      'Vermicompost improves soil water retention by 30-40%',
      'Ready to use in 45-60 days',
      'Can be sold at ₹5-10 per kg for additional income'
    ],
    tags: ['Vermicompost', 'Organic', 'Waste Management', 'Soil']
  },
  {
    id: 12,
    title: 'FPO: How Farmer Producer Organizations Help You',
    excerpt: 'Joining an FPO gives small farmers collective bargaining power, access to markets, and better input prices. Here\'s how to get started.',
    category: 'Government Schemes',
    author: 'Manoj Tiwari',
    authorRole: 'FPO Coordinator',
    date: '20 Aug 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80',
    authorImg: 'https://randomuser.me/api/portraits/men/62.jpg',
    featured: false,
    content: [
      'Farmer Producer Organizations (FPOs) are collective entities that bring small and marginal farmers together to improve their market access, bargaining power, and overall income.',
      'The government has committed to establishing 10,000 new FPOs with a total budget of ₹6,865 crore. Each FPO receives up to ₹18 lakh in equity grant and ₹2 crore in credit guarantee.',
      'Through FPOs, farmers can collectively purchase inputs at wholesale rates (saving 15-25%), access better markets, obtain training and technology, and even export their produce directly.'
    ],
    takeaways: [
      'FPOs save 15-25% on input costs through bulk purchasing',
      'Government provides up to ₹18 lakh equity grant per FPO',
      'Collective marketing fetches 10-30% higher prices',
      'FPO members get priority access to government schemes'
    ],
    tags: ['FPO', 'Collective Farming', 'Government', 'Marketing']
  }
];

const CATEGORIES = [
  'All',
  'Organic Farming',
  'Technology',
  'Market Insights',
  'Crop Guide',
  'Government Schemes',
  'Soil Health'
];

/* ─── Component ─── */
const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openArticle, setOpenArticle] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterDone, setNewsletterDone] = useState(false);

  /* Derived data */
  const filtered = useMemo(() => {
    return BLOG_ARTICLES.filter((a) => {
      const catOk = selectedCategory === 'All' || a.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const searchOk =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        (a.tags && a.tags.some((t) => t.toLowerCase().includes(q)));
      return catOk && searchOk;
    });
  }, [selectedCategory, searchQuery]);

  const featured = filtered.find((a) => a.featured) || filtered[0];
  const grid = filtered.filter((a) => a.id !== (featured && featured.id));

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterDone(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="tkb-page">
      <Header />
      <main className="main-content">
        <div className="tkb-blog-page-wrapper">
          {/* ── Hero ── */}
          <section className="blog-hero">
            <div className="blog-hero-inner">
              <span className="blog-hero-kicker">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                Kisan Knowledge Hub
              </span>
              <h1 className="blog-hero-title">Blogs &amp; Kisan Guides</h1>
              <p className="blog-hero-subtitle">
                Expert articles, seasonal tips, and market insights to help Indian farmers grow smarter and earn better.
              </p>

              {/* Search */}
              <div className="blog-search-container">
                <span className="blog-search-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
                <input
                  className="blog-search-input"
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="blog-search-clear" onClick={() => setSearchQuery('')} aria-label="Clear search">×</button>
                )}
              </div>
            </div>
          </section>

          {/* ── Category Strip ── */}
          <div className="blog-category-strip">
            <div className="blog-category-inner">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`blog-cat-pill${selectedCategory === cat ? ' active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* ── Main Content ── */}
          <div className="blog-main-container">

            {/* Featured Story */}
            {featured && (
              <div className="blog-featured-card" onClick={() => setOpenArticle(featured)}>
                <div className="blog-featured-image">
                  <span className="blog-featured-badge">★ Featured</span>
                  <img src={featured.image} alt={featured.title} loading="lazy" />
                </div>
                <div className="blog-featured-content">
                  <span className="blog-featured-tag">{featured.category}</span>
                  <h2 className="blog-featured-title">{featured.title}</h2>
                  <p className="blog-featured-excerpt">{featured.excerpt}</p>
                  <div className="blog-author-row">
                    <div className="blog-author-info">
                      <img className="blog-author-avatar" src={featured.authorImg} alt={featured.author} />
                      <div>
                        <p className="blog-author-name">{featured.author}</p>
                        <p className="blog-author-role">{featured.date} · {featured.readTime}</p>
                      </div>
                    </div>
                    <span className="blog-read-cta">Read →</span>
                  </div>
                </div>
              </div>
            )}

            {/* Grid Header */}
            {grid.length > 0 && (
              <>
                <div className="blog-section-header">
                  <h2 className="blog-section-title">Latest Articles</h2>
                  <span className="blog-count-badge">{grid.length} articles</span>
                </div>

                <div className="blog-grid">
                  {grid.map((article) => (
                    <div className="blog-card" key={article.id} onClick={() => setOpenArticle(article)}>
                      <div className="blog-card-image">
                        <span className="blog-card-tag">{article.category}</span>
                        <img src={article.image} alt={article.title} loading="lazy" />
                      </div>
                      <div className="blog-card-body">
                        <div className="blog-card-meta">
                          <span>{article.date}</span>
                          <span>·</span>
                          <span>{article.readTime}</span>
                        </div>
                        <h3 className="blog-card-title">{article.title}</h3>
                        <p className="blog-card-excerpt">{article.excerpt}</p>
                        <div className="blog-card-footer">
                          <div className="blog-card-author">
                            <img src={article.authorImg} alt={article.author} />
                            <span>{article.author}</span>
                          </div>
                          <span className="blog-card-arrow">→</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Empty state */}
            {filtered.length === 0 && (
              <div className="blog-empty-state">
                <h3>No articles found</h3>
                <p>Try a different search term or category.</p>
                <button className="blog-reset-btn" onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}>
                  Reset Filters
                </button>
              </div>
            )}

            {/* Newsletter */}
            <div className="blog-newsletter-box">
              <div className="blog-newsletter-content">
                <span className="blog-newsletter-badge">📩 Newsletter</span>
                <h3>Get Farming Tips in Your Inbox</h3>
                <p>Weekly expert advice, mandi price alerts, and seasonal crop guides — delivered free.</p>
              </div>
              {newsletterDone ? (
                <span className="blog-newsletter-success">✓ Subscribed! Check your email.</span>
              ) : (
                <form className="blog-newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <input
                    className="blog-newsletter-input"
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="blog-newsletter-btn">Subscribe</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* ── Article Reader Modal ── */}
      {openArticle && (
        <div className="blog-modal-backdrop" onClick={() => setOpenArticle(null)}>
          <div className="blog-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal-close" onClick={() => setOpenArticle(null)} aria-label="Close">×</button>
            <div className="blog-modal-hero">
              <img src={openArticle.image} alt={openArticle.title} />
            </div>
            <div className="blog-modal-body">
              <span className="blog-modal-tag">{openArticle.category}</span>
              <h2 className="blog-modal-title">{openArticle.title}</h2>
              <div className="blog-modal-author-bar">
                <img className="blog-author-avatar" src={openArticle.authorImg} alt={openArticle.author} />
                <div>
                  <p className="blog-author-name">{openArticle.author}</p>
                  <p className="blog-author-role">{openArticle.date} · {openArticle.readTime}</p>
                </div>
              </div>
              <div className="blog-modal-content">
                {openArticle.content && openArticle.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              {openArticle.takeaways && (
                <div className="blog-modal-takeaways">
                  <h4>🌾 Key Takeaways</h4>
                  <ul>
                    {openArticle.takeaways.map((t, i) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              )}
              {openArticle.tags && (
                <div className="blog-modal-tags">
                  {openArticle.tags.map((tag) => (
                    <span className="blog-modal-tag-pill" key={tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
