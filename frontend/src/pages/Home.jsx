import React from "react";
import backgroundImage from "../assets/Imageaccueil.png";
import "./Home.css";

function Home() {
  return (
    <div
      className="homepage-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="homepage-content">
        <h1>Bienvenue</h1>
        <div className="homepage-button">
          <button type="button">Connexion</button>
          <button type="button">Inscription</button>
          <button type="button">Visiteurs</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
