import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "@material-ui/core/Tooltip";

import "styles/simParametreSlide.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  margin: {
    height: 0,
  },
}));

const MscSlider = withStyles({
  root: {
    color: "#E4E4E4",
    height: 8,
  },
  thumb: {
    height: 16,
    width: 16,
    border: "2px solid #1087a1",
    backgroundColor: "#1087a1",
    marginTop: -5,
    marginLeft: -7,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {},
  track: {
    height: 5,
    borderRadius: 4,
    color: "#C7C7C7",
  },
  rail: {
    height: 5,
    borderRadius: 4,
  },
  markActive: {
    display: "none",
  },
  mark: {
    display: "none",
  },
})(Slider);

const MSCTooltip = withStyles({
  tooltip: {
    color: "white",
    backgroundColor: "#1087a1",
    fontSize: "1.1em",
  },
  arrow: {
    color: "#1087a1",
  },
})(Tooltip);

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <MSCTooltip open={open} enterTouchDelay={0} placement="top" title={value} arrow>
      {children}
    </MSCTooltip>
  );
}

const SimParametreSlide = ({ data, value, setOneValue, cat }) => {
  const [infosClass, setInfoClass] = useState("param-info-container-hidden");
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
      setInfoClass("param-info-container-visible flex-item");
    } else {
      setComponentClass(componentClassSt + " param-container-normal");
      setInfoClass("param-info-container-hidden");
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
        <MscSlider
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

      <div className={infosClass} style={{ backgroundColor: cat.colorHover }}>
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
    </div>
  );
};

export default SimParametreSlide;
