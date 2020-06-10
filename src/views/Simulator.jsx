/// BASIC
import React, { useState, useEffect } from "react";
import Header from "../components/partials/Header";
import "./../styles/simulator.css";
import "./../styles/app.css";
import { Helmet } from "react-helmet";

import jsonFile from "../ressources/initialDatas.json";

/// COMPONENTS
import SimCat from "../components/simulateur/simCategorie";
import SimParamList from "../components/simulateur/simParametreList";
import SimParamSlider from "../components/simulateur/simParametreSlide";

import ReactGA from "react-ga";
import api from "../api/APIHandler";
import SimulatorNav from "../components/simulateur/SimulatorNav";
import OptionsBox from "../components/simulateur/OptionsBox";

// Custom Hooks
import { useVisibility } from "../hooks/useVisibility";
import { getUrl } from "../utils/getUrl";
import { getValuesFormatted } from "../utils/getValuesFormatted";
import { getValuesFromUrl } from "../utils/getValuesFromUrl";

import ResultsSample from "../components/simulateur/ResultsSample";
import SimulatorLoader from "../components/simulateur/SimulatorLoader";

const Simulator = (props) => {
  const [values, setValues] = useState(null);
  const [results, setResults] = useState(null); // jsonFile.results
  const [modeExpert, setModeExpert] = useState(false);
  const [showOptions, hideOptions, visibleOptions] = useVisibility(false);

  //Gestion d'une route avec paramêtres spécifiques
  //url test : favorites/p0=100&&p1=0&&p2=56&&p3=99&&p4=30&&p5=18&&p6=52&&p7=35&&p8=57&&p9=2&&p10=80&&p11=82&&p12=3000000&&p13=73&&p14=35&&p15=30&&p16=50&&p17=100&&p18=85&&p19=85&&p20=85&&p21=1&&p22=2

  // Fonction appellée à la première exécution. Permet de :
  //   - créer une spreadsheet si non créée,
  //   - charger les valeurs de la spreadsheet créée si existante, et les afficher,
  //   - charger les valeurs d'un scénario enregistré, dans le cas d'un appel via url spécifique,
  useEffect(() => {
    async function initDatas() {
      var valuesURL = [];
      // cas où une sheet est déjà en dans le localstorage
      const idSheet = localStorage.getItem("idSheet");

      if (idSheet) {
        console.log("SHEET ALREADY CREATED, ID:", idSheet);
        //cas où appel normal de la page simulateur
        if (!props.location.pathname.includes("favorites")) {
          const response = await api.get("/sheet/values/" + idSheet);
          setValues(response.data.values);
        } else {
          // cas où appel via url spécifique /save/p=1&&p=3.....
          const startIndex = props.location.pathname.indexOf("p0=");
          const url = props.location.pathname.substr(startIndex);
          valuesURL = getValuesFromUrl(url);
          setValues(valuesURL);
        }
      } else {
        // cas où aucune sheet n'a été créée

        //création d'une copie de la sheet master
        const response = await api.get("/sheet/");
        const idSheet = response.data.id;
        localStorage.setItem("idSheet", idSheet);
        console.log("SHEET CREATED! ID:", idSheet);

        // cas où appel via url spécifique /save/p=1&&p=3.....
        if (props.location.pathname.includes("favorites")) {
          const startIndex = props.location.pathname.indexOf("p0=");
          const url = props.location.pathname.substr(startIndex);
          valuesURL = getValuesFromUrl(url);
          setValues(valuesURL);
        } else {
          // cas où appel normal (on initialise tout de même les valeurs ici pour le loader)
          setValues(jsonFile.options.vInit);
        }
      }
    }

    initDatas();

    //nettoyage du results de local storage
    if (localStorage.getItem("results")) {
      localStorage.removeItem("results");
    }
  }, [props.location.pathname]);

  //Fonction appellée à chaque actualisation de la variable state "values". Permet d'actualiser les résultats correpondant aux nouvelles values
  useEffect(() => {
    if (values) {
      const idSheet = localStorage.getItem("idSheet");
      const valuesFormatted = getValuesFormatted(values, jsonFile.options.unit);
      if (idSheet) {
        api
          .patch("/sheet/update/" + idSheet, { values: valuesFormatted })
          .then((res) => {
            const resTemp = res.data.results;
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
    ReactGA.event({
      category: "Parameters",
      action: index + ":" + value,
    });
    const newValues = [...values];
    newValues[index][0] = value;
    setValues(newValues);
  }

  function handleParameterType(cat, param, j, values) {
    // TODO New implementation of handleParameterType
    // issue: param.type needs to be a string eg: "list", "slider"
    // for now the object is as follows: {param.type.list: 1, param.type.slider: 0}

    const props = {
      key: j,
      data: param.data,
      value: values[param.data.index],
      setOneValue: setOneValue,
      cat: cat.data,
    };

    const paramComponent = {
      list: <SimParamList {...props} />,
      slider: <SimParamSlider {...props} />,
    };

    //gestion mode expert
    if (!param.data.expert || (param.data.expert && modeExpert)) {
      //gestion type de paramètre
      const type = param.type;
      // TODO if param.type resolves to a string, we can access the component with paramComponent[param.type]
      return paramComponent[type.list ? "list" : type.slider ? "slider" : null];
    }
  }

  function handleInitValues(e) {
    const values = {
      init: "vInit",
      vMin: "vMin",
      "1degre5": "v15",
      bau: "vBaU",
      vMax: "vMax",
    };

    const initMode = e.target.value;
    const valuesTemp = jsonFile.options[values[initMode]];

    const idSheet = localStorage.getItem("idSheet");
    const valuesFormatted = getValuesFormatted(
      valuesTemp,
      jsonFile.options.unit
    );

    // setValues(valuesTemp)
    // setVisibleOptions(false);
    api
      .patch("/sheet/updateonly/" + idSheet, { values: valuesFormatted })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  function handleAreaData(datas) {
    datas.areaDatas = [...datas.areaDatas].reverse();
    return datas;
  }

  const handleModeExpert = (value) => {
    setModeExpert(value);
  };

  if (!values || !results) {
    return <SimulatorLoader />;
  }

  const simulatorCategories = jsonFile.categories.map((cat, i) => (
    <div key={i} className="sim-cat-params-box">
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
  ));

  return (
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

        <section className="sim-container-box">
          <SimulatorNav
            leftNavData={jsonFile.nav[0]}
            rightNavData={jsonFile.nav[1]}
            showOptions={showOptions}
          />

          <div className="sim-main-box">
            {visibleOptions && (
              <OptionsBox
                hideOptions={hideOptions}
                handleInitValues={handleInitValues}
                handleModeExpert={handleModeExpert}
              />
            )}
            {simulatorCategories}
          </div>
        </section>

        <ResultsSample results={results} />
      </div>
    </>
  );
};
export default Simulator;
