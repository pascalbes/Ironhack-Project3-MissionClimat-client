import React from 'react'


import { generateLibTree } from 'nivo-generators'
import { Bubble } from 'nivo'


const simResultsRepartitionSecteur = () => {


    const commonProperties = {
        width: 500,
        height: 400,
        root:
            {
                "name": "total",
                "color": "hsl(299, 28%, 43%)",
                "children": [
                    {
                        "name": "Energie : Intensité carbone de l'énergie",
                        "color": "blue",
                        "loc": 17,
                    },
                    {
                        "name": "Logement",
                        "color": "blue",
                        "loc": 150,
                        "children": [
                            {
                                "name": "Rénovation de logement",
                                "color": "green",
                                "loc": 20
                            },
                            {
                                "name": "Conversion chauffage au gaz",
                                "color": "green",
                                "loc": 30
                            },
                            {
                                "name": "% de gaz renouvelable",
                                "color": "green",
                                "loc": 15
                            },
                            {
                                "name": "Conversion chauffage au fioul",
                                "color": "green",
                                "loc": 40
                            },
                            {
                                "name": "Surface chauffée par personne",
                                // "color": "green",
                                "loc": 25
                            },
                            {
                                "name": "Température moyenne des logements",
                                "color": "green",
                                "loc": 10
                            },
                            {
                                "name": "Consommation d'électricité par personne",
                                "color": "green",
                                "loc": 10
                            },
                        ]
                        
                    },
                    {
                        "name": "Transport de personnes",
                        "color": "blue",
                        "loc": 15,
                        "children": [
                            {
                                "name": "Distance parcourue en voiture",
                                "color": "green",
                                "loc": 4
                            },
                            {
                                "name": "Nombre de passagers par véhicules",
                                "color": "green",
                                "loc": 2
                            },
                            {
                                "name": "Remplacement véhicules thermiques / TFE",
                                "color": "green",
                                "loc": 5
                            },
                            {
                                "name": "% de conducteurs pratiquants l'éco-conduite en 2030",
                                "color": "green",
                                "loc": 1
                            },
                            {
                                "name": "Nombre de vols aériens par an",
                                "color": "green",
                                "loc": 3
                            },
                        ]
                    },
                    {
                        "name": "Transport de marchandises",
                        "color": "blue",
                        "loc": 160,
                        "children": [
                            {
                                "name": "% de véhicules thermiques remplacés par des véhicules à TFE",
                                "color": "green",
                                "loc": 90
                            },
                            {
                                "name": "Quantité de marchandises.km transportées",
                                "color": "green",
                                "loc": 70
                            }
                    
                        ]
                    },
                    {
                        "name": "Industrie",
                        "color": "blue",
                        "loc": 16,
                        "children": [
                            {
                                "name": "Efficacité énergétique",
                                "color": "green",
                                "loc": 4
                            },
                            {
                                "name": "Récupération d'énergie",
                                "color": "green",
                                "loc": 7
                            },
                            {
                                "name": "évolution du PIB",
                                "color": "green",
                                "loc": 5
                            }
                    
                        ]
                    },
                    {
                        "name": "Agriculture et Alimentation",
                        "color": "blue",
                        "loc": 45,
                        "children": [
                            {
                                "name": "% de consommation de viande",
                                "color": "green",
                                "loc": 15
                            },
                            {
                                "name": "Exploitations agricoles écologiques",
                                "color": "green",
                                "loc": 10
                            },
                            {
                                "name":"Conversion à l'afforestation",
                                "color": "green",
                                "loc": 20
                            }
                        ]
                    },
                    {
                        "name": "Consommation et service",
                        "color": "blue",
                        "loc": 160,
                        "children": [
                            {
                                "name": "Services publics",
                                "color": "green",
                                "loc": 40
                            },
                            {
                                "name": "Quantité de biens informatiques et Hifi",
                                "color": "green",
                                "loc": 60
                            },
                            {
                                "name":"Quantité de biens textiles",
                                "color": "green",
                                "loc": 50
                            }
                        ]
                    },
                ]
        },
        identity: 'name',
        value: 'loc',
        label: 'name',
        labelSkipRadius: 16,
    }
    
    return (
        <div>
            
      <Bubble
            {...commonProperties}
            tooltip={({ id, value, color }) => (
                <strong style={{ color }}>
                    {id}: {value}
                </strong>
            )}
            labelSkipRadius={3}
            theme={{
                tooltip: {
                    container: {
                        background: 'white',
                    },
                },
            }}
            
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            identity="name"
            value="loc"
            // colors={{ scheme: 'blues' }}
            // colorBy="name"
            padding={6}
            // labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
            borderWidth={2}
            // borderColor={{ from: 'color' }}
            // defs={[
            //     {
            //         id: 'lines',
            //         type: 'patternLines',
            //         background: 'none',
            //         color: 'inherit',
            //         rotation: -45,
            //         lineWidth: 5,
            //         spacing: 8
            //     }
            // ]}
            fill={[ { match: { depth: 1 }, id: 'lines' } ]}
            animate={true}
            motionStiffness={90}
            motionDamping={12}
        />
        </div>
    )
}

export default simResultsRepartitionSecteur
