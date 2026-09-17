import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Enquiry from "./Components/Enquiry";
import ProductDetails from "./Components/ProductDetails";
import Login from "./Components/Login";
import ProductList from "./Components/ProductList";
import Profile from "./Components/Profile";

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
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;