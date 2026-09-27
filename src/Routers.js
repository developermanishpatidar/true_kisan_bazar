import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Enquiry from "./Components/Enquiry";
import ProductDetails from "./Components/ProductDetails";
import Login from "./Components/Login";
import ProductList from "./Components/ProductList";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Contact from "./Components/Contact";
import MandiRate from "./Components/MandiRate";
import Blog from "./Components/Blog";
import TermsConditions from "./Components/TermsConditions";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Faq from "./Components/Faq";
import NotFound from "./Components/NotFound";
import SeedsComingSoon from "./Components/SeedsComingSoon";
import ScrollToTop from "./CommonComponents/ScrollToTop";

import AdminLayout from "./Admin/AdminLayout";
import Overview from "./Admin/pages/Overview";
import Enquiries from "./Admin/pages/Enquiries";
import Products from "./Admin/pages/Products";
import MandiRates from "./Admin/pages/MandiRates";
import Users from "./Admin/pages/Users";
import Blogs from "./Admin/pages/Blogs";
import SupportTickets from "./Admin/pages/SupportTickets";
import Settings from "./Admin/pages/Settings";
import AdminLogin from "./Admin/pages/AdminLogin";

const Routers = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/product-detail" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Contact />} />
        <Route path="/mandi-rate" element={<MandiRate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/seed" element={<SeedsComingSoon />} />

        {/* Admin Login */}
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Overview />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="products" element={<Products />} />
          <Route path="mandi-rates" element={<MandiRates />} />
          <Route path="users" element={<Users />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="support" element={<SupportTickets />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
