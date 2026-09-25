import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AdminProvider } from './context/AdminContext';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';
import ToastNotification from './components/ToastNotification';
import './AdminDashboard.css';

const AdminLayoutInner = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const auth = localStorage.getItem('adminAuth');
      if (!auth) {
        navigate('/adminLogon');
      }
    } catch (e) {
      // Fallback
    }
  }, [navigate]);

  return (
    <div className="adm-wrapper">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="adm-main-shell">
        <AdminHeader onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />
        <main className="adm-content">
          <Outlet />
        </main>
      </div>
      <ToastNotification />
    </div>
  );
};

const AdminLayout = () => {
  return (
    <AdminProvider>
      <AdminLayoutInner />
    </AdminProvider>
  );
};

export default AdminLayout;
