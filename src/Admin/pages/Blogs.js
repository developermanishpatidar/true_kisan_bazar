import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import AdminModal from '../components/AdminModal';

const Blogs = () => {
  const { blogs, addBlogPost, deleteBlogPost } = useAdmin();

  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'Mandi & Prices',
    excerpt: '',
    authorName: 'Dr. Sunil Sharma',
    authorRole: 'Chief Market Analyst',
    readTime: '4 min read',
    tags: 'Mandi Bhav, Farming, Crops'
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.excerpt) return;

    addBlogPost({
      title: formData.title,
      category: formData.category,
      excerpt: formData.excerpt,
      readTime: formData.readTime,
      author: {
        name: formData.authorName,
        role: formData.authorRole,
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop'
      },
      tags: formData.tags.split(',').map((t) => t.trim()),
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=700&h=400&fit=crop'
    });

    setShowAddModal(false);
    setFormData({
      title: '',
      category: 'Mandi & Prices',
      excerpt: '',
      authorName: 'Dr. Sunil Sharma',
      authorRole: 'Chief Market Analyst',
      readTime: '4 min read',
      tags: 'Mandi Bhav, Farming, Crops'
    });
  };

  return (
    <div>
      <div className="adm-page-header">
        <div className="adm-page-title-group">
          <h1>Kisan Stories &amp; Blog CMS</h1>
          <p>Publish agricultural market advice, seasonal cropping guides, and mandi insights</p>
        </div>
        <div className="adm-page-actions">
          <button
            type="button"
            className="adm-btn adm-btn--primary"
            onClick={() => setShowAddModal(true)}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Write New Article</span>
          </button>
        </div>
      </div>

      <div className="adm-card">
        <div className="adm-card-header">
          <h3 className="adm-card-title">Published Articles ({blogs.length})</h3>
        </div>

        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Article Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Date / Read Time</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((b) => (
                <tr key={b.id}>
                  <td>
                    <div style={{ fontWeight: '600', color: '#0f2e16', maxWidth: '340px' }}>
                      {b.title}
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px', maxWidth: '340px' }}>
                      {b.excerpt && b.excerpt.slice(0, 75)}...
                    </div>
                  </td>
                  <td>
                    <span className="adm-badge adm-badge--buy">{b.category}</span>
                  </td>
                  <td>
                    <div style={{ fontWeight: '500' }}>{b.author?.name || 'Editorial Team'}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>{b.author?.role}</div>
                  </td>
                  <td>
                    <div>{b.date || 'Recent'}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>{b.readTime}</div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3px', maxWidth: '160px' }}>
                      {(b.tags || []).slice(0, 2).map((t, idx) => (
                        <span key={idx} style={{ fontSize: '10px', background: '#f1f5f9', padding: '2px 6px', borderRadius: '4px' }}>
                          #{t}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="adm-btn adm-btn--danger adm-btn--sm"
                      onClick={() => {
                        if (window.confirm('Delete this article?')) {
                          deleteBlogPost(b.id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Blog Modal */}
      <AdminModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Publish New Kisan Article"
        wide={true}
        footer={
          <>
            <button
              type="button"
              className="adm-btn adm-btn--secondary"
              onClick={() => setShowAddModal(false)}
            >
              Cancel
            </button>
            <button type="button" className="adm-btn adm-btn--primary" onClick={handleFormSubmit}>
              Publish Story
            </button>
          </>
        }
      >
        <form onSubmit={handleFormSubmit} className="adm-form-grid">
          <div className="adm-form-group col-span-2">
            <label className="adm-label">Article Headline *</label>
            <input
              type="text"
              className="adm-input"
              required
              placeholder="e.g. 5 Practical Ways to Reduce Post-Harvest Spoilage in Tomatoes"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Category</label>
            <select
              className="adm-select"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            >
              <option value="Mandi & Prices">Mandi &amp; Prices</option>
              <option value="Kisan Guides">Kisan Guides</option>
              <option value="Agronomy & Tips">Agronomy &amp; Tips</option>
              <option value="Government Yojana">Government Yojana</option>
            </select>
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Read Time</label>
            <input
              type="text"
              className="adm-input"
              placeholder="e.g. 4 min read"
              value={formData.readTime}
              onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Author Name</label>
            <input
              type="text"
              className="adm-input"
              value={formData.authorName}
              onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
            />
          </div>
          <div className="adm-form-group">
            <label className="adm-label">Author Role</label>
            <input
              type="text"
              className="adm-input"
              value={formData.authorRole}
              onChange={(e) => setFormData({ ...formData, authorRole: e.target.value })}
            />
          </div>
          <div className="adm-form-group col-span-2">
            <label className="adm-label">Summary / Excerpt *</label>
            <textarea
              className="adm-textarea"
              rows="3"
              required
              placeholder="Brief summary that appears on cards and search results..."
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            />
          </div>
          <div className="adm-form-group col-span-2">
            <label className="adm-label">Keywords / Tags (comma separated)</label>
            <input
              type="text"
              className="adm-input"
              placeholder="Tomato, Post-Harvest, Mandi, Cold Storage"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            />
          </div>
        </form>
      </AdminModal>
    </div>
  );
};

export default Blogs;
