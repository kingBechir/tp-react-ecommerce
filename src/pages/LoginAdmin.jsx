import React, { useState } from "react";

const LoginAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const ADMIN = {
    username: "admin",
    password: "admin123",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === ADMIN.username && password === ADMIN.password) {
      sessionStorage.setItem("admin", "true");
      alert("Connexion admin réussie !");
    } else {
      alert("Identifiants admin incorrects");
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
      <h2 className="text-center mb-4">Connexion administrateur</h2>

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

            <button type="submit" className="btn btn-warning w-100">
              Se connecter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
