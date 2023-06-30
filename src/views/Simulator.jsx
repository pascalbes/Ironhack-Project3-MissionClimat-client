/// BASIC
import React, { useState, useEffect } from "react";
import Header from "../components/partials/Header";
import "./../styles/simulator.css";
import "./../styles/app.css";
import { Helmet } from "react-helmet";
import ScoreBoard from "../components/resultats/ScoreBoard";
import SimulatorMission from "./SimulatorMission";
import ResultsSimple from "./ResultsSimple";

import jsonFile from "../ressources/initialDatas.json";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

/// COMPONENTS
import AreaChart from "./../components/simulateur/simResultsAreaChart";
import SimNav from "../components/simulateur/simNavBar";
import SimCat from "../components/simulateur/simCategorie";
import SimParamList from "../components/simulateur/simParametreList";
import SimParamSlider from "../components/simulateur/simParametreSlide";
import Sunburst from "./../components/simulateur/sunburstChart";

import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ReactGA from "react-ga";
import api from "../api/APIHandler";

const PurpleSwitch = withStyles({
  switchBase: {
    color: "grey",
    "&$checked": {
      color: "#512072",
    },
    "&$checked + $track": {
      backgroundColor: "#512072",
    },
  },
  checked: {},
  track: {},
})(Switch);

