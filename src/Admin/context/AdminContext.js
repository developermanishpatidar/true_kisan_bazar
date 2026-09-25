import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialMandiRates } from '../../data/mandiRatesData';
import { bestSellingProducts, featuredProducts } from '../../data/homeProducts';
import { blogPosts } from '../../data/blogPostsData';

const AdminContext = createContext();

const INITIAL_ENQUIRIES = [
  {
    id: 'ENQ-1049',
    type: 'sell',
    commodity: 'Wheat',
    category: 'Grains',
    variety: 'Sharbati A-Grade Premium',
    grade: 'A',
    quantity: 25,
    unit: 'Ton',
    expectedPrice: '₹2,650 / Quintal',
    location: 'Shajapur',
    state: 'Madhya Pradesh',
    contactPerson: 'Vijay Patidar',
    phone: '+91 86022 21455',
    date: '2026-09-24',
    harvestDate: '2026-09-20',
    status: 'pending',
    notes: 'Well dried in sun, moisture below 10%, immediate delivery ready.',
    photo: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&fit=crop'
  },
  {
    id: 'ENQ-1048',
    type: 'buy',
    commodity: 'Tomato',
    category: 'Vegetables',
    variety: 'Hybrid F1 / Vaishnavi',
    grade: 'A',
    quantity: 15,
    unit: 'Ton',
    expectedPrice: '₹3,800 / Quintal',
    location: 'Mumbai',
    state: 'Maharashtra',
    contactPerson: 'Meera Traders (Sunil K.)',
    phone: '+91 98201 44321',
    date: '2026-09-24',
    harvestDate: '2026-09-25',
    status: 'approved',
    notes: 'Looking for firm red tomatoes for direct wholesale APMC distribution.',
    photo: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&fit=crop'
  },
  {
    id: 'ENQ-1047',
    type: 'sell',
    commodity: 'Banana',
    category: 'Fruits',
    variety: 'Grand Naine (G9)',
    grade: 'A',
    quantity: 40,
    unit: 'Ton',
    expectedPrice: '₹22.00 / kg',
    location: 'Limtara',
    state: 'Gujarat',
    contactPerson: 'Rameshwar Patel',
    phone: '+91 94251 77890',
    date: '2026-09-23',
    harvestDate: '2026-09-22',
    status: 'approved',
    notes: 'Export quality bunch cut, average hand weight 1.8-2.2kg, pest free.',
    photo: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&fit=crop'
  },
  {
    id: 'ENQ-1046',
    type: 'buy',
    commodity: 'Basmati Rice',
    category: 'Grains',
    variety: '1121 Steam Extra Long',
    grade: 'A',
    quantity: 50,
    unit: 'Ton',
    expectedPrice: '₹7,800 / Quintal',
    location: 'Delhi',
    state: 'Delhi NCR',
    contactPerson: 'Agro Export Hub Ltd',
    phone: '+91 98110 55320',
    date: '2026-09-23',
    harvestDate: '2026-09-28',
    status: 'pending',
    notes: 'Packaging in 25kg non-woven bags needed. Certification required.',
    photo: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=600&fit=crop'
  },
  {
    id: 'ENQ-1045',
    type: 'sell',
    commodity: 'Pomegranate',
    category: 'Fruits',
    variety: 'Super Bhagwa Sindhuri',
    grade: 'A',
    quantity: 12,
    unit: 'Ton',
    expectedPrice: '₹105.00 / kg',
    location: 'Dahiwad',
    state: 'Maharashtra',
    contactPerson: 'Suresh Patil',
    phone: '+91 97654 32109',
    date: '2026-09-22',
    harvestDate: '2026-09-20',
    status: 'approved',
    notes: 'Dark ruby red arils, sweet flavor, sorted and boxed.',
    photo: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&fit=crop'
  },
  {
    id: 'ENQ-1044',
    type: 'sell',
    commodity: 'Onion',
    category: 'Vegetables',
    variety: 'Garwa Dark Red Nasik',
    grade: 'B',
    quantity: 30,
    unit: 'Ton',
    expectedPrice: '₹1,850 / Quintal',
    location: 'Lasalgaon',
    state: 'Maharashtra',
    contactPerson: 'Balasaheb Shinde',
    phone: '+91 94222 88123',
    date: '2026-09-21',
    harvestDate: '2026-09-18',
    status: 'pending',
    notes: 'Well cured medium-sized bulbs (45-55mm). Ready for transport.',
    photo: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=600&fit=crop'
  },
  {
    id: 'ENQ-1043',
    type: 'buy',
    commodity: 'Soybean',
    category: 'Oil Seeds',
    variety: 'Yellow Soybean JS-335',
    grade: 'A',
    quantity: 100,
    unit: 'Ton',
    expectedPrice: '₹4,600 / Quintal',
    location: 'Indore',
    state: 'Madhya Pradesh',
    contactPerson: 'Malwa Oil Refineries',
    phone: '+91 731 2459800',
    date: '2026-09-20',
    harvestDate: '2026-10-02',
    status: 'completed',
    notes: 'Direct mill gate delivery. Immediate payment via RTGS on weighment.',
    photo: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=600&fit=crop'
  },
  {
    id: 'ENQ-1042',
    type: 'sell',
    commodity: 'Dragon Fruit',
    category: 'Fruits',
    variety: 'Red Flesh Vietnamese Cross',
    grade: 'A',
    quantity: 8,
    unit: 'Ton',
    expectedPrice: '₹150.00 / kg',
    location: 'Sahaspura Dausa',
    state: 'Rajasthan',
    contactPerson: 'Chandra Prakash Meena',
    phone: '+91 94140 12890',
    date: '2026-09-19',
    harvestDate: '2026-09-18',
    status: 'rejected',
    notes: 'Images blurry and contact was unreachable during verification.',
    photo: 'https://images.unsplash.com/photo-1527324688151-0e627063f2b1?w=600&fit=crop'
  }
];

