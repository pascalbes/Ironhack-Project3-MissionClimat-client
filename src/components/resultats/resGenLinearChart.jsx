import React from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const resGenLinearChart = ({ datas }) => {
  function toolTipContent(e) {
    return (
      <div
        id="area-tooltip"
        className="chart-tooltip flex-item flex-column"
        style={{ backgroundColor: "white" }}
      >
        <h4 style={{ color: "#163e59" }}>Année : {e.label}</h4>
        {e.payload.reverse().map((area, i) => (
          <div key={i} className="flex-item">
            <div
              key={"l" + i}
              className="legend-point"
              style={{ backgroundColor: area.color }}
            ></div>
            <p key={"t" + i} style={{ color: "#163E59" }}>
              {area.name} : {area.value} {datas.yTitle}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ResponsiveContainer height="100%" width="100%">
      <LineChart data={datas.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        {datas.line.map((dat, i) => (
          <Line
            key={i}
            dataKey={dat.dataKey}
            stroke={dat.color}
            dotWidth={10}
            dotHeight={10}
            strokeWidth={5}
          />
        ))}
        <CartesianGrid stroke="#ccc" strokeDasharray="5" />
        <XAxis dataKey="name" stroke="white" />
        <YAxis stroke="white" />
        <Tooltip content={(e) => toolTipContent(e)} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default resGenLinearChart;
