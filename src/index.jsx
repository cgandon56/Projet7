import React from "react";
import ReactDOM from "react-dom/client"; // pour initialiser l'application sur le client
import App from "./App";
import "./styles/index.css";




const root = ReactDOM.createRoot(document.getElementById("root")) // méthode qui prend l'élement racine comme paramètre
root.render( 
  //React.StrictMode pour vérifier les avertissements
  <React.StrictMode> 
    <App />
  </React.StrictMode>
)

