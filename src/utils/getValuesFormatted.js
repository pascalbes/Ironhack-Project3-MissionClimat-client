export function getValuesFormatted(vals, units) {
  var valsFinal = vals.map((val, i) => {
    if (units[i] === "%") {
      val /= 100;
    }
    var valSt = val.toString();
    var valStFinal = valSt.replace(".", ",");
    return [valStFinal];
  });
  return valsFinal;
}
