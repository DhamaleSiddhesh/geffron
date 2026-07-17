import React from "react";
import Layout from "./components/layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ContactUs from "./pages/ContactUs";
import ProductDetail from "./pages/SingleProduct";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
  return (
    <Router>
      <div className="bg-[#e7e7e9]">
        <Layout>
          <div className="min-h-screen ">
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/product" element={<ProductDetail />} />
            </Routes>
          </div>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
