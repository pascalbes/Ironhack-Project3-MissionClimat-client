import React from "react";
import SimulatorProgressBarMarker from "./SimulatorProgressBarMarker";

function getGradient(colorA, colorB) {
  return `linear-gradient(to right, ${colorA}, ${colorB})`;
}

const SimulatorProgressBar = ({ results }) => {
  const data = results[0];
  const max = data.ranges[2];
  const m1 = (data.markers[0] / max) * 100 - 0.25 + "%";
  const m2 = (data.markers[1] / max) * 100 - 0.25 + "%";
  const jaugeStart = -(data.markers[1] / max) * 100 + 0.5 + "%";
  const value = (data.measures[0] / max) * 100 + "%";

  function handleColor() {
    const measures = data.measures[0];
    const marker0 = data.markers[0];
    const marker1 = data.markers[1];
    const marker2 = data.markers[2];

    if (measures <= marker0) {
      return getGradient("#7FFFD4", "#77D9B5");
    } else if (measures <= marker1) {
      return getGradient("#F2F230", "#FFC53A");
    } else if (measures <= marker2) {
      return getGradient("#FFB8B8", "#DB7093");
    } else {
      return getGradient("#DA8FFF", "#663399");
    }
  }

  function handleClass() {
    return data.measures[0] >= data.ranges[2] - 15 ? "jauge-int-max" : "jauge-int";
  }

  return (
    <div
      className="jauge-ext"
      style={{
        height: "20px",
        width: "100%",
        backgroundColor: "white",
        border: "#C7C7C7 solid 1px",
        borderRadius: "10px",
        position: "relative",
      }}
    >
      <SimulatorProgressBarMarker backgroundColor="#0b8c85" position={m1} />
      <SimulatorProgressBarMarker backgroundColor="#ff6868" position={m2} />
      <div
        className={handleClass()}
        style={{
          height: "18.5px",
          width: `${value}`,
          position: "absolute",
          left: `${jaugeStart}px`,
          transition: "1s",
          backgroundImage: handleColor(),
        }}
      ></div>
    </div>
  );
};

export default SimulatorProgressBar;
