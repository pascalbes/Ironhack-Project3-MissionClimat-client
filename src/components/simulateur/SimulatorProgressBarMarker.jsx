import React from "react";

const SimulatorProgressBarMarker = ({ backgroundColor, position }) => {
  return (
    <div
      className="marker1"
      style={{
        height: "18.5px",
        width: "2px",
        position: "absolute",
        left: `${position}`,
        backgroundColor,
      }}
    ></div>
  );
};

export default SimulatorProgressBarMarker;
