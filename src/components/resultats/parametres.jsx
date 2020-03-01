import React from 'react'
import './../../styles/results-paramter.css'

const parametres = (props) => {
    return (
        <div className="param-box">
            <h3>{props.categorie.data.name}</h3>
            <h4>{props.scope}</h4>
            {props.categorie.parameters.map((parameter, i) => {
                return <p>{parameter.data.name}: {parameter.data.value} {parameter.data.unit}</p> 
            })}
        </div>
    )
}

export default parametres
