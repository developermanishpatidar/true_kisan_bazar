import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../CommonComponents/Header';
import Footer from '../CommonComponents/Footer';
import './Marketplace.css';

// Enquiry Images
import cuminImg from '../assets/images/enquiry-cumin.jpg';
import okraImg from '../assets/images/enquiry-okra.jpg';
import brinjalImg from '../assets/images/enquiry-brinjal.jpg';
import pippaliImg from '../assets/images/enquiry-pippali.jpg';
import potatoImg from '../assets/images/product-yukon-gold.jpg';
import basmatiImg from '../assets/images/product-basmati-rice.jpg';
import sugarImg from '../assets/images/product-sugar-s30.jpg';
import catVegImg from '../assets/images/cat-vegetables.jpg';
import catFruitsImg from '../assets/images/cat-fruits.jpg';
import catSpicesImg from '../assets/images/cat-spices.jpg';
import catPulsesImg from '../assets/images/cat-pulses.jpg';
import catOilseedsImg from '../assets/images/cat-oilseeds.jpg';

// Categories data with icons and subcategories
const CATEGORIES = [
  {
    id: 'all',
    label: 'All',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    subcategories: [],
  },
  {
    id: 'oilseeds',
    label: 'Oilseeds',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    subcategories: [
      'Soybean', 'Mustard (Sarson)', 'Groundnut (Peanut)', 'Sunflower',
      'Sesame (Til)', 'Castor Seed', 'Linseed (Alsi)', 'Niger Seed', 'Safflower (Kardi)'
    ],
  },
  {
    id: 'raw-spices',
    label: 'Raw Spices',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    subcategories: [
      'Dry Ginger (Sonth)', 'Raw Turmeric (Kachi Haldi)', 'Black Pepper', 'Coriander Whole',
      'Fennel Raw (Saunf)', 'Fenugreek (Methi)', 'Ajwain Raw', 'Star Anise', 'Nutmeg'
    ],
  },
  {
    id: 'fruits',
    label: 'Fruits',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a4 4 0 0 0-4 4c0 3 4 5 4 5s4-2 4-5a4 4 0 0 0-4-4z" />
        <path d="M7 11c-2.5 0-5 2.5-5 6a6 6 0 0 0 12 0c0-3.5-2.5-6-5-6" />
        <path d="M17 11c2.5 0 5 2.5 5 6a6 6 0 0 1-12 0" />
      </svg>
    ),
    subcategories: [
      'Mango', 'Banana', 'Apple', 'Pomegranate (Anar)', 'Orange (Santra)',
      'Sweet Lime (Mosambi)', 'Papaya', 'Guava', 'Grapes', 'Watermelon', 'Dragon Fruit'
    ],
  },
  {
    id: 'vegetables',
    label: 'Vegetables',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 12h18M3 6h18M3 18h18" />
        <circle cx="7" cy="12" r="3" />
        <circle cx="17" cy="12" r="3" />
      </svg>
    ),
    // Exactly from Image 2
    subcategories: [
      'Tomato', 'Brinjal (Eggplant)', 'Carrot', 'Spinach', 'Okra (Lady Finger)', 'Beans', 'Peas',
      'Potato', 'Cabbage', 'Radish', 'Pumpkin', 'Bitter Gourd', 'Drumstick', 'Sweet Potato',
      'Onion', 'Cauliflower', 'Chilli', 'Beetroot', 'Cucumber', 'Capsicum', 'Amaranth Leaves'
    ],
  },
  {
    id: 'cash-crops',
    label: 'Cash Crops',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 8h6M9 12h4M9 16l6-4" />
      </svg>
    ),
    subcategories: [
      'Cotton (Kapas)', 'Sugarcane', 'Tobacco', 'Tea Leaves',
      'Coffee Beans', 'Jute', 'Rubber', 'Arecanut (Supari)'
    ],
  },
  {
    id: 'pulses',
    label: 'Pulses and...',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="8" cy="8" r="4" />
        <circle cx="16" cy="8" r="4" />
        <circle cx="12" cy="16" r="4" />
      </svg>
    ),
    subcategories: [
      'Gram (Chana)', 'Pigeon Pea (Tur/Arhar)', 'Green Gram (Moong)', 'Black Gram (Urad)',
      'Lentil (Masoor)', 'Moth Beans', 'Horse Gram (Kulthi)', 'Cowpea (Lobia)'
    ],
  },
  {
    id: 'flower',
    label: 'Flower',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4z" />
        <path d="M22 12a4 4 0 0 0-4-4 4 4 0 0 0-4 4 4 4 0 0 0 4 4 4 4 0 0 0 4-4z" />
        <path d="M12 22a4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-4 4 4 4 0 0 0 4 4z" />
        <path d="M2 12a4 4 0 0 0 4 4 4 4 0 0 0 4-4 4 4 0 0 0-4-4 4 4 0 0 0-4 4z" />
      </svg>
    ),
    subcategories: [
      'Marigold (Genda)', 'Rose (Gulab)', 'Jasmine (Mogra)', 'Chrysanthemum (Sevanti)',
      'Tuberose (Rajnigandha)', 'Gerbera', 'Gladiolus', 'Carnation'
    ],
  },
  {
    id: 'spices',
    label: 'Spices',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    subcategories: [
      'Cumin (Jeera)', 'Long Pepper (Pippali)', 'Cardamom (Elaichi)', 'Cloves (Laung)',
      'Cinnamon (Dalchini)', 'Bay Leaf (Tejpatta)', 'Red Chilli Dry', 'Asafoetida (Hing)'
    ],
  },
  {
    id: 'hydroponic',
    label: 'Hydroponic Product',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <path d="M6 14V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v8" />
        <path d="M14 14V6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v8" />
      </svg>
    ),
    subcategories: [
      'Hydroponic Lettuce (Romaine)', 'Baby Spinach', 'Cherry Tomatoes', 'Bok Choy',
      'Kale (Curly/Lacinato)', 'Basil (Sweet/Thai)', 'Microgreens', 'Bell Peppers (Colored)'
    ],
  },
  {
    id: 'more',
    label: 'More',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="8" cy="12" r="1.5" />
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="16" cy="12" r="1.5" />
      </svg>
    ),
    subcategories: [
      'Organic Fertilizer', 'Animal Feed / Fodder', 'Medicinal Plants',
      'Dry Fruits & Nuts', 'Forest Produce', 'Planting Seeds'
    ],
  },
];

