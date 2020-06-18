import React, { useState, useEffect } from "react";
import { faLink, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";

import Header from "components/partials/Header";
import ChartContainer from "components/resultats/ChartContainer";
import ResultsSocial from "components/resultats/ResultsSocial";
import CopyToClipboard from "components/CopyToClipboard";

import "styles/results.css";
import "styles/simulator.css";

import ReactGA from "react-ga";

const Results = (props) => {
  const [arrowVisibility, setArrowVisibility] = useState("hidden");
  const [results, setResults] = useState(null);

  useEffect(() => {
    let results = null;
    if (localStorage.getItem("results")) {
      results = JSON.parse(localStorage.getItem("results"));
      setResults(results);
    } else {
      results = props.location.state.results;
      localStorage.setItem("results", JSON.stringify(results));
      setResults(props.location.state.results);
    }
  }, [props.location.state]);

  useEffect(() => {
    if (!results) return;

    ReactGA.event({
      category: "Results",
      action: "temp:" + results.impacts.temperature,
    });
  }, [results]);

  function tempColor() {
    const tempColors = [
      "var(--tempgreen)",
      "var(--tempyellowgreen)",
      "var(--tempyellow)",
      "var(--tempyelloworange)",
      "var(--temporangered)",
      "var(--tempred)",
      "var(--tempredblack)",
    ];

    return results.impacts.temperature < 1.5
      ? tempColors[0]
      : results.impacts.temperature >= 1.5 && results.impacts.temperature < 1.8
      ? tempColors[1]
      : results.impacts.temperature >= 1.8 && results.impacts.temperature < 2
      ? tempColors[2]
      : results.impacts.temperature >= 2 && results.impacts.temperature < 2.2
      ? tempColors[3]
      : results.impacts.temperature >= 2.2 && results.impacts.temperature < 2.5
      ? tempColors[4]
      : results.impacts.temperature >= 2.5 && results.impacts.temperature < 2.8
      ? tempColors[5]
      : tempColors[6];
  }

  function handleClickTracking(type) {
    ReactGA.event({
      category: "Click",
      action: type,
    });
  }

  function handleImageEurope() {
    const imageUrl = "/images/europe";
    const endUrl = results.impacts.RCP.replace(" ", "").replace(".", "");
    return imageUrl + endUrl + ".png";
  }

  function handleImageWorld() {
    const imageUrl = "/images/world";
    const endUrl = results.impacts.RCP.replace(" ", "").replace(".", "");
    return imageUrl + endUrl + ".png";
  }

  //légende cartes températures
  const mapLegendInfos = [
    ["#FFF5CC", "de 0 à 0,5°C"],
    ["#FFE099", "de 0,5 à 1°C"],
    ["#FFCB66", "de 1 à 1,5°C"],
    ["#FFB433", "de 1,5 à 2°C"],
    ["#FF8C33", "de 2 à 3°C"],
    ["#FF5500", "de 3 à 4°C"],
    ["#E6281E", "de 4 à 5°C"],
    ["#BF0000", "de 5 à 7°C"],
    ["#8C0000", "de 7 à 9°C"],
    ["#6C0000", "de 9 à 11°C"],
    ["#6E0046", "plus de 11°C"],
  ];

  function handleInnerHTML(text) {
    return { __html: text };
  }

  function areaLegend(datas, type) {
    let dataValues = {};
    var datasKey = "";
    var unit = "";
    if (type === "area") {
      datasKey = "areaDatas";
      dataValues = datas.data.data;
      unit = datas.data.yTitle;
    } else if (type === "line") {
      dataValues = datas.data;
      datasKey = "line";
      unit = datas.yTitle;
    }

    function formatThousands(nb) {
      nb += "";
      if (nb.length > 3) {
        var nbSplitted = nb.split(".");
        nb = nbSplitted[0];

        var finalNb = "";
        for (let i = nb.length - 1; i >= 0; i--) {
          if ((i - nb.length + 1) % 3 === 0 && i - nb.length + 1 !== 0) {
            finalNb = nb[i] + " " + finalNb;
          } else {
            finalNb = nb[i] + finalNb;
          }
        }
        return nbSplitted.length > 1 ? finalNb + "." + nbSplitted[1] : finalNb;
      }
      return nb;
    }

    datas[datasKey].map((data) => {
      data.subText =
        formatThousands(dataValues[dataValues.length - 1][data.dataKey]) +
        " " +
        unit +
        " / Evolution : ";
      let evolution = Math.round(
        ((dataValues[dataValues.length - 1][data.dataKey] - dataValues[0][data.dataKey]) /
          dataValues[0][data.dataKey]) *
          100,
      );
      dataValues[0][data.dataKey] === 0
        ? (data.subText += " n/a")
        : evolution >= 0
        ? (data.subText += "+" + evolution + "%")
        : (data.subText += evolution + "%");
      return data;
    });

    let dataReversed = [...datas[datasKey]];
    dataReversed.reverse();

    return dataReversed;
  }

  function pieLegend(datas) {
    datas.data01.map((data) => {
      data.dataKey = data.name;
      data.subText = Math.round(data.value) + " MtCO2";
      return data;
    });

    return datas.data01;
  }

  window.addEventListener("scroll", handleArrowVisibility);

  function handleArrowVisibility() {
    window.scrollY / window.innerHeight > 1
      ? setArrowVisibility("visible")
      : setArrowVisibility("hidden");
  }

  if (!results) return null;

  return (
    <div className="results-page flex-item flex-column">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mission Climat / Résultats</title>
        <meta name="description" content="Résultats complets de votre simulation Mission Climat" />
        <link rel="canonical" href="http://mission-climat.io/licenses" />
      </Helmet>

      <Header />

      <article id="hero-article">
        <div className="flex-item full-width">
          <div className="flex-column">
            <a href="#res-synthese">
              <div className="chapter-selection">
                <img src="/images/results/fiche synthèse - blanc.svg" alt="" />
                <br />
                <span>Synthèse</span>
              </div>
            </a>
          </div>

          <div className="flex-column">
            <a href="#res-emi-fr">
              <div className="chapter-selection">
                <img src="/images/results/nuage CO2 - blanc.svg" alt="" />
                <br />
                <span>Emissions françaises</span>
              </div>
            </a>
          </div>

          <div className="flex-column">
            <a href="#res-emi-world">
              <div className="chapter-selection">
                <img src="/images/results/emission monde - blanc.svg" alt="" />
                <br />
                <span>Emissions mondiales</span>
              </div>
            </a>
          </div>

          <div className="flex-column">
            <a href="#res-impacts">
              <div className="chapter-selection">
                <img src="/images/results/impact - blanc.svg" alt="" />
                <br />
                <span>Impacts</span>
              </div>
            </a>
          </div>
        </div>

        <div className="contribuer-title flex-item flex-column">
          <h1>Résultats Complets</h1>
        </div>

        <div className="contact-white">
          <p>
            Retrouvez sur cette page une synthèse de vos résultats et de nombreux graphiques vous
            permettant de visualiser les conséquences de votre scénario.
          </p>
        </div>

        <section id="res-synthese" className="flex-item flex-column">
          <h1>Synthèse</h1>

          <div className="flex-item flex-column">
            <div id="res-synthese-indicator" className="flex-item">
              <div className="tag-container flex-item flex-column">
                <p className="results-title">Températures</p>
                <div
                  className="results-figure flex-item"
                  style={{ backgroundColor: tempColor(), color: "white" }}
                >
                  +{results.impacts.temperature}°C
                </div>
                <p className="results-legend">
                  Hausse moy. mondiale / 2100 (de {results.impacts.temperatureRange})
                </p>
              </div>
              <div className="tag-container flex-item flex-column">
                <p className="results-title">Évolution émissions</p>
                <div
                  className="results-figure flex-item"
                  style={{ backgroundColor: "#40E0D0", color: "#163E59" }}
                >
                  {results.impacts.reductionEmission2030}
                </div>
                <p className="results-legend">Entre 2020 et 2030</p>
              </div>
            </div>

            <p dangerouslySetInnerHTML={handleInnerHTML(results.impacts.texteSynthese)}></p>

            <div id="res-synthese-buttons" className="flex-item">
              <div title="Copier l'url avec mes paramètres">
                <CopyToClipboard text={results.url} fn={handleClickTracking.bind(null, "copyURL")}>
                  <FontAwesomeIcon icon={faLink} />
                </CopyToClipboard>
              </div>

              <div title="Télécharger le modèle de calcul des données">
                <a
                  href="./2020-04-09_Scenario1.5.xlsx"
                  download
                  onClick={() => handleClickTracking("modelDownloadResults")}
                >
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </div>

              <ResultsSocial
                results={results}
                fillColor="#34244E"
                handleClickTracking={handleClickTracking}
              />
            </div>
          </div>
        </section>
      </article>

      <button id="blinking-results" style={{ visibility: arrowVisibility }}>
        <a href="#hero-article">
          <FontAwesomeIcon icon={faAngleUp} />
        </a>
      </button>

      {/* *************************
       ********************FRANCE
       ************************* */}

      <article id="res-emi-fr" className="flex-item flex-column">
        {/* Titre grande partie / nav */}
        <h1>Emissions françaises</h1>

        {/* Titre sous partie */}
        <div className="res-title-box">
          <h2>Emissions totales</h2>
          <p dangerouslySetInnerHTML={handleInnerHTML(results.emiFrance.intro)}></p>
        </div>

        <ChartContainer
          title={results.emiFrance.total.graph.data.title}
          subtitle={results.emiFrance.total.subtitle}
          graphData={results.emiFrance.total.graph}
          graphType="CompoChart"
          graphText={results.emiFrance.total.text}
          legendData={results.emiFrance.total.graph.graphDatas}
          sourceData={results.emiFrance.total.source}
        />

        <ChartContainer
          title={results.emiFrance.sansRupture.graph.data.title}
          subtitle={results.emiFrance.sansRupture.subtitle}
          graphData={results.emiFrance.sansRupture.graph}
          graphType="AreaChart"
          graphText={results.emiFrance.sansRupture.text}
          legendData={areaLegend(results.emiFrance.sansRupture.graph, "area")}
          sourceData={results.emiFrance.sansRupture.source}
        />

        <ChartContainer
          title={results.emiFrance.avecRupture.graph.data.title}
          subtitle={results.emiFrance.avecRupture.subtitle}
          graphData={results.emiFrance.avecRupture.graph}
          graphType="AreaChart"
          graphText={results.emiFrance.avecRupture.text}
          legendData={areaLegend(results.emiFrance.avecRupture.graph, "area")}
          sourceData={results.emiFrance.avecRupture.source}
        />

        <ChartContainer
          title={results.emiSecteurPie.title}
          subtitle={results.emiSecteurPie.subtitle}
          graphData={results.emiSecteurPie.graph}
          graphType="Sunburst"
          graphText={results.emiSecteurPie.text}
          legendData={pieLegend(results.emiSecteurPie.graph, "area")}
          sourceData={results.emiSecteurPie.source}
        />

        {/* Titre sous partie */}
        <div className="res-title-box">
          <h2>Bâtiments</h2>
          <p dangerouslySetInnerHTML={handleInnerHTML(results.dataFrance.batiment.intro)}></p>
        </div>

        <ChartContainer
          title={results.dataFrance.batiment.perf.graph.data.title}
          subtitle={results.dataFrance.batiment.perf.subtitle}
          graphData={results.dataFrance.batiment.perf.graph}
          graphType="AreaChart"
          graphText={results.dataFrance.batiment.perf.text}
          legendData={areaLegend(results.dataFrance.batiment.perf.graph, "area")}
          sourceData={results.dataFrance.batiment.perf.source}
        />

        <ChartContainer
          title={results.dataFrance.batiment.chauffage.graph.data.title}
          subtitle={results.dataFrance.batiment.chauffage.subtitle}
          graphData={results.dataFrance.batiment.chauffage.graph}
          graphType="AreaChart"
          graphText={results.dataFrance.batiment.chauffage.text}
          legendData={areaLegend(results.dataFrance.batiment.chauffage.graph, "area")}
          sourceData={results.dataFrance.batiment.chauffage.source}
        />

        {/* Titre sous partie */}
        <div className="res-title-box">
          <h2>Transports</h2>
          <p dangerouslySetInnerHTML={handleInnerHTML(results.dataFrance.transports.intro)}></p>
        </div>

        <ChartContainer
          title={results.dataFrance.transports.distance.graph.data.title}
          subtitle={results.dataFrance.transports.distance.subtitle}
          graphData={results.dataFrance.transports.distance.graph}
          graphType="AreaChart"
          graphText={results.dataFrance.transports.distance.text}
          legendData={areaLegend(results.dataFrance.transports.distance.graph, "area")}
          sourceData={results.dataFrance.transports.distance.source}
        />

        <ChartContainer
          title={results.dataFrance.transports.emissions.graph.data.title}
          subtitle={results.dataFrance.transports.emissions.subtitle}
          graphData={results.dataFrance.transports.emissions.graph}
          graphType="AreaChart"
          graphText={results.dataFrance.transports.emissions.text}
          legendData={areaLegend(results.dataFrance.transports.emissions.graph, "area")}
          sourceData={results.dataFrance.transports.emissions.source}
        />

        {/* Titre sous partie */}
        <div className="res-title-box">
          <h2>Agriculture</h2>
          <p dangerouslySetInnerHTML={handleInnerHTML(results.dataFrance.agriculture.intro)}></p>
        </div>

        <ChartContainer
          title={results.dataFrance.agriculture.parcelles.graph.data.title}
          subtitle={results.dataFrance.agriculture.parcelles.subtitle}
          graphData={results.dataFrance.agriculture.parcelles.graph}
          graphType="AreaChart"
          graphText={results.dataFrance.agriculture.parcelles.text}
          legendData={areaLegend(results.dataFrance.agriculture.parcelles.graph, "area")}
          sourceData={results.dataFrance.agriculture.parcelles.source}
        />

        <ChartContainer
          title={results.dataFrance.agriculture.emissions.graph.data.title}
          subtitle={results.dataFrance.agriculture.emissions.subtitle}
          graphData={results.dataFrance.agriculture.emissions.graph}
          graphType="AreaChart"
          graphText={results.dataFrance.agriculture.emissions.text}
          legendData={areaLegend(results.dataFrance.agriculture.emissions.graph, "area")}
          sourceData={results.dataFrance.agriculture.emissions.source}
        />

        {/* Titre sous partie */}
        <div className="res-title-box">
          <h2>Consommation</h2>
          <p dangerouslySetInnerHTML={handleInnerHTML(results.dataFrance.conso.intro)}></p>
        </div>

        <ChartContainer
          title={results.dataFrance.conso.quantites.graph.title}
          subtitle={results.dataFrance.conso.quantites.subtitle}
          graphData={results.dataFrance.conso.quantites.graph}
          graphType="Line"
          graphText={results.dataFrance.conso.quantites.text}
          legendData={areaLegend(results.dataFrance.conso.quantites.graph, "line")}
          sourceData={results.dataFrance.conso.quantites.source}
        />

        <ChartContainer
          title={results.dataFrance.conso.emissions.graph.data.title}
          subtitle={results.dataFrance.conso.emissions.subtitle}
          graphData={results.dataFrance.conso.emissions.graph}
          graphType="AreaChart"
          graphText={results.dataFrance.conso.emissions.text}
          legendData={areaLegend(results.dataFrance.conso.emissions.graph, "area")}
          sourceData={results.dataFrance.conso.emissions.source}
        />

        {/* Titre sous partie */}
        <div className="res-title-box">
          <h2>Energie</h2>
          <p dangerouslySetInnerHTML={handleInnerHTML(results.dataFrance.energie.intro)}></p>
        </div>

        <ChartContainer
          title={results.dataFrance.energie.facteurs.graph.title}
          subtitle={results.dataFrance.energie.facteurs.subtitle}
          graphData={results.dataFrance.energie.facteurs.graph}
          graphType="Line"
          graphText={results.dataFrance.energie.facteurs.text}
          legendData={areaLegend(results.dataFrance.energie.facteurs.graph, "line")}
          sourceData={results.dataFrance.energie.facteurs.source}
        />

        <ChartContainer
          title={results.dataFrance.energie.emissions.graph.data.title}
          subtitle={results.dataFrance.energie.emissions.subtitle}
          graphData={results.dataFrance.energie.emissions.graph}
          graphType="AreaChart"
          graphText={results.dataFrance.energie.emissions.text}
          legendData={areaLegend(results.dataFrance.energie.emissions.graph, "area")}
          sourceData={results.dataFrance.energie.emissions.source}
        />
      </article>

      {/* *************************
       ********************MONDE
       ************************* */}
      <article id="res-emi-world" className="flex-item flex-column">
        {/* Titre grande partie / nav */}
        <h1>Emissions mondiales</h1>

        {/* Titre sous partie */}
        <div className="res-title-box">
          <h2>Emissions totales</h2>
          <p dangerouslySetInnerHTML={handleInnerHTML(results.emiMonde.intro)}></p>
        </div>

        <ChartContainer
          title={results.emiMonde.total.graph.title}
          subtitle={results.emiMonde.total.subtitle}
          graphData={results.emiMonde.total.graph}
          graphType="Line"
          graphText={results.emiMonde.total.text}
          legendData={areaLegend(results.emiMonde.total.graph, "line")}
          sourceData={results.emiMonde.total.source}
        />

        <ChartContainer
          title={results.emiMonde.empreinte.graph.title}
          subtitle={results.emiMonde.empreinte.subtitle}
          graphData={results.emiMonde.empreinte.graph}
          graphType="Line"
          graphText={results.emiMonde.empreinte.text}
          legendData={areaLegend(results.emiMonde.empreinte.graph, "line")}
          sourceData={results.emiMonde.empreinte.source}
        />
      </article>

      <article id="res-impacts" className="flex-item flex-column">
        <h1>Impacts</h1>

        <div className="res-title-box">
          <h2>Températures</h2>
          <p dangerouslySetInnerHTML={handleInnerHTML(results.impacts.temperatures.intro)}></p>
        </div>

        <div className="flex-item flex-column res-emi-fr-container">
          <h3
            dangerouslySetInnerHTML={handleInnerHTML(results.impacts.temperatures.europe.title)}
          ></h3>
          <p
            className="chart-short-desc light-text"
            dangerouslySetInnerHTML={handleInnerHTML(results.impacts.temperatures.europe.subtitle)}
          ></p>
          <div className="flex-item res-chart-container">
            <div className="res-chart">
              <img src={handleImageEurope()} alt="" />
            </div>
            <div className="res-chart-infos flex-item flex-column">
              <p
                className="light-text"
                dangerouslySetInnerHTML={handleInnerHTML(results.impacts.temperatures.europe.text)}
              ></p>
              <div className="res-chart-legend flex-item">
                {mapLegendInfos.map((data, i) => (
                  <div key={i} className="flex-item">
                    <div className="legend-point" style={{ backgroundColor: data[0] }}></div>
                    <div className="light-text">{data[1]}</div>
                  </div>
                ))}
              </div>
              <p
                className="res-chart-source"
                dangerouslySetInnerHTML={handleInnerHTML(
                  results.impacts.temperatures.europe.source,
                )}
              ></p>
            </div>
          </div>
        </div>

        <div className="flex-item flex-column res-emi-fr-container">
          <h3
            dangerouslySetInnerHTML={handleInnerHTML(results.impacts.temperatures.world.title)}
          ></h3>
          <p
            className="chart-short-desc light-text"
            dangerouslySetInnerHTML={handleInnerHTML(results.impacts.temperatures.world.subtitle)}
          ></p>
          <div className="flex-item res-chart-container">
            <div className="res-chart">
              <img src={handleImageWorld()} alt="" />
            </div>
            <div className="res-chart-infos flex-item flex-column">
              <p
                className="light-text"
                dangerouslySetInnerHTML={handleInnerHTML(results.impacts.temperatures.world.text)}
              ></p>
              <div className="res-chart-legend flex-item">
                {mapLegendInfos.map((data, i) => (
                  <div key={i} className="flex-item">
                    <div className="legend-point" style={{ backgroundColor: data[0] }}></div>
                    <div className="light-text">{data[1]}</div>
                  </div>
                ))}
              </div>
              <p
                className="res-chart-source"
                dangerouslySetInnerHTML={handleInnerHTML(results.impacts.temperatures.world.source)}
              ></p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Results;
