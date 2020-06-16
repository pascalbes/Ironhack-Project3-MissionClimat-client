import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SimulatorBarChart = ({ datas }) => {
  // const data = [
  //     {
  //         name: '2020', secteur1: "20", secteur2: "10", secteur3: "10",secteur4: "10",secteur5: "10", secteur6: "10", secteur7: "10"
  //     },
  //     {
  //         name: '2030', secteur1: "10", secteur2: "5", secteur3: "7",secteur4: "8",secteur5: "4", secteur6: "2", secteur7: "3"
  //     }
  //   ];

  const data = datas.data.data.filter((object) => object.name == "2020" || object.name === "2030");

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 10,
          left: 10,
          bottom: 5,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        {/* <YAxis /> */}
        {/* <Tooltip /> */}
        {/* <Legend /> */}

        {datas.areaDatas.map((bar) => (
          <Bar dataKey={bar.dataKey} barSize={25} stackId="a" fill={bar.color} />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimulatorBarChart;
