const parametersInfos = [{id:"Rénovation thermique", index:0, initialValue:10},{id:"Chauffages gaz", index:1, initialValue:20},{id:"Chauffages fioul", index:2, initialValue:50},{id:"Surface chauffée", index:3, initialValue:40},{id:"Température chauffage", index:4, initialValue:21},{id:"Consommation d'électricité", index:5, initialValue:200},{id:"Distance parcourue en voiture", index:6, initialValue:110,},{id:"Nombre de passagers par véhicule", index:7, initialValue:1.2},{id:"Remplacement des véhicules particuliers", index:8, initialValue:20},{id:"Eco-conduite", index:9, initialValue:50},{id:"Transport aérien", index:10, initialValue:100},{id:"Marchandises transportées", index:11, initialValue:90},{id:"Consommation de viande", index:12, initialValue:90},{id:"Exploitations agricoles exemplaires", index:13, initialValue:10},{id:"Gain d'efficacité des pratiques agricoles par an", index:14, initialValue:2},{id:"Surfaces afforestées", index:15, initialValue:10},{id:"Services", index:16, initialValue:110,},{id:"Services (efficacité)", index:17, initialValue:2},{id:"Biens informatiques", index:18, initialValue:150},{id:"Biens informatiques (efficacité)", index:19, initialValue:2},{id:"Textile", index:20, initialValue:100},{id:"Textile (efficacité)", index:21, initialValue:2},{id:"Autres biens manufacturés", index:22, initialValue:100},{id:"Autres biens manufacturés (efficacité)", index:23, initialValue:2},{id:"Intensité carbone de l'électricité", index:24, initialValue:0.07},{id:"Intensité carbone du gaz", index:25, initialValue:0.2}];

function average(data){
    var sum = data.reduce(function(sum, value){
      return sum + value;
    }, 0);
    var avg = sum / data.length;
    return avg;
  }

  function median(values){
    if(values.length ===0) return 0;
    values.sort(function(a,b){
      return a-b;
    });
    var half = Math.floor(values.length / 2);
    if (values.length % 2)
      return values[half];
  
    return (values[half - 1] + values[half]) / 2.0;
  }

  export function getUrl(datas) {

    let parameters = datas.reduce((a,v) => [...v.parameters,...a] ,[])

    let means = [];
    let meds = [];

    parametersInfos.map(paramInfo => {
      const paramFound = parameters.find(p => p.name === paramInfo.id);
      if (paramFound) {
        means.push(average(paramFound.data));
        meds.push(median(paramFound.data));
      }
      else {
        means.push(paramInfo.initialValue);
        meds.push(paramInfo.initialValue);
      } 
    })

    let urlMeans = window.location.origin + "/simulator/favorites/";
    let urlMeds = window.location.origin + "/simulator/favorites/";

    means.map((mean, i) => {
        urlMeans += "p" + i + "=" + mean
        if (i < means.length-1) {urlMeans+="&&"}

        urlMeds += "p" + i + "=" + meds[i]
        if (i < meds.length-1) {urlMeds+="&&"}
    })

    return {urlMeans, urlMeds}

}
