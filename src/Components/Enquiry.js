import React, { useState, useMemo } from 'react';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import { useTranslation } from 'react-i18next';

// Comprehensive Category -> Sub-Category -> Variety mappings
const CATEGORY_DATA = {
  fruits: {
    subCategories: [
      { id: 'apple', label: 'Apple (सेब)', varieties: ['Shimla', 'Kinnaur', 'Royal Delicious', 'Honeycrisp', 'Golden Delicious'] },
      { id: 'banana', label: 'Banana (केला)', varieties: ['Grand Naine (G9)', 'Robusta', 'Green Banana', 'Yellaki'] },
      { id: 'orange', label: 'Orange (संतरा)', varieties: ['Nagpur Santra', 'Kinnow', 'Sweet Orange (Mosambi)'] },
      { id: 'pomegranate', label: 'Pomegranate (अनार)', varieties: ['Bhagwa', 'Super Bhagwa', 'Arakta', 'Ganesh'] },
      { id: 'mango', label: 'Mango (आम)', varieties: ['Alphonso (Hapus)', 'Kesar', 'Dasheri', 'Langra', 'Chausa'] },
      { id: 'grapes', label: 'Grapes (अंगूर)', varieties: ['Thompson Seedless', 'Sonaka', 'Sharad Seedless', 'Anab-e-Shahi'] },
    ]
  },
  vegetables: {
    subCategories: [
      { id: 'potato', label: 'Potato (आलू)', varieties: ['Kufri Jyoti', 'Kufri Pukhraj', 'Kufri Bahar', 'Chipsona'] },
      { id: 'onion', label: 'Onion (प्याज)', varieties: ['Nashik Red', 'Garwa', 'White Onion', 'Pusa Red'] },
      { id: 'tomato', label: 'Tomato (टमाटर)', varieties: ['Desi', 'Hybrid', 'Abhinav', 'Roma'] },
      { id: 'spinach', label: 'Spinach (पालक)', varieties: ['All Green', 'Pusa Bharati', 'Baby Spinach'] },
      { id: 'cauliflower', label: 'Cauliflower (फूलगोभी)', varieties: ['Pusa Snowball', 'Pusa Deepali', 'Madhuri'] },
    ]
  },
  grains: {
    subCategories: [
      { id: 'wheat', label: 'Wheat (गेहूं)', varieties: ['Sharbati', 'Lokwan', 'HD-2967', 'Malavraj', 'Kalyan Sona'] },
      { id: 'rice', label: 'Rice (चावल / धान)', varieties: ['Basmati 1121', 'Pusa Basmati', 'Sona Masoori', 'Kolam', 'IR 64'] },
      { id: 'maize', label: 'Maize (मक्का)', varieties: ['Yellow Corn', 'Sweet Corn', 'White Maize', 'Deccan Hybrid'] },
      { id: 'barley', label: 'Barley (जौ)', varieties: ['K-551', 'Jyoti', 'RD-2035'] },
      { id: 'millets', label: 'Millets (बाजरा / ज्वार)', varieties: ['Pearl Millet (Bajra)', 'Sorghum (Jowar)', 'Finger Millet (Ragi)'] },
      { id: 'oats', label: 'Oats (जई)', varieties: ['Kent', 'OS-6', 'UPO-212'] },
    ]
  },
  pulses: {
    subCategories: [
      { id: 'chana', label: 'Chickpeas / Chana (चना)', varieties: ['Desi Chana', 'Kabuli Chana (Dollar)', 'Vishal'] },
      { id: 'toor', label: 'Pigeon Pea / Toor (अरहर / तुअर)', varieties: ['Maruti', 'Asha', 'BDN-2'] },
      { id: 'moong', label: 'Green Gram / Moong (मूंग)', varieties: ['Pusa Vishal', 'Samrat', 'K-851'] },
      { id: 'urad', label: 'Black Gram / Urad (उड़द)', varieties: ['Pant U-31', 'T-9', 'Nayagarh'] },
      { id: 'masoor', label: 'Lentil / Masoor (मसूर)', varieties: ['Pusa Vaibhav', 'Mallika', 'DPL-62'] },
    ]
  }
};