const INITIAL_USERS = [
  { id: 1, name: "Vijay Patidar", location: "Shajapur, MP", role: "Farmer", category: "Wheat, Soybean", phone: "8602221455", verified: true, status: "Active", joined: "Aug 2026", enquiriesCount: 6 },
  { id: 2, name: "Rakesh Jagdish Patil", location: "Dhule, Maharashtra", role: "Farmer", category: "Rice, Cotton", phone: "9823145678", verified: true, status: "Active", joined: "Jul 2026", enquiriesCount: 4 },
  { id: 3, name: "Ajinkya Deshpande", location: "Jalna, Maharashtra", role: "Farmer", category: "Millets, Sorghum", phone: "9421098765", verified: false, status: "Active", joined: "Sep 2026", enquiriesCount: 2 },
  { id: 4, name: "Meera Traders", location: "Mumbai, Maharashtra", role: "Buyer", category: "Wheat, Rice, Pulses", phone: "9820144321", verified: true, status: "Active", joined: "May 2026", enquiriesCount: 19 },
  { id: 5, name: "Agro Mart Wholesale", location: "Pune, Maharashtra", role: "Buyer", category: "Vegetables, Fruits", phone: "9765412300", verified: true, status: "Active", joined: "Jun 2026", enquiriesCount: 15 },
  { id: 6, name: "Hari Om Traders", location: "Indore, MP", role: "Buyer", category: "Grains, Oilseeds", phone: "9425011223", verified: true, status: "Active", joined: "Apr 2026", enquiriesCount: 28 },
  { id: 7, name: "AgriTech Mills Pvt Ltd", location: "Pune, Maharashtra", role: "Manufacturer", category: "Wheat Processing", phone: "9890123456", verified: true, status: "Active", joined: "Mar 2026", enquiriesCount: 34 },
  { id: 8, name: "Golden Grain Foods", location: "Rajkot, Gujarat", role: "Manufacturer", category: "Flour & Cereals", phone: "9825067890", verified: true, status: "Active", joined: "Feb 2026", enquiriesCount: 41 },
  { id: 9, name: "Krishna Sonawane", location: "Aurangabad, Maharashtra", role: "Farmer", category: "Maize, Cotton", phone: "9822456711", verified: false, status: "Suspended", joined: "Aug 2026", enquiriesCount: 1 }
];

