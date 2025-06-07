import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import LoginUser from "./pages/LoginUser";
import LoginAdmin from "./pages/LoginAdmin";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produits" element={<ProductPage />} />
        <Route path="/produit/:id" element={<ProductDetail />} />
        <Route path="/panier" element={<CartPage />} />
        <Route path="/connexion" element={<LoginUser />} />
        <Route path="/admin/connexion" element={<LoginAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
