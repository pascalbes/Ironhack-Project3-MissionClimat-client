import React from "react";
import { PieChart, Pie, Cell, Label, Tooltip, ResponsiveContainer } from "recharts";

const SunburstChart = React.forwardRef(({ datas }, ref) => {
  function toolTipContent(e) {
    return e.payload[0] ? (
      <p className="chart-tooltip" style={{ backgroundColor: "white", color: "#163E59" }}>
        {e.payload[0].name} : {Math.round(e.payload[0].value)} MtCO2
      </p>
    ) : (
      ""
    );
  }

  // e.payload[0].payload.payload.color

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie data={datas.data01} dataKey="value" outerRadius={"60%"} stroke="none">
          {datas.data01.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Pie
          data={datas.data02}
          dataKey="value"
          innerRadius={"70%"}
          outerRadius={"100%"}
          stroke="none"
        >
          {datas.data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          <Label dataKey="value" position="outside" />
        </Pie>
        <Tooltip content={(e) => toolTipContent(e)} />
      </PieChart>
    </ResponsiveContainer>
  );
});

export default SunburstChart;
