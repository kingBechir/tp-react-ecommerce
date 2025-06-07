import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-center gap-4 py-3" style={{ backgroundColor: "#f8f9fa" }}>
      <Link to="/" className="text-decoration-none text-dark fw-bold">Accueil</Link>
      <Link to="/produits" className="text-decoration-none text-dark fw-bold">Produits</Link>
      <Link to="/panier" className="text-decoration-none text-dark fw-bold">Panier</Link>
      <Link to="/connexion" className="text-decoration-none text-dark fw-bold">Connexion utilisateur</Link>
      <Link to="/admin/connexion" className="text-decoration-none text-dark fw-bold">Connexion admin</Link>
    </nav>
  );
};

export default Navbar;
