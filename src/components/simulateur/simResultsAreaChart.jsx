import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const simResultsAreaChart = (props) => {

    
const data = [
  {
        name: '2010', 
        Energie: 12, 
        Logement: 57, 
        "Transport de personnes": 23, 
        "Transport de marchandises": 88,
        Industrie: 24,        
        "Agriculture et Alimentation": 68,
        "Consommation et service": 88
  },
  {
        name: '2015', 
        Energie: 13.24896964, 
        Logement: 72.74804906, 
        "Transport de personnes": 20.79017833, 
        "Transport de marchandises": 102.0161185,
        Industrie: 21.69409912,
        "Agriculture et Alimentation": 61.46661418,
        "Consommation et service": 102.0161185
  },
  {
        name: '2020', 
        Energie: 14.62793304, 
        Logement: 92.84699373, 
        "Transport de personnes": 18.79267456, 
        "Transport de marchandises": 118.2646414,
        Industrie: 19.60974737,
        "Agriculture et Alimentation": 55.56095087,
        "Consommation et service": 118.2646414
  },
  {
        name: '2025', 
        Energie: 16.15042006, 
        Logement: 118.4989062, 
        "Transport de personnes": 16.98708936, 
        "Transport de marchandises": 137.1011327,
        Industrie: 17.72565846,
        "Agriculture et Alimentation": 50.22269898,
        "Consommation et service": 137.1011327
  },
  {
        name: '2030', 
        Energie: 17.83136875, 
        Logement: 151.2379692, 
        "Transport de personnes": 15.35498335, 
        "Transport de marchandises": 158.9377887,
        Industrie: 16.02259132,
        "Agriculture et Alimentation": 45.39734208,
        "Consommation et service": 158.9377887
  }
];



    return (
        <div>
            <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Energie" stackId="1" stroke="#0047AB" fill="#0047AB" />
        <Area type="monotone" dataKey="Logement" stackId="1" stroke="#4F86F7" fill="#4F86F7" />
        <Area type="monotone" dataKey="Transport de personnes" stackId="1" stroke="#0067A5" fill="#0067A5" />
        <Area type="monotone" dataKey="Transport de marchandises" stackId="1" stroke="#A1CAF1" fill="#A1CAF1" />
        <Area type="monotone" dataKey="Industrie" stackId="1" stroke="#002366" fill="#002366" />
        <Area type="monotone" dataKey="Agriculture et Alimentation" stackId="1" stroke="#b9bad3" fill=" #b9bad3" />
        <Area type="monotone" dataKey="Consommation et Service" stackId="1" stroke="#326684" fill="#326684" />
        <Legend/>
      </AreaChart>
        </div>
    )
}

export default simResultsAreaChart
