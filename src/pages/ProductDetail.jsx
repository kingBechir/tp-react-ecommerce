import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import UpdateModal from "../components/UpdateModal";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log("Erreur chargement produit :", err));
  }, [id]);

  const ajouterAuPanier = (produit) => {
    const panier = JSON.parse(localStorage.getItem("panier")) || [];
    panier.push(produit);
    localStorage.setItem("panier", JSON.stringify(panier));
    alert("Produit ajouté au panier !");
  };

  const handleModifier = () => setShowModal(true);

  const handleSupprimer = () => {
    const confirm = window.confirm("Supprimer ce produit ?");
    if (confirm) {
      setProduct(null);
      alert("Produit supprimé (simulation)");
    }
  };

  const handleSave = (updatedData) => {
    console.log("Produit modifié :", updatedData);
    alert("Produit modifié (simulation)");
  };

  if (!product) return <p className="text-center mt-5">Produit supprimé ou introuvable.</p>;

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card p-4 shadow" style={{ maxWidth: "600px", width: "100%" }}>
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top"
          style={{ maxHeight: "300px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <p className="card-text">{product.description}</p>
          <p className="fw-bold">{product.price} €</p>
          <p><em>Catégorie : {product.category}</em></p>

          <button
            className="btn btn-success"
            onClick={() => ajouterAuPanier(product)}
          >
            Ajouter au panier
          </button>

          {sessionStorage.getItem("admin") === "true" && (
            <div className="mt-3 d-flex gap-2">
              <button className="btn btn-warning" onClick={handleModifier}>Modifier</button>
              <button className="btn btn-danger" onClick={handleSupprimer}>Supprimer</button>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <UpdateModal
          product={product}
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default ProductDetail;