const Simulator = (props) => {
  const [values, setValues] = useState();
  const [startTimer, setStartTimer] = useState(false);
  const [timerElapsed, setTimerElapsed] = useState(false);
  const [results, setResults] = useState(); // jsonFile.results
  const [modeExpert, setModeExpert] = useState(false);
  const [visibleOptions, setVisibleOptions] = useState(false);


  //Gestion d'une route avec paramêtres spécifiques
  //url test : favorites/p0=100&&p1=0&&p2=56&&p3=99&&p4=30&&p5=18&&p6=52&&p7=35&&p8=57&&p9=2&&p10=80&&p11=82&&p12=3000000&&p13=73&&p14=35&&p15=30&&p16=50&&p17=100&&p18=85&&p19=85&&p20=85&&p21=1&&p22=2

  //fonction qui récupère en paramètre la string de l'url et la transforme en un array de values au format excel
  function getValuesFromUrl(vals) {
    const paramValPair = vals.split("&&");
    var params = [];
    paramValPair.forEach((p, i) => {
      var param = jsonFile.parameters[i];

      if (param.type === "list") {
        var values = param.possibleValues.split(", ");
        params.push([values[p.split("=")[1]]]);
      } else {
        params.push([p.split("=")[1]]);
      }
    });

    return params;
  }

  function getValuesFormatted(vals, units) {
    var valsFinal = vals.map((val, i) => {
      if (units[i] === "%") {
        val /= 100;
      }
      var valSt = val.toString();
      var valStFinal = valSt.replace(".", ",");
      return [valStFinal];
    });
    return valsFinal;
  }

  // Fonction appellée à la première exécution. Permet de :
  //   - créer une spreadsheet si non créée,
  //   - charger les valeurs de la spreadsheet créée si existante, et les afficher,
  //   - charger les valeurs d'un scénario enregistré, dans le cas d'un appel via url spécifique,

  useEffect(() => {
    async function initDatas() {
      var res = {};
      var valuesURL = [];

      // cas où une sheet est déjà en dans le localstorage
      if (localStorage.getItem("idSheet")) {
        const idSheet = localStorage.getItem("idSheet");
        console.log("SHEET ALREADY CREATED, ID:", idSheet);

        //cas où appel normal de la page simulateur
        if (!props.location.pathname.includes("favorites")) {
          res = await api.get("/sheet/values/" + idSheet);
          setValues(res.data.values);
        } else {
          // cas où appel via url spécifique /save/p=1&&p=3.....
          valuesURL = getValuesFromUrl(
            props.location.pathname.substr(
              props.location.pathname.indexOf("p0=")
            )
          );
          setValues(valuesURL);
        }
      } else {
        // cas où aucune sheet n'a été créée

        //création d'une copie de la sheet master
        res = await api.get("/sheet/");
        var idSheet = res.data.id;
        localStorage.setItem("idSheet", idSheet);
        console.log("SHEET CREATED! ID:", idSheet);

        // cas où appel via url spécifique /save/p=1&&p=3.....
        if (props.location.pathname.includes("favorites")) {
          valuesURL = getValuesFromUrl(
            props.location.pathname.substr(
              props.location.pathname.indexOf("p0=")
            )
          );
          setValues(valuesURL);
        } else {
          // cas où appel normal (on initialise tout de même les valeurs ici pour le loader)
          setValues(jsonFile.options.vInit);
        }
      }
    }

    initDatas();

    //nettoyage du results de local storage
    if (localStorage.getItem("results")) localStorage.removeItem("results");
  }, []);

  function getUrl(values, parameters) {
    var url = window.location.origin + "/simulator/favorites/";

    for (let i = 0; i < parameters.length; i++) {
      var param = parameters[i];
      url += "p" + i + "=";

      if (param.type === "slider") {
        url += values[i][0];
      } else if (param.type === "list") {
        var possibleValues = param.possibleValues.split(", ");
        url += possibleValues.indexOf(values[i][0]);
      }
      if (i < parameters.length - 1) {
        url += "&&";
      }
    }
    return url;
  }

  //Fonction appellée à chaque actualisation de la variable state "values". Permet d'actualiser les résultats correpondant aux nouvelles values
  useEffect(() => {
    if (values) {
      var idSheet = localStorage.getItem("idSheet");
      var valuesFormatted = getValuesFormatted(values, jsonFile.options.unit);
      if (idSheet) {
        api
          .patch("/sheet/update/" + idSheet, { values: valuesFormatted })
          .then((res) => {
            var resTemp = res.data.results;
            resTemp.url = getUrl(values, jsonFile.parameters);
            //correction des data area pour affichage ok
            handleAreaData(resTemp.emiSecteurGnl);
            setResults(resTemp);
          })
          .catch((err) => console.log(err));
      }
    }
  }, [values]);

  function setOneValue(value, index) {
    if (!startTimer) handleStartTimer();
    ReactGA.event({
      category: "Parameters",
      action: index + ":" + value,
    });
    var newValues = [...values];
    newValues[index][0] = value;
    setValues(newValues);
  }

  function handleParameterType(cat, param, j, values) {
    //gestion mode expert
    if (!param.data.expert || (param.data.expert && modeExpert)) {
      //gestion type de paramètre
      if (param.type.list) {
        return (
          <SimParamList
            key={j}
            data={param.data}
            value={values[param.data.index]}
            setOneValue={setOneValue}
            cat={cat.data}
          />
        );
      } else if (param.type.slider) {
        return (
          <SimParamSlider
            key={j}
            data={param.data}
            value={values[param.data.index]}
            setOneValue={setOneValue}
            cat={cat.data}
          />
        );
      }
    }
  }

  function handleInitValues(e) {
    var initMode = e.target.value;
    var valuesTemp = [];

    if (initMode === "init") {
      valuesTemp = jsonFile.options.vInit;
    } else if (initMode === "vMin") {
      valuesTemp = jsonFile.options.vMin;
    } else if (initMode === "1degre5") {
      valuesTemp = jsonFile.options.v15;
    } else if (initMode === "bau") {
      valuesTemp = jsonFile.options.vBaU;
    } else if (initMode === "vMax") {
      valuesTemp = jsonFile.options.vMax;
    }

    var idSheet = localStorage.getItem("idSheet");
    var valuesFormatted = getValuesFormatted(valuesTemp, jsonFile.options.unit);

    // setValues(valuesTemp)
    // setVisibleOptions(false);
    api
      .patch("/sheet/updateonly/" + idSheet, { values: valuesFormatted })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  function handleClickTracking(type) {
    ReactGA.event({
      category: "Click",
      action: type,
    });
  }

  function showOptions(e) {
    e.preventDefault();
    handleClickTracking("options");
    setVisibleOptions(true);
  }

  function hideOptions(e) {
    e.preventDefault();
    setVisibleOptions(false);
  }

  function handleAreaData(datas) {
    let dataReversed = [...datas.areaDatas];
    dataReversed.reverse();
    datas.areaDatas = [...dataReversed];

    return datas;
  }

  const handleStartTimer = () => {
    if (!startTimer) setStartTimer(true);
  };

  return values && results ? (
    <>
      <Header />
      <div className="sim-page flex-item">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mission Climat / Simulateur</title>
          <meta
            name="description"
            content="Simulateur de scénarios climat à l'échelle nationale"
          />
          <link rel="canonical" href="http://mission-climat.io/simulator/" />
        </Helmet>

        {!timerElapsed && (
          <section className="sim-container-box">
            <div id="sim-nav-box" className="flex-item flex-column">
              <h1>Mes mesures pour 2030</h1>
              <div className="flex-item">
                <div id="sim-nav-fr">
                  <SimNav data={jsonFile.nav[0]} />
                </div>
                <div id="sim-nav-world">
                  <SimNav data={jsonFile.nav[1]} />
                </div>
                <a
                  href=""
                  id="options"
                  className="sim-nav-category flex-item flex-column"
                  onClick={showOptions}
                >
                  <div className="sim-nav-category-icon">
                    <span className="sim-nav-category-icon-helper"></span>
                    <img src="../../images/Options.png"></img>
                  </div>
                </a>
              </div>
            </div>

            <div className="sim-main-box">
              {visibleOptions && (
                <div id="optionsContainer">
                  <div
                    class="optionsContainerBackground"
                    onClick={hideOptions}
                  ></div>
                  <div
                    id="scrollOptions"
                    className=" sim-cat-params-box sticky"
                  >
                    <div class="optionsContainerClose" onClick={hideOptions}>
                      <FontAwesomeIcon icon={faTimes} />
                    </div>
                    <div className="sim-categorie flex-item">
                      <h4 className="sim-categorie-name">Options</h4>
                    </div>
                    <div className="sim-options flex-item flex-column">
                      <div className="sim-option-box">
                        <h6 className="param-name">
                          Initialisation des paramètres
                        </h6>
                        <p>
                          Afin de gagner du temps, vous pouvez initialiser
                          l'ensemble des données à des valeurs spécifiques
                        </p>
                        <form
                          className="sim-option-form flex-item"
                          onChange={(e) => handleInitValues(e)}
                        >
                          {/* <div className="flex-item"><input name="initialisation" value="vMin" type="radio"></input><label>Valeurs Minimales</label></div> */}
                          <div className="flex-item">
                            <input
                              name="initialisation"
                              value="bau"
                              type="radio"
                            ></input>
                            <label>Etude 1,5°C BL Evolution 2019</label>
                          </div>
                          <div className="flex-item">
                            <input
                              name="initialisation"
                              value="1degre5"
                              type="radio"
                            ></input>
                            <label>Un scénario 2°C</label>
                          </div>
                          <div className="flex-item">
                            <input
                              name="initialisation"
                              value="init"
                              type="radio"
                            ></input>
                            <label>Réinitialiser</label>
                          </div>
                          {/* <div className="flex-item"><input name="initialisation" value="vMax" type="radio"></input><label>Valeurs Maximales</label></div> */}
                        </form>
                        <p>
                          Pourquoi l'étude 1,5°C de BL Evolution ne fait pas
                          1.5°C dans le simulateur ? Réponse dans notre{" "}
                          <b>FAQ</b> (page concept)
                        </p>
                      </div>
                      <div className="sim-option-box">
                        <h6 className="param-name">Mode Expert</h6>
                        <p>
                          Le mode expert permet d'accéder à un plus grand nombre
                          de paramètres, pour régler son scénario avec davantage
                          de finesse
                        </p>
                        <FormControlLabel
                          className="nomarge nopad"
                          onChange={(e) => setModeExpert(e.target.checked)}
                          control={<PurpleSwitch />}
                          label="Activer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {jsonFile.categories.map((cat, i) => (
                <div key={i} className="sim-cat-params-box">
                  {/* <div className="hidden bigger" id={"cat"+cat.data.index}>||</div>< */}
                  <SimCat
                    key={cat.data.index}
                    data={cat.data}
                    results={results.jaugeDatas[i]}
                  />
                  <div
                    key={"p" + i}
                    id={"param-box" + i}
                    className="sim-param-box grid-item"
                  >
                    {cat.parameters.map((param, j) =>
                      handleParameterType(cat, param, j, values, setValues)
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {!timerElapsed && (
          <SimulatorMission start={startTimer} onElapsed={() => setTimerElapsed(true)} results={results}/>
        )}
        {timerElapsed && <ResultsSimple results={results} />}
        {timerElapsed && <ScoreBoard results={results} />}
      </div>
    </>
  ) : (
    <div id="loader">
      <Loader type="BallTriangle" color="white" height={100} width={100} />
      <div className="hidden">||</div>
      <h3 style={{ color: "#7fffd4" }}>Vous avez 3 minutes pour remplir votre mission</h3>
      <h4 className="light-text">
        (dans un instant)
      </h4>
    </div>
  );
};





export default Simulator;
