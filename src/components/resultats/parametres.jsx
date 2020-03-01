import React from 'react'
import './../../styles/results-paramter.css'
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const parametres = (props) => {
    return (
        <div className="param-box light">
            <div className="param-box-title flex-item">
                {props.scope==="Émissions nationales" ? <FontAwesomeIcon className="right-btn" icon={faFlag}/> : <FontAwesomeIcon className="right-btn" icon={faGlobeAmericas}/>}
                <h4>{props.categorie.data.name}</h4>
            </div>
            {props.categorie.parameters.map((parameter, i) => {
                return <p key={i}>{parameter.data.name} : {parameter.data.value} {parameter.data.unit}</p> 
            })}
        </div>
    )
}

export default parametres
