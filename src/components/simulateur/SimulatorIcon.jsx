import React from "react";

const SimulatorIcon = ({ icon }) => {
  const imgSrc = {
    Bâtiments: "/images/Logement.png",
    Transports: "/images/Transports.png",
    "Agriculture et alimentation": "/images/Alimentation.png",
    "Biens et services": "/images/Biens services.png",
    Énergie: "/images/Energie.png",
    Trajectoire: "/images/Trajectoire.png",
    Paramètres: "/images/Projection mondiale.png",
  };

  return <img src={imgSrc[icon]} alt={icon} />;
};

export default SimulatorIcon;
