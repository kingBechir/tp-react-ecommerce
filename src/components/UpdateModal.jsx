import React, { useState } from "react";

const UpdateModal = ({ product, onClose, onSave }) => {
  const [form, setForm] = useState({
    title: product.title,
    price: product.price,
    description: product.description,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form); 
    onClose(); 
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "20%",
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "#fff",
        padding: "20px",
        border: "1px solid black",
        zIndex: 1000,
      }}
    >
      <h3>Modifier le produit</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre :</label>
          <input name="title" value={form.title} onChange={handleChange} />
        </div>
        <div>
          <label>Prix :</label>
          <input name="price" value={form.price} onChange={handleChange} />
        </div>
        <div>
          <label>Description :</label>
          <textarea name="description" value={form.description} onChange={handleChange} />
        </div>
        <button type="submit">Enregistrer</button>
        <button type="button" onClick={onClose} style={{ marginLeft: "10px" }}>
          Annuler
        </button>
      </form>
    </div>
  );
};

export default UpdateModal;
