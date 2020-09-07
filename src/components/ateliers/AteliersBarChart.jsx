import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";



const AteliersBarChart = ({ datas, color }) => {

//TODO
//   function toolTipContent({ payload, label }) {
//     return ();
//   }

console.log("'------------------------'")
console.log(color)

const min=datas.min
const max=datas.max
const step=datas.step
const uniqueKey = slugify(datas.name)

function slugify(text)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function handleData(data) {

  //1. Build an array with all values possible 
  let values = [min + step / 2];
  let i=0;

  while (values[i] < max - step) {
    i++
    values.push(min + step / 2 + i*step)
  }

  let barDatas = [];

  //2. Build the expected array
  values.map((value, i, self) => {
    let nbValues = data.filter(v => v >= value - step/2 && v < value + step /2).length
    if (i==self.length-1) {nbValues += datas.data.filter(v => v === value + step /2).length}
    barDatas.push({
      "value": value,
      "nb": nbValues
    })
  })

  console.log(barDatas)

  return barDatas
  
  }

  function handleFill(uniqueKey) {
    return `url(#${uniqueKey})`
  }


  return (
    <ResponsiveContainer height="100%" width="100%">
      <BarChart data={handleData(datas.data)}>
        <defs>
          <linearGradient id={uniqueKey} x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={color} stopOpacity={1}/>
          <stop offset="95%" stopColor={color} stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="value" stroke="#BDBFC5" />
        <YAxis stroke="#BDBFC5" />
        {/* <Tooltip content={toolTipContent} position={{ x: xOffset, y: yOffset }} /> */}
        <Tooltip />
        <Bar
          type="basis"
          strokeWidth={step}
          fillOpacity="1"
          dataKey="nb"
          stroke="none"
          // fill="url(#gradient)"
          fill={handleFill(uniqueKey)}
          />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AteliersBarChart;