// Dynamic price bracket options based on selected quantityUnit
const UNIT_PRICE_OPTIONS = {
  kg: {
    expected: [
      { value: '10 - 30', label: '₹10 - ₹30 / kg' },
      { value: '30 - 60', label: '₹30 - ₹60 / kg' },
      { value: '60 - 100', label: '₹60 - ₹100 / kg' },
      { value: '100 - 200', label: '₹100 - ₹200 / kg' },
      { value: '200+', label: '₹200+ / kg' }
    ],
    min: [
      { value: '5 - 15', label: '₹5 - ₹15 / kg' },
      { value: '15 - 30', label: '₹15 - ₹30 / kg' },
      { value: '30 - 50', label: '₹30 - ₹50 / kg' },
      { value: '50 - 100', label: '₹50 - ₹100 / kg' },
      { value: '100+', label: '₹100+ / kg' }
    ]
  },
  quintal: {
    expected: [
      { value: '1,500 - 2,500', label: '₹1,500 - ₹2,500 / quintal' },
      { value: '2,500 - 4,000', label: '₹2,500 - ₹4,000 / quintal' },
      { value: '4,000 - 6,000', label: '₹4,000 - ₹6,000 / quintal' },
      { value: '6,000 - 10,000', label: '₹6,000 - ₹10,000 / quintal' },
      { value: '10,000+', label: '₹10,000+ / quintal' }
    ],
    min: [
      { value: '1,000 - 2,000', label: '₹1,000 - ₹2,000 / quintal' },
      { value: '2,000 - 3,500', label: '₹2,000 - ₹3,500 / quintal' },
      { value: '3,500 - 5,000', label: '₹3,500 - ₹5,000 / quintal' },
      { value: '5,000 - 8,000', label: '₹5,000 - ₹8,000 / quintal' },
      { value: '8,000+', label: '₹8,000+ / quintal' }
    ]
  },
  ton: {
    expected: [
      { value: '15,000 - 25,000', label: '₹15,000 - ₹25,000 / ton' },
      { value: '25,000 - 45,000', label: '₹25,000 - ₹45,000 / ton' },
      { value: '45,000 - 75,000', label: '₹45,000 - ₹75,000 / ton' },
      { value: '75,000 - 1,20,000', label: '₹75,000 - ₹1,20,000 / ton' },
      { value: '1,20,000+', label: '₹1,20,000+ / ton' }
    ],
    min: [
      { value: '10,000 - 20,000', label: '₹10,000 - ₹20,000 / ton' },
      { value: '20,000 - 35,000', label: '₹20,000 - ₹35,000 / ton' },
      { value: '35,000 - 60,000', label: '₹35,000 - ₹60,000 / ton' },
      { value: '60,000 - 1,00,000', label: '₹60,000 - ₹1,00,000 / ton' },
      { value: '1,00,000+', label: '₹1,00,000+ / ton' }
    ]
  }
};

const INITIAL_FORM_STATE = {
  productCategory: '',
  subCategory: '',
  variety: '',
  grade: '',
  location: '',
  quantity: '',
  quantityUnit: 'kg',
  expectedPrice: '',
  minExpectedPrice: '',
  harvestingDate: '',
  additionalNotes: '',
};

