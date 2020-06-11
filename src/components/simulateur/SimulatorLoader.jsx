import React from "react";
import Loader from "react-loader-spinner";

const SimulatorLoader = () => {
  return (
    <div id="loader">
      <Loader type="BallTriangle" color="white" height={100} width={100} />
      <div className="hidden">||</div>
      <h3 style={{ color: "#7fffd4" }}>Initialisation</h3>
      <h4 className="light-text">Nous préparons votre environnement de travail.</h4>
      <h4 className="light-text">L'attente ne devrait pas durer plus de 5 secondes.</h4>
    </div>
  );
};

export default SimulatorLoader;
