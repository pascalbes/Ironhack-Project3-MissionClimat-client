import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const compoChart = ({ datas }) => {
  const data = datas.data.data;

  function toolTipContent({ payload, label }) {
    var annualEmi = 0;
    payload.forEach((data) => (annualEmi += data.value));
    return (
      <div
        id="area-tooltip"
        className="chart-tooltip flex-item flex-column"
        style={{ backgroundColor: "white", width: "400px" }}
      >
        <h4 style={{ color: "#163e59" }}>Année : {label}</h4>
        {payload.reverse().map((area, i) => (
          <div key={i} className="flex-item">
            <div
              key={"l" + i}
              className="legend-point"
              style={{ backgroundColor: area.color }}
            ></div>
            <p key={"t" + i} style={{ color: "#163E59" }}>
              {area.name} : {area.value} MtCO2
            </p>
          </div>
        ))}
      </div>
    );
  }

  function handleGraphType(data) {
    const props = {
      key: data.dataKey,
      dataKey: data.dataKey,
      stroke: data.color,
    };

    if (data.type === "Area") {
      const fillOpacity = data.color === "#FFFFFF" ? "0" : "1";
      return <Area fillOpacity={fillOpacity} fill={data.color} {...props} />;
    }
    if (data.type === "Line") return <Line {...props} />;
  }

  return (
    <ResponsiveContainer height="100%" width="100%">
      <ComposedChart
        data={data}
        stackOffsetDiverging
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" strokeDasharray="3 3" />
        <XAxis dataKey="name" stroke="white" />
        <YAxis domain={[-100, 0, 1000]} stroke="white" interval="0" />
        <Tooltip content={toolTipContent} />
        {datas.graphDatas.map((data) => handleGraphType(data))}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default compoChart;
