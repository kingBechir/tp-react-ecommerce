# TP React – Application E-commerce (Mockup Client)

TP réalisé dans le cadre de la formation React - IPSSI, juin 2025.  
Formateur : Dufrène Valérian

---

##  Objectif

Créer une mini application e-commerce avec React, en se basant sur l’API Fake Store.  
Côté client uniquement (mockup), avec gestion de produits, panier, authentification, et actions admin simulées.

---

##  Fonctionnalités réalisées

- Affichage des 20 produits via `https://fakestoreapi.com/products`
- Système de **pagination** (6 produits par page)
- **Fiche produit détaillée** (image, prix, description…)
- **Ajout au panier**, suppression produit, calcul **HT/TTC avec TVA**
- Panier stocké en **localStorage**
- Formulaire de **connexion utilisateur** (via API, JWT dans sessionStorage)
- Formulaire de **connexion admin** (en dur dans le code)
- Boutons **Modifier / Supprimer** visibles uniquement en mode admin
- **Modal** pour modification produit (simulée, pré-remplie)
- Suppression produit (simulée côté client)
- Navigation claire via **Navbar Bootstrap**
- **Design simple et responsive** avec Bootstrap

---

##  Stack utilisée

- React + React Router
- Axios
- Bootstrap
- Fake Store API : https://fakestoreapi.com/docs

---

##  Remarques

Ce projet a été développé dans un temps limité (10h).  
J’ai essayé de structurer au mieux les composants et les pages.  
Certaines actions (modification / suppression) sont simulées côté client, car l’API ne les autorise pas.

---

##  Pour lancer le projetg

Dans le terminal :

```bash
npm install
npm start
Puis ouvrez http://localhost:3000 pour voir l’application.

###  Projet réalisé par Bechir Hassabalkerim 
Étudiant en Bachelor 3 Développeur à l’IPSSI - Campus de Nice