const INITIAL_TICKETS = [
  {
    id: 'TCK-201',
    name: 'Rameshwar Patel',
    email: 'rameshwar.p@gmail.com',
    phone: '+91 94251 77890',
    subject: 'Listing or crop issue',
    message: 'My Banana lot quantity was erroneously updated by buyer enquiry. Need to edit active quantity from 20 ton to 40 ton.',
    status: 'open',
    priority: 'high',
    date: '2026-09-25 09:15',
    notes: 'Awaiting admin review.'
  },
  {
    id: 'TCK-200',
    name: 'Sunil Sharma (Meera Traders)',
    email: 'sunil@meeratraders.in',
    phone: '+91 98201 44321',
    subject: 'Mandi rate data',
    message: 'Damnagar APMC Tomato rates seem to be reflecting yesterday’s modal price. Please sync morning auction rate.',
    status: 'in_progress',
    priority: 'medium',
    date: '2026-09-24 16:40',
    notes: 'Contacted APMC mandi secretary, verifying updated modal data.'
  },
  {
    id: 'TCK-199',
    name: 'Balasaheb Shinde',
    email: 'balashinde1978@yahoo.com',
    phone: '+91 94222 88123',
    subject: 'Account & login',
    message: 'Unable to receive 4-digit OTP code on BSNL network in rural Lasalgaon.',
    status: 'resolved',
    priority: 'low',
    date: '2026-09-23 11:20',
    notes: 'Assisted via alternate SMS gateway. User successfully verified.'
  }
];

