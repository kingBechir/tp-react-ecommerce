import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [panier, setPanier] = useState([]);
  const [tva, setTva] = useState(20);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("panier")) || [];
    setPanier(data);
  }, []);

  const supprimerProduit = (index) => {
    const nouveauPanier = [...panier];
    nouveauPanier.splice(index, 1);
    setPanier(nouveauPanier);
    localStorage.setItem("panier", JSON.stringify(nouveauPanier));
  };

  const totalHT = panier.reduce((acc, item) => acc + item.price, 0);
  const totalTTC = (totalHT * (1 + tva / 100)).toFixed(2);

  return (
    <div className="container mt-4">
      <h2>Mon Panier</h2>

      {panier.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          <div className="mb-3">
            <label className="form-label">Choisir la TVA :</label>
            <select
              className="form-select"
              value={tva}
              onChange={(e) => setTva(parseFloat(e.target.value))}
            >
              <option value={5}>5%</option>
              <option value={20}>20%</option>
            </select>
          </div>

          {panier.map((item, index) => (
            <div key={index} className="card mb-3 p-2 d-flex flex-row align-items-center">
              <img src={item.image} alt={item.title} width="80" className="me-3" />
              <div className="flex-grow-1">
                <strong>{item.title}</strong> - {item.price} €
              </div>
              <button className="btn btn-danger" onClick={() => supprimerProduit(index)}>
                Supprimer
              </button>
            </div>
          ))}

          <p><strong>Total HT :</strong> {totalHT.toFixed(2)} €</p>
          <p><strong>Total TTC :</strong> {totalTTC} € (TVA {tva}%)</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