// Initial mock enquiries data (Matching items in Reference Image 1 & 2)
const MOCK_ENQUIRIES = [
  {
    id: 1,
    title: 'Cumin',
    type: 'BUY',
    location: 'Odisha',
    price: '₹185.00/kg',
    quantity: '7000Kg',
    category: 'spices',
    subCategory: 'Cumin White Cumin',
    image: cuminImg,
    verified: true,
  },
  {
    id: 2,
    title: 'Okra (Lady Finger)',
    type: 'SELL',
    location: 'Ahmed Nagar Urf Touli Tehsil Anoopshahr',
    price: '₹25.00/kg',
    quantity: '100Kg',
    category: 'vegetables',
    subCategory: 'Okra (Lady Finger) Radhika',
    image: okraImg,
    verified: true,
  },
  {
    id: 3,
    title: 'Brinjal (Eggplant)',
    type: 'SELL',
    location: 'Ambikapur Chhattisgarh',
    price: '₹30.00/kg',
    quantity: '300Kg',
    category: 'vegetables',
    subCategory: 'Brinjal (Eggplant) Long Brinjal',
    image: brinjalImg,
    verified: true,
  },
  {
    id: 4,
    title: 'Brinjal (Eggplant)',
    type: 'SELL',
    location: 'Surguja Ambikapur',
    price: '₹25.00/kg',
    quantity: '200Kg',
    category: 'vegetables',
    subCategory: 'Brinjal (Eggplant) Long Brinjal',
    image: brinjalImg,
    verified: true,
  },
  {
    id: 5,
    title: 'Long Pepper (Pippali)',
    type: 'SELL',
    location: 'Anjangaon Surji',
    price: '₹900.00/kg',
    quantity: '500Kg',
    category: 'spices',
    subCategory: 'Long Pepper (Pippali) Indian Long Pepper',
    image: pippaliImg,
    verified: true,
  },
  // Row 2
  {
    id: 6,
    title: 'Yukon Gold Potato',
    type: 'SELL',
    location: 'Shajapur, Madhya Pradesh',
    price: '₹22.00/kg',
    quantity: '5000Kg',
    category: 'vegetables',
    subCategory: 'Potato Yukon Gold',
    image: potatoImg,
    verified: true,
  },
  {
    id: 7,
    title: 'Basmati Rice',
    type: 'BUY',
    location: 'Karnal, Haryana',
    price: '₹82.00/kg',
    quantity: '12000Kg',
    category: 'pulses',
    subCategory: 'Rice 1121 Steam Basmati',
    image: basmatiImg,
    verified: true,
  },
  {
    id: 8,
    title: 'S-30 White Sugar',
    type: 'BUY',
    location: 'Kolhapur, Maharashtra',
    price: '₹38.50/kg',
    quantity: '25000Kg',
    category: 'cash-crops',
    subCategory: 'Sweeteners Cane Sugar S-30',
    image: sugarImg,
    verified: true,
  },
  {
    id: 9,
    title: 'Red Tomato',
    type: 'SELL',
    location: 'Nashik, Maharashtra',
    price: '₹18.00/kg',
    quantity: '4000Kg',
    category: 'vegetables',
    subCategory: 'Tomato Hybrid Abhinav',
    image: catVegImg,
    verified: true,
  },
  {
    id: 10,
    title: 'Mustard Seeds (Sarson)',
    type: 'BUY',
    location: 'Bharatpur, Rajasthan',
    price: '₹56.00/kg',
    quantity: '15000Kg',
    category: 'oilseeds',
    subCategory: 'Mustard Black Mustard',
    image: catOilseedsImg,
    verified: true,
  },
  // Row 3
  {
    id: 11,
    title: 'Pomegranate Super Bhagwa',
    type: 'SELL',
    location: 'Solapur, Maharashtra',
    price: '₹120.00/kg',
    quantity: '8000Kg',
    category: 'fruits',
    subCategory: 'Pomegranate Bhagwa Export',
    image: catFruitsImg,
    verified: true,
  },
  {
    id: 12,
    title: 'Green Chilli (Hari Mirch)',
    type: 'SELL',
    location: 'Guntur, Andhra Pradesh',
    price: '₹35.00/kg',
    quantity: '1200Kg',
    category: 'vegetables',
    subCategory: 'Chilli Guntur S4',
    image: catSpicesImg,
    verified: true,
  },
  {
    id: 13,
    title: 'Chana (Gram/Chickpea)',
    type: 'BUY',
    location: 'Indore, Madhya Pradesh',
    price: '₹62.00/kg',
    quantity: '10000Kg',
    category: 'pulses',
    subCategory: 'Gram Desi Chana Bold',
    image: catPulsesImg,
    verified: true,
  },
  {
    id: 14,
    title: 'Soybean Yellow',
    type: 'SELL',
    location: 'Ujjain, Madhya Pradesh',
    price: '₹47.00/kg',
    quantity: '9000Kg',
    category: 'oilseeds',
    subCategory: 'Soybean JS 335 Variety',
    image: catOilseedsImg,
    verified: true,
  },
  {
    id: 15,
    title: 'Dry Turmeric Fingers',
    type: 'SELL',
    location: 'Nizamabad, Telangana',
    price: '₹135.00/kg',
    quantity: '3500Kg',
    category: 'raw-spices',
    subCategory: 'Turmeric Nizamabad Double Polished',
    image: catSpicesImg,
    verified: true,
  },
];

