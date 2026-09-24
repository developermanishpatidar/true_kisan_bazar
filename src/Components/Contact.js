import React, { useState, useRef } from 'react';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './Contact.css';
import supportClip from '../assets/images/SupportClip.svg';
import supportImg1 from '../assets/images/SupportImg1.avif';
import supportImg2 from '../assets/images/SupportImg2.avif';

const ALLOWED_EXTENSIONS = [
  '.jpg', '.jpeg', '.png', '.gif', '.webp',
  '.pdf', '.doc', '.docx', '.txt', '.xls', '.xlsx', '.csv'
];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

const YOUTUBE_VIDEOS = [
  { id: '8q6Lx0thiSk', title: 'Fasal Junction Tutorial 1' },
  { id: 'UPIUKdeW5wo', title: 'Fasal Junction Tutorial 2' },
  { id: '1WnvjdjWiCc', title: 'Fasal Junction Tutorial 3' }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile_number: '',
    email: '',
    subject: '',
    message: ''
  });
  const [attachments, setAttachments] = useState([]);
  const [fileErrors, setFileErrors] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const fileInputRef = useRef(null);

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files || []);
    const newAttachments = [];
    const errors = [];

    files.forEach((file) => {
      const ext = '.' + (file.name.split('.').pop() || '').toLowerCase();
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        errors.push(`File "${file.name}" is not supported. Supported: ${ALLOWED_EXTENSIONS.join(', ')}`);
        return;
      }
      if (file.size > MAX_FILE_SIZE) {
        errors.push(`File "${file.name}" exceeds maximum allowed size of 10MB.`);
        return;
      }
      newAttachments.push(file);
    });

    if (newAttachments.length > 0) {
      setAttachments((prev) => [...prev, ...newAttachments]);
    }
    setFileErrors(errors);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeAttachment = (indexToRemove) => {
    setAttachments((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    // Simulate sending message with attachments
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        mobile_number: '',
        email: '',
        subject: '',
        message: ''
      });
      setAttachments([]);
      setFileErrors([]);

      // Automatically hide the success banner after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 900);
  };

  return (
    <div className="tkb-page">
      <Header />
      <main className="main-content">
        <div className="support-container">
          {/* Header Hero Section */}
          <header className="support-header">
            <div className="support-row">
              <div className="support-text">
                <h1 className="support-title">Welcome to Fasal Junction Support Center</h1>
                <p className="support-subtitle">We’re here to support you 24/7 with the best solutions</p>
                <p className="Support-Paragraph">
                  Our support team is available 24/7 to assist you with any queries or issues. Whether it’s related to orders, payments, or platform usage, we're here to provide quick and reliable help.
                </p>
                <p className="Support-Paragraph2">
                  Response and resolution timelines may vary depending on the nature of the request
                </p>
              </div>
              <div className="support-images">
                <img
                  src={supportImg1 || "https://res.cloudinary.com/dhjabv5fn/image/upload/v1786618282/SupportImg1_purp3k.avif"}
                  alt="Farmer receiving support call assistance"
                />
                <img
                  src={supportImg2 || "https://res.cloudinary.com/dhjabv5fn/image/upload/v1786618598/SupportImg2_cgpcnh.avif"}
                  alt="Fasal Junction customer support agent helping via chat"
                  className="second-img"
                />
              </div>
            </div>
          </header>

          {/* Contact Form Section with Wavy Background */}
          <div className="ContactDiv">
            <section className="contact-section">
              {/* Green Ribbon Top Banner */}
              <div className="contact-hero">
                <div className="Contact-images">
                  <img src={supportClip || "/SupportClip.svg"} alt="Support Ribbon Banner" />
                </div>
                <h2 className="section-title">Contact Our Support Team</h2>
              </div>

              {submitted && (
                <div className="success-message">
                  <strong>Thank you for contacting us!</strong> Your message has been received. Our support team will get back to you shortly.
                </div>
              )}

              {errorMessage && (
                <div className="error-message">
                  {errorMessage}
                </div>
              )}

              <form className="support-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="attachments-title" htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group2">
                  <div className="form-group2-field">
                    <label className="attachments-title" htmlFor="contact-mobile">Mobile</label>
                    <input
                      id="contact-mobile"
                      type="tel"
                      name="mobile_number"
                      placeholder="Mobile Number"
                      required
                      value={formData.mobile_number}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group2-field">
                    <label className="attachments-title" htmlFor="contact-email">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="attachments-title" htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="attachments-title" htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="How can we help you? Please provide details about your issue or question."
                    required
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="file-label" htmlFor="contact-files">Attachments (Optional)</label>
                  <input
                    id="contact-files"
                    ref={fileInputRef}
                    type="file"
                    accept=".jpg,.jpeg,.png,.gif,.webp,.pdf,.doc,.docx,.txt,.xls,.xlsx,.csv"
                    className="file-input"
                    multiple
                    onChange={handleFileChange}
                  />
                  {fileErrors.length > 0 && (
                    <div className="file-errors">
                      {fileErrors.map((err, idx) => (
                        <p key={idx} className="error-text">{err}</p>
                      ))}
                    </div>
                  )}
                  {attachments.length > 0 && (
                    <div className="attachments-list">
                      <label className="attachments-title" style={{ paddingLeft: 0, marginBottom: '0.4rem' }}>
                        Attached Files ({attachments.length}):
                      </label>
                      {attachments.map((file, idx) => (
                        <div className="attachment-item" key={idx}>
                          <span className="attachment-name" title={file.name}>{file.name}</span>
                          <span className="attachment-size">({formatBytes(file.size)})</span>
                          <button
                            type="button"
                            className="remove-file-button"
                            onClick={() => removeAttachment(idx)}
                            aria-label={`Remove ${file.name}`}
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <small className="file-info">
                    Supported: Images (JPG, PNG, GIF, WebP), Documents (PDF, DOC, DOCX, TXT, XLS, XLSX, CSV). Max 10MB per file.
                  </small>
                </div>

                <button className="submit-button" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </section>
          </div>

          {/* Learn More / Video Grid Section */}
          <section className="support-info">
            <h2 className="youtube-section-title">Learn More About Fasal Junction</h2>
            <div className="video-grid">
              {YOUTUBE_VIDEOS.map((video, index) => (
                <div className="video-card" key={video.id}>
                  {activeVideo === index ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                      title={video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      className="thumbnail"
                      onClick={() => setActiveVideo(index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setActiveVideo(index);
                        }
                      }}
                      aria-label={`Play ${video.title}`}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                        alt={video.title}
                      />
                      <div className="play-button">
                        <span style={{ marginLeft: '3px' }}>▶</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
