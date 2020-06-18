import React from "react";
import { Link } from "react-router-dom";
import Sunburst from "components/simulateur/SunburstChart";
import AreaChart from "components/simulateur/SimulatorResultsAreaChart";

const ResultsSample = ({ results }) => {
  const width = window.innerWidth;

  function tempColor() {
    return results.impacts.temperature < 1.5
      ? "linear-gradient(to right, #7FFFD4 , #77D9B5)"
      : results.impacts.temperature >= 1.5 && results.impacts.temperature < 2
      ? "linear-gradient(to right, #F2F230 , #FFC53A)"
      : results.impacts.temperature >= 2 && results.impacts.temperature < 3
      ? "linear-gradient(to right, #FFB8B8 , #DB7093)"
      : "linear-gradient(to right, #DA8FFF , #663399)";
  }

  if (width > 600) {
    return (
      <section className="sim-results-box flex-item flex-column">
        <div id="results-top-box" className="flex-item flex-column">
          <h1>Ma projection mondiale</h1>
          <div id="results-impacts-box" className="flex-item">
            <p className="results-title n1">Températures</p>
            <div
              className="results-figure n2 flex-item"
              style={{ backgroundImage: tempColor(), color: "white" }}
            >
              +{results.impacts.temperature}°C
            </div>
            <p className="results-legend n3">
              Hausse moy. mondiale / 2100 (de {results.impacts.temperatureRange})
            </p>
            <p className="results-title n4">Scénario GIEC</p>
            <div className="results-figure n5 flex-item" style={{ backgroundColor: "#e9e7ec" }}>
              {results.impacts.RCP}
            </div>
            <p className="results-legend n6">
              Scénario GIEC de vos mesures (
              <a
                href="https://leclimatchange.fr/les-elements-scientifiques/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontWeight: "bold", color: "#DB7093" }}
              >
                Plus d'infos
              </a>
              )
            </p>
            <p className="results-title n7">Empreinte carbone</p>
            <div className="results-figure n8 flex-item" style={{ backgroundColor: "#b0e0e6" }}>
              {results.impacts.empreinteMonde}t
            </div>
            <p className="results-legend n9">tCO2e / an / hab. en 2030</p>
          </div>
        </div>

        <div id="results-bottom-box" className="flex-item flex-column">
          <div id="results-emissions" className="flex-item flex-column">
            <h1>Ma projection française</h1>
            <div id="results-impacts-box2" className="flex-item">
              <p className="results-title b1">Évolution émissions</p>
              <div
                className="results-figure b2 flex-item"
                style={{ backgroundColor: "#40E0D0", color: "#163E59" }}
              >
                {results.impacts.reductionEmission2030}
              </div>
              <p className="results-legend b3">Entre 2020 et 2030</p>

              <p className="results-title b4">Émissions annuelles</p>
              <div
                className="results-figure b5 flex-item flex-column"
                style={{ backgroundColor: "#40E0D0", color: "#163E59" }}
              >
                <p>{results.impacts.emissionMoy}</p>
                <p className="figure-unit">MtCO2</p>
              </div>
              <p className="results-legend b6">Entre 2020 et 2030</p>

              <p className="results-title b7">Empreinte carbone</p>
              <div className="results-figure b8 flex-item" style={{ backgroundColor: "#b0e0e6" }}>
                {results.impacts.empreinteFr}t
              </div>
              <p className="results-legend b9">tCO2e / an / hab. en 2030</p>
            </div>
          </div>

          <div id="results-emissions-charts-container">
            <div className="chart g1">
              <AreaChart datas={results.emiSecteurGnl} xOffset={0} yOffset={-150} />
            </div>
            <p className="g2">Emissions Totales</p>

            <div className="chart g3">
              <Sunburst datas={results.emiSecteurPie.graph} />
            </div>
            <p className="g4">Par Secteur / 2030</p>
          </div>

          <div id="results-button" className="flex-item">
            <Link to={{ pathname: "/results", state: { results: results } }}>
              <button className="blue-btn">Résultats complets</button>
            </Link>
          </div>
        </div>
      </section>
    );
  }
  if (width <= 600) {
    return (
      <>
        <section>
          <div id="results-emissions" className="flex-item flex-column">
            <h1>Ma projection française</h1>
            <div id="results-impacts-box2" className="flex-item">
              <p className="results-title b1">Évolution émissions</p>
              <div
                className="results-figure b2 flex-item"
                style={{ backgroundColor: "#40E0D0", color: "#163E59" }}
              >
                {results.impacts.reductionEmission2030}
              </div>
              <p className="results-legend b3">Entre 2020 et 2030</p>

              <p className="results-title b4">Émissions annuelles</p>
              <div
                className="results-figure b5 flex-item flex-column"
                style={{ backgroundColor: "#40E0D0", color: "#163E59" }}
              >
                <p>{results.impacts.emissionMoy}</p>
                <p className="figure-unit">MtCO2</p>
              </div>
              <p className="results-legend b6">Entre 2020 et 2030</p>

              <p className="results-title b7">Empreinte carbone</p>
              <div className="results-figure b8 flex-item" style={{ backgroundColor: "#b0e0e6" }}>
                {results.impacts.empreinteFr}t
              </div>
              <p className="results-legend b9">tCO2e / an / hab. en 2030</p>
            </div>
            <div id="results-button" className="flex-item">
              <Link to={{ pathname: "/results", state: { results: results } }}>
                <button className="blue-btn">Résultats complets</button>
              </Link>
            </div>
          </div>
          <div id="results-top-box" className="flex-item flex-column">
            <h1>Ma projection mondiale</h1>
          </div>
        </section>
        <div id="results-impacts-box" className="flex-item">
          <p className="results-title n1">Températures</p>
          <div
            className="results-figure n2 flex-item"
            style={{ backgroundImage: tempColor(), color: "white" }}
          >
            +{results.impacts.temperature}°C
          </div>
          <p className="results-legend n3">
            Hausse moy. mondiale / 2100 (de {results.impacts.temperatureRange})
          </p>
          <p className="results-title n4">Scénario GIEC</p>
          <div className="results-figure n5 flex-item" style={{ backgroundColor: "#e9e7ec" }}>
            {results.impacts.RCP}
          </div>
          <p className="results-legend n6">
            Scénario GIEC de vos mesures (
            <a
              href="https://leclimatchange.fr/les-elements-scientifiques/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold", color: "#DB7093" }}
            >
              Plus d'infos
            </a>
            )
          </p>
          <p className="results-title n7">Empreinte carbone</p>
          <div className="results-figure n8 flex-item" style={{ backgroundColor: "#b0e0e6" }}>
            {results.impacts.empreinteMonde}t
          </div>
          <p className="results-legend n9">tCO2e / an / hab. en 2030</p>
        </div>
      </>
    );
  }
};

export default ResultsSample;
