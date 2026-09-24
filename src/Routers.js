import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./Components/NotFound";

const Routers = () => {
  return (
    <BrowserRouter>
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
