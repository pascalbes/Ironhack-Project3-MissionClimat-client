export function getUrl(values, parameters) {
  var url = window.location.origin + "/simulator/favorites/";
  for (let i = 0; i < parameters.length; i++) {
    var param = parameters[i];
    url += "p" + i + "=";

    if (param.type === "slider") {
      url += values[i][0];
    } else if (param.type === "list") {
      var possibleValues = param.possibleValues.split(", ");
      url += possibleValues.indexOf(values[i][0]);
    }
    if (i < parameters.length - 1) {
      url += "&&";
    }
  }
  return url;
}
