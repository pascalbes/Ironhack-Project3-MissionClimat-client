import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SimulatorResultsAreaChart = ({ datas, xOffset, yOffset }) => {
  const data = datas.data.data;

  function toolTipContent({ payload, label }) {
    var annualEmi = 0;
    payload.forEach((data) => (annualEmi += data.value));
    return (
      <div
        id="area-tooltip"
        className="chart-tooltip flex-item flex-column"
        style={{ backgroundColor: "white" }}
      >
        <h4 style={{ color: "#163e59" }}>
          Année : {label} / {Math.round(annualEmi)} {datas.data.yTitle}
        </h4>
        {payload.reverse().map((area, i) => (
          <div key={i} className="flex-item">
            <div
              key={"l" + i}
              className="legend-point"
              style={{ backgroundColor: area.color }}
            ></div>
            <p key={"t" + i} style={{ color: "#163E59" }}>
              {area.name} : {area.value} {datas.data.yTitle}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <ResponsiveContainer height="100%" width="100%">
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="white" />
        <YAxis stroke="white" />
        <Tooltip content={toolTipContent} position={{ x: xOffset, y: yOffset }} />
        {datas.areaDatas.map((area, i) => (
          <Area
            key={i}
            fillOpacity="1"
            dataKey={area.dataKey}
            stackId="1"
            stroke={area.color}
            fill={area.color}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SimulatorResultsAreaChart;
