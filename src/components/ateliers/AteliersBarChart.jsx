import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ReferenceLine,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { eq } from "lodash";

const findI = (value, array) => {
  let diffs = array.map(a=>Math.abs(a-value))
  return array[diffs.indexOf(Math.min(...diffs))]
}

const AteliersBarChart = ({ datas, color, color2, med, eqType, mean }) => {

//TODO
//   function toolTipContent({ payload, label }) {
//     return ();
//   }

console.log("'------------------------'")
console.log(datas.name)
console.log(datas.data)
console.log(med, eqType)


const min=datas.min
const max=datas.max
let step  = null;
step = datas.step
const uniqueKey = slugify(datas.name)

let values = [min];
let i=0;

while (values[i] < max) {
  i++
  values.push(min + i*step)
}

const eq1 = findI(med - eqType, values)
const eq2 = findI(med + eqType, values)
const medClosest = findI(med, values)
const meanClosest = findI(mean, values)



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
  let values = [min];
  let i=0;

  while (values[i] < max) {
    i++
    values.push(min + i*step)
  }

  let barDatas = [];

  //2. Build the expected array
  values.map((value, i, self) => {
    let nbValues = data.filter(v => v > value - step/2 && v < value + step /2).length
    // if (i==self.length-1) {nbValues += datas.data.filter(v => v === value + step /2).length}
    barDatas.push({
      "value": value,
      "nb": nbValues
    })
  })
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
          <stop offset="5%" stopColor={color2} stopOpacity={1}/>
          <stop offset="95%" stopColor={color2} stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="value" stroke="#BDBFC5" />
        <YAxis stroke="#BDBFC5" />
        {/* <Tooltip content={toolTipContent} position={{ x: xOffset, y: yOffset }} /> */}
        <Tooltip />
        
        <Bar
          type="basis"
          fillOpacity="1"
          dataKey="nb"
          stroke="none"
          // fill="url(#gradient)"
          fill={handleFill(uniqueKey)}
        />
        <ReferenceLine 
          segment={[{x: eq1,y: 0},{x: eq1,y: 2}]}
          stroke="rgb(176, 224, 230)" strokeWidth={3} strokeDasharray="5 5" />
        <ReferenceLine x={medClosest} stroke="rgb(64, 224, 208)" strokeWidth={5} strokeDasharray="5 5"/>
        <ReferenceLine 
          segment={[{x: eq2,y: 0},{x: eq2,y: 2}]}
          stroke="rgb(176, 224, 230)" strokeWidth={3} strokeDasharray="5 5" />
        {/* <ReferenceLine x={med2} stroke="red" strokeWidth={1} strokeDasharray="5 5"/> */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default AteliersBarChart;

