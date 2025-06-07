import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const ajouterAuPanier = () => {
    const panier = JSON.parse(localStorage.getItem("panier")) || [];
    panier.push(product);
    localStorage.setItem("panier", JSON.stringify(panier));
    alert("Produit ajouté au panier !");
  };

  return (
    <div className="card m-3 d-flex flex-column justify-content-between" style={{ width: "18rem", height: "100%" }}>
      <Link to={`/produit/${product.id}`} className="text-decoration-none text-dark">
        <img
          src={product.image}
          className="card-img-top p-4"
          alt={product.title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title" style={{ minHeight: "50px" }}>{product.title}</h6>
          <p className="card-text fw-bold">{product.price} €</p>
        </div>
      </Link>

      <div className="card-footer bg-transparent border-top-0 mt-auto">
        <button className="btn btn-outline-primary w-100" onClick={ajouterAuPanier}>
          Ajouter au panier
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