const Enquiry = () => {
  const { t } = useTranslation();
  const [enquiryType, setEnquiryType] = useState('buy');
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available sub-categories based on selected productCategory
  const availableSubCategories = useMemo(() => {
    if (!formData.productCategory || !CATEGORY_DATA[formData.productCategory]) {
      return [];
    }
    return CATEGORY_DATA[formData.productCategory].subCategories;
  }, [formData.productCategory]);

  // Available varieties based on selected subCategory
  const availableVarieties = useMemo(() => {
    if (!availableSubCategories.length || !formData.subCategory) {
      return [];
    }
    const foundSub = availableSubCategories.find((s) => s.id === formData.subCategory);
    return foundSub ? foundSub.varieties : [];
  }, [availableSubCategories, formData.subCategory]);

  // Available price options based on selected quantityUnit (kg / quintal / ton)
  const currentPriceOptions = useMemo(() => {
    const unitKey = formData.quantityUnit || 'kg';
    return UNIT_PRICE_OPTIONS[unitKey] || UNIT_PRICE_OPTIONS.kg;
  }, [formData.quantityUnit]);

  // Handle generic input change and clear field-specific error
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      // Reset subCategory and variety if category changes
      if (name === 'productCategory') {
        updated.subCategory = '';
        updated.variety = '';
      }
      // Reset variety if subCategory changes
      if (name === 'subCategory') {
        updated.variety = '';
      }
      // Reset expectedPrice and minExpectedPrice if quantityUnit changes
      if (name === 'quantityUnit') {
        updated.expectedPrice = '';
        updated.minExpectedPrice = '';
      }
      return updated;
    });

    // Auto-clear error when user provides input
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  // Handle photo file selection
  const handleFileChange = (e) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  // Form validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.productCategory) {
      newErrors.productCategory = t('enquiry.error_category', 'Please select a product category');
    }

    if (!formData.subCategory) {
      newErrors.subCategory = t('enquiry.error_subcategory', 'Please select a sub-category');
    }

    if (!formData.variety.trim()) {
      newErrors.variety = t('enquiry.error_variety', 'Please select or enter a variety');
    }

    if (!formData.location) {
      newErrors.location = t('enquiry.error_location', 'Please select a location');
    }

    if (!formData.quantity || isNaN(formData.quantity) || Number(formData.quantity) <= 0) {
      newErrors.quantity = t('enquiry.error_quantity', 'Please enter a valid quantity greater than 0');
    }

    if (!formData.expectedPrice) {
      newErrors.expectedPrice = t('enquiry.error_price', 'Please select expected price');
    }

    return newErrors;
  };

  // Form submit handler: validates and gets all form values
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);

      // Smooth scroll to the first field with an error
      const firstErrorField = Object.keys(validationErrors)[0];
      const errorElem = document.getElementById(firstErrorField);
      if (errorElem) {
        errorElem.focus();
        errorElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    // Form values extracted
    const enquiryPayload = {
      id: `ENQ-${Date.now()}`,
      enquiryType,
      productCategory: formData.productCategory,
      subCategory: formData.subCategory,
      variety: formData.variety,
      grade: formData.grade || 'Standard',
      location: formData.location,
      quantity: parseFloat(formData.quantity),
      quantityUnit: formData.quantityUnit,
      expectedPrice: formData.expectedPrice,
      minExpectedPrice: formData.minExpectedPrice || 'N/A',
      harvestingDate: formData.harvestingDate || 'Immediate',
      additionalNotes: formData.additionalNotes.trim(),
      photos: selectedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        type: file.type
      })),
      submittedAt: new Date().toISOString(),
      status: 'Active'
    };

    // Log the complete enquiry form values to the console
    console.log('✅ [Enquiry Form Submitted Values]:', enquiryPayload);

    // Persist in localStorage for cross-page availability
    try {
      const existing = JSON.parse(localStorage.getItem('fasal_enquiries') || '[]');
      localStorage.setItem('fasal_enquiries', JSON.stringify([enquiryPayload, ...existing]));
    } catch (err) {
      console.error('Failed to save to localStorage:', err);
    }

    // Show success confirmation card
    setSubmittedData(enquiryPayload);
    setErrors({});
    setIsSubmitting(false);

    // Scroll to success banner
    const formTop = document.querySelector('.enquiry-form-card');
    if (formTop) {
      formTop.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Reset form to create another enquiry
  const handleResetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setSelectedFiles([]);
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <div>
      <Header />
      <main className="enquiry-main">
        <section className="enquiry-hero">
          <div className="enquiry-hero-bg" aria-hidden="true"></div>

          <div className="container enquiry-hero-inner">
            <div className="row align-items-center g-4 g-xl-5">

              <div className="col-lg-5 enquiry-farmer-col">
                <div className="enquiry-farmer-image">
                  <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=700&h=900&fit=crop" alt="Farmer in agricultural field" />
                </div>
              </div>

              <div className="col-lg-7">
                <div className="enquiry-form-card">

                  {/* Submission Success Confirmation Alert */}
                  {submittedData && (
                    <div className="enquiry-success-card" role="alert">
                      <div className="enquiry-success-header">
                        <span className="enquiry-success-badge">{submittedData.enquiryType}</span>
                        <h3 className="enquiry-success-title">
                          🎉 {t('enquiry.success_title', 'Enquiry Created Successfully!')}
                        </h3>
                      </div>
                      <div className="enquiry-success-details">
                        <div className="enquiry-success-details-row">
                          <span>Commodity:</span>
                          <strong>{submittedData.subCategory.toUpperCase()} ({submittedData.variety})</strong>
                        </div>
                        <div className="enquiry-success-details-row">
                          <span>Quantity:</span>
                          <strong>{submittedData.quantity} {submittedData.quantityUnit.toUpperCase()}</strong>
                        </div>
                        <div className="enquiry-success-details-row">
                          <span>Location:</span>
                          <strong style={{ textTransform: 'capitalize' }}>{submittedData.location}</strong>
                        </div>
                        <div className="enquiry-success-details-row">
                          <span>Expected Price:</span>
                          <strong>₹{submittedData.expectedPrice} / {submittedData.quantityUnit}</strong>
                        </div>
                        {submittedData.minExpectedPrice && submittedData.minExpectedPrice !== 'N/A' && (
                          <div className="enquiry-success-details-row">
                            <span>Min Expected Price:</span>
                            <strong>₹{submittedData.minExpectedPrice} / {submittedData.quantityUnit}</strong>
                          </div>
                        )}
                        {submittedData.photos.length > 0 && (
                          <div className="enquiry-success-details-row">
                            <span>Photos Attached:</span>
                            <strong>{submittedData.photos.length} photo(s)</strong>
                          </div>
                        )}
                      </div>
                      <div className="enquiry-success-actions">
                        <button type="button" className="btn-enquiry-reset" onClick={handleResetForm}>
                          + {t('enquiry.create_another', 'Create Another Enquiry')}
                        </button>
                      </div>
                    </div>
                  )}

                  <form className="enquiry-form" onSubmit={handleSubmit} noValidate>

                    {/* Enquiry Type Toggle (Buy / Sell) */}
                    <div className="enquiry-type-toggle" role="group" aria-label="Enquiry type">
                      <button
                        type="button"
                        className={`enquiry-type-btn${enquiryType === 'buy' ? ' active' : ''}`}
                        onClick={() => setEnquiryType('buy')}
                      >
                        {t('enquiry.buy')}
                      </button>
                      <button
                        type="button"
                        className={`enquiry-type-btn${enquiryType === 'sell' ? ' active' : ''}`}
                        onClick={() => setEnquiryType('sell')}
                      >
                        {t('enquiry.sell')}
                      </button>
                    </div>

                    <div className="row g-3 g-md-4">

                      {/* 1. Product Category */}
                      <div className="col-md-6">
                        <label className="enquiry-label" htmlFor="productCategory">
                          {t('enquiry.product_category')}<span className="enquiry-required">*</span>
                        </label>
                        <div className={`enquiry-select-wrap${errors.productCategory ? ' enquiry-input-error' : ''}`}>
                          <select
                            className="enquiry-input enquiry-select"
                            id="productCategory"
                            name="productCategory"
                            value={formData.productCategory}
                            onChange={handleChange}
                          >
                            <option value="" disabled>{t('enquiry.select_category')}</option>
                            <option value="fruits">{t('common.fruits')}</option>
                            <option value="vegetables">{t('common.vegetables')}</option>
                            <option value="grains">{t('common.grains')}</option>
                            <option value="pulses">{t('common.pulses')}</option>
                          </select>
                        </div>
                        {errors.productCategory && (
                          <span className="enquiry-error-msg">{errors.productCategory}</span>
                        )}
                      </div>

                      {/* 2. Sub Category (Dynamic based on Category) */}
                      <div className="col-md-6">
                        <label className="enquiry-label" htmlFor="subCategory">
                          {t('enquiry.sub_category')}<span className="enquiry-required">*</span>
                        </label>
                        <div className={`enquiry-select-wrap${errors.subCategory ? ' enquiry-input-error' : ''}`}>
                          <select
                            className="enquiry-input enquiry-select"
                            id="subCategory"
                            name="subCategory"
                            value={formData.subCategory}
                            onChange={handleChange}
                            disabled={!formData.productCategory}
                          >
                            <option value="" disabled>
                              {!formData.productCategory
                                ? t('enquiry.select_category_first', 'Select Category First')
                                : t('enquiry.select_sub_category')}
                            </option>
                            {availableSubCategories.map((sub) => (
                              <option key={sub.id} value={sub.id}>
                                {sub.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        {errors.subCategory && (
                          <span className="enquiry-error-msg">{errors.subCategory}</span>
                        )}
                      </div>

                      {/* 3. Variety (Dynamic based on Sub Category) */}
                      <div className="col-md-6">
                        <label className="enquiry-label" htmlFor="variety">
                          {t('enquiry.variety')}<span className="enquiry-required">*</span>
                        </label>
                        <div className={`enquiry-select-wrap${errors.variety ? ' enquiry-input-error' : ''}`}>
                          <select
                            className="enquiry-input enquiry-select"
                            id="variety"
                            name="variety"
                            value={formData.variety}
                            onChange={handleChange}
                            disabled={!formData.subCategory}
                          >
                            <option value="" disabled>
                              {!formData.subCategory
                                ? t('enquiry.select_subcategory_first', 'Select Sub-Category First')
                                : t('enquiry.select_variety')}
                            </option>
                            {availableVarieties.map((v) => (
                              <option key={v} value={v}>
                                {v}
                              </option>
                            ))}
                            <option value="Standard / Local">{t('common.standard_variety', 'Standard / Local')}</option>
                          </select>
                        </div>
                        {errors.variety && (
                          <span className="enquiry-error-msg">{errors.variety}</span>
                        )}
                      </div>

                      {/* 4. Grade */}
                      <div className="col-md-6">
                        <label className="enquiry-label" htmlFor="grade">{t('enquiry.grade')}</label>
                        <div className="enquiry-select-wrap">
                          <select
                            className="enquiry-input enquiry-select"
                            id="grade"
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                          >
                            <option value="" disabled>{t('enquiry.enter_grade')}</option>
                            <option value="A">Grade A (Premium Export Quality)</option>
                            <option value="B">Grade B (Good Market Quality)</option>
                            <option value="C">Grade C (Standard Quality)</option>
                          </select>
                        </div>
                      </div>

                      {/* 5. Location */}
                      <div className="col-md-6">
                        <label className="enquiry-label" htmlFor="location">
                          {t('enquiry.location')}<span className="enquiry-required">*</span>
                        </label>
                        <div className={`enquiry-select-wrap${errors.location ? ' enquiry-input-error' : ''}`}>
                          <select
                            className="enquiry-input enquiry-select"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                          >
                            <option value="" disabled>{t('enquiry.enter_location')}</option>
                            <option value="delhi">{t('common.delhi')}</option>
                            <option value="mumbai">{t('common.mumbai')}</option>
                            <option value="pune">{t('common.pune')}</option>
                            <option value="kadambagachi">{t('common.kadambagachi')}</option>
                            <option value="indore">Indore, MP</option>
                            <option value="nagpur">Nagpur, MH</option>
                            <option value="nashik">Nashik, MH</option>
                            <option value="jaipur">Jaipur, RJ</option>
                          </select>
                        </div>
                        {errors.location && (
                          <span className="enquiry-error-msg">{errors.location}</span>
                        )}
                      </div>

                      {/* 6. Quantity & Unit */}
                      <div className="col-md-6">
                        <label className="enquiry-label" htmlFor="quantity">
                          {t('enquiry.quantity')}<span className="enquiry-required">*</span>
                        </label>
                        <div className={`enquiry-quantity-wrap${errors.quantity ? ' enquiry-input-error' : ''}`}>
                          <input
                            type="number"
                            className="enquiry-input enquiry-quantity-input"
                            id="quantity"
                            name="quantity"
                            placeholder={t('enquiry.enter_quantity')}
                            min="0.1"
                            step="any"
                            value={formData.quantity}
                            onChange={handleChange}
                          />
                          <div className="enquiry-quantity-unit">
                            <select
                              className="enquiry-unit-select"
                              name="quantityUnit"
                              aria-label="Quantity unit"
                              value={formData.quantityUnit}
                              onChange={handleChange}
                            >
                              <option value="kg">{t('common.kg')}</option>
                              <option value="quintal">{t('common.quintal')}</option>
                              <option value="ton">{t('common.ton')}</option>
                            </select>
                          </div>
                        </div>
                        {errors.quantity && (
                          <span className="enquiry-error-msg">{errors.quantity}</span>
                        )}
                      </div>

                      {/* 7. Expected Price */}
                      <div className="col-md-6">
                        <label className="enquiry-label" htmlFor="expectedPrice">
                          {t('enquiry.expected_price')} ({t(`common.${formData.quantityUnit}`, formData.quantityUnit)})<span className="enquiry-required">*</span>
                        </label>
                        <div className={`enquiry-select-wrap${errors.expectedPrice ? ' enquiry-input-error' : ''}`}>
                          <select
                            className="enquiry-input enquiry-select"
                            id="expectedPrice"
                            name="expectedPrice"
                            value={formData.expectedPrice}
                            onChange={handleChange}
                          >
                            <option value="" disabled>
                              {t('enquiry.expected_price')} ({t(`common.${formData.quantityUnit}`, formData.quantityUnit)})
                            </option>
                            {currentPriceOptions.expected.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        {errors.expectedPrice && (
                          <span className="enquiry-error-msg">{errors.expectedPrice}</span>
                        )}
                      </div>

                      {/* 8. Minimum Expected Price */}
                      <div className="col-md-6">
                        <label className="enquiry-label" htmlFor="minExpectedPrice">
                          {t('enquiry.min_expected_price')} ({t(`common.${formData.quantityUnit}`, formData.quantityUnit)})
                        </label>
                        <div className="enquiry-select-wrap">
                          <select
                            className="enquiry-input enquiry-select"
                            id="minExpectedPrice"
                            name="minExpectedPrice"
                            value={formData.minExpectedPrice}
                            onChange={handleChange}
                          >
                            <option value="" disabled>
                              {t('enquiry.min_expected_price')} ({t(`common.${formData.quantityUnit}`, formData.quantityUnit)})
                            </option>
                            {currentPriceOptions.min.map((opt) => (
                              <option key={opt.value} value={opt.value}>
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* 9. Harvesting Date */}
                      <div className="col-12">
                        <label className="enquiry-label" htmlFor="harvestingDate">
                          {t('enquiry.harvesting_date')}
                        </label>
                        <div className="enquiry-date-wrap">
                          <input
                            type="date"
                            className="enquiry-input enquiry-date-input"
                            id="harvestingDate"
                            name="harvestingDate"
                            value={formData.harvestingDate}
                            onChange={handleChange}
                          />
                          <span className="enquiry-date-icon" aria-hidden="true">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                              <line x1="16" y1="2" x2="16" y2="6" />
                              <line x1="8" y1="2" x2="8" y2="6" />
                              <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                          </span>
                        </div>
                      </div>

                      {/* 10. Additional Notes */}
                      <div className="col-12">
                        <label className="enquiry-label" htmlFor="additionalNotes">
                          {t('enquiry.additional_notes')}
                        </label>
                        <textarea
                          className="enquiry-input enquiry-textarea"
                          id="additionalNotes"
                          name="additionalNotes"
                          rows="4"
                          placeholder={t('enquiry.notes_placeholder')}
                          value={formData.additionalNotes}
                          onChange={handleChange}
                        />
                      </div>

                      {/* 11. Photos Upload */}
                      <div className="col-12">
                        <label className="enquiry-upload-box" htmlFor="photos">
                          <input
                            type="file"
                            className="enquiry-upload-input"
                            id="photos"
                            name="photos"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                          />
                          <span className="enquiry-upload-icon" aria-hidden="true">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.9-1.1A4 4 0 1 1 17 18H7" />
                              <polyline points="16 13 12 9 8 13" />
                              <line x1="12" y1="9" x2="12" y2="21" />
                            </svg>
                          </span>
                          <span className="enquiry-upload-text">
                            {selectedFiles.length > 0
                              ? `📷 ${selectedFiles.length} photo(s) selected`
                              : t('enquiry.add_photos')}
                          </span>
                        </label>
                      </div>

                      {/* 12. Submit Button */}
                      <div className="col-12">
                        <button type="submit" className="btn-create-enquiry" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting Enquiry...' : t('enquiry.create_enquiry')}
                        </button>
                      </div>

                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Enquiry;
