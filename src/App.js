import React from "react";
// page 
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

// components

import Sidebar from  "./components/Sidebar";
import Header from  "./components/Header";
import Footer from  "./components/Footer";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;