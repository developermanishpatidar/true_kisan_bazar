import React, { useState } from 'react'
import Header from '../CommonComponents/Header'
import Footer from '../CommonComponents/Footer';

const Enquiry = () => {
    const [enquiryType, setEnquiryType] = useState('buy');

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
                    <form className="enquiry-form" action="#" method="post" encType="multipart/form-data">

                        <div className="enquiry-type-toggle" role="group" aria-label="Enquiry type">
                        <button type="button" className={`enquiry-type-btn${enquiryType === 'buy' ? ' active' : ''}`} onClick={() => setEnquiryType('buy')}>Buy</button>
                        <button type="button" className={`enquiry-type-btn${enquiryType === 'sell' ? ' active' : ''}`} onClick={() => setEnquiryType('sell')}>Sell</button>
                        <input type="hidden" name="enquiry_type" value={enquiryType} />
                        </div>

                        <div className="row g-3 g-md-4">
                        <div className="col-md-6">
                            <label className="enquiry-label" htmlFor="productCategory">Product Category<span className="enquiry-required">*</span></label>
                            <div className="enquiry-select-wrap">
                            <select className="enquiry-input enquiry-select" id="productCategory" name="product_category" defaultValue="" required>
                                <option value="" disabled>Select Category</option>
                                <option value="fruits">Fruits</option>
                                <option value="vegetables">Vegetables</option>
                                <option value="grains">Grains</option>
                                <option value="pulses">Pulses</option>
                            </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="enquiry-label" htmlFor="subCategory">Sub Category<span className="enquiry-required">*</span></label>
                            <div className="enquiry-select-wrap">
                            <select className="enquiry-input enquiry-select" id="subCategory" name="sub_category" defaultValue="" required>
                                <option value="" disabled>Select Sub Category</option>
                            </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="enquiry-label" htmlFor="variety">Variety / Sub-Sub-Category<span className="enquiry-required">*</span></label>
                            <div className="enquiry-select-wrap">
                            <select className="enquiry-input enquiry-select" id="variety" name="variety" defaultValue="" required>
                                <option value="" disabled>Select Variety</option>
                            </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="enquiry-label" htmlFor="grade">Grade</label>
                            <div className="enquiry-select-wrap">
                            <select className="enquiry-input enquiry-select" id="grade" name="grade" defaultValue="">
                                <option value="" disabled>Enter Grade (e.g. A, B, C)</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="enquiry-label" htmlFor="location">Location<span className="enquiry-required">*</span></label>
                            <div className="enquiry-select-wrap">
                            <select className="enquiry-input enquiry-select" id="location" name="location" defaultValue="" required>
                                <option value="" disabled>Enter location</option>
                                <option value="delhi">Delhi</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="pune">Pune</option>
                                <option value="kadambagachi">Kadambagachi</option>
                            </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="enquiry-label" htmlFor="quantity">Quantity<span className="enquiry-required">*</span></label>
                            <div className="enquiry-quantity-wrap">
                            <input type="number" className="enquiry-input enquiry-quantity-input" id="quantity" name="quantity" placeholder="Enter quantity" min="0" step="any" required />
                            <div className="enquiry-quantity-unit">
                                <select className="enquiry-unit-select" name="quantity_unit" aria-label="Quantity unit" defaultValue="kg">
                                <option value="kg">kg</option>
                                <option value="ton">Ton</option>
                                <option value="quintal">Quintal</option>
                                </select>
                            </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="enquiry-label" htmlFor="expectedPrice">Expected Price<span className="enquiry-required">*</span></label>
                            <div className="enquiry-select-wrap">
                            <select className="enquiry-input enquiry-select" id="expectedPrice" name="expected_price" defaultValue="" required>
                                <option value="" disabled>Expected Price*</option>
                                <option value="10-20">&#8377;10 - &#8377;20</option>
                                <option value="20-50">&#8377;20 - &#8377;50</option>
                                <option value="50+">&#8377;50+</option>
                            </select>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label className="enquiry-label" htmlFor="minExpectedPrice">Minimum Expected Price</label>
                            <div className="enquiry-select-wrap">
                            <select className="enquiry-input enquiry-select" id="minExpectedPrice" name="min_expected_price" defaultValue="">
                                <option value="" disabled>Minimum Expected Price</option>
                                <option value="5-10">&#8377;5 - &#8377;10</option>
                                <option value="10-15">&#8377;10 - &#8377;15</option>
                                <option value="15+">&#8377;15+</option>
                            </select>
                            </div>
                        </div>

                        <div className="col-12">
                            <label className="enquiry-label" htmlFor="harvestingDate">Harvesting Date</label>
                            <div className="enquiry-date-wrap">
                            <input type="date" className="enquiry-input enquiry-date-input" id="harvestingDate" name="harvesting_date" />
                            <span className="enquiry-date-icon" aria-hidden="true">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                                </svg>
                            </span>
                            </div>
                        </div>

                        <div className="col-12">
                            <label className="enquiry-label" htmlFor="additionalNotes">Additional Notes</label>
                            <textarea className="enquiry-input enquiry-textarea" id="additionalNotes" name="additional_notes" rows="4" placeholder="Any additional information..."></textarea>
                        </div>

                        <div className="col-12">
                            <label className="enquiry-upload-box" htmlFor="photos">
                            <input type="file" className="enquiry-upload-input" id="photos" name="photos" accept="image/*" multiple />
                            <span className="enquiry-upload-icon" aria-hidden="true">
                                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M7 18a4 4 0 0 1 0-8 5 5 0 0 1 9.9-1.1A4 4 0 1 1 17 18H7"/>
                                <polyline points="16 13 12 9 8 13"/>
                                <line x1="12" y1="9" x2="12" y2="21"/>
                                </svg>
                            </span>
                            <span className="enquiry-upload-text">Add Multiple Photos</span>
                            </label>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn-create-enquiry">Create Enquiry</button>
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
  )
}

export default Enquiry;
