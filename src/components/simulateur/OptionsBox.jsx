import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const OptionsBox = ({ hideOptions, modeExpert, handleInitValues, handleModeExpert }) => {
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

  return (
    <div id="optionsContainer">
      <div className="optionsContainerBackground" onClick={hideOptions}></div>
      <div id="scrollOptions" className=" sim-cat-params-box sticky">
        <div class="optionsContainerClose" onClick={hideOptions}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="sim-categorie flex-item">
          <h4 className="sim-categorie-name">Options</h4>
        </div>
        <div className="sim-options flex-item flex-column">
          <div className="sim-option-box">
            <h6 className="param-name">Initialisation des paramètres</h6>
            <p>
              Afin de gagner du temps, vous pouvez initialiser l'ensemble des données à des valeurs
              spécifiques
            </p>
            <form className="sim-option-form flex-item" onChange={(e) => handleInitValues(e)}>
              <div className="flex-item">
                <input name="initialisation" value="bau" type="radio"></input>
                <label>Etude 1,5°C BL Evolution 2019</label>
              </div>
              <div className="flex-item">
                <input name="initialisation" value="1degre5" type="radio"></input>
                <label>Un scénario 2°C</label>
              </div>
              <div className="flex-item">
                <input name="initialisation" value="init" type="radio"></input>
                <label>Réinitialiser</label>
              </div>
            </form>
            <p>
              Pourquoi l'étude 1,5°C de BL Evolution ne fait pas 1.5°C dans le simulateur ? Réponse
              dans notre <b>FAQ</b> (page concept)
            </p>
          </div>
          <div className="sim-option-box">
            <h6 className="param-name">Mode Expert</h6>
            <p>
              Le mode expert permet d'accéder à un plus grand nombre de paramètres, pour régler son
              scénario avec davantage de finesse
            </p>
            <FormControlLabel
              className="nomarge nopad"
              onChange={(e) => handleModeExpert(e.target.checked)}
              control={<PurpleSwitch />}
              label="Activer"
              checked={modeExpert}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionsBox;