export const AdminProvider = ({ children }) => {
  // Enquiries State
  const [enquiries, setEnquiries] = useState(() => {
    const saved = localStorage.getItem('fj_admin_enquiries');
    return saved ? JSON.parse(saved) : INITIAL_ENQUIRIES;
  });

  // Mandi Rates State
  const [mandiRates, setMandiRates] = useState(() => {
    const saved = localStorage.getItem('fj_admin_mandi_rates');
    return saved ? JSON.parse(saved) : initialMandiRates;
  });

  // Products State
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('fj_admin_products');
    if (saved) return JSON.parse(saved);
    const combined = [
      ...bestSellingProducts.map((p, idx) => ({ id: `PROD-${idx + 1}`, ...p, category: 'Fruits & Vegetables', active: true, tag: 'Bestseller' })),
      ...featuredProducts.map((p, idx) => ({ id: `PROD-F${idx + 1}`, ...p, category: 'Farm Produce', active: true, tag: 'Featured' }))
    ];
    return combined;
  });

  // Users State
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('fj_admin_users');
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });

  // Blogs State
  const [blogs, setBlogs] = useState(() => {
    const saved = localStorage.getItem('fj_admin_blogs');
    return saved ? JSON.parse(saved) : blogPosts;
  });

  // Support Tickets State
  const [tickets, setTickets] = useState(() => {
    const saved = localStorage.getItem('fj_admin_tickets');
    return saved ? JSON.parse(saved) : INITIAL_TICKETS;
  });

  // Notifications
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Sell Enquiry', desc: 'Vijay Patidar posted 25 ton Wheat from Shajapur', time: '10m ago', unread: true },
    { id: 2, title: 'Price Trend Alert', desc: 'Tomato Damnagar APMC price dipped -₹150/qtl', time: '1h ago', unread: true },
    { id: 3, title: 'High Priority Ticket', desc: 'Rameshwar Patel requested quantity correction', time: '3h ago', unread: true },
    { id: 4, title: 'New Trader Registered', desc: 'AgriTech Mills verified mobile authentication', time: '1d ago', unread: false }
  ]);

  // Activity Log
  const [recentActivities, setRecentActivities] = useState([
    { id: 1, user: 'Admin (You)', action: 'Approved Buy Enquiry for Tomato #ENQ-1048', time: '25 mins ago' },
    { id: 2, user: 'Admin (You)', action: 'Updated Damnagar APMC Modal Price to ₹2,500', time: '1 hour ago' },
    { id: 3, user: 'Vijay Patidar', action: 'Submitted new Sell Enquiry #ENQ-1049 for Wheat', time: '2 hours ago' },
    { id: 4, user: 'System', action: 'Daily APMC Mandi Rates automated backup completed', time: '6 hours ago' }
  ]);

  // Toast System
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('fj_admin_enquiries', JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem('fj_admin_mandi_rates', JSON.stringify(mandiRates));
  }, [mandiRates]);

  useEffect(() => {
    localStorage.setItem('fj_admin_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('fj_admin_users', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem('fj_admin_tickets', JSON.stringify(tickets));
  }, [tickets]);

  // ── Enquiry Actions ──
  const updateEnquiryStatus = (id, newStatus) => {
    setEnquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
    const actionLabel = newStatus.charAt(0).toUpperCase() + newStatus.slice(1);
    showToast(`Enquiry ${id} marked as ${actionLabel}!`, newStatus === 'rejected' ? 'error' : 'success');
    setRecentActivities((prev) => [
      { id: Date.now(), user: 'Admin', action: `Changed Enquiry ${id} status to ${actionLabel}`, time: 'Just now' },
      ...prev
    ]);
  };

  const deleteEnquiry = (id) => {
    setEnquiries((prev) => prev.filter((item) => item.id !== id));
    showToast(`Enquiry ${id} deleted successfully.`, 'info');
  };

  // ── Mandi Rate Actions ──
  const updateMandiRate = (id, updatedFields) => {
    setMandiRates((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
    showToast(`Mandi rate updated successfully!`, 'success');
    setRecentActivities((prev) => [
      { id: Date.now(), user: 'Admin', action: `Updated rate for Mandi Item #${id}`, time: 'Just now' },
      ...prev
    ]);
  };

  const addMandiRate = (newRate) => {
    const rateWithId = {
      id: Date.now(),
      arrival_date: 'Today',
      price_trend: 'steady',
      price_change: 0,
      image: newRate.image || 'https://d1yqhfsa94yj9h.cloudfront.net/media/product_subcategories/tomato.png',
      ...newRate
    };
    setMandiRates((prev) => [rateWithId, ...prev]);
    showToast(`Added ${newRate.commodity} rate at ${newRate.market}!`, 'success');
  };

  const deleteMandiRate = (id) => {
    setMandiRates((prev) => prev.filter((item) => item.id !== id));
    showToast('Mandi rate record removed.', 'info');
  };

  // ── Product Actions ──
  const addProduct = (prod) => {
    const newProd = {
      id: `PROD-${Date.now()}`,
      views: 0,
      active: true,
      image: prod.image || 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&fit=crop',
      ...prod
    };
    setProducts((prev) => [newProd, ...prev]);
    showToast(`New crop "${prod.name}" added to catalog!`, 'success');
  };

  const updateProduct = (id, updatedFields) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedFields } : item))
    );
    showToast(`Product updated successfully!`, 'success');
  };

  const toggleProductActive = (id) => {
    setProducts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, active: !item.active } : item))
    );
    showToast(`Product visibility toggled.`, 'info');
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
    showToast(`Product deleted from catalog.`, 'info');
  };

  // ── User Actions ──
  const toggleUserVerified = (id) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === id ? { ...u, verified: !u.verified } : u))
    );
    showToast(`User verification status updated.`, 'success');
  };

  const toggleUserStatus = (id) => {
    setUsers((prev) =>
      prev.map((u) => {
        if (u.id === id) {
          const nextStatus = u.status === 'Active' ? 'Suspended' : 'Active';
          return { ...u, status: nextStatus };
        }
        return u;
      })
    );
    showToast(`User account status modified.`, 'info');
  };

  // ── Ticket Actions ──
  const updateTicketStatus = (id, status) => {
    setTickets((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status } : t))
    );
    showToast(`Ticket ${id} marked as ${status}!`, 'success');
  };

  // ── Blog Actions ──
  const addBlogPost = (post) => {
    const newPost = {
      id: `post-${Date.now()}`,
      date: 'Today',
      readTime: '4 min read',
      author: {
        name: 'Fasal Junction Editorial',
        role: 'Agricultural Agronomist',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop'
      },
      ...post
    };
    setBlogs((prev) => [newPost, ...prev]);
    showToast('New article published to Kisan blog!', 'success');
  };

  const deleteBlogPost = (id) => {
    setBlogs((prev) => prev.filter((b) => b.id !== id));
    showToast('Article deleted.', 'info');
  };

  // Mark all notifications read
  const markNotificationsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  return (
    <AdminContext.Provider
      value={{
        enquiries,
        mandiRates,
        products,
        users,
        blogs,
        tickets,
        notifications,
        recentActivities,
        toasts,
        showToast,
        removeToast,
        updateEnquiryStatus,
        deleteEnquiry,
        updateMandiRate,
        addMandiRate,
        deleteMandiRate,
        addProduct,
        updateProduct,
        toggleProductActive,
        deleteProduct,
        toggleUserVerified,
        toggleUserStatus,
        updateTicketStatus,
        addBlogPost,
        deleteBlogPost,
        markNotificationsRead
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
export default AdminContext;
