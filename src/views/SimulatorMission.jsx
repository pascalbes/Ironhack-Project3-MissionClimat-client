import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Sunburst from "./../components/simulateur/sunburstChart";

const Container = styled.div`
  width: calc(40% - 10px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    padding: 16px;
    width: 100%;
    background-color: white;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    font-family: "Circular Std";
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    line-height: 28px;
    color: #163e59;
    padding-bottom: 0;
  }
  @media screen and (max-width: 1110px) {
    width: calc(50% - 10px);
  }
  .indicator_box {
    gap: 16px;
  }
  button {
    padding: 0.5em 2em;
    font-size: 1.4em;
  }
  .sunburst_container {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const SimulatorMission = ({ start, onElapsed, results }) => {
  return (
    <Container className="sim-results-box">
      <div style={{ height: "calc(60% - 16px)" }}>
        <h1>Ma mission</h1>
        <div className="flex-item indicator_box">
          <Indicator
            title="Émissions 2020"
            text="750"
            unit="MtCO2"
            //subtitle="Incluent les émissions importées"
            backgroundColor="#40E0D0"
            color="#163E59"
          />
          <Indicator
            title="Objectif 2030"
            text="375"
            unit="MtCO2"
            subtitle=""
            color="white"
            backgroundImage="linear-gradient(to right, rgb(218, 143, 255), rgb(102, 51, 153))"
          />
        </div>
        <Timer start={start} onElapsed={onElapsed} />
        <button className="blue-btn" onClick={() => onElapsed()}>
          Finaliser
        </button>
      </div>
      <div className="sunburst_container">
        <Sunburst datas={results.emiSecteurPie.graph} />
        <p>Répartition des émissions 2020</p>
      </div>
    </Container>
  );
};

const IndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: center;
  .results-figure {
    color: ${(props) => (props.color ? props.color : "grey")};
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : ""};
    background-image: ${(props) =>
      props.backgroundImage ? props.backgroundImage : ""};
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Indicator = ({
  unit,
  title,
  text,
  subtitle,
  backgroundColor,
  color,
  backgroundImage,
}) => {
  return (
    <IndicatorContainer
      backgroundColor={backgroundColor}
      color={color}
      backgroundImage={backgroundImage}
    >
      <p className="results-title">{title}</p>
      <div className="results-figure">
        <p>{text}</p>
        {unit && <p className="figure-unit">{unit}</p>}
      </div>
      <p className="results-legend">{subtitle}</p>
    </IndicatorContainer>
  );
};

const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: center;
  p {
    text-align: center;
  }
  p:last-of-type {
    padding: 6px 12px;
    line-height: 98px;
    font-size: 98px;
    color: white;
    background-color: #db7093;
  }
`;

const Timer = ({ start, onElapsed }) => {
  const [timeRemaining, setTimeRemaining] = useState(5);

  useEffect(() => {
    let timerId = null;

    if (start) {
      if (timeRemaining > 0) {
        timerId = setInterval(() => {
          setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);
      } else {
        onElapsed();
      }
    }

    return () => {
      clearInterval(timerId);
    };
  }, [start, timeRemaining, onElapsed]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <TimerContainer>
      {!start && (
        <p>Le chronomètre sera déclenché dès la première mesure prise !</p>
      )}
      <p>{formatTime(timeRemaining)}</p>
    </TimerContainer>
  );
};

export default SimulatorMission;
