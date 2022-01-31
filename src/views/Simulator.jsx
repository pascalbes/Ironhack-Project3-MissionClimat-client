/// BASIC
import React, { useState, useEffect } from "react";
import Header from "components/partials/Header";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import jsonFile from "ressources/initialDatas.json";

/// COMPONENTS
import SimulatorSettings from "components/simulateur/SimulatorSettings";
import SimulatorNavigation from "components/simulateur/SimulatorNavigation";
import OptionsBox from "components/simulateur/OptionsBox";
import ResultsSample from "components/simulateur/ResultsSample";
import SimulatorLoader from "components/simulateur/SimulatorLoader";
import Loader from "react-loader-spinner";
import Modal from "components/partials/Modal";

// Custom Hooks
import { useVisibility } from "hooks/useVisibility";

// Utility functions
import { getUrl } from "utils/getUrl";
import { getValuesFormatted } from "utils/getValuesFormatted";
import { getValuesFromUrl } from "utils/getValuesFromUrl";

import api from "api/APIHandler";
import "styles/simulator.css";
import "styles/app.css";
import { matches } from "lodash";

const idSheetString = "idSheet_Mines";

const Simulator = (props) => {
  const [values, setValues] = useState(null);
  const [results, setResults] = useState(null); // jsonFile.results
  const [jsonExportString, setJsonExportString] = useState(null);
  const [modeExpert, setModeExpert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
      const idSheet = localStorage.getItem(idSheetString);

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
        localStorage.setItem(idSheetString, idSheet);
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
      const idSheet = localStorage.getItem(idSheetString);
      const valuesFormatted = getValuesFormatted(values, jsonFile.options.unit);
      if (idSheet) {
        api
          .patch("/sheet/update/" + idSheet, { values: valuesFormatted })
          .then((res) => {
            const resTemp = res.data.results;
            resTemp.url = getUrl(values, jsonFile.parameters);
            //correction des data area pour affichage ok
            handleAreaData(resTemp.emiSecteurGnl);
            setIsLoading(false);
            setResults(resTemp);
          })
          .catch((err) => {
            console.log(err)
            setTimeout(function(){ 
              setIsLoading(false);
            }, 3000);
          });
          
      }
    }
  }, [values]);

  useEffect(() => {
    jsonExport()
  }, [results]);

  function setOneValue(value, index) {
    setIsLoading(true)
    ReactGA.event({
      category: "Parameters",
      action: index + ":" + value,
    });
    setValues((values) => {
      const newValues = [...values];
      newValues[index][0] = value;
      return newValues;
    });
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

    const idSheet = localStorage.getItem(idSheetString);
    const valuesFormatted = getValuesFormatted(valuesTemp, jsonFile.options.unit);

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

  function jsonExport() {
    if (values) {
      // let jsonFileTemp = {...jsonFile};
      let jsonFileTemp = JSON.parse(JSON.stringify(jsonFile))
      let parameters = [];
    
      for (const category of jsonFileTemp.categories) {
        category.parameters.map(parameter => {
          let vInit = parameter.data.value
          delete parameter.data.value
          parameter.data.valueInit = vInit
          parameter.data.value = values[parameter.data.index][0]
          parameter.data.category = category.data
          parameters.push({...parameter.data})
          return parameter
        })
      }

      //parameters
      
      const jsonTemp = {
        parameters: [...parameters],
        categories: [...jsonFileTemp.categories],
        results: results,
        validation: {
          time: Date.now(),
          random: Math.random()
        }
      }

      setJsonExportString(jsonTemp)
    }
  }
  

  const handleModeExpert = (value) => {
    setModeExpert(value);
  };

  if (!values || !results) {
    return <SimulatorLoader />;
  }

  const handleLoader = () => {
    // let loaderType=["Oval", "Rings", "Hearts", "Grid", "Bars", "BallTriangle", "Puff", "TailSpin"]
    // let random = Math.round(Math.random()*loaderType.length);
    return <Loader type={"Oval"} color="#163E59" height={100} width={100} />
  };

  return (
    <>
      {/* <Header /> */}

      
      {isLoading && <div id="sim_loader" className="modal-parent">
        <div id="sim_loader_content" className="modal-content">
           {handleLoader()}
        </div>
      </div>}
      
      <div className="sim-page flex-item">     
        <Helmet>
          <meta charSet="utf-8" />
          <title>Mission Climat / Simulateur</title>
          <meta name="description" content="Simulateur de scénarios climat à l'échelle nationale" />
          <link rel="canonical" href="http://mission-climat.io/simulator/" />
        </Helmet>

        <section className="sim-container-box">
          <SimulatorNavigation
            leftNavData={jsonFile.nav[0]}
            rightNavData={jsonFile.nav[1]}
            showOptions={showOptions}
          />

          <div className="sim-main-box">
            {visibleOptions && (
              <OptionsBox
                modeExpert={modeExpert}
                hideOptions={hideOptions}
                handleInitValues={handleInitValues}
                handleModeExpert={handleModeExpert}
              />
            )}

            <SimulatorSettings
              categories={jsonFile.categories}
              results={results}
              values={values}
              modeExpert={modeExpert}
              handleValue={setOneValue}
            />
          </div>
        </section>

        <ResultsSample results={results} jsonExport={jsonExportString}/>
      </div>
    </>
  );
};
export default Simulator;
