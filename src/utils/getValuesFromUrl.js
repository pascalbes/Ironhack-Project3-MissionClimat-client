import jsonFile from "../ressources/initialDatas.json";

//fonction qui récupère en paramètre la string de l'url et la transforme en un array de values au format excel
export function getValuesFromUrl(vals) {
  const paramValPair = vals.split("&&");
  var params = [];
  paramValPair.forEach((p, i) => {
    var param = jsonFile.parameters[i];

    if (param.type === "list") {
      var values = param.possibleValues.split(", ");
      params.push([values[p.split("=")[1]]]);
    } else {
      params.push([p.split("=")[1]]);
    }
  });

  return params;
}