const ITEMS_PER_PAGE = 10;

const highlightMatch = (text, query) => {
  if (!query) return text;
  const qLower = query.toLowerCase();
  const textLower = text.toLowerCase();
  const startIndex = textLower.indexOf(qLower);
  if (startIndex === -1) return text;

  const before = text.slice(0, startIndex);
  const match = text.slice(startIndex, startIndex + query.length);
  const after = text.slice(startIndex + query.length);

  return (
    <>
      {before}
      <mark className="tkb-search-highlight">{match}</mark>
      {after}
    </>
  );
};

const Marketplace = () => {
  // Search input and interactive suggestions state
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSearch, setActiveSearch] = useState('');
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const searchContainerRef = useRef(null);

  // Category filter
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Subcategory model state
  const [subcategoryModalOpen, setSubcategoryModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // Type filter: 'all' | 'BUY' | 'SELL'
  const [roleType, setRoleType] = useState('all');

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Quick enquiry detail preview modal
  const [previewEnquiry, setPreviewEnquiry] = useState(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setSuggestionsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Real-time suggested list based on active search input
  const suggestions = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return [];

    const results = [];
    const seen = new Set();

    // 1. Search in Enquiry Titles
    MOCK_ENQUIRIES.forEach((item) => {
      const titleLower = item.title.toLowerCase();
      if (titleLower.includes(q) && !seen.has(titleLower)) {
        seen.add(titleLower);
        results.push({
          id: `enq-${item.id}`,
          type: 'enquiry',
          tag: 'Enquiry',
          label: item.title,
          subtext: `${item.location} · ${item.price} · ${item.type}`,
          value: item.title,
          category: item.category,
        });
      }
    });

    // 2. Search in Crop Subcategories / Varieties
    CATEGORIES.forEach((cat) => {
      if (cat.subcategories) {
        cat.subcategories.forEach((sub) => {
          const subLower = sub.toLowerCase();
          if (subLower.includes(q) && !seen.has(subLower)) {
            seen.add(subLower);
            results.push({
              id: `sub-${cat.id}-${sub}`,
              type: 'crop',
              tag: 'Crop',
              label: sub,
              subtext: `In ${cat.label}`,
              value: sub,
              categoryId: cat.id,
              subCategory: sub,
            });
          }
        });
      }
    });

    // 3. Search in Locations
    MOCK_ENQUIRIES.forEach((item) => {
      const locLower = item.location.toLowerCase();
      if (locLower.includes(q) && !seen.has(locLower)) {
        seen.add(locLower);
        results.push({
          id: `loc-${item.id}`,
          type: 'location',
          tag: 'Location',
          label: item.location,
          subtext: `Marketplace location`,
          value: item.location,
        });
      }
    });

    // 4. Search in Categories
    CATEGORIES.forEach((cat) => {
      if (cat.id !== 'all' && cat.label.toLowerCase().includes(q) && !seen.has(cat.label.toLowerCase())) {
        seen.add(cat.label.toLowerCase());
        results.push({
          id: `cat-${cat.id}`,
          type: 'category',
          tag: 'Category',
          label: cat.label,
          subtext: `${cat.subcategories ? cat.subcategories.length : 0} crop varieties`,
          value: cat.label,
          categoryId: cat.id,
        });
      }
    });

    return results.slice(0, 8);
  }, [searchTerm]);

  // Real-time search handler on basis of onChange event
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setActiveSearch(value.trim()); // Real-time filtering on keystroke
    setActiveSuggestionIndex(-1);
    setSuggestionsOpen(value.trim().length > 0);
    setCurrentPage(1);
  };

  // Clear search input
  const handleClearSearch = () => {
    setSearchTerm('');
    setActiveSearch('');
    setSuggestionsOpen(false);
    setActiveSuggestionIndex(-1);
    setCurrentPage(1);
  };

  // Handle click on suggestion item
  const handleSelectSuggestion = (suggestion) => {
    setSearchTerm(suggestion.value);
    setActiveSearch(suggestion.value);
    setSuggestionsOpen(false);
    setActiveSuggestionIndex(-1);
    setCurrentPage(1);

    if (suggestion.type === 'category' && suggestion.categoryId) {
      setSelectedCategory(suggestion.categoryId);
      setSelectedSubcategory(null);
    } else if (suggestion.type === 'crop' && suggestion.subCategory) {
      setSelectedCategory(suggestion.categoryId);
      setSelectedSubcategory(suggestion.subCategory);
    }
  };

  // Keyboard navigation for search suggestions (ArrowUp, ArrowDown, Enter, Escape)
  const handleSearchKeyDown = (e) => {
    if (!suggestionsOpen || suggestions.length === 0) {
      if (e.key === 'Enter') {
        e.preventDefault();
        setActiveSearch(searchTerm.trim());
        setSuggestionsOpen(false);
        setCurrentPage(1);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestionIndex((prev) => (prev > 0 ? prev - 1 : suggestions.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (activeSuggestionIndex >= 0 && activeSuggestionIndex < suggestions.length) {
        handleSelectSuggestion(suggestions[activeSuggestionIndex]);
      } else {
        setActiveSearch(searchTerm.trim());
        setSuggestionsOpen(false);
        setCurrentPage(1);
      }
    } else if (e.key === 'Escape') {
      setSuggestionsOpen(false);
    }
  };

  const hoverTimeoutRef = useRef(null);

  // Clear pending timeout for hiding the subcategories panel
  const cancelHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // When hovering on a category tile, show its subcategories immediately
  const handleCategoryMouseEnter = (category) => {
    cancelHoverTimeout();

    if (category.id === 'all' || !category.subcategories || category.subcategories.length === 0) {
      hoverTimeoutRef.current = setTimeout(() => {
        setSubcategoryModalOpen(false);
      }, 150);
      return;
    }

    setModalCategory(category);
    setSubcategoryModalOpen(true);
  };

  // When mouse leaves category area, close after brief delay
  const handleCategoriesAreaMouseLeave = () => {
    cancelHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setSubcategoryModalOpen(false);
    }, 280);
  };

  // When mouse enters category area or subcategory panel, keep it open
  const handleCategoriesAreaMouseEnter = () => {
    cancelHoverTimeout();
  };

  // Handle category tile click (selects category and shows subcategories)
  const handleCategoryClick = (category) => {
    cancelHoverTimeout();

    if (category.id === 'all') {
      setSelectedCategory('all');
      setSelectedSubcategory(null);
      setSubcategoryModalOpen(false);
      setCurrentPage(1);
      return;
    }

    setSelectedCategory(category.id);
    setSelectedSubcategory(null);
    setCurrentPage(1);

    if (category.subcategories && category.subcategories.length > 0) {
      setModalCategory(category);
      setSubcategoryModalOpen(true);
    } else {
      setSubcategoryModalOpen(false);
    }
  };

  // Handle subcategory selection
  const handleSelectSubcategory = (sub) => {
    setSelectedCategory(modalCategory.id);
    setSelectedSubcategory(sub);
    setSubcategoryModalOpen(false);
    setCurrentPage(1);
  };

  // Clear specific subcategory filter
  const handleClearSubcategory = () => {
    setSelectedSubcategory(null);
  };

  // Search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setActiveSearch(searchTerm.trim());
    setCurrentPage(1);
  };

  // Filtered enquiries
  const filteredEnquiries = useMemo(() => {
    return MOCK_ENQUIRIES.filter((item) => {
      // Type filter (All, Buyer, Seller)
      if (roleType === 'buyer' && item.type !== 'BUY') return false;
      if (roleType === 'seller' && item.type !== 'SELL') return false;

      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;

      // Subcategory filter
      if (selectedSubcategory) {
        const subLower = selectedSubcategory.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(subLower);
        const matchSub = item.subCategory.toLowerCase().includes(subLower);
        if (!matchTitle && !matchSub) return false;
      }

      // Search query filter
      if (activeSearch) {
        const q = activeSearch.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(q);
        const matchLoc = item.location.toLowerCase().includes(q);
        const matchSub = item.subCategory.toLowerCase().includes(q);
        const matchCat = item.category.toLowerCase().includes(q);
        if (!matchTitle && !matchLoc && !matchSub && !matchCat) return false;
      }

      return true;
    });
  }, [roleType, selectedCategory, selectedSubcategory, activeSearch]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredEnquiries.length / ITEMS_PER_PAGE) || 1;
  const paginatedEnquiries = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEnquiries.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredEnquiries, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 180, behavior: 'smooth' });
    }
  };

  return (
    <div className="tkb-marketplace-root">
      <Header />

      <main className="tkb-market-main">
        <div className="container-lg">
          {/* ========================================================
              1. SEARCH ENQUIRIES BAR (Image 1 & 2)
              ======================================================== */}
          <section className="tkb-market-search-section">
            <div className="tkb-market-search-container" ref={searchContainerRef}>
              <form className="tkb-market-search-form" onSubmit={handleSearchSubmit}>
                <div className="tkb-market-search-wrap">
                  <svg className="tkb-market-search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input
                    type="text"
                    className="tkb-market-search-input"
                    placeholder="Search crop, variety, location, category..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onFocus={() => {
                      if (searchTerm.trim().length > 0) {
                        setSuggestionsOpen(true);
                      }
                    }}
                    onKeyDown={handleSearchKeyDown}
                    aria-label="Search enquiries"
                    autoComplete="off"
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      className="tkb-market-search-clear-btn"
                      onClick={handleClearSearch}
                      aria-label="Clear search"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  )}
                  <button type="submit" className="tkb-market-search-btn" aria-label="Submit search">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                </div>
              </form>

              {/* Suggestions Dropdown List Below Search Box */}
              {suggestionsOpen && searchTerm.trim().length > 0 && (
                <div className="tkb-search-suggestions-dropdown" role="listbox">
                  {suggestions.length > 0 ? (
                    <>
                      <div className="tkb-suggestions-header">
                        <span>Suggested Matches ({suggestions.length})</span>
                        <span className="tkb-suggestions-hint">Click or press Enter to filter</span>
                      </div>
                      <ul className="tkb-suggestions-list">
                        {suggestions.map((item, index) => {
                          const isSelected = index === activeSuggestionIndex;
                          return (
                            <li
                              key={item.id}
                              className={`tkb-suggestion-item${isSelected ? ' is-active' : ''}`}
                              onClick={() => handleSelectSuggestion(item)}
                              onMouseEnter={() => setActiveSuggestionIndex(index)}
                              role="option"
                              aria-selected={isSelected}
                            >
                              <div className="tkb-suggestion-icon-wrap">
                                {item.type === 'location' ? (
                                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 21s-7-4.4-7-11a7 7 0 1 1 14 0c0 6.6-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
                                ) : item.type === 'category' ? (
                                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/></svg>
                                ) : item.type === 'crop' ? (
                                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M4.9 6.5l2.1 2.1M17 15.4l2.1 2.1M3 12h3M18 12h3M4.9 17.5 7 15.4M17 8.6l2.1-2.1"/></svg>
                                ) : (
                                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                                )}
                              </div>
                              <div className="tkb-suggestion-info">
                                <div className="tkb-suggestion-title-row">
                                  <span className="tkb-suggestion-label">{highlightMatch(item.label, searchTerm)}</span>
                                  <span className={`tkb-suggestion-tag tkb-tag-${item.type}`}>{item.tag}</span>
                                </div>
                                {item.subtext && (
                                  <span className="tkb-suggestion-subtext">{item.subtext}</span>
                                )}
                              </div>
                              <span className="tkb-suggestion-arrow">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <div className="tkb-suggestions-empty">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                      </svg>
                      <p>No suggestions found for "<strong>{searchTerm}</strong>"</p>
                      <span>Showing all matching results in list below</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* ========================================================
              2. CATEGORIES ROW & HOVER SUBCATEGORIES
              ======================================================== */}
          <section
            className="tkb-market-categories-section"
            onMouseEnter={handleCategoriesAreaMouseEnter}
            onMouseLeave={handleCategoriesAreaMouseLeave}
          >
            <div className="tkb-market-categories-scroll">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                const isHovered = subcategoryModalOpen && modalCategory?.id === cat.id;
                return (
                  <button
                    type="button"
                    key={cat.id}
                    className={`tkb-cat-tile${isActive ? ' is-active' : ''}${isHovered ? ' is-hovered' : ''}`}
                    onClick={() => handleCategoryClick(cat)}
                    onMouseEnter={() => handleCategoryMouseEnter(cat)}
                    aria-expanded={isHovered}
                  >
                    <div className="tkb-cat-icon">{cat.icon}</div>
                    <span className="tkb-cat-label">{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Subcategory Pill Filter Indicator */}
            {selectedSubcategory && (
              <div className="tkb-active-filter-bar">
                <span>Filter: <strong>{selectedSubcategory}</strong></span>
                <button
                  type="button"
                  className="tkb-clear-filter-btn"
                  onClick={handleClearSubcategory}
                  aria-label="Clear subcategory filter"
                >
                  ✕ Clear Filter
                </button>
              </div>
            )}

            {/* ========================================================
                3. SUBCATEGORIES PANEL (Shows on Hover & Click)
                ======================================================== */}
            {subcategoryModalOpen && modalCategory && modalCategory.subcategories && modalCategory.subcategories.length > 0 && (
              <div
                className="tkb-subcat-modal-panel"
                role="region"
                aria-label={`${modalCategory.label} subcategories`}
                onMouseEnter={handleCategoriesAreaMouseEnter}
                onMouseLeave={handleCategoriesAreaMouseLeave}
              >
                <div className="tkb-subcat-header">
                  <div className="tkb-subcat-title-wrap">
                    <span className="tkb-subcat-header-label">{modalCategory.label}</span>
                    <span className="tkb-subcat-count-badge">{modalCategory.subcategories.length} varieties</span>
                  </div>
                  <div className="tkb-subcat-header-actions">
                    <button
                      type="button"
                      className="tkb-subcat-select-all-btn"
                      onClick={() => {
                        setSelectedCategory(modalCategory.id);
                        setSelectedSubcategory(null);
                        setSubcategoryModalOpen(false);
                        setCurrentPage(1);
                      }}
                    >
                      View All {modalCategory.label}
                    </button>
                    <button
                      type="button"
                      className="tkb-subcat-close-btn"
                      onClick={() => setSubcategoryModalOpen(false)}
                      aria-label="Close subcategories"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                <div className="tkb-subcat-grid">
                  {modalCategory.subcategories.map((sub, idx) => (
                    <button
                      type="button"
                      key={idx}
                      className={`tkb-subcat-item${selectedSubcategory === sub ? ' is-selected' : ''}`}
                      onClick={() => handleSelectSubcategory(sub)}
                    >
                      <span className="tkb-subcat-bullet" aria-hidden="true">›</span>
                      <span>{sub}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* ========================================================
              4. ROLE TYPE FILTER PILLS (All Types, Buyer, Seller) (Image 1)
              ======================================================== */}
          <section className="tkb-market-types-section">
            <div className="tkb-types-pills" role="tablist">
              <button
                type="button"
                role="tab"
                aria-selected={roleType === 'all'}
                className={`tkb-type-pill${roleType === 'all' ? ' is-active' : ''}`}
                onClick={() => { setRoleType('all'); setCurrentPage(1); }}
              >
                All Types
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={roleType === 'buyer'}
                className={`tkb-type-pill${roleType === 'buyer' ? ' is-active' : ''}`}
                onClick={() => { setRoleType('buyer'); setCurrentPage(1); }}
              >
                Buyer
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={roleType === 'seller'}
                className={`tkb-type-pill${roleType === 'seller' ? ' is-active' : ''}`}
                onClick={() => { setRoleType('seller'); setCurrentPage(1); }}
              >
                Seller
              </button>
            </div>
          </section>

          {/* ========================================================
              5. ENQUIRIES / PRODUCT CARDS GRID (5 per row on desktop)
              ======================================================== */}
          <section className="tkb-market-grid-section">
            {paginatedEnquiries.length === 0 ? (
              <div className="tkb-market-empty">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <h3>No crop enquiries found</h3>
                <p>Try searching for another commodity, changing your category or clearing the filters.</p>
                <button
                  type="button"
                  className="tkb-btn-reset-filters"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedSubcategory(null);
                    setRoleType('all');
                    setSearchTerm('');
                    setActiveSearch('');
                    setCurrentPage(1);
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="tkb-enquiry-grid">
                {paginatedEnquiries.map((enq) => {
                  const isBuy = enq.type === 'BUY';
                  return (
                    <div
                      className="tkb-enquiry-card"
                      key={enq.id}
                      onClick={() => setPreviewEnquiry(enq)}
                    >
                      {/* Image Wrap */}
                      <div className="tkb-enquiry-img-wrap">
                        {enq.verified && (
                          <div className="tkb-verified-badge" title="Verified Trade Listing">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                            <span>verified</span>
                          </div>
                        )}
                        <img
                          src={enq.image}
                          alt={enq.title}
                          className="tkb-enquiry-img"
                          loading="lazy"
                        />
                      </div>

                      {/* Header Row: Crop Title & BUY/SELL Badge */}
                      <div className="tkb-enquiry-card-body">
                        <div className="tkb-enquiry-title-row">
                          <h3 className="tkb-enquiry-title">{enq.title}</h3>
                          <span className={`tkb-enquiry-type-tag ${isBuy ? 'is-buy' : 'is-sell'}`}>
                            {enq.type}
                          </span>
                        </div>

                        {/* Location Row */}
                        <div className="tkb-enquiry-location-row">
                          <svg className="tkb-enquiry-loc-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                            <path d="M12 21s7-7.2 7-11.2A7 7 0 0 0 5 9.8C5 13.8 12 21 12 21z" />
                            <circle cx="12" cy="10" r="2.5" />
                          </svg>
                          <span className="tkb-enquiry-location">{enq.location}</span>
                        </div>

                        {/* Price & Quantity Grid Box */}
                        <div className="tkb-enquiry-meta-box">
                          <div className="tkb-meta-col">
                            <div className="tkb-meta-head">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M10 7h4M10 11h3M10 15l4-4" />
                              </svg>
                              <span>Price</span>
                            </div>
                            <span className="tkb-meta-val tkb-val-price">{enq.price}</span>
                          </div>

                          <div className="tkb-meta-col">
                            <div className="tkb-meta-head">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <path d="M3 9h18M9 21V9" />
                              </svg>
                              <span>Quantity</span>
                            </div>
                            <span className="tkb-meta-val">{enq.quantity}</span>
                          </div>
                        </div>

                        {/* Sub Category Row */}
                        <div className="tkb-enquiry-subcat-row">
                          <div className="tkb-subcat-meta-head">
                            <span className="tkb-subcat-diamond">◆</span>
                            <span>Sub Category</span>
                          </div>
                          <span className="tkb-subcat-val">{enq.subCategory}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          {/* ========================================================
              6. PAGINATION
              ======================================================== */}
          {filteredEnquiries.length > 0 && (
            <section className="tkb-market-pagination-section">
              <div className="tkb-market-pagination-info">
                Showing {Math.min((currentPage - 1) * ITEMS_PER_PAGE + 1, filteredEnquiries.length)} -{' '}
                {Math.min(currentPage * ITEMS_PER_PAGE, filteredEnquiries.length)} of {filteredEnquiries.length} enquiries
              </div>

              <div className="tkb-market-pagination-controls">
                <button
                  type="button"
                  className="tkb-page-btn tkb-page-prev"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-label="Previous page"
                >
                  ‹ Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    type="button"
                    key={page}
                    className={`tkb-page-btn tkb-page-num${currentPage === page ? ' is-active' : ''}`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}

                <button
                  type="button"
                  className="tkb-page-btn tkb-page-next"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  aria-label="Next page"
                >
                  Next ›
                </button>
              </div>
            </section>
          )}
        </div>
      </main>

      {/* ========================================================
          7. QUICK ENQUIRY DETAIL MODAL
          ======================================================== */}
      {previewEnquiry && (
        <div className="tkb-enq-modal-overlay" onClick={() => setPreviewEnquiry(null)}>
          <div className="tkb-enq-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="tkb-enq-modal-close"
              onClick={() => setPreviewEnquiry(null)}
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="tkb-enq-modal-header">
              <span className={`tkb-enquiry-type-tag ${previewEnquiry.type === 'BUY' ? 'is-buy' : 'is-sell'}`}>
                {previewEnquiry.type === 'BUY' ? 'Buyer Requirement' : 'Seller Listing'}
              </span>
              <h3>{previewEnquiry.title}</h3>
              <p className="tkb-enq-modal-sub">{previewEnquiry.subCategory}</p>
            </div>

            <div className="tkb-enq-modal-img-wrap">
              <img src={previewEnquiry.image} alt={previewEnquiry.title} />
            </div>

            <div className="tkb-enq-modal-details">
              <div className="tkb-enq-modal-row">
                <span>Location:</span>
                <strong>{previewEnquiry.location}</strong>
              </div>
              <div className="tkb-enq-modal-row">
                <span>Offered / Required Price:</span>
                <strong style={{ color: '#16a34a' }}>{previewEnquiry.price}</strong>
              </div>
              <div className="tkb-enq-modal-row">
                <span>Lot Quantity:</span>
                <strong>{previewEnquiry.quantity}</strong>
              </div>
              <div className="tkb-enq-modal-row">
                <span>Trade Category:</span>
                <strong style={{ textTransform: 'capitalize' }}>{previewEnquiry.category}</strong>
              </div>
            </div>

            <div className="tkb-enq-modal-actions">
              <Link
                to={`/user-detail?role=${previewEnquiry.type === 'BUY' ? 'buyer' : 'farmer'}&name=${encodeURIComponent(previewEnquiry.title + ' Trader')}`}
                className="tkb-sub-btn tkb-sub-btn-primary tkb-sub-btn-block"
              >
                View {previewEnquiry.type === 'BUY' ? 'Buyer' : 'Seller'} Details & Contact
              </Link>
              <button
                type="button"
                className="tkb-sub-btn tkb-sub-btn-ghost tkb-sub-btn-block"
                onClick={() => setPreviewEnquiry(null)}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Marketplace;
