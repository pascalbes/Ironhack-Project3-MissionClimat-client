import React from "react";
import SimulatorCategory from "components/simulateur/SimulatorCategory";
import SimulatorParameterList from "components/simulateur/SimulatorParameterList";
import SimulatorParameterSlider from "components/simulateur/SimulatorParameterSlider";

const SimulatorSettings = ({ categories, results, values, modeExpert, handleValue }) => {
  console.log(values)
  function handleParameterType(cat, param, key, values) {
    // TODO New implementation of handleParameterType
    // issue: param.type needs to be a string eg: "list", "slider"
    // for now the object is as follows: {param.type.list: 1, param.type.slider: 0}

    const props = {
      key: key,
      data: param.data,
      value: values[param.data.index],
      setOneValue: handleValue,
      cat: cat.data,
    };

    const paramComponent = {
      list: <SimulatorParameterList {...props} />,
      slider: <SimulatorParameterSlider {...props} />,
    };

    //gestion mode expert
    if (!param.data.expert || (param.data.expert && modeExpert)) {
      //gestion type de paramètre
      const type = param.type;
      // TODO if param.type resolves to a string, we can access the component with paramComponent[param.type]
      return paramComponent[type.list ? "list" : type.slider ? "slider" : null];
    }
  }

  return categories.map((category, i) => (
    <div key={i} className="sim-cat-params-box">
      <SimulatorCategory
        key={category.data.index}
        data={category.data}
        results={results.jaugeDatas[i]}
      />
      <div key={"p" + i} id={"param-box" + i} className="sim-param-box grid-item">
        {category.parameters.map((param, j) => handleParameterType(category, param, j, values))}
      </div>
    </div>
  ));
};

export default SimulatorSettings;
