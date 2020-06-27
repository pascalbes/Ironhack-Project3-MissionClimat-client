import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SimulatorInformationBox from "components/simulateur/SimulatorInformationBox";
import SimulatorSlider from "components/simulateur/SimulatorSlider";
import SimulatorTooltip from "components/simulateur/SimulatorTooltip";

import "styles/simParametreSlide.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  margin: {
    height: 0,
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <SimulatorTooltip open={open} enterTouchDelay={0} placement="top" title={value} arrow>
      {children}
    </SimulatorTooltip>
  );
}

const SimParametreSlide = ({ data, value, setOneValue, cat }) => {
  const [componentClass, setComponentClass] = useState("");

  useEffect(() => {
    if (data.expert) {
      setComponentClass("mode-expert param-container-normal");
    } else setComponentClass("param-container-normal");
  }, [data.expert]);

  const unit = data.unit;
  const sliderStep = data.step; //(data.max-data.min)/100
  const classes = useStyles();
  const expanded = componentClass.includes("expanded");

  const marks = [
    {
      value: data.min,
      label: `${data.min}${data.unit}`,
    },
    {
      value: data.max,
      label: `${data.max}${data.unit}`,
    },
  ];

  const handleChange = (event, val) => {
    setOneValue(val, data.index);
  };

  function toggleClass() {
    var componentClassSt = "";
    if (data.expert) componentClassSt += "mode-expert";
    if (componentClass.includes("param-container-normal")) {
      setComponentClass(componentClassSt + " param-container-expanded");
    } else {
      setComponentClass(componentClassSt + " param-container-normal");
    }
  }

  function handleValue() {
    if (unit === "%") {
      return Math.round(value);
    } else {
      return value[0];
    }
  }

  return (
    <div className={componentClass}>
      <div className="param-header flex-item nomarge nopad">
        <h6 className="param-name nomarge">{data.name}</h6>
        <button className="see-more-btn icon-box nomarge nopad" onClick={toggleClass}>
          {!expanded && <FontAwesomeIcon icon={faQuestionCircle} />}
          {expanded && <FontAwesomeIcon icon={faMinusSquare} />}
        </button>
      </div>
      {data.description && <p className="small-param-desc">{data.description}</p>}

      <div className={classes.root}>
        <div className={classes.margin} />
        <SimulatorSlider
          defaultValue={handleValue()}
          aria-labelledby="discrete-slider-always"
          min={data.min}
          max={data.max}
          step={sliderStep}
          marks={marks}
          scale={(x) => x + data.unit}
          ValueLabelComponent={ValueLabelComponent}
          valueLabelDisplay="auto"
          onChangeCommitted={handleChange}
          track="normal"
        />
      </div>

      {expanded && (
        <SimulatorInformationBox style={{ backgroundColor: cat.colorHover }} data={data} />
      )}
    </div>
  );
};

export default SimParametreSlide;
