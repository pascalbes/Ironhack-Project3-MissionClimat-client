import React from "react";
import styled from "@emotion/styled";
import AreaChart from "./../components/simulateur/simResultsAreaChart";
import Sunburst from "./../components/simulateur/sunburstChart";
import { Link } from "react-router-dom";
import { Indicator } from "./SimulatorMission";
import { getEmissions } from "../components/resultats/ScoreBoard";

import emissions2020 from "../components/game/emission2020";

const Container = styled.div`
  padding: 16px;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background-color: white;
  justify-content: space-between;
  
  h1 {
    font-family: "Circular Std";
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    line-height: 28px;
    color: #163e59;
    padding-bottom: 0;
    margin-bottom: 0;
  }
  #indicator_container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    margin-bottom: 32px;
  }
  .result_graph_container {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }
  .result_sunburst_container {
    width: 100%;
    flex: 1;
    display: flex;
    align-items: flex-end;
    gap: 5px;
    > div {
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    }
  }
`;

const ResultsSimple = ({ results }) => {
  const emissions = getEmissions(results);
  const reduction = 1 - emissions / 750;
  function tempColor() {
    return reduction > 0.5
      ? "linear-gradient(to right, #7FFFD4 , #77D9B5)"
      : reduction >= 0.25 && reduction < 0.5
      ? "linear-gradient(to right, #F2F230 , #FFC53A)"
      : reduction >= 0.15 && reduction < 0.25
      ? "linear-gradient(to right, #FFB8B8 , #DB7093)"
      : "linear-gradient(to right, #DA8FFF , #663399)";
  }

  const emissions2030Height = getHeight(reduction);

  return (
    <Container>
      <h1>Mes Résultats</h1>
      <div id="indicator_container">
        <Indicator
          title="Émissions 2030"
          text={Math.round(emissions).toLocaleString()}
          unit="MtCO2"
          backgroundColor="#40E0D0"
          color="#163E59"
        />
        <Indicator
          title="Réduction"
          text={`-${Math.round(reduction * 1000) / 10} %`}
          backgroundImage={tempColor()}
          color="#163E59"
        />
      </div>
      <div className="result_graph_container" style={{ width: "80%" }}>
        <AreaChart datas={results.emiSecteurGnl} xOffset={0} yOffset={-150} />
        <p>Evolution 2020 > 2030</p>
      </div>
      <div className="result_sunburst_container">
        <div>
          <Sunburst datas={emissions2020} />
          <p>Répartition des émissions 2020</p>
        </div>
        <div style={{height: emissions2030Height}}>
          <Sunburst datas={results.emiSecteurPie.graph} />
          <p>Répartition des émissions 2030</p>
        </div>
      </div>
    </Container>
  );
};

const getHeight = (reduction) => {
    const s1 = Math.PI / 4; // d1 = 1
    const s2 = s1 * (1-reduction);
    const d2 = 2 * Math.sqrt(s2 / Math.PI);
    const height = Math.round(d2*100).toString() + '%';
    return height;
}

export default ResultsSimple;
