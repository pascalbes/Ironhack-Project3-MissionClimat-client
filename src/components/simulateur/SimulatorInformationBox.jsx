import React from "react";

const SimulatorInformationBox = ({ data, style }) => {
  return (
    <div className="param-info-container-visible flex-item" style={style}>
      <div className="right-btn">
        <div>
          <h6>Calcul des émissions</h6>
          <p>{data.infoCalcul}</p>
        </div>
        <div>
          <h6>Tendances</h6>
          <p>{data.tendance}</p>
        </div>
      </div>
      <div>
        <div>
          <h6>Co-Bénéfices</h6>
          <p>{data.coBenefices}</p>
        </div>
        <div>
          <h6>Contraintes</h6>
          <p>{data.contraintes}</p>
        </div>
      </div>
    </div>
  );
};

export default SimulatorInformationBox;
