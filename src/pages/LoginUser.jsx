import React, { useState } from "react";
import axios from "axios";

const LoginUser = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      })
      .then((res) => {
        const token = res.data.token;
        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem("userName", username);
        alert("Connexion réussie !");
      })
      .catch((err) => {
        console.log("Erreur login :", err);
        alert("Échec de la connexion");
      });
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
      <h2 className="text-center mb-4">Connexion utilisateur</h2>

      <div className="card shadow" style={{ width: "100%", maxWidth: "500px", backgroundColor: "#343a40", color: "#fff" }}>
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Nom d'utilisateur :</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mot de passe :</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
