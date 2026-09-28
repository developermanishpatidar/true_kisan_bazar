import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './Contact.css';
import supportClip from '../assets/images/SupportClip.svg';
import contactFarmer from '../assets/images/contact-farmer.jpg';
import contactAgent from '../assets/images/contact-agent.jpg';

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
  const { t, i18n } = useTranslation();
  const isHi = i18n.language === 'hi';

  const [formData, setFormData] = useState({
    name: '',
    mobile_number: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
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

    // Auto-clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
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

  // Validation function
  const validate = () => {
    const newErrors = {};

    // 1. Name validation
    if (!formData.name || !formData.name.trim()) {
      newErrors.name = isHi ? 'कृपया अपना पूरा नाम दर्ज करें' : 'Please enter your full name';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = isHi ? 'नाम कम से कम 2 अक्षरों का होना चाहिए' : 'Name must be at least 2 characters';
    }

    // 2. Mobile number validation (10 digits Indian phone or standard digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    const rawPhone = formData.mobile_number.trim().replace(/\D/g, '');
    if (!formData.mobile_number || !formData.mobile_number.trim()) {
      newErrors.mobile_number = isHi ? 'कृपया अपना मोबाइल नंबर दर्ज करें' : 'Please enter your mobile number';
    } else if (rawPhone.length !== 10 || !phoneRegex.test(rawPhone)) {
      newErrors.mobile_number = isHi ? 'कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें' : 'Please enter a valid 10-digit mobile number';
    }


    // 4. Subject validation
    if (!formData.subject || !formData.subject.trim()) {
      newErrors.subject = isHi ? 'कृपया संदेश का विषय दर्ज करें' : 'Please enter a subject';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = isHi ? 'विषय कम से कम 3 अक्षरों का होना चाहिए' : 'Subject must be at least 3 characters';
    }

    // 5. Message validation
    if (!formData.message || !formData.message.trim()) {
      newErrors.message = isHi ? 'कृपया अपना संदेश दर्ज करें' : 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = isHi ? 'संदेश कम से कम 10 अक्षरों का होना चाहिए' : 'Message must be at least 10 characters';
    }

    // 6. Attachment errors
    if (fileErrors.length > 0) {
      newErrors.attachments = isHi ? 'कृपया अमान्य फ़ाइलें हटाएं' : 'Please resolve invalid file attachments';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(null);

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // Focus and scroll to first invalid field
      const firstErrorField = Object.keys(validationErrors)[0];
      const fieldIdMap = {
        name: 'contact-name',
        mobile_number: 'contact-mobile',
        email: 'contact-email',
        subject: 'contact-subject',
        message: 'contact-message',
        attachments: 'contact-files'
      };
      const targetId = fieldIdMap[firstErrorField] || firstErrorField;
      const errorElem = document.getElementById(targetId);
      if (errorElem) {
        errorElem.focus();
        errorElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Extract submitted values
    const contactPayload = {
      id: `TICKET-${Date.now()}`,
      name: formData.name.trim(),
      mobile_number: formData.mobile_number.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
      attachments: attachments.map((f) => ({
        name: f.name,
        size: f.size,
        type: f.type
      })),
      submittedAt: new Date().toISOString(),
      status: 'Open'
    };

    console.log('✅ [Contact Form Submitted Values]:', contactPayload);

    // Persist ticket to localStorage for Admin Support Tickets integration
    try {
      const existingTickets = JSON.parse(localStorage.getItem('fasal_support_tickets') || '[]');
      localStorage.setItem('fasal_support_tickets', JSON.stringify([contactPayload, ...existingTickets]));
    } catch (err) {
      console.error('Failed to save support ticket to localStorage:', err);
    }

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

      // Automatically hide the success banner after 6 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    }, 700);
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
                <h1 className="support-title">
                  {isHi ? 'फसल जंक्शन सहायता केंद्र में आपका स्वागत है' : 'Welcome to Fasal Junction Support Center'}
                </h1>
                <p className="support-subtitle">
                  {isHi ? 'हम 24/7 सर्वोत्तम समाधानों के साथ आपकी सहायता के लिए उपस्थित हैं' : 'We’re here to support you 24/7 with the best solutions'}
                </p>
                <p className="Support-Paragraph">
                  {isHi
                    ? 'हमारी सहायता टीम किसी भी प्रश्न या समस्या में आपकी मदद के लिए 24/7 उपलब्ध है। चाहे ऑर्डर, भुगतान या प्लेटफ़ॉर्म के उपयोग से संबंधित हो, हम त्वरित और विश्वसनीय सहायता प्रदान करने के लिए यहां हैं।'
                    : "Our support team is available 24/7 to assist you with any queries or issues. Whether it’s related to orders, payments, or platform usage, we're here to provide quick and reliable help."}
                </p>
                <p className="Support-Paragraph2">
                  {isHi
                    ? 'अनुरोध की प्रकृति के आधार पर प्रतिक्रिया और समाधान की समयसीमा भिन्न हो सकती है'
                    : 'Response and resolution timelines may vary depending on the nature of the request'}
                </p>
              </div>
              <div className="support-images">
                <div className="support-circle-wrap">
                  <img
                    src={contactFarmer}
                    alt="Farmer receiving support call assistance"
                    className="support-circle-img"
                  />
                </div>
                <div className="support-circle-wrap second-img">
                  <img
                    src={contactAgent}
                    alt="Fasal Junction customer support agent helping via chat"
                    className="support-circle-img"
                  />
                </div>
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
                <h2 className="section-title">{t('contact.form_title')}</h2>
              </div>

              {submitted && (
                <div className="success-message">
                  <strong>{t('contact.success_title')}</strong> {t('contact.success_desc')}
                </div>
              )}

              {errorMessage && (
                <div className="error-message">
                  {errorMessage}
                </div>
              )}

              <form className="support-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label className="attachments-title" htmlFor="contact-name">{t('contact.full_name')} *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder={t('contact.full_name_placeholder')}
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'field-error' : ''}
                  />
                  {errors.name && <span className="field-error-text">{errors.name}</span>}
                </div>

                <div className="form-group2">
                  <div className="form-group2-field">
                    <label className="attachments-title" htmlFor="contact-mobile">{t('contact.phone')} *</label>
                    <input
                      id="contact-mobile"
                      type="tel"
                      name="mobile_number"
                      placeholder={t('contact.phone_placeholder')}
                      value={formData.mobile_number}
                      onChange={handleChange}
                      className={errors.mobile_number ? 'field-error' : ''}
                    />
                    {errors.mobile_number && <span className="field-error-text">{errors.mobile_number}</span>}
                  </div>
                  <div className="form-group2-field">
                    <label className="attachments-title" htmlFor="contact-email">{t('contact.email')}</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder={t('contact.email_placeholder')}
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'field-error' : ''}
                    />
                    {errors.email && <span className="field-error-text">{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label className="attachments-title" htmlFor="contact-subject">{t('contact.subject')} *</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder={t('contact.subject')}
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'field-error' : ''}
                  />
                  {errors.subject && <span className="field-error-text">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label className="attachments-title" htmlFor="contact-message">{t('contact.message')} *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder={t('contact.message_placeholder')}
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'field-error' : ''}
                  />
                  {errors.message && <span className="field-error-text">{errors.message}</span>}
                </div>

                <div className="form-group">
                  <label className="file-label" htmlFor="contact-files">{t('contact.attachment')}</label>
                  <input
                    id="contact-files"
                    ref={fileInputRef}
                    type="file"
                    accept=".jpg,.jpeg,.png,.gif,.webp,.pdf,.doc,.docx,.txt,.xls,.xlsx,.csv"
                    className="file-input"
                    multiple
                    onChange={handleFileChange}
                  />
                  {errors.attachments && (
                    <p className="error-text" style={{ paddingLeft: '15px' }}>{errors.attachments}</p>
                  )}
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
                        {isHi ? `संलग्न फ़ाइलें (${attachments.length}):` : `Attached Files (${attachments.length}):`}
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
                    {t('contact.attachment_desc')}
                  </small>
                </div>

                <button className="submit-button" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? t('contact.submitting') : t('contact.submit')}
                </button>
              </form>
            </section>
          </div>

          {/* Learn More / Video Grid Section */}
          <section className="support-info">
            <h2 className="youtube-section-title">{t('contact.video_title')}</h2>
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
